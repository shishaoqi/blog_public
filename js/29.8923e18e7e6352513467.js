(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/discussion/Discussion.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/discussion/Discussion.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fields: [{
        name: 'id',
        trans: 'table.id',
        titleClass: 'width-5-percent text-center',
        dataClass: 'text-center'
      }, {
        name: 'user',
        trans: 'table.username',
        titleClass: 'text-center',
        dataClass: 'text-center',
        callback: 'username'
      }, {
        name: 'title',
        trans: 'table.title'
      }, {
        name: '__component',
        trans: 'table.status',
        titleClass: 'text-center',
        dataClass: 'text-center'
      }, {
        name: 'created_at',
        trans: 'table.created_at'
      }, {
        name: '__actions',
        trans: 'table.action',
        titleClass: 'text-center',
        dataClass: 'text-center'
      }],
      itemActions: [{
        name: 'view-item',
        icon: 'fas fa-eye',
        "class": 'btn btn-success'
      }, {
        name: 'edit-item',
        permission: 'UPDATE_DISCUSSION',
        icon: 'fas fa-pencil-alt',
        "class": 'btn btn-info'
      }, {
        name: 'delete-item',
        permission: 'DESTROY_DISCUSSION',
        icon: 'fas fa-trash-alt',
        "class": 'btn btn-danger'
      }]
    };
  },
  methods: {
    username: function username(value) {
      if (value) {
        return value.data.name;
      }
    },
    tableActions: function tableActions(action, data) {
      var _this = this;
      if (action == 'edit-item') {
        this.$router.push({
          name: 'dashboard.discussion.edit',
          params: {
            id: data.id
          }
        });
      } else if (action == 'delete-item') {
        this.$http["delete"]('discussion/' + data.id).then(function (response) {
          toastr.success('You delete the discussion success!');
          _this.$emit('reload');
        })["catch"](function (_ref) {
          var response = _ref.response;
          toastr.error(response.status + ' : Resource ' + response.statusText);
        });
      } else if (action == 'view-item') {
        window.open('/discussion/' + data.id, '_blank');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/discussion/Discussion.vue?vue&type=template&id=490ccc84&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/discussion/Discussion.vue?vue&type=template&id=490ccc84& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("vue-table", {
    attrs: {
      title: _vm.$t("page.discussions"),
      fields: _vm.fields,
      "api-url": "discussion",
      "item-actions": _vm.itemActions,
      "show-paginate": ""
    },
    on: {
      "table-action": _vm.tableActions
    }
  }, [_c("template", {
    slot: "buttons"
  }, [_vm.checkPermission("CREATE_DISCUSSION") ? _c("router-link", {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      to: {
        name: "dashboard.discussion.create"
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("page.create")))]) : _vm._e()], 1)], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/dashboard/modules/discussion/Discussion.vue":
/*!******************************************************************!*\
  !*** ./resources/js/dashboard/modules/discussion/Discussion.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Discussion_vue_vue_type_template_id_490ccc84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Discussion.vue?vue&type=template&id=490ccc84& */ "./resources/js/dashboard/modules/discussion/Discussion.vue?vue&type=template&id=490ccc84&");
/* harmony import */ var _Discussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Discussion.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/modules/discussion/Discussion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Discussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Discussion_vue_vue_type_template_id_490ccc84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Discussion_vue_vue_type_template_id_490ccc84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/modules/discussion/Discussion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/modules/discussion/Discussion.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/discussion/Discussion.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Discussion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/discussion/Discussion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/modules/discussion/Discussion.vue?vue&type=template&id=490ccc84&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/discussion/Discussion.vue?vue&type=template&id=490ccc84& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_template_id_490ccc84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Discussion.vue?vue&type=template&id=490ccc84& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/discussion/Discussion.vue?vue&type=template&id=490ccc84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_template_id_490ccc84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Discussion_vue_vue_type_template_id_490ccc84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);