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
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token, expected ) (244:50)\n\n\u001b[0m \u001b[90m 242 | \u001b[39m              \u001b[32m`ต้องเรียกให้เพื่อนบ้านรื้อถอนส่วนที่รุกล้ำที่ดินแล้วทำที่ดินให้เป็นตามเดิม ผู้สร้างช่วยออกค่าใช้จ่ายได้ (ป.พ.พ. มาตรา 1312 วรรค 2)`\u001b[39m\n \u001b[90m 243 | \u001b[39m            ]\u001b[33m,\u001b[39m id)\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 244 | \u001b[39m          } \u001b[36melse\u001b[39m \u001b[36mif\u001b[39m (text\u001b[33m.\u001b[39mmatch(\u001b[35m/หนี้บัตรเครดิต/\u001b[39m) {\n \u001b[90m     | \u001b[39m                                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 245 | \u001b[39m            bot\u001b[33m.\u001b[39msendText(\u001b[33mREPLY\u001b[39m\u001b[33m.\u001b[39mnomoney\u001b[33m,\u001b[39m id)\n \u001b[90m 246 | \u001b[39m          } \u001b[36melse\u001b[39m \u001b[36mif\u001b[39m (text\u001b[33m.\u001b[39mmatch(\u001b[35m/ตำรวจยึดรถ/\u001b[39m)) {\n \u001b[90m 247 | \u001b[39m            bot\u001b[33m.\u001b[39msendText(\u001b[33mREPLY\u001b[39m\u001b[33m.\u001b[39mpolicetookmycar\u001b[33m,\u001b[39m id)\u001b[0m\n");

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
/* 17 */,
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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map