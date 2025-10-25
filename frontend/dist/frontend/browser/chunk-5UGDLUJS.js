import {
  AuthService
} from "./chunk-A2PELOIP.js";
import "./chunk-BPEFTJA2.js";
import {
  ActivatedRoute,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-DEJWN6HZ.js";

// src/app/pages/auth/reset-password/reset-password.ts
function ResetPassword_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Verificando enlace de recuperaci\xF3n...");
    \u0275\u0275elementEnd()();
  }
}
function ResetPassword_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 10);
    \u0275\u0275text(4, "Enlace inv\xE1lido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275text(6, " Este enlace de recuperaci\xF3n ha expirado o no es v\xE1lido. Por favor solicita uno nuevo desde la p\xE1gina de recuperaci\xF3n. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 12);
    \u0275\u0275listener("click", function ResetPassword_div_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackToLogin());
    });
    \u0275\u0275text(8, " Volver al inicio ");
    \u0275\u0275elementEnd()();
  }
}
function ResetPassword_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function ResetPassword_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.passwordErrors, " ");
  }
}
function ResetPassword_div_4_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.confirmPasswordErrors, " ");
  }
}
function ResetPassword_div_4_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275text(2, " Actualizando... ");
    \u0275\u0275elementEnd();
  }
}
function ResetPassword_div_4_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Actualizar contrase\xF1a");
    \u0275\u0275elementEnd();
  }
}
function ResetPassword_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 15);
    \u0275\u0275text(5, "Nueva Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 16);
    \u0275\u0275text(7, " Crea una nueva contrase\xF1a segura para tu cuenta ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ResetPassword_div_4_div_8_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(9, "form", 18);
    \u0275\u0275listener("ngSubmit", function ResetPassword_div_4_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(10, "div", 19)(11, "label", 20);
    \u0275\u0275text(12, "Nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 21);
    \u0275\u0275template(14, ResetPassword_div_4_div_14_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19)(16, "label", 23);
    \u0275\u0275text(17, "Confirmar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 24);
    \u0275\u0275template(19, ResetPassword_div_4_div_19_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 26)(21, "div", 27);
    \u0275\u0275template(22, ResetPassword_div_4_span_22_Template, 3, 0, "span", 28)(23, ResetPassword_div_4_span_23_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 29)(25, "a", 30);
    \u0275\u0275listener("click", function ResetPassword_div_4_Template_a_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackToLogin());
    });
    \u0275\u0275text(26, " \u2190 Volver al inicio de sesi\xF3n ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.resetPasswordForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("form-input--error", (ctx_r1.password == null ? null : ctx_r1.password.invalid) && (ctx_r1.password == null ? null : ctx_r1.password.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.password == null ? null : ctx_r1.password.invalid) && (ctx_r1.password == null ? null : ctx_r1.password.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("form-input--error", (ctx_r1.confirmPassword == null ? null : ctx_r1.confirmPassword.invalid) && (ctx_r1.confirmPassword == null ? null : ctx_r1.confirmPassword.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.confirmPassword == null ? null : ctx_r1.confirmPassword.invalid) && (ctx_r1.confirmPassword == null ? null : ctx_r1.confirmPassword.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading || ctx_r1.resetPasswordForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
  }
}
function ResetPassword_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 37);
    \u0275\u0275text(4, "\xA1Listo!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 38);
    \u0275\u0275text(6, " Tu contrase\xF1a ha sido actualizada correctamente. Ahora puedes iniciar sesi\xF3n con tu nueva contrase\xF1a. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 39);
    \u0275\u0275listener("click", function ResetPassword_div_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackToLogin());
    });
    \u0275\u0275text(8, " Iniciar sesi\xF3n ");
    \u0275\u0275elementEnd()();
  }
}
var ResetPassword = class _ResetPassword {
  fb;
  router;
  route;
  authService;
  resetPasswordForm;
  loading = false;
  showSuccess = false;
  token = "";
  tokenValid = true;
  tokenChecked = false;
  errorMessage = "";
  constructor(fb, router, route, authService) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.authService = authService;
    this.resetPasswordForm = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token") || "";
    this.verifyToken();
  }
  verifyToken() {
    if (!this.token) {
      this.tokenValid = false;
      this.tokenChecked = true;
      return;
    }
    this.authService.verifyResetToken(this.token).subscribe({
      next: (response) => {
        this.tokenValid = true;
        this.tokenChecked = true;
        console.log("\u2705 Token v\xE1lido:", response);
      },
      error: (error) => {
        this.tokenValid = false;
        this.tokenChecked = true;
        this.errorMessage = error.message || "El enlace de restablecimiento es inv\xE1lido o ha expirado.";
        console.error("\u274C Token inv\xE1lido:", error);
      }
    });
  }
  passwordMatchValidator(form) {
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
    return null;
  }
  get password() {
    return this.resetPasswordForm.get("password");
  }
  get confirmPassword() {
    return this.resetPasswordForm.get("confirmPassword");
  }
  get passwordErrors() {
    if (this.password?.errors?.["required"]) {
      return "La contrase\xF1a es obligatoria";
    }
    if (this.password?.errors?.["minlength"]) {
      return "La contrase\xF1a debe tener al menos 6 caracteres";
    }
    return "";
  }
  get confirmPasswordErrors() {
    if (this.confirmPassword?.errors?.["required"]) {
      return "Confirma tu contrase\xF1a";
    }
    if (this.confirmPassword?.errors?.["passwordMismatch"]) {
      return "Las contrase\xF1as no coinciden";
    }
    return "";
  }
  onSubmit() {
    if (this.resetPasswordForm.invalid || !this.tokenValid) {
      this.markAllFieldsAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.authService.resetPassword(this.token, this.resetPasswordForm.value.password).pipe(finalize(() => {
      this.loading = false;
    })).subscribe({
      next: (response) => {
        this.showSuccess = true;
        console.log("\u2705 Password reset success:", response);
      },
      error: (error) => {
        this.errorMessage = error.message || "Error al restablecer la contrase\xF1a. Intenta nuevamente.";
        console.error("\u274C Password reset error:", error);
      }
    });
  }
  markAllFieldsAsTouched() {
    Object.keys(this.resetPasswordForm.controls).forEach((key) => {
      this.resetPasswordForm.get(key)?.markAsTouched();
    });
  }
  onBackToLogin() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function ResetPassword_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPassword)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPassword, selectors: [["app-reset-password"]], decls: 6, vars: 4, consts: [[1, "reset-password"], [1, "reset-password__container"], ["class", "token-checking", 4, "ngIf"], ["class", "token-invalid", 4, "ngIf"], [4, "ngIf"], ["class", "reset-success", 4, "ngIf"], [1, "token-checking"], [1, "spinner"], [1, "token-invalid"], [1, "token-invalid__icon"], [1, "token-invalid__title"], [1, "token-invalid__message"], [1, "btn", "btn--primary", 3, "click"], [1, "reset-password__header"], [1, "reset-password__icon"], [1, "reset-password__title"], [1, "reset-password__subtitle"], ["class", "error-banner", 4, "ngIf"], [1, "reset-password__form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "password", 1, "form-label"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "M\xEDnimo 6 caracteres", "aria-describedby", "password-error", 1, "form-input"], ["class", "error-message", "id", "password-error", 4, "ngIf"], ["for", "confirmPassword", 1, "form-label"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", "placeholder", "Repite tu contrase\xF1a", "aria-describedby", "confirm-password-error", 1, "form-input"], ["class", "error-message", "id", "confirm-password-error", 4, "ngIf"], ["type", "submit", 1, "btn", "btn--primary", "btn--full", 3, "disabled"], [1, "btn__content"], ["class", "btn__loading", 4, "ngIf"], [1, "reset-password__footer"], [1, "reset-password__link", 3, "click"], [1, "error-banner"], ["id", "password-error", 1, "error-message"], ["id", "confirm-password-error", 1, "error-message"], [1, "btn__loading"], [1, "reset-success"], [1, "reset-success__icon"], [1, "reset-success__title"], [1, "reset-success__message"], [1, "btn", "btn--primary", "btn--full", 3, "click"]], template: function ResetPassword_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, ResetPassword_div_2_Template, 4, 0, "div", 2)(3, ResetPassword_div_3_Template, 9, 0, "div", 3)(4, ResetPassword_div_4_Template, 27, 11, "div", 4)(5, ResetPassword_div_5_Template, 9, 0, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.tokenChecked);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tokenChecked && !ctx.tokenValid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tokenChecked && ctx.tokenValid && !ctx.showSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccess);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgIf], styles: ['\n\n.reset-password[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1 0%,\n      #ece9ff 100%);\n  padding: 1rem;\n  font-family:\n    "Sour Gummy",\n    system-ui,\n    -apple-system,\n    sans-serif;\n}\n.reset-password__container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 2.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n  animation: _ngcontent-%COMP%_slideUp 0.5s ease-out;\n}\n.reset-password__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.reset-password__icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.8;\n}\n.reset-password__title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 1.5rem;\n  color: #2a2a2a;\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n}\n.reset-password__subtitle[_ngcontent-%COMP%] {\n  color: rgb(118.5, 118.5, 118.5);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.reset-password__form[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.reset-password__footer[_ngcontent-%COMP%] {\n  text-align: center;\n  border-top: 1px solid rgb(191.9545454545, 182, 255);\n  padding-top: 1.5rem;\n}\n.reset-password__link[_ngcontent-%COMP%] {\n  color: #e15886;\n  text-decoration: none;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.reset-password__link[_ngcontent-%COMP%]:hover {\n  color: rgb(217.2335025381, 44.7664974619, 102.6751269036);\n  text-decoration: underline;\n}\n.token-checking[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n}\n.token-checking[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid transparent;\n  border-top: 3px solid #e15886;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1.5rem;\n}\n.token-checking[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgb(118.5, 118.5, 118.5);\n  margin: 0;\n  font-size: 0.95rem;\n}\n.token-invalid[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n}\n.token-invalid__icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 1.5rem;\n  opacity: 0.7;\n}\n.token-invalid__title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #e53e3e;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.token-invalid__message[_ngcontent-%COMP%] {\n  color: rgb(118.5, 118.5, 118.5);\n  margin-bottom: 2rem;\n  line-height: 1.5;\n  font-size: 0.9rem;\n}\n.reset-success[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n}\n.reset-success__icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 1.5rem;\n}\n.reset-success__title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #2d7d32;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.reset-success__message[_ngcontent-%COMP%] {\n  color: rgb(118.5, 118.5, 118.5);\n  margin-bottom: 2rem;\n  line-height: 1.5;\n  font-size: 0.9rem;\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: rgba(229, 62, 62, 0.1);\n  border: 1px solid rgba(229, 62, 62, 0.2);\n  color: #e53e3e;\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  margin-bottom: 1.5rem;\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-align: center;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: #2a2a2a;\n  font-size: 0.9rem;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid rgb(147.9090909091, 131, 255);\n  border-radius: 10px;\n  font-size: 1rem;\n  transition: all 0.2s ease;\n  background: #fafafa;\n  font-family: inherit;\n  box-sizing: border-box;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e15886;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(225, 88, 134, 0.1);\n}\n.form-input--error[_ngcontent-%COMP%] {\n  border-color: #e53e3e;\n}\n.form-input--error[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);\n}\n.error-message[_ngcontent-%COMP%] {\n  display: block;\n  color: #e53e3e;\n  font-size: 0.8rem;\n  margin-top: 0.25rem;\n  font-weight: 600;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 800;\n  font-size: 0.95rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-style: italic;\n  width: 100%;\n  box-sizing: border-box;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #e15886;\n  color: white;\n}\n.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(225, 88, 134, 0.4);\n}\n.btn--primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn--full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.btn__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n}\n.btn__loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 480px) {\n  .reset-password[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .reset-password__container[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n    border-radius: 16px;\n  }\n  .reset-password__title[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .reset-password__icon[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .token-checking[_ngcontent-%COMP%], \n   .token-invalid[_ngcontent-%COMP%], \n   .reset-success[_ngcontent-%COMP%] {\n    padding: 1.5rem 0.5rem;\n  }\n}\n/*# sourceMappingURL=reset-password.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPassword, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [ReactiveFormsModule, CommonModule], template: '<div class="reset-password">\r\n  <div class="reset-password__container">\r\n    \r\n    <!-- Loading al verificar token -->\r\n    <div *ngIf="!tokenChecked" class="token-checking">\r\n      <div class="spinner"></div>\r\n      <p>Verificando enlace de recuperaci\xF3n...</p>\r\n    </div>\r\n\r\n    <!-- Token inv\xE1lido -->\r\n    <div *ngIf="tokenChecked && !tokenValid" class="token-invalid">\r\n      <div class="token-invalid__icon">\u26A0\uFE0F</div>\r\n      <h2 class="token-invalid__title">Enlace inv\xE1lido</h2>\r\n      <p class="token-invalid__message">\r\n        Este enlace de recuperaci\xF3n ha expirado o no es v\xE1lido. \r\n        Por favor solicita uno nuevo desde la p\xE1gina de recuperaci\xF3n.\r\n      </p>\r\n      <button (click)="onBackToLogin()" class="btn btn--primary">\r\n        Volver al inicio\r\n      </button>\r\n    </div>\r\n\r\n    <!-- Formulario de reset (solo si token es v\xE1lido) -->\r\n    <div *ngIf="tokenChecked && tokenValid && !showSuccess">\r\n      \r\n      <!-- Header simplificado -->\r\n      <div class="reset-password__header">\r\n        <div class="reset-password__icon">\u{1F512}</div>\r\n        <h1 class="reset-password__title">Nueva Contrase\xF1a</h1>\r\n        <p class="reset-password__subtitle">\r\n          Crea una nueva contrase\xF1a segura para tu cuenta\r\n        </p>\r\n      </div>\r\n\r\n      <!-- Mensaje de error -->\r\n      <div *ngIf="errorMessage" class="error-banner">\r\n        {{ errorMessage }}\r\n      </div>\r\n\r\n      <!-- Form -->\r\n      <form [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit()" class="reset-password__form">\r\n        \r\n        <!-- Password Field -->\r\n        <div class="form-group">\r\n          <label for="password" class="form-label">Nueva contrase\xF1a</label>\r\n          <input\r\n            id="password"\r\n            type="password"\r\n            formControlName="password"\r\n            class="form-input"\r\n            [class.form-input--error]="password?.invalid && password?.touched"\r\n            placeholder="M\xEDnimo 6 caracteres"\r\n            aria-describedby="password-error"\r\n          >\r\n          <div *ngIf="password?.invalid && password?.touched" class="error-message" id="password-error">\r\n            {{ passwordErrors }}\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Confirm Password Field -->\r\n        <div class="form-group">\r\n          <label for="confirmPassword" class="form-label">Confirmar contrase\xF1a</label>\r\n          <input\r\n            id="confirmPassword"\r\n            type="password"\r\n            formControlName="confirmPassword"\r\n            class="form-input"\r\n            [class.form-input--error]="confirmPassword?.invalid && confirmPassword?.touched"\r\n            placeholder="Repite tu contrase\xF1a"\r\n            aria-describedby="confirm-password-error"\r\n          >\r\n          <div *ngIf="confirmPassword?.invalid && confirmPassword?.touched" class="error-message" id="confirm-password-error">\r\n            {{ confirmPasswordErrors }}\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Submit Button -->\r\n        <button \r\n          type="submit" \r\n          class="btn btn--primary btn--full"\r\n          [disabled]="loading || resetPasswordForm.invalid"\r\n        >\r\n          <div class="btn__content">\r\n            <span *ngIf="loading" class="btn__loading">\r\n              <div class="spinner"></div>\r\n              Actualizando...\r\n            </span>\r\n            <span *ngIf="!loading">Actualizar contrase\xF1a</span>\r\n          </div>\r\n        </button>\r\n      </form>\r\n\r\n      <!-- Link de regreso -->\r\n      <div class="reset-password__footer">\r\n        <a (click)="onBackToLogin()" class="reset-password__link">\r\n          \u2190 Volver al inicio de sesi\xF3n\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Success Message -->\r\n    <div *ngIf="showSuccess" class="reset-success">\r\n      <div class="reset-success__icon">\u{1F389}</div>\r\n      <h2 class="reset-success__title">\xA1Listo!</h2>\r\n      <p class="reset-success__message">\r\n        Tu contrase\xF1a ha sido actualizada correctamente. \r\n        Ahora puedes iniciar sesi\xF3n con tu nueva contrase\xF1a.\r\n      </p>\r\n      <button (click)="onBackToLogin()" class="btn btn--primary btn--full">\r\n        Iniciar sesi\xF3n\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</div>', styles: ['/* src/app/pages/auth/reset-password/reset-password.scss */\n.reset-password {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1 0%,\n      #ece9ff 100%);\n  padding: 1rem;\n  font-family:\n    "Sour Gummy",\n    system-ui,\n    -apple-system,\n    sans-serif;\n}\n.reset-password__container {\n  background: white;\n  border-radius: 20px;\n  padding: 2.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n  animation: slideUp 0.5s ease-out;\n}\n.reset-password__header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.reset-password__icon {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.8;\n}\n.reset-password__title {\n  font-weight: 900;\n  font-size: 1.5rem;\n  color: #2a2a2a;\n  margin-bottom: 0.5rem;\n  line-height: 1.2;\n}\n.reset-password__subtitle {\n  color: rgb(118.5, 118.5, 118.5);\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.reset-password__form {\n  margin-bottom: 1.5rem;\n}\n.reset-password__footer {\n  text-align: center;\n  border-top: 1px solid rgb(191.9545454545, 182, 255);\n  padding-top: 1.5rem;\n}\n.reset-password__link {\n  color: #e15886;\n  text-decoration: none;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.reset-password__link:hover {\n  color: rgb(217.2335025381, 44.7664974619, 102.6751269036);\n  text-decoration: underline;\n}\n.token-checking {\n  text-align: center;\n  padding: 3rem 1rem;\n}\n.token-checking .spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid transparent;\n  border-top: 3px solid #e15886;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1.5rem;\n}\n.token-checking p {\n  color: rgb(118.5, 118.5, 118.5);\n  margin: 0;\n  font-size: 0.95rem;\n}\n.token-invalid {\n  text-align: center;\n  padding: 2rem 1rem;\n}\n.token-invalid__icon {\n  font-size: 2.5rem;\n  margin-bottom: 1.5rem;\n  opacity: 0.7;\n}\n.token-invalid__title {\n  font-weight: 800;\n  color: #e53e3e;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.token-invalid__message {\n  color: rgb(118.5, 118.5, 118.5);\n  margin-bottom: 2rem;\n  line-height: 1.5;\n  font-size: 0.9rem;\n}\n.reset-success {\n  text-align: center;\n  padding: 1rem;\n}\n.reset-success__icon {\n  font-size: 2.5rem;\n  margin-bottom: 1.5rem;\n}\n.reset-success__title {\n  font-weight: 800;\n  color: #2d7d32;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.reset-success__message {\n  color: rgb(118.5, 118.5, 118.5);\n  margin-bottom: 2rem;\n  line-height: 1.5;\n  font-size: 0.9rem;\n}\n.error-banner {\n  background: rgba(229, 62, 62, 0.1);\n  border: 1px solid rgba(229, 62, 62, 0.2);\n  color: #e53e3e;\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  margin-bottom: 1.5rem;\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-align: center;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-label {\n  display: block;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: #2a2a2a;\n  font-size: 0.9rem;\n}\n.form-input {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid rgb(147.9090909091, 131, 255);\n  border-radius: 10px;\n  font-size: 1rem;\n  transition: all 0.2s ease;\n  background: #fafafa;\n  font-family: inherit;\n  box-sizing: border-box;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #e15886;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(225, 88, 134, 0.1);\n}\n.form-input--error {\n  border-color: #e53e3e;\n}\n.form-input--error:focus {\n  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);\n}\n.error-message {\n  display: block;\n  color: #e53e3e;\n  font-size: 0.8rem;\n  margin-top: 0.25rem;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 800;\n  font-size: 0.95rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-style: italic;\n  width: 100%;\n  box-sizing: border-box;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.btn--primary {\n  background: #e15886;\n  color: white;\n}\n.btn--primary:hover:not(:disabled) {\n  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(225, 88, 134, 0.4);\n}\n.btn--primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn--full {\n  width: 100%;\n}\n.btn__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n}\n.btn__loading {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 480px) {\n  .reset-password {\n    padding: 0.5rem;\n  }\n  .reset-password__container {\n    padding: 2rem 1.5rem;\n    border-radius: 16px;\n  }\n  .reset-password__title {\n    font-size: 1.35rem;\n  }\n  .reset-password__icon {\n    font-size: 2.5rem;\n  }\n  .token-checking,\n  .token-invalid,\n  .reset-success {\n    padding: 1.5rem 0.5rem;\n  }\n}\n/*# sourceMappingURL=reset-password.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: ActivatedRoute }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPassword, { className: "ResetPassword", filePath: "src/app/pages/auth/reset-password/reset-password.ts", lineNumber: 15 });
})();
export {
  ResetPassword
};
//# sourceMappingURL=chunk-5UGDLUJS.js.map
