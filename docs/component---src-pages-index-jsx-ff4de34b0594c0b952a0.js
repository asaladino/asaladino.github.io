webpackJsonp([0xc23565d713b7],{219:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var u=n(3),c=r(u),i=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=[];return this.props.hasOwnProperty("data")&&(e=this.props.data.allMarkdownRemark.edges),c.default.createElement("div",null,c.default.createElement("div",{className:"column"},c.default.createElement("div",{style:{clear:"both"}}),e.map(function(e){var t=e.node;return c.default.createElement("div",{key:t.id},c.default.createElement("h1",null,t.frontmatter.title),c.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),c.default.createElement("p",null,"Posted ",t.frontmatter.date))})))},t}(c.default.Component);t.default=i;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-ff4de34b0594c0b952a0.js.map