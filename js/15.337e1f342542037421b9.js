(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0auo":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"h2[data-v-73316d6e]{font-size:20px;line-height:30px;margin-top:0}ul[data-v-73316d6e]{padding-left:0}ul li[data-v-73316d6e]{list-style:none}.content[data-v-73316d6e]{margin-top:30px}.table thead th[data-v-73316d6e]{vertical-align:bottom}.table th[data-v-73316d6e]{font-size:12px;text-transform:uppercase;font-weight:400;color:#aaa}.table :not(:last-child)>td[data-v-73316d6e],.table th[data-v-73316d6e]{border-bottom:1px solid #e5e5e5}.table td[data-v-73316d6e]{vertical-align:top}.table td[data-v-73316d6e],.table th[data-v-73316d6e]{padding:16px 12px}.table-hover tbody tr[data-v-73316d6e]:hover{background:#fff}.sidebar ul li a[data-v-73316d6e]{font-size:12px;display:block;text-decoration:none;padding:8px 14px;cursor:pointer;color:#666}.active[data-v-73316d6e],.sidebar ul li a[data-v-73316d6e]:hover{background:#eee;color:#666}.sidebar ul li a i[data-v-73316d6e]{font-size:14px;margin-right:10px}",""])},bG2v:function(t,a,e){var s=e("0auo");"string"==typeof s&&(s=[[t.i,s,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,d);s.locals&&(t.exports=s.locals)},pF4T:function(t,a,e){"use strict";e.r(a);var s={data:function(){return{system:{},type:"system"}},created:function(){var t=this;this.$http.get("system").then((function(a){t.system=a.data}))}},d=(e("trWY"),e("KHd+")),i=Object(d.a)(s,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"row"},[a("div",{staticClass:"box"},[a("div",{staticClass:"box-title"},[a("h5",[t._v(t._s(t.$t("page.systems")))])]),t._v(" "),a("div",{staticClass:"box-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"sidebar"},[a("ul",[a("li",{class:["system"==t.type?"active":""],attrs:{"aria-expanded":"false"},on:{click:function(a){t.type="system"}}},[a("a",[a("i",{staticClass:"fas fa-puzzle-piece"}),t._v(t._s(t.$t("page.system")))])]),t._v(" "),a("li",{class:["php"==t.type?"active":""],attrs:{"aria-expanded":"true"},on:{click:function(a){t.type="php"}}},[t._m(0)]),t._v(" "),a("li",{class:["database"==t.type?"active":""],attrs:{"aria-expanded":"false"},on:{click:function(a){t.type="database"}}},[a("a",[a("i",{staticClass:"fas fa-database"}),t._v(" "+t._s(t.$t("page.database")))])])])])]),t._v(" "),a("ul",{staticClass:"col-md-10",attrs:{id:"tab-content"}},["system"==t.type?a("li",{attrs:{"aria-hidden":"true"}},[a("h2",[t._v(t._s(t.$t("page.system")))]),t._v(" "),a("table",{staticClass:"table table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"150"}},[t._v(t._s(t.$t("page.key")))]),t._v(" "),a("th",[t._v(t._s(t.$t("page.value")))])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(t._s(t.$t("page.server")))]),t._v(" "),a("td",[t._v(t._s(t.system.server))])]),t._v(" "),a("tr",[a("td",[t._v(t._s(t.$t("page.domain")))]),t._v(" "),a("td",[t._v(t._s(t.system.http_host))])]),t._v(" "),a("tr",[a("td",[t._v("IP")]),t._v(" "),a("td",[t._v(t._s(t.system.remote_host))])]),t._v(" "),a("tr",[a("td",[t._v("User Agent")]),t._v(" "),a("td",[t._v(t._s(t.system.user_agent))])])])])]):t._e(),t._v(" "),"php"==t.type?a("li",{attrs:{"aria-hidden":"false"}},[a("h2",[t._v("PHP")]),t._v(" "),a("table",{staticClass:"table table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"150"}},[t._v(t._s(t.$t("page.key")))]),t._v(" "),a("th",[t._v(t._s(t.$t("page.value")))])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(t._s(t.$t("page.version")))]),t._v(" "),a("td",[t._v(t._s(t.system.php))])]),t._v(" "),a("tr",[a("td",[t._v("Handler")]),t._v(" "),a("td",[t._v(t._s(t.system.sapi_name))])]),t._v(" "),a("tr",[a("td",[t._v(t._s(t.$t("page.extension")))]),t._v(" "),a("td",[t._v(t._s(t.system.extensions))])])])])]):t._e(),t._v(" "),"database"==t.type?a("li",{attrs:{"aria-hidden":"true"}},[a("h2",[t._v(t._s(t.$t("page.database")))]),t._v(" "),a("table",{staticClass:"table table-hover"},[a("thead",[a("tr",[a("th",{attrs:{width:"150"}},[t._v(t._s(t.$t("page.key")))]),t._v(" "),a("th",[t._v(t._s(t.$t("page.value")))])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(t._s(t.$t("page.driver")))]),t._v(" "),a("td",[t._v(t._s(t.system.db_connection))])]),t._v(" "),a("tr",[a("td",[t._v(t._s(t.$t("page.database")))]),t._v(" "),a("td",[t._v(t._s(t.system.db_database))])]),t._v(" "),a("tr",[a("td",[t._v(t._s(t.$t("page.version")))]),t._v(" "),a("td",[t._v(t._s(t.system.db_version))])])])])]):t._e()])])])])])}),[function(){var t=this._self._c;return t("a",[t("i",{staticClass:"fas fa-code"}),this._v(" PHP")])}],!1,null,"73316d6e",null);a.default=i.exports},trWY:function(t,a,e){"use strict";e("bG2v")}}]);