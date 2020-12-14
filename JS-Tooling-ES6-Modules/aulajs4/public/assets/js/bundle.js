(()=>{"use strict";var n,e,t,r={122:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(15),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"/* Reset */\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  box-sizing: border-box;\n  background-color: rgb(66, 63, 63);\n  overflow-x: hidden;\n}\n\n\nul, ol, li {\n  list-style: none;\n  padding: 0;\n}\n/* reset end */\n\n.container {\n  width: 100vw;\n  height: 120vh;\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n}\n\n.content {\n  margin-top: 50px;\n  margin-bottom: 50px;\n  text-align: center;\n  width: 500px;\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 20px 20px;\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA,UAAU;AACV;EACE,yCAAyC;EACzC,SAAS;EACT,UAAU;EACV,eAAe;EACf,sBAAsB;EACtB,iCAAiC;EACjC,kBAAkB;AACpB;;;AAGA;EACE,gBAAgB;EAChB,UAAU;AACZ;AACA,cAAc;;AAEd;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB",sourcesContent:["/* Reset */\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  box-sizing: border-box;\n  background-color: rgb(66, 63, 63);\n  overflow-x: hidden;\n}\n\n\nul, ol, li {\n  list-style: none;\n  padding: 0;\n}\n/* reset end */\n\n.container {\n  width: 100vw;\n  height: 120vh;\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n}\n\n.content {\n  margin-top: 50px;\n  margin-bottom: 50px;\n  text-align: center;\n  width: 500px;\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 20px 20px;\n}\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.exports=function(n){var t,r,o=(r=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}}(t,r)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),l="/*# ".concat(s," */"),u=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(u).concat([l]).join("\n")}return[i].join("\n")}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=a(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:v(f,e),references:1}),r.push(u)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var A=null,p=0;function v(n,e){var t,r,o;if(e.singleton){var i=p++;t=A||(A=s(e)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(n,e),l=0;l<t.length;l++){var u=a(t[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=s}}}}},o={};function i(n){if(o[n])return o[n].exports;var e=o[n]={id:n,exports:{}};return r[n](e,e.exports,i),e.exports}i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=i(379),e=i.n(n),t=i(122),e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals})();
//# sourceMappingURL=bundle.js.map