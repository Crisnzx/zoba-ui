"use strict";var e,t={};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
e={get exports(){return t},set exports(e){t=e}},function(){var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var c=arguments[a];if(c){var n=typeof c;if("string"===n||"number"===n)e.push(c);else if(Array.isArray(c)){if(c.length){var s=r.apply(null,c);s&&e.push(s)}}else if("object"===n){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){e.push(c.toString());continue}for(var o in c)t.call(c,o)&&c[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}();var r=t;const a=({error:e})=>React.createElement("div",{className:"zoba-error-container"},e&&React.createElement("span",{className:"zoba-error"},e));exports.Switch=({children:e,checked:t,onChange:c,error:n,disabled:s,className:o})=>React.createElement("div",{className:r("zoba-switch",o)},React.createElement("div",{className:"zoba-switch-container"},React.createElement("input",{type:"checkbox",className:"zoba-switch-styling",onChange:e=>c(e.target.checked),checked:t,disabled:s}),e),React.createElement(a,{error:n}));
