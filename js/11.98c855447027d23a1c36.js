(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1GJp":function(t,e,a){"use strict";function i(t){if("string"==typeof t.data)toastr.error(t.status+" "+t.statusText);else{var e=t.data.errors,a="";Object.keys(e).map((function(t,i){var s=e[t];a+='<span style="color: #e74c3c">'+s[0]+"</span><br>"})),swal({title:"Error Text!",type:"error",html:a})}}a.d(e,"a",(function(){return i}))},"3RDl":function(t,e,a){"use strict";var i=a("uLsi");a.n(i).a},KCiY:function(t,e,a){(t.exports=a("aQ7W")(!1)).push([t.i,".cover-upload[data-v-7d139124]{display:inline-block}.cover-upload .file[data-v-7d139124]{position:relative;margin:0 auto;display:block;width:100px;height:35px;line-height:35px;font-size:12px}.cover-upload .file span[data-v-7d139124]{display:block;position:absolute;top:0;left:0;right:0}.cover-upload .file input[data-v-7d139124]{position:absolute;left:0;right:0;top:0;width:100px;height:35px;opacity:0}",""])},aXGX:function(t,e,a){"use strict";var i={data:function(){return{selected:null,options:[],tags:null,allTag:[],startTime:{time:""},option:{type:"min",week:["Mo","Tu","We","Th","Fr","Sa","Su"],month:["January","February","March","April","May","June","July","August","September","October","November","December"],format:"YYYY-MM-DD HH:mm:ss",placeholder:"Published At?",inputStyle:{display:"inline-block",padding:"6px 6px 6px 10px",height:"41px","line-height":"22px","font-size":"13px",border:"1px solid #dce4ec","border-radius":"6px",color:"#5F5F5F"},color:{header:"#52697f",headerText:"#1abc9c"},buttons:{ok:"Ok",cancel:"Cancel"},overlayOpacity:.5,dismissible:!0}}},mounted:function(){this.option.placeholder=this.$t("form.published_at")},created:function(){this.loadCategories(),this.loadCollections(),this.loadTags()},methods:{loadCategories:function(){var t=this;this.$http.get("categories").then((function(e){t.options=e.data.data}))},loadCollections:function(){var t=this;this.$http.get("collections").then((function(e){t.collections=e.data.data}))},loadTags:function(){var t=this;this.$http.get("tags").then((function(e){t.allTag=e.data.data}))}}},s=a("nKT8"),l=Object(s.a)(i,void 0,void 0,!1,null,null,null).exports,o=a("s1HA"),r=a.n(o),c=a("d/KH"),n=a.n(c),d=a("1GJp"),m=a("477g"),p=a("z1Sf"),u=a.n(p),g=a("xRJu"),f=a.n(g),v={mixins:[l],components:{Multiselect:n.a,DatePicker:m.default},props:{article:{type:Object,default:function(){return{page_image:""}}}},data:function(){return{simplemde:"",content:""}},computed:{mode:function(){return this.article.id?"update":"create"}},watch:{article:function(){this.selected=this.article.category.data,this.tags=this.article.tags.data,this.simplemde.value(this.article.content),this.startTime.time=this.article.published_time}},mounted:function(){var t=this.$t||this.$i18n.t,e=this;this.simplemde=new r.a({element:document.getElementById("editor"),placeholder:t("form.content_placeholder",{type:t("form.article")}),autoDownloadFontAwesome:!0,forceSync:!0,previewRender:function(t,a){return a.className+=" markdown",e.parse(t)}}),this.contentUploader()},methods:{parse:function(t){return marked.setOptions({highlight:function(t){return hljs.highlightAuto(t).value},sanitize:!0}),f.a.toImage(marked(t))},onSubmit:function(){var t=this;if(this.tags&&this.selected){for(var e=[],a="article"+(this.article.id?"/"+this.article.id:""),i=this.article.id?"patch":"post",s=0;s<this.tags.length;s++)e[s]=this.tags[s].id;this.article.published_at=this.startTime.time,this.article.content=this.simplemde.value(),this.article.category_id=this.selected.id,this.article.tags=JSON.stringify(e),this.$http[i](a,this.article).then((function(e){toastr.success("You "+t.mode+"d the article success!"),t.$router.push({name:"dashboard.article"})})).catch((function(t){var e=t.response;Object(d.a)(e)}))}else toastr.error("Category and Tag must select one or more.")},coverUploader:function(t){var e=this,a=t.target.files,i=new FormData;i.append("image",a[0]),i.append("strategy","cover"),this.$http.post("file/upload",i).then((function(t){toastr.success("You upload a file success!"),e.article.page_image=t.data.url})).catch((function(t){var e=t.response;e.data.error?toastr.error(e.data.error.message):toastr.error(e.status+" : Resource "+e.statusText)}))},contentUploader:function(){var t=this;this.simplemde.codemirror.on("paste",(function(t,e){e.clipboardData.types.indexOf("Files")>=0&&e.preventDefault()}));var e=new u.a.FineUploaderBasic({paste:{targetElement:document.querySelector(".CodeMirror")},request:{endpoint:"/api/file/upload",inputName:"image",customHeaders:{"X-CSRF-TOKEN":window.Laravel.csrfToken,"X-Requested-With":"XMLHttpRequest"},params:{strategy:"article"}},validation:{allowedExtensions:["jpeg","jpg","gif","png"]},callbacks:{onPasteReceived:function(e){var a=new u.a.Promise;return null==e||void 0===e.type||e.type.indexOf("image/")?(toastr.error("Only can upload image!"),a.failure("not a image.")):a.then((function(){t.createdImageUploading("image.png")})).success("image")},onComplete:function(e,a,i){t.replaceImageUploading(a,i.url)}}});new u.a.DragAndDrop({dropZoneElements:[document.querySelector(".CodeMirror")],callbacks:{processingDroppedFilesComplete:function(a,i){a.forEach((function(e){t.createdImageUploading(e.name)})),e.addFiles(a)}}})},getImageUploading:function(){return"\n![Uploading ...]()\n"},createdImageUploading:function(t){this.simplemde.value(this.simplemde.value()+this.getImageUploading())},replaceImageUploading:function(t,e){var a="\n!["+t+"]("+e+")\n";this.simplemde.value(this.simplemde.value().replace(this.getImageUploading(),a))}}},h=(a("3RDl"),Object(s.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("form",{staticClass:"col-sm-9 offset-sm-1",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"},[t._v(t._s(t.$t("form.category")))]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("multiselect",{attrs:{options:t.options,label:"name",placeholder:t.$t("form.select_category"),"track-by":"name"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"},[t._v(t._s(t.$t("form.collection")))]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("multiselect",{attrs:{collections:t.collections,label:"name",placeholder:t.$t("form.select_collection"),"track-by":"name"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v(t._s(t.$t("form.title")))]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",name:"title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"subtitle"}},[t._v(t._s(t.$t("form.subtitle")))]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.article.subtitle,expression:"article.subtitle"}],staticClass:"form-control",attrs:{type:"text",id:"subtitle",name:"subtitle"},domProps:{value:t.article.subtitle},on:{input:function(e){e.target.composing||t.$set(t.article,"subtitle",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"page_image"}},[t._v(t._s(t.$t("form.page_image")))]),t._v(" "),a("div",{staticClass:"col-sm-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.article.page_image,expression:"article.page_image"}],staticClass:"form-control",attrs:{type:"text",id:"page_image",name:"page_image",placeholder:"ex: /uploads/default_avatar.png"},domProps:{value:t.article.page_image},on:{input:function(e){e.target.composing||t.$set(t.article,"page_image",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-sm-5"},[null!=t.article.page_image&&""!=t.article.page_image?a("img",{attrs:{src:t.article.page_image,alt:"Pig Jian",width:"35",height:"35"}}):t._e(),t._v(" "),a("div",{staticClass:"cover-upload pull-right"},[a("a",{staticClass:"btn btn-success file",attrs:{href:"javascript:;"}},[a("span",[t._v(t._s(t.$t("form.upload_file")))]),t._v(" "),a("input",{attrs:{type:"file"},on:{change:t.coverUploader}})])])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v(t._s(t.$t("form.content")))]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"},[t._v(t._s(t.$t("form.tag")))]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("multiselect",{attrs:{options:t.allTag,multiple:!0,searchable:!0,"hide-selected":!0,"close-on-select":!1,"clear-on-select":!1,limit:5,placeholder:t.$t("form.select_tag"),label:"tag","track-by":"tag"},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"meta_description"}},[t._v(t._s(t.$t("form.meta_description")))]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.meta_description,expression:"article.meta_description"}],staticClass:"form-control",attrs:{id:"meta_description",name:"meta_description"},domProps:{value:t.article.meta_description},on:{input:function(e){e.target.composing||t.$set(t.article,"meta_description",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label"},[t._v(t._s(t.$t("form.datetime")))]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("date-picker",{attrs:{date:t.startTime,option:t.option}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-sm-2 col-form-label"},[t._v("\n          "+t._s(t.$t("form.is_draft"))+"\n        ")]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"togglebutton",staticStyle:{"margin-top":"6px"}},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.article.is_draft,expression:"article.is_draft"}],attrs:{type:"checkbox",name:"is_draft"},domProps:{checked:Array.isArray(t.article.is_draft)?t._i(t.article.is_draft,null)>-1:t.article.is_draft},on:{change:function(e){var a=t.article.is_draft,i=e.target,s=!!i.checked;if(Array.isArray(a)){var l=t._i(a,null);i.checked?l<0&&t.$set(t.article,"is_draft",a.concat([null])):l>-1&&t.$set(t.article,"is_draft",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.article,"is_draft",s)}}}),t._v(" "),a("span",{staticClass:"toggle"})])])]),t._v(" "),a("div",{staticClass:"col-sm-2 col-form-label"},[t._v("\n          "+t._s(t.$t("form.is_original"))+"\n        ")]),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"togglebutton",staticStyle:{"margin-top":"6px"}},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.article.is_original,expression:"article.is_original"}],attrs:{type:"checkbox",name:"is_original"},domProps:{checked:Array.isArray(t.article.is_original)?t._i(t.article.is_original,null)>-1:t.article.is_original},on:{change:function(e){var a=t.article.is_original,i=e.target,s=!!i.checked;if(Array.isArray(a)){var l=t._i(a,null);i.checked?l<0&&t.$set(t.article,"is_original",a.concat([null])):l>-1&&t.$set(t.article,"is_original",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.article,"is_original",s)}}}),t._v(" "),a("span",{staticClass:"toggle"})])])])])]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group row"},[a("div",{staticClass:"offset-sm-2 col-sm-10"},[a("button",{staticClass:"btn btn-info",attrs:{type:"submit"}},[t._v(t._s(t.article.id?t.$t("form.edit"):t.$t("form.create")))])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-10"},[e("textarea",{attrs:{id:"editor"}})])}],!1,null,"7d139124",null));e.a=h.exports},fi6a:function(t,e,a){"use strict";a.r(e);var i={components:{ArticleForm:a("aXGX").a}},s=a("nKT8"),l=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("vue-form",{attrs:{title:this.$t("form.create_article")}},[e("template",{slot:"buttons"},[e("router-link",{staticClass:"btn btn-sm btn-secondary",attrs:{to:{name:"dashboard.article"},exact:""}},[this._v(this._s(this.$t("form.back")))])],1),this._v(" "),e("template",{slot:"content"},[e("article-form")],1)],2)}),[],!1,null,null,null);e.default=l.exports},uLsi:function(t,e,a){var i=a("KCiY");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("7B2p")(i,s);i.locals&&(t.exports=i.locals)}}]);