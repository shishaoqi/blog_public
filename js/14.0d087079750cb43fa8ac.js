(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1GJp":function(t,n,i){"use strict";function a(t){if("string"==typeof t.data)toastr.error(t.status+" "+t.statusText);else{var n=t.data.errors,i="";Object.keys(n).map((function(t,a){var e=n[t];i+='<span style="color: #e74c3c">'+e[0]+"</span><br>"})),swal({title:"Error Text!",type:"error",html:i})}}i.d(n,"a",(function(){return a}))},BB20:function(t,n,i){"use strict";i.r(n);var a={components:{LinkForm:i("VbNM").a},data:function(){return{link:void 0}},created:function(){this.loadLink()},methods:{loadLink:function(){var t=this;this.$http.get("link/"+this.$route.params.id+"/edit").then((function(n){t.link=n.data.data}))}}},e=i("KHd+"),s=Object(e.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("vue-form",{attrs:{title:this.$t("form.edit_link")}},[n("template",{slot:"buttons"},[n("router-link",{staticClass:"btn btn-sm btn-secondary",attrs:{to:{name:"dashboard.link"},exact:""}},[this._v(this._s(this.$t("form.back")))])],1),this._v(" "),n("template",{slot:"content"},[n("link-form",{attrs:{link:this.link}})],1)],2)}),[],!1,null,null,null);n.default=s.exports},Gg9K:function(t,n,i){var a=i("qE3i");"string"==typeof a&&(a=[[t.i,a,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(a,e);a.locals&&(t.exports=a.locals)},VbNM:function(t,n,i){"use strict";var a=i("1GJp"),e={props:{link:{type:Object,default:function(){return{image:""}}}},watch:{link:function(){return this.link}},computed:{mode:function(){return this.link.id?"update":"create"}},methods:{change:function(t){var n=this,i=t.target.files[0],a=new FormData;a.append("image",i),a.append("strategy","links"),/\/(?:jpeg|jpg|png)/i.test(i.type)?this.$http.post("file/upload",a).then((function(t){n.link.image=t.data.url})):toastr.error("Uploaded Failed! Image only supported jpeg, jpg and png.")},onSubmit:function(){var t=this;if(this.link.image){var n="link"+(this.link.id?"/"+this.link.id:""),i=this.link.id?"patch":"post";this.$http[i](n,this.link).then((function(n){toastr.success("You "+t.mode+"d the link information success!"),t.$router.push({name:"dashboard.link"})})).catch((function(t){var n=t.response;Object(a.a)(n)}))}else toastr.error("The image is required!")}}},s=(i("ofKd"),i("KHd+")),o=Object(s.a)(e,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"row"},[i("form",{staticClass:"col-sm-4 offset-sm-4",attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(n){return n.preventDefault(),t.onSubmit(n)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"name"}},[t._v(t._s(t.$t("form.link_name")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.link.name,expression:"link.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",name:"name",placeholder:t.$t("form.link_name")},domProps:{value:t.link.name},on:{input:function(n){n.target.composing||t.$set(t.link,"name",n.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"link"}},[t._v(t._s(t.$t("form.link")))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.link.link,expression:"link.link"}],staticClass:"form-control",attrs:{type:"link",id:"link",name:"link",placeholder:t.$t("form.link")},domProps:{value:t.link.link},on:{input:function(n){n.target.composing||t.$set(t.link,"link",n.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"image"}},[t._v(t._s(t.$t("form.image")))]),t._v(" "),i("div",{staticClass:"upload-box"},[i("input",{staticClass:"form-control",attrs:{type:"file",id:"image",name:"image"},on:{change:t.change}}),t._v(" "),t.link.image?i("img",{staticClass:"img-circle image",attrs:{src:t.link.image,alt:t.link.name,width:"100",height:"100"}}):i("i",{staticClass:"fas fa-image link-image"}),t._v(" "),t.link.image?i("div",{staticClass:"mask"},[i("i",{staticClass:"fas fa-cloud-upload-alt"})]):t._e()])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v(t._s(t.$t("form.is_enable")))]),t._v(" "),i("div",{staticClass:"togglebutton",staticStyle:{"margin-top":"6px"}},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.link.status,expression:"link.status"}],attrs:{type:"checkbox",name:"status"},domProps:{checked:Array.isArray(t.link.status)?t._i(t.link.status,null)>-1:t.link.status},on:{change:function(n){var i=t.link.status,a=n.target,e=!!a.checked;if(Array.isArray(i)){var s=t._i(i,null);a.checked?s<0&&t.$set(t.link,"status",i.concat([null])):s>-1&&t.$set(t.link,"status",i.slice(0,s).concat(i.slice(s+1)))}else t.$set(t.link,"status",e)}}}),t._v(" "),i("span",{staticClass:"toggle"})])])]),t._v(" "),i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-info",attrs:{type:"submit"}},[t._v(t._s(t.link.id?t.$t("form.edit"):t.$t("form.create")))])])])])}),[],!1,null,"02d5cc80",null);n.a=o.exports},ofKd:function(t,n,i){"use strict";var a=i("Gg9K");i.n(a).a},qE3i:function(t,n,i){(t.exports=i("I1BE")(!1)).push([t.i,".upload-box[data-v-02d5cc80] {\n  position: relative;\n  width: 100px;\n  height: 100px;\n}\n.link-image[data-v-02d5cc80] {\n  display: block;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  font-size: 30px;\n  line-height: 100px;\n  border: 2px dashed #e7eaec;\n  border-radius: 5px;\n  color: #e7eaec;\n}\n.image[data-v-02d5cc80] {\n  border-radius: 5px;\n}\ninput#image[data-v-02d5cc80] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100px;\n  height: 100px;\n  border-radius: 5px;\n  cursor: pointer;\n  opacity: 0;\n  z-index: 10;\n}\n.mask[data-v-02d5cc80] {\n  display: none;\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  border-radius: 5px;\n  z-index: 5;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 100px;\n  font-size: 20px;\n}\n.upload-box:hover .mask[data-v-02d5cc80] {\n  display: block;\n}",""])}}]);