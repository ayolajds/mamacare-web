import {
  AuthService
} from "./chunk-A2PELOIP.js";
import "./chunk-BPEFTJA2.js";
import {
  Router
} from "./chunk-6P7TFCYF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-VTU4YTDN.js";
import {
  CommonModule,
  NgIf
} from "./chunk-Q4BX36PF.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DEJWN6HZ.js";

// src/app/pages/auth/login/login.ts
function Login__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 21);
    \u0275\u0275elementEnd();
  }
}
function Login__svg_svg_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 22);
    \u0275\u0275element(1, "path", 23);
    \u0275\u0275elementEnd();
  }
}
function Login_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMsg, " ");
  }
}
function Login_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
var Login = class _Login {
  router = inject(Router);
  auth = inject(AuthService);
  email = "";
  password = "";
  showPassword = false;
  loading = false;
  errorMsg = "";
  onSubmit(loginForm) {
    if (loginForm.invalid || this.loading)
      return;
    const payload = {
      email: this.email.trim(),
      password: this.password
    };
    this.loading = true;
    this.errorMsg = "";
    this.auth.login(payload).subscribe({
      next: (res) => {
        this.loading = false;
        this.router.navigate(["/profile"]);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err?.error?.message || "Credenciales incorrectas";
      }
    });
  }
  navigateToRegister() {
    this.router.navigate(["/register"]);
  }
  navigateToResetPassword() {
    this.router.navigate(["/forgot-password"]);
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 24, vars: 9, consts: [["loginForm", "ngForm"], [1, "login-wrapper"], [1, "login-container", "card"], ["src", "/imagenes/login2.jpg", "alt", "Imagen de inicio de sesi\xF3n", 1, "login-image"], [1, "card-title"], [3, "ngSubmit"], [1, "form-group"], ["type", "email", "name", "email", "placeholder", "Correo electr\xF3nico", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "position-relative"], ["name", "password", "placeholder", "Contrase\xF1a", "required", "", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-password", 3, "click"], ["class", "icon-eye", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "icon-eye-slash", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "error", "style", "color:#d21; margin:.5rem 0;", 4, "ngIf"], [1, "button-group"], ["type", "submit", 1, "btn-login", 3, "disabled"], ["class", "loading-spinner", 4, "ngIf"], ["type", "button", 1, "btn-register", 3, "click"], [1, "forgot-password"], [3, "click"], ["viewBox", "0 0 24 24", 1, "icon-eye"], ["d", "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"], ["viewBox", "0 0 24 24", 1, "icon-eye-slash"], ["d", "M11.83 9L15 12.16C15 12.11 15 12.05 15 12c0-1.66-1.34-3-3-3c-.05 0-.11 0-.16 0l1.51 1.51c.06-.01.11-.01.16-.01c.83 0 1.5.67 1.5 1.5c0 .05 0 .11-.01.16l1.51 1.51c.05-.15.08-.31.08-.47c0-2.76-2.24-5-5-5c-.16 0-.32.03-.47.08L9.83 7h2.67zM2.81 2.81L1.39 4.22l3.24 3.24C3.83 8.69 3 10.75 3 12c0 2.21 1.79 4 4 4c1.25 0 2.31-.83 2.69-2.03l2.12 2.12C10.84 16.8 9.45 18 7 18c-3.31 0-6-2.69-6-6c0-1.45.55-2.76 1.44-3.76l-1.45-1.45l1.41-1.41l17 17l-1.41 1.41l-4.28-4.28L13 15.66c-.37.04-.75.07-1.14.07c-3.31 0-6-2.69-6-6c0-.39.03-.77.07-1.14L2.81 2.81zM7 10c0-.55.45-1 1-1c.17 0 .33.05.46.12l-1.34 1.34c-.07-.13-.12-.29-.12-.46zm9.72 5.57l-1.67-1.67c.13.04.27.07.42.07c.83 0 1.5-.67 1.5-1.5c0-.15-.03-.29-.07-.42l1.67 1.67c.05.15.08.31.08.47c0 2.76-2.24 5-5 5c-.16 0-.32-.03-.47-.08z"], [1, "error", 2, "color", "#d21", "margin", ".5rem 0"], [1, "loading-spinner"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275element(2, "img", 3);
      \u0275\u0275elementStart(3, "h2", 4);
      \u0275\u0275text(4, "Iniciar Sesi\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 5, 0);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_5_listener() {
        \u0275\u0275restoreView(_r1);
        const loginForm_r2 = \u0275\u0275reference(6);
        return \u0275\u0275resetView(ctx.onSubmit(loginForm_r2));
      });
      \u0275\u0275elementStart(7, "div", 6)(8, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function Login_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 8)(10, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function Login_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 10);
      \u0275\u0275listener("click", function Login_Template_button_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showPassword = !ctx.showPassword);
      });
      \u0275\u0275template(12, Login__svg_svg_12_Template, 2, 0, "svg", 11)(13, Login__svg_svg_13_Template, 2, 0, "svg", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, Login_p_14_Template, 2, 1, "p", 13);
      \u0275\u0275elementStart(15, "div", 14)(16, "button", 15);
      \u0275\u0275template(17, Login_span_17_Template, 1, 0, "span", 16);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 17);
      \u0275\u0275listener("click", function Login_Template_button_click_19_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.navigateToRegister());
      });
      \u0275\u0275text(20, " Crear Cuenta ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "p", 18)(22, "a", 19);
      \u0275\u0275listener("click", function Login_Template_a_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.navigateToResetPassword());
      });
      \u0275\u0275text(23, "\xBFHas olvidado tu contrase\xF1a?");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const loginForm_r2 = \u0275\u0275reference(6);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(2);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading || loginForm_r2.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Ingresando..." : "Ingresar", " ");
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, CommonModule, NgIf], styles: ['@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n\n\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f6f0 0%,\n      #e8e6fa 50%,\n      #f0e8f8 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  line-height: 1.4;\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease;\n}\n.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: 30px;\n  border: 2px solid #e8e6fa;\n  border-radius: 12px;\n  box-shadow: 0 6px 20px rgba(129, 199, 132, 0.12);\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f8f6f0 100%);\n  margin: 20px 0;\n  animation: _ngcontent-%COMP%_slideUp 0.6s ease;\n}\n.login-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  margin-bottom: 25px;\n  animation: _ngcontent-%COMP%_zoomIn 0.5s ease;\n  border: 2px solid #e8e6fa;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-size: 1.6rem;\n  color: #f48fb1;\n  text-align: center;\n  margin-bottom: 25px;\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease;\n  text-shadow: 0 2px 4px rgba(244, 143, 177, 0.15);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  position: relative;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 45px 11px 14px;\n  border-radius: 8px;\n  border: 2px solid #e8e6fa;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n  background-color: #f8f6f0;\n  color: #5d4037;\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #8d6e63;\n  opacity: 0.7;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #f48fb1;\n  box-shadow: 0 0 0 3px rgba(244, 143, 177, 0.15);\n  outline: none;\n  background-color: #ffffff;\n  transform: translateY(-1px);\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: #f48fb1;\n  padding: 6px;\n  transition: all 0.3s ease;\n  background: #e8e6fa;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  z-index: 2;\n}\n.toggle-password[_ngcontent-%COMP%]   .icon-eye[_ngcontent-%COMP%], \n.toggle-password[_ngcontent-%COMP%]   .icon-eye-slash[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  fill: currentColor;\n  transition: all 0.3s ease;\n}\n.toggle-password[_ngcontent-%COMP%]:hover {\n  color: #f8b4d9;\n  background: #d8d6f0;\n  transform: translateY(-50%) scale(1.1);\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 22px;\n}\n.btn-login[_ngcontent-%COMP%], \n.btn-register[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  font-size: 0.9rem;\n  border: none;\n  border-radius: 8px;\n  color: #ffffff;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.btn-login[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f48fb1,\n      #f8b4d9);\n  box-shadow: 0 4px 12px rgba(244, 143, 177, 0.25);\n}\n.btn-login[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #f8b4d9,\n      #f48fb1);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(244, 143, 177, 0.35);\n}\n.btn-register[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #81c784,\n      #a5d6a7);\n  box-shadow: 0 4px 12px rgba(129, 199, 132, 0.25);\n}\n.btn-register[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #a5d6a7,\n      #81c784);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(129, 199, 132, 0.35);\n}\n.forgot-password[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #81c784;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #a5d6a7;\n  background-color: #e8e6fa;\n  text-decoration: none;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_zoomIn {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 480px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .login-container[_ngcontent-%COMP%] {\n    padding: 25px;\n    max-width: 100%;\n    margin: 10px;\n  }\n  .login-image[_ngcontent-%COMP%] {\n    max-height: 170px;\n    margin-bottom: 20px;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    margin-bottom: 20px;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    padding: 10px 40px 10px 12px;\n    font-size: 0.85rem;\n  }\n  .button-group[_ngcontent-%COMP%] {\n    gap: 10px;\n    margin-top: 20px;\n  }\n  .btn-login[_ngcontent-%COMP%], \n   .btn-register[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n    font-size: 0.85rem;\n  }\n  .toggle-password[_ngcontent-%COMP%] {\n    right: 8px;\n    width: 28px;\n    height: 28px;\n  }\n  .toggle-password[_ngcontent-%COMP%]   .icon-eye[_ngcontent-%COMP%], \n   .toggle-password[_ngcontent-%COMP%]   .icon-eye-slash[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n}\n/*# sourceMappingURL=login.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [FormsModule, CommonModule], template: `<div class="login-wrapper">\r
  <div class="login-container card">\r
    <img src="/imagenes/login2.jpg" alt="Imagen de inicio de sesi\xF3n" class="login-image">\r
    <h2 class="card-title">Iniciar Sesi\xF3n</h2>\r
\r
    <form (ngSubmit)="onSubmit(loginForm)" #loginForm="ngForm">\r
      <div class="form-group">\r
        <input\r
          type="email"\r
          [(ngModel)]="email"\r
          name="email"\r
          class="form-control"\r
          placeholder="Correo electr\xF3nico"\r
          required />\r
      </div>\r
\r
      <div class="form-group position-relative">\r
        <input\r
          [type]="showPassword ? 'text' : 'password'"\r
          [(ngModel)]="password"\r
          name="password"\r
          class="form-control"\r
          placeholder="Contrase\xF1a"\r
          required />\r
        <button type="button" class="toggle-password" (click)="showPassword = !showPassword">\r
          <svg *ngIf="!showPassword" class="icon-eye" viewBox="0 0 24 24">\r
            <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"/>\r
          </svg>\r
          <svg *ngIf="showPassword" class="icon-eye-slash" viewBox="0 0 24 24">\r
            <path d="M11.83 9L15 12.16C15 12.11 15 12.05 15 12c0-1.66-1.34-3-3-3c-.05 0-.11 0-.16 0l1.51 1.51c.06-.01.11-.01.16-.01c.83 0 1.5.67 1.5 1.5c0 .05 0 .11-.01.16l1.51 1.51c.05-.15.08-.31.08-.47c0-2.76-2.24-5-5-5c-.16 0-.32.03-.47.08L9.83 7h2.67zM2.81 2.81L1.39 4.22l3.24 3.24C3.83 8.69 3 10.75 3 12c0 2.21 1.79 4 4 4c1.25 0 2.31-.83 2.69-2.03l2.12 2.12C10.84 16.8 9.45 18 7 18c-3.31 0-6-2.69-6-6c0-1.45.55-2.76 1.44-3.76l-1.45-1.45l1.41-1.41l17 17l-1.41 1.41l-4.28-4.28L13 15.66c-.37.04-.75.07-1.14.07c-3.31 0-6-2.69-6-6c0-.39.03-.77.07-1.14L2.81 2.81zM7 10c0-.55.45-1 1-1c.17 0 .33.05.46.12l-1.34 1.34c-.07-.13-.12-.29-.12-.46zm9.72 5.57l-1.67-1.67c.13.04.27.07.42.07c.83 0 1.5-.67 1.5-1.5c0-.15-.03-.29-.07-.42l1.67 1.67c.05.15.08.31.08.47c0 2.76-2.24 5-5 5c-.16 0-.32-.03-.47-.08z"/>\r
          </svg>\r
        </button>\r
      </div>\r
\r
      <!-- Mensaje de error -->\r
      <p *ngIf="errorMsg" class="error" style="color:#d21; margin:.5rem 0;">\r
        {{ errorMsg }}\r
      </p>\r
\r
      <div class="button-group">\r
        <button type="submit" class="btn-login" [disabled]="loading || loginForm.invalid">\r
          <span *ngIf="loading" class="loading-spinner"></span>\r
          {{ loading ? 'Ingresando...' : 'Ingresar' }}\r
        </button>\r
\r
        <button type="button" class="btn-register" (click)="navigateToRegister()">\r
          Crear Cuenta\r
        </button>\r
      </div>\r
    </form>\r
\r
    <p class="forgot-password">\r
      <a (click)="navigateToResetPassword()">\xBFHas olvidado tu contrase\xF1a?</a>\r
    </p>\r
  </div>\r
</div>\r
`, styles: ['@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n\n/* src/app/pages/auth/login/login.scss */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: "Poppins", sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f6f0 0%,\n      #e8e6fa 50%,\n      #f0e8f8 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  line-height: 1.4;\n}\n.login-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 20px;\n  animation: fadeIn 0.8s ease;\n}\n.login-container {\n  width: 100%;\n  max-width: 420px;\n  padding: 30px;\n  border: 2px solid #e8e6fa;\n  border-radius: 12px;\n  box-shadow: 0 6px 20px rgba(129, 199, 132, 0.12);\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f8f6f0 100%);\n  margin: 20px 0;\n  animation: slideUp 0.6s ease;\n}\n.login-image {\n  width: 100%;\n  height: auto;\n  max-height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  margin-bottom: 25px;\n  animation: zoomIn 0.5s ease;\n  border: 2px solid #e8e6fa;\n}\n.card-title {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-size: 1.6rem;\n  color: #f48fb1;\n  text-align: center;\n  margin-bottom: 25px;\n  animation: fadeIn 0.4s ease;\n  text-shadow: 0 2px 4px rgba(244, 143, 177, 0.15);\n}\n.form-group {\n  margin-bottom: 18px;\n  position: relative;\n}\n.form-control {\n  width: 100%;\n  padding: 11px 45px 11px 14px;\n  border-radius: 8px;\n  border: 2px solid #e8e6fa;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n  background-color: #f8f6f0;\n  color: #5d4037;\n}\n.form-control::placeholder {\n  color: #8d6e63;\n  opacity: 0.7;\n}\n.form-control:focus {\n  border-color: #f48fb1;\n  box-shadow: 0 0 0 3px rgba(244, 143, 177, 0.15);\n  outline: none;\n  background-color: #ffffff;\n  transform: translateY(-1px);\n}\n.toggle-password {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: #f48fb1;\n  padding: 6px;\n  transition: all 0.3s ease;\n  background: #e8e6fa;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  z-index: 2;\n}\n.toggle-password .icon-eye,\n.toggle-password .icon-eye-slash {\n  width: 18px;\n  height: 18px;\n  fill: currentColor;\n  transition: all 0.3s ease;\n}\n.toggle-password:hover {\n  color: #f8b4d9;\n  background: #d8d6f0;\n  transform: translateY(-50%) scale(1.1);\n}\n.button-group {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 22px;\n}\n.btn-login,\n.btn-register {\n  padding: 11px 16px;\n  font-family: "Poppins", sans-serif;\n  font-weight: 500;\n  font-size: 0.9rem;\n  border: none;\n  border-radius: 8px;\n  color: #ffffff;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.btn-login {\n  background:\n    linear-gradient(\n      135deg,\n      #f48fb1,\n      #f8b4d9);\n  box-shadow: 0 4px 12px rgba(244, 143, 177, 0.25);\n}\n.btn-login:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #f8b4d9,\n      #f48fb1);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(244, 143, 177, 0.35);\n}\n.btn-register {\n  background:\n    linear-gradient(\n      135deg,\n      #81c784,\n      #a5d6a7);\n  box-shadow: 0 4px 12px rgba(129, 199, 132, 0.25);\n}\n.btn-register:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #a5d6a7,\n      #81c784);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(129, 199, 132, 0.35);\n}\n.forgot-password {\n  text-align: center;\n  margin-top: 20px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.85rem;\n}\n.forgot-password a {\n  color: #81c784;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.forgot-password a:hover {\n  color: #a5d6a7;\n  background-color: #e8e6fa;\n  text-decoration: none;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes zoomIn {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 480px) {\n  .login-wrapper {\n    padding: 15px;\n  }\n  .login-container {\n    padding: 25px;\n    max-width: 100%;\n    margin: 10px;\n  }\n  .login-image {\n    max-height: 170px;\n    margin-bottom: 20px;\n  }\n  .card-title {\n    font-size: 1.4rem;\n    margin-bottom: 20px;\n  }\n  .form-group {\n    margin-bottom: 16px;\n  }\n  .form-control {\n    padding: 10px 40px 10px 12px;\n    font-size: 0.85rem;\n  }\n  .button-group {\n    gap: 10px;\n    margin-top: 20px;\n  }\n  .btn-login,\n  .btn-register {\n    padding: 10px 14px;\n    font-size: 0.85rem;\n  }\n  .toggle-password {\n    right: 8px;\n    width: 28px;\n    height: 28px;\n  }\n  .toggle-password .icon-eye,\n  .toggle-password .icon-eye-slash {\n    width: 16px;\n    height: 16px;\n  }\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/pages/auth/login/login.ts", lineNumber: 16 });
})();
export {
  Login
};
//# sourceMappingURL=chunk-7ZOBDUND.js.map
