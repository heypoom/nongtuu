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
    if (Array.isArray(message)) {
      this.post("message/push", {
        to,
        messages: message.map(text => ({type: "text", text}))
      })
    } else {
      this.sendMessage({
        type: "text",
        text: `${message}`
      }, to)
    }
  }

  sendImage(url, to) {
    this.sendMessage({
      type: "image",
      originalContentUrl: url,
      previewImageUrl: `https://api.rethumb.com/v1/square/240/${url}`
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

class ChatStage extends MemoryService {
  // TODO: We need to store user's state in there.
  //       I'm thinking of Redis, but fuck it I'm tired.
  //       It's a hackathon, so yeah.
}

const initChat = id => {
  bot.sendTemplate({
    title: "สวัสดีครับ มีอะไรให้ปรึกษาไหมครับ?",
    text: "นี่เป็นเคสที่พบบ่อย ถ้าสงสัยนอกเหนือจากนี้ถามได้เลยนะครับ",
    alt: "Alt Message",
    thumbnail: "https://i.imgur.com/s4c7YSH.jpg",
    actions: [{
      type: "postback",
      label: "หนี้บัตรเครดิต",
      data: "nomoney"
    }, {
      type: "postback",
      label: "ได้หมายศาล",
      data: "lawsuit"
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

const REPLY = {
  "nomoney": [`ใจเย็นๆ ไปตามศาลนัด คุยกับทนายของธนาคารเจ้าของบัตร เพื่อดูข้อเสนอของธนาคารก่อนนะ`,
  `ถ้าเราไม่ไหว ลองต่อรองเพื่อเลื่อนวันจ่ายเงิน หลังจากนั้นทางศาลจะให้เซ็นสัญญาเลื่อนวันนัดคดี แล้วกลับบ้านได้เลย!`,
  `แต่ถ้าเราไหว เตรียมเอกสารแสดงรายได้ แล้วก็ตกลงกับธนาคารเพื่อผ่อนชำระตามรายได้ที่มี แค่นั้นเอง~`,
  `ถ้าทางธนาคารเค้ารับได้ก็เสร็จสิ้น แต่ถ้าไม่ก็ต้องยอมทำตามคำตัดสินของศาลล่ะนะ...`],

  "policetookmycar": [
    `ถ้ารถเรายังผ่อนไม่หมด ก็ไปติดต่อไฟแนนซ์ให้เค้าทำเรื่องเพื่อขอคืน`,
    `แต่ถ้าเราผ่อนหมดแล้ว ก็ไปยื่นคำร้องต่อศาลภายใน 1 ปี ไม่อย่างนั้นจะขึ้นว่าสูญหายนะ`
  ],

  "paparazzis": `ใจเย็นๆ ก่อน รีบรวบรวมหลักฐานที่ชัดเจน แล้วไปเข้าแจ้งความกับตำรวจนะ`,

  "P1": `ถ้าเป็นหมายเรียกและสำเนาคำฟ้อง หรือ หมายเรียกคดีแพ่งสามัญ
ต่อทำการคำให้การยื่นต่อศาลภายใกำหนด 15 วัน นับตั้งแต่วันที่ได้รับหมาย`,

  "P2": [
    `หมายเรียกคดีไม่มีข้อยุ่งยาก หรือ หมายเรียคดีมโนสาเหร่`,
    `คดีมโนสาเหร่ คือ คดีที่ฟ้องร้องกันโดยมีทุนทรัพย์ไม่เกิน 40,000 บาท`,
    `เช่น ฟ้องไล่ออกจากอสังหาริมทรัพย์ ที่มีค่าเช่าขณะยื่นฟ้องไม่เกินเดือนล่ะ 4,000`,
    `จำเลยต้องมาศาลตามวันนัดเพื่อไกล่เกลี่ย`
  ],

  "A1": [
    `เมื่อได้รับหมายนัด ต้องดูรายละเอียดว่าศาลกำหนดวันนัดไต่สวนมูลฟ้องวันใด`,
    `ถ้าจะต่อสู้คดีต้องปรึกษาทนายความทันที เพื่อจะทำหนังสือแต่งตั้งให้ทนายไปทำการซักค้านพยานโจทก์ในวันนัดไต่สวนมูลฟ้องแทน`,
    `ในวันนัดไต่สวนมูลฟ้อง จำเลยไม่จำเป็นต้องไปศาลก็ได้`
  ]

  "A2": [
    `หมายเรียกพยานบุคคล เมื่อได้รับหมายจะต้องไปศาลตามวันและเวลาที่กำหนดไว้ในหมาย เพื่อเบิกความเป็นพยานต่อศาล`,
    `หากขัดขืนไม่ไปศาลตามกำหนด ศาลอาจออกหมายจับเอาตัวกักขังได้ และอาจถูกฟ้องได้`
  ]
}

const gotLawsuit = id => {
  bot.sendTemplate({
    title: "คุณได้หมายศาลประเภทแพ่ง หรืออาญาครับ?",
    text: "เราจะช่วยคุณแน่ๆ ครับ แต่รบกวนตอบคำถามก่อนนะครับ",
    actions: [{
      type: "postback",
      label: "ประเภทคดีแพ่ง",
      data: "RektP"
    }, {
      type: "postback",
      label: "ประเภทคดีอาญา",
      data: "RektA"
    }]
  }, id)
}

const e = (msg, m = 1) => {
  if (msg) {
    if (msg.length > m) {
      return true
    }
  }
  return false
}

const JOKES = [
  "ร้อยปีที่แล้วนี่เขาเล่น April Fools Day กันแรงเนาะ",
  "ตะมุตะมิ",
  "เดี๋ยวทุ่มด้วยโพเดี้ยม",
  "ปั๊ดโธ่ววววววววว"
]

const JOKE_REPLY = {
  "เมื่อไรจะออก": "คนไทยฝากอนาคตไว้กับผม ได้ยินทีไรน้ำตาไหลทุกที",
  "ควย": "เดี่ยวทุมด้วยโพเดี้ยมหรอก ปัทโธ่",
  "เจอได้นะตู่": "ถ้าเบื่อผมก็เปลี่ยนช่อง",
  "เห็บหมา": "เอาไปขายที่ดาวอังคาร ขายได้ราคาดี",
  "เบื่อตู่": "ไหนใครมีปัญหาอะไร ไปคุยกันที่ค่าย",
  "ต้องการประชาธิปไตย": "ไม่ออก ใครจะออก ผมไม่ออก",
  "คสช คือไร": "ทหารตอบได้ ถามป่าว",
  "ตะมุตะมิ": "ผมเพื่อนเล่นคุณเหรอ ทุเรียน",
  "ประเทศนี้ของใคร": "ของผมจบปิ้ง",
  "สวัสดีลุง": "เอากองไว้ตรงนั้นและ ไม่ได้มีความสำคัญอะไร",
  "นอนก่อน": "เจริญพร ชิตังเม โป้ง รวยๆ"
}

/*
  Object.keys(o).forEach(e => {
    if ("namelol".match(e)) {
      console.log("WTF")
    }
  })
*/

class WebHookHandler {
  find = () => Promise.resolve({data: "OK v3"})

  create = (data = {}) => {
    console.log("Incoming POST request:", JSON.stringify(data))

    // bot.sendText(`Incoming Msg: ${JSON.stringify(data)}`)

    if (data.events) {
      data.events.forEach(msg => {
        const id = msg.source.userId

        if (msg.type === "message") {
          const text = msg.message.text

          if (text.match(/สวัสดี|หวัดดี|Hello|Hey|Hi/gi)) {
            initChat(id)
          } else if (e(text.match(/บัตร|ประชา/gi))) {
            bot.sendText(`เอกสารที่ต้องเตรียม คือ บัตรที่สามารถใช้ยืนยันตัวตนที่หน่วยงานของรัฐออกให้ หรือสำเนาทะเบียนบ้าน`, id)
            bot.sendImage(`https://i.imgur.com/z8C0ESs.jpg`, id)
            // initChat(id)
          } else if (e(text.match(/ทำ|พาสปอร์ต|Passport/gi))) {
            bot.sendText(`จองคิวและดูวิธีการทำพาสปอร์ตที่ https://www.passport.in.th`, id)
            bot.sendImage(`https://i.imgur.com/VRItpao.jpg`, id)
            // initChat(id)
          } else if (text.match(/หมายศาล/gi)) {
            gotLawsuit(id)
          } else if (JOKE_REPLY[text]) {
            bot.sendText(JOKE_REPLY[text])
          } else {
            bot.sendText(JOKES[Math.floor(Math.random() * JOKES.length)], id)
          }
        }

        if (msg.type === "postback") {
          const choice = msg.postback.data
          if (REPLY[choice]) {
            bot.sendText(REPLY[choice], id)
          }

          if (choice === "lawsuit") {
            gotLawsuit()
          }

          if (choice === "RektP") {
            bot.sendTemplate({
              title: "รบกวนบอกประเภทของหมายศาลคดีแพ่งด้วยครับ",
              text: "....",
              actions: [{
                type: "postback",
                label: "หมายเรียกคดีแพ่งสามัญ",
                data: "P1"
              }, {
                type: "postback",
                label: "หมายเรียกคดีมโนสาเหร่",
                data: "P2"
              }]
            }, id)
          }

          if (choice === "RektA") {
            bot.sendTemplate({
              title: "รบกวนบอกประเภทของหมายศาลคดีอาญาด้วยครับ",
              text: "....",
              actions: [{
                type: "postback",
                label: "หมายนัดไต่สวนมูลฟ้อง",
                data: "A1"
              }, {
                type: "postback",
                label: "หมายเรียกพยานบุคคล",
                data: "A2"
              }]
            }, id)
          }

        }
      })
    }

    return Promise.resolve({data: "200"})
  }
}

export default function debug() {
  this.use("linehook", new WebHookHandler(), (req, res, next) => {
    res.status(200)
    next()
  })
}
