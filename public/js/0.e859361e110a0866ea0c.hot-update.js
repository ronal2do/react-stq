webpackHotUpdate(0,{

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(18);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(15);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(16);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _VideoBg = __webpack_require__(529);\n\nvar _VideoBg2 = _interopRequireDefault(_VideoBg);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n\tHero: {\n\t\tdisplayName: 'Hero'\n\t}\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n\tfilename: '/Users/sotaquedev/Desktop/NEHSRWMM/app/components/Hero.js',\n\tcomponents: _components,\n\tlocals: [module],\n\timports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n\tfilename: '/Users/sotaquedev/Desktop/NEHSRWMM/app/components/Hero.js',\n\tcomponents: _components,\n\tlocals: [],\n\timports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n\treturn function (Component) {\n\t\treturn _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n\t};\n}\n\nvar Hero = _wrapComponent('Hero')(function (_get__$Component) {\n\t_inherits(Hero, _get__$Component);\n\n\tfunction Hero() {\n\t\t_classCallCheck(this, Hero);\n\n\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(Hero).apply(this, arguments));\n\t}\n\n\t_createClass(Hero, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar divStyle = {\n\t\t\t\theight: '100vh'\n\t\t\t};\n\t\t\tvar style2 = {\n\t\t\t\tdisplay: 'fixed',\n\t\t\t\ttop: 0,\n\t\t\t\tleft: -868,\n\t\t\t\tbottom: 0,\n\t\t\t\tright: 0,\n\t\t\t\tzIndex: -100,\n\t\t\t\twidth: 1882.36,\n\t\t\t\theight: 1058\n\t\t\t};\n\t\t\tvar marginTop = {\n\t\t\t\tmarginTop: 418.5\n\t\t\t};\n\t\t\tvar zIndex = {\n\t\t\t\tzIndex: 3,\n\t\t\t\topacity: 0.65\n\t\t\t};\n\t\t\tvar transformTranslate3d = {\n\t\t\t\ttransformTranslate3d: (0, 0, 0)\n\t\t\t};\n\n\t\t\tvar _VideoBg_Component = _get__('VideoBg');\n\n\t\t\treturn _react3.default.createElement(\n\t\t\t\t'section',\n\t\t\t\t{ id: 'home', className: 'hero video-background dark center nav-trigger', style: divStyle },\n\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ id: 'bgVideo', 'data-0': 'transform: translate3d(0px, 0px, 0px);', className: 'skrollable skrollable-between', style: transformTranslate3d },\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'video',\n\t\t\t\t\t\t{ id: 'video_background', preload: 'auto', autoplay: 'autoplay', loop: 'loop', style: style2 },\n\t\t\t\t\t\t_react3.default.createElement(_VideoBg_Component, { videoUrl: '/video/video.mp4' })\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'container hero-content', style: marginTop },\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'col-xs-12 col-sm-10 col-sm-offset-1 skrollable skrollable-between', 'data-0': 'opacity: 0.65;', 'data-top-bottom': 'opacity: 0;', style: zIndex },\n\t\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t\t'h1',\n\t\t\t\t\t\t\t{ className: 'titulo' },\n\t\t\t\t\t\t\t'stq'\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Hero;\n}(_get__('React').Component));\n\nexports.default = _get__('Hero');\nvar _RewiredData__ = {};\nvar _RewireAPI__ = {};\n\n(function () {\n\tfunction addPropertyToAPIObject(name, value) {\n\t\tObject.defineProperty(_RewireAPI__, name, {\n\t\t\tvalue: value,\n\t\t\tenumerable: false,\n\t\t\tconfigurable: true\n\t\t});\n\t}\n\n\taddPropertyToAPIObject('__get__', _get__);\n\taddPropertyToAPIObject('__GetDependency__', _get__);\n\taddPropertyToAPIObject('__Rewire__', _set__);\n\taddPropertyToAPIObject('__set__', _set__);\n\taddPropertyToAPIObject('__reset__', _reset__);\n\taddPropertyToAPIObject('__ResetDependency__', _reset__);\n\taddPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n\treturn _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];\n}\n\nfunction _get_original__(variableName) {\n\tswitch (variableName) {\n\t\tcase 'VideoBg':\n\t\t\treturn _VideoBg2.default;\n\n\t\tcase 'React':\n\t\t\treturn _react3.default;\n\n\t\tcase 'Hero':\n\t\t\treturn Hero;\n\t}\n\n\treturn undefined;\n}\n\nfunction _assign__(variableName, value) {\n\tif (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n\t\treturn _set_original__(variableName, value);\n\t} else {\n\t\treturn _RewiredData__[variableName] = value;\n\t}\n}\n\nfunction _set_original__(variableName, _value) {\n\tswitch (variableName) {}\n\n\treturn undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n\tvar oldValue = _get__(variableName);\n\n\tvar newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n\t_assign__(variableName, newValue);\n\n\treturn prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n\tif ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n\t\tObject.keys(variableName).forEach(function (name) {\n\t\t\t_RewiredData__[name] = variableName[name];\n\t\t});\n\t} else {\n\t\treturn _RewiredData__[variableName] = value;\n\t}\n}\n\nfunction _reset__(variableName) {\n\tdelete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n\tvar rewiredVariableNames = Object.keys(object);\n\tvar previousValues = {};\n\n\tfunction reset() {\n\t\trewiredVariableNames.forEach(function (variableName) {\n\t\t\t_RewiredData__[variableName] = previousValues[variableName];\n\t\t});\n\t}\n\n\treturn function (callback) {\n\t\trewiredVariableNames.forEach(function (variableName) {\n\t\t\tpreviousValues[variableName] = _RewiredData__[variableName];\n\t\t\t_RewiredData__[variableName] = object[variableName];\n\t\t});\n\t\tvar result = callback();\n\n\t\tif (!!result && typeof result.then == 'function') {\n\t\t\tresult.then(reset).catch(reset);\n\t\t} else {\n\t\t\treset();\n\t\t}\n\n\t\treturn result;\n\t};\n}\n\nvar _typeOfOriginalExport = typeof Hero === 'undefined' ? 'undefined' : _typeof(Hero);\n\nfunction addNonEnumerableProperty(name, value) {\n\tObject.defineProperty(Hero, name, {\n\t\tvalue: value,\n\t\tenumerable: false,\n\t\tconfigurable: true\n\t});\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(Hero)) {\n\taddNonEnumerableProperty('__get__', _get__);\n\taddNonEnumerableProperty('__GetDependency__', _get__);\n\taddNonEnumerableProperty('__Rewire__', _set__);\n\taddNonEnumerableProperty('__set__', _set__);\n\taddNonEnumerableProperty('__reset__', _reset__);\n\taddNonEnumerableProperty('__ResetDependency__', _reset__);\n\taddNonEnumerableProperty('__with__', _with__);\n\taddNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTI3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0hlcm8uanM/YzRhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFZpZGVvQmcgZnJvbSAnLi9WaWRlb0JnJztcblxuY2xhc3MgSGVybyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdFxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3QgZGl2U3R5bGUgPSB7XG5cdFx0aGVpZ2h0OiAnMTAwdmgnXG5cdH1cblx0Y29uc3Qgc3R5bGUyID0ge1xuXHRcdGRpc3BsYXk6ICdmaXhlZCcsXG5cdFx0dG9wOiAwLFxuXHRcdGxlZnQ6IC04NjgsXG5cdFx0Ym90dG9tOiAwLFxuXHRcdHJpZ2h0OiAwLFxuXHRcdHpJbmRleDogLTEwMCxcblx0XHR3aWR0aDogMTg4Mi4zNixcblx0XHRoZWlnaHQ6IDEwNThcblx0fVxuXHRjb25zdCBtYXJnaW5Ub3AgPSB7XG5cdFx0bWFyZ2luVG9wOiA0MTguNVxuXHR9XG5cdGNvbnN0IHpJbmRleCA9IHtcblx0XHR6SW5kZXg6IDMsIFxuXHRcdG9wYWNpdHk6IDAuNjVcblx0fVxuXHRjb25zdCB0cmFuc2Zvcm1UcmFuc2xhdGUzZCA9IHtcblx0XHR0cmFuc2Zvcm1UcmFuc2xhdGUzZDogKDAsIDAsIDApXG5cdH1cbiAgICByZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGlkPVwiaG9tZVwiIGNsYXNzTmFtZT1cImhlcm8gdmlkZW8tYmFja2dyb3VuZCBkYXJrIGNlbnRlciBuYXYtdHJpZ2dlclwiIHN0eWxlPXtkaXZTdHlsZX0+XG5cdFx0ICAgIDxkaXYgaWQ9XCJiZ1ZpZGVvXCIgZGF0YS0wPVwidHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcIiBjbGFzc05hbWU9XCJza3JvbGxhYmxlIHNrcm9sbGFibGUtYmV0d2VlblwiIHN0eWxlPXt0cmFuc2Zvcm1UcmFuc2xhdGUzZH0+XG5cdFx0ICAgIFx0PHZpZGVvIGlkPVwidmlkZW9fYmFja2dyb3VuZFwiIHByZWxvYWQ9XCJhdXRvXCIgYXV0b3BsYXk9XCJhdXRvcGxheVwiIGxvb3A9XCJsb29wXCIgc3R5bGU9e3N0eWxlMn0+XG5cdFx0ICAgIFx0XHQ8VmlkZW9CZyB2aWRlb1VybD17Jy92aWRlby92aWRlby5tcDQnfS8+XG5cdFx0XHRcdDwvdmlkZW8+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoZXJvLWNvbnRlbnRcIiBzdHlsZT17bWFyZ2luVG9wfT5cblx0XHQgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMCBjb2wtc20tb2Zmc2V0LTEgc2tyb2xsYWJsZSBza3JvbGxhYmxlLWJldHdlZW5cIiBkYXRhLTA9XCJvcGFjaXR5OiAwLjY1O1wiIGRhdGEtdG9wLWJvdHRvbT1cIm9wYWNpdHk6IDA7XCIgc3R5bGU9e3pJbmRleH0+XG5cdFx0ICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdHVsb1wiPnN0cTwvaDE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICAgICAgICA8L2Rpdj5cblx0XHQgICAgPC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVybztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGFwcC9jb21wb25lbnRzL0hlcm8uanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBdEJBO0FBQ0E7QUF1QkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFOQTtBQWFBOzs7O0FBeENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7O0FBREE7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})