import request from "request"

// API "Secrets". Feel free to steal them. I don't give a single F.
// TODO: Move that to Environment Variables, but I ain't got no time

const CHANNEL_ID = "1508478196"
const CHANNEL_SECRET = "ffe7d065e984a1094792d689bd2fd0e0"
const CHANNEL_TOKEN = "UuQd6RmSRQppG/0g6xc4Xh9GVigTR0/CqBV7afFJpYbRoMp0TGP00T1UNbEZmeDgM5VMEYF+ucWkGJwHwVoQP0cGzhAeg0RCToj8c2Pk2qCZI1/wkh6tTWlOtt9uFIMwKiqj5N/3bTCjfII3HQki3QdB04t89/1O/w1cDnyilFU="
const TEST_USER_ID = "U33084216cc1a00f7aa27632bec769356"

// SDK for interfacing with the LINE Messaging API
// NOTE: Why the heck are the Official SDKs deprecated? Like, seriously dude? -.-

class LineMessaging {

  constructor(id, secret) {
    this._id = id
    this._secret = secret;
  }

  sendMessage() {

  }

}

class ChatStage {
  // TODO: We need to store user's state in there.
  //       I'm thinking of Redis, but fuck it I'm tired.
  //       It's a hackathon, so yeah.
}

const bot = new LineMessaging(CHANNEL_ID, CHANNEL_SECRET)

class LineService {

  setup(app) {
    this.app = app
  }

  find = () => Promise.resolve({
    data: "LINE Integration Service is Ready!"
  })

  get = message => {
    request.post("https://api.line.me/v2/bot/message/push", {
      to: TEST_USER_ID,
      messages: [{
        type: "text",
        text: `[ECHO] ${message}`
      }]
    }).auth(null, null, true, CHANNEL_TOKEN)
    return Promise.resolve({data: "200 OK"})
  }

  // get = () => Promise.resolve({data: "Hello World"})
}

export default function debug() {
  this.use("line", new LineService())
}
