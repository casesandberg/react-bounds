module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _wrap = __webpack_require__(1);

	Object.defineProperty(exports, 'wrap', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_wrap).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = BoundsWrapper;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactcss = __webpack_require__(4);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _debounce = __webpack_require__(5);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _listener = __webpack_require__(6);

	var listener = _interopRequireWildcard(_listener);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function BoundsWrapper() {
	  return function (Target) {
	    var Bounds = function (_Component) {
	      _inherits(Bounds, _Component);

	      function Bounds(props, context) {
	        _classCallCheck(this, Bounds);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bounds).call(this, props, context));

	        _this.state = {
	          loaded: false,
	          width: 0,
	          height: 0,
	          activeBounds: []
	        };


	        _this.debounce = (0, _debounce2.default)(function () {
	          _this.setState({ debounced: true });
	        }, 100);

	        _this.handleResize = _this.handleResize.bind(_this);
	        _this.handleLookup = _this.handleLookup.bind(_this);
	        return _this;
	      }

	      _createClass(Bounds, [{
	        key: 'handleResize',
	        value: function handleResize(log) {
	          var component = _reactDom2.default.findDOMNode(this.refs.wrap);
	          var width = component.clientWidth;
	          var height = component.clientHeight;

	          this.setState({
	            loaded: true,
	            debounced: false,
	            activeBounds: this.calculateBounds(width, height),
	            width: width,
	            height: height
	          });
	          this.debounce();
	        }
	      }, {
	        key: 'calculateBounds',
	        value: function calculateBounds(newWidth, newHeight) {
	          var bounds = _react.Component.bounds && _react.Component.bounds();
	          var activeBounds = [];

	          if (bounds) {
	            for (var boundName in bounds) {
	              if (bounds.hasOwnProperty(boundName)) {
	                var boundValue = bounds[boundName];

	                var minWidth = boundValue.minWidth || 0;
	                var maxWidth = boundValue.maxWidth || 99999;

	                if (boundValue.minWidth || boundValue.maxWidth) {
	                  if (newWidth > minWidth && newWidth < maxWidth) {
	                    activeBounds.push(boundName);
	                  }
	                }

	                var minHeight = boundValue.minHeight || 0;
	                var maxHeight = boundValue.maxHeight || 99999;

	                if (boundValue.minHeight || boundValue.minHeight) {
	                  if (newHeight > minHeight && newHeight < minHeight) {
	                    activeBounds.push(boundName);
	                  }
	                }
	              }
	            }
	          }

	          return activeBounds;
	        }
	      }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          var component = _reactDom2.default.findDOMNode(this.refs.component);
	          listener.add(component, this.handleResize);

	          if (!this.state.loaded) {
	            this.handleResize();
	          }
	        }
	      }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	          if (this.state.loaded && _.isEqual(this.state.activeBounds, nextState.activeBounds) && nextState.debounced !== true) {
	            return false;
	          }

	          return true;
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          var component = _reactDom2.default.findDOMNode(this.refs.component);
	          listener.remove(component, this.handleResize);
	        }
	      }, {
	        key: 'handleLookup',
	        value: function handleLookup(bound) {
	          return this.state.activeBounds.indexOf(bound) > -1;
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var classes = (0, _classnames2.default)(this.state.activeBounds);
	          var styles = (0, _reactcss2.default)({
	            'default': {
	              wrap: {
	                position: 'relative',
	                height: '100%'
	              },
	              component: {
	                height: '100%'
	              }
	            }
	          });

	          var _state = this.state;
	          var width = _state.width;
	          var height = _state.height;
	          var activeBounds = _state.activeBounds;
	          var loaded = _state.loaded;
	          var Target = this.props.target;


	          console.log(width, height, Target);

	          return _react2.default.createElement(
	            'div',
	            { ref: 'wrap', style: styles.wrap },
	            _react2.default.createElement(
	              'div',
	              { ref: 'component', className: classes, style: styles.component },
	              loaded && width > 0 ? _react2.default.createElement(Target, _extends({}, this.props, {
	                width: width,
	                height: height,
	                activeBounds: activeBounds,
	                isBound: this.handleLookup })) : null
	            )
	          );
	        }
	      }]);

	      return Bounds;
	    }(_react.Component);

	    Bounds.defaultProps = {
	      target: _react2.default.createElement('div', null)
	    };


	    return Bounds;
	  };
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("reactcss");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("lodash/debounce");

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.add = add;
	exports.remove = remove;
	// http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
	// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

	function add(element, callback) {
	  if (!element.resizeListener) {
	    element.resizeListener = [];
	    addChildTrigger(element);
	  }

	  element.resizeListener.push(callback);
	}

	function remove(element, callback) {
	  element.resizeListener.splice(element.resizeListener.indexOf(callback), 1);
	}

	var requestFrame = function requestFrame(callback) {
	  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (callback) {
	    return window.setTimeout(callback, 1000 / 60);
	  };

	  return raf(callback);
	};

	var cancelFrame = function cancelFrame(id) {
	  var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;

	  return cancel(id);
	};

	function resizeListener(e) {
	  var element = e.target || e.srcElement;
	  if (element.resizeAnimation) {
	    cancelFrame(element.resizeAnimation);
	  }

	  element.resizeAnimation = requestFrame(function () {
	    var trigger = element.resizeTrigger;
	    trigger.resizeListener.forEach(function (callback) {
	      callback.call(trigger, e);
	    });
	  });
	}

	function objectLoad(e) {
	  this.contentDocument.defaultView.resizeTrigger = this.resizeElement;
	  this.contentDocument.defaultView.addEventListener('resize', resizeListener);
	}

	function addChildTrigger(element) {
	  var obj = document.createElement('object');
	  obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');

	  // Make it not focusable
	  obj.setAttribute('tabindex', '-1');
	  obj.resizeElement = element;
	  obj.onload = objectLoad;
	  obj.data = 'about:blank';

	  element.appendChild(obj);
	  element.resizeTrigger = obj;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ }
/******/ ]);