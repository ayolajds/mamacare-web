import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-DEJWN6HZ.js";

// src/app/panels/paciente-panel/paciente-panel.ts
var PacientePanel = class _PacientePanel {
  static \u0275fac = function PacientePanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PacientePanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PacientePanel, selectors: [["app-paciente-panel"]], decls: 2, vars: 0, template: function PacientePanel_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "paciente-panel works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PacientePanel, [{
    type: Component,
    args: [{ selector: "app-paciente-panel", imports: [], template: "<p>paciente-panel works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PacientePanel, { className: "PacientePanel", filePath: "src/app/panels/paciente-panel/paciente-panel.ts", lineNumber: 9 });
})();
export {
  PacientePanel
};
//# sourceMappingURL=chunk-7LL5ENKY.js.map
