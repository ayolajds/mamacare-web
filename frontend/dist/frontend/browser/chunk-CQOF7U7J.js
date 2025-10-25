import {
  RouterLink,
  RouterModule
} from "./chunk-6P7TFCYF.js";
import {
  CommonModule
} from "./chunk-Q4BX36PF.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-DEJWN6HZ.js";

// src/app/panels/admin-panel/admin-panel.ts
var AdminPanel = class _AdminPanel {
  static \u0275fac = function AdminPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminPanel, selectors: [["app-admin-panel"]], decls: 64, vars: 0, consts: [[1, "admin-panel"], [1, "panel-header"], [1, "panel-title"], [1, "panel-subtitle"], [1, "panel-grid"], ["routerLink", "/admin/dashboard", 1, "panel-card"], [1, "card-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M7 15h10M7 19h10"], [1, "card-content"], [1, "card-title"], [1, "card-description"], [1, "card-arrow"], ["routerLink", "/admin/users/user-list", 1, "panel-card"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], ["routerLink", "/admin/appointments", 1, "panel-card"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "panel-card", "coming-soon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "coming-soon-badge"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"]], template: function AdminPanel_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Panel de Administraci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Gestiona todas las funcionalidades del sistema Ma\xB4Care");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "a", 5)(8, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "path", 8)(11, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 10)(13, "h3", 11);
      \u0275\u0275text(14, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 12);
      \u0275\u0275text(16, "Estad\xEDsticas generales y resumen del sistema");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13);
      \u0275\u0275text(18, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "a", 14)(20, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 7);
      \u0275\u0275element(22, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "div", 10)(24, "h3", 11);
      \u0275\u0275text(25, "Gesti\xF3n de Usuarios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 12);
      \u0275\u0275text(27, "Administrar usuarios, roles y estados de cuenta");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 13);
      \u0275\u0275text(29, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "a", 16)(31, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 7);
      \u0275\u0275element(33, "path", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "div", 10)(35, "h3", 11);
      \u0275\u0275text(36, "Gesti\xF3n de Sesiones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 12);
      \u0275\u0275text(38, "Administrar citas y calendario de profesionales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 13);
      \u0275\u0275text(40, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 18)(42, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 7);
      \u0275\u0275element(44, "path", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "div", 10)(46, "h3", 11);
      \u0275\u0275text(47, "Reportes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 12);
      \u0275\u0275text(49, "Generar reportes detallados del sistema");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 20);
      \u0275\u0275text(51, "Pr\xF3ximamente");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 18)(53, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(54, "svg", 7);
      \u0275\u0275element(55, "path", 21)(56, "path", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(57, "div", 10)(58, "h3", 11);
      \u0275\u0275text(59, "Configuraci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p", 12);
      \u0275\u0275text(61, "Configuraci\xF3n general del sistema");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 20);
      \u0275\u0275text(63, "Pr\xF3ximamente");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ["\n\n.admin-panel[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n  min-height: 80vh;\n}\n.panel-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.panel-header[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 1rem 0;\n  line-height: 1.2;\n}\n.panel-header[_ngcontent-%COMP%]   .panel-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.5;\n}\n.panel-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  margin-top: 2rem;\n}\n.panel-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 2rem;\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  position: relative;\n  min-height: 140px;\n}\n.panel-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  border-color: #3498db;\n}\n.panel-card[_ngcontent-%COMP%]:hover   .card-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n  color: #3498db;\n}\n.panel-card.coming-soon[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.panel-card.coming-soon[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n  border-color: #e9ecef;\n}\n.card-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #2980b9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: white;\n}\n.coming-soon[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #95a5a6,\n      #7f8c8d);\n}\n.card-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.3;\n}\n.card-content[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.5;\n  font-size: 0.95rem;\n}\n.coming-soon-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f8f9fa;\n  color: #6c757d;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin-top: 0.5rem;\n  border: 1px solid #dee2e6;\n}\n.card-arrow[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 1.2rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  align-self: center;\n}\n@media (max-width: 768px) {\n  .admin-panel[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .panel-header[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .panel-header[_ngcontent-%COMP%]   .panel-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .panel-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .panel-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    min-height: auto;\n  }\n  .card-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .card-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n}\n/*# sourceMappingURL=admin-panel.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminPanel, [{
    type: Component,
    args: [{ selector: "app-admin-panel", standalone: true, imports: [CommonModule, RouterModule], template: '<div class="admin-panel">\r\n  <div class="panel-header">\r\n    <h1 class="panel-title">Panel de Administraci\xF3n</h1>\r\n    <p class="panel-subtitle">Gestiona todas las funcionalidades del sistema Ma\xB4Care</p>\r\n  </div>\r\n\r\n  <div class="panel-grid">\r\n    <!-- Dashboard -->\r\n    <a routerLink="/admin/dashboard" class="panel-card">\r\n      <div class="card-icon">\r\n        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M7 15h10M7 19h10"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="card-content">\r\n        <h3 class="card-title">Dashboard</h3>\r\n        <p class="card-description">Estad\xEDsticas generales y resumen del sistema</p>\r\n      </div>\r\n      <div class="card-arrow">\u2192</div>\r\n    </a>\r\n\r\n    <!-- Gesti\xF3n de Usuarios -->\r\n    <a routerLink="/admin/users/user-list" class="panel-card">\r\n      <div class="card-icon">\r\n        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="card-content">\r\n        <h3 class="card-title">Gesti\xF3n de Usuarios</h3>\r\n        <p class="card-description">Administrar usuarios, roles y estados de cuenta</p>\r\n      </div>\r\n      <div class="card-arrow">\u2192</div>\r\n    </a>\r\n\r\n    <!-- Gesti\xF3n de Sesiones -->\r\n    <a routerLink="/admin/appointments" class="panel-card">\r\n      <div class="card-icon">\r\n        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="card-content">\r\n        <h3 class="card-title">Gesti\xF3n de Sesiones</h3>\r\n        <p class="card-description">Administrar citas y calendario de profesionales</p>\r\n      </div>\r\n      <div class="card-arrow">\u2192</div>\r\n    </a>\r\n\r\n    <!-- Reportes -->\r\n    <div class="panel-card coming-soon">\r\n      <div class="card-icon">\r\n        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="card-content">\r\n        <h3 class="card-title">Reportes</h3>\r\n        <p class="card-description">Generar reportes detallados del sistema</p>\r\n        <span class="coming-soon-badge">Pr\xF3ximamente</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Configuraci\xF3n -->\r\n    <div class="panel-card coming-soon">\r\n      <div class="card-icon">\r\n        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="card-content">\r\n        <h3 class="card-title">Configuraci\xF3n</h3>\r\n        <p class="card-description">Configuraci\xF3n general del sistema</p>\r\n        <span class="coming-soon-badge">Pr\xF3ximamente</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>', styles: ["/* src/app/panels/admin-panel/admin-panel.scss */\n.admin-panel {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n  min-height: 80vh;\n}\n.panel-header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.panel-header .panel-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 1rem 0;\n  line-height: 1.2;\n}\n.panel-header .panel-subtitle {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.5;\n}\n.panel-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  margin-top: 2rem;\n}\n.panel-card {\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 2rem;\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  position: relative;\n  min-height: 140px;\n}\n.panel-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  border-color: #3498db;\n}\n.panel-card:hover .card-arrow {\n  transform: translateX(4px);\n  color: #3498db;\n}\n.panel-card.coming-soon {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.panel-card.coming-soon:hover {\n  transform: none;\n  box-shadow: none;\n  border-color: #e9ecef;\n}\n.card-icon {\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #2980b9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-icon .icon {\n  width: 24px;\n  height: 24px;\n  color: white;\n}\n.coming-soon .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #95a5a6,\n      #7f8c8d);\n}\n.card-content {\n  flex: 1;\n}\n.card-content .card-title {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.3;\n}\n.card-content .card-description {\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.5;\n  font-size: 0.95rem;\n}\n.coming-soon-badge {\n  display: inline-block;\n  background: #f8f9fa;\n  color: #6c757d;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin-top: 0.5rem;\n  border: 1px solid #dee2e6;\n}\n.card-arrow {\n  color: #6c757d;\n  font-size: 1.2rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  align-self: center;\n}\n@media (max-width: 768px) {\n  .admin-panel {\n    padding: 1rem;\n  }\n  .panel-header .panel-title {\n    font-size: 2rem;\n  }\n  .panel-header .panel-subtitle {\n    font-size: 1rem;\n  }\n  .panel-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .panel-card {\n    padding: 1.5rem;\n    min-height: auto;\n  }\n  .card-icon {\n    width: 50px;\n    height: 50px;\n  }\n  .card-icon .icon {\n    width: 20px;\n    height: 20px;\n  }\n}\n/*# sourceMappingURL=admin-panel.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminPanel, { className: "AdminPanel", filePath: "src/app/panels/admin-panel/admin-panel.ts", lineNumber: 12 });
})();
export {
  AdminPanel
};
//# sourceMappingURL=chunk-CQOF7U7J.js.map
