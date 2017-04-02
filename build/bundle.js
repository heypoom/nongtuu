/*! require("source-map-support").install() */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("feathers");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = middlewares;

var _feathers = __webpack_require__(0);

var _feathers2 = _interopRequireDefault(_feathers);

var _feathersHooks = __webpack_require__(16);

var _feathersHooks2 = _interopRequireDefault(_feathersHooks);

var _feathersRest = __webpack_require__(18);

var _feathersRest2 = _interopRequireDefault(_feathersRest);

var _feathersSocketio = __webpack_require__(19);

var _feathersSocketio2 = _interopRequireDefault(_feathersSocketio);

var _feathersSync = __webpack_require__(20);

var _feathersSync2 = _interopRequireDefault(_feathersSync);

var _handler = __webpack_require__(15);

var _handler2 = _interopRequireDefault(_handler);

var _cors = __webpack_require__(14);

var _cors2 = _interopRequireDefault(_cors);

var _cookieParser = __webpack_require__(13);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = __webpack_require__(12);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function middlewares() {
  this.use(_bodyParser2.default.json());
  this.use(_bodyParser2.default.urlencoded({ extended: true }));
  this.use((0, _cookieParser2.default)());
  this.use((0, _cors2.default)());

  this.configure((0, _feathersHooks2.default)());
  this.configure((0, _feathersRest2.default)());
  this.configure((0, _feathersSocketio2.default)());

  this.use((0, _handler2.default)());
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = services;

var _debug = __webpack_require__(4);

var _debug2 = _interopRequireDefault(_debug);

var _line = __webpack_require__(11);

var _line2 = _interopRequireDefault(_line);

var _graphql = __webpack_require__(5);

var _graphql2 = _interopRequireDefault(_graphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function services() {
  this.configure(_debug2.default);
  this.configure(_line2.default);
  this.configure(_graphql2.default);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _feathers = __webpack_require__(0);

var _feathers2 = _interopRequireDefault(_feathers);

var _middleware = __webpack_require__(1);

var _middleware2 = _interopRequireDefault(_middleware);

var _services = __webpack_require__(2);

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _feathers2.default)();

app.configure(_middleware2.default);
app.configure(_services2.default);

console.log("info", process.env.NODE_ENV);

app.listen(process.env.PORT || "3000");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = debug;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DebugService = function () {
  function DebugService() {
    _classCallCheck(this, DebugService);

    this.find = function () {
      return Promise.resolve({ data: "Debug. Hello world!" });
    };

    this.get = function () {
      return Promise.resolve({ data: "Hello World" });
    };
  }

  _createClass(DebugService, [{
    key: "setup",
    value: function setup(app) {
      this.app = app;
    }
  }]);

  return DebugService;
}();

function debug() {
  this.use("debug", new DebugService());
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var app = this;

  var executableSchema = (0, _graphqlTools.makeExecutableSchema)({
    typeDefs: _schemas2.default,
    resolvers: _resolvers2.default.call(app)
  });

  app.use("/graph", (0, _graphqlServerExpress.graphqlExpress)(function (req) {
    var _req$feathers = req.feathers,
        token = _req$feathers.token,
        provider = _req$feathers.provider;

    return {
      schema: executableSchema,
      context: { token: token, provider: provider }
    };
  }));

  app.use("/graphiql", (0, _graphqlServerExpress.graphiqlExpress)({
    endpointURL: "/graph"
  }));
};

var _graphqlServerExpress = __webpack_require__(21);

var _graphqlTools = __webpack_require__(22);

var _resolvers = __webpack_require__(6);

var _resolvers2 = _interopRequireDefault(_resolvers);

var _schemas = __webpack_require__(8);

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Resolvers;
var mockService = {
  find: function find() {
    return [{ _id: 0 }];
  }
};

var sanitize = function sanitize(input) {
  return input.replace("fuck", "****").replace("putang", "******").replace("ina mo", "*** **");
};

function Resolvers() {
  var app = this;

  var Posts = app.service("debug");

  var userArray = [{
    _id: 0,
    username: "phoomparin",
    firstName: "Phoomparin",
    lastName: "Mano"
  }];
  var Users = {

    find: function find() {
      return userArray;
    },
    get: function get(data) {
      return userArray[0];
    },
    create: function create(data) {
      return _extends({ _id: 0 }, data);
    }
  };

  var commentArray = [{
    _id: 0,
    content: "Ayyyyyyyyyyyyyyyyyyyyyy Lmaooooooooooooooo"
  }];

  var Comments = {
    find: function find() {
      return commentArray;
    },
    get: function get() {
      return commentArray[0];
    }
  };

  var Viewer = mockService;

  return {
    User: {
      posts: function posts(user, args, context) {
        return Posts.find({
          query: {
            authorId: user._id
          }
        });
      }
    },
    Post: {
      comments: function comments(post, _ref, context) {
        var limit = _ref.limit;

        return Comments.find({
          query: {
            postId: post._id
          }
        });
      },
      author: function author(post, args, context) {
        return Users.get(post.authorId);
      }
    },
    Comment: {
      author: function author(comment, args, context) {
        return Users.get(comment.authorId);
      }
    },
    AuthPayload: {
      data: function data(auth, args, context) {
        return auth.data;
      }
    },
    RootQuery: {
      viewer: function viewer(root, args, context) {
        return Viewer.find(context);
      },
      author: function author(root, _ref2, context) {
        var username = _ref2.username;

        return Users.find({
          query: {
            username: username
          }
        }).then(function (users) {
          return users[0];
        });
      },
      authors: function authors(root, args, context) {
        return Users.find({});
      },
      posts: function posts(root, _ref3, context) {
        var category = _ref3.category;

        return Posts.find({
          query: {
            category: category
          }
        });
      },
      post: function post(root, _ref4, context) {
        var _id = _ref4._id;

        return Posts.get(_id);
      }
    },

    RootMutation: {
      signUp: function signUp(root, args, context) {
        return Users.create(args);
      },
      logIn: function logIn(root, _ref5, context) {
        var username = _ref5.username,
            password = _ref5.password;

        return { token: Math.random().toString(36).replace(/[^a-z]+/g, "") };
      },
      createPost: function createPost(root, _ref6, context) {
        var post = _ref6.post;

        return Posts.create(post, context);
      },
      createComment: function createComment(root, args, context) {
        return Comments.create(args, context);
      },
      removePost: function removePost(root, _ref7, context) {
        var _id = _ref7._id;

        return Posts.remove(_id, context);
      },
      removeComment: function removeComment(root, _ref8, context) {
        var _id = _ref8._id;

        return Comments.remove(_id, context);
      }
    }

  };
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n\ntype RootMutation {\n  signUp (\n    username: String!\n    password: String!\n    firstName: String\n    lastName: String\n  ): User\n\n  logIn (\n    username: String!\n    password: String!\n  ): AuthPayload\n\n  createPost (\n    post: postInput\n  ): Post\n\n  removePost (\n    _id: String! # _id of post to remove\n  ): Post\n\n  createComment (\n    postId: String!\n    content: String!\n  ): Comment\n\n  removeComment (\n    _id: String! # _id of comment to remove\n  ): Comment\n}\n\n"], ["\n\ntype RootMutation {\n  signUp (\n    username: String!\n    password: String!\n    firstName: String\n    lastName: String\n  ): User\n\n  logIn (\n    username: String!\n    password: String!\n  ): AuthPayload\n\n  createPost (\n    post: postInput\n  ): Post\n\n  removePost (\n    _id: String! # _id of post to remove\n  ): Post\n\n  createComment (\n    postId: String!\n    content: String!\n  ): Comment\n\n  removeComment (\n    _id: String! # _id of comment to remove\n  ): Comment\n}\n\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var graphql = function graphql(type) {
  return type[0];
};

exports.default = graphql(_templateObject);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n\ntype RootQuery {\n  viewer: User\n  author(username: String!): User\n  authors: [User]\n  posts(category: Category): [Post]\n  post(_id: String!) : Post\n}\n\nschema {\n  query: RootQuery\n  mutation: RootMutation\n}\n\n"], ["\n\ntype RootQuery {\n  viewer: User\n  author(username: String!): User\n  authors: [User]\n  posts(category: Category): [Post]\n  post(_id: String!) : Post\n}\n\nschema {\n  query: RootQuery\n  mutation: RootMutation\n}\n\n"]);

var _user = __webpack_require__(10);

var _user2 = _interopRequireDefault(_user);

var _post = __webpack_require__(9);

var _post2 = _interopRequireDefault(_post);

var _RootMutation = __webpack_require__(7);

var _RootMutation2 = _interopRequireDefault(_RootMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var graphql = function graphql(type) {
  return type[0];
};

var Schema = graphql(_templateObject);

exports.default = [_user2.default, _post2.default, _RootMutation2.default, Schema];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n\nenum Category {\n  MEMES\n  TECHNOLOGY\n  OTHER\n}\n\ninput postInput {\n  title: String!\n  content: String!\n  summary: String\n  category: Category\n}\n\ntype Post {\n  _id: String!\n  title: String\n  category: String\n  summary: String\n  content: String!\n  createdAt: String\n  comments(limit: Int): [Comment]\n  author: User\n}\n\ntype Comment {\n  _id: String!\n  content: String!\n  author: User\n  createdAt: String\n}\n\n"], ["\n\nenum Category {\n  MEMES\n  TECHNOLOGY\n  OTHER\n}\n\ninput postInput {\n  title: String!\n  content: String!\n  summary: String\n  category: Category\n}\n\ntype Post {\n  _id: String!\n  title: String\n  category: String\n  summary: String\n  content: String!\n  createdAt: String\n  comments(limit: Int): [Comment]\n  author: User\n}\n\ntype Comment {\n  _id: String!\n  content: String!\n  author: User\n  createdAt: String\n}\n\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var graphql = function graphql(type) {
  return type[0];
};

exports.default = graphql(_templateObject);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n\n# Stores data about the User's Account.\ntype User {\n  _id: String! # the ! means that every author object _must_ have an id\n\n  # First Name of the User\n  firstName: String\n\n  # Last name of the User\n  lastName: String\n\n  # Username is Required!\n  username: String!\n\n  # Posts by this user\n  posts: [Post] # the list of Posts by this author\n}\n\ntype AuthPayload {\n  token: String # JSON Web Token\n  data: User\n}\n\n"], ["\n\n# Stores data about the User's Account.\ntype User {\n  _id: String! # the ! means that every author object _must_ have an id\n\n  # First Name of the User\n  firstName: String\n\n  # Last name of the User\n  lastName: String\n\n  # Username is Required!\n  username: String!\n\n  # Posts by this user\n  posts: [Post] # the list of Posts by this author\n}\n\ntype AuthPayload {\n  token: String # JSON Web Token\n  data: User\n}\n\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var graphql = function graphql(type) {
  return type[0];
};

exports.default = graphql(_templateObject);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = debug;

var _feathersMemory = __webpack_require__(17);

var _feathersMemory2 = _interopRequireDefault(_feathersMemory);

var _requestPromiseNative = __webpack_require__(23);

var _requestPromiseNative2 = _interopRequireDefault(_requestPromiseNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// API "Secrets". Feel free to steal them. I don't give a single F.
// TODO: Move that to Environment Variables, but I ain't got no time

var CHANNEL_TOKEN = "UuQd6RmSRQppG/0g6xc4Xh9GVigTR0/CqBV7afFJpYbRoMp0TGP00T1UNbEZmeDgM5VMEYF+ucWkGJwHwVoQP0cGzhAeg0RCToj8c2Pk2qCZI1/wkh6tTWlOtt9uFIMwKiqj5N/3bTCjfII3HQki3QdB04t89/1O/w1cDnyilFU=";
var TEST_USER_ID = "U33084216cc1a00f7aa27632bec769356";

// SDK for interfacing with the LINE Messaging API
// NOTE: Why the heck are the Official SDKs deprecated? Like, seriously dude? -.-

var defaultAction = [{
  type: "postback",
  label: "หนี้บัตรเครดิต",
  data: "action=buy&itemid=123"
}, {
  type: "postback",
  label: "กฎหมายที่ดิน",
  data: "action=add&itemid=123"
}];

var defaultImage = "https://images.unsplash.com/reserve/uvRBqDAfQfaGPJiI6lVS_R0001899.jpg?dpr=1&auto=format&fit=crop&w=1500&h=994&q=80&cs=tinysrgb&crop=";

var LineMessaging = function () {
  function LineMessaging(token) {
    _classCallCheck(this, LineMessaging);

    this.token = token;
  }

  _createClass(LineMessaging, [{
    key: "post",
    value: function post(endpoint, body) {
      (0, _requestPromiseNative2.default)({
        method: "POST",
        uri: "https://api.line.me/v2/bot/" + endpoint,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }).auth(null, null, true, this.token);
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(message) {
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TEST_USER_ID;

      this.post("message/push", { to: to, messages: [message] });
    }
  }, {
    key: "sendText",
    value: function sendText(message, to) {
      if (Array.isArray(message)) {
        this.post("message/push", {
          to: to,
          messages: message.map(function (text) {
            return { type: "text", text: text };
          })
        });
      } else {
        this.sendMessage({
          type: "text",
          text: "" + message
        }, to);
      }
    }
  }, {
    key: "sendImage",
    value: function sendImage(url, to) {
      this.sendMessage({
        type: "image",
        originalContentUrl: url,
        previewImageUrl: "https://api.rethumb.com/v1/square/240/" + url
      }, to);
    }
  }, {
    key: "sendTemplate",
    value: function sendTemplate(_ref, to) {
      var title = _ref.title,
          text = _ref.text,
          _ref$alt = _ref.alt,
          alt = _ref$alt === undefined ? "This is an alt text" : _ref$alt,
          _ref$thumbnail = _ref.thumbnail,
          thumbnail = _ref$thumbnail === undefined ? defaultImage : _ref$thumbnail,
          _ref$actions = _ref.actions,
          actions = _ref$actions === undefined ? defaultAction : _ref$actions;

      this.sendMessage({
        type: "template",
        altText: alt,
        template: {
          type: "buttons",
          thumbnailImageUrl: thumbnail,
          title: title,
          text: text,
          actions: actions
        }
      }, to);
    }
  }]);

  return LineMessaging;
}();

var scripts = {
  "main": {}
};

var bot = new LineMessaging(CHANNEL_TOKEN);

var ChatStage = function (_MemoryService) {
  _inherits(ChatStage, _MemoryService);

  function ChatStage() {
    _classCallCheck(this, ChatStage);

    return _possibleConstructorReturn(this, (ChatStage.__proto__ || Object.getPrototypeOf(ChatStage)).apply(this, arguments));
  }

  return ChatStage;
}(_feathersMemory2.default);

var initChat = function initChat(id) {
  bot.sendTemplate({
    title: "สวัสดีครับ มีอะไรให้ปรึกษาไหมครับ? 😊 👊",
    text: "นี่เป็นเคสที่พบบ่อย ถ้าสงสัยนอกเหนือจากนี้ถามได้เลยนะครับ",
    alt: "Alt Message",
    thumbnail: "https://i.imgur.com/s4c7YSH.jpg",
    actions: [{
      type: "postback",
      label: "หนี้บัตรเครดิต 💳",
      data: "nomoney"
    }, {
      type: "postback",
      label: "ได้หมายศาล ⚖️",
      data: "lawsuit"
    }, {
      type: "postback",
      label: "โดนตำรวจยึดรถ 🚗",
      data: "policetookmycar"
    }, {
      type: "postback",
      label: "ถูกแอบถ่ายลงโซเชียล 📷",
      data: "paparazzis"
    }]
  }, id);
};

var REPLY = {
  "nomoney": ["\u0E43\u0E08\u0E40\u0E22\u0E47\u0E19\u0E46 \u0E44\u0E1B\u0E15\u0E32\u0E21\u0E28\u0E32\u0E25\u0E19\u0E31\u0E14 \u0E04\u0E38\u0E22\u0E01\u0E31\u0E1A\u0E17\u0E19\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E40\u0E08\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E1A\u0E31\u0E15\u0E23 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D\u0E02\u0E2D\u0E07\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E01\u0E48\u0E2D\u0E19\u0E19\u0E30 \uD83D\uDE09", "\u0E16\u0E49\u0E32\u0E40\u0E23\u0E32\u0E44\u0E21\u0E48\u0E44\u0E2B\u0E27 \u0E25\u0E2D\u0E07\u0E15\u0E48\u0E2D\u0E23\u0E2D\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E27\u0E31\u0E19\u0E08\u0E48\u0E32\u0E22\u0E40\u0E07\u0E34\u0E19 \u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E19\u0E31\u0E49\u0E19\u0E17\u0E32\u0E07\u0E28\u0E32\u0E25\u0E08\u0E30\u0E43\u0E2B\u0E49\u0E40\u0E0B\u0E47\u0E19\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E27\u0E31\u0E19\u0E19\u0E31\u0E14\u0E04\u0E14\u0E35 \u0E41\u0E25\u0E49\u0E27\u0E01\u0E25\u0E31\u0E1A\u0E1A\u0E49\u0E32\u0E19\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22! \uD83D\uDE0A", "\u0E41\u0E15\u0E48\u0E16\u0E49\u0E32\u0E40\u0E23\u0E32\u0E44\u0E2B\u0E27 \u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49 \u0E41\u0E25\u0E49\u0E27\u0E01\u0E47\u0E15\u0E01\u0E25\u0E07\u0E01\u0E31\u0E1A\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1C\u0E48\u0E2D\u0E19\u0E0A\u0E33\u0E23\u0E30\u0E15\u0E32\u0E21\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E21\u0E35 \u0E41\u0E04\u0E48\u0E19\u0E31\u0E49\u0E19\u0E40\u0E2D\u0E07~", "\u0E16\u0E49\u0E32\u0E17\u0E32\u0E07\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E40\u0E04\u0E49\u0E32\u0E23\u0E31\u0E1A\u0E44\u0E14\u0E49\u0E01\u0E47\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19 \u0E41\u0E15\u0E48\u0E16\u0E49\u0E32\u0E44\u0E21\u0E48\u0E01\u0E47\u0E15\u0E49\u0E2D\u0E07\u0E22\u0E2D\u0E21\u0E17\u0E33\u0E15\u0E32\u0E21\u0E04\u0E33\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E02\u0E2D\u0E07\u0E28\u0E32\u0E25\u0E25\u0E48\u0E30\u0E19\u0E30 \uD83D\uDC4A"],

  "policetookmycar": ["\u0E16\u0E49\u0E32\u0E23\u0E16\u0E40\u0E23\u0E32\u0E22\u0E31\u0E07\u0E1C\u0E48\u0E2D\u0E19\u0E44\u0E21\u0E48\u0E2B\u0E21\u0E14 \u0E01\u0E47\u0E44\u0E1B\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E44\u0E1F\u0E41\u0E19\u0E19\u0E0B\u0E4C\u0E43\u0E2B\u0E49\u0E40\u0E04\u0E49\u0E32\u0E17\u0E33\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E04\u0E37\u0E19 \uD83D\uDE36", "\u0E41\u0E15\u0E48\u0E16\u0E49\u0E32\u0E40\u0E23\u0E32\u0E1C\u0E48\u0E2D\u0E19\u0E2B\u0E21\u0E14\u0E41\u0E25\u0E49\u0E27 \u0E01\u0E47\u0E44\u0E1B\u0E22\u0E37\u0E48\u0E19\u0E04\u0E33\u0E23\u0E49\u0E2D\u0E07\u0E15\u0E48\u0E2D\u0E28\u0E32\u0E25\u0E20\u0E32\u0E22\u0E43\u0E19 1 \u0E1B\u0E35 \u0E44\u0E21\u0E48\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E31\u0E49\u0E19\u0E08\u0E30\u0E02\u0E36\u0E49\u0E19\u0E27\u0E48\u0E32\u0E2A\u0E39\u0E0D\u0E2B\u0E32\u0E22\u0E19\u0E30 \uD83D\uDE09"],

  "paparazzis": "\u0E43\u0E08\u0E40\u0E22\u0E47\u0E19\u0E46 \u0E01\u0E48\u0E2D\u0E19 \u0E23\u0E35\u0E1A\u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E17\u0E35\u0E48\u0E0A\u0E31\u0E14\u0E40\u0E08\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E44\u0E1B\u0E40\u0E02\u0E49\u0E32\u0E41\u0E08\u0E49\u0E07\u0E04\u0E27\u0E32\u0E21\u0E01\u0E31\u0E1A\u0E15\u0E33\u0E23\u0E27\u0E08\u0E19\u0E30 \uD83D\uDE0A",

  "P1": "\u0E16\u0E49\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E23\u0E35\u0E22\u0E01\u0E41\u0E25\u0E30\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E04\u0E33\u0E1F\u0E49\u0E2D\u0E07 \u0E2B\u0E23\u0E37\u0E2D \u0E2B\u0E21\u0E32\u0E22\u0E40\u0E23\u0E35\u0E22\u0E01\u0E04\u0E14\u0E35\u0E41\u0E1E\u0E48\u0E07\u0E2A\u0E32\u0E21\u0E31\u0E0D\n\u0E15\u0E48\u0E2D\u0E17\u0E33\u0E01\u0E32\u0E23\u0E04\u0E33\u0E43\u0E2B\u0E49\u0E01\u0E32\u0E23\u0E22\u0E37\u0E48\u0E19\u0E15\u0E48\u0E2D\u0E28\u0E32\u0E25\u0E20\u0E32\u0E22\u0E43\u0E01\u0E33\u0E2B\u0E19\u0E14 15 \u0E27\u0E31\u0E19 \u0E19\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E2B\u0E21\u0E32\u0E22",

  "P2": ["\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E23\u0E35\u0E22\u0E01\u0E04\u0E14\u0E35\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E22\u0E38\u0E48\u0E07\u0E22\u0E32\u0E01 \u0E2B\u0E23\u0E37\u0E2D \u0E2B\u0E21\u0E32\u0E22\u0E40\u0E23\u0E35\u0E22\u0E04\u0E14\u0E35\u0E21\u0E42\u0E19\u0E2A\u0E32\u0E40\u0E2B\u0E23\u0E48", "\u0E04\u0E14\u0E35\u0E21\u0E42\u0E19\u0E2A\u0E32\u0E40\u0E2B\u0E23\u0E48 \u0E04\u0E37\u0E2D \u0E04\u0E14\u0E35\u0E17\u0E35\u0E48\u0E1F\u0E49\u0E2D\u0E07\u0E23\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E42\u0E14\u0E22\u0E21\u0E35\u0E17\u0E38\u0E19\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 40,000 \u0E1A\u0E32\u0E17", "\u0E40\u0E0A\u0E48\u0E19 \u0E1F\u0E49\u0E2D\u0E07\u0E44\u0E25\u0E48\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E2D\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E34\u0E21\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E4C \u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32\u0E40\u0E0A\u0E48\u0E32\u0E02\u0E13\u0E30\u0E22\u0E37\u0E48\u0E19\u0E1F\u0E49\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E25\u0E48\u0E30 4,000", "\u0E08\u0E33\u0E40\u0E25\u0E22\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E32\u0E28\u0E32\u0E25\u0E15\u0E32\u0E21\u0E27\u0E31\u0E19\u0E19\u0E31\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E44\u0E01\u0E25\u0E48\u0E40\u0E01\u0E25\u0E35\u0E48\u0E22"],

  "A1": ["\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E19\u0E31\u0E14 \u0E15\u0E49\u0E2D\u0E07\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E27\u0E48\u0E32\u0E28\u0E32\u0E25\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E27\u0E31\u0E19\u0E19\u0E31\u0E14\u0E44\u0E15\u0E48\u0E2A\u0E27\u0E19\u0E21\u0E39\u0E25\u0E1F\u0E49\u0E2D\u0E07\u0E27\u0E31\u0E19\u0E43\u0E14 \u2696\uFE0F", "\u0E16\u0E49\u0E32\u0E08\u0E30\u0E15\u0E48\u0E2D\u0E2A\u0E39\u0E49\u0E04\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32\u0E17\u0E19\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E19\u0E17\u0E35 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E08\u0E30\u0E17\u0E33\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E41\u0E15\u0E48\u0E07\u0E15\u0E31\u0E49\u0E07\u0E43\u0E2B\u0E49\u0E17\u0E19\u0E32\u0E22\u0E44\u0E1B\u0E17\u0E33\u0E01\u0E32\u0E23\u0E0B\u0E31\u0E01\u0E04\u0E49\u0E32\u0E19\u0E1E\u0E22\u0E32\u0E19\u0E42\u0E08\u0E17\u0E01\u0E4C\u0E43\u0E19\u0E27\u0E31\u0E19\u0E19\u0E31\u0E14\u0E44\u0E15\u0E48\u0E2A\u0E27\u0E19\u0E21\u0E39\u0E25\u0E1F\u0E49\u0E2D\u0E07\u0E41\u0E17\u0E19", "\u0E43\u0E19\u0E27\u0E31\u0E19\u0E19\u0E31\u0E14\u0E44\u0E15\u0E48\u0E2A\u0E27\u0E19\u0E21\u0E39\u0E25\u0E1F\u0E49\u0E2D\u0E07 \u0E08\u0E33\u0E40\u0E25\u0E22\u0E44\u0E21\u0E48\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E44\u0E1B\u0E28\u0E32\u0E25\u0E01\u0E47\u0E44\u0E14\u0E49 \uD83D\uDE09"],

  "A2": ["\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E23\u0E35\u0E22\u0E01\u0E1E\u0E22\u0E32\u0E19\u0E1A\u0E38\u0E04\u0E04\u0E25 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E44\u0E1B\u0E28\u0E32\u0E25\u0E15\u0E32\u0E21\u0E27\u0E31\u0E19\u0E41\u0E25\u0E30\u0E40\u0E27\u0E25\u0E32\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49\u0E43\u0E19\u0E2B\u0E21\u0E32\u0E22 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1A\u0E34\u0E01\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E22\u0E32\u0E19\u0E15\u0E48\u0E2D\u0E28\u0E32\u0E25 \u2696\uFE0F", "\u0E2B\u0E32\u0E01\u0E02\u0E31\u0E14\u0E02\u0E37\u0E19\u0E44\u0E21\u0E48\u0E44\u0E1B\u0E28\u0E32\u0E25\u0E15\u0E32\u0E21\u0E01\u0E33\u0E2B\u0E19\u0E14 \u0E28\u0E32\u0E25\u0E2D\u0E32\u0E08\u0E2D\u0E2D\u0E01\u0E2B\u0E21\u0E32\u0E22\u0E08\u0E31\u0E1A\u0E40\u0E2D\u0E32\u0E15\u0E31\u0E27\u0E01\u0E31\u0E01\u0E02\u0E31\u0E07\u0E44\u0E14\u0E49 \u0E41\u0E25\u0E30\u0E2D\u0E32\u0E08\u0E16\u0E39\u0E01\u0E1F\u0E49\u0E2D\u0E07\u0E44\u0E14\u0E49 \uD83D\uDE2E"]
};

var gotLawsuit = function gotLawsuit(id) {
  bot.sendTemplate({
    title: "คุณได้หมายศาลประเภทแพ่ง หรืออาญาครับ?",
    text: "เราจะช่วยคุณแน่ๆ ครับ แต่รบกวนตอบคำถามก่อนนะครับ 🙂",
    actions: [{
      type: "postback",
      label: "ประเภทคดีแพ่ง ⚖️",
      data: "RektP"
    }, {
      type: "postback",
      label: "ประเภทคดีอาญา 🔪",
      data: "RektA"
    }]
  }, id);
};

var e = function e(msg) {
  var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (msg) {
    if (msg.length > m) {
      return true;
    }
  }
  return false;
};

var JOKES = ["ร้อยปีที่แล้วนี่เขาเล่น April Fools Day กันแรงเนาะ 🙄", "ตะมุตะมิ 😉", "เดี๋ยวทุ่มด้วยโพเดี้ยม 🙄", "ปั๊ดโธ่ววววววววว 🙄"];

var JOKE_REPLY = {
  "เมื่อไรจะออก": "คนไทยฝากอนาคตไว้กับผม ได้ยินทีไรน้ำตาไหลทุกที 😉",
  "ควย": "เดี่ยวทุมด้วยโพเดี้ยมหรอก ปัทโธ่ 🙄",
  "เจอได้นะตู่": "ถ้าเบื่อผมก็เปลี่ยนช่อง 🙄",
  "เห็บหมา": "เอาไปขายที่ดาวอังคาร ขายได้ราคาดี 🙄",
  "เบื่อตู่": "ไหนใครมีปัญหาอะไร ไปคุยกันที่ค่าย 😉",
  "ต้องการประชาธิปไตย": "ไม่ออก ใครจะออก ผมไม่ออก 🙄",
  "คสช คือไร": "ทหารตอบได้ ถามป่าว 😉",
  "ตะมุตะมิ": "ผมเพื่อนเล่นคุณเหรอ ทุเรียน 🙄",
  "ประเทศนี้ของใคร": "ของผมจบปิ้ง 😉",
  "สวัสดีลุง": "เอากองไว้ตรงนั้นแหละ ไม่ได้มีความสำคัญอะไร 😉",
  "นอนก่อน": "เจริญพร ชิตังเม โป้ง รวยๆ 😉"
};

/*
  Object.keys(o).forEach(e => {
    if ("namelol".match(e)) {
      console.log("WTF")
    }
  })
*/

var suggestLawyer = function suggestLawyer(id) {
  setTimeout(function () {
    bot.sendTemplate({
      title: "คุณต้องการรับคำปรึกษาจากทนายฟรีไหมครับ 😊",
      text: "คดีของคุณต้องใช้ทนายความ และเราจะช่วยคุณให้ถึงที่สุดครับ 😊",
      thumbnail: "https://i.imgur.com/ZSifg3o.jpg",
      actions: [{
        type: "postback",
        label: "หาทนายให้หน่อยสิ 👍",
        data: "getlawyer"
      }, {
        type: "postback",
        label: "ไม่ 🚫",
        data: "noneed"
      }]
    }, id);
  }, 800);
};

var WebHookHandler = function WebHookHandler() {
  _classCallCheck(this, WebHookHandler);

  this.find = function () {
    return Promise.resolve({ data: "OK v4" });
  };

  this.create = function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    console.log("Incoming POST request:", JSON.stringify(data));

    // bot.sendText(`Incoming Msg: ${JSON.stringify(data)}`)

    if (data.events) {
      data.events.forEach(function (msg) {
        var id = msg.source.userId;

        if (msg.type === "message") {
          var text = msg.message.text;

          if (e(text.match(/บัตร|ประชา/g))) {
            bot.sendText("\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21 \u0E04\u0E37\u0E2D \u0E1A\u0E31\u0E15\u0E23\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E15\u0E31\u0E27\u0E15\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E23\u0E31\u0E10\u0E2D\u0E2D\u0E01\u0E43\u0E2B\u0E49 \u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1A\u0E49\u0E32\u0E19 \uD83D\uDE04", id);
            // bot.sendImage(`https://i.imgur.com/z8C0ESs.jpg`, id)
          } else if (e(text.match(/ทำ|พาสปอร์ต|Passport/gi))) {
            bot.sendText("\u0E08\u0E2D\u0E07\u0E04\u0E34\u0E27\u0E41\u0E25\u0E30\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E17\u0E33\u0E1E\u0E32\u0E2A\u0E1B\u0E2D\u0E23\u0E4C\u0E15\u0E17\u0E35\u0E48 https://www.passport.in.th \uD83D\uDE04", id);
            bot.sendImage("https://i.imgur.com/VRItpao.jpg", id);
          } else if (text.match(/หมายศาล/g)) {
            gotLawsuit(id);
          } else if (text.match(/บ้านรุกล้ำ/g)) {
            bot.sendText(["\u0E40\u0E08\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E14\u0E34\u0E19\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E40\u0E2D\u0E32\u0E04\u0E37\u0E19\u0E17\u0E35\u0E48\u0E14\u0E34\u0E19\u0E08\u0E32\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E1A\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48\u0E23\u0E38\u0E01\u0E25\u0E49\u0E33\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34 \uD83D\uDCA1 (\u0E1B.\u0E1E.\u0E1E. \u0E21\u0E32\u0E15\u0E23\u0E32 1336)", "\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E1A\u0E49\u0E32\u0E19\u0E23\u0E37\u0E49\u0E2D\u0E16\u0E2D\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E17\u0E35\u0E48\u0E23\u0E38\u0E01\u0E25\u0E49\u0E33 \u0E41\u0E25\u0E49\u0E27\u0E17\u0E33\u0E17\u0E35\u0E48\u0E14\u0E34\u0E19\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E32\u0E21\u0E40\u0E14\u0E34\u0E21 \u0E1C\u0E39\u0E49\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E0A\u0E48\u0E27\u0E22\u0E2D\u0E2D\u0E01\u0E04\u0E48\u0E32\u0E43\u0E0A\u0E49\u0E08\u0E48\u0E32\u0E22\u0E44\u0E14\u0E49 \uD83D\uDE09 (\u0E1B.\u0E1E.\u0E1E. \u0E21\u0E32\u0E15\u0E23\u0E32 1312 \u0E27\u0E23\u0E23\u0E04 2)"], id);
          } else if (text.match(/หนี้บัตรเครดิต/g)) {
            bot.sendText(REPLY.nomoney, id);
          } else if (text.match(/ตำรวจยึดรถ/g)) {
            bot.sendText(REPLY.policetookmycar, id);
          } else if (text.match(/แอบถ่าย/g)) {
            bot.sendText(REPLY.paparazzis, id);
          } else if (text.match(/ขอบคุณ|thank/gi)) {
            bot.sendText("\u0E02\u0E2D\u0E1A\u0E04\u0E38\u0E13\u0E21\u0E32\u0E01\u0E04\u0E23\u0E31\u0E1A \u0E1B\u0E35\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E2B\u0E49\u0E1C\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E19\u0E32\u0E22\u0E01\u0E15\u0E48\u0E2D\u0E14\u0E49\u0E27\u0E22\u0E19\u0E30 \uD83D\uDE09", id);
          } else if (text.match(/Never Gonna Give You Up/gi)) {
            bot.sendText("Never Gonna Let You Down~! \uD83D\uDE09", id);
          } else if (text.match(/แบบฟอร์มศาล/)) {
            bot.sendText("\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E28\u0E32\u0E25\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 http://www.chawbanlaw.com/form_download.html \u0E19\u0E30\u0E04\u0E23\u0E31\u0E1A~! \uD83D\uDE09", id);
          } else if (JOKE_REPLY[text]) {
            bot.sendText(JOKE_REPLY[text], id);
          } else if (text.match(/สวัสดี|หวัดดี|Hello|Hey|Hi|Yo/gi)) {
            initChat(id);
          } else {
            bot.sendText(JOKES[Math.floor(Math.random() * JOKES.length)], id);
          }
        }

        if (msg.type === "follow") {
          // User added you as a friend
          initChat(id);
        }

        if (msg.type === "postback") {
          var choice = msg.postback.data;

          if (REPLY[choice]) {
            bot.sendText(REPLY[choice], id);

            if (choice.match(/P1|P2|A1|A2/g)) {
              suggestLawyer(id);
            }
          }

          if (choice === "getlawyer") {
            bot.sendText("\u0E17\u0E19\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E44\u0E1B\u0E2B\u0E32\u0E17\u0E48\u0E32\u0E19 \u0E02\u0E2D\u0E43\u0E2B\u0E49\u0E17\u0E48\u0E32\u0E19\u0E0A\u0E19\u0E30\u0E04\u0E14\u0E35\u0E19\u0E30\u0E04\u0E23\u0E31\u0E1A \uD83D\uDE04", id);
          }

          if (choice === "lawsuit") {
            gotLawsuit(id);
          }

          if (choice === "RektP") {
            bot.sendTemplate({
              title: "รบกวนบอกประเภทของหมายศาลคดีแพ่งด้วยครับ ✌️",
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
            }, id);
          }

          if (choice === "RektA") {
            bot.sendTemplate({
              title: "รบกวนบอกประเภทของหมายศาลคดีอาญาด้วยครับ ✌️",
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
            }, id);
          }
        }
      });
    }

    return Promise.resolve({ data: "200" });
  };
};

function debug() {
  this.use("linehook", new WebHookHandler(), function (req, res, next) {
    res.status(200);
    next();
  });
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("feathers-errors/handler");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("feathers-hooks");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("feathers-memory");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("feathers-rest");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("feathers-socketio");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("feathers-sync");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("graphql-server-express");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("request-promise-native");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map