(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/aos.js":
/*!********************!*\
  !*** ./src/aos.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},_=function(){w=(0,h.default)(),O()},S=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},z=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},A=function(e){return j=i(j,e),w=(0,h.default)(),z(j.disable)||x?S():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},j.throttleDelay)),j.disableMutationObserver||(0,d.default)("[data-aos]",_),w)};e.exports={init:A,refresh:O,refreshHard:_}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=new r(o);a=t,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&a()})}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid padding-top npx\">\n<app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'digitalgraphics';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_web_web_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/web/web.component */ "./src/app/components/web/web.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_marketing_marketing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/marketing/marketing.component */ "./src/app/components/marketing/marketing.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_graphisme_graphisme_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/graphisme/graphisme.component */ "./src/app/components/graphisme/graphisme.component.ts");
/* harmony import */ var _components_photographie_video_photographie_video_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/photographie-video/photographie-video.component */ "./src/app/components/photographie-video/photographie-video.component.ts");













var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'web', component: _components_web_web_component__WEBPACK_IMPORTED_MODULE_2__["WebComponent"] },
    { path: 'graphisme', component: _components_graphisme_graphisme_component__WEBPACK_IMPORTED_MODULE_11__["GraphismeComponent"] },
    { path: 'marketing', component: _components_marketing_marketing_component__WEBPACK_IMPORTED_MODULE_9__["MarketingComponent"] },
    { path: 'photographie-video', component: _components_photographie_video_photographie_video_component__WEBPACK_IMPORTED_MODULE_12__["PhotographieVideoComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
                _components_web_web_component__WEBPACK_IMPORTED_MODULE_2__["WebComponent"],
                _components_marketing_marketing_component__WEBPACK_IMPORTED_MODULE_9__["MarketingComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _components_graphisme_graphisme_component__WEBPACK_IMPORTED_MODULE_11__["GraphismeComponent"],
                _components_photographie_video_photographie_video_component__WEBPACK_IMPORTED_MODULE_12__["PhotographieVideoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/graphisme/graphisme.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/graphisme/graphisme.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  graphisme works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/graphisme/graphisme.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/graphisme/graphisme.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhcGhpc21lL2dyYXBoaXNtZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/graphisme/graphisme.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/graphisme/graphisme.component.ts ***!
  \*************************************************************/
/*! exports provided: GraphismeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphismeComponent", function() { return GraphismeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var GraphismeComponent = /** @class */ (function () {
    function GraphismeComponent(router) {
        var _this = this;
        this.router = router;
        // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }
    GraphismeComponent.prototype.ngOnInit = function () {
    };
    GraphismeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-graphisme',
            template: __webpack_require__(/*! ./graphisme.component.html */ "./src/app/components/graphisme/graphisme.component.html"),
            styles: [__webpack_require__(/*! ./graphisme.component.scss */ "./src/app/components/graphisme/graphisme.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GraphismeComponent);
    return GraphismeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n  <div class=\"container-fluid full-height-section\">\n  </div> -->\n<div class=\"body-wrap\">\n  <div class=\"container pt-4\">\n      <!-- <header class=\"site-header\"></header> -->\n    <div class=\"hero text-center\">\n      <div class=\"container-sm mx-auto\">\n        <div class=\"hero-inner\">\n          <div class=\"hero-header\">\n            <h1 class=\"hero-title h2-mobile mt-0 is-revealing\"  data-aos=\"fade-up\" data-aos-delay=\"200\" data-aos-duration=\"500\">Le site web que votre business mérite</h1>\n            <p class=\"hero-paragraph is-revealing\"  data-aos=\"fade-up\" data-aos-delay=\"300\" data-aos-duration=\"450\">Our landing page template works for all the devices, so you only have to setup it once, and get beautiful results forever.</p>\n          </div>\n          <div class=\"hero-browser\">\n              <div class=\"bubble-3 is-revealing\" data-aos=\"fade-right\" data-aos-duration=\"550\">\n                  <svg width=\"427\" height=\"286\" viewBox=\"0 0 427 286\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                      <defs>\n                          <path d=\"M213.5 286C331.413 286 427 190.413 427 72.5S304.221 16.45 186.309 16.45C68.396 16.45 0-45.414 0 72.5S95.587 286 213.5 286z\" id=\"bubble-3-a\"></path>\n                      </defs>\n                      <g fill=\"none\" fill-rule=\"evenodd\">\n                          <mask id=\"bubble-3-b\" fill=\"#fff\">\n                              <use xlink:href=\"#bubble-3-a\"></use>\n                          </mask>\n                          <use fill=\"#4E8FF8\" xlink:href=\"#bubble-3-a\"></use>\n                          <path d=\"M64.5 129.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C-80.604-139.782-149-201.644-149-83.73c0 117.913 95.587 213.5 213.5 213.5z\" fill=\"#1274ED\" mask=\"url(#bubble-3-b)\"></path>\n                          <path d=\"M381.5 501.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C236.396 232.218 168 170.356 168 288.27c0 117.913 95.587 213.5 213.5 213.5z\" fill=\"#75ABF3\" mask=\"url(#bubble-3-b)\"></path>\n                      </g>\n                  </svg>\n              </div>\n              <div class=\"bubble-4 is-revealing\" data-aos=\"fade-up\" data-aos-delay=\"100\" data-aos-duration=\"350\">\n                  <svg width=\"230\" height=\"235\" viewBox=\"0 0 230 235\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                      <defs>\n                          <path d=\"M196.605 234.11C256.252 234.11 216 167.646 216 108 216 48.353 167.647 0 108 0S0 48.353 0 108s136.959 126.11 196.605 126.11z\" id=\"bubble-4-a\"></path>\n                      </defs>\n                      <g fill=\"none\" fill-rule=\"evenodd\">\n                          <mask id=\"bubble-4-b\" fill=\"#fff\">\n                              <use xlink:href=\"#bubble-4-a\"></use>\n                          </mask>\n                          <use fill=\"#7CE8DD\" xlink:href=\"#bubble-4-a\"></use>\n                          <circle fill=\"#3BDDCC\" mask=\"url(#bubble-4-b)\" cx=\"30\" cy=\"108\" r=\"108\"></circle>\n                          <circle fill=\"#B1F1EA\" opacity=\".7\" mask=\"url(#bubble-4-b)\" cx=\"265\" cy=\"88\" r=\"108\"></circle>\n                      </g>\n                  </svg>\n              </div>\n              <div class=\"hero-browser-inner is-revealing\" data-aos=\"fade-in\" data-aos-delay=\"200\" data-aos-duration=\"800\">\n                  <svg width=\"800\" height=\"450\" viewBox=\"0 0 800 450\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                      <defs>\n                          <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"browser-a\">\n                              <stop stop-color=\"#F6F8FA\" stop-opacity=\".48\" offset=\"0%\"></stop>\n                              <stop stop-color=\"#F6F8FA\" offset=\"100%\"></stop>\n                          </linearGradient>\n                          <linearGradient x1=\"50%\" y1=\"100%\" x2=\"50%\" y2=\"0%\" id=\"browser-b\">\n                              <stop stop-color=\"#F6F8FA\" stop-opacity=\".48\" offset=\"0%\"></stop>\n                              <stop stop-color=\"#F6F8FA\" offset=\"100%\"></stop>\n                          </linearGradient>\n                          <linearGradient x1=\"100%\" y1=\"-12.816%\" x2=\"0%\" y2=\"-12.816%\" id=\"browser-c\">\n                              <stop stop-color=\"#F6F8FA\" stop-opacity=\"0\" offset=\"0%\"></stop>\n                              <stop stop-color=\"#E3E7EB\" offset=\"50.045%\"></stop>\n                              <stop stop-color=\"#F6F8FA\" stop-opacity=\"0\" offset=\"100%\"></stop>\n                          </linearGradient>\n                          <filter x=\"-500%\" y=\"-500%\" width=\"1000%\" height=\"1000%\" filterUnits=\"objectBoundingBox\" id=\"dropshadow-1\">\n                              <feOffset dy=\"16\" in=\"SourceAlpha\" result=\"shadowOffsetOuter\"></feOffset>\n                              <feGaussianBlur stdDeviation=\"24\" in=\"shadowOffsetOuter\" result=\"shadowBlurOuter\"></feGaussianBlur>\n                              <feColorMatrix values=\"0 0 0 0 0.12 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.2 0\" in=\"shadowBlurOuter\"></feColorMatrix>\n                          </filter>\n                      </defs>\n                      <g fill=\"none\" fill-rule=\"evenodd\">\n                          <rect width=\"800\" height=\"450\" rx=\"4\" fill=\"#FFF\" style=\"mix-blend-mode:multiply;filter:url(#dropshadow-1)\"></rect>\n                          <rect width=\"800\" height=\"450\" rx=\"4\" fill=\"#FFF\"></rect>\n                          <g fill=\"url(#browser-a)\" transform=\"translate(47 67)\">\n                              <path d=\"M146 0h122v122H146zM0 0h122v122H0zM292 0h122v122H292zM438 0h122v122H438zM584 0h122v122H584z\"></path>\n                          </g>\n                          <g transform=\"translate(47 239)\" fill=\"url(#browser-b)\">\n                              <path d=\"M146 0h122v122H146zM0 0h122v122H0zM292 0h122v122H292zM438 0h122v122H438zM584 0h122v122H584z\"></path>\n                          </g>\n                          <path fill=\"url(#browser-c)\" d=\"M0 146h706v2H0z\" transform=\"translate(47 67)\"></path>\n                          <g transform=\"translate(0 12)\">\n                              <circle fill=\"#FF6D8B\" cx=\"36\" cy=\"4\" r=\"4\"></circle>\n                              <circle fill=\"#FFCB4F\" cx=\"52\" cy=\"4\" r=\"4\"></circle>\n                              <circle fill=\"#7CE8DD\" cx=\"68\" cy=\"4\" r=\"4\"></circle>\n                              <path fill=\"url(#browser-c)\" d=\"M0 20h800v2H0z\"></path>\n                              <path fill=\"#E3E7EB\" d=\"M742 2h24v4h-24z\"></path>\n                          </g>\n                          <g>\n                              <path fill=\"#F6F8FA\" d=\"M47 385h706v32H47z\"></path>\n                              <path fill=\"#E3E7EB\" d=\"M356 399h88v4h-88z\"></path>\n                          </g>\n                      </g>\n                  </svg>\n              </div>\n              <div class=\"bubble-1 is-revealing\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-duration=\"400\">\n                  <svg width=\"61\" height=\"52\" viewBox=\"0 0 61 52\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                      <defs>\n                          <path d=\"M32 43.992c17.673 0 28.05 17.673 28.05 0S49.674 0 32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 11.992 32 11.992z\" id=\"bubble-1-a\"></path>\n                      </defs>\n                      <g fill=\"none\" fill-rule=\"evenodd\">\n                          <mask id=\"bubble-1-b\" fill=\"#fff\">\n                              <use xlink:href=\"#bubble-1-a\"></use>\n                          </mask>\n                          <use fill=\"#FF6D8B\" xlink:href=\"#bubble-1-a\"></use>\n                          <path d=\"M2 43.992c17.673 0 28.05 17.673 28.05 0S19.674 0 2 0c-17.673 0-32 14.327-32 32 0 17.673 14.327 11.992 32 11.992z\" fill=\"#FF4F73\" mask=\"url(#bubble-1-b)\"></path>\n                          <path d=\"M74 30.992c17.673 0 28.05 17.673 28.05 0S91.674-13 74-13C56.327-13 42 1.327 42 19c0 17.673 14.327 11.992 32 11.992z\" fill-opacity=\".8\" fill=\"#FFA3B5\" mask=\"url(#bubble-1-b)\"></path>\n                      </g>\n                  </svg>\n              </div>\n              <div class=\"bubble-2 is-revealing\" data-aos=\"fade-left\" data-aos-delay=\"250\"  data-aos-duration=\"450\">\n                  <svg width=\"179\" height=\"126\" viewBox=\"0 0 179 126\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                      <defs>\n                          <path d=\"M104.697 125.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S0-28.44 0 12.593c0 41.034 63.663 113.068 104.697 113.068z\" id=\"bubble-2-a\"></path>\n                      </defs>\n                      <g fill=\"none\" fill-rule=\"evenodd\">\n                          <mask id=\"bubble-2-b\" fill=\"#fff\">\n                              <use xlink:href=\"#bubble-2-a\"></use>\n                          </mask>\n                          <use fill=\"#838DEA\" xlink:href=\"#bubble-2-a\"></use>\n                          <path d=\"M202.697 211.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S98 57.56 98 98.593c0 41.034 63.663 113.068 104.697 113.068z\" fill=\"#626CD5\" mask=\"url(#bubble-2-b)\"></path>\n                          <path d=\"M43.697 56.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S-61-97.44-61-56.407C-61-15.373 2.663 56.661 43.697 56.661z\" fill=\"#B1B6F1\" opacity=\".64\" mask=\"url(#bubble-2-b)\"></path>\n                      </g>\n                  </svg>\n\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"divider\"></div>\n\n  <div class=\"container py-default\">\n    \n    <div class=\"row text-center py-items\">\n      <div class=\"col\">\n        <h2>Services</h2>\n      </div>\n    </div>\n      <div class=\"row justify-content-center text-center\">\n          <div class=\"col-md my-3\">\n            <div class=\"card custom-card no-border my-3 h-100\" data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n              <div class=\"card-body d-flex flex-column\">\n                <h5 class=\"card-title mt-auto\">Création de site web</h5>\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                  <!-- <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a> -->\n              </div>\n            </div>\n        </div>  \n          <div class=\"col-md my-3\">\n            <div class=\"card custom-card no-border my-3 h-100\" data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\" data-aos-delay=\"300\">\n              <div class=\"card-body d-flex flex-column\">\n                <h5 class=\"card-title mt-auto\">Graphisme</h5>\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              </div>\n          </div>\n          </div>\n          <div class=\"col-md my-3\">\n            <div class=\"card custom-card no-border my-3 h-100\" data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\" data-aos-delay=\"600\">\n              <div class=\"card-body d-flex flex-column\">\n                <h5 class=\"card-title mt-auto\">Digital Marketing</h5>\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              </div>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container py-5\">\n      <div data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n        <div class=\"row text-center\">\n          <div class=\"col\">\n            <h1>Hey</h1>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"container py-5\">\n      <div data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n        <div class=\"row text-center\">\n          <div class=\"col\">\n            <h1>Hey</h1>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"container py-5\">\n      <div data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n        <div class=\"row text-center\">\n          <div class=\"col\">\n            <h1>Hey</h1>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"container py-5\">\n      <div data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n        <div class=\"row text-center\">\n          <div class=\"col\">\n            <h1>Hey</h1>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"container py-5\">\n      <div data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n        <div class=\"row text-center\">\n          <div class=\"col\">\n            <h1>Hey</h1>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"container py-5\">\n      <div data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n        <div class=\"row text-center\">\n          <div class=\"col\">\n            <h1>Hey</h1>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"container py-5\">\n      <div data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n        <div class=\"row text-center\">\n          <div class=\"col\">\n            <h1>Hey</h1>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"container py-5\">\n      <div data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n        <div class=\"row text-center\">\n          <div class=\"col\">\n            <h1>Hey</h1>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"container py-5\">\n      <div data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n        <div class=\"row text-center\">\n          <div class=\"col\">\n            <h1>Hey</h1>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_aos_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/aos.js */ "./src/aos.js");
/* harmony import */ var src_aos_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_aos_js__WEBPACK_IMPORTED_MODULE_4__);





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        var _this = this;
        this.router = router;
        // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            src_aos_js__WEBPACK_IMPORTED_MODULE_4__["init"]();
            // Transition effect for navbar 
            jquery__WEBPACK_IMPORTED_MODULE_3__(window).scroll(function () {
                // checks if window is scrolled more than 10px, adds/removes solid class
                if (jquery__WEBPACK_IMPORTED_MODULE_3__(this).scrollTop() > 50) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.navbar').addClass('solid-bg');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.navbar').removeClass('solid-bg');
                }
            });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/marketing/marketing.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/marketing/marketing.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  marketing works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/marketing/marketing.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/marketing/marketing.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFya2V0aW5nL21hcmtldGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/marketing/marketing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/marketing/marketing.component.ts ***!
  \*************************************************************/
/*! exports provided: MarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingComponent", function() { return MarketingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MarketingComponent = /** @class */ (function () {
    function MarketingComponent() {
    }
    MarketingComponent.prototype.ngOnInit = function () {
    };
    MarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marketing',
            template: __webpack_require__(/*! ./marketing.component.html */ "./src/app/components/marketing/marketing.component.html"),
            styles: [__webpack_require__(/*! ./marketing.component.scss */ "./src/app/components/marketing/marketing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MarketingComponent);
    return MarketingComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light fixed-top\" data-aos=\"fade-in\" data-aos-easing=\"ease-in\">\n    <div class=\"container bg-transparent\">\n      <a class=\"navbar-brand\" href=\"#\" routerLink=\"/\" (click)=\"updateNavbarLink('/')\">Digital Graphics</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item mt-custom\">\n            <a class=\"nav-link\" [class.active]=\"linkActive[0][1]\" (click)=\"updateNavbarLink('/')\" href=\"#\" routerLink=\"/\" id=\"accueil\">Accueil</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [class.active]=\"linkActive[1][1]\" (click)=\"updateNavbarLink('/web')\" href=\"#\" routerLink=\"/web\" id=\"web\">Création site web</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [class.active]=\"linkActive[2][1]\" (click)=\"updateNavbarLink('/graphisme')\" href=\"#\" routerLink=\"/graphisme\" id=\"graphisme\">Graphisme</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [class.active]=\"linkActive[3][1]\" (click)=\"updateNavbarLink('/marketing')\" href=\"#\" routerLink=\"/marketing\" id=\"marketing\">Marketing Digital</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [class.active]=\"linkActive[4][1]\" (click)=\"updateNavbarLink('/photographie-video')\" href=\"#\" routerLink=\"/photographie-video\" id=\"photographie-video\">Photographie / Video</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [class.active]=\"linkActive[5][1]\" (click)=\"updateNavbarLink('/contact')\" href=\"#\" routerLink=\"/contact\" id=\"contact\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_aos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/aos.js */ "./src/aos.js");
/* harmony import */ var src_aos_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_aos_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.linkActive = [
            ['/', false],
            ['/web', false],
            ['/graphisme', false],
            ['/marketing', false],
            ['/photographie-video', false],
            ['/contact', false]
        ];
        // console.log(window.location.pathname);
        this.updateNavbarLink(window.location.pathname);
    }
    NavbarComponent.prototype.updateNavbarLink = function (url) {
        this.linkActive.forEach(function (link) {
            link[1] = false;
            link[1] = (link[0] == url);
        });
        location.reload;
        // console.log(this.linkActive);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            src_aos_js__WEBPACK_IMPORTED_MODULE_2__["init"]();
            // Transition effect for navbar 
            jquery__WEBPACK_IMPORTED_MODULE_3__(window).scroll(function () {
                // checks if window is scrolled more than 10px, adds/removes solid class
                if (jquery__WEBPACK_IMPORTED_MODULE_3__('.navbar').scrollTop() > -10) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.navbar').addClass('solid-bg');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.navbar').removeClass('solid-bg');
                }
            });
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/photographie-video/photographie-video.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/photographie-video/photographie-video.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/photographie-video/photographie-video.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/photographie-video/photographie-video.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG9ncmFwaGllLXZpZGVvL3Bob3RvZ3JhcGhpZS12aWRlby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/photographie-video/photographie-video.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/photographie-video/photographie-video.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PhotographieVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotographieVideoComponent", function() { return PhotographieVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhotographieVideoComponent = /** @class */ (function () {
    function PhotographieVideoComponent() {
    }
    PhotographieVideoComponent.prototype.ngOnInit = function () {
    };
    PhotographieVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photographie-video',
            template: __webpack_require__(/*! ./photographie-video.component.html */ "./src/app/components/photographie-video/photographie-video.component.html"),
            styles: [__webpack_require__(/*! ./photographie-video.component.scss */ "./src/app/components/photographie-video/photographie-video.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PhotographieVideoComponent);
    return PhotographieVideoComponent;
}());



/***/ }),

/***/ "./src/app/components/web/web.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/web/web.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container py-5\">\n      <div data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n        <div class=\"row text-center\">\n          <div class=\"col\">\n            <h1>Web</h1>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"container py-5\">\n\n    <!-- Row 1 -->\n    <div class=\"row justify-content-center justify-content-lg-around mb-4\" data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n      <div class=\"col-md-5 mb-3\">\n        <div class=\"card no-border my-2 h-100\">\n          <div class=\"my-auto\">\n              <p class=\"transparent-title\">01.</p>\n              <h5 class=\"card-title\">Design</h5>\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.o build on the card title and make up the bulk of the card's content.</p>\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n        </div>\n     </div>  \n      <div class=\"col-md-5\">\n        <div class=\"card my-2 h-100 no-border\">\n          <div class=\"card-body d-flex flex-column\">\n              <img class=\"my-auto\" src=\"assets/img/webDesign.jpg\" alt=\"\" srcset=\"\">\n          </div>\n        </div>\n     </div>  \n    </div>\n\n    <!-- Row 2 -->\n    <div class=\"row justify-content-center justify-content-lg-around  mb-4\" data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-delay=\"300\" data-aos-easing=\"ease-in\">\n        <div class=\"col-md-5\">\n            <div class=\"card my-2 h-100 no-border\">\n              <div class=\"card-body d-flex flex-column\">\n                  <img class=\"my-auto\" src=\"assets/img/responsive.jpg\" alt=\"\" srcset=\"\">\n              </div>\n            </div>\n         </div>  \n      <div class=\"col-md-5 mb-3\">\n        <div class=\"card no-border my-2 h-100\">\n          <div class=\"my-auto\">\n              <p class=\"transparent-title\">02.</p>\n              <h5 class=\"card-title\">Développement</h5>\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.o build on the card title and make up the bulk of the card's content.</p>\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n        </div>\n     </div>  \n    </div>\n\n    <!-- Row 3 -->\n    <div class=\"row justify-content-center justify-content-lg-around mb-4\" data-aos=\"fade-in\" data-aos-offset=\"20\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n        <div class=\"col-md-5 mb-3\">\n          <div class=\"card no-border my-2 h-100\">\n            <div class=\"my-auto\">\n                <p class=\"transparent-title\">03.</p>\n                <h5 class=\"card-title\">Livraison</h5>\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.o build on the card title and make up the bulk of the card's content.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n          </div>\n       </div>  \n        <div class=\"col-md-5\">\n          <div class=\"card my-2 h-100 no-border\">\n            <div class=\"card-body d-flex flex-column\">\n                <img class=\"my-auto\" src=\"assets/img/webDesign.jpg\" alt=\"\" srcset=\"\">\n            </div>\n          </div>\n       </div>  \n      </div>\n\n\n  </div>"

/***/ }),

/***/ "./src/app/components/web/web.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/web/web.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2ViL3dlYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/web/web.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/web/web.component.ts ***!
  \*************************************************/
/*! exports provided: WebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebComponent", function() { return WebComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_aos_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/aos.js */ "./src/aos.js");
/* harmony import */ var src_aos_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_aos_js__WEBPACK_IMPORTED_MODULE_4__);





var WebComponent = /** @class */ (function () {
    function WebComponent(router) {
        var _this = this;
        this.router = router;
        // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }
    WebComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            src_aos_js__WEBPACK_IMPORTED_MODULE_4__["init"]();
            // Transition effect for navbar 
            jquery__WEBPACK_IMPORTED_MODULE_3__(window).scroll(function () {
                // checks if window is scrolled more than 10px, adds/removes solid class
                if (jquery__WEBPACK_IMPORTED_MODULE_3__(this).scrollTop() > 50) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.navbar').addClass('solid-bg');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.navbar').removeClass('solid-bg');
                }
            });
        });
    };
    WebComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-web',
            template: __webpack_require__(/*! ./web.component.html */ "./src/app/components/web/web.component.html"),
            styles: [__webpack_require__(/*! ./web.component.scss */ "./src/app/components/web/web.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WebComponent);
    return WebComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Personnal Brand\web\angular\digitalgraphics\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map