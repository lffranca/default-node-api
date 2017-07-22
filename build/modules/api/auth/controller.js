"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = undefined;

var _login = require("./services/login");

var login = exports.login = function login(req, res) {
  return Promise.resolve("TEST DEV").then(_login.verifyData).then(function (result) {
    return res.status(200).json(result);
  }).catch(function (error) {
    return res.status(500).json(error);
  });
};
//# sourceMappingURL=controller.js.map