import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-DEJWN6HZ.js";

// src/app/panels/voluntario-panel/voluntario-panel.ts
var VoluntarioPanel = class _VoluntarioPanel {
  static \u0275fac = function VoluntarioPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VoluntarioPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VoluntarioPanel, selectors: [["app-voluntario-panel"]], decls: 2, vars: 0, template: function VoluntarioPanel_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "voluntario-panel works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VoluntarioPanel, [{
    type: Component,
    args: [{ selector: "app-voluntario-panel", imports: [], template: "<p>voluntario-panel works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VoluntarioPanel, { className: "VoluntarioPanel", filePath: "src/app/panels/voluntario-panel/voluntario-panel.ts", lineNumber: 9 });
})();
export {
  VoluntarioPanel
};
//# sourceMappingURL=chunk-HA7HDADB.js.map
