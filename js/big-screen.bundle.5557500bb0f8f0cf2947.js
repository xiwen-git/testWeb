!function(t){function e(e){for(var r,s,a=e[0],o=e[1],c=e[2],f=0,d=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(u,s)&&u[s]&&d.push(u[s][0]),u[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);for(l&&l(e);d.length;)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==u[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},u={2:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=o;i.push([92,0]),n()}({0:function(t,e,n){"use strict";n.r(e);var r=n(1),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=u.a},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=null;e.default={props:["text"],data:function(){return{experienceTime:"2019-07-09 23:59:59"}},created:function(){document.title=this.default_text},computed:{default_text:function(){return this.text||"股东来了"},CONFIG:function(){return Object.assign({},{type:"1",label:"value",value:"key",url:""},this.config)}},methods:{init:function(){var t=this;r=clearInterval(r),(new Date).getTime()>new Date(this.experienceTime).getTime()?(document.body.innerHTML="",this.resetBody()):r=setInterval(function(){return t.init()},2e3)},resetBody:function(){document.body.innerHTML="测试已过期，请联系管理员"}}}},12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,u=n(13),i=(r=u)&&r.__esModule?r:{default:r};e.default=i.default},13:function(t,e,n){"use strict";n.r(e);var r=n(5),u=n(0);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n(14);var s=n(4),a=Object(s.a)(u.default,r.a,r.b,!1,null,"93b01814",null);a.options.__file="src/component/qHeader/template.vue",e.default=a.exports},135:function(t,e,n){"use strict";var r=n(44);n.n(r).a},14:function(t,e,n){"use strict";var r=n(2);n.n(r).a},15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})});var u=n(18);Object.keys(u).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return u[t]}})})},16:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.postFetch=e.getFetch=void 0;var r=a(n(9)),u=a(n(31)),i=a(n(10)),s=a(n(17));a(n(32));function a(t){return t&&t.__esModule?t:{default:t}}var o=window.Qs;"prod"===window.env?s.default.defaults.baseURL=window.prodBaseUrl:s.default.defaults.baseURL=window.devBaseUrl,s.default.defaults.timeout=6e4,s.default.interceptors.request.use(function(t){t.headers.common["Access-Control-Allow-Origin"]="*";(new Date).getTime();return new Date("2019-07-09 23:59:59").getTime(),t},function(t){return Promise.reject(t)}),s.default.interceptors.response.use(function(t){return 200==t.status?t.data:t},function(t){return{code:-1,message:t.message||"服务器错误"}});var c,l;e.getFetch=(c=(0,i.default)(r.default.mark(function t(e,n,i){var a;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=void 0,!i){t.next=7;break}return t.next=4,s.default.get(e+"?"+o.stringify((0,u.default)({},n)));case 4:a=t.sent,t.next=10;break;case 7:return t.next=9,s.default.get(e,{params:n});case 9:a=t.sent;case 10:return t.abrupt("return",a);case 11:case"end":return t.stop()}},t,void 0)})),function(t,e,n){return c.apply(this,arguments)}),e.postFetch=(l=(0,i.default)(r.default.mark(function t(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.default.post(e,u);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,void 0)})),function(t){return l.apply(this,arguments)})},17:function(t,e){t.exports=axios},18:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.cacheRequest=function(){var t={};return{get:function(e){return!!t[e]&&t[e]},add:function(e,n){return t[e]=n,!0}}}},19:function(t,e,n){"use strict";o(n(33));var r=o(n(34)),u=(o(n(35)),o(n(36))),i=(o(n(37)),o(n(38))),s=(o(n(39)),o(n(40)));n(41);var a=o(n(3));function o(t){return t&&t.__esModule?t:{default:t}}n(20),a.default.prototype.$notify=s.default,a.default.prototype.$message=i.default,Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},a.default.use(u.default),a.default.use(r.default)},2:function(t,e,n){},20:function(t,e,n){},3:function(t,e){t.exports=Vue},42:function(t,e,n){"use strict";n.r(e);var r=n(43),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=u.a},43:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(9)),u=o(n(10)),i=o(n(124)),s=o(n(12)),a=n(15);function o(t){return t&&t.__esModule?t:{default:t}}var c=null,l=null,f=null;e.default={components:{qHeader:s.default},data:function(){return{result:[],nowTime:0,waiting:!0,initKey:!0,desc:"",page:0,size:10}},mounted:function(){this.init()},computed:{pagingResult:function(){return[].concat((0,i.default)(this.result)).splice(this.page*this.size,this.size)},countDown:function(){if(this.nowTime<=0)return this.initKey||(this.setting(!1,""),this.getResult()),this.initKey=!1,"0分0秒";var t=this.nowTime,e=t%60,n=t/60;return Math.floor(n)+"分"+e+"秒"}},methods:{prev:function(){if(this.page<=0)return this.page=0,this.$message({message:"已是第一页",type:"warning"}),!1;this.page-=1},next:function(){var t=Math.ceil(this.result.length/this.size);if(this.page>=t-1)return this.page=t-1,this.$message({message:"已是最后一页",type:"warning"}),!1;this.page+=1},getIsStartRes:function(){var t=(0,u.default)(r.default.mark(function t(){var e,n=this;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=clearTimeout(l),t.next=3,(0,a.postFetch)("api/Problem/CheckGame",{usertoken:""});case 3:0==(e=t.sent).ReCode?(this.nowTime=e.Second,this.setting(!0,"答题进行中："),this.countDownRes()):10==e.ReCode||11!=e.ReCode&&0!=e.ReCode?(this.setting(!0,"答题未开始"),l=setTimeout(function(){return n.getIsStartRes()},1e3)):11==e.ReCode&&(this.setting(!1,""),this.getResult());case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),setting:function(t,e){this.waiting=t,this.desc=e},countDownRes:function(){var t=(0,u.default)(r.default.mark(function t(){var e,n=this;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=clearTimeout(c),t.next=3,(0,a.postFetch)("api/Problem/CheckGame");case 3:e=t.sent,this.nowTime=e.Second,this.nowTime>=0&&(c=setTimeout(function(){return n.countDownRes()},200));case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),init:function(){this.getIsStartRes()},getResult:function(){var t=(0,u.default)(r.default.mark(function t(){var e,n=this;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return f=clearTimeout(f),t.next=3,(0,a.getFetch)("api/Problem/GetScore");case 3:0==(e=t.sent).ReCode?this.result=e.Result||this.result:100==e.ReCode?this.result=[]:this.result=this.result,f=setTimeout(function(){return n.getResult()},1e3);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},44:function(t,e,n){},5:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"header"},[this._v(this._s(this.default_text)),e("span",{staticStyle:{color:"red","font-size":"2rem"}},[this._v("测试版本-仅供内部测试使用")])])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},68:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"box-body"},[n("qHeader"),t._v(" "),n("div",{staticClass:"question-box"},[t.waiting?n("div",{staticClass:"waitingText"},[t._v("\n      "+t._s(t.desc)+"\n      "),"答题未开始"!=t.desc?n("span",[t._v(t._s(t.countDown))]):t._e()]):t._e(),t._v(" "),t.waiting?t._e():n("ul",[t._m(0),t._v(" "),t._l(t.pagingResult,function(e,r){return n("li",{key:r,staticClass:"order"},[n("span",[t._v(t._s(e.Ranking))]),t._v(" "),n("span",[t._v(t._s(e.UserName))]),t._v(" "),n("span",[t._v(t._s(e.Time))]),t._v(" "),n("span",[t._v(t._s(e.Score))])])}),t._v(" "),0==t.pagingResult.length?n("li",[t._v("暂无排名")]):t._e()],2),t._v(" "),!t.waiting&&t.result.length>10?n("div",{staticClass:"button-group"},[n("el-button",{attrs:{type:"text",icon:"el-icon-arrow-left"},on:{click:function(e){return t.prev()}}},[t._v("上一页")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.next()}}},[t._v("下一页"),n("i",{staticClass:"el-icon-arrow-right el-icon--right"})])],1):t._e()])],1)},u=[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("排名")]),this._v(" "),e("span",[this._v("姓名")]),this._v(" "),e("span",[this._v("用时")]),this._v(" "),e("span",[this._v("得分")])])}];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},92:function(t,e,n){"use strict";var r=i(n(3)),u=i(n(93));function i(t){return t&&t.__esModule?t:{default:t}}n(19),new r.default({render:function(t){return t(u.default)}}).$mount("#app")},93:function(t,e,n){"use strict";n.r(e);var r=n(68),u=n(42);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n(135);var s=n(4),a=Object(s.a)(u.default,r.a,r.b,!1,null,null,null);a.options.__file="src/page/big-screen/template.vue",e.default=a.exports}});