"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLogin = void 0;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useLogin = function useLogin(url, key) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _react.useState)(),
      _ref2 = _slicedToArray(_ref, 2),
      token = _ref2[0],
      tokenSet = _ref2[1];

  var _useSearchParams = (0, _reactRouterDom.useSearchParams)(),
      _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
      searchParams = _useSearchParams2[0],
      setSearchParams = _useSearchParams2[1];

  var login = function login() {
    window.location.replace(url);
  };

  var logout = function logout() {
    return tokenSet();
  };

  (0, _react.useEffect)(function () {
    if (searchParams.has(key)) {
      var t = searchParams.get(key);

      if (t) {
        searchParams["delete"](key);
        setSearchParams(searchParams);
        tokenSet(t);
      }
    }
  }, [key, searchParams, setSearchParams]);
  return [login, logout, token, tokenSet];
};

exports.useLogin = useLogin;