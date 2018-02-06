var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export var Trans = function (_Component) {
  _inherits(Trans, _Component);

  function Trans() {
    _classCallCheck(this, Trans);

    return _possibleConstructorReturn(this, (Trans.__proto__ || Object.getPrototypeOf(Trans)).apply(this, arguments));
  }

  _createClass(Trans, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.update = function () {
        return _this2.forceUpdate();
      };
      this.context.subscribe(this.update);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.context.unsubscribe(this.update);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          i18nKey = _props.i18nKey,
          data = _props.data,
          number = _props.number;

      var t = this.context.getTranslateFunction();

      return t(i18nKey, data, number);
    }
  }]);

  return Trans;
}(Component);

Trans.propTypes = {
  i18nKey: PropTypes.string.isRequired,
  data: PropTypes.object,
  number: PropTypes.number
};

Trans.contextTypes = {
  getTranslateFunction: PropTypes.func.isRequired,
  subscribe: PropTypes.func.isRequired,
  unsubscribe: PropTypes.func.isRequired
};