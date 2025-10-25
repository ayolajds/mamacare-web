import {
  AuthService
} from "./chunk-A2PELOIP.js";
import "./chunk-BPEFTJA2.js";
import {
  Router
} from "./chunk-6P7TFCYF.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-VTU4YTDN.js";
import {
  CommonModule,
  NgIf
} from "./chunk-Q4BX36PF.js";
import {
  Component,
  finalize,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-DEJWN6HZ.js";

// src/app/pages/auth/forgot-password/forgot-password.ts
function ForgotPassword_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emailErrors, " ");
  }
}
function ForgotPassword_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ForgotPassword_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275text(2, " Enviando... ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPassword_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enviar enlace de recuperaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ForgotPassword_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function ForgotPassword_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSuccessModal());
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function ForgotPassword_div_24_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 29);
    \u0275\u0275element(5, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 31);
    \u0275\u0275text(7, "\xA1Correo enviado!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32)(9, "p");
    \u0275\u0275text(10, "Hemos enviado un enlace de recuperaci\xF3n a tu correo electr\xF3nico.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 33);
    \u0275\u0275text(12, "Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contrase\xF1a.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 34)(14, "button", 35);
    \u0275\u0275listener("click", function ForgotPassword_div_24_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSuccessModal());
    });
    \u0275\u0275text(15, " Entendido ");
    \u0275\u0275elementEnd()()()();
  }
}
var ForgotPassword = class _ForgotPassword {
  fb;
  authService;
  router;
  forgotPasswordForm;
  loading = false;
  showSuccess = false;
  errorMessage = "";
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.forgotPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  get email() {
    return this.forgotPasswordForm.get("email");
  }
  get emailErrors() {
    if (this.email?.errors?.["required"]) {
      return "El correo electr\xF3nico es obligatorio";
    }
    if (this.email?.errors?.["email"]) {
      return "Por favor ingresa un correo electr\xF3nico v\xE1lido";
    }
    return "";
  }
  onSubmit() {
    if (this.forgotPasswordForm.invalid) {
      this.markAllFieldsAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.authService.forgotPassword(this.forgotPasswordForm.value.email).pipe(finalize(() => {
      this.loading = false;
    })).subscribe({
      next: (response) => {
        this.showSuccess = true;
        this.forgotPasswordForm.reset();
        console.log("\u2705 Forgot password success:", response);
      },
      error: (error) => {
        this.errorMessage = error.message || "Error al enviar el correo. Intenta nuevamente.";
        console.error("\u274C Forgot password error:", error);
      }
    });
  }
  markAllFieldsAsTouched() {
    Object.keys(this.forgotPasswordForm.controls).forEach((key) => {
      this.forgotPasswordForm.get(key)?.markAsTouched();
    });
  }
  onBackToLogin() {
    this.router.navigate(["/login"]);
  }
  closeSuccessModal() {
    this.showSuccess = false;
    this.onBackToLogin();
  }
  static \u0275fac = function ForgotPassword_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPassword)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPassword, selectors: [["app-forgot-password"]], decls: 25, vars: 9, consts: [[1, "forgot-password"], [1, "forgot-password__container"], [1, "forgot-password__header"], [1, "forgot-password__logo"], ["src", "/imagenes/reset.jpg", "alt", "Ma\xB4Care", 1, "logo"], [1, "forgot-password__title"], [1, "forgot-password__subtitle"], [1, "forgot-password__form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "tu@email.com", "aria-describedby", "email-error", 1, "form-input"], ["class", "error-message", "id", "email-error", 4, "ngIf"], ["class", "error-banner", 4, "ngIf"], ["type", "submit", 1, "btn", "btn--primary", "btn--full", 3, "disabled"], [1, "btn__content"], ["class", "btn__loading", 4, "ngIf"], [4, "ngIf"], [1, "forgot-password__footer"], [1, "forgot-password__back"], [1, "forgot-password__link", 3, "click"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["id", "email-error", 1, "error-message"], [1, "error-banner"], [1, "btn__loading"], [1, "spinner"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal__header"], [1, "modal__icon", "modal__icon--success"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "modal__title"], [1, "modal__body"], [1, "modal__hint"], [1, "modal__footer"], [1, "btn", "btn--primary", 3, "click"]], template: function ForgotPassword_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6, "\xBFHas olvidado tu contrase\xF1a?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, " Te enviaremos un enlace para restablecer tu contrase\xF1a a tu correo electr\xF3nico ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form", 7);
      \u0275\u0275listener("ngSubmit", function ForgotPassword_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
      \u0275\u0275text(12, "Correo electr\xF3nico");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 10);
      \u0275\u0275template(14, ForgotPassword_div_14_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, ForgotPassword_div_15_Template, 2, 1, "div", 12);
      \u0275\u0275elementStart(16, "button", 13)(17, "div", 14);
      \u0275\u0275template(18, ForgotPassword_span_18_Template, 3, 0, "span", 15)(19, ForgotPassword_span_19_Template, 2, 0, "span", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 17)(21, "p", 18)(22, "a", 19);
      \u0275\u0275listener("click", function ForgotPassword_Template_a_click_22_listener() {
        return ctx.onBackToLogin();
      });
      \u0275\u0275text(23, " \u2190 Volver al inicio de sesi\xF3n ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(24, ForgotPassword_div_24_Template, 16, 0, "div", 20);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.forgotPasswordForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("form-input--error", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading || ctx.forgotPasswordForm.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.showSuccess);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgIf], styles: ['\n\n.forgot-password[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1 0%,\n      #ece9ff 100%);\n  padding: 2rem 1rem;\n  font-family:\n    "Sour Gummy",\n    system-ui,\n    -apple-system,\n    sans-serif;\n}\n.forgot-password__container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 2.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 440px;\n  box-sizing: border-box;\n}\n.forgot-password__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.forgot-password__logo[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.forgot-password__logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 120px;\n  height: 120px;\n  border-radius: 20px;\n  object-fit: cover;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border: 4px solid white;\n  transition: all 0.3s ease;\n}\n.forgot-password__logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n}\n.forgot-password__title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 1.75rem;\n  color: #2a2a2a;\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n  text-align: center;\n}\n.forgot-password__subtitle[_ngcontent-%COMP%] {\n  color: rgb(118.5, 118.5, 118.5);\n  font-size: 0.95rem;\n  line-height: 1.5;\n  margin: 0;\n  text-align: center;\n}\n.forgot-password__form[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n.forgot-password__footer[_ngcontent-%COMP%] {\n  text-align: center;\n  border-top: 1px solid rgb(191.9545454545, 182, 255);\n  padding-top: 1.5rem;\n  width: 100%;\n}\n.forgot-password__back[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.forgot-password__link[_ngcontent-%COMP%] {\n  color: #e15886;\n  text-decoration: none;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.forgot-password__link[_ngcontent-%COMP%]:hover {\n  color: rgb(217.2335025381, 44.7664974619, 102.6751269036);\n  text-decoration: underline;\n  transform: translateX(-2px);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: #2a2a2a;\n  font-size: 0.9rem;\n  width: 100%;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid rgb(147.9090909091, 131, 255);\n  border-radius: 10px;\n  font-size: 1rem;\n  transition: all 0.2s ease;\n  background: #fafafa;\n  font-family: inherit;\n  box-sizing: border-box;\n  max-width: 100%;\n  display: block;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e15886;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(225, 88, 134, 0.1);\n}\n.form-input--error[_ngcontent-%COMP%] {\n  border-color: #e53e3e;\n}\n.form-input--error[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);\n}\n.error-message[_ngcontent-%COMP%] {\n  display: block;\n  color: #e53e3e;\n  font-size: 0.8rem;\n  margin-top: 0.25rem;\n  font-weight: 600;\n  width: 100%;\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: rgba(229, 62, 62, 0.1);\n  border: 1px solid rgba(229, 62, 62, 0.2);\n  color: #e53e3e;\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  margin-bottom: 1.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  animation: _ngcontent-%COMP%_shake 0.5s ease-in-out;\n  width: 100%;\n  box-sizing: border-box;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 800;\n  font-size: 0.95rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-style: italic;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  box-sizing: border-box;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #e15886;\n  color: white;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(225, 88, 134, 0.4);\n}\n.btn--primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn--full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.btn__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n}\n.btn__loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_modalAppear 0.3s ease-out;\n  box-sizing: border-box;\n}\n.modal__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.modal__icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1rem;\n  font-size: 1.5rem;\n}\n.modal__icon--success[_ngcontent-%COMP%] {\n  background: rgba(45, 125, 50, 0.1);\n  color: #2d7d32;\n  border: 2px solid rgba(45, 125, 50, 0.2);\n}\n.modal__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  color: #2a2a2a;\n  margin: 0;\n  font-size: 1.5rem;\n}\n.modal__body[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.modal__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  line-height: 1.5;\n  color: #2a2a2a;\n}\n.modal__hint[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgb(118.5, 118.5, 118.5);\n  font-style: italic;\n}\n.modal__footer[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_modalAppear {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@media (max-width: 480px) {\n  .forgot-password__container[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n    margin: 0 1rem;\n  }\n  .forgot-password__title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .forgot-password__logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    max-width: 100px;\n    height: 100px;\n  }\n  .modal[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    margin: 0 1rem;\n  }\n  .modal__icon[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n  }\n  .modal__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n  .form-input[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.875rem;\n  }\n}\n.forgot-password__container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=forgot-password.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPassword, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [ReactiveFormsModule, CommonModule], template: '<div class="forgot-password">\r\n  <div class="forgot-password__container">\r\n    <!-- Header -->\r\n    <div class="forgot-password__header">\r\n      <div class="forgot-password__logo">\r\n        <img src="/imagenes/reset.jpg" alt="Ma\xB4Care" class="logo">\r\n      </div>\r\n      <h1 class="forgot-password__title">\xBFHas olvidado tu contrase\xF1a?</h1>\r\n      <p class="forgot-password__subtitle">\r\n        Te enviaremos un enlace para restablecer tu contrase\xF1a a tu correo electr\xF3nico\r\n      </p>\r\n    </div>\r\n\r\n    <!-- Form -->\r\n    <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()" class="forgot-password__form">\r\n      \r\n      <!-- Email Field -->\r\n      <div class="form-group">\r\n        <label for="email" class="form-label">Correo electr\xF3nico</label>\r\n        <input\r\n          id="email"\r\n          type="email"\r\n          formControlName="email"\r\n          class="form-input"\r\n          [class.form-input--error]="email?.invalid && email?.touched"\r\n          placeholder="tu@email.com"\r\n          aria-describedby="email-error"\r\n        >\r\n        <div *ngIf="email?.invalid && email?.touched" class="error-message" id="email-error">\r\n          {{ emailErrors }}\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Error Message -->\r\n      <div *ngIf="errorMessage" class="error-banner">\r\n        {{ errorMessage }}\r\n      </div>\r\n\r\n      <!-- Submit Button -->\r\n      <button \r\n        type="submit" \r\n        class="btn btn--primary btn--full"\r\n        [disabled]="loading || forgotPasswordForm.invalid"\r\n      >\r\n        <div class="btn__content">\r\n          <span *ngIf="loading" class="btn__loading">\r\n            <div class="spinner"></div>\r\n            Enviando...\r\n          </span>\r\n          <span *ngIf="!loading">Enviar enlace de recuperaci\xF3n</span>\r\n        </div>\r\n      </button>\r\n    </form>\r\n\r\n    <!-- Back to Login -->\r\n    <div class="forgot-password__footer">\r\n      <p class="forgot-password__back">\r\n        <a (click)="onBackToLogin()" class="forgot-password__link">\r\n          \u2190 Volver al inicio de sesi\xF3n\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Success Modal -->\r\n  <div *ngIf="showSuccess" class="modal-overlay" (click)="closeSuccessModal()">\r\n    <div class="modal" (click)="$event.stopPropagation()">\r\n      <div class="modal__header">\r\n        <div class="modal__icon modal__icon--success">\r\n          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">\r\n            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" \r\n                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r\n          </svg>\r\n        </div>\r\n        <h3 class="modal__title">\xA1Correo enviado!</h3>\r\n      </div>\r\n      \r\n      <div class="modal__body">\r\n        <p>Hemos enviado un enlace de recuperaci\xF3n a tu correo electr\xF3nico.</p>\r\n        <p class="modal__hint">Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contrase\xF1a.</p>\r\n      </div>\r\n      \r\n      <div class="modal__footer">\r\n        <button (click)="closeSuccessModal()" class="btn btn--primary">\r\n          Entendido\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>', styles: ['/* src/app/pages/auth/forgot-password/forgot-password.scss */\n.forgot-password {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1 0%,\n      #ece9ff 100%);\n  padding: 2rem 1rem;\n  font-family:\n    "Sour Gummy",\n    system-ui,\n    -apple-system,\n    sans-serif;\n}\n.forgot-password__container {\n  background: white;\n  border-radius: 20px;\n  padding: 2.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 440px;\n  box-sizing: border-box;\n}\n.forgot-password__header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.forgot-password__logo {\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.forgot-password__logo .logo {\n  width: 100%;\n  max-width: 120px;\n  height: 120px;\n  border-radius: 20px;\n  object-fit: cover;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border: 4px solid white;\n  transition: all 0.3s ease;\n}\n.forgot-password__logo .logo:hover {\n  transform: scale(1.05);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n}\n.forgot-password__title {\n  font-weight: 900;\n  font-size: 1.75rem;\n  color: #2a2a2a;\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n  text-align: center;\n}\n.forgot-password__subtitle {\n  color: rgb(118.5, 118.5, 118.5);\n  font-size: 0.95rem;\n  line-height: 1.5;\n  margin: 0;\n  text-align: center;\n}\n.forgot-password__form {\n  margin-bottom: 2rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n.forgot-password__footer {\n  text-align: center;\n  border-top: 1px solid rgb(191.9545454545, 182, 255);\n  padding-top: 1.5rem;\n  width: 100%;\n}\n.forgot-password__back {\n  margin: 0;\n}\n.forgot-password__link {\n  color: #e15886;\n  text-decoration: none;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.forgot-password__link:hover {\n  color: rgb(217.2335025381, 44.7664974619, 102.6751269036);\n  text-decoration: underline;\n  transform: translateX(-2px);\n}\n.form-group {\n  margin-bottom: 1.5rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-label {\n  display: block;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: #2a2a2a;\n  font-size: 0.9rem;\n  width: 100%;\n}\n.form-input {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid rgb(147.9090909091, 131, 255);\n  border-radius: 10px;\n  font-size: 1rem;\n  transition: all 0.2s ease;\n  background: #fafafa;\n  font-family: inherit;\n  box-sizing: border-box;\n  max-width: 100%;\n  display: block;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #e15886;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(225, 88, 134, 0.1);\n}\n.form-input--error {\n  border-color: #e53e3e;\n}\n.form-input--error:focus {\n  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);\n}\n.error-message {\n  display: block;\n  color: #e53e3e;\n  font-size: 0.8rem;\n  margin-top: 0.25rem;\n  font-weight: 600;\n  width: 100%;\n}\n.error-banner {\n  background: rgba(229, 62, 62, 0.1);\n  border: 1px solid rgba(229, 62, 62, 0.2);\n  color: #e53e3e;\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  margin-bottom: 1.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  animation: shake 0.5s ease-in-out;\n  width: 100%;\n  box-sizing: border-box;\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 800;\n  font-size: 0.95rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-style: italic;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  box-sizing: border-box;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.btn--primary {\n  background: #e15886;\n  color: white;\n}\n.btn--primary:hover:not(:disabled) {\n  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(225, 88, 134, 0.4);\n}\n.btn--primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn--full {\n  width: 100%;\n}\n.btn__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n}\n.btn__loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  animation: fadeIn 0.3s ease-out;\n}\n.modal {\n  background: white;\n  border-radius: 20px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  animation: modalAppear 0.3s ease-out;\n  box-sizing: border-box;\n}\n.modal__header {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.modal__icon {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1rem;\n  font-size: 1.5rem;\n}\n.modal__icon--success {\n  background: rgba(45, 125, 50, 0.1);\n  color: #2d7d32;\n  border: 2px solid rgba(45, 125, 50, 0.2);\n}\n.modal__icon svg {\n  width: 32px;\n  height: 32px;\n}\n.modal__title {\n  font-weight: 900;\n  color: #2a2a2a;\n  margin: 0;\n  font-size: 1.5rem;\n}\n.modal__body {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.modal__body p {\n  margin: 0 0 1rem 0;\n  line-height: 1.5;\n  color: #2a2a2a;\n}\n.modal__hint {\n  font-size: 0.9rem;\n  color: rgb(118.5, 118.5, 118.5);\n  font-style: italic;\n}\n.modal__footer {\n  text-align: center;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes modalAppear {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@media (max-width: 480px) {\n  .forgot-password__container {\n    padding: 2rem 1.5rem;\n    margin: 0 1rem;\n  }\n  .forgot-password__title {\n    font-size: 1.5rem;\n  }\n  .forgot-password__logo .logo {\n    max-width: 100px;\n    height: 100px;\n  }\n  .modal {\n    padding: 1.5rem;\n    margin: 0 1rem;\n  }\n  .modal__icon {\n    width: 64px;\n    height: 64px;\n  }\n  .modal__icon svg {\n    width: 24px;\n    height: 24px;\n  }\n  .form-input {\n    padding: 0.75rem 0.875rem;\n  }\n}\n.forgot-password__container {\n  animation: slideUp 0.5s ease-out;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=forgot-password.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPassword, { className: "ForgotPassword", filePath: "src/app/pages/auth/forgot-password/forgot-password.ts", lineNumber: 15 });
})();
export {
  ForgotPassword
};
//# sourceMappingURL=chunk-6FF7IOWZ.js.map
