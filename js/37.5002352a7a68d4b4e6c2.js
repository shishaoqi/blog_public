(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{r1yN:function(t,s,e){"use strict";e.r(s);var r={components:{UserForm:e("W4yC").a},data:function(){return{user:void 0}},created:function(){this.loadUser()},methods:{loadUser:function(){var t=this;this.$http.get("user/"+this.$route.params.id+"/edit?include=roles").then((function(s){t.user=s.data.data}))}}},n=e("KHd+"),a=Object(n.a)(r,(function(){var t=this.$createElement,s=this._self._c||t;return s("vue-form",{attrs:{title:this.$t("form.edit_user")}},[s("template",{slot:"buttons"},[s("router-link",{staticClass:"btn btn-sm btn-secondary",attrs:{to:{name:"dashboard.user"},exact:""}},[this._v(this._s(this.$t("form.back")))])],1),this._v(" "),s("template",{slot:"content"},[s("user-form",{attrs:{user:this.user}})],1)],2)}),[],!1,null,null,null);s.default=a.exports}}]);