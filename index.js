"use strict";

var _D;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e8) { throw _e8; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e9) { didErr = true; err = _e9; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var Z8 = Object.create;
var Y8 = Object.getPrototypeOf,
  P4 = Object.defineProperty,
  J8 = Object.getOwnPropertyNames;
var K8 = Object.prototype.hasOwnProperty;
var x0 = function x0(Z, Y, J) {
  J = Z != null ? Z8(Y8(Z)) : {};
  var K = Y || !Z || !Z.__esModule ? P4(J, "default", {
    value: Z,
    enumerable: !0
  }) : J;
  var _iterator = _createForOfIteratorHelper(J8(Z)),
    _step;
  try {
    var _loop = function _loop() {
      var Q = _step.value;
      if (!K8.call(K, Q)) P4(K, Q, {
        get: function get() {
          return Z[Q];
        },
        enumerable: !0
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return K;
};
var X8 = function X8(Z, Y) {
  return function () {
    return Y || Z((Y = {
      exports: {}
    }).exports, Y), Y.exports;
  };
};
var V0 = function V0(Z, Y) {
  for (var J in Y) P4(Z, J, {
    get: Y[J],
    enumerable: !0,
    configurable: !0,
    set: function set(K) {
      return Y[J] = function () {
        return K;
      };
    }
  });
};
var O0 = X8(function (iK, CZ) {
  CZ.exports = {
    trueFunc: function Z() {
      return !0;
    },
    falseFunc: function Z() {
      return !1;
    }
  };
});
var c5 = /*#__PURE__*/function () {
  function c5() {
    _classCallCheck(this, c5);
    _defineProperty(this, "_baseUrl", "");
    _defineProperty(this, "writeWith", "js");
  }
  _createClass(c5, [{
    key: "baseUrl",
    get: function get() {
      return this._baseUrl;
    }
  }]);
  return c5;
}();
var v4 = /*#__PURE__*/function (_c) {
  _inherits(v4, _c);
  var _super = _createSuper(v4);
  function v4() {
    var _this;
    _classCallCheck(this, v4);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "type", "comic");
    return _this;
  }
  _createClass(v4, [{
    key: "getExplorer",
    value: function getExplorer(Z, Y) {
      throw new UnimplementedError();
    }
  }, {
    key: "fetchPage",
    value: function fetchPage(Z, Y) {
      throw new UnimplementedError();
    }
  }, {
    key: "getSuggest",
    value: function getSuggest(Z) {
      throw new UnimplementedError();
    }
  }, {
    key: "getComicModes",
    value: function getComicModes(Z) {
      throw new UnimplementedError();
    }
  }]);
  return v4;
}(c5);
var Q8;
(function (Z) {
  Z.leftToRight = "leftToRight", Z.rightToLeft = "rightToLeft", Z.topToBottom = "topToBottom", Z.webToon = "webToon";
})(Q8 || (Q8 = {}));
function h0(Z, Y, J) {
  return {
    src: Z,
    headers: Y,
    extra: J
  };
}
var V8;
(function (Z) {
  Z.Male = "male", Z.Female = "female", Z.Other = "other";
})(V8 || (V8 = {}));
var x1;
(function (Z) {
  Z.Ongoing = "ongoing", Z.Completed = "completed", Z.Canceled = "canceled", Z.Unknown = "unknown", Z.OnHiatus = "on_hiatus", Z.PublishingFinished = "publishing_finished";
})(x1 || (x1 = {}));
function d5(Z) {
  Object.assign(globalThis, {
    __$HOYOMI_PLUGIN$__: Z
  });
}
function d(Z) {
  return Z;
}
var l5 = "0.0.12",
  s5 = "Plugin https://hentaivn.cx for Hoyomi app";
var A4 = {};
V0(A4, {
  xml: function xml() {
    return s8;
  },
  text: function text() {
    return G0;
  },
  root: function root() {
    return a8;
  },
  parseHTML: function parseHTML() {
    return p8;
  },
  merge: function merge() {
    return UZ;
  },
  html: function html() {
    return l8;
  },
  extract: function extract() {
    return n8;
  },
  contains: function contains() {
    return m1;
  }
});
var P0 = {};
V0(P0, {
  uniqueSort: function uniqueSort() {
    return L0;
  },
  textContent: function textContent() {
    return U0;
  },
  testElement: function testElement() {
    return $8;
  },
  replaceElement: function replaceElement() {
    return g8;
  },
  removeSubsets: function removeSubsets() {
    return k8;
  },
  removeElement: function removeElement() {
    return B0;
  },
  prevElementSibling: function prevElementSibling() {
    return S1;
  },
  prependChild: function prependChild() {
    return x8;
  },
  prepend: function prepend() {
    return h8;
  },
  nextElementSibling: function nextElementSibling() {
    return I1;
  },
  isText: function isText() {
    return r;
  },
  isTag: function isTag() {
    return O;
  },
  isDocument: function isDocument() {
    return n;
  },
  isComment: function isComment() {
    return C0;
  },
  isCDATA: function isCDATA() {
    return i0;
  },
  innerText: function innerText() {
    return J1;
  },
  hasChildren: function hasChildren() {
    return C;
  },
  hasAttrib: function hasAttrib() {
    return f8;
  },
  getText: function getText() {
    return E1;
  },
  getSiblings: function getSiblings() {
    return k4;
  },
  getParent: function getParent() {
    return KZ;
  },
  getOuterHTML: function getOuterHTML() {
    return JZ;
  },
  getName: function getName() {
    return b8;
  },
  getInnerHTML: function getInnerHTML() {
    return O8;
  },
  getFeed: function getFeed() {
    return _8;
  },
  getElementsByTagType: function getElementsByTagType() {
    return S8;
  },
  getElementsByTagName: function getElementsByTagName() {
    return D0;
  },
  getElementsByClassName: function getElementsByClassName() {
    return I8;
  },
  getElements: function getElements() {
    return u8;
  },
  getElementById: function getElementById() {
    return E8;
  },
  getChildren: function getChildren() {
    return d0;
  },
  getAttributeValue: function getAttributeValue() {
    return y8;
  },
  findOneChild: function findOneChild() {
    return C8;
  },
  findOne: function findOne() {
    return _1;
  },
  findAll: function findAll() {
    return D8;
  },
  find: function find() {
    return k1;
  },
  filter: function filter() {
    return r0;
  },
  existsOne: function existsOne() {
    return XZ;
  },
  compareDocumentPosition: function compareDocumentPosition() {
    return VZ;
  },
  appendChild: function appendChild() {
    return N8;
  },
  append: function append() {
    return M8;
  },
  DocumentPosition: function DocumentPosition() {
    return o;
  }
});
var p = {};
V0(p, {
  isTag: function isTag() {
    return O4;
  },
  Text: function Text() {
    return f4;
  },
  Tag: function Tag() {
    return x4;
  },
  Style: function Style() {
    return M4;
  },
  Script: function Script() {
    return N4;
  },
  Root: function Root() {
    return y4;
  },
  ElementType: function ElementType() {
    return x;
  },
  Doctype: function Doctype() {
    return C4;
  },
  Directive: function Directive() {
    return b4;
  },
  Comment: function Comment() {
    return g4;
  },
  CDATA: function CDATA() {
    return h4;
  }
});
var x;
(function (Z) {
  Z.Root = "root", Z.Text = "text", Z.Directive = "directive", Z.Comment = "comment", Z.Script = "script", Z.Style = "style", Z.Tag = "tag", Z.CDATA = "cdata", Z.Doctype = "doctype";
})(x || (x = {}));
function O4(Z) {
  return Z.type === x.Tag || Z.type === x.Script || Z.type === x.Style;
}
var _x = x,
  y4 = _x.Root,
  f4 = _x.Text,
  b4 = _x.Directive,
  g4 = _x.Comment,
  N4 = _x.Script,
  M4 = _x.Style,
  x4 = _x.Tag,
  h4 = _x.CDATA,
  C4 = _x.Doctype;
var G4 = /*#__PURE__*/function () {
  function G4() {
    _classCallCheck(this, G4);
    this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
  }
  _createClass(G4, [{
    key: "parentNode",
    get: function get() {
      return this.parent;
    },
    set: function set(Z) {
      this.parent = Z;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      return this.prev;
    },
    set: function set(Z) {
      this.prev = Z;
    }
  }, {
    key: "nextSibling",
    get: function get() {
      return this.next;
    },
    set: function set(Z) {
      this.next = Z;
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var Z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      return c0(this, Z);
    }
  }]);
  return G4;
}();
var h1 = /*#__PURE__*/function (_G) {
  _inherits(h1, _G);
  var _super2 = _createSuper(h1);
  function h1(Z) {
    var _this2;
    _classCallCheck(this, h1);
    _this2 = _super2.call(this);
    _this2.data = Z;
    return _this2;
  }
  _createClass(h1, [{
    key: "nodeValue",
    get: function get() {
      return this.data;
    },
    set: function set(Z) {
      this.data = Z;
    }
  }]);
  return h1;
}(G4);
var W0 = /*#__PURE__*/function (_h) {
  _inherits(W0, _h);
  var _super3 = _createSuper(W0);
  function W0() {
    var _this3;
    _classCallCheck(this, W0);
    _this3 = _super3.apply(this, arguments);
    _this3.type = x.Text;
    return _this3;
  }
  _createClass(W0, [{
    key: "nodeType",
    get: function get() {
      return 3;
    }
  }]);
  return W0;
}(h1);
var A0 = /*#__PURE__*/function (_h2) {
  _inherits(A0, _h2);
  var _super4 = _createSuper(A0);
  function A0() {
    var _this4;
    _classCallCheck(this, A0);
    _this4 = _super4.apply(this, arguments);
    _this4.type = x.Comment;
    return _this4;
  }
  _createClass(A0, [{
    key: "nodeType",
    get: function get() {
      return 8;
    }
  }]);
  return A0;
}(h1);
var T0 = /*#__PURE__*/function (_h3) {
  _inherits(T0, _h3);
  var _super5 = _createSuper(T0);
  function T0(Z, Y) {
    var _this5;
    _classCallCheck(this, T0);
    _this5 = _super5.call(this, Y);
    _this5.name = Z, _this5.type = x.Directive;
    return _this5;
  }
  _createClass(T0, [{
    key: "nodeType",
    get: function get() {
      return 1;
    }
  }]);
  return T0;
}(h1);
var C1 = /*#__PURE__*/function (_G2) {
  _inherits(C1, _G2);
  var _super6 = _createSuper(C1);
  function C1(Z) {
    var _this6;
    _classCallCheck(this, C1);
    _this6 = _super6.call(this);
    _this6.children = Z;
    return _this6;
  }
  _createClass(C1, [{
    key: "firstChild",
    get: function get() {
      var Z;
      return (Z = this.children[0]) !== null && Z !== void 0 ? Z : null;
    }
  }, {
    key: "lastChild",
    get: function get() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }
  }, {
    key: "childNodes",
    get: function get() {
      return this.children;
    },
    set: function set(Z) {
      this.children = Z;
    }
  }]);
  return C1;
}(G4);
var D1 = /*#__PURE__*/function (_C) {
  _inherits(D1, _C);
  var _super7 = _createSuper(D1);
  function D1() {
    var _this7;
    _classCallCheck(this, D1);
    _this7 = _super7.apply(this, arguments);
    _this7.type = x.CDATA;
    return _this7;
  }
  _createClass(D1, [{
    key: "nodeType",
    get: function get() {
      return 4;
    }
  }]);
  return D1;
}(C1);
var a = /*#__PURE__*/function (_C2) {
  _inherits(a, _C2);
  var _super8 = _createSuper(a);
  function a() {
    var _this8;
    _classCallCheck(this, a);
    _this8 = _super8.apply(this, arguments);
    _this8.type = x.Root;
    return _this8;
  }
  _createClass(a, [{
    key: "nodeType",
    get: function get() {
      return 9;
    }
  }]);
  return a;
}(C1);
var m0 = /*#__PURE__*/function (_C3) {
  _inherits(m0, _C3);
  var _super9 = _createSuper(m0);
  function m0(Z, Y) {
    var _this9;
    var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var K = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Z === "script" ? x.Script : Z === "style" ? x.Style : x.Tag;
    _classCallCheck(this, m0);
    _this9 = _super9.call(this, J);
    _this9.name = Z, _this9.attribs = Y, _this9.type = K;
    return _this9;
  }
  _createClass(m0, [{
    key: "nodeType",
    get: function get() {
      return 1;
    }
  }, {
    key: "tagName",
    get: function get() {
      return this.name;
    },
    set: function set(Z) {
      this.name = Z;
    }
  }, {
    key: "attributes",
    get: function get() {
      var _this10 = this;
      return Object.keys(this.attribs).map(function (Z) {
        var Y, J;
        return {
          name: Z,
          value: _this10.attribs[Z],
          namespace: (Y = _this10["x-attribsNamespace"]) === null || Y === void 0 ? void 0 : Y[Z],
          prefix: (J = _this10["x-attribsPrefix"]) === null || J === void 0 ? void 0 : J[Z]
        };
      });
    }
  }]);
  return m0;
}(C1);
function O(Z) {
  return O4(Z);
}
function i0(Z) {
  return Z.type === x.CDATA;
}
function r(Z) {
  return Z.type === x.Text;
}
function C0(Z) {
  return Z.type === x.Comment;
}
function G1(Z) {
  return Z.type === x.Directive;
}
function n(Z) {
  return Z.type === x.Root;
}
function C(Z) {
  return Object.prototype.hasOwnProperty.call(Z, "children");
}
function c0(Z) {
  var Y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var J;
  if (r(Z)) J = new W0(Z.data);else if (C0(Z)) J = new A0(Z.data);else if (O(Z)) {
    var K = Y ? D4(Z.children) : [],
      Q = new m0(Z.name, _objectSpread({}, Z.attribs), K);
    if (K.forEach(function (V) {
      return V.parent = Q;
    }), Z.namespace != null) Q.namespace = Z.namespace;
    if (Z["x-attribsNamespace"]) Q["x-attribsNamespace"] = _objectSpread({}, Z["x-attribsNamespace"]);
    if (Z["x-attribsPrefix"]) Q["x-attribsPrefix"] = _objectSpread({}, Z["x-attribsPrefix"]);
    J = Q;
  } else if (i0(Z)) {
    var _K = Y ? D4(Z.children) : [],
      _Q = new D1(_K);
    _K.forEach(function (V) {
      return V.parent = _Q;
    }), J = _Q;
  } else if (n(Z)) {
    var _K2 = Y ? D4(Z.children) : [],
      _Q2 = new a(_K2);
    if (_K2.forEach(function (V) {
      return V.parent = _Q2;
    }), Z["x-mode"]) _Q2["x-mode"] = Z["x-mode"];
    J = _Q2;
  } else if (G1(Z)) {
    var _K3 = new T0(Z.name, Z.data);
    if (Z["x-name"] != null) _K3["x-name"] = Z["x-name"], _K3["x-publicId"] = Z["x-publicId"], _K3["x-systemId"] = Z["x-systemId"];
    J = _K3;
  } else throw new Error("Not implemented yet: ".concat(Z.type));
  if (J.startIndex = Z.startIndex, J.endIndex = Z.endIndex, Z.sourceCodeLocation != null) J.sourceCodeLocation = Z.sourceCodeLocation;
  return J;
}
function D4(Z) {
  var Y = Z.map(function (J) {
    return c0(J, !0);
  });
  for (var J = 1; J < Y.length; J++) Y[J].prev = Y[J - 1], Y[J - 1].next = Y[J];
  return Y;
}
var p5 = {
  withStartIndices: !1,
  withEndIndices: !1,
  xmlMode: !1
};
var $4 = /*#__PURE__*/function () {
  function $4(Z, Y, J) {
    _classCallCheck(this, $4);
    if (this.dom = [], this.root = new a(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof Y === "function") J = Y, Y = p5;
    if (_typeof(Z) === "object") Y = Z, Z = void 0;
    this.callback = Z !== null && Z !== void 0 ? Z : null, this.options = Y !== null && Y !== void 0 ? Y : p5, this.elementCB = J !== null && J !== void 0 ? J : null;
  }
  _createClass($4, [{
    key: "onparserinit",
    value: function onparserinit(Z) {
      this.parser = Z;
    }
  }, {
    key: "onreset",
    value: function onreset() {
      this.dom = [], this.root = new a(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
    }
  }, {
    key: "onend",
    value: function onend() {
      if (this.done) return;
      this.done = !0, this.parser = null, this.handleCallback(null);
    }
  }, {
    key: "onerror",
    value: function onerror(Z) {
      this.handleCallback(Z);
    }
  }, {
    key: "onclosetag",
    value: function onclosetag() {
      this.lastNode = null;
      var Z = this.tagStack.pop();
      if (this.options.withEndIndices) Z.endIndex = this.parser.endIndex;
      if (this.elementCB) this.elementCB(Z);
    }
  }, {
    key: "onopentag",
    value: function onopentag(Z, Y) {
      var J = this.options.xmlMode ? x.Tag : void 0,
        K = new m0(Z, Y, void 0, J);
      this.addNode(K), this.tagStack.push(K);
    }
  }, {
    key: "ontext",
    value: function ontext(Z) {
      var Y = this.lastNode;
      if (Y && Y.type === x.Text) {
        if (Y.data += Z, this.options.withEndIndices) Y.endIndex = this.parser.endIndex;
      } else {
        var J = new W0(Z);
        this.addNode(J), this.lastNode = J;
      }
    }
  }, {
    key: "oncomment",
    value: function oncomment(Z) {
      if (this.lastNode && this.lastNode.type === x.Comment) {
        this.lastNode.data += Z;
        return;
      }
      var Y = new A0(Z);
      this.addNode(Y), this.lastNode = Y;
    }
  }, {
    key: "oncommentend",
    value: function oncommentend() {
      this.lastNode = null;
    }
  }, {
    key: "oncdatastart",
    value: function oncdatastart() {
      var Z = new W0(""),
        Y = new D1([Z]);
      this.addNode(Y), Z.parent = Y, this.lastNode = Z;
    }
  }, {
    key: "oncdataend",
    value: function oncdataend() {
      this.lastNode = null;
    }
  }, {
    key: "onprocessinginstruction",
    value: function onprocessinginstruction(Z, Y) {
      var J = new T0(Z, Y);
      this.addNode(J);
    }
  }, {
    key: "handleCallback",
    value: function handleCallback(Z) {
      if (typeof this.callback === "function") this.callback(Z, this.dom);else if (Z) throw Z;
    }
  }, {
    key: "addNode",
    value: function addNode(Z) {
      var Y = this.tagStack[this.tagStack.length - 1],
        J = Y.children[Y.children.length - 1];
      if (this.options.withStartIndices) Z.startIndex = this.parser.startIndex;
      if (this.options.withEndIndices) Z.endIndex = this.parser.endIndex;
      if (Y.children.push(Z), J) Z.prev = J, J.next = Z;
      Z.parent = Y, this.lastNode = null;
    }
  }]);
  return $4;
}();
var a5 = /["&'<>$\x80-\uFFFF]/g,
  n5 = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]),
  z8 = String.prototype.codePointAt != null ? function (Z, Y) {
    return Z.codePointAt(Y);
  } : function (Z, Y) {
    return (Z.charCodeAt(Y) & 64512) === 55296 ? (Z.charCodeAt(Y) - 55296) * 1024 + Z.charCodeAt(Y + 1) - 56320 + 65536 : Z.charCodeAt(Y);
  };
function $1(Z) {
  var Y = "",
    J = 0,
    K;
  while ((K = a5.exec(Z)) !== null) {
    var Q = K.index,
      V = Z.charCodeAt(Q),
      z = n5.get(V);
    if (z !== void 0) Y += Z.substring(J, Q) + z, J = Q + 1;else Y += "".concat(Z.substring(J, Q), "&#x").concat(z8(Z, Q).toString(16), ";"), J = a5.lastIndex += Number((V & 64512) === 55296);
  }
  return Y + Z.substr(J);
}
function u4(Z, Y) {
  return function J(K) {
    var Q,
      V = 0,
      z = "";
    while (Q = Z.exec(K)) {
      if (V !== Q.index) z += K.substring(V, Q.index);
      z += Y.get(Q[0].charCodeAt(0)), V = Q.index + 1;
    }
    return z + K.substring(V);
  };
}
var H8 = u4(/[&<>'"]/g, n5),
  E4 = u4(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])),
  I4 = u4(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var o5;
(function (Z) {
  Z[Z.XML = 0] = "XML", Z[Z.HTML = 1] = "HTML";
})(o5 || (o5 = {}));
var t5;
(function (Z) {
  Z[Z.UTF8 = 0] = "UTF8", Z[Z.ASCII = 1] = "ASCII", Z[Z.Extensive = 2] = "Extensive", Z[Z.Attribute = 3] = "Attribute", Z[Z.Text = 4] = "Text";
})(t5 || (t5 = {}));
var e5 = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (Z) {
    return [Z.toLowerCase(), Z];
  })),
  ZZ = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (Z) {
    return [Z.toLowerCase(), Z];
  }));
var W8 = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function U8(Z) {
  return Z.replace(/"/g, "&quot;");
}
function B8(Z, Y) {
  var J;
  if (!Z) return;
  var K = ((J = Y.encodeEntities) !== null && J !== void 0 ? J : Y.decodeEntities) === !1 ? U8 : Y.xmlMode || Y.encodeEntities !== "utf8" ? $1 : E4;
  return Object.keys(Z).map(function (Q) {
    var V, z;
    var B = (V = Z[Q]) !== null && V !== void 0 ? V : "";
    if (Y.xmlMode === "foreign") Q = (z = ZZ.get(Q)) !== null && z !== void 0 ? z : Q;
    if (!Y.emptyAttrs && !Y.xmlMode && B === "") return Q;
    return "".concat(Q, "=\"").concat(K(B), "\"");
  }).join(" ");
}
var YZ = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function S4(Z) {
  var Y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var J = "length" in Z ? Z : [Z],
    K = "";
  for (var Q = 0; Q < J.length; Q++) K += F8(J[Q], Y);
  return K;
}
var u1 = S4;
function F8(Z, Y) {
  switch (Z.type) {
    case y4:
      return S4(Z.children, Y);
    case C4:
    case b4:
      return L8(Z);
    case g4:
      return v8(Z);
    case h4:
      return P8(Z);
    case N4:
    case M4:
    case x4:
      return j8(Z, Y);
    case f4:
      return R8(Z, Y);
  }
}
var w8 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]),
  q8 = new Set(["svg", "math"]);
function j8(Z, Y) {
  var J;
  if (Y.xmlMode === "foreign") {
    if (Z.name = (J = e5.get(Z.name)) !== null && J !== void 0 ? J : Z.name, Z.parent && w8.has(Z.parent.name)) Y = _objectSpread(_objectSpread({}, Y), {}, {
      xmlMode: !1
    });
  }
  if (!Y.xmlMode && q8.has(Z.name)) Y = _objectSpread(_objectSpread({}, Y), {}, {
    xmlMode: "foreign"
  });
  var K = "<".concat(Z.name),
    Q = B8(Z.attribs, Y);
  if (Q) K += " ".concat(Q);
  if (Z.children.length === 0 && (Y.xmlMode ? Y.selfClosingTags !== !1 : Y.selfClosingTags && YZ.has(Z.name))) {
    if (!Y.xmlMode) K += " ";
    K += "/>";
  } else {
    if (K += ">", Z.children.length > 0) K += S4(Z.children, Y);
    if (Y.xmlMode || !YZ.has(Z.name)) K += "</".concat(Z.name, ">");
  }
  return K;
}
function L8(Z) {
  return "<".concat(Z.data, ">");
}
function R8(Z, Y) {
  var J;
  var K = Z.data || "";
  if (((J = Y.encodeEntities) !== null && J !== void 0 ? J : Y.decodeEntities) !== !1 && !(!Y.xmlMode && Z.parent && W8.has(Z.parent.name))) K = Y.xmlMode || Y.encodeEntities !== "utf8" ? $1(K) : I4(K);
  return K;
}
function P8(Z) {
  return "<![CDATA[".concat(Z.children[0].data, "]]>");
}
function v8(Z) {
  return "<!--".concat(Z.data, "-->");
}
function JZ(Z, Y) {
  return u1(Z, Y);
}
function O8(Z, Y) {
  return C(Z) ? Z.children.map(function (J) {
    return JZ(J, Y);
  }).join("") : "";
}
function E1(Z) {
  if (Array.isArray(Z)) return Z.map(E1).join("");
  if (O(Z)) return Z.name === "br" ? "\n" : E1(Z.children);
  if (i0(Z)) return E1(Z.children);
  if (r(Z)) return Z.data;
  return "";
}
function U0(Z) {
  if (Array.isArray(Z)) return Z.map(U0).join("");
  if (C(Z) && !C0(Z)) return U0(Z.children);
  if (r(Z)) return Z.data;
  return "";
}
function J1(Z) {
  if (Array.isArray(Z)) return Z.map(J1).join("");
  if (C(Z) && (Z.type === x.Tag || i0(Z))) return J1(Z.children);
  if (r(Z)) return Z.data;
  return "";
}
function d0(Z) {
  return C(Z) ? Z.children : [];
}
function KZ(Z) {
  return Z.parent || null;
}
function k4(Z) {
  var Y = KZ(Z);
  if (Y != null) return d0(Y);
  var J = [Z],
    K = Z.prev,
    Q = Z.next;
  while (K != null) {
    var _K4;
    J.unshift(K), (_K4 = K, K = _K4.prev);
  }
  while (Q != null) {
    var _Q3;
    J.push(Q), (_Q3 = Q, Q = _Q3.next);
  }
  return J;
}
function y8(Z, Y) {
  var J;
  return (J = Z.attribs) === null || J === void 0 ? void 0 : J[Y];
}
function f8(Z, Y) {
  return Z.attribs != null && Object.prototype.hasOwnProperty.call(Z.attribs, Y) && Z.attribs[Y] != null;
}
function b8(Z) {
  return Z.name;
}
function I1(Z) {
  var Y = Z.next;
  while (Y !== null && !O(Y)) {
    var _Y2 = Y;
    Y = _Y2.next;
  }
  return Y;
}
function S1(Z) {
  var Y = Z.prev;
  while (Y !== null && !O(Y)) {
    var _Y3 = Y;
    Y = _Y3.prev;
  }
  return Y;
}
function B0(Z) {
  if (Z.prev) Z.prev.next = Z.next;
  if (Z.next) Z.next.prev = Z.prev;
  if (Z.parent) {
    var Y = Z.parent.children,
      J = Y.lastIndexOf(Z);
    if (J >= 0) Y.splice(J, 1);
  }
  Z.next = null, Z.prev = null, Z.parent = null;
}
function g8(Z, Y) {
  var J = Y.prev = Z.prev;
  if (J) J.next = Y;
  var K = Y.next = Z.next;
  if (K) K.prev = Y;
  var Q = Y.parent = Z.parent;
  if (Q) {
    var V = Q.children;
    V[V.lastIndexOf(Z)] = Y, Z.parent = null;
  }
}
function N8(Z, Y) {
  if (B0(Y), Y.next = null, Y.parent = Z, Z.children.push(Y) > 1) {
    var J = Z.children[Z.children.length - 2];
    J.next = Y, Y.prev = J;
  } else Y.prev = null;
}
function M8(Z, Y) {
  B0(Y);
  var J = Z.parent,
    K = Z.next;
  if (Y.next = K, Y.prev = Z, Z.next = Y, Y.parent = J, K) {
    if (K.prev = Y, J) {
      var Q = J.children;
      Q.splice(Q.lastIndexOf(K), 0, Y);
    }
  } else if (J) J.children.push(Y);
}
function x8(Z, Y) {
  if (B0(Y), Y.parent = Z, Y.prev = null, Z.children.unshift(Y) !== 1) {
    var J = Z.children[1];
    J.prev = Y, Y.next = J;
  } else Y.next = null;
}
function h8(Z, Y) {
  B0(Y);
  var J = Z.parent;
  if (J) {
    var K = J.children;
    K.splice(K.indexOf(Z), 0, Y);
  }
  if (Z.prev) Z.prev.next = Y;
  Y.parent = J, Y.prev = Z.prev, Y.next = Z, Z.prev = Y;
}
function r0(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var K = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1 / 0;
  return k1(Z, Array.isArray(Y) ? Y : [Y], J, K);
}
function k1(Z, Y, J, K) {
  var Q = [],
    V = [Array.isArray(Y) ? Y : [Y]],
    z = [0];
  for (;;) {
    if (z[0] >= V[0].length) {
      if (z.length === 1) return Q;
      V.shift(), z.shift();
      continue;
    }
    var B = V[0][z[0]++];
    if (Z(B)) {
      if (Q.push(B), --K <= 0) return Q;
    }
    if (J && C(B) && B.children.length > 0) z.unshift(0), V.unshift(B.children);
  }
}
function C8(Z, Y) {
  return Y.find(Z);
}
function _1(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var K = Array.isArray(Y) ? Y : [Y];
  for (var Q = 0; Q < K.length; Q++) {
    var V = K[Q];
    if (O(V) && Z(V)) return V;
    if (J && C(V) && V.children.length > 0) {
      var z = _1(Z, V.children, !0);
      if (z) return z;
    }
  }
  return null;
}
function XZ(Z, Y) {
  return (Array.isArray(Y) ? Y : [Y]).some(function (J) {
    return O(J) && Z(J) || C(J) && XZ(Z, J.children);
  });
}
function D8(Z, Y) {
  var J = [],
    K = [Array.isArray(Y) ? Y : [Y]],
    Q = [0];
  for (;;) {
    if (Q[0] >= K[0].length) {
      if (K.length === 1) return J;
      K.shift(), Q.shift();
      continue;
    }
    var V = K[0][Q[0]++];
    if (O(V) && Z(V)) J.push(V);
    if (C(V) && V.children.length > 0) Q.unshift(0), K.unshift(V.children);
  }
}
var A1 = {
  tag_name: function tag_name(Z) {
    if (typeof Z === "function") return function (Y) {
      return O(Y) && Z(Y.name);
    };else if (Z === "*") return O;
    return function (Y) {
      return O(Y) && Y.name === Z;
    };
  },
  tag_type: function tag_type(Z) {
    if (typeof Z === "function") return function (Y) {
      return Z(Y.type);
    };
    return function (Y) {
      return Y.type === Z;
    };
  },
  tag_contains: function tag_contains(Z) {
    if (typeof Z === "function") return function (Y) {
      return r(Y) && Z(Y.data);
    };
    return function (Y) {
      return r(Y) && Y.data === Z;
    };
  }
};
function _4(Z, Y) {
  if (typeof Y === "function") return function (J) {
    return O(J) && Y(J.attribs[Z]);
  };
  return function (J) {
    return O(J) && J.attribs[Z] === Y;
  };
}
function G8(Z, Y) {
  return function (J) {
    return Z(J) || Y(J);
  };
}
function QZ(Z) {
  var Y = Object.keys(Z).map(function (J) {
    var K = Z[J];
    return Object.prototype.hasOwnProperty.call(A1, J) ? A1[J](K) : _4(J, K);
  });
  return Y.length === 0 ? null : Y.reduce(G8);
}
function $8(Z, Y) {
  var J = QZ(Z);
  return J ? J(Y) : !0;
}
function u8(Z, Y, J) {
  var K = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1 / 0;
  var Q = QZ(Z);
  return Q ? r0(Q, Y, J, K) : [];
}
function E8(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  if (!Array.isArray(Y)) Y = [Y];
  return _1(_4("id", Z), Y, J);
}
function D0(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var K = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1 / 0;
  return r0(A1.tag_name(Z), Y, J, K);
}
function I8(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var K = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1 / 0;
  return r0(_4("class", Z), Y, J, K);
}
function S8(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var K = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1 / 0;
  return r0(A1.tag_type(Z), Y, J, K);
}
function k8(Z) {
  var Y = Z.length;
  while (--Y >= 0) {
    var J = Z[Y];
    if (Y > 0 && Z.lastIndexOf(J, Y - 1) >= 0) {
      Z.splice(Y, 1);
      continue;
    }
    for (var K = J.parent; K; K = K.parent) if (Z.includes(K)) {
      Z.splice(Y, 1);
      break;
    }
  }
  return Z;
}
var o;
(function (Z) {
  Z[Z.DISCONNECTED = 1] = "DISCONNECTED", Z[Z.PRECEDING = 2] = "PRECEDING", Z[Z.FOLLOWING = 4] = "FOLLOWING", Z[Z.CONTAINS = 8] = "CONTAINS", Z[Z.CONTAINED_BY = 16] = "CONTAINED_BY";
})(o || (o = {}));
function VZ(Z, Y) {
  var J = [],
    K = [];
  if (Z === Y) return 0;
  var Q = C(Z) ? Z : Z.parent;
  while (Q) J.unshift(Q), Q = Q.parent;
  Q = C(Y) ? Y : Y.parent;
  while (Q) K.unshift(Q), Q = Q.parent;
  var V = Math.min(J.length, K.length),
    z = 0;
  while (z < V && J[z] === K[z]) z++;
  if (z === 0) return o.DISCONNECTED;
  var B = J[z - 1],
    F = B.children,
    q = J[z],
    R = K[z];
  if (F.indexOf(q) > F.indexOf(R)) {
    if (B === Y) return o.FOLLOWING | o.CONTAINED_BY;
    return o.FOLLOWING;
  }
  if (B === Z) return o.PRECEDING | o.CONTAINS;
  return o.PRECEDING;
}
function L0(Z) {
  return Z = Z.filter(function (Y, J, K) {
    return !K.includes(Y, J + 1);
  }), Z.sort(function (Y, J) {
    var K = VZ(Y, J);
    if (K & o.PRECEDING) return -1;else if (K & o.FOLLOWING) return 1;
    return 0;
  }), Z;
}
function _8(Z) {
  var Y = T1(c8, Z);
  return !Y ? null : Y.name === "feed" ? A8(Y) : T8(Y);
}
function A8(Z) {
  var Y;
  var J = Z.children,
    K = {
      type: "atom",
      items: D0("entry", J).map(function (z) {
        var B;
        var F = z.children,
          q = {
            media: zZ(F)
          };
        l(q, "id", "id", F), l(q, "title", "title", F);
        var R = (B = T1("link", F)) === null || B === void 0 ? void 0 : B.attribs.href;
        if (R) q.link = R;
        var f = R0("summary", F) || R0("content", F);
        if (f) q.description = f;
        var y = R0("updated", F);
        if (y) q.pubDate = new Date(y);
        return q;
      })
    };
  l(K, "id", "id", J), l(K, "title", "title", J);
  var Q = (Y = T1("link", J)) === null || Y === void 0 ? void 0 : Y.attribs.href;
  if (Q) K.link = Q;
  l(K, "description", "subtitle", J);
  var V = R0("updated", J);
  if (V) K.updated = new Date(V);
  return l(K, "author", "email", J, !0), K;
}
function T8(Z) {
  var Y, J;
  var K = (J = (Y = T1("channel", Z.children)) === null || Y === void 0 ? void 0 : Y.children) !== null && J !== void 0 ? J : [],
    Q = {
      type: Z.name.substr(0, 3),
      id: "",
      items: D0("item", Z.children).map(function (z) {
        var B = z.children,
          F = {
            media: zZ(B)
          };
        l(F, "id", "guid", B), l(F, "title", "title", B), l(F, "link", "link", B), l(F, "description", "description", B);
        var q = R0("pubDate", B) || R0("dc:date", B);
        if (q) F.pubDate = new Date(q);
        return F;
      })
    };
  l(Q, "title", "title", K), l(Q, "link", "link", K), l(Q, "description", "description", K);
  var V = R0("lastBuildDate", K);
  if (V) Q.updated = new Date(V);
  return l(Q, "author", "managingEditor", K, !0), Q;
}
var m8 = ["url", "type", "lang"],
  i8 = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function zZ(Z) {
  return D0("media:content", Z).map(function (Y) {
    var J = Y.attribs,
      K = {
        medium: J.medium,
        isDefault: !!J.isDefault
      };
    var _iterator2 = _createForOfIteratorHelper(m8),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var Q = _step2.value;
        if (J[Q]) K[Q] = J[Q];
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(i8),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _Q4 = _step3.value;
        if (J[_Q4]) K[_Q4] = parseInt(J[_Q4], 10);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (J.expression) K.expression = J.expression;
    return K;
  });
}
function T1(Z, Y) {
  return D0(Z, Y, !0, 1)[0];
}
function R0(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  return U0(D0(Z, Y, J, 1)).trim();
}
function l(Z, Y, J, K) {
  var Q = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
  var V = R0(J, K, Q);
  if (V) Z[Y] = V;
}
function c8(Z) {
  return Z === "rss" || Z === "feed" || Z === "rdf:RDF";
}
var d8 = {
  _useHtmlParser2: !1
};
function K1(Z, Y) {
  if (!Z) return Y !== null && Y !== void 0 ? Y : d8;
  var J = _objectSpread(_objectSpread({
    _useHtmlParser2: !!Z.xmlMode
  }, Y), Z);
  if (Z.xml) {
    if (J._useHtmlParser2 = !0, J.xmlMode = !0, Z.xml !== !0) Object.assign(J, Z.xml);
  } else if (Z.xmlMode) J._useHtmlParser2 = !0;
  return J;
}
function WZ(Z, Y, J) {
  if (!Z) return "";
  return Z(Y !== null && Y !== void 0 ? Y : Z._root.children, null, void 0, J).toString();
}
function r8(Z, Y) {
  return !Y && _typeof(Z) === "object" && Z != null && !("length" in Z) && !("type" in Z);
}
function l8(Z, Y) {
  var J = r8(Z) ? (Y = Z, void 0) : Z,
    K = _objectSpread(_objectSpread({}, this === null || this === void 0 ? void 0 : this._options), K1(Y));
  return WZ(this, J, K);
}
function s8(Z) {
  var Y = _objectSpread(_objectSpread({}, this._options), {}, {
    xmlMode: !0
  });
  return WZ(this, Z, Y);
}
function G0(Z) {
  var Y = Z !== null && Z !== void 0 ? Z : this ? this.root() : [],
    J = "";
  for (var K = 0; K < Y.length; K++) J += U0(Y[K]);
  return J;
}
function p8(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : typeof Y === "boolean" ? Y : !1;
  if (!Z || typeof Z !== "string") return null;
  if (typeof Y === "boolean") J = Y;
  var K = this.load(Z, this._options, !1);
  if (!J) K("script").remove();
  return _toConsumableArray(K.root()[0].children);
}
function a8() {
  return this(this._root);
}
function m1(Z, Y) {
  if (Y === Z) return !1;
  var J = Y;
  while (J && J !== J.parent) if (J = J.parent, J === Z) return !0;
  return !1;
}
function n8(Z) {
  return this.root().extract(Z);
}
function UZ(Z, Y) {
  if (!HZ(Z) || !HZ(Y)) return;
  var J = Z.length,
    K = +Y.length;
  for (var Q = 0; Q < K; Q++) Z[J++] = Y[Q];
  return Z.length = J, Z;
}
function HZ(Z) {
  if (Array.isArray(Z)) return !0;
  if (_typeof(Z) !== "object" || Z === null || !("length" in Z) || typeof Z.length !== "number" || Z.length < 0) return !1;
  for (var Y = 0; Y < Z.length; Y++) if (!(Y in Z)) return !1;
  return !0;
}
var o4 = {};
V0(o4, {
  val: function val() {
    return wY;
  },
  toggleClass: function toggleClass() {
    return NZ;
  },
  removeClass: function removeClass() {
    return gZ;
  },
  removeAttr: function removeAttr() {
    return qY;
  },
  prop: function prop() {
    return WY;
  },
  hasClass: function hasClass() {
    return jY;
  },
  data: function data() {
    return FY;
  },
  attr: function attr() {
    return HY;
  },
  addClass: function addClass() {
    return bZ;
  }
});
function t(Z) {
  return Z.cheerio != null;
}
function BZ(Z) {
  return Z.replace(/[._-](\w|$)/g, function (Y, J) {
    return J.toUpperCase();
  });
}
function FZ(Z) {
  return Z.replace(/[A-Z]/g, "-$&").toLowerCase();
}
function G(Z, Y) {
  var J = Z.length;
  for (var K = 0; K < J; K++) Y(Z[K], K);
  return Z;
}
var $0;
(function (Z) {
  Z[Z.LowerA = 97] = "LowerA", Z[Z.LowerZ = 122] = "LowerZ", Z[Z.UpperA = 65] = "UpperA", Z[Z.UpperZ = 90] = "UpperZ", Z[Z.Exclamation = 33] = "Exclamation";
})($0 || ($0 = {}));
function X1(Z) {
  var Y = Z.indexOf("<");
  if (Y === -1 || Y > Z.length - 3) return !1;
  var J = Z.charCodeAt(Y + 1);
  return (J >= $0.LowerA && J <= $0.LowerZ || J >= $0.UpperA && J <= $0.UpperZ || J === $0.Exclamation) && Z.includes(">", Y + 2);
}
var T4 = new Uint16Array("\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\uD835\uDD04rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\uD835\uDD38plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\uD835\uDC9Cign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\uD835\uDD05pf;\uC000\uD835\uDD39eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\uD835\uDC9Ep\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\uD835\uDD07\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\uD835\uDD3B\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\uD835\uDC9Frok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\uD835\uDD08rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\uD835\uDD3Csilon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\uD835\uDD09lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\uD835\uDD3DAll;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\uD835\uDD0A;\u62D9pf;\uC000\uD835\uDD3Eeater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\uD835\uDCA2;\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\uD835\uDD40a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\uD835\uDD0Dpf;\uC000\uD835\uDD41\u01E3\u07C7\0\u07CCr;\uC000\uD835\uDCA5rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\uD835\uDD0Epf;\uC000\uD835\uDD42cr;\uC000\uD835\uDCA6\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\uD835\uDD0F\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\uD835\uDD43er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\uD835\uDD10nusPlus;\u6213pf;\uC000\uD835\uDD44c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\uD835\uDD11\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\uD835\uDCA9ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\uD835\uDD12rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\uD835\uDD46enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\uD835\uDCAAash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\uD835\uDD13i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\uD835\uDCAB;\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B\"\u4022r;\uC000\uD835\uDD14pf;\u611Acr;\uC000\uD835\uDCAC\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\uD835\uDD16ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\uD835\uDD4A\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\uD835\uDCAEar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\uD835\uDD17\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\uD835\uDD4BipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\uD835\uDCAFrok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\uD835\uDD18rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\uD835\uDD4C\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\uD835\uDCB0ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\uD835\uDD19pf;\uC000\uD835\uDD4Dcr;\uC000\uD835\uDCB1dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\uD835\uDD1Apf;\uC000\uD835\uDD4Ecr;\uC000\uD835\uDCB2\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\uD835\uDD1B;\u439Epf;\uC000\uD835\uDD4Fcr;\uC000\uD835\uDCB3\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\uD835\uDD1Cpf;\uC000\uD835\uDD50cr;\uC000\uD835\uDCB4ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\uD835\uDCB5\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\uD835\uDD1Erave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\uD835\uDD52\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\uD835\uDCB6;\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\uD835\uDD1Fg\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\uD835\uDD53\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\uD835\uDCB7mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\uD835\uDD20\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\uD835\uDD54o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\uD835\uDCB8\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\uD835\uDD21ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\uD835\uDD55\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\uD835\uDCB9;\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\uD835\uDD22\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\uD835\uDD56\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\uD835\uDD23lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\uD835\uDD57\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\uD835\uDCBB\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\uD835\uDD24\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\uD835\uDD58\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\uD835\uDD25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\uD835\uDD59bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\uD835\uDCBDas\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\uD835\uDD26rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\uD835\uDD5Aa;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\uD835\uDCBEn\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\uD835\uDD27ath;\u4237pf;\uC000\uD835\uDD5B\u01E3\u23EC\0\u23F1r;\uC000\uD835\uDCBFrcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\uD835\uDD28reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\uD835\uDD5Ccr;\uC000\uD835\uDCC0\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\uD835\uDD29\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\uD835\uDD5Dus;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\uD835\uDCC1m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\uD835\uDD2Ao;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\uD835\uDD5E\u0100ct\u28F8\u28FDr;\uC000\uD835\uDCC2pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB \u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\uD835\uDD2B\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\uD835\uDD5F\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\uD835\uDCC3ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\uD835\uDD2C\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\uD835\uDD60\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\uD835\uDD2D\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\uD835\uDD61nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\uD835\uDCC5;\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\uD835\uDD2Epf;\uC000\uD835\uDD62rime;\u6057cr;\uC000\uD835\uDCC6\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\uD835\uDD2F\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\uD835\uDD63us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\uD835\uDCC7\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\uD835\uDD30\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\uD835\uDD64a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\uD835\uDCC8tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\uD835\uDD31\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\uD835\uDD65rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\uD835\uDCC9;\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\uD835\uDD32rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\uD835\uDD66\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\uD835\uDCCA\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\uD835\uDD33tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\uD835\uDD67ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\uD835\uDCCB\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\uD835\uDD34pf;\uC000\uD835\uDD68\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\uD835\uDCCC\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\uD835\uDD35\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\uD835\uDD69im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\uD835\uDCCD\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\uD835\uDD36cy;\u4457pf;\uC000\uD835\uDD6Acr;\uC000\uD835\uDCCE\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\uD835\uDD37cy;\u4436grarr;\u61DDpf;\uC000\uD835\uDD6Bcr;\uC000\uD835\uDCCF\u0100jn\u3B85\u3B87;\u600Dj;\u600C".split("").map(function (Z) {
  return Z.charCodeAt(0);
}));
var m4 = new Uint16Array("Ȁaglq\t\x15\x18\x1Bɭ\x0F\x00\x00\x12p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (Z) {
  return Z.charCodeAt(0);
}));
var i4,
  o8 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]),
  Q1 = (i4 = String.fromCodePoint) !== null && i4 !== void 0 ? i4 : function (Z) {
    var Y = "";
    if (Z > 65535) Z -= 65536, Y += String.fromCharCode(Z >>> 10 & 1023 | 55296), Z = 56320 | Z & 1023;
    return Y += String.fromCharCode(Z), Y;
  };
function c4(Z) {
  var Y;
  if (Z >= 55296 && Z <= 57343 || Z > 1114111) return 65533;
  return (Y = o8.get(Z)) !== null && Y !== void 0 ? Y : Z;
}
var k;
(function (Z) {
  Z[Z.NUM = 35] = "NUM", Z[Z.SEMI = 59] = "SEMI", Z[Z.EQUALS = 61] = "EQUALS", Z[Z.ZERO = 48] = "ZERO", Z[Z.NINE = 57] = "NINE", Z[Z.LOWER_A = 97] = "LOWER_A", Z[Z.LOWER_F = 102] = "LOWER_F", Z[Z.LOWER_X = 120] = "LOWER_X", Z[Z.LOWER_Z = 122] = "LOWER_Z", Z[Z.UPPER_A = 65] = "UPPER_A", Z[Z.UPPER_F = 70] = "UPPER_F", Z[Z.UPPER_Z = 90] = "UPPER_Z";
})(k || (k = {}));
var t8 = 32,
  v0;
(function (Z) {
  Z[Z.VALUE_LENGTH = 49152] = "VALUE_LENGTH", Z[Z.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", Z[Z.JUMP_TABLE = 127] = "JUMP_TABLE";
})(v0 || (v0 = {}));
function d4(Z) {
  return Z >= k.ZERO && Z <= k.NINE;
}
function e8(Z) {
  return Z >= k.UPPER_A && Z <= k.UPPER_F || Z >= k.LOWER_A && Z <= k.LOWER_F;
}
function ZY(Z) {
  return Z >= k.UPPER_A && Z <= k.UPPER_Z || Z >= k.LOWER_A && Z <= k.LOWER_Z || d4(Z);
}
function YY(Z) {
  return Z === k.EQUALS || ZY(Z);
}
var S;
(function (Z) {
  Z[Z.EntityStart = 0] = "EntityStart", Z[Z.NumericStart = 1] = "NumericStart", Z[Z.NumericDecimal = 2] = "NumericDecimal", Z[Z.NumericHex = 3] = "NumericHex", Z[Z.NamedEntity = 4] = "NamedEntity";
})(S || (S = {}));
var J0;
(function (Z) {
  Z[Z.Legacy = 0] = "Legacy", Z[Z.Strict = 1] = "Strict", Z[Z.Attribute = 2] = "Attribute";
})(J0 || (J0 = {}));
var r4 = /*#__PURE__*/function () {
  function r4(Z, Y, J) {
    _classCallCheck(this, r4);
    this.decodeTree = Z, this.emitCodePoint = Y, this.errors = J, this.state = S.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = J0.Strict;
  }
  _createClass(r4, [{
    key: "startEntity",
    value: function startEntity(Z) {
      this.decodeMode = Z, this.state = S.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
    }
  }, {
    key: "write",
    value: function write(Z, Y) {
      switch (this.state) {
        case S.EntityStart:
          {
            if (Z.charCodeAt(Y) === k.NUM) return this.state = S.NumericStart, this.consumed += 1, this.stateNumericStart(Z, Y + 1);
            return this.state = S.NamedEntity, this.stateNamedEntity(Z, Y);
          }
        case S.NumericStart:
          return this.stateNumericStart(Z, Y);
        case S.NumericDecimal:
          return this.stateNumericDecimal(Z, Y);
        case S.NumericHex:
          return this.stateNumericHex(Z, Y);
        case S.NamedEntity:
          return this.stateNamedEntity(Z, Y);
      }
    }
  }, {
    key: "stateNumericStart",
    value: function stateNumericStart(Z, Y) {
      if (Y >= Z.length) return -1;
      if ((Z.charCodeAt(Y) | t8) === k.LOWER_X) return this.state = S.NumericHex, this.consumed += 1, this.stateNumericHex(Z, Y + 1);
      return this.state = S.NumericDecimal, this.stateNumericDecimal(Z, Y);
    }
  }, {
    key: "addToNumericResult",
    value: function addToNumericResult(Z, Y, J, K) {
      if (Y !== J) {
        var Q = J - Y;
        this.result = this.result * Math.pow(K, Q) + Number.parseInt(Z.substr(Y, Q), K), this.consumed += Q;
      }
    }
  }, {
    key: "stateNumericHex",
    value: function stateNumericHex(Z, Y) {
      var J = Y;
      while (Y < Z.length) {
        var K = Z.charCodeAt(Y);
        if (d4(K) || e8(K)) Y += 1;else return this.addToNumericResult(Z, J, Y, 16), this.emitNumericEntity(K, 3);
      }
      return this.addToNumericResult(Z, J, Y, 16), -1;
    }
  }, {
    key: "stateNumericDecimal",
    value: function stateNumericDecimal(Z, Y) {
      var J = Y;
      while (Y < Z.length) {
        var K = Z.charCodeAt(Y);
        if (d4(K)) Y += 1;else return this.addToNumericResult(Z, J, Y, 10), this.emitNumericEntity(K, 2);
      }
      return this.addToNumericResult(Z, J, Y, 10), -1;
    }
  }, {
    key: "emitNumericEntity",
    value: function emitNumericEntity(Z, Y) {
      var J;
      if (this.consumed <= Y) return (J = this.errors) === null || J === void 0 || J.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      if (Z === k.SEMI) this.consumed += 1;else if (this.decodeMode === J0.Strict) return 0;
      if (this.emitCodePoint(c4(this.result), this.consumed), this.errors) {
        if (Z !== k.SEMI) this.errors.missingSemicolonAfterCharacterReference();
        this.errors.validateNumericCharacterReference(this.result);
      }
      return this.consumed;
    }
  }, {
    key: "stateNamedEntity",
    value: function stateNamedEntity(Z, Y) {
      var J = this.decodeTree,
        K = J[this.treeIndex],
        Q = (K & v0.VALUE_LENGTH) >> 14;
      for (; Y < Z.length; Y++, this.excess++) {
        var V = Z.charCodeAt(Y);
        if (this.treeIndex = JY(J, K, this.treeIndex + Math.max(1, Q), V), this.treeIndex < 0) return this.result === 0 || this.decodeMode === J0.Attribute && (Q === 0 || YY(V)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (K = J[this.treeIndex], Q = (K & v0.VALUE_LENGTH) >> 14, Q !== 0) {
          if (V === k.SEMI) return this.emitNamedEntityData(this.treeIndex, Q, this.consumed + this.excess);
          if (this.decodeMode !== J0.Strict) this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0;
        }
      }
      return -1;
    }
  }, {
    key: "emitNotTerminatedNamedEntity",
    value: function emitNotTerminatedNamedEntity() {
      var Z;
      var Y = this.result,
        J = this.decodeTree,
        K = (J[Y] & v0.VALUE_LENGTH) >> 14;
      return this.emitNamedEntityData(Y, K, this.consumed), (Z = this.errors) === null || Z === void 0 || Z.missingSemicolonAfterCharacterReference(), this.consumed;
    }
  }, {
    key: "emitNamedEntityData",
    value: function emitNamedEntityData(Z, Y, J) {
      var K = this.decodeTree;
      if (this.emitCodePoint(Y === 1 ? K[Z] & ~v0.VALUE_LENGTH : K[Z + 1], J), Y === 3) this.emitCodePoint(K[Z + 2], J);
      return J;
    }
  }, {
    key: "end",
    value: function end() {
      var Z;
      switch (this.state) {
        case S.NamedEntity:
          return this.result !== 0 && (this.decodeMode !== J0.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case S.NumericDecimal:
          return this.emitNumericEntity(0, 2);
        case S.NumericHex:
          return this.emitNumericEntity(0, 3);
        case S.NumericStart:
          return (Z = this.errors) === null || Z === void 0 || Z.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case S.EntityStart:
          return 0;
      }
    }
  }]);
  return r4;
}();
function JY(Z, Y, J, K) {
  var Q = (Y & v0.BRANCH_LENGTH) >> 7,
    V = Y & v0.JUMP_TABLE;
  if (Q === 0) return V !== 0 && K === V ? J : -1;
  if (V) {
    var F = K - V;
    return F < 0 || F >= Q ? -1 : Z[J + F] - 1;
  }
  var z = J,
    B = z + Q - 1;
  while (z <= B) {
    var _F = z + B >>> 1,
      q = Z[_F];
    if (q < K) z = _F + 1;else if (q > K) B = _F - 1;else return Z[_F + Q];
  }
  return -1;
}
var g;
(function (Z) {
  Z[Z.Tab = 9] = "Tab", Z[Z.NewLine = 10] = "NewLine", Z[Z.FormFeed = 12] = "FormFeed", Z[Z.CarriageReturn = 13] = "CarriageReturn", Z[Z.Space = 32] = "Space", Z[Z.ExclamationMark = 33] = "ExclamationMark", Z[Z.Number = 35] = "Number", Z[Z.Amp = 38] = "Amp", Z[Z.SingleQuote = 39] = "SingleQuote", Z[Z.DoubleQuote = 34] = "DoubleQuote", Z[Z.Dash = 45] = "Dash", Z[Z.Slash = 47] = "Slash", Z[Z.Zero = 48] = "Zero", Z[Z.Nine = 57] = "Nine", Z[Z.Semi = 59] = "Semi", Z[Z.Lt = 60] = "Lt", Z[Z.Eq = 61] = "Eq", Z[Z.Gt = 62] = "Gt", Z[Z.Questionmark = 63] = "Questionmark", Z[Z.UpperA = 65] = "UpperA", Z[Z.LowerA = 97] = "LowerA", Z[Z.UpperF = 70] = "UpperF", Z[Z.LowerF = 102] = "LowerF", Z[Z.UpperZ = 90] = "UpperZ", Z[Z.LowerZ = 122] = "LowerZ", Z[Z.LowerX = 120] = "LowerX", Z[Z.OpeningSquareBracket = 91] = "OpeningSquareBracket";
})(g || (g = {}));
var P;
(function (Z) {
  Z[Z.Text = 1] = "Text", Z[Z.BeforeTagName = 2] = "BeforeTagName", Z[Z.InTagName = 3] = "InTagName", Z[Z.InSelfClosingTag = 4] = "InSelfClosingTag", Z[Z.BeforeClosingTagName = 5] = "BeforeClosingTagName", Z[Z.InClosingTagName = 6] = "InClosingTagName", Z[Z.AfterClosingTagName = 7] = "AfterClosingTagName", Z[Z.BeforeAttributeName = 8] = "BeforeAttributeName", Z[Z.InAttributeName = 9] = "InAttributeName", Z[Z.AfterAttributeName = 10] = "AfterAttributeName", Z[Z.BeforeAttributeValue = 11] = "BeforeAttributeValue", Z[Z.InAttributeValueDq = 12] = "InAttributeValueDq", Z[Z.InAttributeValueSq = 13] = "InAttributeValueSq", Z[Z.InAttributeValueNq = 14] = "InAttributeValueNq", Z[Z.BeforeDeclaration = 15] = "BeforeDeclaration", Z[Z.InDeclaration = 16] = "InDeclaration", Z[Z.InProcessingInstruction = 17] = "InProcessingInstruction", Z[Z.BeforeComment = 18] = "BeforeComment", Z[Z.CDATASequence = 19] = "CDATASequence", Z[Z.InSpecialComment = 20] = "InSpecialComment", Z[Z.InCommentLike = 21] = "InCommentLike", Z[Z.BeforeSpecialS = 22] = "BeforeSpecialS", Z[Z.BeforeSpecialT = 23] = "BeforeSpecialT", Z[Z.SpecialStartSequence = 24] = "SpecialStartSequence", Z[Z.InSpecialTag = 25] = "InSpecialTag", Z[Z.InEntity = 26] = "InEntity";
})(P || (P = {}));
function F0(Z) {
  return Z === g.Space || Z === g.NewLine || Z === g.Tab || Z === g.FormFeed || Z === g.CarriageReturn;
}
function i1(Z) {
  return Z === g.Slash || Z === g.Gt || F0(Z);
}
function KY(Z) {
  return Z >= g.LowerA && Z <= g.LowerZ || Z >= g.UpperA && Z <= g.UpperZ;
}
var K0;
(function (Z) {
  Z[Z.NoValue = 0] = "NoValue", Z[Z.Unquoted = 1] = "Unquoted", Z[Z.Single = 2] = "Single", Z[Z.Double = 3] = "Double";
})(K0 || (K0 = {}));
var E = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  CdataEnd: new Uint8Array([93, 93, 62]),
  CommentEnd: new Uint8Array([45, 45, 62]),
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]),
  XmpEnd: new Uint8Array([60, 47, 120, 109, 112])
};
var c1 = /*#__PURE__*/function () {
  function c1(_ref, J) {
    var _this11 = this;
    var _ref$xmlMode = _ref.xmlMode,
      Z = _ref$xmlMode === void 0 ? !1 : _ref$xmlMode,
      _ref$decodeEntities = _ref.decodeEntities,
      Y = _ref$decodeEntities === void 0 ? !0 : _ref$decodeEntities;
    _classCallCheck(this, c1);
    this.cbs = J, this.state = P.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = P.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = Z, this.decodeEntities = Y, this.entityDecoder = new r4(Z ? m4 : T4, function (K, Q) {
      return _this11.emitCodePoint(K, Q);
    });
  }
  _createClass(c1, [{
    key: "reset",
    value: function reset() {
      this.state = P.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = P.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0;
    }
  }, {
    key: "write",
    value: function write(Z) {
      this.offset += this.buffer.length, this.buffer = Z, this.parse();
    }
  }, {
    key: "end",
    value: function end() {
      if (this.running) this.finish();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.running = !1;
    }
  }, {
    key: "resume",
    value: function resume() {
      if (this.running = !0, this.index < this.buffer.length + this.offset) this.parse();
    }
  }, {
    key: "stateText",
    value: function stateText(Z) {
      if (Z === g.Lt || !this.decodeEntities && this.fastForwardTo(g.Lt)) {
        if (this.index > this.sectionStart) this.cbs.ontext(this.sectionStart, this.index);
        this.state = P.BeforeTagName, this.sectionStart = this.index;
      } else if (this.decodeEntities && Z === g.Amp) this.startEntity();
    }
  }, {
    key: "stateSpecialStartSequence",
    value: function stateSpecialStartSequence(Z) {
      var Y = this.sequenceIndex === this.currentSequence.length;
      if (!(Y ? i1(Z) : (Z | 32) === this.currentSequence[this.sequenceIndex])) this.isSpecial = !1;else if (!Y) {
        this.sequenceIndex++;
        return;
      }
      this.sequenceIndex = 0, this.state = P.InTagName, this.stateInTagName(Z);
    }
  }, {
    key: "stateInSpecialTag",
    value: function stateInSpecialTag(Z) {
      if (this.sequenceIndex === this.currentSequence.length) {
        if (Z === g.Gt || F0(Z)) {
          var Y = this.index - this.currentSequence.length;
          if (this.sectionStart < Y) {
            var J = this.index;
            this.index = Y, this.cbs.ontext(this.sectionStart, Y), this.index = J;
          }
          this.isSpecial = !1, this.sectionStart = Y + 2, this.stateInClosingTagName(Z);
          return;
        }
        this.sequenceIndex = 0;
      }
      if ((Z | 32) === this.currentSequence[this.sequenceIndex]) this.sequenceIndex += 1;else if (this.sequenceIndex === 0) {
        if (this.currentSequence === E.TitleEnd) {
          if (this.decodeEntities && Z === g.Amp) this.startEntity();
        } else if (this.fastForwardTo(g.Lt)) this.sequenceIndex = 1;
      } else this.sequenceIndex = Number(Z === g.Lt);
    }
  }, {
    key: "stateCDATASequence",
    value: function stateCDATASequence(Z) {
      if (Z === E.Cdata[this.sequenceIndex]) {
        if (++this.sequenceIndex === E.Cdata.length) this.state = P.InCommentLike, this.currentSequence = E.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1;
      } else this.sequenceIndex = 0, this.state = P.InDeclaration, this.stateInDeclaration(Z);
    }
  }, {
    key: "fastForwardTo",
    value: function fastForwardTo(Z) {
      while (++this.index < this.buffer.length + this.offset) if (this.buffer.charCodeAt(this.index - this.offset) === Z) return !0;
      return this.index = this.buffer.length + this.offset - 1, !1;
    }
  }, {
    key: "stateInCommentLike",
    value: function stateInCommentLike(Z) {
      if (Z === this.currentSequence[this.sequenceIndex]) {
        if (++this.sequenceIndex === this.currentSequence.length) {
          if (this.currentSequence === E.CdataEnd) this.cbs.oncdata(this.sectionStart, this.index, 2);else this.cbs.oncomment(this.sectionStart, this.index, 2);
          this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = P.Text;
        }
      } else if (this.sequenceIndex === 0) {
        if (this.fastForwardTo(this.currentSequence[0])) this.sequenceIndex = 1;
      } else if (Z !== this.currentSequence[this.sequenceIndex - 1]) this.sequenceIndex = 0;
    }
  }, {
    key: "isTagStartChar",
    value: function isTagStartChar(Z) {
      return this.xmlMode ? !i1(Z) : KY(Z);
    }
  }, {
    key: "startSpecial",
    value: function startSpecial(Z, Y) {
      this.isSpecial = !0, this.currentSequence = Z, this.sequenceIndex = Y, this.state = P.SpecialStartSequence;
    }
  }, {
    key: "stateBeforeTagName",
    value: function stateBeforeTagName(Z) {
      if (Z === g.ExclamationMark) this.state = P.BeforeDeclaration, this.sectionStart = this.index + 1;else if (Z === g.Questionmark) this.state = P.InProcessingInstruction, this.sectionStart = this.index + 1;else if (this.isTagStartChar(Z)) {
        var Y = Z | 32;
        if (this.sectionStart = this.index, this.xmlMode) this.state = P.InTagName;else if (Y === E.ScriptEnd[2]) this.state = P.BeforeSpecialS;else if (Y === E.TitleEnd[2] || Y === E.XmpEnd[2]) this.state = P.BeforeSpecialT;else this.state = P.InTagName;
      } else if (Z === g.Slash) this.state = P.BeforeClosingTagName;else this.state = P.Text, this.stateText(Z);
    }
  }, {
    key: "stateInTagName",
    value: function stateInTagName(Z) {
      if (i1(Z)) this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = P.BeforeAttributeName, this.stateBeforeAttributeName(Z);
    }
  }, {
    key: "stateBeforeClosingTagName",
    value: function stateBeforeClosingTagName(Z) {
      if (F0(Z)) ;else if (Z === g.Gt) this.state = P.Text;else this.state = this.isTagStartChar(Z) ? P.InClosingTagName : P.InSpecialComment, this.sectionStart = this.index;
    }
  }, {
    key: "stateInClosingTagName",
    value: function stateInClosingTagName(Z) {
      if (Z === g.Gt || F0(Z)) this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = P.AfterClosingTagName, this.stateAfterClosingTagName(Z);
    }
  }, {
    key: "stateAfterClosingTagName",
    value: function stateAfterClosingTagName(Z) {
      if (Z === g.Gt || this.fastForwardTo(g.Gt)) this.state = P.Text, this.sectionStart = this.index + 1;
    }
  }, {
    key: "stateBeforeAttributeName",
    value: function stateBeforeAttributeName(Z) {
      if (Z === g.Gt) {
        if (this.cbs.onopentagend(this.index), this.isSpecial) this.state = P.InSpecialTag, this.sequenceIndex = 0;else this.state = P.Text;
        this.sectionStart = this.index + 1;
      } else if (Z === g.Slash) this.state = P.InSelfClosingTag;else if (!F0(Z)) this.state = P.InAttributeName, this.sectionStart = this.index;
    }
  }, {
    key: "stateInSelfClosingTag",
    value: function stateInSelfClosingTag(Z) {
      if (Z === g.Gt) this.cbs.onselfclosingtag(this.index), this.state = P.Text, this.sectionStart = this.index + 1, this.isSpecial = !1;else if (!F0(Z)) this.state = P.BeforeAttributeName, this.stateBeforeAttributeName(Z);
    }
  }, {
    key: "stateInAttributeName",
    value: function stateInAttributeName(Z) {
      if (Z === g.Eq || i1(Z)) this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = P.AfterAttributeName, this.stateAfterAttributeName(Z);
    }
  }, {
    key: "stateAfterAttributeName",
    value: function stateAfterAttributeName(Z) {
      if (Z === g.Eq) this.state = P.BeforeAttributeValue;else if (Z === g.Slash || Z === g.Gt) this.cbs.onattribend(K0.NoValue, this.sectionStart), this.sectionStart = -1, this.state = P.BeforeAttributeName, this.stateBeforeAttributeName(Z);else if (!F0(Z)) this.cbs.onattribend(K0.NoValue, this.sectionStart), this.state = P.InAttributeName, this.sectionStart = this.index;
    }
  }, {
    key: "stateBeforeAttributeValue",
    value: function stateBeforeAttributeValue(Z) {
      if (Z === g.DoubleQuote) this.state = P.InAttributeValueDq, this.sectionStart = this.index + 1;else if (Z === g.SingleQuote) this.state = P.InAttributeValueSq, this.sectionStart = this.index + 1;else if (!F0(Z)) this.sectionStart = this.index, this.state = P.InAttributeValueNq, this.stateInAttributeValueNoQuotes(Z);
    }
  }, {
    key: "handleInAttributeValue",
    value: function handleInAttributeValue(Z, Y) {
      if (Z === Y || !this.decodeEntities && this.fastForwardTo(Y)) this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(Y === g.DoubleQuote ? K0.Double : K0.Single, this.index + 1), this.state = P.BeforeAttributeName;else if (this.decodeEntities && Z === g.Amp) this.startEntity();
    }
  }, {
    key: "stateInAttributeValueDoubleQuotes",
    value: function stateInAttributeValueDoubleQuotes(Z) {
      this.handleInAttributeValue(Z, g.DoubleQuote);
    }
  }, {
    key: "stateInAttributeValueSingleQuotes",
    value: function stateInAttributeValueSingleQuotes(Z) {
      this.handleInAttributeValue(Z, g.SingleQuote);
    }
  }, {
    key: "stateInAttributeValueNoQuotes",
    value: function stateInAttributeValueNoQuotes(Z) {
      if (F0(Z) || Z === g.Gt) this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(K0.Unquoted, this.index), this.state = P.BeforeAttributeName, this.stateBeforeAttributeName(Z);else if (this.decodeEntities && Z === g.Amp) this.startEntity();
    }
  }, {
    key: "stateBeforeDeclaration",
    value: function stateBeforeDeclaration(Z) {
      if (Z === g.OpeningSquareBracket) this.state = P.CDATASequence, this.sequenceIndex = 0;else this.state = Z === g.Dash ? P.BeforeComment : P.InDeclaration;
    }
  }, {
    key: "stateInDeclaration",
    value: function stateInDeclaration(Z) {
      if (Z === g.Gt || this.fastForwardTo(g.Gt)) this.cbs.ondeclaration(this.sectionStart, this.index), this.state = P.Text, this.sectionStart = this.index + 1;
    }
  }, {
    key: "stateInProcessingInstruction",
    value: function stateInProcessingInstruction(Z) {
      if (Z === g.Gt || this.fastForwardTo(g.Gt)) this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = P.Text, this.sectionStart = this.index + 1;
    }
  }, {
    key: "stateBeforeComment",
    value: function stateBeforeComment(Z) {
      if (Z === g.Dash) this.state = P.InCommentLike, this.currentSequence = E.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1;else this.state = P.InDeclaration;
    }
  }, {
    key: "stateInSpecialComment",
    value: function stateInSpecialComment(Z) {
      if (Z === g.Gt || this.fastForwardTo(g.Gt)) this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = P.Text, this.sectionStart = this.index + 1;
    }
  }, {
    key: "stateBeforeSpecialS",
    value: function stateBeforeSpecialS(Z) {
      var Y = Z | 32;
      if (Y === E.ScriptEnd[3]) this.startSpecial(E.ScriptEnd, 4);else if (Y === E.StyleEnd[3]) this.startSpecial(E.StyleEnd, 4);else this.state = P.InTagName, this.stateInTagName(Z);
    }
  }, {
    key: "stateBeforeSpecialT",
    value: function stateBeforeSpecialT(Z) {
      switch (Z | 32) {
        case E.TitleEnd[3]:
          {
            this.startSpecial(E.TitleEnd, 4);
            break;
          }
        case E.TextareaEnd[3]:
          {
            this.startSpecial(E.TextareaEnd, 4);
            break;
          }
        case E.XmpEnd[3]:
          {
            this.startSpecial(E.XmpEnd, 4);
            break;
          }
        default:
          this.state = P.InTagName, this.stateInTagName(Z);
      }
    }
  }, {
    key: "startEntity",
    value: function startEntity() {
      this.baseState = this.state, this.state = P.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? J0.Strict : this.baseState === P.Text || this.baseState === P.InSpecialTag ? J0.Legacy : J0.Attribute);
    }
  }, {
    key: "stateInEntity",
    value: function stateInEntity() {
      var Z = this.entityDecoder.write(this.buffer, this.index - this.offset);
      if (Z >= 0) {
        if (this.state = this.baseState, Z === 0) this.index = this.entityStart;
      } else this.index = this.offset + this.buffer.length - 1;
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      if (this.running && this.sectionStart !== this.index) {
        if (this.state === P.Text || this.state === P.InSpecialTag && this.sequenceIndex === 0) this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index;else if (this.state === P.InAttributeValueDq || this.state === P.InAttributeValueSq || this.state === P.InAttributeValueNq) this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index;
      }
    }
  }, {
    key: "shouldContinue",
    value: function shouldContinue() {
      return this.index < this.buffer.length + this.offset && this.running;
    }
  }, {
    key: "parse",
    value: function parse() {
      while (this.shouldContinue()) {
        var _Z2 = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
          case P.Text:
            {
              this.stateText(_Z2);
              break;
            }
          case P.SpecialStartSequence:
            {
              this.stateSpecialStartSequence(_Z2);
              break;
            }
          case P.InSpecialTag:
            {
              this.stateInSpecialTag(_Z2);
              break;
            }
          case P.CDATASequence:
            {
              this.stateCDATASequence(_Z2);
              break;
            }
          case P.InAttributeValueDq:
            {
              this.stateInAttributeValueDoubleQuotes(_Z2);
              break;
            }
          case P.InAttributeName:
            {
              this.stateInAttributeName(_Z2);
              break;
            }
          case P.InCommentLike:
            {
              this.stateInCommentLike(_Z2);
              break;
            }
          case P.InSpecialComment:
            {
              this.stateInSpecialComment(_Z2);
              break;
            }
          case P.BeforeAttributeName:
            {
              this.stateBeforeAttributeName(_Z2);
              break;
            }
          case P.InTagName:
            {
              this.stateInTagName(_Z2);
              break;
            }
          case P.InClosingTagName:
            {
              this.stateInClosingTagName(_Z2);
              break;
            }
          case P.BeforeTagName:
            {
              this.stateBeforeTagName(_Z2);
              break;
            }
          case P.AfterAttributeName:
            {
              this.stateAfterAttributeName(_Z2);
              break;
            }
          case P.InAttributeValueSq:
            {
              this.stateInAttributeValueSingleQuotes(_Z2);
              break;
            }
          case P.BeforeAttributeValue:
            {
              this.stateBeforeAttributeValue(_Z2);
              break;
            }
          case P.BeforeClosingTagName:
            {
              this.stateBeforeClosingTagName(_Z2);
              break;
            }
          case P.AfterClosingTagName:
            {
              this.stateAfterClosingTagName(_Z2);
              break;
            }
          case P.BeforeSpecialS:
            {
              this.stateBeforeSpecialS(_Z2);
              break;
            }
          case P.BeforeSpecialT:
            {
              this.stateBeforeSpecialT(_Z2);
              break;
            }
          case P.InAttributeValueNq:
            {
              this.stateInAttributeValueNoQuotes(_Z2);
              break;
            }
          case P.InSelfClosingTag:
            {
              this.stateInSelfClosingTag(_Z2);
              break;
            }
          case P.InDeclaration:
            {
              this.stateInDeclaration(_Z2);
              break;
            }
          case P.BeforeDeclaration:
            {
              this.stateBeforeDeclaration(_Z2);
              break;
            }
          case P.BeforeComment:
            {
              this.stateBeforeComment(_Z2);
              break;
            }
          case P.InProcessingInstruction:
            {
              this.stateInProcessingInstruction(_Z2);
              break;
            }
          case P.InEntity:
            {
              this.stateInEntity();
              break;
            }
        }
        this.index++;
      }
      this.cleanup();
    }
  }, {
    key: "finish",
    value: function finish() {
      if (this.state === P.InEntity) this.entityDecoder.end(), this.state = this.baseState;
      this.handleTrailingData(), this.cbs.onend();
    }
  }, {
    key: "handleTrailingData",
    value: function handleTrailingData() {
      var Z = this.buffer.length + this.offset;
      if (this.sectionStart >= Z) return;
      if (this.state === P.InCommentLike) {
        if (this.currentSequence === E.CdataEnd) this.cbs.oncdata(this.sectionStart, Z, 0);else this.cbs.oncomment(this.sectionStart, Z, 0);
      } else if (this.state === P.InTagName || this.state === P.BeforeAttributeName || this.state === P.BeforeAttributeValue || this.state === P.AfterAttributeName || this.state === P.InAttributeName || this.state === P.InAttributeValueSq || this.state === P.InAttributeValueDq || this.state === P.InAttributeValueNq || this.state === P.InClosingTagName) ;else this.cbs.ontext(this.sectionStart, Z);
    }
  }, {
    key: "emitCodePoint",
    value: function emitCodePoint(Z, Y) {
      if (this.baseState !== P.Text && this.baseState !== P.InSpecialTag) {
        if (this.sectionStart < this.entityStart) this.cbs.onattribdata(this.sectionStart, this.entityStart);
        this.sectionStart = this.entityStart + Y, this.index = this.sectionStart - 1, this.cbs.onattribentity(Z);
      } else {
        if (this.sectionStart < this.entityStart) this.cbs.ontext(this.sectionStart, this.entityStart);
        this.sectionStart = this.entityStart + Y, this.index = this.sectionStart - 1, this.cbs.ontextentity(Z, this.sectionStart);
      }
    }
  }]);
  return c1;
}();
var l0 = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]),
  D = new Set(["p"]),
  wZ = new Set(["thead", "tbody"]),
  qZ = new Set(["dd", "dt"]),
  jZ = new Set(["rt", "rp"]),
  XY = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", D], ["h1", D], ["h2", D], ["h3", D], ["h4", D], ["h5", D], ["h6", D], ["select", l0], ["input", l0], ["output", l0], ["button", l0], ["datalist", l0], ["textarea", l0], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", qZ], ["dt", qZ], ["address", D], ["article", D], ["aside", D], ["blockquote", D], ["details", D], ["div", D], ["dl", D], ["fieldset", D], ["figcaption", D], ["figure", D], ["footer", D], ["form", D], ["header", D], ["hr", D], ["main", D], ["nav", D], ["ol", D], ["pre", D], ["section", D], ["table", D], ["ul", D], ["rt", jZ], ["rp", jZ], ["tbody", wZ], ["tfoot", wZ]]),
  QY = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]),
  LZ = new Set(["math", "svg"]),
  RZ = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]),
  VY = /\s|\//;
var l4 = /*#__PURE__*/function () {
  function l4(Z) {
    var Y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, l4);
    var J, K, Q, V, z, B;
    this.options = Y, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = Z !== null && Z !== void 0 ? Z : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (J = Y.lowerCaseTags) !== null && J !== void 0 ? J : this.htmlMode, this.lowerCaseAttributeNames = (K = Y.lowerCaseAttributeNames) !== null && K !== void 0 ? K : this.htmlMode, this.recognizeSelfClosing = (Q = Y.recognizeSelfClosing) !== null && Q !== void 0 ? Q : !this.htmlMode, this.tokenizer = new ((V = Y.Tokenizer) !== null && V !== void 0 ? V : c1)(this.options, this), this.foreignContext = [!this.htmlMode], (B = (z = this.cbs).onparserinit) === null || B === void 0 || B.call(z, this);
  }
  _createClass(l4, [{
    key: "ontext",
    value: function ontext(Z, Y) {
      var J, K;
      var Q = this.getSlice(Z, Y);
      this.endIndex = Y - 1, (K = (J = this.cbs).ontext) === null || K === void 0 || K.call(J, Q), this.startIndex = Y;
    }
  }, {
    key: "ontextentity",
    value: function ontextentity(Z, Y) {
      var J, K;
      this.endIndex = Y - 1, (K = (J = this.cbs).ontext) === null || K === void 0 || K.call(J, Q1(Z)), this.startIndex = Y;
    }
  }, {
    key: "isVoidElement",
    value: function isVoidElement(Z) {
      return this.htmlMode && QY.has(Z);
    }
  }, {
    key: "onopentagname",
    value: function onopentagname(Z, Y) {
      this.endIndex = Y;
      var J = this.getSlice(Z, Y);
      if (this.lowerCaseTagNames) J = J.toLowerCase();
      this.emitOpenTag(J);
    }
  }, {
    key: "emitOpenTag",
    value: function emitOpenTag(Z) {
      var Y, J, K, Q;
      this.openTagStart = this.startIndex, this.tagname = Z;
      var V = this.htmlMode && XY.get(Z);
      if (V) while (this.stack.length > 0 && V.has(this.stack[0])) {
        var z = this.stack.shift();
        (J = (Y = this.cbs).onclosetag) === null || J === void 0 || J.call(Y, z, !0);
      }
      if (!this.isVoidElement(Z)) {
        if (this.stack.unshift(Z), this.htmlMode) {
          if (LZ.has(Z)) this.foreignContext.unshift(!0);else if (RZ.has(Z)) this.foreignContext.unshift(!1);
        }
      }
      if ((Q = (K = this.cbs).onopentagname) === null || Q === void 0 || Q.call(K, Z), this.cbs.onopentag) this.attribs = {};
    }
  }, {
    key: "endOpenTag",
    value: function endOpenTag(Z) {
      var Y, J;
      if (this.startIndex = this.openTagStart, this.attribs) (J = (Y = this.cbs).onopentag) === null || J === void 0 || J.call(Y, this.tagname, this.attribs, Z), this.attribs = null;
      if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) this.cbs.onclosetag(this.tagname, !0);
      this.tagname = "";
    }
  }, {
    key: "onopentagend",
    value: function onopentagend(Z) {
      this.endIndex = Z, this.endOpenTag(!1), this.startIndex = Z + 1;
    }
  }, {
    key: "onclosetag",
    value: function onclosetag(Z, Y) {
      var J, K, Q, V, z, B, F, q;
      this.endIndex = Y;
      var R = this.getSlice(Z, Y);
      if (this.lowerCaseTagNames) R = R.toLowerCase();
      if (this.htmlMode && (LZ.has(R) || RZ.has(R))) this.foreignContext.shift();
      if (!this.isVoidElement(R)) {
        var f = this.stack.indexOf(R);
        if (f !== -1) for (var y = 0; y <= f; y++) {
          var N = this.stack.shift();
          (K = (J = this.cbs).onclosetag) === null || K === void 0 || K.call(J, N, y !== f);
        } else if (this.htmlMode && R === "p") this.emitOpenTag("p"), this.closeCurrentTag(!0);
      } else if (this.htmlMode && R === "br") (V = (Q = this.cbs).onopentagname) === null || V === void 0 || V.call(Q, "br"), (B = (z = this.cbs).onopentag) === null || B === void 0 || B.call(z, "br", {}, !0), (q = (F = this.cbs).onclosetag) === null || q === void 0 || q.call(F, "br", !1);
      this.startIndex = Y + 1;
    }
  }, {
    key: "onselfclosingtag",
    value: function onselfclosingtag(Z) {
      if (this.endIndex = Z, this.recognizeSelfClosing || this.foreignContext[0]) this.closeCurrentTag(!1), this.startIndex = Z + 1;else this.onopentagend(Z);
    }
  }, {
    key: "closeCurrentTag",
    value: function closeCurrentTag(Z) {
      var Y, J;
      var K = this.tagname;
      if (this.endOpenTag(Z), this.stack[0] === K) (J = (Y = this.cbs).onclosetag) === null || J === void 0 || J.call(Y, K, !Z), this.stack.shift();
    }
  }, {
    key: "onattribname",
    value: function onattribname(Z, Y) {
      this.startIndex = Z;
      var J = this.getSlice(Z, Y);
      this.attribname = this.lowerCaseAttributeNames ? J.toLowerCase() : J;
    }
  }, {
    key: "onattribdata",
    value: function onattribdata(Z, Y) {
      this.attribvalue += this.getSlice(Z, Y);
    }
  }, {
    key: "onattribentity",
    value: function onattribentity(Z) {
      this.attribvalue += Q1(Z);
    }
  }, {
    key: "onattribend",
    value: function onattribend(Z, Y) {
      var J, K;
      if (this.endIndex = Y, (K = (J = this.cbs).onattribute) === null || K === void 0 || K.call(J, this.attribname, this.attribvalue, Z === K0.Double ? '"' : Z === K0.Single ? "'" : Z === K0.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) this.attribs[this.attribname] = this.attribvalue;
      this.attribvalue = "";
    }
  }, {
    key: "getInstructionName",
    value: function getInstructionName(Z) {
      var Y = Z.search(VY),
        J = Y < 0 ? Z : Z.substr(0, Y);
      if (this.lowerCaseTagNames) J = J.toLowerCase();
      return J;
    }
  }, {
    key: "ondeclaration",
    value: function ondeclaration(Z, Y) {
      this.endIndex = Y;
      var J = this.getSlice(Z, Y);
      if (this.cbs.onprocessinginstruction) {
        var K = this.getInstructionName(J);
        this.cbs.onprocessinginstruction("!".concat(K), "!".concat(J));
      }
      this.startIndex = Y + 1;
    }
  }, {
    key: "onprocessinginstruction",
    value: function onprocessinginstruction(Z, Y) {
      this.endIndex = Y;
      var J = this.getSlice(Z, Y);
      if (this.cbs.onprocessinginstruction) {
        var K = this.getInstructionName(J);
        this.cbs.onprocessinginstruction("?".concat(K), "?".concat(J));
      }
      this.startIndex = Y + 1;
    }
  }, {
    key: "oncomment",
    value: function oncomment(Z, Y, J) {
      var K, Q, V, z;
      this.endIndex = Y, (Q = (K = this.cbs).oncomment) === null || Q === void 0 || Q.call(K, this.getSlice(Z, Y - J)), (z = (V = this.cbs).oncommentend) === null || z === void 0 || z.call(V), this.startIndex = Y + 1;
    }
  }, {
    key: "oncdata",
    value: function oncdata(Z, Y, J) {
      var K, Q, V, z, B, F, q, R, f, y;
      this.endIndex = Y;
      var N = this.getSlice(Z, Y - J);
      if (!this.htmlMode || this.options.recognizeCDATA) (Q = (K = this.cbs).oncdatastart) === null || Q === void 0 || Q.call(K), (z = (V = this.cbs).ontext) === null || z === void 0 || z.call(V, N), (F = (B = this.cbs).oncdataend) === null || F === void 0 || F.call(B);else (R = (q = this.cbs).oncomment) === null || R === void 0 || R.call(q, "[CDATA[".concat(N, "]]")), (y = (f = this.cbs).oncommentend) === null || y === void 0 || y.call(f);
      this.startIndex = Y + 1;
    }
  }, {
    key: "onend",
    value: function onend() {
      var Z, Y;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var J = 0; J < this.stack.length; J++) this.cbs.onclosetag(this.stack[J], !0);
      }
      (Y = (Z = this.cbs).onend) === null || Y === void 0 || Y.call(Z);
    }
  }, {
    key: "reset",
    value: function reset() {
      var Z, Y, J, K;
      (Y = (Z = this.cbs).onreset) === null || Y === void 0 || Y.call(Z), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (K = (J = this.cbs).onparserinit) === null || K === void 0 || K.call(J, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
    }
  }, {
    key: "parseComplete",
    value: function parseComplete(Z) {
      this.reset(), this.end(Z);
    }
  }, {
    key: "getSlice",
    value: function getSlice(Z, Y) {
      while (Z - this.bufferOffset >= this.buffers[0].length) this.shiftBuffer();
      var J = this.buffers[0].slice(Z - this.bufferOffset, Y - this.bufferOffset);
      while (Y - this.bufferOffset > this.buffers[0].length) this.shiftBuffer(), J += this.buffers[0].slice(0, Y - this.bufferOffset);
      return J;
    }
  }, {
    key: "shiftBuffer",
    value: function shiftBuffer() {
      this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
    }
  }, {
    key: "write",
    value: function write(Z) {
      var Y, J;
      if (this.ended) {
        (J = (Y = this.cbs).onerror) === null || J === void 0 || J.call(Y, new Error(".write() after done!"));
        return;
      }
      if (this.buffers.push(Z), this.tokenizer.running) this.tokenizer.write(Z), this.writeIndex++;
    }
  }, {
    key: "end",
    value: function end(Z) {
      var Y, J;
      if (this.ended) {
        (J = (Y = this.cbs).onerror) === null || J === void 0 || J.call(Y, new Error(".end() after done!"));
        return;
      }
      if (Z) this.write(Z);
      this.ended = !0, this.tokenizer.end();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.tokenizer.pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      this.tokenizer.resume();
      while (this.tokenizer.running && this.writeIndex < this.buffers.length) this.tokenizer.write(this.buffers[this.writeIndex++]);
      if (this.ended) this.tokenizer.end();
    }
  }, {
    key: "parseChunk",
    value: function parseChunk(Z) {
      this.write(Z);
    }
  }, {
    key: "done",
    value: function done(Z) {
      this.end(Z);
    }
  }]);
  return l4;
}();
function PZ(Z, Y) {
  var J = new $4(void 0, Y);
  return new l4(J, Y).end(Z), J.root;
}
var s4,
  V1 = (s4 = Object.hasOwn) !== null && s4 !== void 0 ? s4 : function (Z, Y) {
    return Object.prototype.hasOwnProperty.call(Z, Y);
  },
  z1 = /\s+/,
  a4 = "data-",
  n4 = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
  zY = /^{[^]*}$|^\[[^]*]$/;
function d1(Z, Y, J) {
  var K;
  if (!Z || !O(Z)) return;
  if ((K = Z.attribs) !== null && K !== void 0 || (Z.attribs = {}), !Y) return Z.attribs;
  if (V1(Z.attribs, Y)) return !J && n4.test(Y) ? Y : Z.attribs[Y];
  if (Z.name === "option" && Y === "value") return G0(Z.children);
  if (Z.name === "input" && (Z.attribs.type === "radio" || Z.attribs.type === "checkbox") && Y === "value") return "on";
  return;
}
function s0(Z, Y, J) {
  if (J === null) fZ(Z, Y);else Z.attribs[Y] = "".concat(J);
}
function HY(Z, Y) {
  if (_typeof(Z) === "object" || Y !== void 0) {
    if (typeof Y === "function") {
      if (typeof Z !== "string") throw new Error("Bad combination of arguments.");
      return G(this, function (J, K) {
        if (O(J)) s0(J, Z, Y.call(J, K, J.attribs[Z]));
      });
    }
    return G(this, function (J) {
      if (!O(J)) return;
      if (_typeof(Z) === "object") for (var _i = 0, _Object$keys = Object.keys(Z); _i < _Object$keys.length; _i++) {
        var K = _Object$keys[_i];
        var Q = Z[K];
        s0(J, K, Q);
      } else s0(J, Z, Y);
    });
  }
  return arguments.length > 1 ? this : d1(this[0], Z, this.options.xmlMode);
}
function vZ(Z, Y, J) {
  return Y in Z ? Z[Y] : !J && n4.test(Y) ? d1(Z, Y, !1) !== void 0 : d1(Z, Y, J);
}
function p4(Z, Y, J, K) {
  if (Y in Z) Z[Y] = J;else s0(Z, Y, !K && n4.test(Y) ? J ? "" : null : "".concat(J));
}
function WY(Z, Y) {
  var _this12 = this;
  var J;
  if (typeof Z === "string" && Y === void 0) {
    var K = this[0];
    if (!K) return;
    switch (Z) {
      case "style":
        {
          var Q = this.css(),
            V = Object.keys(Q);
          for (var z = 0; z < V.length; z++) Q[z] = V[z];
          return Q.length = V.length, Q;
        }
      case "tagName":
      case "nodeName":
        {
          if (!O(K)) return;
          return K.name.toUpperCase();
        }
      case "href":
      case "src":
        {
          if (!O(K)) return;
          var _Q5 = (J = K.attribs) === null || J === void 0 ? void 0 : J[Z];
          if (typeof URL !== "undefined" && (Z === "href" && (K.tagName === "a" || K.tagName === "link") || Z === "src" && (K.tagName === "img" || K.tagName === "iframe" || K.tagName === "audio" || K.tagName === "video" || K.tagName === "source")) && _Q5 !== void 0 && this.options.baseURI) return new URL(_Q5, this.options.baseURI).href;
          return _Q5;
        }
      case "innerText":
        return J1(K);
      case "textContent":
        return U0(K);
      case "outerHTML":
        {
          if (K.type === p.Root) return this.html();
          return this.clone().wrap("<container />").parent().html();
        }
      case "innerHTML":
        return this.html();
      default:
        {
          if (!O(K)) return;
          return vZ(K, Z, this.options.xmlMode);
        }
    }
  }
  if (_typeof(Z) === "object" || Y !== void 0) {
    if (typeof Y === "function") {
      if (_typeof(Z) === "object") throw new TypeError("Bad combination of arguments.");
      return G(this, function (K, Q) {
        if (O(K)) p4(K, Z, Y.call(K, Q, vZ(K, Z, _this12.options.xmlMode)), _this12.options.xmlMode);
      });
    }
    return G(this, function (K) {
      if (!O(K)) return;
      if (_typeof(Z) === "object") for (var _i2 = 0, _Object$keys2 = Object.keys(Z); _i2 < _Object$keys2.length; _i2++) {
        var _Q6 = _Object$keys2[_i2];
        var _V = Z[_Q6];
        p4(K, _Q6, _V, _this12.options.xmlMode);
      } else p4(K, Z, Y, _this12.options.xmlMode);
    });
  }
  return;
}
function OZ(Z, Y, J) {
  var K;
  if ((K = Z.data) !== null && K !== void 0 || (Z.data = {}), _typeof(Y) === "object") Object.assign(Z.data, Y);else if (typeof Y === "string" && J !== void 0) Z.data[Y] = J;
}
function UY(Z) {
  for (var _i3 = 0, _Object$keys3 = Object.keys(Z.attribs); _i3 < _Object$keys3.length; _i3++) {
    var Y = _Object$keys3[_i3];
    if (!Y.startsWith(a4)) continue;
    var J = BZ(Y.slice(a4.length));
    if (!V1(Z.data, J)) Z.data[J] = yZ(Z.attribs[Y]);
  }
  return Z.data;
}
function BY(Z, Y) {
  var J = a4 + FZ(Y),
    K = Z.data;
  if (V1(K, Y)) return K[Y];
  if (V1(Z.attribs, J)) return K[Y] = yZ(Z.attribs[J]);
  return;
}
function yZ(Z) {
  if (Z === "null") return null;
  if (Z === "true") return !0;
  if (Z === "false") return !1;
  var Y = Number(Z);
  if (Z === String(Y)) return Y;
  if (zY.test(Z)) try {
    return JSON.parse(Z);
  } catch (_unused) {}
  return Z;
}
function FY(Z, Y) {
  var J;
  var K = this[0];
  if (!K || !O(K)) return;
  var Q = K;
  if ((J = Q.data) !== null && J !== void 0 || (Q.data = {}), Z == null) return UY(Q);
  if (_typeof(Z) === "object" || Y !== void 0) return G(this, function (V) {
    if (O(V)) if (_typeof(Z) === "object") OZ(V, Z);else OZ(V, Z, Y);
  }), this;
  return BY(Q, Z);
}
function wY(Z) {
  var Y = arguments.length === 0,
    J = this[0];
  if (!J || !O(J)) return Y ? void 0 : this;
  switch (J.name) {
    case "textarea":
      return this.text(Z);
    case "select":
      {
        var K = this.find("option:selected");
        if (!Y) {
          if (this.attr("multiple") == null && _typeof(Z) === "object") return this;
          this.find("option").removeAttr("selected");
          var Q = _typeof(Z) === "object" ? Z : [Z];
          var _iterator4 = _createForOfIteratorHelper(Q),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var V = _step4.value;
              this.find("option[value=\"".concat(V, "\"]")).attr("selected", "");
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return this;
        }
        return this.attr("multiple") ? K.toArray().map(function (Q) {
          return G0(Q.children);
        }) : K.attr("value");
      }
    case "input":
    case "option":
      return Y ? this.attr("value") : this.attr("value", Z);
  }
  return;
}
function fZ(Z, Y) {
  if (!Z.attribs || !V1(Z.attribs, Y)) return;
  delete Z.attribs[Y];
}
function r1(Z) {
  return Z ? Z.trim().split(z1) : [];
}
function qY(Z) {
  var _this13 = this;
  var Y = r1(Z);
  var _iterator5 = _createForOfIteratorHelper(Y),
    _step5;
  try {
    var _loop2 = function _loop2() {
      var J = _step5.value;
      G(_this13, function (K) {
        if (O(K)) fZ(K, J);
      });
    };
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return this;
}
function jY(Z) {
  return this.toArray().some(function (Y) {
    var J = O(Y) && Y.attribs["class"],
      K = -1;
    if (J && Z.length > 0) while ((K = J.indexOf(Z, K + 1)) > -1) {
      var Q = K + Z.length;
      if ((K === 0 || z1.test(J[K - 1])) && (Q === J.length || z1.test(J[Q]))) return !0;
    }
    return !1;
  });
}
function bZ(Z) {
  if (typeof Z === "function") return G(this, function (K, Q) {
    if (O(K)) {
      var V = K.attribs["class"] || "";
      bZ.call([K], Z.call(K, Q, V));
    }
  });
  if (!Z || typeof Z !== "string") return this;
  var Y = Z.split(z1),
    J = this.length;
  for (var K = 0; K < J; K++) {
    var Q = this[K];
    if (!O(Q)) continue;
    var V = d1(Q, "class", !1);
    if (V) {
      var z = " ".concat(V, " ");
      var _iterator6 = _createForOfIteratorHelper(Y),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var B = _step6.value;
          var F = "".concat(B, " ");
          if (!z.includes(" ".concat(F))) z += F;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      s0(Q, "class", z.trim());
    } else s0(Q, "class", Y.join(" ").trim());
  }
  return this;
}
function gZ(Z) {
  if (typeof Z === "function") return G(this, function (Q, V) {
    if (O(Q)) gZ.call([Q], Z.call(Q, V, Q.attribs["class"] || ""));
  });
  var Y = r1(Z),
    J = Y.length,
    K = arguments.length === 0;
  return G(this, function (Q) {
    if (!O(Q)) return;
    if (K) Q.attribs["class"] = "";else {
      var V = r1(Q.attribs["class"]),
        z = !1;
      for (var B = 0; B < J; B++) {
        var F = V.indexOf(Y[B]);
        if (F !== -1) V.splice(F, 1), z = !0, B--;
      }
      if (z) Q.attribs["class"] = V.join(" ");
    }
  });
}
function NZ(Z, Y) {
  if (typeof Z === "function") return G(this, function (z, B) {
    if (O(z)) NZ.call([z], Z.call(z, B, z.attribs["class"] || "", Y), Y);
  });
  if (!Z || typeof Z !== "string") return this;
  var J = Z.split(z1),
    K = J.length,
    Q = typeof Y === "boolean" ? Y ? 1 : -1 : 0,
    V = this.length;
  for (var z = 0; z < V; z++) {
    var B = this[z];
    if (!O(B)) continue;
    var F = r1(B.attribs["class"]);
    for (var q = 0; q < K; q++) {
      var R = F.indexOf(J[q]);
      if (Q >= 0 && R === -1) F.push(J[q]);else if (Q <= 0 && R !== -1) F.splice(R, 1);
    }
    B.attribs["class"] = F.join(" ");
  }
  return this;
}
var O5 = {};
V0(O5, {
  toArray: function toArray() {
    return U2;
  },
  slice: function slice() {
    return F2;
  },
  siblings: function siblings() {
    return oY;
  },
  prevUntil: function prevUntil() {
    return nY;
  },
  prevAll: function prevAll() {
    return aY;
  },
  prev: function prev() {
    return pY;
  },
  parentsUntil: function parentsUntil() {
    return cY;
  },
  parents: function parents() {
    return iY;
  },
  parent: function parent() {
    return mY;
  },
  not: function not() {
    return X2;
  },
  nextUntil: function nextUntil() {
    return sY;
  },
  nextAll: function nextAll() {
    return lY;
  },
  next: function next() {
    return rY;
  },
  map: function map() {
    return Y2;
  },
  last: function last() {
    return z2;
  },
  is: function is() {
    return K2;
  },
  index: function index() {
    return B2;
  },
  has: function has() {
    return Q2;
  },
  get: function get() {
    return W2;
  },
  first: function first() {
    return V2;
  },
  find: function find() {
    return AY;
  },
  filterArray: function filterArray() {
    return v5;
  },
  filter: function filter() {
    return J2;
  },
  eq: function eq() {
    return H2;
  },
  end: function end() {
    return w2;
  },
  each: function each() {
    return Z2;
  },
  contents: function contents() {
    return eY;
  },
  closest: function closest() {
    return dY;
  },
  children: function children() {
    return tY;
  },
  addBack: function addBack() {
    return j2;
  },
  add: function add() {
    return q2;
  },
  _findBySelector: function _findBySelector() {
    return TY;
  }
});
var b;
(function (Z) {
  Z.Attribute = "attribute", Z.Pseudo = "pseudo", Z.PseudoElement = "pseudo-element", Z.Tag = "tag", Z.Universal = "universal", Z.Adjacent = "adjacent", Z.Child = "child", Z.Descendant = "descendant", Z.Parent = "parent", Z.Sibling = "sibling", Z.ColumnCombinator = "column-combinator";
})(b || (b = {}));
var u;
(function (Z) {
  Z.Any = "any", Z.Element = "element", Z.End = "end", Z.Equals = "equals", Z.Exists = "exists", Z.Hyphen = "hyphen", Z.Not = "not", Z.Start = "start";
})(u || (u = {}));
var MZ = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
  LY = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
  RY = new Map([[126, u.Element], [94, u.Start], [36, u.End], [42, u.Any], [33, u.Not], [124, u.Hyphen]]),
  PY = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function u0(Z) {
  switch (Z.type) {
    case b.Adjacent:
    case b.Child:
    case b.Descendant:
    case b.Parent:
    case b.Sibling:
    case b.ColumnCombinator:
      return !0;
    default:
      return !1;
  }
}
var vY = new Set(["contains", "icontains"]);
function OY(Z, Y, J) {
  var K = parseInt(Y, 16) - 65536;
  return K !== K || J ? Y : K < 0 ? String.fromCharCode(K + 65536) : String.fromCharCode(K >> 10 | 55296, K & 1023 | 56320);
}
function H1(Z) {
  return Z.replace(LY, OY);
}
function t4(Z) {
  return Z === 39 || Z === 34;
}
function xZ(Z) {
  return Z === 32 || Z === 9 || Z === 10 || Z === 12 || Z === 13;
}
function w0(Z) {
  var Y = [],
    J = hZ(Y, "".concat(Z), 0);
  if (J < Z.length) throw new Error("Unmatched selector: ".concat(Z.slice(J)));
  return Y;
}
function hZ(Z, Y, J) {
  var K = [];
  function Q(y) {
    var N = Y.slice(J + y).match(MZ);
    if (!N) throw new Error("Expected name, found ".concat(Y.slice(J)));
    var _N = _slicedToArray(N, 1),
      M = _N[0];
    return J += y + M.length, H1(M);
  }
  function V(y) {
    J += y;
    while (J < Y.length && xZ(Y.charCodeAt(J))) J++;
  }
  function z() {
    J += 1;
    var y = J,
      N = 1;
    for (; N > 0 && J < Y.length; J++) if (Y.charCodeAt(J) === 40 && !B(J)) N++;else if (Y.charCodeAt(J) === 41 && !B(J)) N--;
    if (N) throw new Error("Parenthesis not matched");
    return H1(Y.slice(y, J - 1));
  }
  function B(y) {
    var N = 0;
    while (Y.charCodeAt(--y) === 92) N++;
    return (N & 1) === 1;
  }
  function F() {
    if (K.length > 0 && u0(K[K.length - 1])) throw new Error("Did not expect successive traversals.");
  }
  function q(y) {
    if (K.length > 0 && K[K.length - 1].type === b.Descendant) {
      K[K.length - 1].type = y;
      return;
    }
    F(), K.push({
      type: y
    });
  }
  function R(y, N) {
    K.push({
      type: b.Attribute,
      name: y,
      action: N,
      value: Q(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function f() {
    if (K.length && K[K.length - 1].type === b.Descendant) K.pop();
    if (K.length === 0) throw new Error("Empty sub-selector");
    Z.push(K);
  }
  if (V(0), Y.length === J) return J;
  Z: while (J < Y.length) {
    var y = Y.charCodeAt(J);
    switch (y) {
      case 32:
      case 9:
      case 10:
      case 12:
      case 13:
        {
          if (K.length === 0 || K[0].type !== b.Descendant) F(), K.push({
            type: b.Descendant
          });
          V(1);
          break;
        }
      case 62:
        {
          q(b.Child), V(1);
          break;
        }
      case 60:
        {
          q(b.Parent), V(1);
          break;
        }
      case 126:
        {
          q(b.Sibling), V(1);
          break;
        }
      case 43:
        {
          q(b.Adjacent), V(1);
          break;
        }
      case 46:
        {
          R("class", u.Element);
          break;
        }
      case 35:
        {
          R("id", u.Equals);
          break;
        }
      case 91:
        {
          V(1);
          var N = void 0,
            M = null;
          if (Y.charCodeAt(J) === 124) N = Q(1);else if (Y.startsWith("*|", J)) M = "*", N = Q(2);else if (N = Q(0), Y.charCodeAt(J) === 124 && Y.charCodeAt(J + 1) !== 61) M = N, N = Q(1);
          V(0);
          var I = u.Exists,
            Y0 = RY.get(Y.charCodeAt(J));
          if (Y0) {
            if (I = Y0, Y.charCodeAt(J + 1) !== 61) throw new Error("Expected `=`");
            V(2);
          } else if (Y.charCodeAt(J) === 61) I = u.Equals, V(1);
          var k0 = "",
            _0 = null;
          if (I !== "exists") {
            if (t4(Y.charCodeAt(J))) {
              var M1 = Y.charCodeAt(J),
                M0 = J + 1;
              while (M0 < Y.length && (Y.charCodeAt(M0) !== M1 || B(M0))) M0 += 1;
              if (Y.charCodeAt(M0) !== M1) throw new Error("Attribute value didn't end");
              k0 = H1(Y.slice(J + 1, M0)), J = M0 + 1;
            } else {
              var _M = J;
              while (J < Y.length && (!xZ(Y.charCodeAt(J)) && Y.charCodeAt(J) !== 93 || B(J))) J += 1;
              k0 = H1(Y.slice(_M, J));
            }
            V(0);
            var Y1 = Y.charCodeAt(J) | 32;
            if (Y1 === 115) _0 = !1, V(1);else if (Y1 === 105) _0 = !0, V(1);
          }
          if (Y.charCodeAt(J) !== 93) throw new Error("Attribute selector didn't terminate");
          J += 1;
          var Z1 = {
            type: b.Attribute,
            name: N,
            action: I,
            value: k0,
            namespace: M,
            ignoreCase: _0
          };
          K.push(Z1);
          break;
        }
      case 58:
        {
          if (Y.charCodeAt(J + 1) === 58) {
            K.push({
              type: b.PseudoElement,
              name: Q(2).toLowerCase(),
              data: Y.charCodeAt(J) === 40 ? z() : null
            });
            continue;
          }
          var _N2 = Q(1).toLowerCase(),
            _M2 = null;
          if (Y.charCodeAt(J) === 40) if (PY.has(_N2)) {
            if (t4(Y.charCodeAt(J + 1))) throw new Error("Pseudo-selector ".concat(_N2, " cannot be quoted"));
            if (_M2 = [], J = hZ(_M2, Y, J + 1), Y.charCodeAt(J) !== 41) throw new Error("Missing closing parenthesis in :".concat(_N2, " (").concat(Y, ")"));
            J += 1;
          } else {
            if (_M2 = z(), vY.has(_N2)) {
              var _I = _M2.charCodeAt(0);
              if (_I === _M2.charCodeAt(_M2.length - 1) && t4(_I)) _M2 = _M2.slice(1, -1);
            }
            _M2 = H1(_M2);
          }
          K.push({
            type: b.Pseudo,
            name: _N2,
            data: _M2
          });
          break;
        }
      case 44:
        {
          f(), K = [], V(1);
          break;
        }
      default:
        {
          if (Y.startsWith("/*", J)) {
            var _I2 = Y.indexOf("*/", J + 2);
            if (_I2 < 0) throw new Error("Comment was not terminated");
            if (J = _I2 + 2, K.length === 0) V(0);
            break;
          }
          var _N3 = null,
            _M3 = void 0;
          if (y === 42) J += 1, _M3 = "*";else if (y === 124) {
            if (_M3 = "", Y.charCodeAt(J + 1) === 124) {
              q(b.ColumnCombinator), V(2);
              break;
            }
          } else if (MZ.test(Y.slice(J))) _M3 = Q(0);else break Z;
          if (Y.charCodeAt(J) === 124 && Y.charCodeAt(J + 1) !== 124) if (_N3 = _M3, Y.charCodeAt(J + 1) === 42) _M3 = "*", J += 2;else _M3 = Q(1);
          K.push(_M3 === "*" ? {
            type: b.Universal,
            namespace: _N3
          } : {
            type: b.Tag,
            name: _M3,
            namespace: _N3
          });
        }
    }
  }
  return f(), J;
}
var W5 = x0(O0(), 1);
var q0 = x0(O0(), 1);
var DZ = new Map([[b.Universal, 50], [b.Tag, 30], [b.Attribute, 1], [b.Pseudo, 0]]);
function W1(Z) {
  return !DZ.has(Z.type);
}
var yY = new Map([[u.Exists, 10], [u.Equals, 8], [u.Not, 7], [u.Start, 6], [u.End, 6], [u.Any, 5]]);
function e4(Z) {
  var Y = Z.map(GZ);
  for (var J = 1; J < Z.length; J++) {
    var K = Y[J];
    if (K < 0) continue;
    for (var Q = J - 1; Q >= 0 && K < Y[Q]; Q--) {
      var V = Z[Q + 1];
      Z[Q + 1] = Z[Q], Z[Q] = V, Y[Q + 1] = Y[Q], Y[Q] = K;
    }
  }
}
function GZ(Z) {
  var Y, J;
  var K = (Y = DZ.get(Z.type)) !== null && Y !== void 0 ? Y : -1;
  if (Z.type === b.Attribute) {
    if (K = (J = yY.get(Z.action)) !== null && J !== void 0 ? J : 4, Z.action === u.Equals && Z.name === "id") K = 9;
    if (Z.ignoreCase) K >>= 1;
  } else if (Z.type === b.Pseudo) if (!Z.data) K = 3;else if (Z.name === "has" || Z.name === "contains") K = 0;else if (Array.isArray(Z.data)) {
    if (K = Math.min.apply(Math, _toConsumableArray(Z.data.map(function (Q) {
      return Math.min.apply(Math, _toConsumableArray(Q.map(GZ)));
    }))), K < 0) K = 0;
  } else K = 2;
  return K;
}
var U1 = x0(O0(), 1),
  fY = /[-[\]{}()*+?.,\\^$|#\s]/g;
function $Z(Z) {
  return Z.replace(fY, "\\$&");
}
var bY = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function E0(Z, Y) {
  return typeof Z.ignoreCase === "boolean" ? Z.ignoreCase : Z.ignoreCase === "quirks" ? !!Y.quirksMode : !Y.xmlMode && bY.has(Z.name);
}
var uZ = {
  equals: function equals(Z, Y, J) {
    var K = J.adapter,
      Q = Y.name,
      V = Y.value;
    if (E0(Y, J)) return V = V.toLowerCase(), function (z) {
      var B = K.getAttributeValue(z, Q);
      return B != null && B.length === V.length && B.toLowerCase() === V && Z(z);
    };
    return function (z) {
      return K.getAttributeValue(z, Q) === V && Z(z);
    };
  },
  hyphen: function hyphen(Z, Y, J) {
    var K = J.adapter,
      Q = Y.name,
      V = Y.value,
      z = V.length;
    if (E0(Y, J)) return V = V.toLowerCase(), function B(F) {
      var q = K.getAttributeValue(F, Q);
      return q != null && (q.length === z || q.charAt(z) === "-") && q.substr(0, z).toLowerCase() === V && Z(F);
    };
    return function B(F) {
      var q = K.getAttributeValue(F, Q);
      return q != null && (q.length === z || q.charAt(z) === "-") && q.substr(0, z) === V && Z(F);
    };
  },
  element: function element(Z, Y, J) {
    var K = J.adapter,
      Q = Y.name,
      V = Y.value;
    if (/\s/.test(V)) return U1["default"].falseFunc;
    var z = new RegExp("(?:^|\\s)".concat($Z(V), "(?:$|\\s)"), E0(Y, J) ? "i" : "");
    return function B(F) {
      var q = K.getAttributeValue(F, Q);
      return q != null && q.length >= V.length && z.test(q) && Z(F);
    };
  },
  exists: function exists(Z, _ref2, _ref3) {
    var Y = _ref2.name;
    var J = _ref3.adapter;
    return function (K) {
      return J.hasAttrib(K, Y) && Z(K);
    };
  },
  start: function start(Z, Y, J) {
    var K = J.adapter,
      Q = Y.name,
      V = Y.value,
      z = V.length;
    if (z === 0) return U1["default"].falseFunc;
    if (E0(Y, J)) return V = V.toLowerCase(), function (B) {
      var F = K.getAttributeValue(B, Q);
      return F != null && F.length >= z && F.substr(0, z).toLowerCase() === V && Z(B);
    };
    return function (B) {
      var F;
      return !!((F = K.getAttributeValue(B, Q)) === null || F === void 0 ? void 0 : F.startsWith(V)) && Z(B);
    };
  },
  end: function end(Z, Y, J) {
    var K = J.adapter,
      Q = Y.name,
      V = Y.value,
      z = -V.length;
    if (z === 0) return U1["default"].falseFunc;
    if (E0(Y, J)) return V = V.toLowerCase(), function (B) {
      var F;
      return ((F = K.getAttributeValue(B, Q)) === null || F === void 0 ? void 0 : F.substr(z).toLowerCase()) === V && Z(B);
    };
    return function (B) {
      var F;
      return !!((F = K.getAttributeValue(B, Q)) === null || F === void 0 ? void 0 : F.endsWith(V)) && Z(B);
    };
  },
  any: function any(Z, Y, J) {
    var K = J.adapter,
      Q = Y.name,
      V = Y.value;
    if (V === "") return U1["default"].falseFunc;
    if (E0(Y, J)) {
      var z = new RegExp($Z(V), "i");
      return function B(F) {
        var q = K.getAttributeValue(F, Q);
        return q != null && q.length >= V.length && z.test(q) && Z(F);
      };
    }
    return function (z) {
      var B;
      return !!((B = K.getAttributeValue(z, Q)) === null || B === void 0 ? void 0 : B.includes(V)) && Z(z);
    };
  },
  not: function not(Z, Y, J) {
    var K = J.adapter,
      Q = Y.name,
      V = Y.value;
    if (V === "") return function (z) {
      return !!K.getAttributeValue(z, Q) && Z(z);
    };else if (E0(Y, J)) return V = V.toLowerCase(), function (z) {
      var B = K.getAttributeValue(z, Q);
      return (B == null || B.length !== V.length || B.toLowerCase() !== V) && Z(z);
    };
    return function (z) {
      return K.getAttributeValue(z, Q) !== V && Z(z);
    };
  }
};
var gY = new Set([9, 10, 12, 13, 32]);
function EZ(Z) {
  if (Z = Z.trim().toLowerCase(), Z === "even") return [2, 0];else if (Z === "odd") return [2, 1];
  var Y = 0,
    J = 0,
    K = V(),
    Q = z();
  if (Y < Z.length && Z.charAt(Y) === "n") if (Y++, J = K * (Q !== null && Q !== void 0 ? Q : 1), B(), Y < Z.length) K = V(), B(), Q = z();else K = Q = 0;
  if (Q === null || Y < Z.length) throw new Error("n-th rule couldn't be parsed ('".concat(Z, "')"));
  return [J, K * Q];
  function V() {
    if (Z.charAt(Y) === "-") return Y++, -1;
    if (Z.charAt(Y) === "+") Y++;
    return 1;
  }
  function z() {
    var F = Y,
      q = 0;
    while (Y < Z.length && Z.charCodeAt(Y) >= 48 && Z.charCodeAt(Y) <= 57) q = q * 10 + (Z.charCodeAt(Y) - 48), Y++;
    return Y === F ? null : q;
  }
  function B() {
    while (Y < Z.length && gY.has(Z.charCodeAt(Y))) Y++;
  }
}
var Z5 = x0(O0(), 1);
function IZ(Z) {
  var Y = Z[0],
    J = Z[1] - 1;
  if (J < 0 && Y <= 0) return Z5["default"].falseFunc;
  if (Y === -1) return function (V) {
    return V <= J;
  };
  if (Y === 0) return function (V) {
    return V === J;
  };
  if (Y === 1) return J < 0 ? Z5["default"].trueFunc : function (V) {
    return V >= J;
  };
  var K = Math.abs(Y),
    Q = (J % K + K) % K;
  return Y > 1 ? function (V) {
    return V >= J && V % K === Q;
  } : function (V) {
    return V <= J && V % K === Q;
  };
}
function p0(Z) {
  return IZ(EZ(Z));
}
var s = x0(O0(), 1);
function l1(Z, Y) {
  return function (J) {
    var K = Y.getParent(J);
    return K != null && Y.isTag(K) && Z(J);
  };
}
var a0 = {
  contains: function contains(Z, Y, _ref4) {
    var J = _ref4.adapter;
    return function K(Q) {
      return Z(Q) && J.getText(Q).includes(Y);
    };
  },
  icontains: function icontains(Z, Y, _ref5) {
    var J = _ref5.adapter;
    var K = Y.toLowerCase();
    return function Q(V) {
      return Z(V) && J.getText(V).toLowerCase().includes(K);
    };
  },
  "nth-child": function nthChild(Z, Y, _ref6) {
    var J = _ref6.adapter,
      K = _ref6.equals;
    var Q = p0(Y);
    if (Q === s["default"].falseFunc) return s["default"].falseFunc;
    if (Q === s["default"].trueFunc) return l1(Z, J);
    return function V(z) {
      var B = J.getSiblings(z),
        F = 0;
      for (var q = 0; q < B.length; q++) {
        if (K(z, B[q])) break;
        if (J.isTag(B[q])) F++;
      }
      return Q(F) && Z(z);
    };
  },
  "nth-last-child": function nthLastChild(Z, Y, _ref7) {
    var J = _ref7.adapter,
      K = _ref7.equals;
    var Q = p0(Y);
    if (Q === s["default"].falseFunc) return s["default"].falseFunc;
    if (Q === s["default"].trueFunc) return l1(Z, J);
    return function V(z) {
      var B = J.getSiblings(z),
        F = 0;
      for (var q = B.length - 1; q >= 0; q--) {
        if (K(z, B[q])) break;
        if (J.isTag(B[q])) F++;
      }
      return Q(F) && Z(z);
    };
  },
  "nth-of-type": function nthOfType(Z, Y, _ref8) {
    var J = _ref8.adapter,
      K = _ref8.equals;
    var Q = p0(Y);
    if (Q === s["default"].falseFunc) return s["default"].falseFunc;
    if (Q === s["default"].trueFunc) return l1(Z, J);
    return function V(z) {
      var B = J.getSiblings(z),
        F = 0;
      for (var q = 0; q < B.length; q++) {
        var R = B[q];
        if (K(z, R)) break;
        if (J.isTag(R) && J.getName(R) === J.getName(z)) F++;
      }
      return Q(F) && Z(z);
    };
  },
  "nth-last-of-type": function nthLastOfType(Z, Y, _ref9) {
    var J = _ref9.adapter,
      K = _ref9.equals;
    var Q = p0(Y);
    if (Q === s["default"].falseFunc) return s["default"].falseFunc;
    if (Q === s["default"].trueFunc) return l1(Z, J);
    return function V(z) {
      var B = J.getSiblings(z),
        F = 0;
      for (var q = B.length - 1; q >= 0; q--) {
        var R = B[q];
        if (K(z, R)) break;
        if (J.isTag(R) && J.getName(R) === J.getName(z)) F++;
      }
      return Q(F) && Z(z);
    };
  },
  root: function root(Z, Y, _ref10) {
    var J = _ref10.adapter;
    return function (K) {
      var Q = J.getParent(K);
      return (Q == null || !J.isTag(Q)) && Z(K);
    };
  },
  scope: function scope(Z, Y, J, K) {
    var Q = J.equals;
    if (!K || K.length === 0) return a0.root(Z, Y, J);
    if (K.length === 1) return function (V) {
      return Q(K[0], V) && Z(V);
    };
    return function (V) {
      return K.includes(V) && Z(V);
    };
  },
  hover: Y5("isHovered"),
  visited: Y5("isVisited"),
  active: Y5("isActive")
};
function Y5(Z) {
  return function Y(J, K, _ref11) {
    var Q = _ref11.adapter;
    var V = Q[Z];
    if (typeof V !== "function") return s["default"].falseFunc;
    return function z(B) {
      return V(B) && J(B);
    };
  };
}
var B1 = {
  empty: function empty(Z, _ref12) {
    var Y = _ref12.adapter;
    return !Y.getChildren(Z).some(function (J) {
      return Y.isTag(J) || Y.getText(J) !== "";
    });
  },
  "first-child": function firstChild(Z, _ref13) {
    var Y = _ref13.adapter,
      J = _ref13.equals;
    if (Y.prevElementSibling) return Y.prevElementSibling(Z) == null;
    var K = Y.getSiblings(Z).find(function (Q) {
      return Y.isTag(Q);
    });
    return K != null && J(Z, K);
  },
  "last-child": function lastChild(Z, _ref14) {
    var Y = _ref14.adapter,
      J = _ref14.equals;
    var K = Y.getSiblings(Z);
    for (var Q = K.length - 1; Q >= 0; Q--) {
      if (J(Z, K[Q])) return !0;
      if (Y.isTag(K[Q])) break;
    }
    return !1;
  },
  "first-of-type": function firstOfType(Z, _ref15) {
    var Y = _ref15.adapter,
      J = _ref15.equals;
    var K = Y.getSiblings(Z),
      Q = Y.getName(Z);
    for (var V = 0; V < K.length; V++) {
      var z = K[V];
      if (J(Z, z)) return !0;
      if (Y.isTag(z) && Y.getName(z) === Q) break;
    }
    return !1;
  },
  "last-of-type": function lastOfType(Z, _ref16) {
    var Y = _ref16.adapter,
      J = _ref16.equals;
    var K = Y.getSiblings(Z),
      Q = Y.getName(Z);
    for (var V = K.length - 1; V >= 0; V--) {
      var z = K[V];
      if (J(Z, z)) return !0;
      if (Y.isTag(z) && Y.getName(z) === Q) break;
    }
    return !1;
  },
  "only-of-type": function onlyOfType(Z, _ref17) {
    var Y = _ref17.adapter,
      J = _ref17.equals;
    var K = Y.getName(Z);
    return Y.getSiblings(Z).every(function (Q) {
      return J(Z, Q) || !Y.isTag(Q) || Y.getName(Q) !== K;
    });
  },
  "only-child": function onlyChild(Z, _ref18) {
    var Y = _ref18.adapter,
      J = _ref18.equals;
    return Y.getSiblings(Z).every(function (K) {
      return J(Z, K) || !Y.isTag(K);
    });
  }
};
function J5(Z, Y, J, K) {
  if (J === null) {
    if (Z.length > K) throw new Error("Pseudo-class :".concat(Y, " requires an argument"));
  } else if (Z.length === K) throw new Error("Pseudo-class :".concat(Y, " doesn't have any arguments"));
}
var s1 = {
  "any-link": ":is(a, area, link)[href]",
  link: ":any-link:not(:visited)",
  disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
  enabled: ":not(:disabled)",
  checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
  required: ":is(input, select, textarea)[required]",
  optional: ":is(input, select, textarea):not([required])",
  selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
  checkbox: "[type=checkbox]",
  file: "[type=file]",
  password: "[type=password]",
  radio: "[type=radio]",
  reset: "[type=reset]",
  image: "[type=image]",
  submit: "[type=submit]",
  parent: ":not(:empty)",
  header: ":is(h1, h2, h3, h4, h5, h6)",
  button: ":is(button, input[type=button])",
  input: ":is(input, textarea, select, button)",
  text: "input:is(:not([type!='']), [type=text])"
};
var e = x0(O0(), 1);
var Q5 = {};
function V5(Z, Y) {
  if (Z === e["default"].falseFunc) return e["default"].falseFunc;
  return function (J) {
    return Y.isTag(J) && Z(J);
  };
}
function z5(Z, Y) {
  var J = Y.getSiblings(Z);
  if (J.length <= 1) return [];
  var K = J.indexOf(Z);
  if (K < 0 || K === J.length - 1) return [];
  return J.slice(K + 1).filter(Y.isTag);
}
function X5(Z) {
  return {
    xmlMode: !!Z.xmlMode,
    lowerCaseAttributeNames: !!Z.lowerCaseAttributeNames,
    lowerCaseTags: !!Z.lowerCaseTags,
    quirksMode: !!Z.quirksMode,
    cacheResults: !!Z.cacheResults,
    pseudos: Z.pseudos,
    adapter: Z.adapter,
    equals: Z.equals
  };
}
var K5 = function K5(Z, Y, J, K, Q) {
    var V = Q(Y, X5(J), K);
    return V === e["default"].trueFunc ? Z : V === e["default"].falseFunc ? e["default"].falseFunc : function (z) {
      return V(z) && Z(z);
    };
  },
  p1 = {
    is: K5,
    matches: K5,
    where: K5,
    not: function not(Z, Y, J, K, Q) {
      var V = Q(Y, X5(J), K);
      return V === e["default"].falseFunc ? Z : V === e["default"].trueFunc ? e["default"].falseFunc : function (z) {
        return !V(z) && Z(z);
      };
    },
    has: function has(Z, Y, J, K, Q) {
      var V = J.adapter,
        z = X5(J);
      z.relativeSelector = !0;
      var B = Y.some(function (R) {
          return R.some(W1);
        }) ? [Q5] : void 0,
        F = Q(Y, z, B);
      if (F === e["default"].falseFunc) return e["default"].falseFunc;
      var q = V5(F, V);
      if (B && F !== e["default"].trueFunc) {
        var _F$shouldTestNextSibl = F.shouldTestNextSiblings,
          R = _F$shouldTestNextSibl === void 0 ? !1 : _F$shouldTestNextSibl;
        return function (f) {
          if (!Z(f)) return !1;
          B[0] = f;
          var y = V.getChildren(f),
            N = R ? [].concat(_toConsumableArray(y), _toConsumableArray(z5(f, V))) : y;
          return V.existsOne(q, N);
        };
      }
      return function (R) {
        return Z(R) && V.existsOne(q, V.getChildren(R));
      };
    }
  };
function SZ(Z, Y, J, K, Q) {
  var V;
  var z = Y.name,
    B = Y.data;
  if (Array.isArray(B)) {
    if (!(z in p1)) throw new Error("Unknown pseudo-class :".concat(z, "(").concat(B, ")"));
    return p1[z](Z, B, J, K, Q);
  }
  var F = (V = J.pseudos) === null || V === void 0 ? void 0 : V[z],
    q = typeof F === "string" ? F : s1[z];
  if (typeof q === "string") {
    if (B != null) throw new Error("Pseudo ".concat(z, " doesn't have any arguments"));
    var R = w0(q);
    return p1.is(Z, R, J, K, Q);
  }
  if (typeof F === "function") return J5(F, z, B, 1), function (R) {
    return F(R, B) && Z(R);
  };
  if (z in a0) return a0[z](Z, B, J, K);
  if (z in B1) {
    var _R = B1[z];
    return J5(_R, z, B, 2), function (f) {
      return _R(f, J, B) && Z(f);
    };
  }
  throw new Error("Unknown pseudo-class :".concat(z));
}
function H5(Z, Y) {
  var J = Y.getParent(Z);
  if (J && Y.isTag(J)) return J;
  return null;
}
function kZ(Z, Y, J, K, Q) {
  var V = J.adapter,
    z = J.equals;
  switch (Y.type) {
    case b.PseudoElement:
      throw new Error("Pseudo-elements are not supported by css-select");
    case b.ColumnCombinator:
      throw new Error("Column combinators are not yet supported by css-select");
    case b.Attribute:
      {
        if (Y.namespace != null) throw new Error("Namespaced attributes are not yet supported by css-select");
        if (!J.xmlMode || J.lowerCaseAttributeNames) Y.name = Y.name.toLowerCase();
        return uZ[Y.action](Z, Y, J);
      }
    case b.Pseudo:
      return SZ(Z, Y, J, K, Q);
    case b.Tag:
      {
        if (Y.namespace != null) throw new Error("Namespaced tag names are not yet supported by css-select");
        var B = Y.name;
        if (!J.xmlMode || J.lowerCaseTags) B = B.toLowerCase();
        return function F(q) {
          return V.getName(q) === B && Z(q);
        };
      }
    case b.Descendant:
      {
        if (J.cacheResults === !1 || typeof WeakSet === "undefined") return function F(q) {
          var R = q;
          while (R = H5(R, V)) if (Z(R)) return !0;
          return !1;
        };
        var _B = new WeakSet();
        return function F(q) {
          var R = q;
          while (R = H5(R, V)) if (!_B.has(R)) {
            if (V.isTag(R) && Z(R)) return !0;
            _B.add(R);
          }
          return !1;
        };
      }
    case "_flexibleDescendant":
      return function B(F) {
        var q = F;
        do if (Z(q)) return !0; while (q = H5(q, V));
        return !1;
      };
    case b.Parent:
      return function B(F) {
        return V.getChildren(F).some(function (q) {
          return V.isTag(q) && Z(q);
        });
      };
    case b.Child:
      return function B(F) {
        var q = V.getParent(F);
        return q != null && V.isTag(q) && Z(q);
      };
    case b.Sibling:
      return function B(F) {
        var q = V.getSiblings(F);
        for (var R = 0; R < q.length; R++) {
          var f = q[R];
          if (z(F, f)) break;
          if (V.isTag(f) && Z(f)) return !0;
        }
        return !1;
      };
    case b.Adjacent:
      {
        if (V.prevElementSibling) return function B(F) {
          var q = V.prevElementSibling(F);
          return q != null && Z(q);
        };
        return function B(F) {
          var q = V.getSiblings(F),
            R;
          for (var f = 0; f < q.length; f++) {
            var y = q[f];
            if (z(F, y)) break;
            if (V.isTag(y)) R = y;
          }
          return !!R && Z(R);
        };
      }
    case b.Universal:
      {
        if (Y.namespace != null && Y.namespace !== "*") throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return Z;
      }
  }
}
function _Z(Z, Y, J) {
  var K = a1(Z, Y, J);
  return V5(K, Y.adapter);
}
function a1(Z, Y, J) {
  var K = typeof Z === "string" ? w0(Z) : Z;
  return n1(K, Y, J);
}
function AZ(Z) {
  return Z.type === b.Pseudo && (Z.name === "scope" || Array.isArray(Z.data) && Z.data.some(function (Y) {
    return Y.some(AZ);
  }));
}
var NY = {
    type: b.Descendant
  },
  MY = {
    type: "_flexibleDescendant"
  },
  xY = {
    type: b.Pseudo,
    name: "scope",
    data: null
  };
function hY(Z, _ref19, J) {
  var Y = _ref19.adapter;
  var K = !!(J === null || J === void 0 ? void 0 : J.every(function (Q) {
    var V = Y.isTag(Q) && Y.getParent(Q);
    return Q === Q5 || V && Y.isTag(V);
  }));
  var _iterator7 = _createForOfIteratorHelper(Z),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var Q = _step7.value;
      if (Q.length > 0 && W1(Q[0]) && Q[0].type !== b.Descendant) ;else if (K && !Q.some(AZ)) Q.unshift(NY);else continue;
      Q.unshift(xY);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}
function n1(Z, Y, J) {
  var K;
  Z.forEach(e4), J = (K = Y.context) !== null && K !== void 0 ? K : J;
  var Q = Array.isArray(J),
    V = J && (Array.isArray(J) ? J : [J]);
  if (Y.relativeSelector !== !1) hY(Z, Y, V);else if (Z.some(function (F) {
    return F.length > 0 && W1(F[0]);
  })) throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
  var z = !1,
    B = Z.map(function (F) {
      if (F.length >= 2) {
        var _F2 = _slicedToArray(F, 2),
          q = _F2[0],
          R = _F2[1];
        if (q.type !== b.Pseudo || q.name !== "scope") ;else if (Q && R.type === b.Descendant) F[1] = MY;else if (R.type === b.Adjacent || R.type === b.Sibling) z = !0;
      }
      return CY(F, Y, V);
    }).reduce(DY, q0["default"].falseFunc);
  return B.shouldTestNextSiblings = z, B;
}
function CY(Z, Y, J) {
  var K;
  return Z.reduce(function (Q, V) {
    return Q === q0["default"].falseFunc ? q0["default"].falseFunc : kZ(Q, V, Y, J, n1);
  }, (K = Y.rootFunc) !== null && K !== void 0 ? K : q0["default"].trueFunc);
}
function DY(Z, Y) {
  if (Y === q0["default"].falseFunc || Z === q0["default"].trueFunc) return Z;
  if (Z === q0["default"].falseFunc || Y === q0["default"].trueFunc) return Y;
  return function J(K) {
    return Z(K) || Y(K);
  };
}
var TZ = function TZ(Z, Y) {
    return Z === Y;
  },
  GY = {
    adapter: P0,
    equals: TZ
  };
function mZ(Z) {
  var Y, J, K, Q;
  var V = Z !== null && Z !== void 0 ? Z : GY;
  return (Y = V.adapter) !== null && Y !== void 0 || (V.adapter = P0), (J = V.equals) !== null && J !== void 0 || (V.equals = (Q = (K = V.adapter) === null || K === void 0 ? void 0 : K.equals) !== null && Q !== void 0 ? Q : TZ), V;
}
function U5(Z) {
  return function Y(J, K, Q) {
    var V = mZ(K);
    return Z(J, V, Q);
  };
}
var yX = U5(_Z),
  fX = U5(a1),
  o1 = U5(n1);
function iZ(Z) {
  return function Y(J, K, Q) {
    var V = mZ(Q);
    if (typeof J !== "function") J = a1(J, V, K);
    var z = t1(K, V.adapter, J.shouldTestNextSiblings);
    return Z(J, z, V);
  };
}
function t1(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  if (J) Z = $Y(Z, Y);
  return Array.isArray(Z) ? Y.removeSubsets(Z) : Y.getChildren(Z);
}
function $Y(Z, Y) {
  var J = Array.isArray(Z) ? Z.slice(0) : [Z],
    K = J.length;
  for (var Q = 0; Q < K; Q++) {
    var V = z5(J[Q], Y);
    J.push.apply(J, _toConsumableArray(V));
  }
  return J;
}
var bX = iZ(function (Z, Y, J) {
    return Z === W5["default"].falseFunc || !Y || Y.length === 0 ? [] : J.adapter.findAll(Z, Y);
  }),
  gX = iZ(function (Z, Y, J) {
    return Z === W5["default"].falseFunc || !Y || Y.length === 0 ? null : J.adapter.findOne(Z, Y);
  });
var Z4 = x0(O0(), 1);
var uY = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function n0(Z) {
  if (Z.type !== "pseudo") return !1;
  if (uY.has(Z.name)) return !0;
  if (Z.name === "not" && Array.isArray(Z.data)) return Z.data.some(function (Y) {
    return Y.some(n0);
  });
  return !1;
}
function cZ(Z, Y, J) {
  var K = Y != null ? parseInt(Y, 10) : NaN;
  switch (Z) {
    case "first":
      return 1;
    case "nth":
    case "eq":
      return isFinite(K) ? K >= 0 ? K + 1 : 1 / 0 : 0;
    case "lt":
      return isFinite(K) ? K >= 0 ? Math.min(K, J) : 1 / 0 : 0;
    case "gt":
      return isFinite(K) ? 1 / 0 : 0;
    case "odd":
      return 2 * J;
    case "even":
      return 2 * J - 1;
    case "last":
    case "not":
      return 1 / 0;
  }
}
function dZ(Z) {
  while (Z.parent) Z = Z.parent;
  return Z;
}
function e1(Z) {
  var Y = [],
    J = [];
  var _iterator8 = _createForOfIteratorHelper(Z),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var K = _step8.value;
      if (K.some(n0)) Y.push(K);else J.push(K);
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  return [J, Y];
}
var EY = {
    type: b.Universal,
    namespace: null
  },
  IY = {
    type: b.Pseudo,
    name: "scope",
    data: null
  };
function w5(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return q5([Z], Y, J);
}
function q5(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (typeof Y === "function") return Z.some(Y);
  var _e2 = e1(w0(Y)),
    _e3 = _slicedToArray(_e2, 2),
    K = _e3[0],
    Q = _e3[1];
  return K.length > 0 && Z.some(o1(K, J)) || Q.some(function (V) {
    return lZ(V, Z, J).length > 0;
  });
}
function SY(Z, Y, J, K) {
  var Q = typeof J === "string" ? parseInt(J, 10) : NaN;
  switch (Z) {
    case "first":
    case "lt":
      return Y;
    case "last":
      return Y.length > 0 ? [Y[Y.length - 1]] : Y;
    case "nth":
    case "eq":
      return isFinite(Q) && Math.abs(Q) < Y.length ? [Q < 0 ? Y[Y.length + Q] : Y[Q]] : [];
    case "gt":
      return isFinite(Q) ? Y.slice(Q + 1) : [];
    case "even":
      return Y.filter(function (V, z) {
        return z % 2 === 0;
      });
    case "odd":
      return Y.filter(function (V, z) {
        return z % 2 === 1;
      });
    case "not":
      {
        var V = new Set(rZ(J, Y, K));
        return Y.filter(function (z) {
          return !V.has(z);
        });
      }
  }
}
function j5(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return rZ(w0(Z), Y, J);
}
function rZ(Z, Y, J) {
  if (Y.length === 0) return [];
  var _e4 = e1(Z),
    _e5 = _slicedToArray(_e4, 2),
    K = _e5[0],
    Q = _e5[1],
    V;
  if (K.length) {
    var z = F5(Y, K, J);
    if (Q.length === 0) return z;
    if (z.length) V = new Set(z);
  }
  for (var _z = 0; _z < Q.length && (V === null || V === void 0 ? void 0 : V.size) !== Y.length; _z++) {
    var B = Q[_z];
    if ((V ? Y.filter(function (R) {
      return O(R) && !V.has(R);
    }) : Y).length === 0) break;
    var q = lZ(B, Y, J);
    if (q.length) if (!V) {
      if (_z === Q.length - 1) return q;
      V = new Set(q);
    } else q.forEach(function (R) {
      return V.add(R);
    });
  }
  return typeof V !== "undefined" ? V.size === Y.length ? Y : Y.filter(function (z) {
    return V.has(z);
  }) : [];
}
function lZ(Z, Y, J) {
  var K;
  if (Z.some(u0)) {
    var Q = (K = J.root) !== null && K !== void 0 ? K : dZ(Y[0]),
      V = _objectSpread(_objectSpread({}, J), {}, {
        context: Y,
        relativeSelector: !1
      });
    return Z.push(IY), Y4(Q, Z, V, !0, Y.length);
  }
  return Y4(Y, Z, J, !1, Y.length);
}
function sZ(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var K = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1 / 0;
  if (typeof Z === "function") return pZ(Y, Z);
  var _e6 = e1(w0(Z)),
    _e7 = _slicedToArray(_e6, 2),
    Q = _e7[0],
    V = _e7[1],
    z = V.map(function (B) {
      return Y4(Y, B, J, !0, K);
    });
  if (Q.length) z.push(B5(Y, Q, J, K));
  if (z.length === 0) return [];
  if (z.length === 1) return z[0];
  return L0(z.reduce(function (B, F) {
    return [].concat(_toConsumableArray(B), _toConsumableArray(F));
  }));
}
function Y4(Z, Y, J, K, Q) {
  var V = Y.findIndex(n0),
    z = Y.slice(0, V),
    B = Y[V],
    F = Y.length - 1 === V ? Q : 1 / 0,
    q = cZ(B.name, B.data, F);
  if (q === 0) return [];
  var f = (z.length === 0 && !Array.isArray(Z) ? d0(Z).filter(O) : z.length === 0 ? (Array.isArray(Z) ? Z : [Z]).filter(O) : K || z.some(u0) ? B5(Z, [z], J, q) : F5(Z, [z], J)).slice(0, q),
    y = SY(B.name, f, B.data, J);
  if (y.length === 0 || Y.length === V + 1) return y;
  var N = Y.slice(V + 1),
    M = N.some(u0);
  if (M) {
    if (u0(N[0])) {
      var I = N[0].type;
      if (I === b.Sibling || I === b.Adjacent) y = t1(y, P0, !0);
      N.unshift(EY);
    }
    J = _objectSpread(_objectSpread({}, J), {}, {
      relativeSelector: !1,
      rootFunc: function rootFunc(I) {
        return y.includes(I);
      }
    });
  } else if (J.rootFunc && J.rootFunc !== Z4.trueFunc) J = _objectSpread(_objectSpread({}, J), {}, {
    rootFunc: Z4.trueFunc
  });
  return N.some(n0) ? Y4(y, N, J, !1, Q) : M ? B5(y, [N], J, Q) : F5(y, [N], J);
}
function B5(Z, Y, J, K) {
  var Q = o1(Y, J, Z);
  return pZ(Z, Q, K);
}
function pZ(Z, Y) {
  var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1 / 0;
  var K = t1(Z, P0, Y.shouldTestNextSiblings);
  return k1(function (Q) {
    return O(Q) && Y(Q);
  }, K, !0, J);
}
function F5(Z, Y, J) {
  var K = (Array.isArray(Z) ? Z : [Z]).filter(O);
  if (K.length === 0) return K;
  var Q = o1(Y, J);
  return Q === Z4.trueFunc ? K : K.filter(Q);
}
var _Y = /^\s*[+~]/;
function AY(Z) {
  if (!Z) return this._make([]);
  if (typeof Z !== "string") {
    var Y = t(Z) ? Z.toArray() : [Z],
      J = this.toArray();
    return this._make(Y.filter(function (K) {
      return J.some(function (Q) {
        return m1(Q, K);
      });
    }));
  }
  return this._findBySelector(Z, Number.POSITIVE_INFINITY);
}
function TY(Z, Y) {
  var J;
  var K = this.toArray(),
    Q = _Y.test(Z) ? K : this.children().toArray(),
    V = {
      context: K,
      root: (J = this._root) === null || J === void 0 ? void 0 : J[0],
      xmlMode: this.options.xmlMode,
      lowerCaseTags: this.options.lowerCaseTags,
      lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
      pseudos: this.options.pseudos,
      quirksMode: this.options.quirksMode
    };
  return this._make(sZ(Z, Q, V, Y));
}
function L5(Z) {
  return function (Y) {
    for (var _len2 = arguments.length, J = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      J[_key2 - 1] = arguments[_key2];
    }
    return function (K) {
      var Q;
      var V = Z(Y, this);
      if (K) V = v5(V, K, this.options.xmlMode, (Q = this._root) === null || Q === void 0 ? void 0 : Q[0]);
      return this._make(this.length > 1 && V.length > 1 ? J.reduce(function (z, B) {
        return B(z);
      }, V) : V);
    };
  };
}
var F1 = L5(function (Z, Y) {
    var J = [];
    for (var K = 0; K < Y.length; K++) {
      var Q = Z(Y[K]);
      if (Q.length > 0) J = J.concat(Q);
    }
    return J;
  }),
  R5 = L5(function (Z, Y) {
    var J = [];
    for (var K = 0; K < Y.length; K++) {
      var Q = Z(Y[K]);
      if (Q !== null) J.push(Q);
    }
    return J;
  });
function P5(Z) {
  for (var _len3 = arguments.length, Y = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    Y[_key3 - 1] = arguments[_key3];
  }
  var J = null,
    K = L5(function (Q, V) {
      var z = [];
      return G(V, function (B) {
        for (var F; F = Q(B); B = F) {
          if (J === null || J === void 0 ? void 0 : J(F, z.length)) break;
          z.push(F);
        }
      }), z;
    }).apply(void 0, [Z].concat(Y));
  return function (Q, V) {
    var _this14 = this;
    J = typeof Q === "string" ? function (B) {
      return w5(B, Q, _this14.options);
    } : Q ? w1(Q) : null;
    var z = K.call(this, V);
    return J = null, z;
  };
}
function o0(Z) {
  return Z.length > 1 ? Array.from(new Set(Z)) : Z;
}
var mY = R5(function (_ref20) {
    var Z = _ref20.parent;
    return Z && !n(Z) ? Z : null;
  }, o0),
  iY = F1(function (Z) {
    var Y = [];
    while (Z.parent && !n(Z.parent)) Y.push(Z.parent), Z = Z.parent;
    return Y;
  }, L0, function (Z) {
    return Z.reverse();
  }),
  cY = P5(function (_ref21) {
    var Z = _ref21.parent;
    return Z && !n(Z) ? Z : null;
  }, L0, function (Z) {
    return Z.reverse();
  });
function dY(Z) {
  var Y;
  var J = [];
  if (!Z) return this._make(J);
  var K = {
      xmlMode: this.options.xmlMode,
      root: (Y = this._root) === null || Y === void 0 ? void 0 : Y[0]
    },
    Q = typeof Z === "string" ? function (V) {
      return w5(V, Z, K);
    } : w1(Z);
  return G(this, function (V) {
    if (V && !n(V) && !O(V)) V = V.parent;
    while (V && O(V)) {
      if (Q(V, 0)) {
        if (!J.includes(V)) J.push(V);
        break;
      }
      V = V.parent;
    }
  }), this._make(J);
}
var rY = R5(function (Z) {
    return I1(Z);
  }),
  lY = F1(function (Z) {
    var Y = [];
    while (Z.next) if (Z = Z.next, O(Z)) Y.push(Z);
    return Y;
  }, o0),
  sY = P5(function (Z) {
    return I1(Z);
  }, o0),
  pY = R5(function (Z) {
    return S1(Z);
  }),
  aY = F1(function (Z) {
    var Y = [];
    while (Z.prev) if (Z = Z.prev, O(Z)) Y.push(Z);
    return Y;
  }, o0),
  nY = P5(function (Z) {
    return S1(Z);
  }, o0),
  oY = F1(function (Z) {
    return k4(Z).filter(function (Y) {
      return O(Y) && Y !== Z;
    });
  }, L0),
  tY = F1(function (Z) {
    return d0(Z).filter(O);
  }, o0);
function eY() {
  var Z = this.toArray().reduce(function (Y, J) {
    return C(J) ? Y.concat(J.children) : Y;
  }, []);
  return this._make(Z);
}
function Z2(Z) {
  var Y = 0,
    J = this.length;
  while (Y < J && Z.call(this[Y], Y, this[Y]) !== !1) ++Y;
  return this;
}
function Y2(Z) {
  var Y = [];
  for (var J = 0; J < this.length; J++) {
    var K = this[J],
      Q = Z.call(K, J, K);
    if (Q != null) Y = Y.concat(Q);
  }
  return this._make(Y);
}
function w1(Z) {
  if (typeof Z === "function") return function (Y, J) {
    return Z.call(Y, J, Y);
  };
  if (t(Z)) return function (Y) {
    return Array.prototype.includes.call(Z, Y);
  };
  return function (Y) {
    return Z === Y;
  };
}
function J2(Z) {
  var Y;
  return this._make(v5(this.toArray(), Z, this.options.xmlMode, (Y = this._root) === null || Y === void 0 ? void 0 : Y[0]));
}
function v5(Z, Y, J, K) {
  return typeof Y === "string" ? j5(Y, Z, {
    xmlMode: J,
    root: K
  }) : Z.filter(w1(Y));
}
function K2(Z) {
  var Y = this.toArray();
  return typeof Z === "string" ? q5(Y.filter(O), Z, this.options) : Z ? Y.some(w1(Z)) : !1;
}
function X2(Z) {
  var Y = this.toArray();
  if (typeof Z === "string") {
    var J = new Set(j5(Z, Y, this.options));
    Y = Y.filter(function (K) {
      return !J.has(K);
    });
  } else {
    var _J2 = w1(Z);
    Y = Y.filter(function (K, Q) {
      return !_J2(K, Q);
    });
  }
  return this._make(Y);
}
function Q2(Z) {
  var _this15 = this;
  return this.filter(typeof Z === "string" ? ":has(".concat(Z, ")") : function (Y, J) {
    return _this15._make(J).find(Z).length > 0;
  });
}
function V2() {
  return this.length > 1 ? this._make(this[0]) : this;
}
function z2() {
  return this.length > 0 ? this._make(this[this.length - 1]) : this;
}
function H2(Z) {
  var Y;
  if (Z = +Z, Z === 0 && this.length <= 1) return this;
  if (Z < 0) Z = this.length + Z;
  return this._make((Y = this[Z]) !== null && Y !== void 0 ? Y : []);
}
function W2(Z) {
  if (Z == null) return this.toArray();
  return this[Z < 0 ? this.length + Z : Z];
}
function U2() {
  return Array.prototype.slice.call(this);
}
function B2(Z) {
  var Y, J;
  if (Z == null) Y = this.parent().children(), J = this[0];else if (typeof Z === "string") Y = this._make(Z), J = this[0];else Y = this, J = t(Z) ? Z[0] : Z;
  return Array.prototype.indexOf.call(Y, J);
}
function F2(Z, Y) {
  return this._make(Array.prototype.slice.call(this, Z, Y));
}
function w2() {
  var Z;
  return (Z = this.prevObject) !== null && Z !== void 0 ? Z : this._make([]);
}
function q2(Z, Y) {
  var J = this._make(Z, Y),
    K = L0([].concat(_toConsumableArray(this.get()), _toConsumableArray(J.get())));
  return this._make(K);
}
function j2(Z) {
  return this.prevObject ? this.add(Z ? this.prevObject.filter(Z) : this.prevObject) : this;
}
var y5 = {};
V0(y5, {
  wrapInner: function wrapInner() {
    return f2;
  },
  wrapAll: function wrapAll() {
    return g2;
  },
  wrap: function wrap() {
    return y2;
  },
  unwrap: function unwrap() {
    return b2;
  },
  toString: function toString() {
    return u2;
  },
  text: function text() {
    return E2;
  },
  replaceWith: function replaceWith() {
    return D2;
  },
  remove: function remove() {
    return C2;
  },
  prependTo: function prependTo() {
    return P2;
  },
  prepend: function prepend() {
    return O2;
  },
  insertBefore: function insertBefore() {
    return h2;
  },
  insertAfter: function insertAfter() {
    return M2;
  },
  html: function html() {
    return $2;
  },
  empty: function empty() {
    return G2;
  },
  clone: function clone() {
    return I2;
  },
  before: function before() {
    return x2;
  },
  appendTo: function appendTo() {
    return R2;
  },
  append: function append() {
    return v2;
  },
  after: function after() {
    return N2;
  },
  _makeDomArray: function _makeDomArray() {
    return L2;
  }
});
function aZ(Z) {
  return function Y(J, K, Q, V) {
    if (typeof Buffer !== "undefined" && Buffer.isBuffer(J)) J = J.toString();
    if (typeof J === "string") return Z(J, K, Q, V);
    var z = J;
    if (!Array.isArray(z) && n(z)) return z;
    var B = new a([]);
    return y0(z, B), B;
  };
}
function y0(Z, Y) {
  var J = Array.isArray(Z) ? Z : [Z];
  if (Y) Y.children = J;else Y = null;
  for (var K = 0; K < J.length; K++) {
    var Q = J[K];
    if (Q.parent && Q.parent.children !== J) B0(Q);
    if (Y) Q.prev = J[K - 1] || null, Q.next = J[K + 1] || null;else Q.prev = Q.next = null;
    Q.parent = Y;
  }
  return Y;
}
function L2(Z, Y) {
  if (Z == null) return [];
  if (typeof Z === "string") return this._parse(Z, this.options, !1, null).children.slice(0);
  if ("length" in Z) {
    if (Z.length === 1) return this._makeDomArray(Z[0], Y);
    var J = [];
    for (var K = 0; K < Z.length; K++) {
      var Q = Z[K];
      if (_typeof(Q) === "object") {
        if (Q == null) continue;
        if (!("length" in Q)) {
          J.push(Y ? c0(Q, !0) : Q);
          continue;
        }
      }
      J.push.apply(J, _toConsumableArray(this._makeDomArray(Q, Y)));
    }
    return J;
  }
  return [Y ? c0(Z, !0) : Z];
}
function nZ(Z) {
  return function () {
    var _this16 = this;
    for (var _len4 = arguments.length, Y = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      Y[_key4] = arguments[_key4];
    }
    var J = this.length - 1;
    return G(this, function (K, Q) {
      if (!C(K)) return;
      var V = typeof Y[0] === "function" ? Y[0].call(K, Q, _this16._render(K.children)) : Y,
        z = _this16._makeDomArray(V, Q < J);
      Z(z, K.children, K);
    });
  };
}
function f0(Z, Y, J, K, Q) {
  var V, z;
  var B = [Y, J].concat(_toConsumableArray(K)),
    F = Y === 0 ? null : Z[Y - 1],
    q = Y + J >= Z.length ? null : Z[Y + J];
  for (var R = 0; R < K.length; ++R) {
    var f = K[R],
      y = f.parent;
    if (y) {
      var M = y.children.indexOf(f);
      if (M !== -1) {
        if (y.children.splice(M, 1), Q === y && Y > M) B[0]--;
      }
    }
    if (f.parent = Q, f.prev) f.prev.next = (V = f.next) !== null && V !== void 0 ? V : null;
    if (f.next) f.next.prev = (z = f.prev) !== null && z !== void 0 ? z : null;
    f.prev = R === 0 ? F : K[R - 1], f.next = R === K.length - 1 ? q : K[R + 1];
  }
  if (F) F.next = K[0];
  if (q) q.prev = K[K.length - 1];
  return Z.splice.apply(Z, _toConsumableArray(B));
}
function R2(Z) {
  return (t(Z) ? Z : this._make(Z)).append(this), this;
}
function P2(Z) {
  return (t(Z) ? Z : this._make(Z)).prepend(this), this;
}
var v2 = nZ(function (Z, Y, J) {
    f0(Y, Y.length, 0, Z, J);
  }),
  O2 = nZ(function (Z, Y, J) {
    f0(Y, 0, 0, Z, J);
  });
function oZ(Z) {
  return function (Y) {
    var J = this.length - 1,
      K = this.parents().last();
    for (var Q = 0; Q < this.length; Q++) {
      var V = this[Q],
        z = typeof Y === "function" ? Y.call(V, Q, V) : typeof Y === "string" && !X1(Y) ? K.find(Y).clone() : Y,
        _this$_makeDomArray = this._makeDomArray(z, Q < J),
        _this$_makeDomArray2 = _slicedToArray(_this$_makeDomArray, 1),
        B = _this$_makeDomArray2[0];
      if (!B || !C(B)) continue;
      var F = B,
        q = 0;
      while (q < F.children.length) {
        var R = F.children[q];
        if (O(R)) F = R, q = 0;else q++;
      }
      Z(V, F, [B]);
    }
    return this;
  };
}
var y2 = oZ(function (Z, Y, J) {
    var K = Z.parent;
    if (!K) return;
    var Q = K.children,
      V = Q.indexOf(Z);
    y0([Z], Y), f0(Q, V, 0, J, K);
  }),
  f2 = oZ(function (Z, Y, J) {
    if (!C(Z)) return;
    y0(Z.children, Y), y0(J, Z);
  });
function b2(Z) {
  var _this17 = this;
  return this.parent(Z).not("body").each(function (Y, J) {
    _this17._make(J).replaceWith(J.children);
  }), this;
}
function g2(Z) {
  var Y = this[0];
  if (Y) {
    var J = this._make(typeof Z === "function" ? Z.call(Y, 0, Y) : Z).insertBefore(Y),
      K;
    for (var V = 0; V < J.length; V++) if (J[V].type === p.Tag) K = J[V];
    var Q = 0;
    while (K && Q < K.children.length) {
      var _V2 = K.children[Q];
      if (_V2.type === p.Tag) K = _V2, Q = 0;else Q++;
    }
    if (K) this._make(K).append(this);
  }
  return this;
}
function N2() {
  var _this18 = this;
  for (var _len5 = arguments.length, Z = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    Z[_key5] = arguments[_key5];
  }
  var Y = this.length - 1;
  return G(this, function (J, K) {
    if (!C(J) || !J.parent) return;
    var Q = J.parent.children,
      V = Q.indexOf(J);
    if (V === -1) return;
    var z = typeof Z[0] === "function" ? Z[0].call(J, K, _this18._render(J.children)) : Z,
      B = _this18._makeDomArray(z, K < Y);
    f0(Q, V + 1, 0, B, J.parent);
  });
}
function M2(Z) {
  if (typeof Z === "string") Z = this._make(Z);
  this.remove();
  var Y = [];
  var _iterator9 = _createForOfIteratorHelper(this._makeDomArray(Z)),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var J = _step9.value;
      var K = this.clone().toArray(),
        Q = J.parent;
      if (!Q) continue;
      var V = Q.children,
        z = V.indexOf(J);
      if (z === -1) continue;
      f0(V, z + 1, 0, K, Q), Y.push.apply(Y, _toConsumableArray(K));
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  return this._make(Y);
}
function x2() {
  var _this19 = this;
  for (var _len6 = arguments.length, Z = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    Z[_key6] = arguments[_key6];
  }
  var Y = this.length - 1;
  return G(this, function (J, K) {
    if (!C(J) || !J.parent) return;
    var Q = J.parent.children,
      V = Q.indexOf(J);
    if (V === -1) return;
    var z = typeof Z[0] === "function" ? Z[0].call(J, K, _this19._render(J.children)) : Z,
      B = _this19._makeDomArray(z, K < Y);
    f0(Q, V, 0, B, J.parent);
  });
}
function h2(Z) {
  var _this20 = this;
  var Y = this._make(Z);
  this.remove();
  var J = [];
  return G(Y, function (K) {
    var Q = _this20.clone().toArray(),
      V = K.parent;
    if (!V) return;
    var z = V.children,
      B = z.indexOf(K);
    if (B === -1) return;
    f0(z, B, 0, Q, V), J.push.apply(J, _toConsumableArray(Q));
  }), this._make(J);
}
function C2(Z) {
  var Y = Z ? this.filter(Z) : this;
  return G(Y, function (J) {
    B0(J), J.prev = J.next = J.parent = null;
  }), this;
}
function D2(Z) {
  var _this21 = this;
  return G(this, function (Y, J) {
    var K = Y.parent;
    if (!K) return;
    var Q = K.children,
      V = typeof Z === "function" ? Z.call(Y, J, Y) : Z,
      z = _this21._makeDomArray(V);
    y0(z, null);
    var B = Q.indexOf(Y);
    if (f0(Q, B, 1, z, K), !z.includes(Y)) Y.parent = Y.prev = Y.next = null;
  });
}
function G2() {
  return G(this, function (Z) {
    if (!C(Z)) return;
    var _iterator10 = _createForOfIteratorHelper(Z.children),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var Y = _step10.value;
        Y.next = Y.prev = Y.parent = null;
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    Z.children.length = 0;
  });
}
function $2(Z) {
  var _this22 = this;
  if (Z === void 0) {
    var Y = this[0];
    if (!Y || !C(Y)) return null;
    return this._render(Y.children);
  }
  return G(this, function (Y) {
    if (!C(Y)) return;
    var _iterator11 = _createForOfIteratorHelper(Y.children),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var K = _step11.value;
        K.next = K.prev = K.parent = null;
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    var J = t(Z) ? Z.toArray() : _this22._parse("".concat(Z), _this22.options, !1, Y).children;
    y0(J, Y);
  });
}
function u2() {
  return this._render(this);
}
function E2(Z) {
  var _this23 = this;
  if (Z === void 0) return G0(this);
  if (typeof Z === "function") return G(this, function (Y, J) {
    return _this23._make(Y).text(Z.call(Y, J, G0([Y])));
  });
  return G(this, function (Y) {
    if (!C(Y)) return;
    var _iterator12 = _createForOfIteratorHelper(Y.children),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var K = _step12.value;
        K.next = K.prev = K.parent = null;
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    var J = new W0("".concat(Z));
    y0(J, Y);
  });
}
function I2() {
  var Z = Array.prototype.map.call(this.get(), function (J) {
      return c0(J, !0);
    }),
    Y = new a(Z);
  var _iterator13 = _createForOfIteratorHelper(Z),
    _step13;
  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var J = _step13.value;
      J.parent = Y;
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }
  return this._make(Z);
}
var f5 = {};
V0(f5, {
  css: function css() {
    return S2;
  }
});
function S2(Z, Y) {
  if (Z != null && Y != null || _typeof(Z) === "object" && !Array.isArray(Z)) return G(this, function (J, K) {
    if (O(J)) tZ(J, Z, Y, K);
  });
  if (this.length === 0) return;
  return eZ(this[0], Z);
}
function tZ(Z, Y, J, K) {
  if (typeof Y === "string") {
    var Q = eZ(Z),
      V = typeof J === "function" ? J.call(Z, K, Q[Y]) : J;
    if (V === "") delete Q[Y];else if (V != null) Q[Y] = V;
    Z.attribs.style = k2(Q);
  } else if (_typeof(Y) === "object") {
    var _Q7 = Object.keys(Y);
    for (var _V3 = 0; _V3 < _Q7.length; _V3++) {
      var z = _Q7[_V3];
      tZ(Z, z, Y[z], _V3);
    }
  }
}
function eZ(Z, Y) {
  if (!Z || !O(Z)) return;
  var J = _2(Z.attribs.style);
  if (typeof Y === "string") return J[Y];
  if (Array.isArray(Y)) {
    var K = {};
    var _iterator14 = _createForOfIteratorHelper(Y),
      _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var Q = _step14.value;
        if (J[Q] != null) K[Q] = J[Q];
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
    return K;
  }
  return J;
}
function k2(Z) {
  return Object.keys(Z).reduce(function (Y, J) {
    return "".concat(Y).concat(Y ? " " : "").concat(J, ": ").concat(Z[J], ";");
  }, "");
}
function _2(Z) {
  if (Z = (Z || "").trim(), !Z) return {};
  var Y = {},
    J;
  var _iterator15 = _createForOfIteratorHelper(Z.split(";")),
    _step15;
  try {
    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
      var K = _step15.value;
      var Q = K.indexOf(":");
      if (Q < 1 || Q === K.length - 1) {
        var V = K.trimEnd();
        if (V.length > 0 && J !== void 0) Y[J] += ";".concat(V);
      } else J = K.slice(0, Q).trim(), Y[J] = K.slice(Q + 1).trim();
    }
  } catch (err) {
    _iterator15.e(err);
  } finally {
    _iterator15.f();
  }
  return Y;
}
var b5 = {};
V0(b5, {
  serializeArray: function serializeArray() {
    return m2;
  },
  serialize: function serialize() {
    return T2;
  }
});
var Z7 = "input,select,textarea,keygen",
  A2 = /%20/g,
  Y7 = /\r?\n/g;
function T2() {
  return this.serializeArray().map(function (J) {
    return "".concat(encodeURIComponent(J.name), "=").concat(encodeURIComponent(J.value));
  }).join("&").replace(A2, "+");
}
function m2() {
  var _this24 = this;
  return this.map(function (Z, Y) {
    var J = _this24._make(Y);
    if (O(Y) && Y.name === "form") return J.find(Z7).toArray();
    return J.filter(Z7).toArray();
  }).filter('[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))').map(function (Z, Y) {
    var J;
    var K = _this24._make(Y),
      Q = K.attr("name"),
      V = (J = K.val()) !== null && J !== void 0 ? J : "";
    if (Array.isArray(V)) return V.map(function (z) {
      return {
        name: Q,
        value: z.replace(Y7, "\r\n")
      };
    });
    return {
      name: Q,
      value: V.replace(Y7, "\r\n")
    };
  }).toArray();
}
var g5 = {};
V0(g5, {
  extract: function extract() {
    return c2;
  }
});
function i2(Z) {
  var Y;
  if (typeof Z === "string") return {
    selector: Z,
    value: "textContent"
  };
  return {
    selector: Z.selector,
    value: (Y = Z.value) !== null && Y !== void 0 ? Y : "textContent"
  };
}
function c2(Z) {
  var _this25 = this;
  var Y = {};
  var _loop3 = function _loop3(J) {
    var K = Z[J],
      Q = Array.isArray(K),
      _i4 = i2(Q ? K[0] : K),
      V = _i4.selector,
      z = _i4.value,
      B = typeof z === "function" ? z : typeof z === "string" ? function (F) {
        return _this25._make(F).prop(z);
      } : function (F) {
        return _this25._make(F).extract(z);
      };
    if (Q) Y[J] = _this25._findBySelector(V, Number.POSITIVE_INFINITY).map(function (F, q) {
      return B(q, J, Y);
    }).get();else {
      var F = _this25._findBySelector(V, 1);
      Y[J] = F.length > 0 ? B(F[0], J, Y) : void 0;
    }
  };
  for (var J in Z) {
    _loop3(J);
  }
  return Y;
}
var I0 = /*#__PURE__*/_createClass(function I0(Z, Y, J) {
  _classCallCheck(this, I0);
  if (this.length = 0, this.options = J, this._root = Y, Z) {
    for (var K = 0; K < Z.length; K++) this[K] = Z[K];
    this.length = Z.length;
  }
});
I0.prototype.cheerio = "[cheerio object]";
I0.prototype.splice = Array.prototype.splice;
I0.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
Object.assign(I0.prototype, o4, O5, y5, f5, b5, g5);
function J7(Z, Y) {
  return function J(K, Q) {
    var V = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    if (K == null) throw new Error("cheerio.load() expects a string");
    var z = K1(Q),
      B = Z(K, z, V, null);
    var F = /*#__PURE__*/function (_I3) {
      _inherits(F, _I3);
      var _super10 = _createSuper(F);
      function F() {
        _classCallCheck(this, F);
        return _super10.apply(this, arguments);
      }
      _createClass(F, [{
        key: "_make",
        value: function _make(R, f) {
          var y = q(R, f);
          return y.prevObject = this, y;
        }
      }, {
        key: "_parse",
        value: function _parse(R, f, y, N) {
          return Z(R, f, y, N);
        }
      }, {
        key: "_render",
        value: function _render(R) {
          return Y(R, this.options);
        }
      }]);
      return F;
    }(I0);
    function q(R, f) {
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : B;
      var N = arguments.length > 3 ? arguments[3] : undefined;
      if (R && t(R)) return R;
      var M = K1(N, z),
        I = typeof y === "string" ? [Z(y, M, !1, null)] : "length" in y ? y : [y],
        Y0 = t(I) ? I : new F(I, null, M);
      if (Y0._root = Y0, !R) return new F(void 0, Y0, M);
      var k0 = typeof R === "string" && X1(R) ? Z(R, M, !1, null).children : d2(R) ? [R] : Array.isArray(R) ? R : void 0,
        _0 = new F(k0, Y0, M);
      if (k0) return _0;
      if (typeof R !== "string") throw new TypeError("Unexpected type of selector");
      var Z1 = R,
        Y1 = f ? typeof f === "string" ? X1(f) ? new F([Z(f, M, !1, null)], Y0, M) : (Z1 = "".concat(f, " ").concat(Z1), Y0) : t(f) ? f : new F(Array.isArray(f) ? f : [f], Y0, M) : Y0;
      if (!Y1) return _0;
      return Y1.find(Z1);
    }
    return Object.assign(q, A4, {
      load: J,
      _root: B,
      _options: z,
      fn: F.prototype,
      prototype: F.prototype
    }), q;
  };
}
function d2(Z) {
  return !!Z.name || Z.type === p.Root || Z.type === p.Text || Z.type === p.Comment;
}
var r2 = new Set([65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111]),
  $ = "�",
  H;
(function (Z) {
  Z[Z.EOF = -1] = "EOF", Z[Z.NULL = 0] = "NULL", Z[Z.TABULATION = 9] = "TABULATION", Z[Z.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", Z[Z.LINE_FEED = 10] = "LINE_FEED", Z[Z.FORM_FEED = 12] = "FORM_FEED", Z[Z.SPACE = 32] = "SPACE", Z[Z.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", Z[Z.QUOTATION_MARK = 34] = "QUOTATION_MARK", Z[Z.AMPERSAND = 38] = "AMPERSAND", Z[Z.APOSTROPHE = 39] = "APOSTROPHE", Z[Z.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", Z[Z.SOLIDUS = 47] = "SOLIDUS", Z[Z.DIGIT_0 = 48] = "DIGIT_0", Z[Z.DIGIT_9 = 57] = "DIGIT_9", Z[Z.SEMICOLON = 59] = "SEMICOLON", Z[Z.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", Z[Z.EQUALS_SIGN = 61] = "EQUALS_SIGN", Z[Z.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", Z[Z.QUESTION_MARK = 63] = "QUESTION_MARK", Z[Z.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", Z[Z.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", Z[Z.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", Z[Z.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", Z[Z.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", Z[Z.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(H || (H = {}));
var c = {
  DASH_DASH: "--",
  CDATA_START: "[CDATA[",
  DOCTYPE: "doctype",
  SCRIPT: "script",
  PUBLIC: "public",
  SYSTEM: "system"
};
function J4(Z) {
  return Z >= 55296 && Z <= 57343;
}
function K7(Z) {
  return Z >= 56320 && Z <= 57343;
}
function X7(Z, Y) {
  return (Z - 55296) * 1024 + 9216 + Y;
}
function K4(Z) {
  return Z !== 32 && Z !== 10 && Z !== 13 && Z !== 9 && Z !== 12 && Z >= 1 && Z <= 31 || Z >= 127 && Z <= 159;
}
function X4(Z) {
  return Z >= 64976 && Z <= 65007 || r2.has(Z);
}
var j;
(function (Z) {
  Z.controlCharacterInInputStream = "control-character-in-input-stream", Z.noncharacterInInputStream = "noncharacter-in-input-stream", Z.surrogateInInputStream = "surrogate-in-input-stream", Z.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", Z.endTagWithAttributes = "end-tag-with-attributes", Z.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", Z.unexpectedSolidusInTag = "unexpected-solidus-in-tag", Z.unexpectedNullCharacter = "unexpected-null-character", Z.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", Z.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", Z.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", Z.missingEndTagName = "missing-end-tag-name", Z.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", Z.unknownNamedCharacterReference = "unknown-named-character-reference", Z.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", Z.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", Z.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", Z.eofBeforeTagName = "eof-before-tag-name", Z.eofInTag = "eof-in-tag", Z.missingAttributeValue = "missing-attribute-value", Z.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", Z.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", Z.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", Z.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", Z.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", Z.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", Z.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", Z.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", Z.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", Z.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", Z.cdataInHtmlContent = "cdata-in-html-content", Z.incorrectlyOpenedComment = "incorrectly-opened-comment", Z.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", Z.eofInDoctype = "eof-in-doctype", Z.nestedComment = "nested-comment", Z.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", Z.eofInComment = "eof-in-comment", Z.incorrectlyClosedComment = "incorrectly-closed-comment", Z.eofInCdata = "eof-in-cdata", Z.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", Z.nullCharacterReference = "null-character-reference", Z.surrogateCharacterReference = "surrogate-character-reference", Z.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", Z.controlCharacterReference = "control-character-reference", Z.noncharacterCharacterReference = "noncharacter-character-reference", Z.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", Z.missingDoctypeName = "missing-doctype-name", Z.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", Z.duplicateAttribute = "duplicate-attribute", Z.nonConformingDoctype = "non-conforming-doctype", Z.missingDoctype = "missing-doctype", Z.misplacedDoctype = "misplaced-doctype", Z.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", Z.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", Z.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", Z.openElementsLeftAfterEof = "open-elements-left-after-eof", Z.abandonedHeadElementChild = "abandoned-head-element-child", Z.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", Z.nestedNoscriptInHead = "nested-noscript-in-head", Z.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(j || (j = {}));
var s2 = 65536;
var N5 = /*#__PURE__*/function () {
  function N5(Z) {
    _classCallCheck(this, N5);
    this.handler = Z, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = s2, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
  }
  _createClass(N5, [{
    key: "col",
    get: function get() {
      return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
    }
  }, {
    key: "offset",
    get: function get() {
      return this.droppedBufferSize + this.pos;
    }
  }, {
    key: "getError",
    value: function getError(Z, Y) {
      var J = this.line,
        K = this.col,
        Q = this.offset,
        V = K + Y,
        z = Q + Y;
      return {
        code: Z,
        startLine: J,
        endLine: J,
        startCol: V,
        endCol: V,
        startOffset: z,
        endOffset: z
      };
    }
  }, {
    key: "_err",
    value: function _err(Z) {
      if (this.handler.onParseError && this.lastErrOffset !== this.offset) this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(Z, 0));
    }
  }, {
    key: "_addGap",
    value: function _addGap() {
      this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
    }
  }, {
    key: "_processSurrogate",
    value: function _processSurrogate(Z) {
      if (this.pos !== this.html.length - 1) {
        var Y = this.html.charCodeAt(this.pos + 1);
        if (K7(Y)) return this.pos++, this._addGap(), X7(Z, Y);
      } else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, H.EOF;
      return this._err(j.surrogateInInputStream), Z;
    }
  }, {
    key: "willDropParsedChunk",
    value: function willDropParsedChunk() {
      return this.pos > this.bufferWaterline;
    }
  }, {
    key: "dropParsedChunk",
    value: function dropParsedChunk() {
      if (this.willDropParsedChunk()) this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0;
    }
  }, {
    key: "write",
    value: function write(Z, Y) {
      if (this.html.length > 0) this.html += Z;else this.html = Z;
      this.endOfChunkHit = !1, this.lastChunkWritten = Y;
    }
  }, {
    key: "insertHtmlAtCurrentPos",
    value: function insertHtmlAtCurrentPos(Z) {
      this.html = this.html.substring(0, this.pos + 1) + Z + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
    }
  }, {
    key: "startsWith",
    value: function startsWith(Z, Y) {
      if (this.pos + Z.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
      if (Y) return this.html.startsWith(Z, this.pos);
      for (var J = 0; J < Z.length; J++) if ((this.html.charCodeAt(this.pos + J) | 32) !== Z.charCodeAt(J)) return !1;
      return !0;
    }
  }, {
    key: "peek",
    value: function peek(Z) {
      var Y = this.pos + Z;
      if (Y >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, H.EOF;
      var J = this.html.charCodeAt(Y);
      return J === H.CARRIAGE_RETURN ? H.LINE_FEED : J;
    }
  }, {
    key: "advance",
    value: function advance() {
      if (this.pos++, this.isEol) this.isEol = !1, this.line++, this.lineStartPos = this.pos;
      if (this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, H.EOF;
      var Z = this.html.charCodeAt(this.pos);
      if (Z === H.CARRIAGE_RETURN) return this.isEol = !0, this.skipNextNewLine = !0, H.LINE_FEED;
      if (Z === H.LINE_FEED) {
        if (this.isEol = !0, this.skipNextNewLine) return this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance();
      }
      if (this.skipNextNewLine = !1, J4(Z)) Z = this._processSurrogate(Z);
      if (!(this.handler.onParseError === null || Z > 31 && Z < 127 || Z === H.LINE_FEED || Z === H.CARRIAGE_RETURN || Z > 159 && Z < 64976)) this._checkForProblematicCharacters(Z);
      return Z;
    }
  }, {
    key: "_checkForProblematicCharacters",
    value: function _checkForProblematicCharacters(Z) {
      if (K4(Z)) this._err(j.controlCharacterInInputStream);else if (X4(Z)) this._err(j.noncharacterInInputStream);
    }
  }, {
    key: "retreat",
    value: function retreat(Z) {
      this.pos -= Z;
      while (this.pos < this.lastGapPos) this.lastGapPos = this.gapStack.pop(), this.pos--;
      this.isEol = !1;
    }
  }]);
  return N5;
}();
var h;
(function (Z) {
  Z[Z.CHARACTER = 0] = "CHARACTER", Z[Z.NULL_CHARACTER = 1] = "NULL_CHARACTER", Z[Z.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", Z[Z.START_TAG = 3] = "START_TAG", Z[Z.END_TAG = 4] = "END_TAG", Z[Z.COMMENT = 5] = "COMMENT", Z[Z.DOCTYPE = 6] = "DOCTYPE", Z[Z.EOF = 7] = "EOF", Z[Z.HIBERNATION = 8] = "HIBERNATION";
})(h || (h = {}));
function Q4(Z, Y) {
  for (var J = Z.attrs.length - 1; J >= 0; J--) if (Z.attrs[J].name === Y) return Z.attrs[J].value;
  return null;
}
var M5 = new Uint16Array("\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\uD835\uDD04rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\uD835\uDD38plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\uD835\uDC9Cign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\uD835\uDD05pf;\uC000\uD835\uDD39eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\uD835\uDC9Ep\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\uD835\uDD07\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\uD835\uDD3B\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\uD835\uDC9Frok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\uD835\uDD08rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\uD835\uDD3Csilon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\uD835\uDD09lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\uD835\uDD3DAll;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\uD835\uDD0A;\u62D9pf;\uC000\uD835\uDD3Eeater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\uD835\uDCA2;\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\uD835\uDD40a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\uD835\uDD0Dpf;\uC000\uD835\uDD41\u01E3\u07C7\0\u07CCr;\uC000\uD835\uDCA5rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\uD835\uDD0Epf;\uC000\uD835\uDD42cr;\uC000\uD835\uDCA6\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\uD835\uDD0F\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\uD835\uDD43er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\uD835\uDD10nusPlus;\u6213pf;\uC000\uD835\uDD44c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\uD835\uDD11\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\uD835\uDCA9ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\uD835\uDD12rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\uD835\uDD46enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\uD835\uDCAAash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\uD835\uDD13i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\uD835\uDCAB;\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B\"\u4022r;\uC000\uD835\uDD14pf;\u611Acr;\uC000\uD835\uDCAC\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\uD835\uDD16ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\uD835\uDD4A\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\uD835\uDCAEar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\uD835\uDD17\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\uD835\uDD4BipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\uD835\uDCAFrok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\uD835\uDD18rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\uD835\uDD4C\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\uD835\uDCB0ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\uD835\uDD19pf;\uC000\uD835\uDD4Dcr;\uC000\uD835\uDCB1dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\uD835\uDD1Apf;\uC000\uD835\uDD4Ecr;\uC000\uD835\uDCB2\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\uD835\uDD1B;\u439Epf;\uC000\uD835\uDD4Fcr;\uC000\uD835\uDCB3\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\uD835\uDD1Cpf;\uC000\uD835\uDD50cr;\uC000\uD835\uDCB4ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\uD835\uDCB5\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\uD835\uDD1Erave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\uD835\uDD52\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\uD835\uDCB6;\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\uD835\uDD1Fg\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\uD835\uDD53\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\uD835\uDCB7mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\uD835\uDD20\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\uD835\uDD54o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\uD835\uDCB8\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\uD835\uDD21ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\uD835\uDD55\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\uD835\uDCB9;\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\uD835\uDD22\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\uD835\uDD56\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\uD835\uDD23lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\uD835\uDD57\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\uD835\uDCBB\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\uD835\uDD24\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\uD835\uDD58\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\uD835\uDD25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\uD835\uDD59bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\uD835\uDCBDas\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\uD835\uDD26rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\uD835\uDD5Aa;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\uD835\uDCBEn\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\uD835\uDD27ath;\u4237pf;\uC000\uD835\uDD5B\u01E3\u23EC\0\u23F1r;\uC000\uD835\uDCBFrcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\uD835\uDD28reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\uD835\uDD5Ccr;\uC000\uD835\uDCC0\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\uD835\uDD29\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\uD835\uDD5Dus;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\uD835\uDCC1m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\uD835\uDD2Ao;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\uD835\uDD5E\u0100ct\u28F8\u28FDr;\uC000\uD835\uDCC2pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB \u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\uD835\uDD2B\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\uD835\uDD5F\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\uD835\uDCC3ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\uD835\uDD2C\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\uD835\uDD60\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\uD835\uDD2D\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\uD835\uDD61nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\uD835\uDCC5;\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\uD835\uDD2Epf;\uC000\uD835\uDD62rime;\u6057cr;\uC000\uD835\uDCC6\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\uD835\uDD2F\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\uD835\uDD63us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\uD835\uDCC7\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\uD835\uDD30\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\uD835\uDD64a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\uD835\uDCC8tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\uD835\uDD31\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\uD835\uDD65rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\uD835\uDCC9;\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\uD835\uDD32rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\uD835\uDD66\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\uD835\uDCCA\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\uD835\uDD33tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\uD835\uDD67ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\uD835\uDCCB\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\uD835\uDD34pf;\uC000\uD835\uDD68\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\uD835\uDCCC\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\uD835\uDD35\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\uD835\uDD69im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\uD835\uDCCD\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\uD835\uDD36cy;\u4457pf;\uC000\uD835\uDD6Acr;\uC000\uD835\uDCCE\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\uD835\uDD37cy;\u4436grarr;\u61DDpf;\uC000\uD835\uDD6Bcr;\uC000\uD835\uDCCF\u0100jn\u3B85\u3B87;\u600Dj;\u600C".split("").map(function (Z) {
  return Z.charCodeAt(0);
}));
var x5,
  a2 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]),
  n2 = (x5 = String.fromCodePoint) !== null && x5 !== void 0 ? x5 : function (Z) {
    var Y = "";
    if (Z > 65535) Z -= 65536, Y += String.fromCharCode(Z >>> 10 & 1023 | 55296), Z = 56320 | Z & 1023;
    return Y += String.fromCharCode(Z), Y;
  };
function Q7(Z) {
  var Y;
  if (Z >= 55296 && Z <= 57343 || Z > 1114111) return 65533;
  return (Y = a2.get(Z)) !== null && Y !== void 0 ? Y : Z;
}
var A;
(function (Z) {
  Z[Z.NUM = 35] = "NUM", Z[Z.SEMI = 59] = "SEMI", Z[Z.EQUALS = 61] = "EQUALS", Z[Z.ZERO = 48] = "ZERO", Z[Z.NINE = 57] = "NINE", Z[Z.LOWER_A = 97] = "LOWER_A", Z[Z.LOWER_F = 102] = "LOWER_F", Z[Z.LOWER_X = 120] = "LOWER_X", Z[Z.LOWER_Z = 122] = "LOWER_Z", Z[Z.UPPER_A = 65] = "UPPER_A", Z[Z.UPPER_F = 70] = "UPPER_F", Z[Z.UPPER_Z = 90] = "UPPER_Z";
})(A || (A = {}));
var o2 = 32,
  b0;
(function (Z) {
  Z[Z.VALUE_LENGTH = 49152] = "VALUE_LENGTH", Z[Z.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", Z[Z.JUMP_TABLE = 127] = "JUMP_TABLE";
})(b0 || (b0 = {}));
function h5(Z) {
  return Z >= A.ZERO && Z <= A.NINE;
}
function t2(Z) {
  return Z >= A.UPPER_A && Z <= A.UPPER_F || Z >= A.LOWER_A && Z <= A.LOWER_F;
}
function e2(Z) {
  return Z >= A.UPPER_A && Z <= A.UPPER_Z || Z >= A.LOWER_A && Z <= A.LOWER_Z || h5(Z);
}
function Z9(Z) {
  return Z === A.EQUALS || e2(Z);
}
var _;
(function (Z) {
  Z[Z.EntityStart = 0] = "EntityStart", Z[Z.NumericStart = 1] = "NumericStart", Z[Z.NumericDecimal = 2] = "NumericDecimal", Z[Z.NumericHex = 3] = "NumericHex", Z[Z.NamedEntity = 4] = "NamedEntity";
})(_ || (_ = {}));
var z0;
(function (Z) {
  Z[Z.Legacy = 0] = "Legacy", Z[Z.Strict = 1] = "Strict", Z[Z.Attribute = 2] = "Attribute";
})(z0 || (z0 = {}));
var C5 = /*#__PURE__*/function () {
  function C5(Z, Y, J) {
    _classCallCheck(this, C5);
    this.decodeTree = Z, this.emitCodePoint = Y, this.errors = J, this.state = _.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = z0.Strict;
  }
  _createClass(C5, [{
    key: "startEntity",
    value: function startEntity(Z) {
      this.decodeMode = Z, this.state = _.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
    }
  }, {
    key: "write",
    value: function write(Z, Y) {
      switch (this.state) {
        case _.EntityStart:
          {
            if (Z.charCodeAt(Y) === A.NUM) return this.state = _.NumericStart, this.consumed += 1, this.stateNumericStart(Z, Y + 1);
            return this.state = _.NamedEntity, this.stateNamedEntity(Z, Y);
          }
        case _.NumericStart:
          return this.stateNumericStart(Z, Y);
        case _.NumericDecimal:
          return this.stateNumericDecimal(Z, Y);
        case _.NumericHex:
          return this.stateNumericHex(Z, Y);
        case _.NamedEntity:
          return this.stateNamedEntity(Z, Y);
      }
    }
  }, {
    key: "stateNumericStart",
    value: function stateNumericStart(Z, Y) {
      if (Y >= Z.length) return -1;
      if ((Z.charCodeAt(Y) | o2) === A.LOWER_X) return this.state = _.NumericHex, this.consumed += 1, this.stateNumericHex(Z, Y + 1);
      return this.state = _.NumericDecimal, this.stateNumericDecimal(Z, Y);
    }
  }, {
    key: "addToNumericResult",
    value: function addToNumericResult(Z, Y, J, K) {
      if (Y !== J) {
        var Q = J - Y;
        this.result = this.result * Math.pow(K, Q) + Number.parseInt(Z.substr(Y, Q), K), this.consumed += Q;
      }
    }
  }, {
    key: "stateNumericHex",
    value: function stateNumericHex(Z, Y) {
      var J = Y;
      while (Y < Z.length) {
        var K = Z.charCodeAt(Y);
        if (h5(K) || t2(K)) Y += 1;else return this.addToNumericResult(Z, J, Y, 16), this.emitNumericEntity(K, 3);
      }
      return this.addToNumericResult(Z, J, Y, 16), -1;
    }
  }, {
    key: "stateNumericDecimal",
    value: function stateNumericDecimal(Z, Y) {
      var J = Y;
      while (Y < Z.length) {
        var K = Z.charCodeAt(Y);
        if (h5(K)) Y += 1;else return this.addToNumericResult(Z, J, Y, 10), this.emitNumericEntity(K, 2);
      }
      return this.addToNumericResult(Z, J, Y, 10), -1;
    }
  }, {
    key: "emitNumericEntity",
    value: function emitNumericEntity(Z, Y) {
      var J;
      if (this.consumed <= Y) return (J = this.errors) === null || J === void 0 || J.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      if (Z === A.SEMI) this.consumed += 1;else if (this.decodeMode === z0.Strict) return 0;
      if (this.emitCodePoint(Q7(this.result), this.consumed), this.errors) {
        if (Z !== A.SEMI) this.errors.missingSemicolonAfterCharacterReference();
        this.errors.validateNumericCharacterReference(this.result);
      }
      return this.consumed;
    }
  }, {
    key: "stateNamedEntity",
    value: function stateNamedEntity(Z, Y) {
      var J = this.decodeTree,
        K = J[this.treeIndex],
        Q = (K & b0.VALUE_LENGTH) >> 14;
      for (; Y < Z.length; Y++, this.excess++) {
        var V = Z.charCodeAt(Y);
        if (this.treeIndex = Y9(J, K, this.treeIndex + Math.max(1, Q), V), this.treeIndex < 0) return this.result === 0 || this.decodeMode === z0.Attribute && (Q === 0 || Z9(V)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (K = J[this.treeIndex], Q = (K & b0.VALUE_LENGTH) >> 14, Q !== 0) {
          if (V === A.SEMI) return this.emitNamedEntityData(this.treeIndex, Q, this.consumed + this.excess);
          if (this.decodeMode !== z0.Strict) this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0;
        }
      }
      return -1;
    }
  }, {
    key: "emitNotTerminatedNamedEntity",
    value: function emitNotTerminatedNamedEntity() {
      var Z;
      var Y = this.result,
        J = this.decodeTree,
        K = (J[Y] & b0.VALUE_LENGTH) >> 14;
      return this.emitNamedEntityData(Y, K, this.consumed), (Z = this.errors) === null || Z === void 0 || Z.missingSemicolonAfterCharacterReference(), this.consumed;
    }
  }, {
    key: "emitNamedEntityData",
    value: function emitNamedEntityData(Z, Y, J) {
      var K = this.decodeTree;
      if (this.emitCodePoint(Y === 1 ? K[Z] & ~b0.VALUE_LENGTH : K[Z + 1], J), Y === 3) this.emitCodePoint(K[Z + 2], J);
      return J;
    }
  }, {
    key: "end",
    value: function end() {
      var Z;
      switch (this.state) {
        case _.NamedEntity:
          return this.result !== 0 && (this.decodeMode !== z0.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case _.NumericDecimal:
          return this.emitNumericEntity(0, 2);
        case _.NumericHex:
          return this.emitNumericEntity(0, 3);
        case _.NumericStart:
          return (Z = this.errors) === null || Z === void 0 || Z.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case _.EntityStart:
          return 0;
      }
    }
  }]);
  return C5;
}();
function Y9(Z, Y, J, K) {
  var Q = (Y & b0.BRANCH_LENGTH) >> 7,
    V = Y & b0.JUMP_TABLE;
  if (Q === 0) return V !== 0 && K === V ? J : -1;
  if (V) {
    var F = K - V;
    return F < 0 || F >= Q ? -1 : Z[J + F] - 1;
  }
  var z = J,
    B = z + Q - 1;
  while (z <= B) {
    var _F3 = z + B >>> 1,
      q = Z[_F3];
    if (q < K) z = _F3 + 1;else if (q > K) B = _F3 - 1;else return Z[_F3 + Q];
  }
  return -1;
}
var V4 = {};
V0(V4, {
  hasUnescapedText: function hasUnescapedText() {
    return G5;
  },
  getTagID: function getTagID() {
    return g0;
  },
  TAG_NAMES: function TAG_NAMES() {
    return w;
  },
  TAG_ID: function TAG_ID() {
    return X;
  },
  SPECIAL_ELEMENTS: function SPECIAL_ELEMENTS() {
    return D5;
  },
  NUMBERED_HEADERS: function NUMBERED_HEADERS() {
    return t0;
  },
  NS: function NS() {
    return L;
  },
  DOCUMENT_MODE: function DOCUMENT_MODE() {
    return T;
  },
  ATTRS: function ATTRS() {
    return H0;
  }
});
var L;
(function (Z) {
  Z.HTML = "http://www.w3.org/1999/xhtml", Z.MATHML = "http://www.w3.org/1998/Math/MathML", Z.SVG = "http://www.w3.org/2000/svg", Z.XLINK = "http://www.w3.org/1999/xlink", Z.XML = "http://www.w3.org/XML/1998/namespace", Z.XMLNS = "http://www.w3.org/2000/xmlns/";
})(L || (L = {}));
var H0;
(function (Z) {
  Z.TYPE = "type", Z.ACTION = "action", Z.ENCODING = "encoding", Z.PROMPT = "prompt", Z.NAME = "name", Z.COLOR = "color", Z.FACE = "face", Z.SIZE = "size";
})(H0 || (H0 = {}));
var T;
(function (Z) {
  Z.NO_QUIRKS = "no-quirks", Z.QUIRKS = "quirks", Z.LIMITED_QUIRKS = "limited-quirks";
})(T || (T = {}));
var w;
(function (Z) {
  Z.A = "a", Z.ADDRESS = "address", Z.ANNOTATION_XML = "annotation-xml", Z.APPLET = "applet", Z.AREA = "area", Z.ARTICLE = "article", Z.ASIDE = "aside", Z.B = "b", Z.BASE = "base", Z.BASEFONT = "basefont", Z.BGSOUND = "bgsound", Z.BIG = "big", Z.BLOCKQUOTE = "blockquote", Z.BODY = "body", Z.BR = "br", Z.BUTTON = "button", Z.CAPTION = "caption", Z.CENTER = "center", Z.CODE = "code", Z.COL = "col", Z.COLGROUP = "colgroup", Z.DD = "dd", Z.DESC = "desc", Z.DETAILS = "details", Z.DIALOG = "dialog", Z.DIR = "dir", Z.DIV = "div", Z.DL = "dl", Z.DT = "dt", Z.EM = "em", Z.EMBED = "embed", Z.FIELDSET = "fieldset", Z.FIGCAPTION = "figcaption", Z.FIGURE = "figure", Z.FONT = "font", Z.FOOTER = "footer", Z.FOREIGN_OBJECT = "foreignObject", Z.FORM = "form", Z.FRAME = "frame", Z.FRAMESET = "frameset", Z.H1 = "h1", Z.H2 = "h2", Z.H3 = "h3", Z.H4 = "h4", Z.H5 = "h5", Z.H6 = "h6", Z.HEAD = "head", Z.HEADER = "header", Z.HGROUP = "hgroup", Z.HR = "hr", Z.HTML = "html", Z.I = "i", Z.IMG = "img", Z.IMAGE = "image", Z.INPUT = "input", Z.IFRAME = "iframe", Z.KEYGEN = "keygen", Z.LABEL = "label", Z.LI = "li", Z.LINK = "link", Z.LISTING = "listing", Z.MAIN = "main", Z.MALIGNMARK = "malignmark", Z.MARQUEE = "marquee", Z.MATH = "math", Z.MENU = "menu", Z.META = "meta", Z.MGLYPH = "mglyph", Z.MI = "mi", Z.MO = "mo", Z.MN = "mn", Z.MS = "ms", Z.MTEXT = "mtext", Z.NAV = "nav", Z.NOBR = "nobr", Z.NOFRAMES = "noframes", Z.NOEMBED = "noembed", Z.NOSCRIPT = "noscript", Z.OBJECT = "object", Z.OL = "ol", Z.OPTGROUP = "optgroup", Z.OPTION = "option", Z.P = "p", Z.PARAM = "param", Z.PLAINTEXT = "plaintext", Z.PRE = "pre", Z.RB = "rb", Z.RP = "rp", Z.RT = "rt", Z.RTC = "rtc", Z.RUBY = "ruby", Z.S = "s", Z.SCRIPT = "script", Z.SEARCH = "search", Z.SECTION = "section", Z.SELECT = "select", Z.SOURCE = "source", Z.SMALL = "small", Z.SPAN = "span", Z.STRIKE = "strike", Z.STRONG = "strong", Z.STYLE = "style", Z.SUB = "sub", Z.SUMMARY = "summary", Z.SUP = "sup", Z.TABLE = "table", Z.TBODY = "tbody", Z.TEMPLATE = "template", Z.TEXTAREA = "textarea", Z.TFOOT = "tfoot", Z.TD = "td", Z.TH = "th", Z.THEAD = "thead", Z.TITLE = "title", Z.TR = "tr", Z.TRACK = "track", Z.TT = "tt", Z.U = "u", Z.UL = "ul", Z.SVG = "svg", Z.VAR = "var", Z.WBR = "wbr", Z.XMP = "xmp";
})(w || (w = {}));
var X;
(function (Z) {
  Z[Z.UNKNOWN = 0] = "UNKNOWN", Z[Z.A = 1] = "A", Z[Z.ADDRESS = 2] = "ADDRESS", Z[Z.ANNOTATION_XML = 3] = "ANNOTATION_XML", Z[Z.APPLET = 4] = "APPLET", Z[Z.AREA = 5] = "AREA", Z[Z.ARTICLE = 6] = "ARTICLE", Z[Z.ASIDE = 7] = "ASIDE", Z[Z.B = 8] = "B", Z[Z.BASE = 9] = "BASE", Z[Z.BASEFONT = 10] = "BASEFONT", Z[Z.BGSOUND = 11] = "BGSOUND", Z[Z.BIG = 12] = "BIG", Z[Z.BLOCKQUOTE = 13] = "BLOCKQUOTE", Z[Z.BODY = 14] = "BODY", Z[Z.BR = 15] = "BR", Z[Z.BUTTON = 16] = "BUTTON", Z[Z.CAPTION = 17] = "CAPTION", Z[Z.CENTER = 18] = "CENTER", Z[Z.CODE = 19] = "CODE", Z[Z.COL = 20] = "COL", Z[Z.COLGROUP = 21] = "COLGROUP", Z[Z.DD = 22] = "DD", Z[Z.DESC = 23] = "DESC", Z[Z.DETAILS = 24] = "DETAILS", Z[Z.DIALOG = 25] = "DIALOG", Z[Z.DIR = 26] = "DIR", Z[Z.DIV = 27] = "DIV", Z[Z.DL = 28] = "DL", Z[Z.DT = 29] = "DT", Z[Z.EM = 30] = "EM", Z[Z.EMBED = 31] = "EMBED", Z[Z.FIELDSET = 32] = "FIELDSET", Z[Z.FIGCAPTION = 33] = "FIGCAPTION", Z[Z.FIGURE = 34] = "FIGURE", Z[Z.FONT = 35] = "FONT", Z[Z.FOOTER = 36] = "FOOTER", Z[Z.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", Z[Z.FORM = 38] = "FORM", Z[Z.FRAME = 39] = "FRAME", Z[Z.FRAMESET = 40] = "FRAMESET", Z[Z.H1 = 41] = "H1", Z[Z.H2 = 42] = "H2", Z[Z.H3 = 43] = "H3", Z[Z.H4 = 44] = "H4", Z[Z.H5 = 45] = "H5", Z[Z.H6 = 46] = "H6", Z[Z.HEAD = 47] = "HEAD", Z[Z.HEADER = 48] = "HEADER", Z[Z.HGROUP = 49] = "HGROUP", Z[Z.HR = 50] = "HR", Z[Z.HTML = 51] = "HTML", Z[Z.I = 52] = "I", Z[Z.IMG = 53] = "IMG", Z[Z.IMAGE = 54] = "IMAGE", Z[Z.INPUT = 55] = "INPUT", Z[Z.IFRAME = 56] = "IFRAME", Z[Z.KEYGEN = 57] = "KEYGEN", Z[Z.LABEL = 58] = "LABEL", Z[Z.LI = 59] = "LI", Z[Z.LINK = 60] = "LINK", Z[Z.LISTING = 61] = "LISTING", Z[Z.MAIN = 62] = "MAIN", Z[Z.MALIGNMARK = 63] = "MALIGNMARK", Z[Z.MARQUEE = 64] = "MARQUEE", Z[Z.MATH = 65] = "MATH", Z[Z.MENU = 66] = "MENU", Z[Z.META = 67] = "META", Z[Z.MGLYPH = 68] = "MGLYPH", Z[Z.MI = 69] = "MI", Z[Z.MO = 70] = "MO", Z[Z.MN = 71] = "MN", Z[Z.MS = 72] = "MS", Z[Z.MTEXT = 73] = "MTEXT", Z[Z.NAV = 74] = "NAV", Z[Z.NOBR = 75] = "NOBR", Z[Z.NOFRAMES = 76] = "NOFRAMES", Z[Z.NOEMBED = 77] = "NOEMBED", Z[Z.NOSCRIPT = 78] = "NOSCRIPT", Z[Z.OBJECT = 79] = "OBJECT", Z[Z.OL = 80] = "OL", Z[Z.OPTGROUP = 81] = "OPTGROUP", Z[Z.OPTION = 82] = "OPTION", Z[Z.P = 83] = "P", Z[Z.PARAM = 84] = "PARAM", Z[Z.PLAINTEXT = 85] = "PLAINTEXT", Z[Z.PRE = 86] = "PRE", Z[Z.RB = 87] = "RB", Z[Z.RP = 88] = "RP", Z[Z.RT = 89] = "RT", Z[Z.RTC = 90] = "RTC", Z[Z.RUBY = 91] = "RUBY", Z[Z.S = 92] = "S", Z[Z.SCRIPT = 93] = "SCRIPT", Z[Z.SEARCH = 94] = "SEARCH", Z[Z.SECTION = 95] = "SECTION", Z[Z.SELECT = 96] = "SELECT", Z[Z.SOURCE = 97] = "SOURCE", Z[Z.SMALL = 98] = "SMALL", Z[Z.SPAN = 99] = "SPAN", Z[Z.STRIKE = 100] = "STRIKE", Z[Z.STRONG = 101] = "STRONG", Z[Z.STYLE = 102] = "STYLE", Z[Z.SUB = 103] = "SUB", Z[Z.SUMMARY = 104] = "SUMMARY", Z[Z.SUP = 105] = "SUP", Z[Z.TABLE = 106] = "TABLE", Z[Z.TBODY = 107] = "TBODY", Z[Z.TEMPLATE = 108] = "TEMPLATE", Z[Z.TEXTAREA = 109] = "TEXTAREA", Z[Z.TFOOT = 110] = "TFOOT", Z[Z.TD = 111] = "TD", Z[Z.TH = 112] = "TH", Z[Z.THEAD = 113] = "THEAD", Z[Z.TITLE = 114] = "TITLE", Z[Z.TR = 115] = "TR", Z[Z.TRACK = 116] = "TRACK", Z[Z.TT = 117] = "TT", Z[Z.U = 118] = "U", Z[Z.UL = 119] = "UL", Z[Z.SVG = 120] = "SVG", Z[Z.VAR = 121] = "VAR", Z[Z.WBR = 122] = "WBR", Z[Z.XMP = 123] = "XMP";
})(X || (X = {}));
var J9 = new Map([[w.A, X.A], [w.ADDRESS, X.ADDRESS], [w.ANNOTATION_XML, X.ANNOTATION_XML], [w.APPLET, X.APPLET], [w.AREA, X.AREA], [w.ARTICLE, X.ARTICLE], [w.ASIDE, X.ASIDE], [w.B, X.B], [w.BASE, X.BASE], [w.BASEFONT, X.BASEFONT], [w.BGSOUND, X.BGSOUND], [w.BIG, X.BIG], [w.BLOCKQUOTE, X.BLOCKQUOTE], [w.BODY, X.BODY], [w.BR, X.BR], [w.BUTTON, X.BUTTON], [w.CAPTION, X.CAPTION], [w.CENTER, X.CENTER], [w.CODE, X.CODE], [w.COL, X.COL], [w.COLGROUP, X.COLGROUP], [w.DD, X.DD], [w.DESC, X.DESC], [w.DETAILS, X.DETAILS], [w.DIALOG, X.DIALOG], [w.DIR, X.DIR], [w.DIV, X.DIV], [w.DL, X.DL], [w.DT, X.DT], [w.EM, X.EM], [w.EMBED, X.EMBED], [w.FIELDSET, X.FIELDSET], [w.FIGCAPTION, X.FIGCAPTION], [w.FIGURE, X.FIGURE], [w.FONT, X.FONT], [w.FOOTER, X.FOOTER], [w.FOREIGN_OBJECT, X.FOREIGN_OBJECT], [w.FORM, X.FORM], [w.FRAME, X.FRAME], [w.FRAMESET, X.FRAMESET], [w.H1, X.H1], [w.H2, X.H2], [w.H3, X.H3], [w.H4, X.H4], [w.H5, X.H5], [w.H6, X.H6], [w.HEAD, X.HEAD], [w.HEADER, X.HEADER], [w.HGROUP, X.HGROUP], [w.HR, X.HR], [w.HTML, X.HTML], [w.I, X.I], [w.IMG, X.IMG], [w.IMAGE, X.IMAGE], [w.INPUT, X.INPUT], [w.IFRAME, X.IFRAME], [w.KEYGEN, X.KEYGEN], [w.LABEL, X.LABEL], [w.LI, X.LI], [w.LINK, X.LINK], [w.LISTING, X.LISTING], [w.MAIN, X.MAIN], [w.MALIGNMARK, X.MALIGNMARK], [w.MARQUEE, X.MARQUEE], [w.MATH, X.MATH], [w.MENU, X.MENU], [w.META, X.META], [w.MGLYPH, X.MGLYPH], [w.MI, X.MI], [w.MO, X.MO], [w.MN, X.MN], [w.MS, X.MS], [w.MTEXT, X.MTEXT], [w.NAV, X.NAV], [w.NOBR, X.NOBR], [w.NOFRAMES, X.NOFRAMES], [w.NOEMBED, X.NOEMBED], [w.NOSCRIPT, X.NOSCRIPT], [w.OBJECT, X.OBJECT], [w.OL, X.OL], [w.OPTGROUP, X.OPTGROUP], [w.OPTION, X.OPTION], [w.P, X.P], [w.PARAM, X.PARAM], [w.PLAINTEXT, X.PLAINTEXT], [w.PRE, X.PRE], [w.RB, X.RB], [w.RP, X.RP], [w.RT, X.RT], [w.RTC, X.RTC], [w.RUBY, X.RUBY], [w.S, X.S], [w.SCRIPT, X.SCRIPT], [w.SEARCH, X.SEARCH], [w.SECTION, X.SECTION], [w.SELECT, X.SELECT], [w.SOURCE, X.SOURCE], [w.SMALL, X.SMALL], [w.SPAN, X.SPAN], [w.STRIKE, X.STRIKE], [w.STRONG, X.STRONG], [w.STYLE, X.STYLE], [w.SUB, X.SUB], [w.SUMMARY, X.SUMMARY], [w.SUP, X.SUP], [w.TABLE, X.TABLE], [w.TBODY, X.TBODY], [w.TEMPLATE, X.TEMPLATE], [w.TEXTAREA, X.TEXTAREA], [w.TFOOT, X.TFOOT], [w.TD, X.TD], [w.TH, X.TH], [w.THEAD, X.THEAD], [w.TITLE, X.TITLE], [w.TR, X.TR], [w.TRACK, X.TRACK], [w.TT, X.TT], [w.U, X.U], [w.UL, X.UL], [w.SVG, X.SVG], [w.VAR, X.VAR], [w.WBR, X.WBR], [w.XMP, X.XMP]]);
function g0(Z) {
  var Y;
  return (Y = J9.get(Z)) !== null && Y !== void 0 ? Y : X.UNKNOWN;
}
var v = X,
  D5 = (_D = {}, _defineProperty(_D, L.HTML, new Set([v.ADDRESS, v.APPLET, v.AREA, v.ARTICLE, v.ASIDE, v.BASE, v.BASEFONT, v.BGSOUND, v.BLOCKQUOTE, v.BODY, v.BR, v.BUTTON, v.CAPTION, v.CENTER, v.COL, v.COLGROUP, v.DD, v.DETAILS, v.DIR, v.DIV, v.DL, v.DT, v.EMBED, v.FIELDSET, v.FIGCAPTION, v.FIGURE, v.FOOTER, v.FORM, v.FRAME, v.FRAMESET, v.H1, v.H2, v.H3, v.H4, v.H5, v.H6, v.HEAD, v.HEADER, v.HGROUP, v.HR, v.HTML, v.IFRAME, v.IMG, v.INPUT, v.LI, v.LINK, v.LISTING, v.MAIN, v.MARQUEE, v.MENU, v.META, v.NAV, v.NOEMBED, v.NOFRAMES, v.NOSCRIPT, v.OBJECT, v.OL, v.P, v.PARAM, v.PLAINTEXT, v.PRE, v.SCRIPT, v.SECTION, v.SELECT, v.SOURCE, v.STYLE, v.SUMMARY, v.TABLE, v.TBODY, v.TD, v.TEMPLATE, v.TEXTAREA, v.TFOOT, v.TH, v.THEAD, v.TITLE, v.TR, v.TRACK, v.UL, v.WBR, v.XMP])), _defineProperty(_D, L.MATHML, new Set([v.MI, v.MO, v.MN, v.MS, v.MTEXT, v.ANNOTATION_XML])), _defineProperty(_D, L.SVG, new Set([v.TITLE, v.FOREIGN_OBJECT, v.DESC])), _defineProperty(_D, L.XLINK, new Set()), _defineProperty(_D, L.XML, new Set()), _defineProperty(_D, L.XMLNS, new Set()), _D),
  t0 = new Set([v.H1, v.H2, v.H3, v.H4, v.H5, v.H6]),
  K9 = new Set([w.STYLE, w.SCRIPT, w.XMP, w.IFRAME, w.NOEMBED, w.NOFRAMES, w.PLAINTEXT]);
function G5(Z, Y) {
  return K9.has(Z) || Y && Z === w.NOSCRIPT;
}
var W;
(function (Z) {
  Z[Z.DATA = 0] = "DATA", Z[Z.RCDATA = 1] = "RCDATA", Z[Z.RAWTEXT = 2] = "RAWTEXT", Z[Z.SCRIPT_DATA = 3] = "SCRIPT_DATA", Z[Z.PLAINTEXT = 4] = "PLAINTEXT", Z[Z.TAG_OPEN = 5] = "TAG_OPEN", Z[Z.END_TAG_OPEN = 6] = "END_TAG_OPEN", Z[Z.TAG_NAME = 7] = "TAG_NAME", Z[Z.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", Z[Z.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", Z[Z.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", Z[Z.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", Z[Z.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", Z[Z.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", Z[Z.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", Z[Z.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", Z[Z.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", Z[Z.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", Z[Z.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", Z[Z.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", Z[Z.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", Z[Z.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", Z[Z.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", Z[Z.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", Z[Z.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", Z[Z.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", Z[Z.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", Z[Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", Z[Z.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", Z[Z.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", Z[Z.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", Z[Z.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", Z[Z.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", Z[Z.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", Z[Z.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", Z[Z.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", Z[Z.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", Z[Z.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", Z[Z.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", Z[Z.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", Z[Z.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", Z[Z.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", Z[Z.COMMENT_START = 42] = "COMMENT_START", Z[Z.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", Z[Z.COMMENT = 44] = "COMMENT", Z[Z.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", Z[Z.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", Z[Z.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", Z[Z.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", Z[Z.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", Z[Z.COMMENT_END = 50] = "COMMENT_END", Z[Z.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", Z[Z.DOCTYPE = 52] = "DOCTYPE", Z[Z.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", Z[Z.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", Z[Z.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", Z[Z.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", Z[Z.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", Z[Z.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", Z[Z.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", Z[Z.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", Z[Z.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", Z[Z.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", Z[Z.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", Z[Z.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", Z[Z.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", Z[Z.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", Z[Z.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", Z[Z.CDATA_SECTION = 68] = "CDATA_SECTION", Z[Z.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", Z[Z.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", Z[Z.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", Z[Z.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(W || (W = {}));
var m = {
  DATA: W.DATA,
  RCDATA: W.RCDATA,
  RAWTEXT: W.RAWTEXT,
  SCRIPT_DATA: W.SCRIPT_DATA,
  PLAINTEXT: W.PLAINTEXT,
  CDATA_SECTION: W.CDATA_SECTION
};
function X9(Z) {
  return Z >= H.DIGIT_0 && Z <= H.DIGIT_9;
}
function q1(Z) {
  return Z >= H.LATIN_CAPITAL_A && Z <= H.LATIN_CAPITAL_Z;
}
function Q9(Z) {
  return Z >= H.LATIN_SMALL_A && Z <= H.LATIN_SMALL_Z;
}
function N0(Z) {
  return Q9(Z) || q1(Z);
}
function V7(Z) {
  return N0(Z) || X9(Z);
}
function z4(Z) {
  return Z + 32;
}
function H7(Z) {
  return Z === H.SPACE || Z === H.LINE_FEED || Z === H.TABULATION || Z === H.FORM_FEED;
}
function z7(Z) {
  return H7(Z) || Z === H.SOLIDUS || Z === H.GREATER_THAN_SIGN;
}
function V9(Z) {
  if (Z === H.NULL) return j.nullCharacterReference;else if (Z > 1114111) return j.characterReferenceOutsideUnicodeRange;else if (J4(Z)) return j.surrogateCharacterReference;else if (X4(Z)) return j.noncharacterCharacterReference;else if (K4(Z) || Z === H.CARRIAGE_RETURN) return j.controlCharacterReference;
  return null;
}
var H4 = /*#__PURE__*/function () {
  function H4(Z, Y) {
    var _this26 = this;
    _classCallCheck(this, H4);
    this.options = Z, this.handler = Y, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = W.DATA, this.returnState = W.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
      name: "",
      value: ""
    }, this.preprocessor = new N5(Y), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new C5(M5, function (J, K) {
      _this26.preprocessor.pos = _this26.entityStartPos + K - 1, _this26._flushCodePointConsumedAsCharacterReference(J);
    }, Y.onParseError ? {
      missingSemicolonAfterCharacterReference: function missingSemicolonAfterCharacterReference() {
        _this26._err(j.missingSemicolonAfterCharacterReference, 1);
      },
      absenceOfDigitsInNumericCharacterReference: function absenceOfDigitsInNumericCharacterReference(J) {
        _this26._err(j.absenceOfDigitsInNumericCharacterReference, _this26.entityStartPos - _this26.preprocessor.pos + J);
      },
      validateNumericCharacterReference: function validateNumericCharacterReference(J) {
        var K = V9(J);
        if (K) _this26._err(K, 1);
      }
    } : void 0);
  }
  _createClass(H4, [{
    key: "_err",
    value: function _err(Z) {
      var Y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var J, K;
      (K = (J = this.handler).onParseError) === null || K === void 0 || K.call(J, this.preprocessor.getError(Z, Y));
    }
  }, {
    key: "getCurrentLocation",
    value: function getCurrentLocation(Z) {
      if (!this.options.sourceCodeLocationInfo) return null;
      return {
        startLine: this.preprocessor.line,
        startCol: this.preprocessor.col - Z,
        startOffset: this.preprocessor.offset - Z,
        endLine: -1,
        endCol: -1,
        endOffset: -1
      };
    }
  }, {
    key: "_runParsingLoop",
    value: function _runParsingLoop() {
      if (this.inLoop) return;
      this.inLoop = !0;
      while (this.active && !this.paused) {
        this.consumedAfterSnapshot = 0;
        var _Z3 = this._consume();
        if (!this._ensureHibernation()) this._callState(_Z3);
      }
      this.inLoop = !1;
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = !0;
    }
  }, {
    key: "resume",
    value: function resume(Z) {
      if (!this.paused) throw new Error("Parser was already resumed");
      if (this.paused = !1, this.inLoop) return;
      if (this._runParsingLoop(), !this.paused) Z === null || Z === void 0 || Z();
    }
  }, {
    key: "write",
    value: function write(Z, Y, J) {
      if (this.active = !0, this.preprocessor.write(Z, Y), this._runParsingLoop(), !this.paused) J === null || J === void 0 || J();
    }
  }, {
    key: "insertHtmlAtCurrentPos",
    value: function insertHtmlAtCurrentPos(Z) {
      this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(Z), this._runParsingLoop();
    }
  }, {
    key: "_ensureHibernation",
    value: function _ensureHibernation() {
      if (this.preprocessor.endOfChunkHit) return this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0;
      return !1;
    }
  }, {
    key: "_consume",
    value: function _consume() {
      return this.consumedAfterSnapshot++, this.preprocessor.advance();
    }
  }, {
    key: "_advanceBy",
    value: function _advanceBy(Z) {
      this.consumedAfterSnapshot += Z;
      for (var Y = 0; Y < Z; Y++) this.preprocessor.advance();
    }
  }, {
    key: "_consumeSequenceIfMatch",
    value: function _consumeSequenceIfMatch(Z, Y) {
      if (this.preprocessor.startsWith(Z, Y)) return this._advanceBy(Z.length - 1), !0;
      return !1;
    }
  }, {
    key: "_createStartTagToken",
    value: function _createStartTagToken() {
      this.currentToken = {
        type: h.START_TAG,
        tagName: "",
        tagID: X.UNKNOWN,
        selfClosing: !1,
        ackSelfClosing: !1,
        attrs: [],
        location: this.getCurrentLocation(1)
      };
    }
  }, {
    key: "_createEndTagToken",
    value: function _createEndTagToken() {
      this.currentToken = {
        type: h.END_TAG,
        tagName: "",
        tagID: X.UNKNOWN,
        selfClosing: !1,
        ackSelfClosing: !1,
        attrs: [],
        location: this.getCurrentLocation(2)
      };
    }
  }, {
    key: "_createCommentToken",
    value: function _createCommentToken(Z) {
      this.currentToken = {
        type: h.COMMENT,
        data: "",
        location: this.getCurrentLocation(Z)
      };
    }
  }, {
    key: "_createDoctypeToken",
    value: function _createDoctypeToken(Z) {
      this.currentToken = {
        type: h.DOCTYPE,
        name: Z,
        forceQuirks: !1,
        publicId: null,
        systemId: null,
        location: this.currentLocation
      };
    }
  }, {
    key: "_createCharacterToken",
    value: function _createCharacterToken(Z, Y) {
      this.currentCharacterToken = {
        type: Z,
        chars: Y,
        location: this.currentLocation
      };
    }
  }, {
    key: "_createAttr",
    value: function _createAttr(Z) {
      this.currentAttr = {
        name: Z,
        value: ""
      }, this.currentLocation = this.getCurrentLocation(0);
    }
  }, {
    key: "_leaveAttrName",
    value: function _leaveAttrName() {
      var Z, Y;
      var J = this.currentToken;
      if (Q4(J, this.currentAttr.name) === null) {
        if (J.attrs.push(this.currentAttr), J.location && this.currentLocation) {
          var K = (Z = (Y = J.location).attrs) !== null && Z !== void 0 ? Z : Y.attrs = Object.create(null);
          K[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
        }
      } else this._err(j.duplicateAttribute);
    }
  }, {
    key: "_leaveAttrValue",
    value: function _leaveAttrValue() {
      if (this.currentLocation) this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset;
    }
  }, {
    key: "prepareToken",
    value: function prepareToken(Z) {
      if (this._emitCurrentCharacterToken(Z.location), this.currentToken = null, Z.location) Z.location.endLine = this.preprocessor.line, Z.location.endCol = this.preprocessor.col + 1, Z.location.endOffset = this.preprocessor.offset + 1;
      this.currentLocation = this.getCurrentLocation(-1);
    }
  }, {
    key: "emitCurrentTagToken",
    value: function emitCurrentTagToken() {
      var Z = this.currentToken;
      if (this.prepareToken(Z), Z.tagID = g0(Z.tagName), Z.type === h.START_TAG) this.lastStartTagName = Z.tagName, this.handler.onStartTag(Z);else {
        if (Z.attrs.length > 0) this._err(j.endTagWithAttributes);
        if (Z.selfClosing) this._err(j.endTagWithTrailingSolidus);
        this.handler.onEndTag(Z);
      }
      this.preprocessor.dropParsedChunk();
    }
  }, {
    key: "emitCurrentComment",
    value: function emitCurrentComment(Z) {
      this.prepareToken(Z), this.handler.onComment(Z), this.preprocessor.dropParsedChunk();
    }
  }, {
    key: "emitCurrentDoctype",
    value: function emitCurrentDoctype(Z) {
      this.prepareToken(Z), this.handler.onDoctype(Z), this.preprocessor.dropParsedChunk();
    }
  }, {
    key: "_emitCurrentCharacterToken",
    value: function _emitCurrentCharacterToken(Z) {
      if (this.currentCharacterToken) {
        if (Z && this.currentCharacterToken.location) this.currentCharacterToken.location.endLine = Z.startLine, this.currentCharacterToken.location.endCol = Z.startCol, this.currentCharacterToken.location.endOffset = Z.startOffset;
        switch (this.currentCharacterToken.type) {
          case h.CHARACTER:
            {
              this.handler.onCharacter(this.currentCharacterToken);
              break;
            }
          case h.NULL_CHARACTER:
            {
              this.handler.onNullCharacter(this.currentCharacterToken);
              break;
            }
          case h.WHITESPACE_CHARACTER:
            {
              this.handler.onWhitespaceCharacter(this.currentCharacterToken);
              break;
            }
        }
        this.currentCharacterToken = null;
      }
    }
  }, {
    key: "_emitEOFToken",
    value: function _emitEOFToken() {
      var Z = this.getCurrentLocation(0);
      if (Z) Z.endLine = Z.startLine, Z.endCol = Z.startCol, Z.endOffset = Z.startOffset;
      this._emitCurrentCharacterToken(Z), this.handler.onEof({
        type: h.EOF,
        location: Z
      }), this.active = !1;
    }
  }, {
    key: "_appendCharToCurrentCharacterToken",
    value: function _appendCharToCurrentCharacterToken(Z, Y) {
      if (this.currentCharacterToken) if (this.currentCharacterToken.type === Z) {
        this.currentCharacterToken.chars += Y;
        return;
      } else this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
      this._createCharacterToken(Z, Y);
    }
  }, {
    key: "_emitCodePoint",
    value: function _emitCodePoint(Z) {
      var Y = H7(Z) ? h.WHITESPACE_CHARACTER : Z === H.NULL ? h.NULL_CHARACTER : h.CHARACTER;
      this._appendCharToCurrentCharacterToken(Y, String.fromCodePoint(Z));
    }
  }, {
    key: "_emitChars",
    value: function _emitChars(Z) {
      this._appendCharToCurrentCharacterToken(h.CHARACTER, Z);
    }
  }, {
    key: "_startCharacterReference",
    value: function _startCharacterReference() {
      this.returnState = this.state, this.state = W.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? z0.Attribute : z0.Legacy);
    }
  }, {
    key: "_isCharacterReferenceInAttribute",
    value: function _isCharacterReferenceInAttribute() {
      return this.returnState === W.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === W.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === W.ATTRIBUTE_VALUE_UNQUOTED;
    }
  }, {
    key: "_flushCodePointConsumedAsCharacterReference",
    value: function _flushCodePointConsumedAsCharacterReference(Z) {
      if (this._isCharacterReferenceInAttribute()) this.currentAttr.value += String.fromCodePoint(Z);else this._emitCodePoint(Z);
    }
  }, {
    key: "_callState",
    value: function _callState(Z) {
      switch (this.state) {
        case W.DATA:
          {
            this._stateData(Z);
            break;
          }
        case W.RCDATA:
          {
            this._stateRcdata(Z);
            break;
          }
        case W.RAWTEXT:
          {
            this._stateRawtext(Z);
            break;
          }
        case W.SCRIPT_DATA:
          {
            this._stateScriptData(Z);
            break;
          }
        case W.PLAINTEXT:
          {
            this._statePlaintext(Z);
            break;
          }
        case W.TAG_OPEN:
          {
            this._stateTagOpen(Z);
            break;
          }
        case W.END_TAG_OPEN:
          {
            this._stateEndTagOpen(Z);
            break;
          }
        case W.TAG_NAME:
          {
            this._stateTagName(Z);
            break;
          }
        case W.RCDATA_LESS_THAN_SIGN:
          {
            this._stateRcdataLessThanSign(Z);
            break;
          }
        case W.RCDATA_END_TAG_OPEN:
          {
            this._stateRcdataEndTagOpen(Z);
            break;
          }
        case W.RCDATA_END_TAG_NAME:
          {
            this._stateRcdataEndTagName(Z);
            break;
          }
        case W.RAWTEXT_LESS_THAN_SIGN:
          {
            this._stateRawtextLessThanSign(Z);
            break;
          }
        case W.RAWTEXT_END_TAG_OPEN:
          {
            this._stateRawtextEndTagOpen(Z);
            break;
          }
        case W.RAWTEXT_END_TAG_NAME:
          {
            this._stateRawtextEndTagName(Z);
            break;
          }
        case W.SCRIPT_DATA_LESS_THAN_SIGN:
          {
            this._stateScriptDataLessThanSign(Z);
            break;
          }
        case W.SCRIPT_DATA_END_TAG_OPEN:
          {
            this._stateScriptDataEndTagOpen(Z);
            break;
          }
        case W.SCRIPT_DATA_END_TAG_NAME:
          {
            this._stateScriptDataEndTagName(Z);
            break;
          }
        case W.SCRIPT_DATA_ESCAPE_START:
          {
            this._stateScriptDataEscapeStart(Z);
            break;
          }
        case W.SCRIPT_DATA_ESCAPE_START_DASH:
          {
            this._stateScriptDataEscapeStartDash(Z);
            break;
          }
        case W.SCRIPT_DATA_ESCAPED:
          {
            this._stateScriptDataEscaped(Z);
            break;
          }
        case W.SCRIPT_DATA_ESCAPED_DASH:
          {
            this._stateScriptDataEscapedDash(Z);
            break;
          }
        case W.SCRIPT_DATA_ESCAPED_DASH_DASH:
          {
            this._stateScriptDataEscapedDashDash(Z);
            break;
          }
        case W.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
          {
            this._stateScriptDataEscapedLessThanSign(Z);
            break;
          }
        case W.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
          {
            this._stateScriptDataEscapedEndTagOpen(Z);
            break;
          }
        case W.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
          {
            this._stateScriptDataEscapedEndTagName(Z);
            break;
          }
        case W.SCRIPT_DATA_DOUBLE_ESCAPE_START:
          {
            this._stateScriptDataDoubleEscapeStart(Z);
            break;
          }
        case W.SCRIPT_DATA_DOUBLE_ESCAPED:
          {
            this._stateScriptDataDoubleEscaped(Z);
            break;
          }
        case W.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
          {
            this._stateScriptDataDoubleEscapedDash(Z);
            break;
          }
        case W.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
          {
            this._stateScriptDataDoubleEscapedDashDash(Z);
            break;
          }
        case W.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
          {
            this._stateScriptDataDoubleEscapedLessThanSign(Z);
            break;
          }
        case W.SCRIPT_DATA_DOUBLE_ESCAPE_END:
          {
            this._stateScriptDataDoubleEscapeEnd(Z);
            break;
          }
        case W.BEFORE_ATTRIBUTE_NAME:
          {
            this._stateBeforeAttributeName(Z);
            break;
          }
        case W.ATTRIBUTE_NAME:
          {
            this._stateAttributeName(Z);
            break;
          }
        case W.AFTER_ATTRIBUTE_NAME:
          {
            this._stateAfterAttributeName(Z);
            break;
          }
        case W.BEFORE_ATTRIBUTE_VALUE:
          {
            this._stateBeforeAttributeValue(Z);
            break;
          }
        case W.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
          {
            this._stateAttributeValueDoubleQuoted(Z);
            break;
          }
        case W.ATTRIBUTE_VALUE_SINGLE_QUOTED:
          {
            this._stateAttributeValueSingleQuoted(Z);
            break;
          }
        case W.ATTRIBUTE_VALUE_UNQUOTED:
          {
            this._stateAttributeValueUnquoted(Z);
            break;
          }
        case W.AFTER_ATTRIBUTE_VALUE_QUOTED:
          {
            this._stateAfterAttributeValueQuoted(Z);
            break;
          }
        case W.SELF_CLOSING_START_TAG:
          {
            this._stateSelfClosingStartTag(Z);
            break;
          }
        case W.BOGUS_COMMENT:
          {
            this._stateBogusComment(Z);
            break;
          }
        case W.MARKUP_DECLARATION_OPEN:
          {
            this._stateMarkupDeclarationOpen(Z);
            break;
          }
        case W.COMMENT_START:
          {
            this._stateCommentStart(Z);
            break;
          }
        case W.COMMENT_START_DASH:
          {
            this._stateCommentStartDash(Z);
            break;
          }
        case W.COMMENT:
          {
            this._stateComment(Z);
            break;
          }
        case W.COMMENT_LESS_THAN_SIGN:
          {
            this._stateCommentLessThanSign(Z);
            break;
          }
        case W.COMMENT_LESS_THAN_SIGN_BANG:
          {
            this._stateCommentLessThanSignBang(Z);
            break;
          }
        case W.COMMENT_LESS_THAN_SIGN_BANG_DASH:
          {
            this._stateCommentLessThanSignBangDash(Z);
            break;
          }
        case W.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
          {
            this._stateCommentLessThanSignBangDashDash(Z);
            break;
          }
        case W.COMMENT_END_DASH:
          {
            this._stateCommentEndDash(Z);
            break;
          }
        case W.COMMENT_END:
          {
            this._stateCommentEnd(Z);
            break;
          }
        case W.COMMENT_END_BANG:
          {
            this._stateCommentEndBang(Z);
            break;
          }
        case W.DOCTYPE:
          {
            this._stateDoctype(Z);
            break;
          }
        case W.BEFORE_DOCTYPE_NAME:
          {
            this._stateBeforeDoctypeName(Z);
            break;
          }
        case W.DOCTYPE_NAME:
          {
            this._stateDoctypeName(Z);
            break;
          }
        case W.AFTER_DOCTYPE_NAME:
          {
            this._stateAfterDoctypeName(Z);
            break;
          }
        case W.AFTER_DOCTYPE_PUBLIC_KEYWORD:
          {
            this._stateAfterDoctypePublicKeyword(Z);
            break;
          }
        case W.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
          {
            this._stateBeforeDoctypePublicIdentifier(Z);
            break;
          }
        case W.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
          {
            this._stateDoctypePublicIdentifierDoubleQuoted(Z);
            break;
          }
        case W.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
          {
            this._stateDoctypePublicIdentifierSingleQuoted(Z);
            break;
          }
        case W.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
          {
            this._stateAfterDoctypePublicIdentifier(Z);
            break;
          }
        case W.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
          {
            this._stateBetweenDoctypePublicAndSystemIdentifiers(Z);
            break;
          }
        case W.AFTER_DOCTYPE_SYSTEM_KEYWORD:
          {
            this._stateAfterDoctypeSystemKeyword(Z);
            break;
          }
        case W.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
          {
            this._stateBeforeDoctypeSystemIdentifier(Z);
            break;
          }
        case W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
          {
            this._stateDoctypeSystemIdentifierDoubleQuoted(Z);
            break;
          }
        case W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
          {
            this._stateDoctypeSystemIdentifierSingleQuoted(Z);
            break;
          }
        case W.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
          {
            this._stateAfterDoctypeSystemIdentifier(Z);
            break;
          }
        case W.BOGUS_DOCTYPE:
          {
            this._stateBogusDoctype(Z);
            break;
          }
        case W.CDATA_SECTION:
          {
            this._stateCdataSection(Z);
            break;
          }
        case W.CDATA_SECTION_BRACKET:
          {
            this._stateCdataSectionBracket(Z);
            break;
          }
        case W.CDATA_SECTION_END:
          {
            this._stateCdataSectionEnd(Z);
            break;
          }
        case W.CHARACTER_REFERENCE:
          {
            this._stateCharacterReference();
            break;
          }
        case W.AMBIGUOUS_AMPERSAND:
          {
            this._stateAmbiguousAmpersand(Z);
            break;
          }
        default:
          throw new Error("Unknown state");
      }
    }
  }, {
    key: "_stateData",
    value: function _stateData(Z) {
      switch (Z) {
        case H.LESS_THAN_SIGN:
          {
            this.state = W.TAG_OPEN;
            break;
          }
        case H.AMPERSAND:
          {
            this._startCharacterReference();
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this._emitCodePoint(Z);
            break;
          }
        case H.EOF:
          {
            this._emitEOFToken();
            break;
          }
        default:
          this._emitCodePoint(Z);
      }
    }
  }, {
    key: "_stateRcdata",
    value: function _stateRcdata(Z) {
      switch (Z) {
        case H.AMPERSAND:
          {
            this._startCharacterReference();
            break;
          }
        case H.LESS_THAN_SIGN:
          {
            this.state = W.RCDATA_LESS_THAN_SIGN;
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this._emitChars($);
            break;
          }
        case H.EOF:
          {
            this._emitEOFToken();
            break;
          }
        default:
          this._emitCodePoint(Z);
      }
    }
  }, {
    key: "_stateRawtext",
    value: function _stateRawtext(Z) {
      switch (Z) {
        case H.LESS_THAN_SIGN:
          {
            this.state = W.RAWTEXT_LESS_THAN_SIGN;
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this._emitChars($);
            break;
          }
        case H.EOF:
          {
            this._emitEOFToken();
            break;
          }
        default:
          this._emitCodePoint(Z);
      }
    }
  }, {
    key: "_stateScriptData",
    value: function _stateScriptData(Z) {
      switch (Z) {
        case H.LESS_THAN_SIGN:
          {
            this.state = W.SCRIPT_DATA_LESS_THAN_SIGN;
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this._emitChars($);
            break;
          }
        case H.EOF:
          {
            this._emitEOFToken();
            break;
          }
        default:
          this._emitCodePoint(Z);
      }
    }
  }, {
    key: "_statePlaintext",
    value: function _statePlaintext(Z) {
      switch (Z) {
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this._emitChars($);
            break;
          }
        case H.EOF:
          {
            this._emitEOFToken();
            break;
          }
        default:
          this._emitCodePoint(Z);
      }
    }
  }, {
    key: "_stateTagOpen",
    value: function _stateTagOpen(Z) {
      if (N0(Z)) this._createStartTagToken(), this.state = W.TAG_NAME, this._stateTagName(Z);else switch (Z) {
        case H.EXCLAMATION_MARK:
          {
            this.state = W.MARKUP_DECLARATION_OPEN;
            break;
          }
        case H.SOLIDUS:
          {
            this.state = W.END_TAG_OPEN;
            break;
          }
        case H.QUESTION_MARK:
          {
            this._err(j.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = W.BOGUS_COMMENT, this._stateBogusComment(Z);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
            break;
          }
        default:
          this._err(j.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = W.DATA, this._stateData(Z);
      }
    }
  }, {
    key: "_stateEndTagOpen",
    value: function _stateEndTagOpen(Z) {
      if (N0(Z)) this._createEndTagToken(), this.state = W.TAG_NAME, this._stateTagName(Z);else switch (Z) {
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.missingEndTagName), this.state = W.DATA;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
            break;
          }
        default:
          this._err(j.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = W.BOGUS_COMMENT, this._stateBogusComment(Z);
      }
    }
  }, {
    key: "_stateTagName",
    value: function _stateTagName(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          {
            this.state = W.BEFORE_ATTRIBUTE_NAME;
            break;
          }
        case H.SOLIDUS:
          {
            this.state = W.SELF_CLOSING_START_TAG;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this.state = W.DATA, this.emitCurrentTagToken();
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), Y.tagName += $;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInTag), this._emitEOFToken();
            break;
          }
        default:
          Y.tagName += String.fromCodePoint(q1(Z) ? z4(Z) : Z);
      }
    }
  }, {
    key: "_stateRcdataLessThanSign",
    value: function _stateRcdataLessThanSign(Z) {
      if (Z === H.SOLIDUS) this.state = W.RCDATA_END_TAG_OPEN;else this._emitChars("<"), this.state = W.RCDATA, this._stateRcdata(Z);
    }
  }, {
    key: "_stateRcdataEndTagOpen",
    value: function _stateRcdataEndTagOpen(Z) {
      if (N0(Z)) this.state = W.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(Z);else this._emitChars("</"), this.state = W.RCDATA, this._stateRcdata(Z);
    }
  }, {
    key: "handleSpecialEndTag",
    value: function handleSpecialEndTag(Z) {
      if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
      this._createEndTagToken();
      var Y = this.currentToken;
      switch (Y.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          return this._advanceBy(this.lastStartTagName.length), this.state = W.BEFORE_ATTRIBUTE_NAME, !1;
        case H.SOLIDUS:
          return this._advanceBy(this.lastStartTagName.length), this.state = W.SELF_CLOSING_START_TAG, !1;
        case H.GREATER_THAN_SIGN:
          return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = W.DATA, !1;
        default:
          return !this._ensureHibernation();
      }
    }
  }, {
    key: "_stateRcdataEndTagName",
    value: function _stateRcdataEndTagName(Z) {
      if (this.handleSpecialEndTag(Z)) this._emitChars("</"), this.state = W.RCDATA, this._stateRcdata(Z);
    }
  }, {
    key: "_stateRawtextLessThanSign",
    value: function _stateRawtextLessThanSign(Z) {
      if (Z === H.SOLIDUS) this.state = W.RAWTEXT_END_TAG_OPEN;else this._emitChars("<"), this.state = W.RAWTEXT, this._stateRawtext(Z);
    }
  }, {
    key: "_stateRawtextEndTagOpen",
    value: function _stateRawtextEndTagOpen(Z) {
      if (N0(Z)) this.state = W.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(Z);else this._emitChars("</"), this.state = W.RAWTEXT, this._stateRawtext(Z);
    }
  }, {
    key: "_stateRawtextEndTagName",
    value: function _stateRawtextEndTagName(Z) {
      if (this.handleSpecialEndTag(Z)) this._emitChars("</"), this.state = W.RAWTEXT, this._stateRawtext(Z);
    }
  }, {
    key: "_stateScriptDataLessThanSign",
    value: function _stateScriptDataLessThanSign(Z) {
      switch (Z) {
        case H.SOLIDUS:
          {
            this.state = W.SCRIPT_DATA_END_TAG_OPEN;
            break;
          }
        case H.EXCLAMATION_MARK:
          {
            this.state = W.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
            break;
          }
        default:
          this._emitChars("<"), this.state = W.SCRIPT_DATA, this._stateScriptData(Z);
      }
    }
  }, {
    key: "_stateScriptDataEndTagOpen",
    value: function _stateScriptDataEndTagOpen(Z) {
      if (N0(Z)) this.state = W.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(Z);else this._emitChars("</"), this.state = W.SCRIPT_DATA, this._stateScriptData(Z);
    }
  }, {
    key: "_stateScriptDataEndTagName",
    value: function _stateScriptDataEndTagName(Z) {
      if (this.handleSpecialEndTag(Z)) this._emitChars("</"), this.state = W.SCRIPT_DATA, this._stateScriptData(Z);
    }
  }, {
    key: "_stateScriptDataEscapeStart",
    value: function _stateScriptDataEscapeStart(Z) {
      if (Z === H.HYPHEN_MINUS) this.state = W.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-");else this.state = W.SCRIPT_DATA, this._stateScriptData(Z);
    }
  }, {
    key: "_stateScriptDataEscapeStartDash",
    value: function _stateScriptDataEscapeStartDash(Z) {
      if (Z === H.HYPHEN_MINUS) this.state = W.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");else this.state = W.SCRIPT_DATA, this._stateScriptData(Z);
    }
  }, {
    key: "_stateScriptDataEscaped",
    value: function _stateScriptDataEscaped(Z) {
      switch (Z) {
        case H.HYPHEN_MINUS:
          {
            this.state = W.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
            break;
          }
        case H.LESS_THAN_SIGN:
          {
            this.state = W.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this._emitChars($);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          }
        default:
          this._emitCodePoint(Z);
      }
    }
  }, {
    key: "_stateScriptDataEscapedDash",
    value: function _stateScriptDataEscapedDash(Z) {
      switch (Z) {
        case H.HYPHEN_MINUS:
          {
            this.state = W.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
            break;
          }
        case H.LESS_THAN_SIGN:
          {
            this.state = W.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this.state = W.SCRIPT_DATA_ESCAPED, this._emitChars($);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          }
        default:
          this.state = W.SCRIPT_DATA_ESCAPED, this._emitCodePoint(Z);
      }
    }
  }, {
    key: "_stateScriptDataEscapedDashDash",
    value: function _stateScriptDataEscapedDashDash(Z) {
      switch (Z) {
        case H.HYPHEN_MINUS:
          {
            this._emitChars("-");
            break;
          }
        case H.LESS_THAN_SIGN:
          {
            this.state = W.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this.state = W.SCRIPT_DATA, this._emitChars(">");
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this.state = W.SCRIPT_DATA_ESCAPED, this._emitChars($);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          }
        default:
          this.state = W.SCRIPT_DATA_ESCAPED, this._emitCodePoint(Z);
      }
    }
  }, {
    key: "_stateScriptDataEscapedLessThanSign",
    value: function _stateScriptDataEscapedLessThanSign(Z) {
      if (Z === H.SOLIDUS) this.state = W.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;else if (N0(Z)) this._emitChars("<"), this.state = W.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(Z);else this._emitChars("<"), this.state = W.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(Z);
    }
  }, {
    key: "_stateScriptDataEscapedEndTagOpen",
    value: function _stateScriptDataEscapedEndTagOpen(Z) {
      if (N0(Z)) this.state = W.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(Z);else this._emitChars("</"), this.state = W.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(Z);
    }
  }, {
    key: "_stateScriptDataEscapedEndTagName",
    value: function _stateScriptDataEscapedEndTagName(Z) {
      if (this.handleSpecialEndTag(Z)) this._emitChars("</"), this.state = W.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(Z);
    }
  }, {
    key: "_stateScriptDataDoubleEscapeStart",
    value: function _stateScriptDataDoubleEscapeStart(Z) {
      if (this.preprocessor.startsWith(c.SCRIPT, !1) && z7(this.preprocessor.peek(c.SCRIPT.length))) {
        this._emitCodePoint(Z);
        for (var Y = 0; Y < c.SCRIPT.length; Y++) this._emitCodePoint(this._consume());
        this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED;
      } else if (!this._ensureHibernation()) this.state = W.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(Z);
    }
  }, {
    key: "_stateScriptDataDoubleEscaped",
    value: function _stateScriptDataDoubleEscaped(Z) {
      switch (Z) {
        case H.HYPHEN_MINUS:
          {
            this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
            break;
          }
        case H.LESS_THAN_SIGN:
          {
            this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this._emitChars($);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          }
        default:
          this._emitCodePoint(Z);
      }
    }
  }, {
    key: "_stateScriptDataDoubleEscapedDash",
    value: function _stateScriptDataDoubleEscapedDash(Z) {
      switch (Z) {
        case H.HYPHEN_MINUS:
          {
            this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
            break;
          }
        case H.LESS_THAN_SIGN:
          {
            this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars($);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          }
        default:
          this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(Z);
      }
    }
  }, {
    key: "_stateScriptDataDoubleEscapedDashDash",
    value: function _stateScriptDataDoubleEscapedDashDash(Z) {
      switch (Z) {
        case H.HYPHEN_MINUS:
          {
            this._emitChars("-");
            break;
          }
        case H.LESS_THAN_SIGN:
          {
            this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this.state = W.SCRIPT_DATA, this._emitChars(">");
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars($);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          }
        default:
          this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(Z);
      }
    }
  }, {
    key: "_stateScriptDataDoubleEscapedLessThanSign",
    value: function _stateScriptDataDoubleEscapedLessThanSign(Z) {
      if (Z === H.SOLIDUS) this.state = W.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/");else this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(Z);
    }
  }, {
    key: "_stateScriptDataDoubleEscapeEnd",
    value: function _stateScriptDataDoubleEscapeEnd(Z) {
      if (this.preprocessor.startsWith(c.SCRIPT, !1) && z7(this.preprocessor.peek(c.SCRIPT.length))) {
        this._emitCodePoint(Z);
        for (var Y = 0; Y < c.SCRIPT.length; Y++) this._emitCodePoint(this._consume());
        this.state = W.SCRIPT_DATA_ESCAPED;
      } else if (!this._ensureHibernation()) this.state = W.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(Z);
    }
  }, {
    key: "_stateBeforeAttributeName",
    value: function _stateBeforeAttributeName(Z) {
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          break;
        case H.SOLIDUS:
        case H.GREATER_THAN_SIGN:
        case H.EOF:
          {
            this.state = W.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(Z);
            break;
          }
        case H.EQUALS_SIGN:
          {
            this._err(j.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = W.ATTRIBUTE_NAME;
            break;
          }
        default:
          this._createAttr(""), this.state = W.ATTRIBUTE_NAME, this._stateAttributeName(Z);
      }
    }
  }, {
    key: "_stateAttributeName",
    value: function _stateAttributeName(Z) {
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
        case H.SOLIDUS:
        case H.GREATER_THAN_SIGN:
        case H.EOF:
          {
            this._leaveAttrName(), this.state = W.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(Z);
            break;
          }
        case H.EQUALS_SIGN:
          {
            this._leaveAttrName(), this.state = W.BEFORE_ATTRIBUTE_VALUE;
            break;
          }
        case H.QUOTATION_MARK:
        case H.APOSTROPHE:
        case H.LESS_THAN_SIGN:
          {
            this._err(j.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(Z);
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this.currentAttr.name += $;
            break;
          }
        default:
          this.currentAttr.name += String.fromCodePoint(q1(Z) ? z4(Z) : Z);
      }
    }
  }, {
    key: "_stateAfterAttributeName",
    value: function _stateAfterAttributeName(Z) {
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          break;
        case H.SOLIDUS:
          {
            this.state = W.SELF_CLOSING_START_TAG;
            break;
          }
        case H.EQUALS_SIGN:
          {
            this.state = W.BEFORE_ATTRIBUTE_VALUE;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this.state = W.DATA, this.emitCurrentTagToken();
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInTag), this._emitEOFToken();
            break;
          }
        default:
          this._createAttr(""), this.state = W.ATTRIBUTE_NAME, this._stateAttributeName(Z);
      }
    }
  }, {
    key: "_stateBeforeAttributeValue",
    value: function _stateBeforeAttributeValue(Z) {
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          break;
        case H.QUOTATION_MARK:
          {
            this.state = W.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
            break;
          }
        case H.APOSTROPHE:
          {
            this.state = W.ATTRIBUTE_VALUE_SINGLE_QUOTED;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.missingAttributeValue), this.state = W.DATA, this.emitCurrentTagToken();
            break;
          }
        default:
          this.state = W.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(Z);
      }
    }
  }, {
    key: "_stateAttributeValueDoubleQuoted",
    value: function _stateAttributeValueDoubleQuoted(Z) {
      switch (Z) {
        case H.QUOTATION_MARK:
          {
            this.state = W.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          }
        case H.AMPERSAND:
          {
            this._startCharacterReference();
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this.currentAttr.value += $;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInTag), this._emitEOFToken();
            break;
          }
        default:
          this.currentAttr.value += String.fromCodePoint(Z);
      }
    }
  }, {
    key: "_stateAttributeValueSingleQuoted",
    value: function _stateAttributeValueSingleQuoted(Z) {
      switch (Z) {
        case H.APOSTROPHE:
          {
            this.state = W.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          }
        case H.AMPERSAND:
          {
            this._startCharacterReference();
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this.currentAttr.value += $;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInTag), this._emitEOFToken();
            break;
          }
        default:
          this.currentAttr.value += String.fromCodePoint(Z);
      }
    }
  }, {
    key: "_stateAttributeValueUnquoted",
    value: function _stateAttributeValueUnquoted(Z) {
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          {
            this._leaveAttrValue(), this.state = W.BEFORE_ATTRIBUTE_NAME;
            break;
          }
        case H.AMPERSAND:
          {
            this._startCharacterReference();
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._leaveAttrValue(), this.state = W.DATA, this.emitCurrentTagToken();
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this.currentAttr.value += $;
            break;
          }
        case H.QUOTATION_MARK:
        case H.APOSTROPHE:
        case H.LESS_THAN_SIGN:
        case H.EQUALS_SIGN:
        case H.GRAVE_ACCENT:
          {
            this._err(j.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(Z);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInTag), this._emitEOFToken();
            break;
          }
        default:
          this.currentAttr.value += String.fromCodePoint(Z);
      }
    }
  }, {
    key: "_stateAfterAttributeValueQuoted",
    value: function _stateAfterAttributeValueQuoted(Z) {
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          {
            this._leaveAttrValue(), this.state = W.BEFORE_ATTRIBUTE_NAME;
            break;
          }
        case H.SOLIDUS:
          {
            this._leaveAttrValue(), this.state = W.SELF_CLOSING_START_TAG;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._leaveAttrValue(), this.state = W.DATA, this.emitCurrentTagToken();
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInTag), this._emitEOFToken();
            break;
          }
        default:
          this._err(j.missingWhitespaceBetweenAttributes), this.state = W.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(Z);
      }
    }
  }, {
    key: "_stateSelfClosingStartTag",
    value: function _stateSelfClosingStartTag(Z) {
      switch (Z) {
        case H.GREATER_THAN_SIGN:
          {
            var Y = this.currentToken;
            Y.selfClosing = !0, this.state = W.DATA, this.emitCurrentTagToken();
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInTag), this._emitEOFToken();
            break;
          }
        default:
          this._err(j.unexpectedSolidusInTag), this.state = W.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(Z);
      }
    }
  }, {
    key: "_stateBogusComment",
    value: function _stateBogusComment(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.GREATER_THAN_SIGN:
          {
            this.state = W.DATA, this.emitCurrentComment(Y);
            break;
          }
        case H.EOF:
          {
            this.emitCurrentComment(Y), this._emitEOFToken();
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), Y.data += $;
            break;
          }
        default:
          Y.data += String.fromCodePoint(Z);
      }
    }
  }, {
    key: "_stateMarkupDeclarationOpen",
    value: function _stateMarkupDeclarationOpen(Z) {
      if (this._consumeSequenceIfMatch(c.DASH_DASH, !0)) this._createCommentToken(c.DASH_DASH.length + 1), this.state = W.COMMENT_START;else if (this._consumeSequenceIfMatch(c.DOCTYPE, !1)) this.currentLocation = this.getCurrentLocation(c.DOCTYPE.length + 1), this.state = W.DOCTYPE;else if (this._consumeSequenceIfMatch(c.CDATA_START, !0)) {
        if (this.inForeignNode) this.state = W.CDATA_SECTION;else this._err(j.cdataInHtmlContent), this._createCommentToken(c.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = W.BOGUS_COMMENT;
      } else if (!this._ensureHibernation()) this._err(j.incorrectlyOpenedComment), this._createCommentToken(2), this.state = W.BOGUS_COMMENT, this._stateBogusComment(Z);
    }
  }, {
    key: "_stateCommentStart",
    value: function _stateCommentStart(Z) {
      switch (Z) {
        case H.HYPHEN_MINUS:
          {
            this.state = W.COMMENT_START_DASH;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.abruptClosingOfEmptyComment), this.state = W.DATA;
            var Y = this.currentToken;
            this.emitCurrentComment(Y);
            break;
          }
        default:
          this.state = W.COMMENT, this._stateComment(Z);
      }
    }
  }, {
    key: "_stateCommentStartDash",
    value: function _stateCommentStartDash(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.HYPHEN_MINUS:
          {
            this.state = W.COMMENT_END;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.abruptClosingOfEmptyComment), this.state = W.DATA, this.emitCurrentComment(Y);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInComment), this.emitCurrentComment(Y), this._emitEOFToken();
            break;
          }
        default:
          Y.data += "-", this.state = W.COMMENT, this._stateComment(Z);
      }
    }
  }, {
    key: "_stateComment",
    value: function _stateComment(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.HYPHEN_MINUS:
          {
            this.state = W.COMMENT_END_DASH;
            break;
          }
        case H.LESS_THAN_SIGN:
          {
            Y.data += "<", this.state = W.COMMENT_LESS_THAN_SIGN;
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), Y.data += $;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInComment), this.emitCurrentComment(Y), this._emitEOFToken();
            break;
          }
        default:
          Y.data += String.fromCodePoint(Z);
      }
    }
  }, {
    key: "_stateCommentLessThanSign",
    value: function _stateCommentLessThanSign(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.EXCLAMATION_MARK:
          {
            Y.data += "!", this.state = W.COMMENT_LESS_THAN_SIGN_BANG;
            break;
          }
        case H.LESS_THAN_SIGN:
          {
            Y.data += "<";
            break;
          }
        default:
          this.state = W.COMMENT, this._stateComment(Z);
      }
    }
  }, {
    key: "_stateCommentLessThanSignBang",
    value: function _stateCommentLessThanSignBang(Z) {
      if (Z === H.HYPHEN_MINUS) this.state = W.COMMENT_LESS_THAN_SIGN_BANG_DASH;else this.state = W.COMMENT, this._stateComment(Z);
    }
  }, {
    key: "_stateCommentLessThanSignBangDash",
    value: function _stateCommentLessThanSignBangDash(Z) {
      if (Z === H.HYPHEN_MINUS) this.state = W.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;else this.state = W.COMMENT_END_DASH, this._stateCommentEndDash(Z);
    }
  }, {
    key: "_stateCommentLessThanSignBangDashDash",
    value: function _stateCommentLessThanSignBangDashDash(Z) {
      if (Z !== H.GREATER_THAN_SIGN && Z !== H.EOF) this._err(j.nestedComment);
      this.state = W.COMMENT_END, this._stateCommentEnd(Z);
    }
  }, {
    key: "_stateCommentEndDash",
    value: function _stateCommentEndDash(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.HYPHEN_MINUS:
          {
            this.state = W.COMMENT_END;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInComment), this.emitCurrentComment(Y), this._emitEOFToken();
            break;
          }
        default:
          Y.data += "-", this.state = W.COMMENT, this._stateComment(Z);
      }
    }
  }, {
    key: "_stateCommentEnd",
    value: function _stateCommentEnd(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.GREATER_THAN_SIGN:
          {
            this.state = W.DATA, this.emitCurrentComment(Y);
            break;
          }
        case H.EXCLAMATION_MARK:
          {
            this.state = W.COMMENT_END_BANG;
            break;
          }
        case H.HYPHEN_MINUS:
          {
            Y.data += "-";
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInComment), this.emitCurrentComment(Y), this._emitEOFToken();
            break;
          }
        default:
          Y.data += "--", this.state = W.COMMENT, this._stateComment(Z);
      }
    }
  }, {
    key: "_stateCommentEndBang",
    value: function _stateCommentEndBang(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.HYPHEN_MINUS:
          {
            Y.data += "--!", this.state = W.COMMENT_END_DASH;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.incorrectlyClosedComment), this.state = W.DATA, this.emitCurrentComment(Y);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInComment), this.emitCurrentComment(Y), this._emitEOFToken();
            break;
          }
        default:
          Y.data += "--!", this.state = W.COMMENT, this._stateComment(Z);
      }
    }
  }, {
    key: "_stateDoctype",
    value: function _stateDoctype(Z) {
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          {
            this.state = W.BEFORE_DOCTYPE_NAME;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this.state = W.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(Z);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), this._createDoctypeToken(null);
            var Y = this.currentToken;
            Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          this._err(j.missingWhitespaceBeforeDoctypeName), this.state = W.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(Z);
      }
    }
  }, {
    key: "_stateBeforeDoctypeName",
    value: function _stateBeforeDoctypeName(Z) {
      if (q1(Z)) this._createDoctypeToken(String.fromCharCode(z4(Z))), this.state = W.DOCTYPE_NAME;else switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          break;
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), this._createDoctypeToken($), this.state = W.DOCTYPE_NAME;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.missingDoctypeName), this._createDoctypeToken(null);
            var Y = this.currentToken;
            Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this.state = W.DATA;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), this._createDoctypeToken(null);
            var _Y4 = this.currentToken;
            _Y4.forceQuirks = !0, this.emitCurrentDoctype(_Y4), this._emitEOFToken();
            break;
          }
        default:
          this._createDoctypeToken(String.fromCodePoint(Z)), this.state = W.DOCTYPE_NAME;
      }
    }
  }, {
    key: "_stateDoctypeName",
    value: function _stateDoctypeName(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          {
            this.state = W.AFTER_DOCTYPE_NAME;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this.state = W.DATA, this.emitCurrentDoctype(Y);
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), Y.name += $;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          Y.name += String.fromCodePoint(q1(Z) ? z4(Z) : Z);
      }
    }
  }, {
    key: "_stateAfterDoctypeName",
    value: function _stateAfterDoctypeName(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          break;
        case H.GREATER_THAN_SIGN:
          {
            this.state = W.DATA, this.emitCurrentDoctype(Y);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          if (this._consumeSequenceIfMatch(c.PUBLIC, !1)) this.state = W.AFTER_DOCTYPE_PUBLIC_KEYWORD;else if (this._consumeSequenceIfMatch(c.SYSTEM, !1)) this.state = W.AFTER_DOCTYPE_SYSTEM_KEYWORD;else if (!this._ensureHibernation()) this._err(j.invalidCharacterSequenceAfterDoctypeName), Y.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(Z);
      }
    }
  }, {
    key: "_stateAfterDoctypePublicKeyword",
    value: function _stateAfterDoctypePublicKeyword(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          {
            this.state = W.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
        case H.QUOTATION_MARK:
          {
            this._err(j.missingWhitespaceAfterDoctypePublicKeyword), Y.publicId = "", this.state = W.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
        case H.APOSTROPHE:
          {
            this._err(j.missingWhitespaceAfterDoctypePublicKeyword), Y.publicId = "", this.state = W.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.missingDoctypePublicIdentifier), Y.forceQuirks = !0, this.state = W.DATA, this.emitCurrentDoctype(Y);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          this._err(j.missingQuoteBeforeDoctypePublicIdentifier), Y.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(Z);
      }
    }
  }, {
    key: "_stateBeforeDoctypePublicIdentifier",
    value: function _stateBeforeDoctypePublicIdentifier(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          break;
        case H.QUOTATION_MARK:
          {
            Y.publicId = "", this.state = W.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
        case H.APOSTROPHE:
          {
            Y.publicId = "", this.state = W.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.missingDoctypePublicIdentifier), Y.forceQuirks = !0, this.state = W.DATA, this.emitCurrentDoctype(Y);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          this._err(j.missingQuoteBeforeDoctypePublicIdentifier), Y.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(Z);
      }
    }
  }, {
    key: "_stateDoctypePublicIdentifierDoubleQuoted",
    value: function _stateDoctypePublicIdentifierDoubleQuoted(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.QUOTATION_MARK:
          {
            this.state = W.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), Y.publicId += $;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.abruptDoctypePublicIdentifier), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this.state = W.DATA;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          Y.publicId += String.fromCodePoint(Z);
      }
    }
  }, {
    key: "_stateDoctypePublicIdentifierSingleQuoted",
    value: function _stateDoctypePublicIdentifierSingleQuoted(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.APOSTROPHE:
          {
            this.state = W.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), Y.publicId += $;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.abruptDoctypePublicIdentifier), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this.state = W.DATA;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          Y.publicId += String.fromCodePoint(Z);
      }
    }
  }, {
    key: "_stateAfterDoctypePublicIdentifier",
    value: function _stateAfterDoctypePublicIdentifier(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          {
            this.state = W.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this.state = W.DATA, this.emitCurrentDoctype(Y);
            break;
          }
        case H.QUOTATION_MARK:
          {
            this._err(j.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), Y.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
        case H.APOSTROPHE:
          {
            this._err(j.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), Y.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          this._err(j.missingQuoteBeforeDoctypeSystemIdentifier), Y.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(Z);
      }
    }
  }, {
    key: "_stateBetweenDoctypePublicAndSystemIdentifiers",
    value: function _stateBetweenDoctypePublicAndSystemIdentifiers(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          break;
        case H.GREATER_THAN_SIGN:
          {
            this.emitCurrentDoctype(Y), this.state = W.DATA;
            break;
          }
        case H.QUOTATION_MARK:
          {
            Y.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
        case H.APOSTROPHE:
          {
            Y.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          this._err(j.missingQuoteBeforeDoctypeSystemIdentifier), Y.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(Z);
      }
    }
  }, {
    key: "_stateAfterDoctypeSystemKeyword",
    value: function _stateAfterDoctypeSystemKeyword(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          {
            this.state = W.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
        case H.QUOTATION_MARK:
          {
            this._err(j.missingWhitespaceAfterDoctypeSystemKeyword), Y.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
        case H.APOSTROPHE:
          {
            this._err(j.missingWhitespaceAfterDoctypeSystemKeyword), Y.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.missingDoctypeSystemIdentifier), Y.forceQuirks = !0, this.state = W.DATA, this.emitCurrentDoctype(Y);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          this._err(j.missingQuoteBeforeDoctypeSystemIdentifier), Y.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(Z);
      }
    }
  }, {
    key: "_stateBeforeDoctypeSystemIdentifier",
    value: function _stateBeforeDoctypeSystemIdentifier(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          break;
        case H.QUOTATION_MARK:
          {
            Y.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
        case H.APOSTROPHE:
          {
            Y.systemId = "", this.state = W.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.missingDoctypeSystemIdentifier), Y.forceQuirks = !0, this.state = W.DATA, this.emitCurrentDoctype(Y);
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          this._err(j.missingQuoteBeforeDoctypeSystemIdentifier), Y.forceQuirks = !0, this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(Z);
      }
    }
  }, {
    key: "_stateDoctypeSystemIdentifierDoubleQuoted",
    value: function _stateDoctypeSystemIdentifierDoubleQuoted(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.QUOTATION_MARK:
          {
            this.state = W.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), Y.systemId += $;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.abruptDoctypeSystemIdentifier), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this.state = W.DATA;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          Y.systemId += String.fromCodePoint(Z);
      }
    }
  }, {
    key: "_stateDoctypeSystemIdentifierSingleQuoted",
    value: function _stateDoctypeSystemIdentifierSingleQuoted(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.APOSTROPHE:
          {
            this.state = W.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter), Y.systemId += $;
            break;
          }
        case H.GREATER_THAN_SIGN:
          {
            this._err(j.abruptDoctypeSystemIdentifier), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this.state = W.DATA;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          Y.systemId += String.fromCodePoint(Z);
      }
    }
  }, {
    key: "_stateAfterDoctypeSystemIdentifier",
    value: function _stateAfterDoctypeSystemIdentifier(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.SPACE:
        case H.LINE_FEED:
        case H.TABULATION:
        case H.FORM_FEED:
          break;
        case H.GREATER_THAN_SIGN:
          {
            this.emitCurrentDoctype(Y), this.state = W.DATA;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInDoctype), Y.forceQuirks = !0, this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
          this._err(j.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = W.BOGUS_DOCTYPE, this._stateBogusDoctype(Z);
      }
    }
  }, {
    key: "_stateBogusDoctype",
    value: function _stateBogusDoctype(Z) {
      var Y = this.currentToken;
      switch (Z) {
        case H.GREATER_THAN_SIGN:
          {
            this.emitCurrentDoctype(Y), this.state = W.DATA;
            break;
          }
        case H.NULL:
          {
            this._err(j.unexpectedNullCharacter);
            break;
          }
        case H.EOF:
          {
            this.emitCurrentDoctype(Y), this._emitEOFToken();
            break;
          }
        default:
      }
    }
  }, {
    key: "_stateCdataSection",
    value: function _stateCdataSection(Z) {
      switch (Z) {
        case H.RIGHT_SQUARE_BRACKET:
          {
            this.state = W.CDATA_SECTION_BRACKET;
            break;
          }
        case H.EOF:
          {
            this._err(j.eofInCdata), this._emitEOFToken();
            break;
          }
        default:
          this._emitCodePoint(Z);
      }
    }
  }, {
    key: "_stateCdataSectionBracket",
    value: function _stateCdataSectionBracket(Z) {
      if (Z === H.RIGHT_SQUARE_BRACKET) this.state = W.CDATA_SECTION_END;else this._emitChars("]"), this.state = W.CDATA_SECTION, this._stateCdataSection(Z);
    }
  }, {
    key: "_stateCdataSectionEnd",
    value: function _stateCdataSectionEnd(Z) {
      switch (Z) {
        case H.GREATER_THAN_SIGN:
          {
            this.state = W.DATA;
            break;
          }
        case H.RIGHT_SQUARE_BRACKET:
          {
            this._emitChars("]");
            break;
          }
        default:
          this._emitChars("]]"), this.state = W.CDATA_SECTION, this._stateCdataSection(Z);
      }
    }
  }, {
    key: "_stateCharacterReference",
    value: function _stateCharacterReference() {
      var Z = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
      if (Z < 0) if (this.preprocessor.lastChunkWritten) Z = this.entityDecoder.end();else {
        this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
        return;
      }
      if (Z === 0) this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(H.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && V7(this.preprocessor.peek(1)) ? W.AMBIGUOUS_AMPERSAND : this.returnState;else this.state = this.returnState;
    }
  }, {
    key: "_stateAmbiguousAmpersand",
    value: function _stateAmbiguousAmpersand(Z) {
      if (V7(Z)) this._flushCodePointConsumedAsCharacterReference(Z);else {
        if (Z === H.SEMICOLON) this._err(j.unknownNamedCharacterReference);
        this.state = this.returnState, this._callState(Z);
      }
    }
  }]);
  return H4;
}();
var F7 = new Set([X.DD, X.DT, X.LI, X.OPTGROUP, X.OPTION, X.P, X.RB, X.RP, X.RT, X.RTC]),
  W7 = new Set([].concat(_toConsumableArray(F7), [X.CAPTION, X.COLGROUP, X.TBODY, X.TD, X.TFOOT, X.TH, X.THEAD, X.TR])),
  W4 = new Set([X.APPLET, X.CAPTION, X.HTML, X.MARQUEE, X.OBJECT, X.TABLE, X.TD, X.TEMPLATE, X.TH]),
  z9 = new Set([].concat(_toConsumableArray(W4), [X.OL, X.UL])),
  H9 = new Set([].concat(_toConsumableArray(W4), [X.BUTTON])),
  U7 = new Set([X.ANNOTATION_XML, X.MI, X.MN, X.MO, X.MS, X.MTEXT]),
  B7 = new Set([X.DESC, X.FOREIGN_OBJECT, X.TITLE]),
  W9 = new Set([X.TR, X.TEMPLATE, X.HTML]),
  U9 = new Set([X.TBODY, X.TFOOT, X.THEAD, X.TEMPLATE, X.HTML]),
  B9 = new Set([X.TABLE, X.TEMPLATE, X.HTML]),
  F9 = new Set([X.TD, X.TH]);
var $5 = /*#__PURE__*/function () {
  function $5(Z, Y, J) {
    _classCallCheck(this, $5);
    this.treeAdapter = Y, this.handler = J, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = X.UNKNOWN, this.current = Z;
  }
  _createClass($5, [{
    key: "currentTmplContentOrNode",
    get: function get() {
      return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
    }
  }, {
    key: "_indexOf",
    value: function _indexOf(Z) {
      return this.items.lastIndexOf(Z, this.stackTop);
    }
  }, {
    key: "_isInTemplate",
    value: function _isInTemplate() {
      return this.currentTagId === X.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === L.HTML;
    }
  }, {
    key: "_updateCurrentElement",
    value: function _updateCurrentElement() {
      this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
    }
  }, {
    key: "push",
    value: function push(Z, Y) {
      if (this.stackTop++, this.items[this.stackTop] = Z, this.current = Z, this.tagIDs[this.stackTop] = Y, this.currentTagId = Y, this._isInTemplate()) this.tmplCount++;
      this.handler.onItemPush(Z, Y, !0);
    }
  }, {
    key: "pop",
    value: function pop() {
      var Z = this.current;
      if (this.tmplCount > 0 && this._isInTemplate()) this.tmplCount--;
      this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(Z, !0);
    }
  }, {
    key: "replace",
    value: function replace(Z, Y) {
      var J = this._indexOf(Z);
      if (this.items[J] = Y, J === this.stackTop) this.current = Y;
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(Z, Y, J) {
      var K = this._indexOf(Z) + 1;
      if (this.items.splice(K, 0, Y), this.tagIDs.splice(K, 0, J), this.stackTop++, K === this.stackTop) this._updateCurrentElement();
      if (this.current && this.currentTagId !== void 0) this.handler.onItemPush(this.current, this.currentTagId, K === this.stackTop);
    }
  }, {
    key: "popUntilTagNamePopped",
    value: function popUntilTagNamePopped(Z) {
      var Y = this.stackTop + 1;
      do Y = this.tagIDs.lastIndexOf(Z, Y - 1); while (Y > 0 && this.treeAdapter.getNamespaceURI(this.items[Y]) !== L.HTML);
      this.shortenToLength(Math.max(Y, 0));
    }
  }, {
    key: "shortenToLength",
    value: function shortenToLength(Z) {
      while (this.stackTop >= Z) {
        var Y = this.current;
        if (this.tmplCount > 0 && this._isInTemplate()) this.tmplCount -= 1;
        this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(Y, this.stackTop < Z);
      }
    }
  }, {
    key: "popUntilElementPopped",
    value: function popUntilElementPopped(Z) {
      var Y = this._indexOf(Z);
      this.shortenToLength(Math.max(Y, 0));
    }
  }, {
    key: "popUntilPopped",
    value: function popUntilPopped(Z, Y) {
      var J = this._indexOfTagNames(Z, Y);
      this.shortenToLength(Math.max(J, 0));
    }
  }, {
    key: "popUntilNumberedHeaderPopped",
    value: function popUntilNumberedHeaderPopped() {
      this.popUntilPopped(t0, L.HTML);
    }
  }, {
    key: "popUntilTableCellPopped",
    value: function popUntilTableCellPopped() {
      this.popUntilPopped(F9, L.HTML);
    }
  }, {
    key: "popAllUpToHtmlElement",
    value: function popAllUpToHtmlElement() {
      this.tmplCount = 0, this.shortenToLength(1);
    }
  }, {
    key: "_indexOfTagNames",
    value: function _indexOfTagNames(Z, Y) {
      for (var J = this.stackTop; J >= 0; J--) if (Z.has(this.tagIDs[J]) && this.treeAdapter.getNamespaceURI(this.items[J]) === Y) return J;
      return -1;
    }
  }, {
    key: "clearBackTo",
    value: function clearBackTo(Z, Y) {
      var J = this._indexOfTagNames(Z, Y);
      this.shortenToLength(J + 1);
    }
  }, {
    key: "clearBackToTableContext",
    value: function clearBackToTableContext() {
      this.clearBackTo(B9, L.HTML);
    }
  }, {
    key: "clearBackToTableBodyContext",
    value: function clearBackToTableBodyContext() {
      this.clearBackTo(U9, L.HTML);
    }
  }, {
    key: "clearBackToTableRowContext",
    value: function clearBackToTableRowContext() {
      this.clearBackTo(W9, L.HTML);
    }
  }, {
    key: "remove",
    value: function remove(Z) {
      var Y = this._indexOf(Z);
      if (Y >= 0) if (Y === this.stackTop) this.pop();else this.items.splice(Y, 1), this.tagIDs.splice(Y, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(Z, !1);
    }
  }, {
    key: "tryPeekProperlyNestedBodyElement",
    value: function tryPeekProperlyNestedBodyElement() {
      return this.stackTop >= 1 && this.tagIDs[1] === X.BODY ? this.items[1] : null;
    }
  }, {
    key: "contains",
    value: function contains(Z) {
      return this._indexOf(Z) > -1;
    }
  }, {
    key: "getCommonAncestor",
    value: function getCommonAncestor(Z) {
      var Y = this._indexOf(Z) - 1;
      return Y >= 0 ? this.items[Y] : null;
    }
  }, {
    key: "isRootHtmlElementCurrent",
    value: function isRootHtmlElementCurrent() {
      return this.stackTop === 0 && this.tagIDs[0] === X.HTML;
    }
  }, {
    key: "hasInDynamicScope",
    value: function hasInDynamicScope(Z, Y) {
      for (var J = this.stackTop; J >= 0; J--) {
        var K = this.tagIDs[J];
        switch (this.treeAdapter.getNamespaceURI(this.items[J])) {
          case L.HTML:
            {
              if (K === Z) return !0;
              if (Y.has(K)) return !1;
              break;
            }
          case L.SVG:
            {
              if (B7.has(K)) return !1;
              break;
            }
          case L.MATHML:
            {
              if (U7.has(K)) return !1;
              break;
            }
        }
      }
      return !0;
    }
  }, {
    key: "hasInScope",
    value: function hasInScope(Z) {
      return this.hasInDynamicScope(Z, W4);
    }
  }, {
    key: "hasInListItemScope",
    value: function hasInListItemScope(Z) {
      return this.hasInDynamicScope(Z, z9);
    }
  }, {
    key: "hasInButtonScope",
    value: function hasInButtonScope(Z) {
      return this.hasInDynamicScope(Z, H9);
    }
  }, {
    key: "hasNumberedHeaderInScope",
    value: function hasNumberedHeaderInScope() {
      for (var _Z4 = this.stackTop; _Z4 >= 0; _Z4--) {
        var Y = this.tagIDs[_Z4];
        switch (this.treeAdapter.getNamespaceURI(this.items[_Z4])) {
          case L.HTML:
            {
              if (t0.has(Y)) return !0;
              if (W4.has(Y)) return !1;
              break;
            }
          case L.SVG:
            {
              if (B7.has(Y)) return !1;
              break;
            }
          case L.MATHML:
            {
              if (U7.has(Y)) return !1;
              break;
            }
        }
      }
      return !0;
    }
  }, {
    key: "hasInTableScope",
    value: function hasInTableScope(Z) {
      for (var Y = this.stackTop; Y >= 0; Y--) {
        if (this.treeAdapter.getNamespaceURI(this.items[Y]) !== L.HTML) continue;
        switch (this.tagIDs[Y]) {
          case Z:
            return !0;
          case X.TABLE:
          case X.HTML:
            return !1;
        }
      }
      return !0;
    }
  }, {
    key: "hasTableBodyContextInTableScope",
    value: function hasTableBodyContextInTableScope() {
      for (var _Z5 = this.stackTop; _Z5 >= 0; _Z5--) {
        if (this.treeAdapter.getNamespaceURI(this.items[_Z5]) !== L.HTML) continue;
        switch (this.tagIDs[_Z5]) {
          case X.TBODY:
          case X.THEAD:
          case X.TFOOT:
            return !0;
          case X.TABLE:
          case X.HTML:
            return !1;
        }
      }
      return !0;
    }
  }, {
    key: "hasInSelectScope",
    value: function hasInSelectScope(Z) {
      for (var Y = this.stackTop; Y >= 0; Y--) {
        if (this.treeAdapter.getNamespaceURI(this.items[Y]) !== L.HTML) continue;
        switch (this.tagIDs[Y]) {
          case Z:
            return !0;
          case X.OPTION:
          case X.OPTGROUP:
            break;
          default:
            return !1;
        }
      }
      return !0;
    }
  }, {
    key: "generateImpliedEndTags",
    value: function generateImpliedEndTags() {
      while (this.currentTagId !== void 0 && F7.has(this.currentTagId)) this.pop();
    }
  }, {
    key: "generateImpliedEndTagsThoroughly",
    value: function generateImpliedEndTagsThoroughly() {
      while (this.currentTagId !== void 0 && W7.has(this.currentTagId)) this.pop();
    }
  }, {
    key: "generateImpliedEndTagsWithExclusion",
    value: function generateImpliedEndTagsWithExclusion(Z) {
      while (this.currentTagId !== void 0 && this.currentTagId !== Z && W7.has(this.currentTagId)) this.pop();
    }
  }]);
  return $5;
}();
var X0;
(function (Z) {
  Z[Z.Marker = 0] = "Marker", Z[Z.Element = 1] = "Element";
})(X0 || (X0 = {}));
var w7 = {
  type: X0.Marker
};
var u5 = /*#__PURE__*/function () {
  function u5(Z) {
    _classCallCheck(this, u5);
    this.treeAdapter = Z, this.entries = [], this.bookmark = null;
  }
  _createClass(u5, [{
    key: "_getNoahArkConditionCandidates",
    value: function _getNoahArkConditionCandidates(Z, Y) {
      var J = [],
        K = Y.length,
        Q = this.treeAdapter.getTagName(Z),
        V = this.treeAdapter.getNamespaceURI(Z);
      for (var z = 0; z < this.entries.length; z++) {
        var B = this.entries[z];
        if (B.type === X0.Marker) break;
        var F = B.element;
        if (this.treeAdapter.getTagName(F) === Q && this.treeAdapter.getNamespaceURI(F) === V) {
          var q = this.treeAdapter.getAttrList(F);
          if (q.length === K) J.push({
            idx: z,
            attrs: q
          });
        }
      }
      return J;
    }
  }, {
    key: "_ensureNoahArkCondition",
    value: function _ensureNoahArkCondition(Z) {
      if (this.entries.length < 3) return;
      var Y = this.treeAdapter.getAttrList(Z),
        J = this._getNoahArkConditionCandidates(Z, Y);
      if (J.length < 3) return;
      var K = new Map(Y.map(function (V) {
          return [V.name, V.value];
        })),
        Q = 0;
      for (var V = 0; V < J.length; V++) {
        var z = J[V];
        if (z.attrs.every(function (B) {
          return K.get(B.name) === B.value;
        })) {
          if (Q += 1, Q >= 3) this.entries.splice(z.idx, 1);
        }
      }
    }
  }, {
    key: "insertMarker",
    value: function insertMarker() {
      this.entries.unshift(w7);
    }
  }, {
    key: "pushElement",
    value: function pushElement(Z, Y) {
      this._ensureNoahArkCondition(Z), this.entries.unshift({
        type: X0.Element,
        element: Z,
        token: Y
      });
    }
  }, {
    key: "insertElementAfterBookmark",
    value: function insertElementAfterBookmark(Z, Y) {
      var J = this.entries.indexOf(this.bookmark);
      this.entries.splice(J, 0, {
        type: X0.Element,
        element: Z,
        token: Y
      });
    }
  }, {
    key: "removeEntry",
    value: function removeEntry(Z) {
      var Y = this.entries.indexOf(Z);
      if (Y !== -1) this.entries.splice(Y, 1);
    }
  }, {
    key: "clearToLastMarker",
    value: function clearToLastMarker() {
      var Z = this.entries.indexOf(w7);
      if (Z === -1) this.entries.length = 0;else this.entries.splice(0, Z + 1);
    }
  }, {
    key: "getElementEntryInScopeWithTagName",
    value: function getElementEntryInScopeWithTagName(Z) {
      var _this27 = this;
      var Y = this.entries.find(function (J) {
        return J.type === X0.Marker || _this27.treeAdapter.getTagName(J.element) === Z;
      });
      return Y && Y.type === X0.Element ? Y : null;
    }
  }, {
    key: "getElementEntry",
    value: function getElementEntry(Z) {
      return this.entries.find(function (Y) {
        return Y.type === X0.Element && Y.element === Z;
      });
    }
  }]);
  return u5;
}();
var Z0 = {
  createDocument: function createDocument() {
    return {
      nodeName: "#document",
      mode: T.NO_QUIRKS,
      childNodes: []
    };
  },
  createDocumentFragment: function createDocumentFragment() {
    return {
      nodeName: "#document-fragment",
      childNodes: []
    };
  },
  createElement: function createElement(Z, Y, J) {
    return {
      nodeName: Z,
      tagName: Z,
      attrs: J,
      namespaceURI: Y,
      childNodes: [],
      parentNode: null
    };
  },
  createCommentNode: function createCommentNode(Z) {
    return {
      nodeName: "#comment",
      data: Z,
      parentNode: null
    };
  },
  createTextNode: function createTextNode(Z) {
    return {
      nodeName: "#text",
      value: Z,
      parentNode: null
    };
  },
  appendChild: function appendChild(Z, Y) {
    Z.childNodes.push(Y), Y.parentNode = Z;
  },
  insertBefore: function insertBefore(Z, Y, J) {
    var K = Z.childNodes.indexOf(J);
    Z.childNodes.splice(K, 0, Y), Y.parentNode = Z;
  },
  setTemplateContent: function setTemplateContent(Z, Y) {
    Z.content = Y;
  },
  getTemplateContent: function getTemplateContent(Z) {
    return Z.content;
  },
  setDocumentType: function setDocumentType(Z, Y, J, K) {
    var Q = Z.childNodes.find(function (V) {
      return V.nodeName === "#documentType";
    });
    if (Q) Q.name = Y, Q.publicId = J, Q.systemId = K;else {
      var V = {
        nodeName: "#documentType",
        name: Y,
        publicId: J,
        systemId: K,
        parentNode: null
      };
      Z0.appendChild(Z, V);
    }
  },
  setDocumentMode: function setDocumentMode(Z, Y) {
    Z.mode = Y;
  },
  getDocumentMode: function getDocumentMode(Z) {
    return Z.mode;
  },
  detachNode: function detachNode(Z) {
    if (Z.parentNode) {
      var Y = Z.parentNode.childNodes.indexOf(Z);
      Z.parentNode.childNodes.splice(Y, 1), Z.parentNode = null;
    }
  },
  insertText: function insertText(Z, Y) {
    if (Z.childNodes.length > 0) {
      var J = Z.childNodes[Z.childNodes.length - 1];
      if (Z0.isTextNode(J)) {
        J.value += Y;
        return;
      }
    }
    Z0.appendChild(Z, Z0.createTextNode(Y));
  },
  insertTextBefore: function insertTextBefore(Z, Y, J) {
    var K = Z.childNodes[Z.childNodes.indexOf(J) - 1];
    if (K && Z0.isTextNode(K)) K.value += Y;else Z0.insertBefore(Z, Z0.createTextNode(Y), J);
  },
  adoptAttributes: function adoptAttributes(Z, Y) {
    var J = new Set(Z.attrs.map(function (K) {
      return K.name;
    }));
    for (var K = 0; K < Y.length; K++) if (!J.has(Y[K].name)) Z.attrs.push(Y[K]);
  },
  getFirstChild: function getFirstChild(Z) {
    return Z.childNodes[0];
  },
  getChildNodes: function getChildNodes(Z) {
    return Z.childNodes;
  },
  getParentNode: function getParentNode(Z) {
    return Z.parentNode;
  },
  getAttrList: function getAttrList(Z) {
    return Z.attrs;
  },
  getTagName: function getTagName(Z) {
    return Z.tagName;
  },
  getNamespaceURI: function getNamespaceURI(Z) {
    return Z.namespaceURI;
  },
  getTextNodeContent: function getTextNodeContent(Z) {
    return Z.value;
  },
  getCommentNodeContent: function getCommentNodeContent(Z) {
    return Z.data;
  },
  getDocumentTypeNodeName: function getDocumentTypeNodeName(Z) {
    return Z.name;
  },
  getDocumentTypeNodePublicId: function getDocumentTypeNodePublicId(Z) {
    return Z.publicId;
  },
  getDocumentTypeNodeSystemId: function getDocumentTypeNodeSystemId(Z) {
    return Z.systemId;
  },
  isTextNode: function isTextNode(Z) {
    return Z.nodeName === "#text";
  },
  isCommentNode: function isCommentNode(Z) {
    return Z.nodeName === "#comment";
  },
  isDocumentTypeNode: function isDocumentTypeNode(Z) {
    return Z.nodeName === "#documentType";
  },
  isElementNode: function isElementNode(Z) {
    return Object.prototype.hasOwnProperty.call(Z, "tagName");
  },
  setNodeSourceCodeLocation: function setNodeSourceCodeLocation(Z, Y) {
    Z.sourceCodeLocation = Y;
  },
  getNodeSourceCodeLocation: function getNodeSourceCodeLocation(Z) {
    return Z.sourceCodeLocation;
  },
  updateNodeSourceCodeLocation: function updateNodeSourceCodeLocation(Z, Y) {
    Z.sourceCodeLocation = _objectSpread(_objectSpread({}, Z.sourceCodeLocation), Y);
  }
};
var j7 = "html",
  w9 = "about:legacy-compat",
  q9 = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",
  L7 = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"],
  j9 = [].concat(L7, ["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]),
  L9 = new Set(["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"]),
  R7 = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"],
  R9 = [].concat(R7, ["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]);
function q7(Z, Y) {
  return Y.some(function (J) {
    return Z.startsWith(J);
  });
}
function P7(Z) {
  return Z.name === j7 && Z.publicId === null && (Z.systemId === null || Z.systemId === w9);
}
function v7(Z) {
  if (Z.name !== j7) return T.QUIRKS;
  var Y = Z.systemId;
  if (Y && Y.toLowerCase() === q9) return T.QUIRKS;
  var J = Z.publicId;
  if (J !== null) {
    if (J = J.toLowerCase(), L9.has(J)) return T.QUIRKS;
    var K = Y === null ? j9 : L7;
    if (q7(J, K)) return T.QUIRKS;
    if (K = Y === null ? R7 : R9, q7(J, K)) return T.LIMITED_QUIRKS;
  }
  return T.NO_QUIRKS;
}
var O7 = {
    TEXT_HTML: "text/html",
    APPLICATION_XML: "application/xhtml+xml"
  },
  v9 = "definitionurl",
  O9 = "definitionURL",
  y9 = new Map(["attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (Z) {
    return [Z.toLowerCase(), Z];
  })),
  f9 = new Map([["xlink:actuate", {
    prefix: "xlink",
    name: "actuate",
    namespace: L.XLINK
  }], ["xlink:arcrole", {
    prefix: "xlink",
    name: "arcrole",
    namespace: L.XLINK
  }], ["xlink:href", {
    prefix: "xlink",
    name: "href",
    namespace: L.XLINK
  }], ["xlink:role", {
    prefix: "xlink",
    name: "role",
    namespace: L.XLINK
  }], ["xlink:show", {
    prefix: "xlink",
    name: "show",
    namespace: L.XLINK
  }], ["xlink:title", {
    prefix: "xlink",
    name: "title",
    namespace: L.XLINK
  }], ["xlink:type", {
    prefix: "xlink",
    name: "type",
    namespace: L.XLINK
  }], ["xml:lang", {
    prefix: "xml",
    name: "lang",
    namespace: L.XML
  }], ["xml:space", {
    prefix: "xml",
    name: "space",
    namespace: L.XML
  }], ["xmlns", {
    prefix: "",
    name: "xmlns",
    namespace: L.XMLNS
  }], ["xmlns:xlink", {
    prefix: "xmlns",
    name: "xlink",
    namespace: L.XMLNS
  }]]),
  b9 = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (Z) {
    return [Z.toLowerCase(), Z];
  })),
  g9 = new Set([X.B, X.BIG, X.BLOCKQUOTE, X.BODY, X.BR, X.CENTER, X.CODE, X.DD, X.DIV, X.DL, X.DT, X.EM, X.EMBED, X.H1, X.H2, X.H3, X.H4, X.H5, X.H6, X.HEAD, X.HR, X.I, X.IMG, X.LI, X.LISTING, X.MENU, X.META, X.NOBR, X.OL, X.P, X.PRE, X.RUBY, X.S, X.SMALL, X.SPAN, X.STRONG, X.STRIKE, X.SUB, X.SUP, X.TABLE, X.TT, X.U, X.UL, X.VAR]);
function y7(Z) {
  var Y = Z.tagID;
  return Y === X.FONT && Z.attrs.some(function (_ref22) {
    var K = _ref22.name;
    return K === H0.COLOR || K === H0.SIZE || K === H0.FACE;
  }) || g9.has(Y);
}
function E5(Z) {
  for (var Y = 0; Y < Z.attrs.length; Y++) if (Z.attrs[Y].name === v9) {
    Z.attrs[Y].name = O9;
    break;
  }
}
function I5(Z) {
  for (var Y = 0; Y < Z.attrs.length; Y++) {
    var J = y9.get(Z.attrs[Y].name);
    if (J != null) Z.attrs[Y].name = J;
  }
}
function U4(Z) {
  for (var Y = 0; Y < Z.attrs.length; Y++) {
    var J = f9.get(Z.attrs[Y].name);
    if (J) Z.attrs[Y].prefix = J.prefix, Z.attrs[Y].name = J.name, Z.attrs[Y].namespace = J.namespace;
  }
}
function f7(Z) {
  var Y = b9.get(Z.tagName);
  if (Y != null) Z.tagName = Y, Z.tagID = g0(Z.tagName);
}
function N9(Z, Y) {
  return Y === L.MATHML && (Z === X.MI || Z === X.MO || Z === X.MN || Z === X.MS || Z === X.MTEXT);
}
function M9(Z, Y, J) {
  if (Y === L.MATHML && Z === X.ANNOTATION_XML) {
    for (var K = 0; K < J.length; K++) if (J[K].name === H0.ENCODING) {
      var Q = J[K].value.toLowerCase();
      return Q === O7.TEXT_HTML || Q === O7.APPLICATION_XML;
    }
  }
  return Y === L.SVG && (Z === X.FOREIGN_OBJECT || Z === X.DESC || Z === X.TITLE);
}
function b7(Z, Y, J, K) {
  return (!K || K === L.HTML) && M9(Z, Y, J) || (!K || K === L.MATHML) && N9(Z, Y);
}
var x9 = "hidden",
  h9 = 8,
  C9 = 3,
  U;
(function (Z) {
  Z[Z.INITIAL = 0] = "INITIAL", Z[Z.BEFORE_HTML = 1] = "BEFORE_HTML", Z[Z.BEFORE_HEAD = 2] = "BEFORE_HEAD", Z[Z.IN_HEAD = 3] = "IN_HEAD", Z[Z.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", Z[Z.AFTER_HEAD = 5] = "AFTER_HEAD", Z[Z.IN_BODY = 6] = "IN_BODY", Z[Z.TEXT = 7] = "TEXT", Z[Z.IN_TABLE = 8] = "IN_TABLE", Z[Z.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", Z[Z.IN_CAPTION = 10] = "IN_CAPTION", Z[Z.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", Z[Z.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", Z[Z.IN_ROW = 13] = "IN_ROW", Z[Z.IN_CELL = 14] = "IN_CELL", Z[Z.IN_SELECT = 15] = "IN_SELECT", Z[Z.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", Z[Z.IN_TEMPLATE = 17] = "IN_TEMPLATE", Z[Z.AFTER_BODY = 18] = "AFTER_BODY", Z[Z.IN_FRAMESET = 19] = "IN_FRAMESET", Z[Z.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", Z[Z.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", Z[Z.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(U || (U = {}));
var D9 = {
    startLine: -1,
    startCol: -1,
    startOffset: -1,
    endLine: -1,
    endCol: -1,
    endOffset: -1
  },
  h7 = new Set([X.TABLE, X.TBODY, X.TFOOT, X.THEAD, X.TR]),
  N7 = {
    scriptingEnabled: !0,
    sourceCodeLocationInfo: !1,
    treeAdapter: Z0,
    onParseError: null
  };
var b1 = /*#__PURE__*/function () {
  function b1(Z, Y) {
    var J = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var K = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    _classCallCheck(this, b1);
    if (this.fragmentContext = J, this.scriptHandler = K, this.currentToken = null, this.stopped = !1, this.insertionMode = U.INITIAL, this.originalInsertionMode = U.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = _objectSpread(_objectSpread({}, N7), Z), this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError) this.options.sourceCodeLocationInfo = !0;
    this.document = Y !== null && Y !== void 0 ? Y : this.treeAdapter.createDocument(), this.tokenizer = new H4(this.options, this), this.activeFormattingElements = new u5(this.treeAdapter), this.fragmentContextID = J ? g0(this.treeAdapter.getTagName(J)) : X.UNKNOWN, this._setContextModes(J !== null && J !== void 0 ? J : this.document, this.fragmentContextID), this.openElements = new $5(this.document, this.treeAdapter, this);
  }
  _createClass(b1, [{
    key: "getFragment",
    value: function getFragment() {
      var Z = this.treeAdapter.getFirstChild(this.document),
        Y = this.treeAdapter.createDocumentFragment();
      return this._adoptNodes(Z, Y), Y;
    }
  }, {
    key: "_err",
    value: function _err(Z, Y, J) {
      var K;
      if (!this.onParseError) return;
      var Q = (K = Z.location) !== null && K !== void 0 ? K : D9,
        V = {
          code: Y,
          startLine: Q.startLine,
          startCol: Q.startCol,
          startOffset: Q.startOffset,
          endLine: J ? Q.startLine : Q.endLine,
          endCol: J ? Q.startCol : Q.endCol,
          endOffset: J ? Q.startOffset : Q.endOffset
        };
      this.onParseError(V);
    }
  }, {
    key: "onItemPush",
    value: function onItemPush(Z, Y, J) {
      var K, Q;
      if ((Q = (K = this.treeAdapter).onItemPush) === null || Q === void 0 || Q.call(K, Z), J && this.openElements.stackTop > 0) this._setContextModes(Z, Y);
    }
  }, {
    key: "onItemPop",
    value: function onItemPop(Z, Y) {
      var J, K;
      if (this.options.sourceCodeLocationInfo) this._setEndLocation(Z, this.currentToken);
      if ((K = (J = this.treeAdapter).onItemPop) === null || K === void 0 || K.call(J, Z, this.openElements.current), Y) {
        var Q, V;
        if (this.openElements.stackTop === 0 && this.fragmentContext) Q = this.fragmentContext, V = this.fragmentContextID;else {
          var _this$openElements = this.openElements;
          Q = _this$openElements.current;
          V = _this$openElements.currentTagId;
        }
        this._setContextModes(Q, V);
      }
    }
  }, {
    key: "_setContextModes",
    value: function _setContextModes(Z, Y) {
      var J = Z === this.document || Z && this.treeAdapter.getNamespaceURI(Z) === L.HTML;
      this.currentNotInHTML = !J, this.tokenizer.inForeignNode = !J && Z !== void 0 && Y !== void 0 && !this._isIntegrationPoint(Y, Z);
    }
  }, {
    key: "_switchToTextParsing",
    value: function _switchToTextParsing(Z, Y) {
      this._insertElement(Z, L.HTML), this.tokenizer.state = Y, this.originalInsertionMode = this.insertionMode, this.insertionMode = U.TEXT;
    }
  }, {
    key: "switchToPlaintextParsing",
    value: function switchToPlaintextParsing() {
      this.insertionMode = U.TEXT, this.originalInsertionMode = U.IN_BODY, this.tokenizer.state = m.PLAINTEXT;
    }
  }, {
    key: "_getAdjustedCurrentElement",
    value: function _getAdjustedCurrentElement() {
      return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
    }
  }, {
    key: "_findFormInFragmentContext",
    value: function _findFormInFragmentContext() {
      var Z = this.fragmentContext;
      while (Z) {
        if (this.treeAdapter.getTagName(Z) === w.FORM) {
          this.formElement = Z;
          break;
        }
        Z = this.treeAdapter.getParentNode(Z);
      }
    }
  }, {
    key: "_initTokenizerForFragmentParsing",
    value: function _initTokenizerForFragmentParsing() {
      if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== L.HTML) return;
      switch (this.fragmentContextID) {
        case X.TITLE:
        case X.TEXTAREA:
          {
            this.tokenizer.state = m.RCDATA;
            break;
          }
        case X.STYLE:
        case X.XMP:
        case X.IFRAME:
        case X.NOEMBED:
        case X.NOFRAMES:
        case X.NOSCRIPT:
          {
            this.tokenizer.state = m.RAWTEXT;
            break;
          }
        case X.SCRIPT:
          {
            this.tokenizer.state = m.SCRIPT_DATA;
            break;
          }
        case X.PLAINTEXT:
          {
            this.tokenizer.state = m.PLAINTEXT;
            break;
          }
        default:
      }
    }
  }, {
    key: "_setDocumentType",
    value: function _setDocumentType(Z) {
      var _this28 = this;
      var Y = Z.name || "",
        J = Z.publicId || "",
        K = Z.systemId || "";
      if (this.treeAdapter.setDocumentType(this.document, Y, J, K), Z.location) {
        var V = this.treeAdapter.getChildNodes(this.document).find(function (z) {
          return _this28.treeAdapter.isDocumentTypeNode(z);
        });
        if (V) this.treeAdapter.setNodeSourceCodeLocation(V, Z.location);
      }
    }
  }, {
    key: "_attachElementToTree",
    value: function _attachElementToTree(Z, Y) {
      if (this.options.sourceCodeLocationInfo) {
        var J = Y && _objectSpread(_objectSpread({}, Y), {}, {
          startTag: Y
        });
        this.treeAdapter.setNodeSourceCodeLocation(Z, J);
      }
      if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(Z);else {
        var _J3 = this.openElements.currentTmplContentOrNode;
        this.treeAdapter.appendChild(_J3 !== null && _J3 !== void 0 ? _J3 : this.document, Z);
      }
    }
  }, {
    key: "_appendElement",
    value: function _appendElement(Z, Y) {
      var J = this.treeAdapter.createElement(Z.tagName, Y, Z.attrs);
      this._attachElementToTree(J, Z.location);
    }
  }, {
    key: "_insertElement",
    value: function _insertElement(Z, Y) {
      var J = this.treeAdapter.createElement(Z.tagName, Y, Z.attrs);
      this._attachElementToTree(J, Z.location), this.openElements.push(J, Z.tagID);
    }
  }, {
    key: "_insertFakeElement",
    value: function _insertFakeElement(Z, Y) {
      var J = this.treeAdapter.createElement(Z, L.HTML, []);
      this._attachElementToTree(J, null), this.openElements.push(J, Y);
    }
  }, {
    key: "_insertTemplate",
    value: function _insertTemplate(Z) {
      var Y = this.treeAdapter.createElement(Z.tagName, L.HTML, Z.attrs),
        J = this.treeAdapter.createDocumentFragment();
      if (this.treeAdapter.setTemplateContent(Y, J), this._attachElementToTree(Y, Z.location), this.openElements.push(Y, Z.tagID), this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(J, null);
    }
  }, {
    key: "_insertFakeRootElement",
    value: function _insertFakeRootElement() {
      var Z = this.treeAdapter.createElement(w.HTML, L.HTML, []);
      if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(Z, null);
      this.treeAdapter.appendChild(this.openElements.current, Z), this.openElements.push(Z, X.HTML);
    }
  }, {
    key: "_appendCommentNode",
    value: function _appendCommentNode(Z, Y) {
      var J = this.treeAdapter.createCommentNode(Z.data);
      if (this.treeAdapter.appendChild(Y, J), this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(J, Z.location);
    }
  }, {
    key: "_insertCharacters",
    value: function _insertCharacters(Z) {
      var _this$_findFosterPare;
      var Y, J;
      if (this._shouldFosterParentOnInsertion()) {
        if ((_this$_findFosterPare = this._findFosterParentingLocation(), Y = _this$_findFosterPare.parent, J = _this$_findFosterPare.beforeElement), J) this.treeAdapter.insertTextBefore(Y, Z.chars, J);else this.treeAdapter.insertText(Y, Z.chars);
      } else Y = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(Y, Z.chars);
      if (!Z.location) return;
      var K = this.treeAdapter.getChildNodes(Y),
        Q = J ? K.lastIndexOf(J) : K.length,
        V = K[Q - 1];
      if (this.treeAdapter.getNodeSourceCodeLocation(V)) {
        var _Z$location = Z.location,
          B = _Z$location.endLine,
          F = _Z$location.endCol,
          q = _Z$location.endOffset;
        this.treeAdapter.updateNodeSourceCodeLocation(V, {
          endLine: B,
          endCol: F,
          endOffset: q
        });
      } else if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(V, Z.location);
    }
  }, {
    key: "_adoptNodes",
    value: function _adoptNodes(Z, Y) {
      for (var J = this.treeAdapter.getFirstChild(Z); J; J = this.treeAdapter.getFirstChild(Z)) this.treeAdapter.detachNode(J), this.treeAdapter.appendChild(Y, J);
    }
  }, {
    key: "_setEndLocation",
    value: function _setEndLocation(Z, Y) {
      if (this.treeAdapter.getNodeSourceCodeLocation(Z) && Y.location) {
        var J = Y.location,
          K = this.treeAdapter.getTagName(Z),
          Q = Y.type === h.END_TAG && K === Y.tagName ? {
            endTag: _objectSpread({}, J),
            endLine: J.endLine,
            endCol: J.endCol,
            endOffset: J.endOffset
          } : {
            endLine: J.startLine,
            endCol: J.startCol,
            endOffset: J.startOffset
          };
        this.treeAdapter.updateNodeSourceCodeLocation(Z, Q);
      }
    }
  }, {
    key: "shouldProcessStartTagTokenInForeignContent",
    value: function shouldProcessStartTagTokenInForeignContent(Z) {
      if (!this.currentNotInHTML) return !1;
      var Y, J;
      if (this.openElements.stackTop === 0 && this.fragmentContext) Y = this.fragmentContext, J = this.fragmentContextID;else {
        var _this$openElements2 = this.openElements;
        Y = _this$openElements2.current;
        J = _this$openElements2.currentTagId;
      }
      if (Z.tagID === X.SVG && this.treeAdapter.getTagName(Y) === w.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(Y) === L.MATHML) return !1;
      return this.tokenizer.inForeignNode || (Z.tagID === X.MGLYPH || Z.tagID === X.MALIGNMARK) && J !== void 0 && !this._isIntegrationPoint(J, Y, L.HTML);
    }
  }, {
    key: "_processToken",
    value: function _processToken(Z) {
      switch (Z.type) {
        case h.CHARACTER:
          {
            this.onCharacter(Z);
            break;
          }
        case h.NULL_CHARACTER:
          {
            this.onNullCharacter(Z);
            break;
          }
        case h.COMMENT:
          {
            this.onComment(Z);
            break;
          }
        case h.DOCTYPE:
          {
            this.onDoctype(Z);
            break;
          }
        case h.START_TAG:
          {
            this._processStartTag(Z);
            break;
          }
        case h.END_TAG:
          {
            this.onEndTag(Z);
            break;
          }
        case h.EOF:
          {
            this.onEof(Z);
            break;
          }
        case h.WHITESPACE_CHARACTER:
          {
            this.onWhitespaceCharacter(Z);
            break;
          }
      }
    }
  }, {
    key: "_isIntegrationPoint",
    value: function _isIntegrationPoint(Z, Y, J) {
      var K = this.treeAdapter.getNamespaceURI(Y),
        Q = this.treeAdapter.getAttrList(Y);
      return b7(Z, K, Q, J);
    }
  }, {
    key: "_reconstructActiveFormattingElements",
    value: function _reconstructActiveFormattingElements() {
      var _this29 = this;
      var Z = this.activeFormattingElements.entries.length;
      if (Z) {
        var Y = this.activeFormattingElements.entries.findIndex(function (K) {
            return K.type === X0.Marker || _this29.openElements.contains(K.element);
          }),
          J = Y === -1 ? Z - 1 : Y - 1;
        for (var K = J; K >= 0; K--) {
          var Q = this.activeFormattingElements.entries[K];
          this._insertElement(Q.token, this.treeAdapter.getNamespaceURI(Q.element)), Q.element = this.openElements.current;
        }
      }
    }
  }, {
    key: "_closeTableCell",
    value: function _closeTableCell() {
      this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = U.IN_ROW;
    }
  }, {
    key: "_closePElement",
    value: function _closePElement() {
      this.openElements.generateImpliedEndTagsWithExclusion(X.P), this.openElements.popUntilTagNamePopped(X.P);
    }
  }, {
    key: "_resetInsertionMode",
    value: function _resetInsertionMode() {
      for (var _Z6 = this.openElements.stackTop; _Z6 >= 0; _Z6--) switch (_Z6 === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[_Z6]) {
        case X.TR:
          {
            this.insertionMode = U.IN_ROW;
            return;
          }
        case X.TBODY:
        case X.THEAD:
        case X.TFOOT:
          {
            this.insertionMode = U.IN_TABLE_BODY;
            return;
          }
        case X.CAPTION:
          {
            this.insertionMode = U.IN_CAPTION;
            return;
          }
        case X.COLGROUP:
          {
            this.insertionMode = U.IN_COLUMN_GROUP;
            return;
          }
        case X.TABLE:
          {
            this.insertionMode = U.IN_TABLE;
            return;
          }
        case X.BODY:
          {
            this.insertionMode = U.IN_BODY;
            return;
          }
        case X.FRAMESET:
          {
            this.insertionMode = U.IN_FRAMESET;
            return;
          }
        case X.SELECT:
          {
            this._resetInsertionModeForSelect(_Z6);
            return;
          }
        case X.TEMPLATE:
          {
            this.insertionMode = this.tmplInsertionModeStack[0];
            return;
          }
        case X.HTML:
          {
            this.insertionMode = this.headElement ? U.AFTER_HEAD : U.BEFORE_HEAD;
            return;
          }
        case X.TD:
        case X.TH:
          {
            if (_Z6 > 0) {
              this.insertionMode = U.IN_CELL;
              return;
            }
            break;
          }
        case X.HEAD:
          {
            if (_Z6 > 0) {
              this.insertionMode = U.IN_HEAD;
              return;
            }
            break;
          }
      }
      this.insertionMode = U.IN_BODY;
    }
  }, {
    key: "_resetInsertionModeForSelect",
    value: function _resetInsertionModeForSelect(Z) {
      if (Z > 0) for (var Y = Z - 1; Y > 0; Y--) {
        var J = this.openElements.tagIDs[Y];
        if (J === X.TEMPLATE) break;else if (J === X.TABLE) {
          this.insertionMode = U.IN_SELECT_IN_TABLE;
          return;
        }
      }
      this.insertionMode = U.IN_SELECT;
    }
  }, {
    key: "_isElementCausesFosterParenting",
    value: function _isElementCausesFosterParenting(Z) {
      return h7.has(Z);
    }
  }, {
    key: "_shouldFosterParentOnInsertion",
    value: function _shouldFosterParentOnInsertion() {
      return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
    }
  }, {
    key: "_findFosterParentingLocation",
    value: function _findFosterParentingLocation() {
      for (var _Z7 = this.openElements.stackTop; _Z7 >= 0; _Z7--) {
        var Y = this.openElements.items[_Z7];
        switch (this.openElements.tagIDs[_Z7]) {
          case X.TEMPLATE:
            {
              if (this.treeAdapter.getNamespaceURI(Y) === L.HTML) return {
                parent: this.treeAdapter.getTemplateContent(Y),
                beforeElement: null
              };
              break;
            }
          case X.TABLE:
            {
              var J = this.treeAdapter.getParentNode(Y);
              if (J) return {
                parent: J,
                beforeElement: Y
              };
              return {
                parent: this.openElements.items[_Z7 - 1],
                beforeElement: null
              };
            }
          default:
        }
      }
      return {
        parent: this.openElements.items[0],
        beforeElement: null
      };
    }
  }, {
    key: "_fosterParentElement",
    value: function _fosterParentElement(Z) {
      var Y = this._findFosterParentingLocation();
      if (Y.beforeElement) this.treeAdapter.insertBefore(Y.parent, Z, Y.beforeElement);else this.treeAdapter.appendChild(Y.parent, Z);
    }
  }, {
    key: "_isSpecialElement",
    value: function _isSpecialElement(Z, Y) {
      var J = this.treeAdapter.getNamespaceURI(Z);
      return D5[J].has(Y);
    }
  }, {
    key: "onCharacter",
    value: function onCharacter(Z) {
      if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
        V6(this, Z);
        return;
      }
      switch (this.insertionMode) {
        case U.INITIAL:
          {
            j1(this, Z);
            break;
          }
        case U.BEFORE_HTML:
          {
            R1(this, Z);
            break;
          }
        case U.BEFORE_HEAD:
          {
            P1(this, Z);
            break;
          }
        case U.IN_HEAD:
          {
            v1(this, Z);
            break;
          }
        case U.IN_HEAD_NO_SCRIPT:
          {
            O1(this, Z);
            break;
          }
        case U.AFTER_HEAD:
          {
            y1(this, Z);
            break;
          }
        case U.IN_BODY:
        case U.IN_CAPTION:
        case U.IN_CELL:
        case U.IN_TEMPLATE:
          {
            D7(this, Z);
            break;
          }
        case U.TEXT:
        case U.IN_SELECT:
        case U.IN_SELECT_IN_TABLE:
          {
            this._insertCharacters(Z);
            break;
          }
        case U.IN_TABLE:
        case U.IN_TABLE_BODY:
        case U.IN_ROW:
          {
            S5(this, Z);
            break;
          }
        case U.IN_TABLE_TEXT:
          {
            S7(this, Z);
            break;
          }
        case U.IN_COLUMN_GROUP:
          {
            F4(this, Z);
            break;
          }
        case U.AFTER_BODY:
          {
            w4(this, Z);
            break;
          }
        case U.AFTER_AFTER_BODY:
          {
            B4(this, Z);
            break;
          }
        default:
      }
    }
  }, {
    key: "onNullCharacter",
    value: function onNullCharacter(Z) {
      if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
        Q6(this, Z);
        return;
      }
      switch (this.insertionMode) {
        case U.INITIAL:
          {
            j1(this, Z);
            break;
          }
        case U.BEFORE_HTML:
          {
            R1(this, Z);
            break;
          }
        case U.BEFORE_HEAD:
          {
            P1(this, Z);
            break;
          }
        case U.IN_HEAD:
          {
            v1(this, Z);
            break;
          }
        case U.IN_HEAD_NO_SCRIPT:
          {
            O1(this, Z);
            break;
          }
        case U.AFTER_HEAD:
          {
            y1(this, Z);
            break;
          }
        case U.TEXT:
          {
            this._insertCharacters(Z);
            break;
          }
        case U.IN_TABLE:
        case U.IN_TABLE_BODY:
        case U.IN_ROW:
          {
            S5(this, Z);
            break;
          }
        case U.IN_COLUMN_GROUP:
          {
            F4(this, Z);
            break;
          }
        case U.AFTER_BODY:
          {
            w4(this, Z);
            break;
          }
        case U.AFTER_AFTER_BODY:
          {
            B4(this, Z);
            break;
          }
        default:
      }
    }
  }, {
    key: "onComment",
    value: function onComment(Z) {
      if (this.skipNextNewLine = !1, this.currentNotInHTML) {
        k5(this, Z);
        return;
      }
      switch (this.insertionMode) {
        case U.INITIAL:
        case U.BEFORE_HTML:
        case U.BEFORE_HEAD:
        case U.IN_HEAD:
        case U.IN_HEAD_NO_SCRIPT:
        case U.AFTER_HEAD:
        case U.IN_BODY:
        case U.IN_TABLE:
        case U.IN_CAPTION:
        case U.IN_COLUMN_GROUP:
        case U.IN_TABLE_BODY:
        case U.IN_ROW:
        case U.IN_CELL:
        case U.IN_SELECT:
        case U.IN_SELECT_IN_TABLE:
        case U.IN_TEMPLATE:
        case U.IN_FRAMESET:
        case U.AFTER_FRAMESET:
          {
            k5(this, Z);
            break;
          }
        case U.IN_TABLE_TEXT:
          {
            L1(this, Z);
            break;
          }
        case U.AFTER_BODY:
          {
            k9(this, Z);
            break;
          }
        case U.AFTER_AFTER_BODY:
        case U.AFTER_AFTER_FRAMESET:
          {
            _9(this, Z);
            break;
          }
        default:
      }
    }
  }, {
    key: "onDoctype",
    value: function onDoctype(Z) {
      switch (this.skipNextNewLine = !1, this.insertionMode) {
        case U.INITIAL:
          {
            A9(this, Z);
            break;
          }
        case U.BEFORE_HEAD:
        case U.IN_HEAD:
        case U.IN_HEAD_NO_SCRIPT:
        case U.AFTER_HEAD:
          {
            this._err(Z, j.misplacedDoctype);
            break;
          }
        case U.IN_TABLE_TEXT:
          {
            L1(this, Z);
            break;
          }
        default:
      }
    }
  }, {
    key: "onStartTag",
    value: function onStartTag(Z) {
      if (this.skipNextNewLine = !1, this.currentToken = Z, this._processStartTag(Z), Z.selfClosing && !Z.ackSelfClosing) this._err(Z, j.nonVoidHtmlElementStartTagWithTrailingSolidus);
    }
  }, {
    key: "_processStartTag",
    value: function _processStartTag(Z) {
      if (this.shouldProcessStartTagTokenInForeignContent(Z)) z6(this, Z);else this._startTagOutsideForeignContent(Z);
    }
  }, {
    key: "_startTagOutsideForeignContent",
    value: function _startTagOutsideForeignContent(Z) {
      switch (this.insertionMode) {
        case U.INITIAL:
          {
            j1(this, Z);
            break;
          }
        case U.BEFORE_HTML:
          {
            T9(this, Z);
            break;
          }
        case U.BEFORE_HEAD:
          {
            i9(this, Z);
            break;
          }
        case U.IN_HEAD:
          {
            Q0(this, Z);
            break;
          }
        case U.IN_HEAD_NO_SCRIPT:
          {
            r9(this, Z);
            break;
          }
        case U.AFTER_HEAD:
          {
            s9(this, Z);
            break;
          }
        case U.IN_BODY:
          {
            i(this, Z);
            break;
          }
        case U.IN_TABLE:
          {
            e0(this, Z);
            break;
          }
        case U.IN_TABLE_TEXT:
          {
            L1(this, Z);
            break;
          }
        case U.IN_CAPTION:
          {
            cJ(this, Z);
            break;
          }
        case U.IN_COLUMN_GROUP:
          {
            m5(this, Z);
            break;
          }
        case U.IN_TABLE_BODY:
          {
            L4(this, Z);
            break;
          }
        case U.IN_ROW:
          {
            R4(this, Z);
            break;
          }
        case U.IN_CELL:
          {
            lJ(this, Z);
            break;
          }
        case U.IN_SELECT:
          {
            A7(this, Z);
            break;
          }
        case U.IN_SELECT_IN_TABLE:
          {
            pJ(this, Z);
            break;
          }
        case U.IN_TEMPLATE:
          {
            nJ(this, Z);
            break;
          }
        case U.AFTER_BODY:
          {
            tJ(this, Z);
            break;
          }
        case U.IN_FRAMESET:
          {
            eJ(this, Z);
            break;
          }
        case U.AFTER_FRAMESET:
          {
            Y6(this, Z);
            break;
          }
        case U.AFTER_AFTER_BODY:
          {
            K6(this, Z);
            break;
          }
        case U.AFTER_AFTER_FRAMESET:
          {
            X6(this, Z);
            break;
          }
        default:
      }
    }
  }, {
    key: "onEndTag",
    value: function onEndTag(Z) {
      if (this.skipNextNewLine = !1, this.currentToken = Z, this.currentNotInHTML) H6(this, Z);else this._endTagOutsideForeignContent(Z);
    }
  }, {
    key: "_endTagOutsideForeignContent",
    value: function _endTagOutsideForeignContent(Z) {
      switch (this.insertionMode) {
        case U.INITIAL:
          {
            j1(this, Z);
            break;
          }
        case U.BEFORE_HTML:
          {
            m9(this, Z);
            break;
          }
        case U.BEFORE_HEAD:
          {
            c9(this, Z);
            break;
          }
        case U.IN_HEAD:
          {
            d9(this, Z);
            break;
          }
        case U.IN_HEAD_NO_SCRIPT:
          {
            l9(this, Z);
            break;
          }
        case U.AFTER_HEAD:
          {
            p9(this, Z);
            break;
          }
        case U.IN_BODY:
          {
            j4(this, Z);
            break;
          }
        case U.TEXT:
          {
            uJ(this, Z);
            break;
          }
        case U.IN_TABLE:
          {
            f1(this, Z);
            break;
          }
        case U.IN_TABLE_TEXT:
          {
            L1(this, Z);
            break;
          }
        case U.IN_CAPTION:
          {
            dJ(this, Z);
            break;
          }
        case U.IN_COLUMN_GROUP:
          {
            rJ(this, Z);
            break;
          }
        case U.IN_TABLE_BODY:
          {
            _5(this, Z);
            break;
          }
        case U.IN_ROW:
          {
            _7(this, Z);
            break;
          }
        case U.IN_CELL:
          {
            sJ(this, Z);
            break;
          }
        case U.IN_SELECT:
          {
            T7(this, Z);
            break;
          }
        case U.IN_SELECT_IN_TABLE:
          {
            aJ(this, Z);
            break;
          }
        case U.IN_TEMPLATE:
          {
            oJ(this, Z);
            break;
          }
        case U.AFTER_BODY:
          {
            i7(this, Z);
            break;
          }
        case U.IN_FRAMESET:
          {
            Z6(this, Z);
            break;
          }
        case U.AFTER_FRAMESET:
          {
            J6(this, Z);
            break;
          }
        case U.AFTER_AFTER_BODY:
          {
            B4(this, Z);
            break;
          }
        default:
      }
    }
  }, {
    key: "onEof",
    value: function onEof(Z) {
      switch (this.insertionMode) {
        case U.INITIAL:
          {
            j1(this, Z);
            break;
          }
        case U.BEFORE_HTML:
          {
            R1(this, Z);
            break;
          }
        case U.BEFORE_HEAD:
          {
            P1(this, Z);
            break;
          }
        case U.IN_HEAD:
          {
            v1(this, Z);
            break;
          }
        case U.IN_HEAD_NO_SCRIPT:
          {
            O1(this, Z);
            break;
          }
        case U.AFTER_HEAD:
          {
            y1(this, Z);
            break;
          }
        case U.IN_BODY:
        case U.IN_TABLE:
        case U.IN_CAPTION:
        case U.IN_COLUMN_GROUP:
        case U.IN_TABLE_BODY:
        case U.IN_ROW:
        case U.IN_CELL:
        case U.IN_SELECT:
        case U.IN_SELECT_IN_TABLE:
          {
            E7(this, Z);
            break;
          }
        case U.TEXT:
          {
            EJ(this, Z);
            break;
          }
        case U.IN_TABLE_TEXT:
          {
            L1(this, Z);
            break;
          }
        case U.IN_TEMPLATE:
          {
            m7(this, Z);
            break;
          }
        case U.AFTER_BODY:
        case U.IN_FRAMESET:
        case U.AFTER_FRAMESET:
        case U.AFTER_AFTER_BODY:
        case U.AFTER_AFTER_FRAMESET:
          {
            T5(this, Z);
            break;
          }
        default:
      }
    }
  }, {
    key: "onWhitespaceCharacter",
    value: function onWhitespaceCharacter(Z) {
      if (this.skipNextNewLine) {
        if (this.skipNextNewLine = !1, Z.chars.charCodeAt(0) === H.LINE_FEED) {
          if (Z.chars.length === 1) return;
          Z.chars = Z.chars.substr(1);
        }
      }
      if (this.tokenizer.inForeignNode) {
        this._insertCharacters(Z);
        return;
      }
      switch (this.insertionMode) {
        case U.IN_HEAD:
        case U.IN_HEAD_NO_SCRIPT:
        case U.AFTER_HEAD:
        case U.TEXT:
        case U.IN_COLUMN_GROUP:
        case U.IN_SELECT:
        case U.IN_SELECT_IN_TABLE:
        case U.IN_FRAMESET:
        case U.AFTER_FRAMESET:
          {
            this._insertCharacters(Z);
            break;
          }
        case U.IN_BODY:
        case U.IN_CAPTION:
        case U.IN_CELL:
        case U.IN_TEMPLATE:
        case U.AFTER_BODY:
        case U.AFTER_AFTER_BODY:
        case U.AFTER_AFTER_FRAMESET:
          {
            C7(this, Z);
            break;
          }
        case U.IN_TABLE:
        case U.IN_TABLE_BODY:
        case U.IN_ROW:
          {
            S5(this, Z);
            break;
          }
        case U.IN_TABLE_TEXT:
          {
            I7(this, Z);
            break;
          }
        default:
      }
    }
  }], [{
    key: "parse",
    value: function parse(Z, Y) {
      var J = new this(Y);
      return J.tokenizer.write(Z, !0), J.document;
    }
  }, {
    key: "getFragmentParser",
    value: function getFragmentParser(Z, Y) {
      var J = _objectSpread(_objectSpread({}, N7), Y);
      Z !== null && Z !== void 0 || (Z = J.treeAdapter.createElement(w.TEMPLATE, L.HTML, []));
      var K = J.treeAdapter.createElement("documentmock", L.HTML, []),
        Q = new this(J, K, Z);
      if (Q.fragmentContextID === X.TEMPLATE) Q.tmplInsertionModeStack.unshift(U.IN_TEMPLATE);
      return Q._initTokenizerForFragmentParsing(), Q._insertFakeRootElement(), Q._resetInsertionMode(), Q._findFormInFragmentContext(), Q;
    }
  }]);
  return b1;
}();
function G9(Z, Y) {
  var J = Z.activeFormattingElements.getElementEntryInScopeWithTagName(Y.tagName);
  if (J) {
    if (!Z.openElements.contains(J.element)) Z.activeFormattingElements.removeEntry(J), J = null;else if (!Z.openElements.hasInScope(Y.tagID)) J = null;
  } else u7(Z, Y);
  return J;
}
function $9(Z, Y) {
  var J = null,
    K = Z.openElements.stackTop;
  for (; K >= 0; K--) {
    var Q = Z.openElements.items[K];
    if (Q === Y.element) break;
    if (Z._isSpecialElement(Q, Z.openElements.tagIDs[K])) J = Q;
  }
  if (!J) Z.openElements.shortenToLength(Math.max(K, 0)), Z.activeFormattingElements.removeEntry(Y);
  return J;
}
function u9(Z, Y, J) {
  var K = Y,
    Q = Z.openElements.getCommonAncestor(Y);
  for (var V = 0, z = Q; z !== J; V++, z = Q) {
    Q = Z.openElements.getCommonAncestor(z);
    var B = Z.activeFormattingElements.getElementEntry(z),
      F = B && V >= C9;
    if (!B || F) {
      if (F) Z.activeFormattingElements.removeEntry(B);
      Z.openElements.remove(z);
    } else {
      if (z = E9(Z, B), K === Y) Z.activeFormattingElements.bookmark = B;
      Z.treeAdapter.detachNode(K), Z.treeAdapter.appendChild(z, K), K = z;
    }
  }
  return K;
}
function E9(Z, Y) {
  var J = Z.treeAdapter.getNamespaceURI(Y.element),
    K = Z.treeAdapter.createElement(Y.token.tagName, J, Y.token.attrs);
  return Z.openElements.replace(Y.element, K), Y.element = K, K;
}
function I9(Z, Y, J) {
  var K = Z.treeAdapter.getTagName(Y),
    Q = g0(K);
  if (Z._isElementCausesFosterParenting(Q)) Z._fosterParentElement(J);else {
    var V = Z.treeAdapter.getNamespaceURI(Y);
    if (Q === X.TEMPLATE && V === L.HTML) Y = Z.treeAdapter.getTemplateContent(Y);
    Z.treeAdapter.appendChild(Y, J);
  }
}
function S9(Z, Y, J) {
  var K = Z.treeAdapter.getNamespaceURI(J.element),
    Q = J.token,
    V = Z.treeAdapter.createElement(Q.tagName, K, Q.attrs);
  Z._adoptNodes(Y, V), Z.treeAdapter.appendChild(Y, V), Z.activeFormattingElements.insertElementAfterBookmark(V, Q), Z.activeFormattingElements.removeEntry(J), Z.openElements.remove(J.element), Z.openElements.insertAfter(Y, V, Q.tagID);
}
function A5(Z, Y) {
  for (var J = 0; J < h9; J++) {
    var K = G9(Z, Y);
    if (!K) break;
    var Q = $9(Z, K);
    if (!Q) break;
    Z.activeFormattingElements.bookmark = K;
    var V = u9(Z, Q, K.element),
      z = Z.openElements.getCommonAncestor(K.element);
    if (Z.treeAdapter.detachNode(V), z) I9(Z, z, V);
    S9(Z, Q, K);
  }
}
function k5(Z, Y) {
  Z._appendCommentNode(Y, Z.openElements.currentTmplContentOrNode);
}
function k9(Z, Y) {
  Z._appendCommentNode(Y, Z.openElements.items[0]);
}
function _9(Z, Y) {
  Z._appendCommentNode(Y, Z.document);
}
function T5(Z, Y) {
  if (Z.stopped = !0, Y.location) {
    var J = Z.fragmentContext ? 0 : 2;
    for (var K = Z.openElements.stackTop; K >= J; K--) Z._setEndLocation(Z.openElements.items[K], Y);
    if (!Z.fragmentContext && Z.openElements.stackTop >= 0) {
      var _K5 = Z.openElements.items[0],
        Q = Z.treeAdapter.getNodeSourceCodeLocation(_K5);
      if (Q && !Q.endTag) {
        if (Z._setEndLocation(_K5, Y), Z.openElements.stackTop >= 1) {
          var V = Z.openElements.items[1],
            z = Z.treeAdapter.getNodeSourceCodeLocation(V);
          if (z && !z.endTag) Z._setEndLocation(V, Y);
        }
      }
    }
  }
}
function A9(Z, Y) {
  Z._setDocumentType(Y);
  var J = Y.forceQuirks ? T.QUIRKS : v7(Y);
  if (!P7(Y)) Z._err(Y, j.nonConformingDoctype);
  Z.treeAdapter.setDocumentMode(Z.document, J), Z.insertionMode = U.BEFORE_HTML;
}
function j1(Z, Y) {
  Z._err(Y, j.missingDoctype, !0), Z.treeAdapter.setDocumentMode(Z.document, T.QUIRKS), Z.insertionMode = U.BEFORE_HTML, Z._processToken(Y);
}
function T9(Z, Y) {
  if (Y.tagID === X.HTML) Z._insertElement(Y, L.HTML), Z.insertionMode = U.BEFORE_HEAD;else R1(Z, Y);
}
function m9(Z, Y) {
  var J = Y.tagID;
  if (J === X.HTML || J === X.HEAD || J === X.BODY || J === X.BR) R1(Z, Y);
}
function R1(Z, Y) {
  Z._insertFakeRootElement(), Z.insertionMode = U.BEFORE_HEAD, Z._processToken(Y);
}
function i9(Z, Y) {
  switch (Y.tagID) {
    case X.HTML:
      {
        i(Z, Y);
        break;
      }
    case X.HEAD:
      {
        Z._insertElement(Y, L.HTML), Z.headElement = Z.openElements.current, Z.insertionMode = U.IN_HEAD;
        break;
      }
    default:
      P1(Z, Y);
  }
}
function c9(Z, Y) {
  var J = Y.tagID;
  if (J === X.HEAD || J === X.BODY || J === X.HTML || J === X.BR) P1(Z, Y);else Z._err(Y, j.endTagWithoutMatchingOpenElement);
}
function P1(Z, Y) {
  Z._insertFakeElement(w.HEAD, X.HEAD), Z.headElement = Z.openElements.current, Z.insertionMode = U.IN_HEAD, Z._processToken(Y);
}
function Q0(Z, Y) {
  switch (Y.tagID) {
    case X.HTML:
      {
        i(Z, Y);
        break;
      }
    case X.BASE:
    case X.BASEFONT:
    case X.BGSOUND:
    case X.LINK:
    case X.META:
      {
        Z._appendElement(Y, L.HTML), Y.ackSelfClosing = !0;
        break;
      }
    case X.TITLE:
      {
        Z._switchToTextParsing(Y, m.RCDATA);
        break;
      }
    case X.NOSCRIPT:
      {
        if (Z.options.scriptingEnabled) Z._switchToTextParsing(Y, m.RAWTEXT);else Z._insertElement(Y, L.HTML), Z.insertionMode = U.IN_HEAD_NO_SCRIPT;
        break;
      }
    case X.NOFRAMES:
    case X.STYLE:
      {
        Z._switchToTextParsing(Y, m.RAWTEXT);
        break;
      }
    case X.SCRIPT:
      {
        Z._switchToTextParsing(Y, m.SCRIPT_DATA);
        break;
      }
    case X.TEMPLATE:
      {
        Z._insertTemplate(Y), Z.activeFormattingElements.insertMarker(), Z.framesetOk = !1, Z.insertionMode = U.IN_TEMPLATE, Z.tmplInsertionModeStack.unshift(U.IN_TEMPLATE);
        break;
      }
    case X.HEAD:
      {
        Z._err(Y, j.misplacedStartTagForHeadElement);
        break;
      }
    default:
      v1(Z, Y);
  }
}
function d9(Z, Y) {
  switch (Y.tagID) {
    case X.HEAD:
      {
        Z.openElements.pop(), Z.insertionMode = U.AFTER_HEAD;
        break;
      }
    case X.BODY:
    case X.BR:
    case X.HTML:
      {
        v1(Z, Y);
        break;
      }
    case X.TEMPLATE:
      {
        S0(Z, Y);
        break;
      }
    default:
      Z._err(Y, j.endTagWithoutMatchingOpenElement);
  }
}
function S0(Z, Y) {
  if (Z.openElements.tmplCount > 0) {
    if (Z.openElements.generateImpliedEndTagsThoroughly(), Z.openElements.currentTagId !== X.TEMPLATE) Z._err(Y, j.closingOfElementWithOpenChildElements);
    Z.openElements.popUntilTagNamePopped(X.TEMPLATE), Z.activeFormattingElements.clearToLastMarker(), Z.tmplInsertionModeStack.shift(), Z._resetInsertionMode();
  } else Z._err(Y, j.endTagWithoutMatchingOpenElement);
}
function v1(Z, Y) {
  Z.openElements.pop(), Z.insertionMode = U.AFTER_HEAD, Z._processToken(Y);
}
function r9(Z, Y) {
  switch (Y.tagID) {
    case X.HTML:
      {
        i(Z, Y);
        break;
      }
    case X.BASEFONT:
    case X.BGSOUND:
    case X.HEAD:
    case X.LINK:
    case X.META:
    case X.NOFRAMES:
    case X.STYLE:
      {
        Q0(Z, Y);
        break;
      }
    case X.NOSCRIPT:
      {
        Z._err(Y, j.nestedNoscriptInHead);
        break;
      }
    default:
      O1(Z, Y);
  }
}
function l9(Z, Y) {
  switch (Y.tagID) {
    case X.NOSCRIPT:
      {
        Z.openElements.pop(), Z.insertionMode = U.IN_HEAD;
        break;
      }
    case X.BR:
      {
        O1(Z, Y);
        break;
      }
    default:
      Z._err(Y, j.endTagWithoutMatchingOpenElement);
  }
}
function O1(Z, Y) {
  var J = Y.type === h.EOF ? j.openElementsLeftAfterEof : j.disallowedContentInNoscriptInHead;
  Z._err(Y, J), Z.openElements.pop(), Z.insertionMode = U.IN_HEAD, Z._processToken(Y);
}
function s9(Z, Y) {
  switch (Y.tagID) {
    case X.HTML:
      {
        i(Z, Y);
        break;
      }
    case X.BODY:
      {
        Z._insertElement(Y, L.HTML), Z.framesetOk = !1, Z.insertionMode = U.IN_BODY;
        break;
      }
    case X.FRAMESET:
      {
        Z._insertElement(Y, L.HTML), Z.insertionMode = U.IN_FRAMESET;
        break;
      }
    case X.BASE:
    case X.BASEFONT:
    case X.BGSOUND:
    case X.LINK:
    case X.META:
    case X.NOFRAMES:
    case X.SCRIPT:
    case X.STYLE:
    case X.TEMPLATE:
    case X.TITLE:
      {
        Z._err(Y, j.abandonedHeadElementChild), Z.openElements.push(Z.headElement, X.HEAD), Q0(Z, Y), Z.openElements.remove(Z.headElement);
        break;
      }
    case X.HEAD:
      {
        Z._err(Y, j.misplacedStartTagForHeadElement);
        break;
      }
    default:
      y1(Z, Y);
  }
}
function p9(Z, Y) {
  switch (Y.tagID) {
    case X.BODY:
    case X.HTML:
    case X.BR:
      {
        y1(Z, Y);
        break;
      }
    case X.TEMPLATE:
      {
        S0(Z, Y);
        break;
      }
    default:
      Z._err(Y, j.endTagWithoutMatchingOpenElement);
  }
}
function y1(Z, Y) {
  Z._insertFakeElement(w.BODY, X.BODY), Z.insertionMode = U.IN_BODY, q4(Z, Y);
}
function q4(Z, Y) {
  switch (Y.type) {
    case h.CHARACTER:
      {
        D7(Z, Y);
        break;
      }
    case h.WHITESPACE_CHARACTER:
      {
        C7(Z, Y);
        break;
      }
    case h.COMMENT:
      {
        k5(Z, Y);
        break;
      }
    case h.START_TAG:
      {
        i(Z, Y);
        break;
      }
    case h.END_TAG:
      {
        j4(Z, Y);
        break;
      }
    case h.EOF:
      {
        E7(Z, Y);
        break;
      }
    default:
  }
}
function C7(Z, Y) {
  Z._reconstructActiveFormattingElements(), Z._insertCharacters(Y);
}
function D7(Z, Y) {
  Z._reconstructActiveFormattingElements(), Z._insertCharacters(Y), Z.framesetOk = !1;
}
function a9(Z, Y) {
  if (Z.openElements.tmplCount === 0) Z.treeAdapter.adoptAttributes(Z.openElements.items[0], Y.attrs);
}
function n9(Z, Y) {
  var J = Z.openElements.tryPeekProperlyNestedBodyElement();
  if (J && Z.openElements.tmplCount === 0) Z.framesetOk = !1, Z.treeAdapter.adoptAttributes(J, Y.attrs);
}
function o9(Z, Y) {
  var J = Z.openElements.tryPeekProperlyNestedBodyElement();
  if (Z.framesetOk && J) Z.treeAdapter.detachNode(J), Z.openElements.popAllUpToHtmlElement(), Z._insertElement(Y, L.HTML), Z.insertionMode = U.IN_FRAMESET;
}
function t9(Z, Y) {
  if (Z.openElements.hasInButtonScope(X.P)) Z._closePElement();
  Z._insertElement(Y, L.HTML);
}
function e9(Z, Y) {
  if (Z.openElements.hasInButtonScope(X.P)) Z._closePElement();
  if (Z.openElements.currentTagId !== void 0 && t0.has(Z.openElements.currentTagId)) Z.openElements.pop();
  Z._insertElement(Y, L.HTML);
}
function ZJ(Z, Y) {
  if (Z.openElements.hasInButtonScope(X.P)) Z._closePElement();
  Z._insertElement(Y, L.HTML), Z.skipNextNewLine = !0, Z.framesetOk = !1;
}
function YJ(Z, Y) {
  var J = Z.openElements.tmplCount > 0;
  if (!Z.formElement || J) {
    if (Z.openElements.hasInButtonScope(X.P)) Z._closePElement();
    if (Z._insertElement(Y, L.HTML), !J) Z.formElement = Z.openElements.current;
  }
}
function JJ(Z, Y) {
  Z.framesetOk = !1;
  var J = Y.tagID;
  for (var K = Z.openElements.stackTop; K >= 0; K--) {
    var Q = Z.openElements.tagIDs[K];
    if (J === X.LI && Q === X.LI || (J === X.DD || J === X.DT) && (Q === X.DD || Q === X.DT)) {
      Z.openElements.generateImpliedEndTagsWithExclusion(Q), Z.openElements.popUntilTagNamePopped(Q);
      break;
    }
    if (Q !== X.ADDRESS && Q !== X.DIV && Q !== X.P && Z._isSpecialElement(Z.openElements.items[K], Q)) break;
  }
  if (Z.openElements.hasInButtonScope(X.P)) Z._closePElement();
  Z._insertElement(Y, L.HTML);
}
function KJ(Z, Y) {
  if (Z.openElements.hasInButtonScope(X.P)) Z._closePElement();
  Z._insertElement(Y, L.HTML), Z.tokenizer.state = m.PLAINTEXT;
}
function XJ(Z, Y) {
  if (Z.openElements.hasInScope(X.BUTTON)) Z.openElements.generateImpliedEndTags(), Z.openElements.popUntilTagNamePopped(X.BUTTON);
  Z._reconstructActiveFormattingElements(), Z._insertElement(Y, L.HTML), Z.framesetOk = !1;
}
function QJ(Z, Y) {
  var J = Z.activeFormattingElements.getElementEntryInScopeWithTagName(w.A);
  if (J) A5(Z, Y), Z.openElements.remove(J.element), Z.activeFormattingElements.removeEntry(J);
  Z._reconstructActiveFormattingElements(), Z._insertElement(Y, L.HTML), Z.activeFormattingElements.pushElement(Z.openElements.current, Y);
}
function VJ(Z, Y) {
  Z._reconstructActiveFormattingElements(), Z._insertElement(Y, L.HTML), Z.activeFormattingElements.pushElement(Z.openElements.current, Y);
}
function zJ(Z, Y) {
  if (Z._reconstructActiveFormattingElements(), Z.openElements.hasInScope(X.NOBR)) A5(Z, Y), Z._reconstructActiveFormattingElements();
  Z._insertElement(Y, L.HTML), Z.activeFormattingElements.pushElement(Z.openElements.current, Y);
}
function HJ(Z, Y) {
  Z._reconstructActiveFormattingElements(), Z._insertElement(Y, L.HTML), Z.activeFormattingElements.insertMarker(), Z.framesetOk = !1;
}
function WJ(Z, Y) {
  if (Z.treeAdapter.getDocumentMode(Z.document) !== T.QUIRKS && Z.openElements.hasInButtonScope(X.P)) Z._closePElement();
  Z._insertElement(Y, L.HTML), Z.framesetOk = !1, Z.insertionMode = U.IN_TABLE;
}
function G7(Z, Y) {
  Z._reconstructActiveFormattingElements(), Z._appendElement(Y, L.HTML), Z.framesetOk = !1, Y.ackSelfClosing = !0;
}
function $7(Z) {
  var Y = Q4(Z, H0.TYPE);
  return Y != null && Y.toLowerCase() === x9;
}
function UJ(Z, Y) {
  if (Z._reconstructActiveFormattingElements(), Z._appendElement(Y, L.HTML), !$7(Y)) Z.framesetOk = !1;
  Y.ackSelfClosing = !0;
}
function BJ(Z, Y) {
  Z._appendElement(Y, L.HTML), Y.ackSelfClosing = !0;
}
function FJ(Z, Y) {
  if (Z.openElements.hasInButtonScope(X.P)) Z._closePElement();
  Z._appendElement(Y, L.HTML), Z.framesetOk = !1, Y.ackSelfClosing = !0;
}
function wJ(Z, Y) {
  Y.tagName = w.IMG, Y.tagID = X.IMG, G7(Z, Y);
}
function qJ(Z, Y) {
  Z._insertElement(Y, L.HTML), Z.skipNextNewLine = !0, Z.tokenizer.state = m.RCDATA, Z.originalInsertionMode = Z.insertionMode, Z.framesetOk = !1, Z.insertionMode = U.TEXT;
}
function jJ(Z, Y) {
  if (Z.openElements.hasInButtonScope(X.P)) Z._closePElement();
  Z._reconstructActiveFormattingElements(), Z.framesetOk = !1, Z._switchToTextParsing(Y, m.RAWTEXT);
}
function LJ(Z, Y) {
  Z.framesetOk = !1, Z._switchToTextParsing(Y, m.RAWTEXT);
}
function M7(Z, Y) {
  Z._switchToTextParsing(Y, m.RAWTEXT);
}
function RJ(Z, Y) {
  Z._reconstructActiveFormattingElements(), Z._insertElement(Y, L.HTML), Z.framesetOk = !1, Z.insertionMode = Z.insertionMode === U.IN_TABLE || Z.insertionMode === U.IN_CAPTION || Z.insertionMode === U.IN_TABLE_BODY || Z.insertionMode === U.IN_ROW || Z.insertionMode === U.IN_CELL ? U.IN_SELECT_IN_TABLE : U.IN_SELECT;
}
function PJ(Z, Y) {
  if (Z.openElements.currentTagId === X.OPTION) Z.openElements.pop();
  Z._reconstructActiveFormattingElements(), Z._insertElement(Y, L.HTML);
}
function vJ(Z, Y) {
  if (Z.openElements.hasInScope(X.RUBY)) Z.openElements.generateImpliedEndTags();
  Z._insertElement(Y, L.HTML);
}
function OJ(Z, Y) {
  if (Z.openElements.hasInScope(X.RUBY)) Z.openElements.generateImpliedEndTagsWithExclusion(X.RTC);
  Z._insertElement(Y, L.HTML);
}
function yJ(Z, Y) {
  if (Z._reconstructActiveFormattingElements(), E5(Y), U4(Y), Y.selfClosing) Z._appendElement(Y, L.MATHML);else Z._insertElement(Y, L.MATHML);
  Y.ackSelfClosing = !0;
}
function fJ(Z, Y) {
  if (Z._reconstructActiveFormattingElements(), I5(Y), U4(Y), Y.selfClosing) Z._appendElement(Y, L.SVG);else Z._insertElement(Y, L.SVG);
  Y.ackSelfClosing = !0;
}
function x7(Z, Y) {
  Z._reconstructActiveFormattingElements(), Z._insertElement(Y, L.HTML);
}
function i(Z, Y) {
  switch (Y.tagID) {
    case X.I:
    case X.S:
    case X.B:
    case X.U:
    case X.EM:
    case X.TT:
    case X.BIG:
    case X.CODE:
    case X.FONT:
    case X.SMALL:
    case X.STRIKE:
    case X.STRONG:
      {
        VJ(Z, Y);
        break;
      }
    case X.A:
      {
        QJ(Z, Y);
        break;
      }
    case X.H1:
    case X.H2:
    case X.H3:
    case X.H4:
    case X.H5:
    case X.H6:
      {
        e9(Z, Y);
        break;
      }
    case X.P:
    case X.DL:
    case X.OL:
    case X.UL:
    case X.DIV:
    case X.DIR:
    case X.NAV:
    case X.MAIN:
    case X.MENU:
    case X.ASIDE:
    case X.CENTER:
    case X.FIGURE:
    case X.FOOTER:
    case X.HEADER:
    case X.HGROUP:
    case X.DIALOG:
    case X.DETAILS:
    case X.ADDRESS:
    case X.ARTICLE:
    case X.SEARCH:
    case X.SECTION:
    case X.SUMMARY:
    case X.FIELDSET:
    case X.BLOCKQUOTE:
    case X.FIGCAPTION:
      {
        t9(Z, Y);
        break;
      }
    case X.LI:
    case X.DD:
    case X.DT:
      {
        JJ(Z, Y);
        break;
      }
    case X.BR:
    case X.IMG:
    case X.WBR:
    case X.AREA:
    case X.EMBED:
    case X.KEYGEN:
      {
        G7(Z, Y);
        break;
      }
    case X.HR:
      {
        FJ(Z, Y);
        break;
      }
    case X.RB:
    case X.RTC:
      {
        vJ(Z, Y);
        break;
      }
    case X.RT:
    case X.RP:
      {
        OJ(Z, Y);
        break;
      }
    case X.PRE:
    case X.LISTING:
      {
        ZJ(Z, Y);
        break;
      }
    case X.XMP:
      {
        jJ(Z, Y);
        break;
      }
    case X.SVG:
      {
        fJ(Z, Y);
        break;
      }
    case X.HTML:
      {
        a9(Z, Y);
        break;
      }
    case X.BASE:
    case X.LINK:
    case X.META:
    case X.STYLE:
    case X.TITLE:
    case X.SCRIPT:
    case X.BGSOUND:
    case X.BASEFONT:
    case X.TEMPLATE:
      {
        Q0(Z, Y);
        break;
      }
    case X.BODY:
      {
        n9(Z, Y);
        break;
      }
    case X.FORM:
      {
        YJ(Z, Y);
        break;
      }
    case X.NOBR:
      {
        zJ(Z, Y);
        break;
      }
    case X.MATH:
      {
        yJ(Z, Y);
        break;
      }
    case X.TABLE:
      {
        WJ(Z, Y);
        break;
      }
    case X.INPUT:
      {
        UJ(Z, Y);
        break;
      }
    case X.PARAM:
    case X.TRACK:
    case X.SOURCE:
      {
        BJ(Z, Y);
        break;
      }
    case X.IMAGE:
      {
        wJ(Z, Y);
        break;
      }
    case X.BUTTON:
      {
        XJ(Z, Y);
        break;
      }
    case X.APPLET:
    case X.OBJECT:
    case X.MARQUEE:
      {
        HJ(Z, Y);
        break;
      }
    case X.IFRAME:
      {
        LJ(Z, Y);
        break;
      }
    case X.SELECT:
      {
        RJ(Z, Y);
        break;
      }
    case X.OPTION:
    case X.OPTGROUP:
      {
        PJ(Z, Y);
        break;
      }
    case X.NOEMBED:
    case X.NOFRAMES:
      {
        M7(Z, Y);
        break;
      }
    case X.FRAMESET:
      {
        o9(Z, Y);
        break;
      }
    case X.TEXTAREA:
      {
        qJ(Z, Y);
        break;
      }
    case X.NOSCRIPT:
      {
        if (Z.options.scriptingEnabled) M7(Z, Y);else x7(Z, Y);
        break;
      }
    case X.PLAINTEXT:
      {
        KJ(Z, Y);
        break;
      }
    case X.COL:
    case X.TH:
    case X.TD:
    case X.TR:
    case X.HEAD:
    case X.FRAME:
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD:
    case X.CAPTION:
    case X.COLGROUP:
      break;
    default:
      x7(Z, Y);
  }
}
function bJ(Z, Y) {
  if (Z.openElements.hasInScope(X.BODY)) {
    if (Z.insertionMode = U.AFTER_BODY, Z.options.sourceCodeLocationInfo) {
      var J = Z.openElements.tryPeekProperlyNestedBodyElement();
      if (J) Z._setEndLocation(J, Y);
    }
  }
}
function gJ(Z, Y) {
  if (Z.openElements.hasInScope(X.BODY)) Z.insertionMode = U.AFTER_BODY, i7(Z, Y);
}
function NJ(Z, Y) {
  var J = Y.tagID;
  if (Z.openElements.hasInScope(J)) Z.openElements.generateImpliedEndTags(), Z.openElements.popUntilTagNamePopped(J);
}
function MJ(Z) {
  var Y = Z.openElements.tmplCount > 0,
    J = Z.formElement;
  if (!Y) Z.formElement = null;
  if ((J || Y) && Z.openElements.hasInScope(X.FORM)) {
    if (Z.openElements.generateImpliedEndTags(), Y) Z.openElements.popUntilTagNamePopped(X.FORM);else if (J) Z.openElements.remove(J);
  }
}
function xJ(Z) {
  if (!Z.openElements.hasInButtonScope(X.P)) Z._insertFakeElement(w.P, X.P);
  Z._closePElement();
}
function hJ(Z) {
  if (Z.openElements.hasInListItemScope(X.LI)) Z.openElements.generateImpliedEndTagsWithExclusion(X.LI), Z.openElements.popUntilTagNamePopped(X.LI);
}
function CJ(Z, Y) {
  var J = Y.tagID;
  if (Z.openElements.hasInScope(J)) Z.openElements.generateImpliedEndTagsWithExclusion(J), Z.openElements.popUntilTagNamePopped(J);
}
function DJ(Z) {
  if (Z.openElements.hasNumberedHeaderInScope()) Z.openElements.generateImpliedEndTags(), Z.openElements.popUntilNumberedHeaderPopped();
}
function GJ(Z, Y) {
  var J = Y.tagID;
  if (Z.openElements.hasInScope(J)) Z.openElements.generateImpliedEndTags(), Z.openElements.popUntilTagNamePopped(J), Z.activeFormattingElements.clearToLastMarker();
}
function $J(Z) {
  Z._reconstructActiveFormattingElements(), Z._insertFakeElement(w.BR, X.BR), Z.openElements.pop(), Z.framesetOk = !1;
}
function u7(Z, Y) {
  var J = Y.tagName,
    K = Y.tagID;
  for (var Q = Z.openElements.stackTop; Q > 0; Q--) {
    var V = Z.openElements.items[Q],
      z = Z.openElements.tagIDs[Q];
    if (K === z && (K !== X.UNKNOWN || Z.treeAdapter.getTagName(V) === J)) {
      if (Z.openElements.generateImpliedEndTagsWithExclusion(K), Z.openElements.stackTop >= Q) Z.openElements.shortenToLength(Q);
      break;
    }
    if (Z._isSpecialElement(V, z)) break;
  }
}
function j4(Z, Y) {
  switch (Y.tagID) {
    case X.A:
    case X.B:
    case X.I:
    case X.S:
    case X.U:
    case X.EM:
    case X.TT:
    case X.BIG:
    case X.CODE:
    case X.FONT:
    case X.NOBR:
    case X.SMALL:
    case X.STRIKE:
    case X.STRONG:
      {
        A5(Z, Y);
        break;
      }
    case X.P:
      {
        xJ(Z);
        break;
      }
    case X.DL:
    case X.UL:
    case X.OL:
    case X.DIR:
    case X.DIV:
    case X.NAV:
    case X.PRE:
    case X.MAIN:
    case X.MENU:
    case X.ASIDE:
    case X.BUTTON:
    case X.CENTER:
    case X.FIGURE:
    case X.FOOTER:
    case X.HEADER:
    case X.HGROUP:
    case X.DIALOG:
    case X.ADDRESS:
    case X.ARTICLE:
    case X.DETAILS:
    case X.SEARCH:
    case X.SECTION:
    case X.SUMMARY:
    case X.LISTING:
    case X.FIELDSET:
    case X.BLOCKQUOTE:
    case X.FIGCAPTION:
      {
        NJ(Z, Y);
        break;
      }
    case X.LI:
      {
        hJ(Z);
        break;
      }
    case X.DD:
    case X.DT:
      {
        CJ(Z, Y);
        break;
      }
    case X.H1:
    case X.H2:
    case X.H3:
    case X.H4:
    case X.H5:
    case X.H6:
      {
        DJ(Z);
        break;
      }
    case X.BR:
      {
        $J(Z);
        break;
      }
    case X.BODY:
      {
        bJ(Z, Y);
        break;
      }
    case X.HTML:
      {
        gJ(Z, Y);
        break;
      }
    case X.FORM:
      {
        MJ(Z);
        break;
      }
    case X.APPLET:
    case X.OBJECT:
    case X.MARQUEE:
      {
        GJ(Z, Y);
        break;
      }
    case X.TEMPLATE:
      {
        S0(Z, Y);
        break;
      }
    default:
      u7(Z, Y);
  }
}
function E7(Z, Y) {
  if (Z.tmplInsertionModeStack.length > 0) m7(Z, Y);else T5(Z, Y);
}
function uJ(Z, Y) {
  var J;
  if (Y.tagID === X.SCRIPT) (J = Z.scriptHandler) === null || J === void 0 || J.call(Z, Z.openElements.current);
  Z.openElements.pop(), Z.insertionMode = Z.originalInsertionMode;
}
function EJ(Z, Y) {
  Z._err(Y, j.eofInElementThatCanContainOnlyText), Z.openElements.pop(), Z.insertionMode = Z.originalInsertionMode, Z.onEof(Y);
}
function S5(Z, Y) {
  if (Z.openElements.currentTagId !== void 0 && h7.has(Z.openElements.currentTagId)) switch (Z.pendingCharacterTokens.length = 0, Z.hasNonWhitespacePendingCharacterToken = !1, Z.originalInsertionMode = Z.insertionMode, Z.insertionMode = U.IN_TABLE_TEXT, Y.type) {
    case h.CHARACTER:
      {
        S7(Z, Y);
        break;
      }
    case h.WHITESPACE_CHARACTER:
      {
        I7(Z, Y);
        break;
      }
  } else g1(Z, Y);
}
function IJ(Z, Y) {
  Z.openElements.clearBackToTableContext(), Z.activeFormattingElements.insertMarker(), Z._insertElement(Y, L.HTML), Z.insertionMode = U.IN_CAPTION;
}
function SJ(Z, Y) {
  Z.openElements.clearBackToTableContext(), Z._insertElement(Y, L.HTML), Z.insertionMode = U.IN_COLUMN_GROUP;
}
function kJ(Z, Y) {
  Z.openElements.clearBackToTableContext(), Z._insertFakeElement(w.COLGROUP, X.COLGROUP), Z.insertionMode = U.IN_COLUMN_GROUP, m5(Z, Y);
}
function _J(Z, Y) {
  Z.openElements.clearBackToTableContext(), Z._insertElement(Y, L.HTML), Z.insertionMode = U.IN_TABLE_BODY;
}
function AJ(Z, Y) {
  Z.openElements.clearBackToTableContext(), Z._insertFakeElement(w.TBODY, X.TBODY), Z.insertionMode = U.IN_TABLE_BODY, L4(Z, Y);
}
function TJ(Z, Y) {
  if (Z.openElements.hasInTableScope(X.TABLE)) Z.openElements.popUntilTagNamePopped(X.TABLE), Z._resetInsertionMode(), Z._processStartTag(Y);
}
function mJ(Z, Y) {
  if ($7(Y)) Z._appendElement(Y, L.HTML);else g1(Z, Y);
  Y.ackSelfClosing = !0;
}
function iJ(Z, Y) {
  if (!Z.formElement && Z.openElements.tmplCount === 0) Z._insertElement(Y, L.HTML), Z.formElement = Z.openElements.current, Z.openElements.pop();
}
function e0(Z, Y) {
  switch (Y.tagID) {
    case X.TD:
    case X.TH:
    case X.TR:
      {
        AJ(Z, Y);
        break;
      }
    case X.STYLE:
    case X.SCRIPT:
    case X.TEMPLATE:
      {
        Q0(Z, Y);
        break;
      }
    case X.COL:
      {
        kJ(Z, Y);
        break;
      }
    case X.FORM:
      {
        iJ(Z, Y);
        break;
      }
    case X.TABLE:
      {
        TJ(Z, Y);
        break;
      }
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD:
      {
        _J(Z, Y);
        break;
      }
    case X.INPUT:
      {
        mJ(Z, Y);
        break;
      }
    case X.CAPTION:
      {
        IJ(Z, Y);
        break;
      }
    case X.COLGROUP:
      {
        SJ(Z, Y);
        break;
      }
    default:
      g1(Z, Y);
  }
}
function f1(Z, Y) {
  switch (Y.tagID) {
    case X.TABLE:
      {
        if (Z.openElements.hasInTableScope(X.TABLE)) Z.openElements.popUntilTagNamePopped(X.TABLE), Z._resetInsertionMode();
        break;
      }
    case X.TEMPLATE:
      {
        S0(Z, Y);
        break;
      }
    case X.BODY:
    case X.CAPTION:
    case X.COL:
    case X.COLGROUP:
    case X.HTML:
    case X.TBODY:
    case X.TD:
    case X.TFOOT:
    case X.TH:
    case X.THEAD:
    case X.TR:
      break;
    default:
      g1(Z, Y);
  }
}
function g1(Z, Y) {
  var J = Z.fosterParentingEnabled;
  Z.fosterParentingEnabled = !0, q4(Z, Y), Z.fosterParentingEnabled = J;
}
function I7(Z, Y) {
  Z.pendingCharacterTokens.push(Y);
}
function S7(Z, Y) {
  Z.pendingCharacterTokens.push(Y), Z.hasNonWhitespacePendingCharacterToken = !0;
}
function L1(Z, Y) {
  var J = 0;
  if (Z.hasNonWhitespacePendingCharacterToken) for (; J < Z.pendingCharacterTokens.length; J++) g1(Z, Z.pendingCharacterTokens[J]);else for (; J < Z.pendingCharacterTokens.length; J++) Z._insertCharacters(Z.pendingCharacterTokens[J]);
  Z.insertionMode = Z.originalInsertionMode, Z._processToken(Y);
}
var k7 = new Set([X.CAPTION, X.COL, X.COLGROUP, X.TBODY, X.TD, X.TFOOT, X.TH, X.THEAD, X.TR]);
function cJ(Z, Y) {
  var J = Y.tagID;
  if (k7.has(J)) {
    if (Z.openElements.hasInTableScope(X.CAPTION)) Z.openElements.generateImpliedEndTags(), Z.openElements.popUntilTagNamePopped(X.CAPTION), Z.activeFormattingElements.clearToLastMarker(), Z.insertionMode = U.IN_TABLE, e0(Z, Y);
  } else i(Z, Y);
}
function dJ(Z, Y) {
  var J = Y.tagID;
  switch (J) {
    case X.CAPTION:
    case X.TABLE:
      {
        if (Z.openElements.hasInTableScope(X.CAPTION)) {
          if (Z.openElements.generateImpliedEndTags(), Z.openElements.popUntilTagNamePopped(X.CAPTION), Z.activeFormattingElements.clearToLastMarker(), Z.insertionMode = U.IN_TABLE, J === X.TABLE) f1(Z, Y);
        }
        break;
      }
    case X.BODY:
    case X.COL:
    case X.COLGROUP:
    case X.HTML:
    case X.TBODY:
    case X.TD:
    case X.TFOOT:
    case X.TH:
    case X.THEAD:
    case X.TR:
      break;
    default:
      j4(Z, Y);
  }
}
function m5(Z, Y) {
  switch (Y.tagID) {
    case X.HTML:
      {
        i(Z, Y);
        break;
      }
    case X.COL:
      {
        Z._appendElement(Y, L.HTML), Y.ackSelfClosing = !0;
        break;
      }
    case X.TEMPLATE:
      {
        Q0(Z, Y);
        break;
      }
    default:
      F4(Z, Y);
  }
}
function rJ(Z, Y) {
  switch (Y.tagID) {
    case X.COLGROUP:
      {
        if (Z.openElements.currentTagId === X.COLGROUP) Z.openElements.pop(), Z.insertionMode = U.IN_TABLE;
        break;
      }
    case X.TEMPLATE:
      {
        S0(Z, Y);
        break;
      }
    case X.COL:
      break;
    default:
      F4(Z, Y);
  }
}
function F4(Z, Y) {
  if (Z.openElements.currentTagId === X.COLGROUP) Z.openElements.pop(), Z.insertionMode = U.IN_TABLE, Z._processToken(Y);
}
function L4(Z, Y) {
  switch (Y.tagID) {
    case X.TR:
      {
        Z.openElements.clearBackToTableBodyContext(), Z._insertElement(Y, L.HTML), Z.insertionMode = U.IN_ROW;
        break;
      }
    case X.TH:
    case X.TD:
      {
        Z.openElements.clearBackToTableBodyContext(), Z._insertFakeElement(w.TR, X.TR), Z.insertionMode = U.IN_ROW, R4(Z, Y);
        break;
      }
    case X.CAPTION:
    case X.COL:
    case X.COLGROUP:
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD:
      {
        if (Z.openElements.hasTableBodyContextInTableScope()) Z.openElements.clearBackToTableBodyContext(), Z.openElements.pop(), Z.insertionMode = U.IN_TABLE, e0(Z, Y);
        break;
      }
    default:
      e0(Z, Y);
  }
}
function _5(Z, Y) {
  var J = Y.tagID;
  switch (Y.tagID) {
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD:
      {
        if (Z.openElements.hasInTableScope(J)) Z.openElements.clearBackToTableBodyContext(), Z.openElements.pop(), Z.insertionMode = U.IN_TABLE;
        break;
      }
    case X.TABLE:
      {
        if (Z.openElements.hasTableBodyContextInTableScope()) Z.openElements.clearBackToTableBodyContext(), Z.openElements.pop(), Z.insertionMode = U.IN_TABLE, f1(Z, Y);
        break;
      }
    case X.BODY:
    case X.CAPTION:
    case X.COL:
    case X.COLGROUP:
    case X.HTML:
    case X.TD:
    case X.TH:
    case X.TR:
      break;
    default:
      f1(Z, Y);
  }
}
function R4(Z, Y) {
  switch (Y.tagID) {
    case X.TH:
    case X.TD:
      {
        Z.openElements.clearBackToTableRowContext(), Z._insertElement(Y, L.HTML), Z.insertionMode = U.IN_CELL, Z.activeFormattingElements.insertMarker();
        break;
      }
    case X.CAPTION:
    case X.COL:
    case X.COLGROUP:
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD:
    case X.TR:
      {
        if (Z.openElements.hasInTableScope(X.TR)) Z.openElements.clearBackToTableRowContext(), Z.openElements.pop(), Z.insertionMode = U.IN_TABLE_BODY, L4(Z, Y);
        break;
      }
    default:
      e0(Z, Y);
  }
}
function _7(Z, Y) {
  switch (Y.tagID) {
    case X.TR:
      {
        if (Z.openElements.hasInTableScope(X.TR)) Z.openElements.clearBackToTableRowContext(), Z.openElements.pop(), Z.insertionMode = U.IN_TABLE_BODY;
        break;
      }
    case X.TABLE:
      {
        if (Z.openElements.hasInTableScope(X.TR)) Z.openElements.clearBackToTableRowContext(), Z.openElements.pop(), Z.insertionMode = U.IN_TABLE_BODY, _5(Z, Y);
        break;
      }
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD:
      {
        if (Z.openElements.hasInTableScope(Y.tagID) || Z.openElements.hasInTableScope(X.TR)) Z.openElements.clearBackToTableRowContext(), Z.openElements.pop(), Z.insertionMode = U.IN_TABLE_BODY, _5(Z, Y);
        break;
      }
    case X.BODY:
    case X.CAPTION:
    case X.COL:
    case X.COLGROUP:
    case X.HTML:
    case X.TD:
    case X.TH:
      break;
    default:
      f1(Z, Y);
  }
}
function lJ(Z, Y) {
  var J = Y.tagID;
  if (k7.has(J)) {
    if (Z.openElements.hasInTableScope(X.TD) || Z.openElements.hasInTableScope(X.TH)) Z._closeTableCell(), R4(Z, Y);
  } else i(Z, Y);
}
function sJ(Z, Y) {
  var J = Y.tagID;
  switch (J) {
    case X.TD:
    case X.TH:
      {
        if (Z.openElements.hasInTableScope(J)) Z.openElements.generateImpliedEndTags(), Z.openElements.popUntilTagNamePopped(J), Z.activeFormattingElements.clearToLastMarker(), Z.insertionMode = U.IN_ROW;
        break;
      }
    case X.TABLE:
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD:
    case X.TR:
      {
        if (Z.openElements.hasInTableScope(J)) Z._closeTableCell(), _7(Z, Y);
        break;
      }
    case X.BODY:
    case X.CAPTION:
    case X.COL:
    case X.COLGROUP:
    case X.HTML:
      break;
    default:
      j4(Z, Y);
  }
}
function A7(Z, Y) {
  switch (Y.tagID) {
    case X.HTML:
      {
        i(Z, Y);
        break;
      }
    case X.OPTION:
      {
        if (Z.openElements.currentTagId === X.OPTION) Z.openElements.pop();
        Z._insertElement(Y, L.HTML);
        break;
      }
    case X.OPTGROUP:
      {
        if (Z.openElements.currentTagId === X.OPTION) Z.openElements.pop();
        if (Z.openElements.currentTagId === X.OPTGROUP) Z.openElements.pop();
        Z._insertElement(Y, L.HTML);
        break;
      }
    case X.HR:
      {
        if (Z.openElements.currentTagId === X.OPTION) Z.openElements.pop();
        if (Z.openElements.currentTagId === X.OPTGROUP) Z.openElements.pop();
        Z._appendElement(Y, L.HTML), Y.ackSelfClosing = !0;
        break;
      }
    case X.INPUT:
    case X.KEYGEN:
    case X.TEXTAREA:
    case X.SELECT:
      {
        if (Z.openElements.hasInSelectScope(X.SELECT)) {
          if (Z.openElements.popUntilTagNamePopped(X.SELECT), Z._resetInsertionMode(), Y.tagID !== X.SELECT) Z._processStartTag(Y);
        }
        break;
      }
    case X.SCRIPT:
    case X.TEMPLATE:
      {
        Q0(Z, Y);
        break;
      }
    default:
  }
}
function T7(Z, Y) {
  switch (Y.tagID) {
    case X.OPTGROUP:
      {
        if (Z.openElements.stackTop > 0 && Z.openElements.currentTagId === X.OPTION && Z.openElements.tagIDs[Z.openElements.stackTop - 1] === X.OPTGROUP) Z.openElements.pop();
        if (Z.openElements.currentTagId === X.OPTGROUP) Z.openElements.pop();
        break;
      }
    case X.OPTION:
      {
        if (Z.openElements.currentTagId === X.OPTION) Z.openElements.pop();
        break;
      }
    case X.SELECT:
      {
        if (Z.openElements.hasInSelectScope(X.SELECT)) Z.openElements.popUntilTagNamePopped(X.SELECT), Z._resetInsertionMode();
        break;
      }
    case X.TEMPLATE:
      {
        S0(Z, Y);
        break;
      }
    default:
  }
}
function pJ(Z, Y) {
  var J = Y.tagID;
  if (J === X.CAPTION || J === X.TABLE || J === X.TBODY || J === X.TFOOT || J === X.THEAD || J === X.TR || J === X.TD || J === X.TH) Z.openElements.popUntilTagNamePopped(X.SELECT), Z._resetInsertionMode(), Z._processStartTag(Y);else A7(Z, Y);
}
function aJ(Z, Y) {
  var J = Y.tagID;
  if (J === X.CAPTION || J === X.TABLE || J === X.TBODY || J === X.TFOOT || J === X.THEAD || J === X.TR || J === X.TD || J === X.TH) {
    if (Z.openElements.hasInTableScope(J)) Z.openElements.popUntilTagNamePopped(X.SELECT), Z._resetInsertionMode(), Z.onEndTag(Y);
  } else T7(Z, Y);
}
function nJ(Z, Y) {
  switch (Y.tagID) {
    case X.BASE:
    case X.BASEFONT:
    case X.BGSOUND:
    case X.LINK:
    case X.META:
    case X.NOFRAMES:
    case X.SCRIPT:
    case X.STYLE:
    case X.TEMPLATE:
    case X.TITLE:
      {
        Q0(Z, Y);
        break;
      }
    case X.CAPTION:
    case X.COLGROUP:
    case X.TBODY:
    case X.TFOOT:
    case X.THEAD:
      {
        Z.tmplInsertionModeStack[0] = U.IN_TABLE, Z.insertionMode = U.IN_TABLE, e0(Z, Y);
        break;
      }
    case X.COL:
      {
        Z.tmplInsertionModeStack[0] = U.IN_COLUMN_GROUP, Z.insertionMode = U.IN_COLUMN_GROUP, m5(Z, Y);
        break;
      }
    case X.TR:
      {
        Z.tmplInsertionModeStack[0] = U.IN_TABLE_BODY, Z.insertionMode = U.IN_TABLE_BODY, L4(Z, Y);
        break;
      }
    case X.TD:
    case X.TH:
      {
        Z.tmplInsertionModeStack[0] = U.IN_ROW, Z.insertionMode = U.IN_ROW, R4(Z, Y);
        break;
      }
    default:
      Z.tmplInsertionModeStack[0] = U.IN_BODY, Z.insertionMode = U.IN_BODY, i(Z, Y);
  }
}
function oJ(Z, Y) {
  if (Y.tagID === X.TEMPLATE) S0(Z, Y);
}
function m7(Z, Y) {
  if (Z.openElements.tmplCount > 0) Z.openElements.popUntilTagNamePopped(X.TEMPLATE), Z.activeFormattingElements.clearToLastMarker(), Z.tmplInsertionModeStack.shift(), Z._resetInsertionMode(), Z.onEof(Y);else T5(Z, Y);
}
function tJ(Z, Y) {
  if (Y.tagID === X.HTML) i(Z, Y);else w4(Z, Y);
}
function i7(Z, Y) {
  var J;
  if (Y.tagID === X.HTML) {
    if (!Z.fragmentContext) Z.insertionMode = U.AFTER_AFTER_BODY;
    if (Z.options.sourceCodeLocationInfo && Z.openElements.tagIDs[0] === X.HTML) {
      Z._setEndLocation(Z.openElements.items[0], Y);
      var K = Z.openElements.items[1];
      if (K && !((J = Z.treeAdapter.getNodeSourceCodeLocation(K)) === null || J === void 0 ? void 0 : J.endTag)) Z._setEndLocation(K, Y);
    }
  } else w4(Z, Y);
}
function w4(Z, Y) {
  Z.insertionMode = U.IN_BODY, q4(Z, Y);
}
function eJ(Z, Y) {
  switch (Y.tagID) {
    case X.HTML:
      {
        i(Z, Y);
        break;
      }
    case X.FRAMESET:
      {
        Z._insertElement(Y, L.HTML);
        break;
      }
    case X.FRAME:
      {
        Z._appendElement(Y, L.HTML), Y.ackSelfClosing = !0;
        break;
      }
    case X.NOFRAMES:
      {
        Q0(Z, Y);
        break;
      }
    default:
  }
}
function Z6(Z, Y) {
  if (Y.tagID === X.FRAMESET && !Z.openElements.isRootHtmlElementCurrent()) {
    if (Z.openElements.pop(), !Z.fragmentContext && Z.openElements.currentTagId !== X.FRAMESET) Z.insertionMode = U.AFTER_FRAMESET;
  }
}
function Y6(Z, Y) {
  switch (Y.tagID) {
    case X.HTML:
      {
        i(Z, Y);
        break;
      }
    case X.NOFRAMES:
      {
        Q0(Z, Y);
        break;
      }
    default:
  }
}
function J6(Z, Y) {
  if (Y.tagID === X.HTML) Z.insertionMode = U.AFTER_AFTER_FRAMESET;
}
function K6(Z, Y) {
  if (Y.tagID === X.HTML) i(Z, Y);else B4(Z, Y);
}
function B4(Z, Y) {
  Z.insertionMode = U.IN_BODY, q4(Z, Y);
}
function X6(Z, Y) {
  switch (Y.tagID) {
    case X.HTML:
      {
        i(Z, Y);
        break;
      }
    case X.NOFRAMES:
      {
        Q0(Z, Y);
        break;
      }
    default:
  }
}
function Q6(Z, Y) {
  Y.chars = $, Z._insertCharacters(Y);
}
function V6(Z, Y) {
  Z._insertCharacters(Y), Z.framesetOk = !1;
}
function c7(Z) {
  while (Z.treeAdapter.getNamespaceURI(Z.openElements.current) !== L.HTML && Z.openElements.currentTagId !== void 0 && !Z._isIntegrationPoint(Z.openElements.currentTagId, Z.openElements.current)) Z.openElements.pop();
}
function z6(Z, Y) {
  if (y7(Y)) c7(Z), Z._startTagOutsideForeignContent(Y);else {
    var J = Z._getAdjustedCurrentElement(),
      K = Z.treeAdapter.getNamespaceURI(J);
    if (K === L.MATHML) E5(Y);else if (K === L.SVG) f7(Y), I5(Y);
    if (U4(Y), Y.selfClosing) Z._appendElement(Y, K);else Z._insertElement(Y, K);
    Y.ackSelfClosing = !0;
  }
}
function H6(Z, Y) {
  if (Y.tagID === X.P || Y.tagID === X.BR) {
    c7(Z), Z._endTagOutsideForeignContent(Y);
    return;
  }
  for (var J = Z.openElements.stackTop; J > 0; J--) {
    var K = Z.openElements.items[J];
    if (Z.treeAdapter.getNamespaceURI(K) === L.HTML) {
      Z._endTagOutsideForeignContent(Y);
      break;
    }
    var Q = Z.treeAdapter.getTagName(K);
    if (Q.toLowerCase() === Y.tagName) {
      Y.tagName = Q, Z.openElements.shortenToLength(J);
      break;
    }
  }
}
var EQ = String.prototype.codePointAt == null ? function (Z, Y) {
  return (Z.charCodeAt(Y) & 64512) === 55296 ? (Z.charCodeAt(Y) - 55296) * 1024 + Z.charCodeAt(Y + 1) - 56320 + 65536 : Z.charCodeAt(Y);
} : function (Z, Y) {
  return Z.codePointAt(Y);
};
function d7(Z, Y) {
  return function J(K) {
    var Q,
      V = 0,
      z = "";
    while (Q = Z.exec(K)) {
      if (V !== Q.index) z += K.substring(V, Q.index);
      z += Y.get(Q[0].charCodeAt(0)), V = Q.index + 1;
    }
    return z + K.substring(V);
  };
}
var r7 = d7(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])),
  l7 = d7(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var W6 = new Set([w.AREA, w.BASE, w.BASEFONT, w.BGSOUND, w.BR, w.COL, w.EMBED, w.FRAME, w.HR, w.IMG, w.INPUT, w.KEYGEN, w.LINK, w.META, w.PARAM, w.SOURCE, w.TRACK, w.WBR]);
function U6(Z, Y) {
  return Y.treeAdapter.isElementNode(Z) && Y.treeAdapter.getNamespaceURI(Z) === L.HTML && W6.has(Y.treeAdapter.getTagName(Z));
}
var B6 = {
  treeAdapter: Z0,
  scriptingEnabled: !0
};
function i5(Z, Y) {
  var J = _objectSpread(_objectSpread({}, B6), Y);
  return s7(Z, J);
}
function F6(Z, Y) {
  var J = "",
    K = Y.treeAdapter.isElementNode(Z) && Y.treeAdapter.getTagName(Z) === w.TEMPLATE && Y.treeAdapter.getNamespaceURI(Z) === L.HTML ? Y.treeAdapter.getTemplateContent(Z) : Z,
    Q = Y.treeAdapter.getChildNodes(K);
  if (Q) {
    var _iterator16 = _createForOfIteratorHelper(Q),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var V = _step16.value;
        J += s7(V, Y);
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
  }
  return J;
}
function s7(Z, Y) {
  if (Y.treeAdapter.isElementNode(Z)) return w6(Z, Y);
  if (Y.treeAdapter.isTextNode(Z)) return j6(Z, Y);
  if (Y.treeAdapter.isCommentNode(Z)) return L6(Z, Y);
  if (Y.treeAdapter.isDocumentTypeNode(Z)) return R6(Z, Y);
  return "";
}
function w6(Z, Y) {
  var J = Y.treeAdapter.getTagName(Z);
  return "<".concat(J).concat(q6(Z, Y), ">").concat(U6(Z, Y) ? "" : "".concat(F6(Z, Y), "</").concat(J, ">"));
}
function q6(Z, _ref23) {
  var Y = _ref23.treeAdapter;
  var J = "";
  var _iterator17 = _createForOfIteratorHelper(Y.getAttrList(Z)),
    _step17;
  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var K = _step17.value;
      if (J += " ", K.namespace) switch (K.namespace) {
        case L.XML:
          {
            J += "xml:".concat(K.name);
            break;
          }
        case L.XMLNS:
          {
            if (K.name !== "xmlns") J += "xmlns:";
            J += K.name;
            break;
          }
        case L.XLINK:
          {
            J += "xlink:".concat(K.name);
            break;
          }
        default:
          J += "".concat(K.prefix, ":").concat(K.name);
      } else J += K.name;
      J += "=\"".concat(r7(K.value), "\"");
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }
  return J;
}
function j6(Z, Y) {
  var J = Y.treeAdapter,
    K = J.getTextNodeContent(Z),
    Q = J.getParentNode(Z),
    V = Q && J.isElementNode(Q) && J.getTagName(Q);
  return V && J.getNamespaceURI(Q) === L.HTML && G5(V, Y.scriptingEnabled) ? K : l7(K);
}
function L6(Z, _ref24) {
  var Y = _ref24.treeAdapter;
  return "<!--".concat(Y.getCommentNodeContent(Z), "-->");
}
function R6(Z, _ref25) {
  var Y = _ref25.treeAdapter;
  return "<!DOCTYPE ".concat(Y.getDocumentTypeNodeName(Z), ">");
}
function p7(Z, Y) {
  return b1.parse(Z, Y);
}
function a7(Z, Y, J) {
  if (typeof Z === "string") J = Y, Y = Z, Z = null;
  var K = b1.getFragmentParser(Z, J);
  return K.tokenizer.write(Y, !0), K.getFragment();
}
function n7(Z) {
  var Y = Z.includes('"') ? "'" : '"';
  return Y + Z + Y;
}
function P6(Z, Y, J) {
  var K = "!DOCTYPE ";
  if (Z) K += Z;
  if (Y) K += " PUBLIC ".concat(n7(Y));else if (J) K += " SYSTEM";
  if (J) K += " ".concat(n7(J));
  return K;
}
var j0 = {
  isCommentNode: C0,
  isElementNode: O,
  isTextNode: r,
  createDocument: function createDocument() {
    var Z = new a([]);
    return Z["x-mode"] = V4.DOCUMENT_MODE.NO_QUIRKS, Z;
  },
  createDocumentFragment: function createDocumentFragment() {
    return new a([]);
  },
  createElement: function createElement(Z, Y, J) {
    var K = Object.create(null),
      Q = Object.create(null),
      V = Object.create(null);
    for (var B = 0; B < J.length; B++) {
      var F = J[B].name;
      K[F] = J[B].value, Q[F] = J[B].namespace, V[F] = J[B].prefix;
    }
    var z = new m0(Z, K, []);
    return z.namespace = Y, z["x-attribsNamespace"] = Q, z["x-attribsPrefix"] = V, z;
  },
  createCommentNode: function createCommentNode(Z) {
    return new A0(Z);
  },
  createTextNode: function createTextNode(Z) {
    return new W0(Z);
  },
  appendChild: function appendChild(Z, Y) {
    var J = Z.children[Z.children.length - 1];
    if (J) J.next = Y, Y.prev = J;
    Z.children.push(Y), Y.parent = Z;
  },
  insertBefore: function insertBefore(Z, Y, J) {
    var K = Z.children.indexOf(J),
      Q = J.prev;
    if (Q) Q.next = Y, Y.prev = Q;
    J.prev = Y, Y.next = J, Z.children.splice(K, 0, Y), Y.parent = Z;
  },
  setTemplateContent: function setTemplateContent(Z, Y) {
    j0.appendChild(Z, Y);
  },
  getTemplateContent: function getTemplateContent(Z) {
    return Z.children[0];
  },
  setDocumentType: function setDocumentType(Z, Y, J, K) {
    var Q = P6(Y, J, K),
      V = Z.children.find(function (z) {
        return G1(z) && z.name === "!doctype";
      });
    if (V) V.data = Q !== null && Q !== void 0 ? Q : null;else V = new T0("!doctype", Q), j0.appendChild(Z, V);
    V["x-name"] = Y, V["x-publicId"] = J, V["x-systemId"] = K;
  },
  setDocumentMode: function setDocumentMode(Z, Y) {
    Z["x-mode"] = Y;
  },
  getDocumentMode: function getDocumentMode(Z) {
    return Z["x-mode"];
  },
  detachNode: function detachNode(Z) {
    if (Z.parent) {
      var Y = Z.parent.children.indexOf(Z),
        J = Z.prev,
        K = Z.next;
      if (Z.prev = null, Z.next = null, J) J.next = K;
      if (K) K.prev = J;
      Z.parent.children.splice(Y, 1), Z.parent = null;
    }
  },
  insertText: function insertText(Z, Y) {
    var J = Z.children[Z.children.length - 1];
    if (J && r(J)) J.data += Y;else j0.appendChild(Z, j0.createTextNode(Y));
  },
  insertTextBefore: function insertTextBefore(Z, Y, J) {
    var K = Z.children[Z.children.indexOf(J) - 1];
    if (K && r(K)) K.data += Y;else j0.insertBefore(Z, j0.createTextNode(Y), J);
  },
  adoptAttributes: function adoptAttributes(Z, Y) {
    for (var J = 0; J < Y.length; J++) {
      var K = Y[J].name;
      if (Z.attribs[K] === void 0) Z.attribs[K] = Y[J].value, Z["x-attribsNamespace"][K] = Y[J].namespace, Z["x-attribsPrefix"][K] = Y[J].prefix;
    }
  },
  getFirstChild: function getFirstChild(Z) {
    return Z.children[0];
  },
  getChildNodes: function getChildNodes(Z) {
    return Z.children;
  },
  getParentNode: function getParentNode(Z) {
    return Z.parent;
  },
  getAttrList: function getAttrList(Z) {
    return Z.attributes;
  },
  getTagName: function getTagName(Z) {
    return Z.name;
  },
  getNamespaceURI: function getNamespaceURI(Z) {
    return Z.namespace;
  },
  getTextNodeContent: function getTextNodeContent(Z) {
    return Z.data;
  },
  getCommentNodeContent: function getCommentNodeContent(Z) {
    return Z.data;
  },
  getDocumentTypeNodeName: function getDocumentTypeNodeName(Z) {
    var Y;
    return (Y = Z["x-name"]) !== null && Y !== void 0 ? Y : "";
  },
  getDocumentTypeNodePublicId: function getDocumentTypeNodePublicId(Z) {
    var Y;
    return (Y = Z["x-publicId"]) !== null && Y !== void 0 ? Y : "";
  },
  getDocumentTypeNodeSystemId: function getDocumentTypeNodeSystemId(Z) {
    var Y;
    return (Y = Z["x-systemId"]) !== null && Y !== void 0 ? Y : "";
  },
  isDocumentTypeNode: function isDocumentTypeNode(Z) {
    return G1(Z) && Z.name === "!doctype";
  },
  setNodeSourceCodeLocation: function setNodeSourceCodeLocation(Z, Y) {
    if (Y) Z.startIndex = Y.startOffset, Z.endIndex = Y.endOffset;
    Z.sourceCodeLocation = Y;
  },
  getNodeSourceCodeLocation: function getNodeSourceCodeLocation(Z) {
    return Z.sourceCodeLocation;
  },
  updateNodeSourceCodeLocation: function updateNodeSourceCodeLocation(Z, Y) {
    if (Y.endOffset != null) Z.endIndex = Y.endOffset;
    Z.sourceCodeLocation = _objectSpread(_objectSpread({}, Z.sourceCodeLocation), Y);
  }
};
function o7(Z, Y, J, K) {
  var Q;
  if ((Q = Y.treeAdapter) !== null && Q !== void 0 || (Y.treeAdapter = j0), Y.scriptingEnabled !== !1) Y.scriptingEnabled = !0;
  return J ? p7(Z, Y) : a7(K, Z, Y);
}
var v6 = {
  treeAdapter: j0
};
function t7(Z) {
  var Y = "length" in Z ? Z : [Z];
  for (var K = 0; K < Y.length; K += 1) {
    var _Array$prototype$spli;
    var Q = Y[K];
    if (n(Q)) (_Array$prototype$spli = Array.prototype.splice).call.apply(_Array$prototype$spli, [Y, K, 1].concat(_toConsumableArray(Q.children)));
  }
  var J = "";
  for (var _K6 = 0; _K6 < Y.length; _K6 += 1) {
    var _Q8 = Y[_K6];
    J += i5(_Q8, v6);
  }
  return J;
}
var O6 = aZ(function (Z, Y, J, K) {
    return Y._useHtmlParser2 ? PZ(Z, Y) : o7(Z, Y, J, K);
  }),
  N1 = J7(O6, function (Z, Y) {
    return Y._useHtmlParser2 ? u1(Z, Y) : t7(Z);
  });
var e7 = /*#__PURE__*/function (_v) {
  _inherits(e7, _v);
  var _super11 = _createSuper(e7);
  function e7() {
    var _this30;
    _classCallCheck(this, e7);
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }
    _this30 = _super11.call.apply(_super11, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this30), "writeWith", "typescript");
    _defineProperty(_assertThisInitialized(_this30), "init", {
      name: "HentaiVN",
      faviconUrl: h0("/wp-content/uploads/2024/02/cropped-hentaivn-512x512-1-32x32.png"),
      rootUrl: "https://hentaivn.cx/",
      version: l5,
      description: s5,
      language: "vi-VN"
    });
    _defineProperty(_assertThisInitialized(_this30), "_suggestStore", new Map());
    return _this30;
  }
  _createClass(e7, [{
    key: "getURL",
    value: function () {
      var _getURL = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(Z, Y) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "".concat(this.baseUrl, "/truyen-hentai/").concat(Z) + (Y ? "/".concat(Y) : ""));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getURL(_x2, _x3) {
        return _getURL.apply(this, arguments);
      }
      return getURL;
    }()
  }, {
    key: "parseMangas",
    value: function parseMangas(Z) {
      return Z(".site-content .manga").toArray().map(function (Y) {
        var _J$find$attr, _J$find$first$find$at;
        var J = Z(Y);
        return d({
          name: J.find("h3").text().trim(),
          comicId: (_J$find$attr = J.find("a").attr("href")) === null || _J$find$attr === void 0 ? void 0 : _J$find$attr.split("/").filter(Boolean).at(-1),
          image: h0(J.find("img").data("src")),
          rate: Number.parseFloat(J.find(".itemReviewed").next("span").text().trim()) || void 0,
          lastChap: J.find(".chapter-item").length ? d({
            name: J.find(".chapter-item").first().find("a").text().trim(),
            chapterId: (_J$find$first$find$at = J.find(".chapter-item").first().find("a").attr("href")) === null || _J$find$first$find$at === void 0 ? void 0 : _J$find$first$find$at.split("/").filter(Boolean).at(-1)
          }) : void 0
        });
      });
    }
  }, {
    key: "home",
    value: function () {
      var _home = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var Z;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = N1;
              _context3.next = 3;
              return fetch("").then( /*#__PURE__*/function () {
                var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(Y) {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!Y.ok) {
                          _context2.next = 4;
                          break;
                        }
                        _context2.t0 = Y.text();
                        _context2.next = 9;
                        break;
                      case 4:
                        _context2.t1 = Promise;
                        _context2.next = 7;
                        return Y.text();
                      case 7:
                        _context2.t2 = _context2.sent;
                        _context2.t0 = _context2.t1.reject.call(_context2.t1, _context2.t2);
                      case 9:
                        return _context2.abrupt("return", _context2.t0);
                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x4) {
                  return _ref26.apply(this, arguments);
                };
              }());
            case 3:
              _context3.t1 = _context3.sent;
              Z = (0, _context3.t0)(_context3.t1);
              return _context3.abrupt("return", d({
                carousel: d({
                  items: Z(".slider__item").toArray().map(function (Y) {
                    var _J$find$attr2;
                    var J = Z(Y);
                    return d({
                      image: h0(J.find("img").data("src")),
                      comicId: (_J$find$attr2 = J.find("a").attr("href")) === null || _J$find$attr2 === void 0 ? void 0 : _J$find$attr2.split("/").filter(Boolean).at(-1),
                      name: J.find("h4").text().trim()
                    });
                  }),
                  aspectRatio: 0.7352941176470589,
                  maxHeightBuilder: 400
                }),
                categories: [{
                  name: "Mới nhất",
                  items: this.parseMangas(Z),
                  gridView: !0
                }]
              }));
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function home() {
        return _home.apply(this, arguments);
      }
      return home;
    }()
  }, {
    key: "getCategory",
    value: function () {
      var _getCategory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(Z) {
        var _Y$attr;
        var Y, J;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.t0 = N1;
              _context5.next = 3;
              return fetch("/".concat((Z.categoryId === "latest" ? "" : Z.categoryId).replace(/_/g, "/")) + (Z.page > 1 ? "/page/".concat(Z.page, "/") : "/") + (Z.filters.m_orderby ? "?m_orderby=".concat(Z.filters.m_orderby) : "")).then( /*#__PURE__*/function () {
                var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(K) {
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!K.ok) {
                          _context4.next = 4;
                          break;
                        }
                        _context4.t0 = K.text();
                        _context4.next = 9;
                        break;
                      case 4:
                        _context4.t1 = Promise;
                        _context4.next = 7;
                        return K.text();
                      case 7:
                        _context4.t2 = _context4.sent;
                        _context4.t0 = _context4.t1.reject.call(_context4.t1, _context4.t2);
                      case 9:
                        return _context4.abrupt("return", _context4.t0);
                      case 10:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x6) {
                  return _ref27.apply(this, arguments);
                };
              }());
            case 3:
              _context5.t1 = _context5.sent;
              Y = (0, _context5.t0)(_context5.t1);
              J = Y(".tab-wrap").length > 0 ? [d({
                name: "Sắp xếp",
                key: "m_orderby",
                multiple: !1,
                options: [{
                  name: "Mới nhất",
                  value: "latest"
                }, {
                  name: "A-Z",
                  value: "alphabet"
                }, {
                  name: "Đánh giá",
                  value: "rating"
                }, {
                  name: "Xu hướng",
                  value: "trending"
                }, {
                  name: "Lượt xem",
                  value: "views"
                }, {
                  name: "Bộ mới",
                  value: "new-manga"
                }]
              })] : void 0;
              return _context5.abrupt("return", d({
                name: Y(".item-title.h4").text().trim(),
                url: "",
                items: this.parseMangas(Y),
                page: Z.page,
                totalItems: Number.parseInt(Y(".h4:contains('kết quả')").text().trim()),
                totalPages: Number.parseInt((_Y$attr = Y(".wp-pagenavi > a.last").attr("href")) === null || _Y$attr === void 0 ? void 0 : _Y$attr.split("/").filter(Boolean).at(-1)),
                filters: J
              }));
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getCategory(_x5) {
        return _getCategory.apply(this, arguments);
      }
      return getCategory;
    }()
  }, {
    key: "getExplorer",
    value: function () {
      var _getExplorer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(Z, Y) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.getCategory({
                categoryId: "latest",
                page: Z,
                filters: Y || {}
              }));
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function getExplorer(_x7, _x8) {
        return _getExplorer.apply(this, arguments);
      }
      return getExplorer;
    }()
  }, {
    key: "getDetails",
    value: function () {
      var _getDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(Z) {
        var _Y$text$match$, _Y$text$match, _Y$html;
        var Y, J;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.t0 = N1;
              _context8.next = 3;
              return fetch("/truyen-hentai/".concat(Z)).then( /*#__PURE__*/function () {
                var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(K) {
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        if (!K.ok) {
                          _context7.next = 4;
                          break;
                        }
                        _context7.t0 = K.text();
                        _context7.next = 9;
                        break;
                      case 4:
                        _context7.t1 = Promise;
                        _context7.next = 7;
                        return K.text();
                      case 7:
                        _context7.t2 = _context7.sent;
                        _context7.t0 = _context7.t1.reject.call(_context7.t1, _context7.t2);
                      case 9:
                        return _context7.abrupt("return", _context7.t0);
                      case 10:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function (_x10) {
                  return _ref28.apply(this, arguments);
                };
              }());
            case 3:
              _context8.t1 = _context8.sent;
              Y = (0, _context8.t0)(_context8.t1);
              J = Y(".related-manga .related-reading-wrap").toArray().map(function (K) {
                var _Q$find$attr;
                var Q = Y(K);
                return d({
                  name: Q.find("h5").text().trim(),
                  originalName: Q.find("h5 > a").attr("title"),
                  comicId: (_Q$find$attr = Q.find("a").attr("href")) === null || _Q$find$attr === void 0 ? void 0 : _Q$find$attr.split("/").filter(Boolean).at(-1),
                  image: h0(Q.find("img").data("src"))
                });
              });
              return _context8.abrupt("return", d({
                name: Y(".post-title").text().trim(),
                originalName: Y(".summary-heading h5:contains('Alternative')").parent().parent().find(".summary-content").text().trim(),
                image: h0(Y(".summary_image img").data("src")),
                status: Y(".summary-heading h5:contains('Status')").parent().parent().find(".summary-content").text().trim().toLowerCase() === "OnGoing" ? x1.Ongoing : x1.Completed,
                rate: d({
                  value: Number.parseFloat(Y(".post-total-rating .score").text().trim()) || 0,
                  best: 5,
                  count: 0
                }),
                genres: Y(".genres-content a").toArray().map(function (K) {
                  var _Q$attr;
                  var Q = Y(K);
                  return d({
                    name: Q.text().trim(),
                    genreId: "the-loai_".concat((_Q$attr = Q.attr("href")) === null || _Q$attr === void 0 ? void 0 : _Q$attr.split("/").filter(Boolean).at(-1))
                  });
                }),
                author: Y(".author-content").text().trim() || void 0,
                views: y6((_Y$text$match$ = (_Y$text$match = Y(".summary-content:contains(' views')").text().match(/([\d.]+\w) views/)) === null || _Y$text$match === void 0 ? void 0 : _Y$text$match[1]) !== null && _Y$text$match$ !== void 0 ? _Y$text$match$ : ""),
                description: (_Y$html = Y(".description-summary .summary__content").html()) !== null && _Y$html !== void 0 ? _Y$html : "",
                chapters: Y(".wp-manga-chapter a").toArray().reverse().map(function (K) {
                  var _Q$attr2;
                  var Q = Y(K);
                  return d({
                    name: Q.text().trim(),
                    chapterId: (_Q$attr2 = Q.attr("href")) === null || _Q$attr2 === void 0 ? void 0 : _Q$attr2.split("/").filter(Boolean).at(-1),
                    time: new Date(Q.find(".chapter-release-date").text().trim().split("/").reverse().join("/"))
                  });
                }),
                lastModified: new Date(Y('[property="article:modified_time"]').attr("content")),
                extra: JSON.stringify(J)
              }));
            case 7:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function getDetails(_x9) {
        return _getDetails.apply(this, arguments);
      }
      return getDetails;
    }()
  }, {
    key: "getSuggest",
    value: function () {
      var _getSuggest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(Z) {
        var _Z$metaComic$extra;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", JSON.parse((_Z$metaComic$extra = Z.metaComic.extra) !== null && _Z$metaComic$extra !== void 0 ? _Z$metaComic$extra : ""));
            case 1:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function getSuggest(_x11) {
        return _getSuggest.apply(this, arguments);
      }
      return getSuggest;
    }()
  }, {
    key: "getPages",
    value: function () {
      var _getPages = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(Z, Y) {
        var J;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.t0 = N1;
              _context11.next = 3;
              return fetch("/truyen-hentai/".concat(Z, "/").concat(Y)).then( /*#__PURE__*/function () {
                var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(K) {
                  return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        if (!K.ok) {
                          _context10.next = 4;
                          break;
                        }
                        _context10.t0 = K.text();
                        _context10.next = 9;
                        break;
                      case 4:
                        _context10.t1 = Promise;
                        _context10.next = 7;
                        return K.text();
                      case 7:
                        _context10.t2 = _context10.sent;
                        _context10.t0 = _context10.t1.reject.call(_context10.t1, _context10.t2);
                      case 9:
                        return _context10.abrupt("return", _context10.t0);
                      case 10:
                      case "end":
                        return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function (_x14) {
                  return _ref29.apply(this, arguments);
                };
              }());
            case 3:
              _context11.t1 = _context11.sent;
              J = (0, _context11.t0)(_context11.t1);
              return _context11.abrupt("return", d(J("img.wp-manga-chapter-img").toArray().map(function (K) {
                var _J$attr;
                return h0((_J$attr = J(K).attr("src")) === null || _J$attr === void 0 ? void 0 : _J$attr.trim());
              })));
            case 6:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function getPages(_x12, _x13) {
        return _getPages.apply(this, arguments);
      }
      return getPages;
    }()
  }, {
    key: "search",
    value: function search(Z) {
      return this.getCategory({
        categoryId: "latest",
        page: Z.page,
        filters: _objectSpread(_objectSpread({}, Z.filters), {}, {
          s: [Z.keyword]
        })
      });
    }
  }]);
  return e7;
}(v4);
d5(e7);
function y6(Z) {
  var _Y$;
  var Y = Z.trim().match(/^([\d,.]+)([KMB]?)$/i);
  if (!(Y !== null && Y !== void 0 && Y[1])) return NaN;
  var J = parseFloat(Y[1].replace(/,/g, "")),
    K = (_Y$ = Y[2]) === null || _Y$ === void 0 ? void 0 : _Y$.toUpperCase();
  return Math.round(J * ({
    "": 1,
    K: 1000,
    M: 1e6,
    B: 1e9
  }[K !== null && K !== void 0 ? K : ""] || 1));
}
