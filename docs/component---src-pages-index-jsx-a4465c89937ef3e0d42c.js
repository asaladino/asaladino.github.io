webpackJsonp([0xc23565d713b7],{218:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var u=n(3),i=r(u),c=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=[];return this.props.hasOwnProperty("data")&&(e=this.props.data.allMarkdownRemark.edges),i.default.createElement("div",{className:"grid-container"},i.default.createElement("div",{className:"grid-x"},i.default.createElement("div",{className:"cell"},e.map(function(e){var t=e.node;return i.default.createElement("div",{key:t.id},i.default.createElement("h2",null,t.frontmatter.title),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),i.default.createElement("small",null,"Posted ",t.frontmatter.date))}))))},t}(i.default.Component);t.default=c;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-a4465c89937ef3e0d42c.js.map