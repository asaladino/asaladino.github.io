webpackJsonp([35783957827783],{199:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=n(4),c=o(l),i=n(63),f=(o(i),function(t){function e(n){r(this,e);var o=u(this,t.call(this,n));return o.state={projects:[]},o}return a(e,t),e.prototype.componentDidMount=function(){var t=this;fetch("https://api.github.com/users/asaladino/repos").then(function(e){e.json().then(function(e){t.setState({projects:e})})})},e.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement("h1",null,"Projects"),c.default.createElement("ul",null,this.state.projects.map(function(t){return c.default.createElement("li",null,c.default.createElement("a",{href:t.html_url},t.name))})))},e}(c.default.Component));e.default=f,t.exports=e.default}});
//# sourceMappingURL=component---src-pages-index-js-29c2bbb88687b520cc62.js.map