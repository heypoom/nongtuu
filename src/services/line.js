import MemoryService from "feathers-memory"
import request from "request-promise-native"

// API "Secrets". Feel free to steal them. I don't give a single F.
// TODO: Move that to Environment Variables, but I ain't got no time

const CHANNEL_TOKEN = "UuQd6RmSRQppG/0g6xc4Xh9GVigTR0/CqBV7afFJpYbRoMp0TGP00T1UNbEZmeDgM5VMEYF+ucWkGJwHwVoQP0cGzhAeg0RCToj8c2Pk2qCZI1/wkh6tTWlOtt9uFIMwKiqj5N/3bTCjfII3HQki3QdB04t89/1O/w1cDnyilFU="
const TEST_USER_ID = "U33084216cc1a00f7aa27632bec769356"

// SDK for interfacing with the LINE Messaging API
// NOTE: Why the heck are the Official SDKs deprecated? Like, seriously dude? -.-

const defaultAction = [{
  type: "postback",
  label: "หนี้บัตรเครดิต",
  data: "action=buy&itemid=123"
}, {
  type: "postback",
  label: "กฎหมายที่ดิน",
  data: "action=add&itemid=123"
}]

const defaultImage = `https://images.unsplash.com/reserve/uvRBqDAfQfaGPJiI6lVS_R0001899.jpg?dpr=1&auto=format&fit=crop&w=1500&h=994&q=80&cs=tinysrgb&crop=`

class LineMessaging {

  constructor(token) {
    this.token = token;
  }

  post(endpoint, body) {
    request({
      method: "POST",
      uri: `https://api.line.me/v2/bot/${endpoint}`,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    }).auth(null, null, true, this.token)
  }

  sendMessage(message) {
    this.post("message/push", {
      to: TEST_USER_ID,
      messages: [message]
    })
  }

  reply(message, to) {
    this.post("message/reply", {
      replyToken: to,
      messages: [message]
    })
  }

  sendText(message) {
    this.sendMessage({
      type: "text",
      text: `${message}`
    })
  }

  sendTemplate(title, text, alt = "This is an alt text", thumbnail = defaultImage, actions = defaultAction) {
    this.sendMessage({
      type: "template",
      altText: alt,
      template: {
        type: "buttons",
        thumbnailImageUrl: thumbnail,
        title,
        text,
        actions
      }
    })
  }

}

const scripts = {
  "main": {}
}

class ChatStage extends MemoryService {
  // TODO: We need to store user's state in there.
  //       I'm thinking of Redis, but fuck it I'm tired.
  //       It's a hackathon, so yeah.
}

const bot = new LineMessaging(CHANNEL_TOKEN)

class LineService {

  setup(app) {
    this.app = app
  }

  find = () => Promise.resolve({
    data: "LINE Integration Service is Ready!"
  })

  get = message => {
    // bot.sendTemplate(message, "Please Select an option...")
    bot.sendTemplate(`สวัสดีค่ะ มีอะไรจะให้ปรึกษามั้ยคะ`, `...`)
    return Promise.resolve({data: "200 OK", time: new Date().toLocaleString()})
  }

  // get = () => Promise.resolve({data: "Hello World"})
}

class WebHookHandler {
  find = () => Promise.resolve({data: "OK"})

  create = (data = {}) => {
    console.log("Incoming POST request:", data)
    bot.sendText(`Incoming Msg: ${JSON.stringify(data)}`)

    if (data.events) {
      data.events.forEach(msg => {
        if (msg.type === "message") {
          if (msg.message.text.indexOf("สวัสดี") > -1) {
            bot.sendText("Hello World")
            bot.sendTemplate("สวัสดีค่ะ มีอะไรให้ปรึกษาไหมคะ?",
              "นี่เป็นเคสที่พบบ่อย สามารถเลือกได้ทันทีค่ะ",
              "Alt Message",
              "https://i.imgur.com/s4c7YSH.jpg",
              [{
                type: "postback",
                label: "หนี้บัตรเครดิต",
                data: "action=nomoney"
              }, {
                type: "postback",
                label: "โดนตำรวจยึดรถ",
                data: "action=policetookmycar"
              }, {
                type: "postback",
                label: "ถูกแอบถ่ายลงโซเชียล",
                data: "action=paparazzis"
              }]
            )
          }

          if (msg.message.text === "HelloReply") {
            bot.reply({type: "text", text: "Hello Man!"}, msg.message.replyToken)
          }
        }
      })
    }

    return Promise.resolve({data: "OK v1"})
  }
}

export default function debug() {
  this.use("line", new LineService())
  this.use("linehook", new WebHookHandler(), (req, res, next) => {
    res.status(200)
    next()
  })
}
