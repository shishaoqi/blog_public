/*! For license information please see 26.7ee357ad8f6e789ac2ca.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"1GJp":function(t,e,r){"use strict";function o(t){if("string"==typeof t.data)toastr.error(t.status+" "+t.statusText);else{var e=t.data.errors,r="";Object.keys(e).map((function(t,o){var n=e[t];r+='<span style="color: #e74c3c">'+n[0]+"</span><br>"})),swal({title:"Error Text!",type:"error",html:r})}}r.d(e,"a",(function(){return o}))},W4yC:function(t,e,r){"use strict";var o=r("jl8+"),n=r.n(o),a=r("1GJp");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),s=new E(n||[]);return o(i,"_invoke",{value:$(t,r,s)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function m(){}function h(){}function v(){}var y={};l(y,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(j([])));w&&w!==e&&r.call(w,a)&&(y=w);var _=v.prototype=m.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;o(this,"_invoke",{value:function(o,a){function s(){return new e((function(n,s){!function o(n,a,s,c){var u=d(t[n],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==i(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return o("throw",t,s,c)}))}c(u.arg)}(o,a,n,s)}))}return n=n?n.then(s,s):s()}})}function $(t,e,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return O()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=d(t,e,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=e.method,o=t.iterator[r];if(void 0===o)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var n=d(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=v,o(_,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:h,configurable:!0}),h.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new x(f(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(_),l(_,u,"Generator"),l(_,a,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;L(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function c(t,e,r,o,n,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(o,n)}var u={components:{Multiselect:n.a},props:{user:{type:Object,default:function(){return{}}}},data:function(){return{roles:[],allRoles:[],isAdmin:!1}},computed:{mode:function(){return this.user.id?"update":"create"}},watch:{user:function(t){this.roles=t.roles.data}},created:function(){var t,e=this;return(t=s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadRoles();case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,n){var a=t.apply(e,r);function i(t){c(a,o,n,i,s,"next",t)}function s(t){c(a,o,n,i,s,"throw",t)}i(void 0)}))})()},methods:{loadRoles:function(){var t=this;this.$http.get("role",{params:{per_page:100}}).then((function(e){var r=e.data;t.allRoles=r.data}))},onSubmit:function(){var t=this,e="user"+(this.user.id?"/"+this.user.id:""),r=this.user.id?"patch":"post",o=[];this.roles.forEach((function(t){o.push(t.id)})),this.user.roles=o,this.$http[r](e,this.user).then((function(e){toastr.success("You "+t.mode+"d a new account information!"),t.$router.push({name:"dashboard.user"})})).catch((function(t){var e=t.response;Object(a.a)(e)}))}}},l=r("KHd+"),f=Object(l.a)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("form",{staticClass:"form col-md-4 offset-md-4",attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-group text-center"},[e("img",{staticClass:"rounded-circle",attrs:{src:t.user.avatar?t.user.avatar:"/images/default.png",id:"avatar",width:"100",alt:t.user.name}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v(t._s(t.$t("form.name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:t.$t("form.name"),disabled:!!t.user.id},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v(t._s(t.$t("form.email")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:t.$t("form.email")},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"nickname"}},[t._v(t._s(t.$t("form.nickname")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.nickname,expression:"user.nickname"}],staticClass:"form-control",attrs:{type:"text",id:"nickname",placeholder:t.$t("form.nickname")},domProps:{value:t.user.nickname},on:{input:function(e){e.target.composing||t.$set(t.user,"nickname",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"website"}},[t._v(t._s(t.$t("form.website")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.website,expression:"user.website"}],staticClass:"form-control",attrs:{type:"text",id:"website",placeholder:t.$t("form.website")},domProps:{value:t.user.website},on:{input:function(e){e.target.composing||t.$set(t.user,"website",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[t._v(t._s(t.$t("form.description")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.description,expression:"user.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:t.$t("form.description")},domProps:{value:t.user.description},on:{input:function(e){e.target.composing||t.$set(t.user,"description",e.target.value)}}})]),t._v(" "),t.user.id?t._e():[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v(t._s(t.$t("form.password")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:t.$t("form.password"),name:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password_confirmation"}},[t._v(t._s(t.$t("form.confirm_password")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",id:"password_confirmation",placeholder:t.$t("form.confirm_password"),name:"password_confirmation"},domProps:{value:t.user.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.user,"password_confirmation",e.target.value)}}})])],t._v(" "),e("div",{staticClass:"form-group"},[e("div",{staticClass:"custom-control custom-checkbox d-inline-block pr-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.is_admin,expression:"user.is_admin"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"is-admin"},domProps:{checked:Array.isArray(t.user.is_admin)?t._i(t.user.is_admin,null)>-1:t.user.is_admin},on:{change:function(e){var r=t.user.is_admin,o=e.target,n=!!o.checked;if(Array.isArray(r)){var a=t._i(r,null);o.checked?a<0&&t.$set(t.user,"is_admin",r.concat([null])):a>-1&&t.$set(t.user,"is_admin",r.slice(0,a).concat(r.slice(a+1)))}else t.$set(t.user,"is_admin",n)}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"is-admin"}},[t._v("Set Admin")])])]),t._v(" "),t.user.is_admin?e("div",{staticClass:"form-group"},[e("label",[t._v("Roles")]),t._v(" "),e("multiselect",{attrs:{options:t.allRoles,multiple:"",searchable:"","hide-selected":"","close-on-select":!1,"clear-on-select":!1,limit:5,placeholder:t.$t("form.select_tag"),label:"name","track-by":"name"},model:{value:t.roles,callback:function(e){t.roles=e},expression:"roles"}})],1):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v(t._s(t.user.id?t.$t("form.edit"):t.$t("form.create")))])])],2)])}),[],!1,null,null,null);e.a=f.exports},r1yN:function(t,e,r){"use strict";r.r(e);var o={components:{UserForm:r("W4yC").a},data:function(){return{user:void 0}},created:function(){this.loadUser()},methods:{loadUser:function(){var t=this;this.$http.get("user/"+this.$route.params.id+"/edit?include=roles").then((function(e){t.user=e.data.data}))}}},n=r("KHd+"),a=Object(n.a)(o,(function(){var t=this._self._c;return t("vue-form",{attrs:{title:this.$t("form.edit_user")}},[t("template",{slot:"buttons"},[t("router-link",{staticClass:"btn btn-sm btn-secondary",attrs:{to:{name:"dashboard.user"},exact:""}},[this._v(this._s(this.$t("form.back")))])],1),this._v(" "),t("template",{slot:"content"},[t("user-form",{attrs:{user:this.user}})],1)],2)}),[],!1,null,null,null);e.default=a.exports}}]);