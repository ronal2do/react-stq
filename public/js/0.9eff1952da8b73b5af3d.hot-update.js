webpackHotUpdate(0,{

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(16);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(13);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(14);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(19);\n\nvar _contact = __webpack_require__(282);\n\nvar _Messages = __webpack_require__(28);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Contact: {\n    displayName: 'Contact'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/Users/sotaquedev/Desktop/NEHSRWMM/app/components/Contact.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/Users/sotaquedev/Desktop/NEHSRWMM/app/components/Contact.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Contact = _wrapComponent('Contact')(function (_get__$Component) {\n  _inherits(Contact, _get__$Component);\n\n  function Contact(props) {\n    _classCallCheck(this, Contact);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Contact).call(this, props));\n\n    _this.state = { name: '', email: '', message: '' };\n    return _this;\n  }\n\n  _createClass(Contact, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      this.props.dispatch(_get__('submitContactForm')(this.state.name, this.state.email, this.state.message));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _Messages_Component = _get__('Messages');\n\n      return _react3.default.createElement(\n        'div',\n        { className: 'Form-contact container' },\n        _react3.default.createElement(\n          'h3',\n          null,\n          'Fale conosco'\n        ),\n        _react3.default.createElement(_Messages_Component, { messages: this.props.messages }),\n        _react3.default.createElement(\n          'form',\n          { onSubmit: this.handleSubmit.bind(this) },\n          _react3.default.createElement(\n            'label',\n            { htmlFor: 'name' },\n            'Nome'\n          ),\n          _react3.default.createElement('input', { type: 'text',\n            className: 'Input-nome',\n            name: 'name',\n            id: 'name',\n            placeholder: 'seu nome aqui',\n            value: this.state.name,\n            onChange: this.handleChange.bind(this),\n            autoFocus: true }),\n          _react3.default.createElement(\n            'label',\n            { htmlFor: 'email' },\n            'Email'\n          ),\n          _react3.default.createElement('input', { type: 'email',\n            className: 'Input-email',\n            name: 'email',\n            id: 'email',\n            value: this.state.email,\n            onChange: this.handleChange.bind(this) }),\n          _react3.default.createElement(\n            'label',\n            { htmlFor: 'message' },\n            'Body'\n          ),\n          _react3.default.createElement('textarea', { name: 'message',\n            className: 'Input-message',\n            id: 'message',\n            rows: '7',\n            value: this.state.message,\n            onChange: this.handleChange.bind(this) }),\n          _react3.default.createElement('br', null),\n          _react3.default.createElement(\n            'button',\n            { type: 'submit' },\n            'Enviar'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Contact;\n}(_get__('React').Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nvar _DefaultExportValue = _get__('connect')(_get__('mapStateToProps'))(_get__('Contact'));\n\nexports.default = _DefaultExportValue;\nvar _RewiredData__ = {};\nvar _RewireAPI__ = {};\n\n(function () {\n  function addPropertyToAPIObject(name, value) {\n    Object.defineProperty(_RewireAPI__, name, {\n      value: value,\n      enumerable: false,\n      configurable: true\n    });\n  }\n\n  addPropertyToAPIObject('__get__', _get__);\n  addPropertyToAPIObject('__GetDependency__', _get__);\n  addPropertyToAPIObject('__Rewire__', _set__);\n  addPropertyToAPIObject('__set__', _set__);\n  addPropertyToAPIObject('__reset__', _reset__);\n  addPropertyToAPIObject('__ResetDependency__', _reset__);\n  addPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];\n}\n\nfunction _get_original__(variableName) {\n  switch (variableName) {\n    case 'submitContactForm':\n      return _contact.submitContactForm;\n\n    case 'Messages':\n      return _Messages2.default;\n\n    case 'React':\n      return _react3.default;\n\n    case 'connect':\n      return _reactRedux.connect;\n\n    case 'mapStateToProps':\n      return mapStateToProps;\n\n    case 'Contact':\n      return Contact;\n  }\n\n  return undefined;\n}\n\nfunction _assign__(variableName, value) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _set_original__(variableName, value);\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _set_original__(variableName, _value) {\n  switch (variableName) {}\n\n  return undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n  var oldValue = _get__(variableName);\n\n  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n  _assign__(variableName, newValue);\n\n  return prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n    Object.keys(variableName).forEach(function (name) {\n      _RewiredData__[name] = variableName[name];\n    });\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _reset__(variableName) {\n  delete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n  var rewiredVariableNames = Object.keys(object);\n  var previousValues = {};\n\n  function reset() {\n    rewiredVariableNames.forEach(function (variableName) {\n      _RewiredData__[variableName] = previousValues[variableName];\n    });\n  }\n\n  return function (callback) {\n    rewiredVariableNames.forEach(function (variableName) {\n      previousValues[variableName] = _RewiredData__[variableName];\n      _RewiredData__[variableName] = object[variableName];\n    });\n    var result = callback();\n\n    if (!!result && typeof result.then == 'function') {\n      result.then(reset).catch(reset);\n    } else {\n      reset();\n    }\n\n    return result;\n  };\n}\n\nvar _typeOfOriginalExport = typeof _DefaultExportValue === 'undefined' ? 'undefined' : _typeof(_DefaultExportValue);\n\nfunction addNonEnumerableProperty(name, value) {\n  Object.defineProperty(_DefaultExportValue, name, {\n    value: value,\n    enumerable: false,\n    configurable: true\n  });\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(_DefaultExportValue)) {\n  addNonEnumerableProperty('__get__', _get__);\n  addNonEnumerableProperty('__GetDependency__', _get__);\n  addNonEnumerableProperty('__Rewire__', _set__);\n  addNonEnumerableProperty('__set__', _set__);\n  addNonEnumerableProperty('__reset__', _reset__);\n  addNonEnumerableProperty('__ResetDependency__', _reset__);\n  addNonEnumerableProperty('__with__', _with__);\n  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0NvbnRhY3QuanM/NDdmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc3VibWl0Q29udGFjdEZvcm0gfSBmcm9tICcuLi9hY3Rpb25zL2NvbnRhY3QnO1xuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4vTWVzc2FnZXMnO1xuXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbmFtZTogJycsIGVtYWlsOiAnJywgbWVzc2FnZTogJycgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc3VibWl0Q29udGFjdEZvcm0odGhpcy5zdGF0ZS5uYW1lLCB0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLm1lc3NhZ2UpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb3JtLWNvbnRhY3QgY29udGFpbmVyXCI+XG4gICAgICAgIDxoMz5GYWxlIGNvbm9zY288L2gzPlxuICAgICAgICA8TWVzc2FnZXMgbWVzc2FnZXM9e3RoaXMucHJvcHMubWVzc2FnZXN9Lz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5vbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiSW5wdXQtbm9tZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiIFxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNldSBub21lIGFxdWlcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXMvPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJJbnB1dC1lbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPkJvZHk8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiSW5wdXQtbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIiBcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI3XCIgXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlfSBcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW52aWFyPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ29udGFjdCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHAvY29tcG9uZW50cy9Db250YWN0LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTFCQTtBQUhBO0FBaUNBOzs7O0FBbERBO0FBQ0E7QUFvREE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})