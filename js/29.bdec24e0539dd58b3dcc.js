(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{e0JH:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{categories:[],fields:[{name:"id",trans:"table.id",titleClass:"width-5-percent text-center",dataClass:"text-center"},{name:"name",trans:"table.name"},{name:"path",trans:"table.path"},{name:"created_at",trans:"table.created_at"},{name:"__actions",trans:"table.action",titleClass:"text-center",dataClass:"text-center"}]}},methods:{tableActions:function(t,e){var a=this;"edit-item"==t?this.$router.push({name:"dashboard.category.edit",params:{id:e.id}}):"delete-item"==t&&this.$http.delete("category/"+e.id).then((function(t){toastr.success("You delete the category success!"),a.$emit("reload")})).catch((function(t){var e=t.response;toastr.error(e.status+" : Resource "+e.statusText)}))}}},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("vue-table",{attrs:{title:this.$t("page.categories"),fields:this.fields,"api-url":"category","show-paginate":""},on:{"table-action":this.tableActions}},[t("template",{slot:"buttons"},[this.checkPermission("CREATE_CATEGORY")?t("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"dashboard.category.create"}}},[this._v("+")]):this._e()],1)],2)],1)}),[],!1,null,null,null);e.default=i.exports}}]);