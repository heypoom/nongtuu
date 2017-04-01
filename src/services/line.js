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

  sendMessage(message, to = TEST_USER_ID) {
    this.post("message/push", {to, messages: [message]})
  }

  sendText(message, to) {
    this.sendMessage({
      type: "text",
      text: `${message}`
    }, to)
  }

  sendTemplate({
    title, text, alt = "This is an alt text", thumbnail = defaultImage,
    actions = defaultAction
  }, to) {
    this.sendMessage({
      type: "template",
      altText: alt,
      template: {
        type: "buttons",
        thumbnailImageUrl: thumbnail,
        title,
        text,
        actions
      },
    }, to)
  }

}

const scripts = {
  "main": {}
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

class ChatStage extends MemoryService {
  // TODO: We need to store user's state in there.
  //       I'm thinking of Redis, but fuck it I'm tired.
  //       It's a hackathon, so yeah.
}

const initChat = id => {
  bot.sendText("Hello World", id)
  bot.sendTemplate({
    title: "สวัสดีค่ะ มีอะไรให้ปรึกษาไหมคะ?",
    text: "นี่เป็นเคสที่พบบ่อย สามารถเลือกได้ทันทีค่ะ",
    alt: "Alt Message",
    thumbnail: "https://i.imgur.com/s4c7YSH.jpg",
    actions: [{
      type: "postback",
      label: "หนี้บัตรเครดิต",
      data: "nomoney"
    }, {
      type: "postback",
      label: "โดนตำรวจยึดรถ",
      data: "policetookmycar"
    }, {
      type: "postback",
      label: "ถูกแอบถ่ายลงโซเชียล",
      data: "paparazzis"
    }]
  }, id)
}

const C1_R1 = `1.ไปตามศาลนัด
2.คุยกับทนายของธนาคารเจ้าของบัตร เพื่อดูข้อเสนอของธนาคาร
3.ถ้าไม่ไหว ลองต่อรองเพื่อเลื่อนวันชำระ
4.หลังจากนั้นทางศาลจะให้เซ็นสัญญาเลื่อนวันนัดคดี แล้วกลับบ้านได้!`

const C1_R2 = `1.เตรียมเอกสารแสดงรายได้
2.ตกลงกับธนาคารเพื่อผ่อนชำระตามรายได้
3.ถ้าทางธนาคารรับได้ก็เสร็จสิ้น แต่ถ้าไม่ก็ทำตามคำตัดสินของศาล`

const C2 = `1.ถ้ารถยังผ่อนไม่หมด ติดต่อไฟแนนซ์ ให้ทำเรื่องเพื่อขอคืน
2.แต่ถ้าผ่อนหมดแล้ว ให้ปยื่นคำร้องต่อศาลภายใน 1 ปี ไม่เช่นนั้นจะขึ้นว่าสูญหาย`

const C3 = `1. รวบรวมหลักฐานที่ชัดเจน
2.เข้าแจ้งความกับตำรวจ`

class WebHookHandler {
  find = () => Promise.resolve({data: "OK v3"})

  create = (data = {}) => {
    console.log("Incoming POST request:", JSON.stringify(data))

    // bot.sendText(`Incoming Msg: ${JSON.stringify(data)}`)

    if (data.events) {
      data.events.forEach(msg => {
        if (msg.type === "message") {
          if (msg.message.text.indexOf("สวัสดี") > -1) {
            initChat(msg.source.userId)
          }

          if (msg.message.text === "HelloReply") {
            bot.sendText("Hello Man", msg.source.userId)
          }
        }

        if (msg.type === "postback") {
          if (msg.postback.data === "nomoney") {
            bot.sendText(C1_R1, msg.source.userId)

            bot.sendText(C1_R2, msg.source.userId)
          }

          if (msg.postback.data === "policetookmycar") {
            bot.sendText(C2, msg.source.userId)
          }

          if (msg.postback.data === "paparazzis") {
            bot.sendText(C3, msg.source.userId)
          }
        }
      })
    }

    return Promise.resolve({data: "200"})
  }
}

export default function debug() {
  this.use("line", new LineService())
  this.use("linehook", new WebHookHandler(), (req, res, next) => {
    res.status(200)
    next()
  })
}
