(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"1GJp":function(t,s,e){"use strict";function i(t){if("string"==typeof t.data)toastr.error(t.status+" "+t.statusText);else{var s=t.data.errors,e="";Object.keys(s).map((function(t,i){var a=s[t];e+='<span style="color: #e74c3c">'+a[0]+"</span><br>"})),swal({title:"Error Text!",type:"error",html:e})}}e.d(s,"a",(function(){return i}))},b8aM:function(t,s,e){"use strict";var i=e("1GJp"),a=e("s1HA"),o=e.n(a),n=e("d/KH"),c={components:{Multiselect:e.n(n).a},props:{discussion:{type:Object,default:function(){return{}}}},data:function(){return{simplemde:{},tags:null,allTag:[]}},computed:{mode:function(){return this.discussion.id?"update":"create"}},created:function(){this.loadTags()},watch:{discussion:function(){this.tags=this.discussion.tags.data,this.simplemde.value(this.discussion.content_raw)}},mounted:function(){var t=this.$t||this.$i18n.t;this.simplemde=new o.a({element:document.getElementById("editor"),placeholder:t("form.content_placeholder",{type:t("form.discussion")}),autoDownloadFontAwesome:!0})},methods:{loadTags:function(){var t=this;this.$http.get("tags").then((function(s){t.allTag=s.data.data}))},onSubmit:function(){var t=this;if(0!=this.tags.length){for(var s=[],e="discussion"+(this.discussion.id?"/"+this.discussion.id:""),a=this.discussion.id?"patch":"post",o=0;o<this.tags.length;o++)s[o]=this.tags[o].id;this.discussion.tags=JSON.stringify(s),this.discussion.content=this.simplemde.value(),this.$http[a](e,this.discussion).then((function(s){toastr.success("You "+t.mode+"d the discussion success!"),t.$router.push({name:"dashboard.discussion"})})).catch((function(t){var s=t.response;Object(i.a)(s)}))}else toastr.error("Tag must select one or more.")}}},l=e("nKT8"),r=Object(l.a)(c,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("form",{staticClass:"col-sm-9 offset-sm-1",on:{submit:function(s){return s.preventDefault(),t.onSubmit(s)}}},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v(t._s(t.$t("form.title")))]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.discussion.title,expression:"discussion.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",name:"title"},domProps:{value:t.discussion.title},on:{input:function(s){s.target.composing||t.$set(t.discussion,"title",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label"},[t._v(t._s(t.$t("form.tag")))]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("multiselect",{attrs:{options:t.allTag,multiple:!0,searchable:!0,"hide-selected":!0,"close-on-select":!1,"clear-on-select":!1,limit:5,placeholder:t.$t("form.select_tag"),label:"tag","track-by":"tag"},model:{value:t.tags,callback:function(s){t.tags=s},expression:"tags"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v(t._s(t.$t("form.content")))]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-sm-2 col-form-label"},[t._v("\n        "+t._s(t.$t("form.status"))+"\n      ")]),t._v(" "),e("div",{staticClass:"col-sm-2"},[e("div",{staticClass:"togglebutton",staticStyle:{"margin-top":"6px"}},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.discussion.status,expression:"discussion.status"}],attrs:{type:"checkbox",name:"status",value:"1"},domProps:{checked:Array.isArray(t.discussion.status)?t._i(t.discussion.status,"1")>-1:t.discussion.status},on:{change:function(s){var e=t.discussion.status,i=s.target,a=!!i.checked;if(Array.isArray(e)){var o=t._i(e,"1");i.checked?o<0&&t.$set(t.discussion,"status",e.concat(["1"])):o>-1&&t.$set(t.discussion,"status",e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.discussion,"status",a)}}}),t._v(" "),e("span",{staticClass:"toggle"})])])])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"offset-sm-2 col-sm-10"},[e("button",{staticClass:"btn btn-info",attrs:{type:"submit"}},[t._v(t._s(t.discussion.id?t.$t("form.edit"):t.$t("form.create")))])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-sm-10"},[s("textarea",{attrs:{id:"editor",name:"content"}})])}],!1,null,null,null);s.a=r.exports},xWfP:function(t,s,e){"use strict";e.r(s);var i={components:{DiscussionForm:e("b8aM").a}},a=e("nKT8"),o=Object(a.a)(i,(function(){var t=this.$createElement,s=this._self._c||t;return s("vue-form",{attrs:{title:this.$t("form.create_discussion")}},[s("template",{slot:"buttons"},[s("router-link",{staticClass:"btn btn-sm btn-secondary",attrs:{to:{name:"dashboard.discussion"},exact:""}},[this._v(this._s(this.$t("form.back")))])],1),this._v(" "),s("template",{slot:"content"},[s("discussion-form")],1)],2)}),[],!1,null,null,null);s.default=o.exports}}]);