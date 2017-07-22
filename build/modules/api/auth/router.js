'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _controller = require('./controller');

var router = new _express.Router();

router.get('/', _controller.login);

exports.default = router;
//# sourceMappingURL=router.js.map