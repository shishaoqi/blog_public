(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"8J3c":function(t,e,s){"use strict";s.r(e);var a={data:function(){return{fields:[{name:"id",trans:"table.id",titleClass:"width-5-percent text-center",dataClass:"text-center"},{name:"title",trans:"table.title",sortField:"title"},{name:"subtitle",trans:"table.subtitle",sortField:"subtitle"},{name:"comment_count",trans:"table.comment_count"},{name:"published_at",trans:"table.published_at",titleClass:"width-10-percent",sortField:"created_at"},{name:"__actions",trans:"table.action",titleClass:"text-center",dataClass:"text-center"}],itemActions:[{name:"view-item",icon:"fas fa-eye",class:"btn btn-success"},{name:"edit-item",permission:"UPDATE_ARTICLE",icon:"fas fa-pencil-alt",class:"btn btn-info"},{name:"delete-item",permission:"DESTROY_ARTICLE",icon:"fas fa-trash-alt",class:"btn btn-danger"}]}},methods:{tableActions:function(t,e){var s=this;"edit-item"==t?this.$router.push({name:"dashboard.article.edit",params:{id:e.id}}):"delete-item"==t?this.$http.delete("article/"+e.id).then((function(t){toastr.success("You delete the article success!"),s.$emit("reload")})).catch((function(t){var e=t.response;"string"!=typeof e.data.error&&e.data.error?toastr.error(e.data.error.message):toastr.error(e.status+" : Resource "+e.statusText)})):"view-item"==t&&window.open("/"+e.slug,"_blank")}}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("vue-table",{attrs:{title:this.$t("page.articles"),fields:this.fields,"api-url":"article","item-actions":this.itemActions,"show-paginate":""},on:{"table-action":this.tableActions}},[e("template",{slot:"buttons"},[this.checkPermission("CREATE_ARTICLE")?e("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"dashboard.article.create"}}},[this._v("+")]):this._e()],1)],2)],1)}),[],!1,null,null,null);e.default=n.exports}}]);