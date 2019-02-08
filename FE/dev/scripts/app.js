/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);

const NavUtils = __webpack_require__(9);
NavUtils.init();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sme_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sme_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sme_router__);


const router = new __WEBPACK_IMPORTED_MODULE_0_sme_router___default.a('router-view');

const homeController = __webpack_require__(3);
const jobController = __webpack_require__(5);
const jobAddController = __webpack_require__(7);
 
// route config
router.route('/index', (req, res, next) => {
    homeController.render({req, res, next});
});
router.route('/job', (req, res, next) => {
    jobController.render({req, res, next, router});
});
router.route('/job_add', (req, res, next) => {
    jobAddController.render({req, res, next, router});
});
router.route('*', (req, res, next) => {
    res.redirect('/index');
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["sme-router"]=t():e["sme-router"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(6),a=n(7),u=function(){function e(t){r(this,e),this.matcher=t.matcher,this._matchedCount=0}return o(e,[{key:"_fireHandlers",value:function(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=this._getCache(r),i={body:t||o,query:r.query,params:r.params};(0,a.def)(i,"route",r.path),(0,a.def)(i,"url",r.url),!t&&o&&(i._id=r._id),r.handler(i),this._cacheBody(t,r)}}},{key:"_getCache",value:function(e){return(0,i.getCache)(e._id)}},{key:"_cacheBody",value:function(e,t){e&&(0,i.setCache)(t._id,e)}},{key:"getMatchedCount",value:function(){return this._matchedCount}},{key:"go",value:function(e,t){}},{key:"redirect",value:function(e,t){}},{key:"back",value:function(){}},{key:"stop",value:function(){}}]),e}();t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),u=r(a),s=n(5),c=r(s),l=n(8),f=r(l),h=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hash";if(o(this,e),this._mount=document.getElementById(t),!this._mount)throw new Error("Can not get mount point document.getElementById(#"+t+")...");this._subRouteView='<div id="__sub-route-view"></div>',this._subMount=null,this._isPassing=!1,this._cache={},this._middlewares=[],this._matcher=new u.default,this._history="hash"===n?new f.default({matcher:this._matcher}):new c.default({matcher:this._matcher})}return i(e,[{key:"render",value:function(e){this._isPassing?this._subMount.innerHTML=e:this._mount.innerHTML=e}},{key:"next",value:function(e){this._mount.innerHTML=e,this._isPassing=this._history.getMatchedCount()>1,this._subMount=document.querySelector("#__sub-route-view")}},{key:"subRoute",value:function(){return this._subRouteView}},{key:"use",value:function(e){this._middlewares.push(e)}},{key:"route",value:function(e,t){var n=this;this._matcher.add(e,function(r){if("*"!==e&&!r._id)for(var o=0;o<n._middlewares.length;o++)n._middlewares[o](r);t(r,n,n.next.bind(n))})}},{key:"go",value:function(e,t){this._isPassing=!1,this._history.go(e,t)}},{key:"redirect",value:function(e,t){this._isPassing=!1,this._history.redirect(e,t)}},{key:"back",value:function(){this._isPassing=!1,this._history.back()}},{key:"stop",value:function(){this._history.stop()}}]),e}();t.default=h},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(i),u=n(4),s=function(){function e(){r(this,e),this._routes=[],this._id=0}return o(e,[{key:"match",value:function(e){var t=[],n="",r=e.indexOf("?"),o=!0;r>-1&&(n=e.substr(r),e=e.slice(0,r));for(var i=0;i<this._routes.length;i++){var a=this._routes[i],s=a.reg.exec(e);if(s){if("*"!==a.path&&(o=!1),!o&&"*"===a.path)continue;t.push({_id:a._id,path:a.path,url:e+n,params:this._getParams(a.params,s),query:(0,u.parseQuery)(n),handler:a.handler})}}return t}},{key:"add",value:function(e,t){var n=this._toReg({path:e,handler:t});n._id=++this._id,this._routes.push(n)}},{key:"_toReg",value:function(e){return e.params=[],e.reg="*"===e.path?/[\w\W]*/i:(0,a.default)(e.path,e.params,{end:!1}),e}},{key:"_getParams",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n={},r=0;r<e.length;r++)n[e[r].name]=t[r+1];return n}}]),e}();t.default=s},function(e,t){function n(e,t){for(var n,r=[],o=0,u=0,s="",c=t&&t.delimiter||p,l=t&&t.delimiters||d,f=!1;null!==(n=y.exec(e));){var h=n[0],v=n[1],_=n.index;if(s+=e.slice(u,_),u=_+h.length,v)s+=v[1],f=!0;else{var m="",b=e[u],g=n[2],w=n[3],k=n[4],x=n[5];if(!f&&s.length){var E=s.length-1;l.indexOf(s[E])>-1&&(m=s[E],s=s.slice(0,E))}s&&(r.push(s),s="",f=!1);var O=""!==m&&void 0!==b&&b!==m,j="+"===x||"*"===x,P="?"===x||"*"===x,C=m||c,M=w||k;r.push({name:g||o++,prefix:m,delimiter:C,optional:P,repeat:j,partial:O,pattern:M?a(M):"[^"+i(C)+"]+?"})}}return(s||u<e.length)&&r.push(s+e.substr(u)),r}function r(e,t){return o(n(e,t))}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var u=e[a];if("string"!=typeof u){var s,c=n?n[u.name]:void 0;if(Array.isArray(c)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(0===c.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var l=0;l<c.length;l++){if(s=i(c[l]),!t[a].test(s))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');o+=(0===l?u.prefix:u.delimiter)+s}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!u.optional)throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"));u.partial&&(o+=u.prefix)}else{if(s=i(String(c)),!t[a].test(s))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+s+'"');o+=u.prefix+s}}else o+=u}return o}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function a(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e){return e&&e.sensitive?"":"i"}function s(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function c(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(h(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",u(n))}function l(e,t,r){return f(n(e,r),t,r)}function f(e,t,n){n=n||{};for(var r=n.strict,o=!1!==n.end,a=i(n.delimiter||p),s=n.delimiters||d,c=[].concat(n.endsWith||[]).map(i).concat("$").join("|"),l="",f=!1,h=0;h<e.length;h++){var y=e[h];if("string"==typeof y)l+=i(y),f=h===e.length-1&&s.indexOf(y[y.length-1])>-1;else{var v=i(y.prefix),_=y.repeat?"(?:"+y.pattern+")(?:"+v+"(?:"+y.pattern+"))*":y.pattern;t&&t.push(y),y.optional?y.partial?l+=v+"("+_+")?":l+="(?:"+v+"("+_+"))?":l+=v+"("+_+")"}}return o?(r||(l+="(?:"+a+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+a+"(?="+c+"))?"),f||(l+="(?="+a+"|"+c+")")),new RegExp("^"+l,u(n))}function h(e,t,n){return e instanceof RegExp?s(e,t):Array.isArray(e)?c(e,t,n):l(e,t,n)}e.exports=h,e.exports.parse=n,e.exports.compile=r,e.exports.tokensToFunction=o,e.exports.tokensToRegExp=f;var p="/",d="./",y=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g")},function(e,t,n){"use strict";function r(e){var t={};return(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var n=e.split("="),r=o(n,2),i=r[0],a=r[1],u=[decodeURIComponent(i),a?decodeURIComponent(a):null],s=u[0],c=u[1];t[s]=c}),t):null}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.parseQuery=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._init(),window.addEventListener("load",n._listen),window.addEventListener("popstate",n._listen),n}return i(t,e),a(t,[{key:"_init",value:function(){var e=this;this._listen=function(t){var n=""+location.pathname+location.search,r=e.matcher.match(n);e._matchedCount=r.length,e._fireHandlers(r,t.state)}}},{key:"_routeTo",value:function(e,t){var n=this.matcher.match(e);this._matchedCount=n.length,this._fireHandlers(n,t)}},{key:"go",value:function(e,t){history.pushState(t,"",e),this._routeTo(e,t)}},{key:"redirect",value:function(e,t){history.replaceState(t,"",e),this._routeTo(e,t)}},{key:"back",value:function(){history.go(-1)}},{key:"stop",value:function(){window.removeEventListener("load",this._listen),window.removeEventListener("popstate",this._listen)}}]),t}(s.default);t.default=c},function(e,t,n){"use strict";function r(e,t){t&&i.setItem(""+a+e,JSON.stringify(t))}function o(e){try{var t=i.getItem(""+a+e);return t?JSON.parse(t):null}catch(e){throw new Error("parse body err")}}Object.defineProperty(t,"__esModule",{value:!0}),t.setCache=r,t.getCache=o;var i=sessionStorage,a="smer"},function(e,t,n){"use strict";function r(e,t,n){Object.defineProperty(e,t,{writable:!1,enumerable:!0,value:n})}Object.defineProperty(t,"__esModule",{value:!0}),t.def=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._cache={},n._init(),window.addEventListener("load",n._listen),window.addEventListener("hashchange",n._listen),n}return i(t,e),a(t,[{key:"_getHash",value:function(){return location.hash.slice(1)}},{key:"_init",value:function(){var e=this;this._listen=function(t){var n=e._getHash(),r=e.matcher.match(n);e._matchedCount=r.length,e._fireHandlers(r,e._cache[n])}}},{key:"go",value:function(e,t){this._cache[e]=t,location.hash=""+e}},{key:"redirect",value:function(e,t){var n=location.href,r=n.indexOf("#");e=r>0?n.slice(0,r)+"#"+e:n.slice(0,0)+"#"+e,this._cache[e]=t,location.replace(e)}},{key:"back",value:function(){history.go(-1)}},{key:"stop",value:function(){window.removeEventListener("load",this._listen),window.removeEventListener("hashchange",this._listen)}}]),t}(s.default);t.default=c}])});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const homeT = __webpack_require__(4);

const homeController = {
    render({res}){
        res.render(homeT);
    }
}

module.exports = homeController;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div>  欢迎来到managerSystem</div>"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const jobT = __webpack_require__(6);

const jobController = {
    render({res,router}){
        //获取列表数据
        $.ajax({
            url: '/api/job/find',
            type : 'get',
            success: function(response){
                let tpl = template.render(jobT,{
                    data: JSON.parse(response.replace(/&#34;/g,'"'))
                });
                res.render(tpl);

                //按键跳转
                $('#app-job-add').on('click',()=>{
                    router.go('/job_add');      //编程式导航
                });
                $("tr[data-id]").on('click','.app-job-remove',function(){
                    let id = $(this).parents('tr').attr('data-id');
                    let companyLogo = $(this).parents('tr').attr('data-img')
                    $.ajax({
                      url: '/api/job/del',
                      data: {
                        id,companyLogo
                      },
                      type: 'delete',
                      success(result){
                        location.reload();
                      }
                    });
                });
                $("tr[data-id]").on('click','.app-job-change',function() {
                    let id = $(this).parents('tr').attr('data-id');
                    document.cookie = `companyId=${id}`;
                    router.go('/job_add');
                });
            }
        });
    }
}

module.exports = jobController;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">  <div class=\"box-header with-border\">    <h3 class=\"box-title\">        <button type=\"button\" class=\"btn btn-success\" id=\"app-job-add\">          <i class=\"fa fa-plus\"></i>          添加        </button>    </h3>  </div>  <!-- /.box-header -->  <div class=\"box-body\">    <table class=\"table table-bordered text-center\">      <tr>        <th style=\"width: 100px\">          Logo        </th>        <th>          公司名称        </th>        <th>          职位名称        </th>        <th>          工作地点        </th>        <th>          岗位薪资        </th>        <th>          学&nbsp;&nbsp;历        </th>        <th>          工作经验        </th>        <th>          职位描述        </th>        <th style=\"width: 160px\">          操作        </th>      </tr>      {{each data}}      <tr data-id = \"{{$value._id}}\" data-img= \"{{$value.companyLogo}}\">        <td>          <img  width=\"50\" height=\"50\" src=\"http://localhost:3000/upload/{{$value.companyLogo}}\" alt=\"\">        </td>        <td>          {{$value.companyName}}        </td>        <td>          {{$value.jobName}}        </td>        <td>          {{$value.city}}        </td>        <td>          {{$value.salary}}        </td>        <td>          {{$value.degree}}        </td>        <td>          {{$value.experience}}        </td>        <td>          {{$value.description}}        </td>        <td>          <button type=\"button\" class=\"btn btn-primary app-job-change\">            <i class=\"fa fa-edit\"></i>            修改          </button>          <button type=\"button\" class=\"btn btn-danger app-job-remove\">            <i class=\"fa fa-remove\"></i>            删除          </button>        </td>      </tr>      {{/each}}        </table>  </div>  <!-- /.box-body -->  <div class=\"box-footer clearfix\">    <ul class=\"pagination pagination-sm no-margin pull-right\">      <li><a href=\"#\">&laquo;</a></li>      <li><a href=\"#\">1</a></li>      <li><a href=\"#\">2</a></li>      <li><a href=\"#\">3</a></li>      <li><a href=\"#\">&raquo;</a></li>    </ul>  </div></div><!-- /.box -->"

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const jobAddT = __webpack_require__(8);

const jobAddController = {
    render({res, router}){
        res.render(jobAddT);
        let arr = document.cookie.split("; ");
        arr.forEach(function(val,i) {
            let item = val.split("=");
            if(item[0] == "companyId" && item[1] != -99) {
                $('#app-form-submit').attr('method','patch');
            }
        });
        $('#app-add-back').on('click',()=>{
            router.back();      //编程式导航
        });
        $('#app-add-save').on('click',()=>{
            //使用jquery.form.min中提供的表单提交方式来提交
            $("#app-form-submit").ajaxSubmit({
                "success" : function() {
                    arr.forEach(function(val,i) {
                        let item = val.split("=");
                        if(item[0] == "companyId") {
                            item[1] = -99;
                        }
                    });
                    //提交完成后跳转到job页
                    router.go('/job');
                },
                "resetForm" : true,
                "clearForm" : true
                //这里不能设置dataType,原因不明
                // "dataType" : "json"
            });
        });
    }
}

module.exports = jobAddController;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<!-- Horizontal Form --><div class=\"box box-info\">  <div class=\"box-header with-border\">    <h3 class=\"box-title\">      发布职位信息    </h3>  </div>  <!-- /.box-header -->  <!-- form start -->  <form class=\"form-horizontal\" id=\"app-form-submit\" method=\"POST\" enctype=\"multipart/form-data\" action=\"/api/job/add\">    <div class=\"box-body\">      <div class=\"form-group\">        <label for=\"companyLogo\" class=\"col-sm-2 control-label\">          Logo        </label>        <div class=\"col-sm-10\">          <input type=\"file\" class=\"form-control\" id=\"companyLogo\" placeholder=\"请选择公司的logo\" name=\"companyLogo\">        </div>      </div>      <div class=\"form-group\">        <label for=\"companyName\" class=\"col-sm-2 control-label\">          公司名称        </label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" id=\"companyName\" placeholder=\"请输入公司名称\" name=\"companyName\">        </div>      </div>      <div class=\"form-group\">        <label for=\"jobName\" class=\"col-sm-2 control-label\">          职位名称        </label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" id=\"jobName\" placeholder=\"请输入职位名称\" name=\"jobName\">        </div>      </div>      <div class=\"form-group\">        <label for=\"city\" class=\"col-sm-2 control-label\">          工作地点        </label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"请输入工作地点\" name=\"city\">        </div>      </div>      <div class=\"form-group\">        <label for=\"salary\" class=\"col-sm-2 control-label\">          岗位薪资        </label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" id=\"salary\" placeholder=\"请输入岗位薪资\" name=\"salary\">        </div>      </div>      <div class=\"form-group\">        <label for=\"degree\" class=\"col-sm-2 control-label\">          学历要求        </label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" id=\"degree\" placeholder=\"请输入学历要求\" name=\"degree\">        </div>      </div>      <div class=\"form-group\">        <label for=\"experience\" class=\"col-sm-2 control-label\">          工作经验        </label>        <div class=\"col-sm-10\">          <input type=\"text\" class=\"form-control\" id=\"experience\" placeholder=\"请输入工作经验时间范围\" name=\"experience\">        </div>      </div>      <div class=\"form-group\">        <label for=\"description\" class=\"col-sm-2 control-label\">          职位描述        </label>        <div class=\"col-sm-10\">          <textarea class=\"form-control\" id=\"description\" placeholder=\"请输入职位的描述\" style = \'resize: none;\' name=\"description\"></textarea>        </div>      </div>        </div>    <!-- /.box-body -->    <div class=\"box-footer\">      <button type=\"button\" id=\"app-add-back\" class=\"btn btn-default\">        返回      </button>      <button type=\"button\" id=\"app-add-save\" class=\"btn btn-info pull-right\">        保存      </button>    </div>    <!-- /.box-footer -->  </form></div>  <!-- /.box -->"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

const NavUtils = {
    init(){
        window.addEventListener('load',this.changeHash,false);
        window.addEventListener('hashchange',this.changeHash,false);
    },
    changeHash(){
        let hash = location.hash.slice(1);
        let match = {
            '/index': ['主页','欢迎信息','fa fa-home'],
            '/job': ['职位管理','职位列表','fa fa-user-secret'],
            '/job_add': ['发布职位','职位信息','fa fa-user-secret']
        }

        //DOM操作
        $('.app-main-info').html(match[hash][0]);
        $('.app-sub-info').html(match[hash][1]);
        $('.breadcrumb .fa').attr('class',match[hash][2]);

        //改变导航激活状态
        let act = $(`.sidebar-menu a[href="#${hash}"]`);
        act.parent().addClass('active').siblings().removeClass('active');
    }
}

module.exports = NavUtils;

/***/ })
/******/ ]);