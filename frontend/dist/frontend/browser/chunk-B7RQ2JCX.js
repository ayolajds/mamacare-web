import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-DEJWN6HZ.js";

// src/app/admin/users/user-edit/user-edit.ts
var UserEdit = class _UserEdit {
  static \u0275fac = function UserEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserEdit)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserEdit, selectors: [["app-user-edit"]], decls: 2, vars: 0, template: function UserEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "user-edit works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserEdit, [{
    type: Component,
    args: [{ selector: "app-user-edit", imports: [], template: "<p>user-edit works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserEdit, { className: "UserEdit", filePath: "src/app/admin/users/user-edit/user-edit.ts", lineNumber: 9 });
})();
export {
  UserEdit
};
//# sourceMappingURL=chunk-B7RQ2JCX.js.map
