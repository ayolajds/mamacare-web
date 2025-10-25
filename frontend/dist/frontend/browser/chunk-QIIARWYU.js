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
  MinLengthValidator,
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
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

// src/app/pages/auth/register/register.ts
function Register_p_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMsg, " ");
  }
}
function Register_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 29);
  }
}
var Register = class _Register {
  router = inject(Router);
  auth = inject(AuthService);
  // form model - TODO EN INGLÉS para consistencia
  name = "";
  lastName = "";
  email = "";
  password = "";
  confirmPassword = "";
  birthDate = "";
  phone = "";
  // UI state
  showPassword = false;
  showConfirmPassword = false;
  loading = false;
  errorMsg = "";
  // date limits
  minDate = "";
  maxDate = "";
  ngOnInit() {
    const today = /* @__PURE__ */ new Date();
    const eightyYearsAgo = new Date(today.getFullYear() - 80, today.getMonth(), today.getDate());
    this.minDate = eightyYearsAgo.toISOString().split("T")[0];
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    this.maxDate = eighteenYearsAgo.toISOString().split("T")[0];
    this.birthDate = this.maxDate;
  }
  onSubmit(form) {
    if (form.invalid || this.loading)
      return;
    if (this.password !== this.confirmPassword) {
      this.errorMsg = "Las contrase\xF1as no coinciden.";
      return;
    }
    const birthDate = new Date(this.birthDate);
    const today = /* @__PURE__ */ new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || month === 0 && today.getDate() < birthDate.getDate())
      age--;
    if (age < 18) {
      this.errorMsg = "Debes tener al menos 18 a\xF1os para registrarte.";
      return;
    }
    const payload = {
      name: this.name.trim(),
      lastName: this.lastName.trim(),
      email: this.email.trim(),
      password: this.password,
      phone: this.phone.trim(),
      birthDate: this.birthDate
    };
    this.loading = true;
    this.errorMsg = "";
    this.auth.register(payload).subscribe({
      next: (user) => {
        this.loading = false;
        alert(`\u2705 Registro exitoso: ${user.name} ${user.lastName}`);
        this.router.navigate(["/login"]);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err?.error?.message || "Error al registrarse";
      }
    });
  }
  navigateToLogin() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function Register_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Register)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register, selectors: [["app-register"]], decls: 44, vars: 23, consts: [["registerForm", "ngForm"], [1, "register-wrapper"], [1, "register-container", "card"], ["src", "/imagenes/register1.jpg", "alt", "Registro Ma\xB4Care", 1, "register-image"], [1, "card-title"], [3, "ngSubmit"], [1, "name-group"], [1, "form-group"], ["type", "text", "name", "name", "placeholder", "Nombre", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "placeholder", "Apellido", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "Correo electr\xF3nico", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "password-group"], ["name", "password", "placeholder", "Contrase\xF1a", "required", "", "minlength", "6", 1, "form-control", "password-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-password", 3, "click"], ["viewBox", "0 0 24 24", 1, "icon-eye"], ["d", "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"], ["viewBox", "0 0 24 24", 1, "icon-eye-slash"], ["d", "M11.83 9L15 12.16C15 12.11 15 12.05 15 12c0-1.66-1.34-3-3-3c-.05 0-.11 0-.16 0l1.51 1.51c.06-.01.11-.01.16-.01c.83 0 1.5.67 1.5 1.5c0 .05 0 .11-.01.16l1.51 1.51c.05-.15.08-.31.08-.47c0-2.76-2.24-5-5-5c-.16 0-.32.03-.47.08L9.83 7h2.67zM2.81 2.81L1.39 4.22l3.24 3.24C3.83 8.69 3 10.75 3 12c0 2.21 1.79 4 4 4c1.25 0 2.31-.83 2.69-2.03l2.12 2.12C10.84 16.8 9.45 18 7 18c-3.31 0-6-2.69-6-6c0-1.45.55-2.76 1.44-3.76l-1.45-1.45l1.41-1.41l17 17l-1.41 1.41l-4.28-4.28L13 15.66c-.37.04-.75.07-1.14.07c-3.31 0-6-2.69-6-6c0-.39.03-.77.07-1.14L2.81 2.81zM7 10c0-.55.45-1 1-1c.17 0 .33.05.46.12l-1.34 1.34c-.07-.13-.12-.29-.12-.46zm9.72 5.57l-1.67-1.67c.13.04.27.07.42.07c.83 0 1.5-.67 1.5-1.5c0-.15-.03-.29-.07-.42l1.67 1.67c.05.15.08.31.08.47c0 2.76-2.24 5-5 5c-.16 0-.32-.03-.47-.08z"], ["name", "confirmPassword", "placeholder", "Confirmar contrase\xF1a", "required", "", 1, "form-control", "password-input", 3, "ngModelChange", "type", "ngModel"], [1, "contact-group"], [1, "form-label"], ["type", "date", "name", "birthDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "min", "max"], ["type", "tel", "name", "phone", "placeholder", "+57 300 123 4567", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "error", "style", "color:#d21; margin:.5rem 0;", 4, "ngIf"], [1, "button-group"], ["type", "submit", 1, "btn-register", 3, "disabled"], ["class", "loading-spinner", 4, "ngIf"], ["type", "button", 1, "btn-login", 3, "click"], [1, "error", 2, "color", "#d21", "margin", ".5rem 0"], [1, "loading-spinner"]], template: function Register_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275element(2, "img", 3);
      \u0275\u0275elementStart(3, "h2", 4);
      \u0275\u0275text(4, "Crear Cuenta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 5, 0);
      \u0275\u0275listener("ngSubmit", function Register_Template_form_ngSubmit_5_listener() {
        \u0275\u0275restoreView(_r1);
        const registerForm_r2 = \u0275\u0275reference(6);
        return \u0275\u0275resetView(ctx.onSubmit(registerForm_r2));
      });
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.lastName, $event) || (ctx.lastName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 7)(13, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 11)(15, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 13);
      \u0275\u0275listener("click", function Register_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showPassword = !ctx.showPassword);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 14);
      \u0275\u0275element(18, "path", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "svg", 16);
      \u0275\u0275element(20, "path", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 11)(22, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 13);
      \u0275\u0275listener("click", function Register_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showConfirmPassword = !ctx.showConfirmPassword);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 14);
      \u0275\u0275element(25, "path", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "svg", 16);
      \u0275\u0275element(27, "path", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "div", 19)(29, "div", 7)(30, "label", 20);
      \u0275\u0275text(31, "Fecha de Nacimiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.birthDate, $event) || (ctx.birthDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 7)(34, "label", 20);
      \u0275\u0275text(35, "Tel\xE9fono");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.phone, $event) || (ctx.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(37, Register_p_37_Template, 2, 1, "p", 23);
      \u0275\u0275elementStart(38, "div", 24)(39, "button", 25);
      \u0275\u0275template(40, Register_span_40_Template, 1, 0, "span", 26);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 27);
      \u0275\u0275listener("click", function Register_Template_button_click_42_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.navigateToLogin());
      });
      \u0275\u0275text(43, " \xBFYa tienes cuenta? Inicia Sesi\xF3n ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const registerForm_r2 = \u0275\u0275reference(6);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.name);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.lastName);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(2);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("hidden", ctx.showPassword);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("hidden", !ctx.showPassword);
      \u0275\u0275advance(3);
      \u0275\u0275property("type", ctx.showConfirmPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("hidden", ctx.showConfirmPassword);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("hidden", !ctx.showConfirmPassword);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.birthDate);
      \u0275\u0275property("min", ctx.minDate)("max", ctx.maxDate);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.phone);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading || registerForm_r2.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Creando Cuenta..." : "Registrarme", " ");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm], styles: ['@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n\n\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f6f0 0%,\n      #e8e6fa 50%,\n      #f0e8f8 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  line-height: 1.4;\n}\n.register-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease;\n}\n.register-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  padding: 35px;\n  border: 2px solid #e8e6fa;\n  border-radius: 16px;\n  box-shadow: 0 8px 25px rgba(129, 199, 132, 0.15);\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f8f6f0 100%);\n  margin: 20px 0;\n  animation: _ngcontent-%COMP%_slideUp 0.6s ease;\n}\n.register-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 180px;\n  object-fit: cover;\n  border-radius: 12px;\n  margin-bottom: 25px;\n  animation: _ngcontent-%COMP%_zoomIn 0.5s ease;\n  border: 2px solid #e8e6fa;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-size: 1.7rem;\n  color: #f48fb1;\n  text-align: center;\n  margin-bottom: 25px;\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease;\n  text-shadow: 0 2px 4px rgba(244, 143, 177, 0.15);\n}\n.name-group[_ngcontent-%COMP%], \n.contact-group[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 18px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #795548;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 45px 12px 14px;\n  border-radius: 10px;\n  border: 2px solid #e8e6fa;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n  background-color: #f8f6f0;\n  color: #5d4037;\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #8d6e63;\n  opacity: 0.7;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #f48fb1;\n  box-shadow: 0 0 0 3px rgba(244, 143, 177, 0.15);\n  outline: none;\n  background-color: #ffffff;\n  transform: translateY(-1px);\n}\n.password-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-input[_ngcontent-%COMP%] {\n}\n.password-input[_ngcontent-%COMP%]::-webkit-credentials-auto-fill-button, \n.password-input[_ngcontent-%COMP%]::-webkit-strong-password-auto-fill-button, \n.password-input[_ngcontent-%COMP%]::-webkit-textfield-decoration-container {\n  display: none !important;\n  visibility: hidden !important;\n  opacity: 0 !important;\n}\n.password-input[type=password][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.password-input[_ngcontent-%COMP%]::-ms-reveal, \n.password-input[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: #f48fb1;\n  padding: 6px;\n  transition: all 0.3s ease;\n  background: #e8e6fa;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  z-index: 10;\n}\n.toggle-password[_ngcontent-%COMP%]   .icon-eye[_ngcontent-%COMP%], \n.toggle-password[_ngcontent-%COMP%]   .icon-eye-slash[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  fill: currentColor;\n  transition: all 0.3s ease;\n}\n.toggle-password[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.toggle-password[_ngcontent-%COMP%]:hover {\n  color: #f8b4d9;\n  background: #d8d6f0;\n  transform: translateY(-50%) scale(1.1);\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 25px;\n}\n.btn-register[_ngcontent-%COMP%], \n.btn-login[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-size: 0.95rem;\n  border: none;\n  border-radius: 12px;\n  color: #ffffff;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n.btn-register[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #81c784,\n      #a5d6a7);\n  box-shadow: 0 4px 12px rgba(129, 199, 132, 0.25);\n}\n.btn-register[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background:\n    linear-gradient(\n      135deg,\n      #a5d6a7,\n      #81c784);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(129, 199, 132, 0.35);\n}\n.btn-register[disabled][_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-login[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f48fb1,\n      #f8b4d9);\n  box-shadow: 0 4px 12px rgba(244, 143, 177, 0.25);\n}\n.btn-login[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #f8b4d9,\n      #f48fb1);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(244, 143, 177, 0.35);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n  border-top-color: transparent;\n  animation: _ngcontent-%COMP%_spin 1s ease-in-out infinite;\n  margin-right: 8px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_zoomIn {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 480px) {\n  .register-wrapper[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .register-container[_ngcontent-%COMP%] {\n    padding: 25px;\n    max-width: 100%;\n    margin: 10px;\n  }\n  .register-image[_ngcontent-%COMP%] {\n    max-height: 150px;\n    margin-bottom: 20px;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n  }\n  .name-group[_ngcontent-%COMP%], \n   .contact-group[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    padding: 11px 40px 11px 12px;\n    font-size: 0.85rem;\n  }\n  .button-group[_ngcontent-%COMP%] {\n    gap: 10px;\n    margin-top: 22px;\n  }\n  .btn-register[_ngcontent-%COMP%], \n   .btn-login[_ngcontent-%COMP%] {\n    padding: 12px 18px;\n    font-size: 0.9rem;\n  }\n  .toggle-password[_ngcontent-%COMP%] {\n    right: 8px;\n    width: 28px;\n    height: 28px;\n  }\n  .toggle-password[_ngcontent-%COMP%]   .icon-eye[_ngcontent-%COMP%], \n   .toggle-password[_ngcontent-%COMP%]   .icon-eye-slash[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n}\n/*# sourceMappingURL=register.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="register-wrapper">\r
  <div class="register-container card">\r
    <img src="/imagenes/register1.jpg" alt="Registro Ma\xB4Care" class="register-image">\r
    <h2 class="card-title">Crear Cuenta</h2>\r
\r
    <form (ngSubmit)="onSubmit(registerForm)" #registerForm="ngForm">\r
      <!-- Name and Last Name -->\r
      <div class="name-group">\r
        <div class="form-group">\r
          <input\r
            type="text"\r
            [(ngModel)]="name"\r
            name="name"                  \r
            class="form-control"\r
            placeholder="Nombre"\r
            required />\r
        </div>\r
\r
        <div class="form-group">\r
          <input\r
            type="text"\r
            [(ngModel)]="lastName"       \r
            name="lastName"              \r
            class="form-control"\r
            placeholder="Apellido"\r
            required />\r
        </div>\r
      </div>\r
\r
      <!-- Email -->\r
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
      <!-- Password -->\r
      <div class="form-group password-group">\r
        <input\r
          [type]="showPassword ? 'text' : 'password'"\r
          [(ngModel)]="password"\r
          name="password"\r
          class="form-control password-input"\r
          placeholder="Contrase\xF1a"\r
          required\r
          minlength="6" />\r
        <button type="button" class="toggle-password" (click)="showPassword = !showPassword">\r
          <svg class="icon-eye" [class.hidden]="showPassword" viewBox="0 0 24 24">\r
            <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"/>\r
          </svg>\r
          <svg class="icon-eye-slash" [class.hidden]="!showPassword" viewBox="0 0 24 24">\r
            <path d="M11.83 9L15 12.16C15 12.11 15 12.05 15 12c0-1.66-1.34-3-3-3c-.05 0-.11 0-.16 0l1.51 1.51c.06-.01.11-.01.16-.01c.83 0 1.5.67 1.5 1.5c0 .05 0 .11-.01.16l1.51 1.51c.05-.15.08-.31.08-.47c0-2.76-2.24-5-5-5c-.16 0-.32.03-.47.08L9.83 7h2.67zM2.81 2.81L1.39 4.22l3.24 3.24C3.83 8.69 3 10.75 3 12c0 2.21 1.79 4 4 4c1.25 0 2.31-.83 2.69-2.03l2.12 2.12C10.84 16.8 9.45 18 7 18c-3.31 0-6-2.69-6-6c0-1.45.55-2.76 1.44-3.76l-1.45-1.45l1.41-1.41l17 17l-1.41 1.41l-4.28-4.28L13 15.66c-.37.04-.75.07-1.14.07c-3.31 0-6-2.69-6-6c0-.39.03-.77.07-1.14L2.81 2.81zM7 10c0-.55.45-1 1-1c.17 0 .33.05.46.12l-1.34 1.34c-.07-.13-.12-.29-.12-.46zm9.72 5.57l-1.67-1.67c.13.04.27.07.42.07c.83 0 1.5-.67 1.5-1.5c0-.15-.03-.29-.07-.42l1.67 1.67c.05.15.08.31.08.47c0 2.76-2.24 5-5 5c-.16 0-.32-.03-.47-.08z"/>\r
          </svg>\r
        </button>\r
      </div>\r
\r
      <!-- Confirm Password -->\r
      <div class="form-group password-group">\r
        <input\r
          [type]="showConfirmPassword ? 'text' : 'password'"\r
          [(ngModel)]="confirmPassword"\r
          name="confirmPassword"\r
          class="form-control password-input"\r
          placeholder="Confirmar contrase\xF1a"\r
          required />\r
        <button type="button" class="toggle-password" (click)="showConfirmPassword = !showConfirmPassword">\r
          <svg class="icon-eye" [class.hidden]="showConfirmPassword" viewBox="0 0 24 24">\r
            <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"/>\r
          </svg>\r
          <svg class="icon-eye-slash" [class.hidden]="!showConfirmPassword" viewBox="0 0 24 24">\r
            <path d="M11.83 9L15 12.16C15 12.11 15 12.05 15 12c0-1.66-1.34-3-3-3c-.05 0-.11 0-.16 0l1.51 1.51c.06-.01.11-.01.16-.01c.83 0 1.5.67 1.5 1.5c0 .05 0 .11-.01.16l1.51 1.51c.05-.15.08-.31.08-.47c0-2.76-2.24-5-5-5c-.16 0-.32.03-.47.08L9.83 7h2.67zM2.81 2.81L1.39 4.22l3.24 3.24C3.83 8.69 3 10.75 3 12c0 2.21 1.79 4 4 4c1.25 0 2.31-.83 2.69-2.03l2.12 2.12C10.84 16.8 9.45 18 7 18c-3.31 0-6-2.69-6-6c0-1.45.55-2.76 1.44-3.76l-1.45-1.45l1.41-1.41l17 17l-1.41 1.41l-4.28-4.28L13 15.66c-.37.04-.75.07-1.14.07c-3.31 0-6-2.69-6-6c0-.39.03-.77.07-1.14L2.81 2.81zM7 10c0-.55.45-1 1-1c.17 0 .33.05.46.12l-1.34 1.34c-.07-.13-.12-.29-.12-.46zm9.72 5.57l-1.67-1.67c.13.04.27.07.42.07c.83 0 1.5-.67 1.5-1.5c0-.15-.03-.29-.07-.42l1.67 1.67c.05.15.08.31.08.47c0 2.76-2.24 5-5 5c-.16 0-.32-.03-.47-.08z"/>\r
          </svg>\r
        </button>\r
      </div>\r
\r
      <!-- Birth Date and Phone -->\r
      <div class="contact-group">\r
        <div class="form-group">\r
          <label class="form-label">Fecha de Nacimiento</label>\r
          <input\r
            type="date"\r
            [(ngModel)]="birthDate"          \r
            name="birthDate"                 \r
            class="form-control"\r
            [min]="minDate"\r
            [max]="maxDate"\r
            required />\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label">Tel\xE9fono</label>\r
          <input\r
            type="tel"\r
            [(ngModel)]="phone"  \r
            name="phone"                     \r
            class="form-control"\r
            placeholder="+57 300 123 4567"\r
            required />\r
        </div>\r
      </div>\r
\r
      <!-- Mensaje de error -->\r
      <p *ngIf="errorMsg" class="error" style="color:#d21; margin:.5rem 0;">\r
        {{ errorMsg }}\r
      </p>\r
\r
      <!-- Botones -->\r
      <div class="button-group">\r
        <button\r
          type="submit"\r
          class="btn-register"\r
          [disabled]="loading || registerForm.invalid">\r
          <span *ngIf="loading" class="loading-spinner"></span>\r
          {{ loading ? 'Creando Cuenta...' : 'Registrarme' }}\r
        </button>\r
\r
        <button\r
          type="button"\r
          class="btn-login"\r
          (click)="navigateToLogin()">\r
          \xBFYa tienes cuenta? Inicia Sesi\xF3n\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>`, styles: ['@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n\n/* src/app/pages/auth/register/register.scss */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: "Poppins", sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f6f0 0%,\n      #e8e6fa 50%,\n      #f0e8f8 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  line-height: 1.4;\n}\n.register-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 20px;\n  animation: fadeIn 0.8s ease;\n}\n.register-container {\n  width: 100%;\n  max-width: 480px;\n  padding: 35px;\n  border: 2px solid #e8e6fa;\n  border-radius: 16px;\n  box-shadow: 0 8px 25px rgba(129, 199, 132, 0.15);\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f8f6f0 100%);\n  margin: 20px 0;\n  animation: slideUp 0.6s ease;\n}\n.register-image {\n  width: 100%;\n  height: auto;\n  max-height: 180px;\n  object-fit: cover;\n  border-radius: 12px;\n  margin-bottom: 25px;\n  animation: zoomIn 0.5s ease;\n  border: 2px solid #e8e6fa;\n}\n.card-title {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-size: 1.7rem;\n  color: #f48fb1;\n  text-align: center;\n  margin-bottom: 25px;\n  animation: fadeIn 0.4s ease;\n  text-shadow: 0 2px 4px rgba(244, 143, 177, 0.15);\n}\n.name-group,\n.contact-group {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n  margin-bottom: 18px;\n}\n.form-group {\n  position: relative;\n  margin-bottom: 18px;\n}\n.form-label {\n  display: block;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #795548;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-control {\n  width: 100%;\n  padding: 12px 45px 12px 14px;\n  border-radius: 10px;\n  border: 2px solid #e8e6fa;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n  background-color: #f8f6f0;\n  color: #5d4037;\n}\n.form-control::placeholder {\n  color: #8d6e63;\n  opacity: 0.7;\n}\n.form-control:focus {\n  border-color: #f48fb1;\n  box-shadow: 0 0 0 3px rgba(244, 143, 177, 0.15);\n  outline: none;\n  background-color: #ffffff;\n  transform: translateY(-1px);\n}\n.password-group {\n  position: relative;\n}\n.password-input {\n}\n.password-input::-webkit-credentials-auto-fill-button,\n.password-input::-webkit-strong-password-auto-fill-button,\n.password-input::-webkit-textfield-decoration-container {\n  display: none !important;\n  visibility: hidden !important;\n  opacity: 0 !important;\n}\n.password-input[type=password] {\n  -moz-appearance: textfield;\n}\n.password-input::-ms-reveal,\n.password-input::-ms-clear {\n  display: none;\n}\n.toggle-password {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: #f48fb1;\n  padding: 6px;\n  transition: all 0.3s ease;\n  background: #e8e6fa;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  z-index: 10;\n}\n.toggle-password .icon-eye,\n.toggle-password .icon-eye-slash {\n  width: 18px;\n  height: 18px;\n  fill: currentColor;\n  transition: all 0.3s ease;\n}\n.toggle-password .hidden {\n  display: none !important;\n}\n.toggle-password:hover {\n  color: #f8b4d9;\n  background: #d8d6f0;\n  transform: translateY(-50%) scale(1.1);\n}\n.button-group {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 25px;\n}\n.btn-register,\n.btn-login {\n  padding: 13px 20px;\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  font-size: 0.95rem;\n  border: none;\n  border-radius: 12px;\n  color: #ffffff;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n.btn-register {\n  background:\n    linear-gradient(\n      135deg,\n      #81c784,\n      #a5d6a7);\n  box-shadow: 0 4px 12px rgba(129, 199, 132, 0.25);\n}\n.btn-register:hover:not([disabled]) {\n  background:\n    linear-gradient(\n      135deg,\n      #a5d6a7,\n      #81c784);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(129, 199, 132, 0.35);\n}\n.btn-register[disabled] {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-login {\n  background:\n    linear-gradient(\n      135deg,\n      #f48fb1,\n      #f8b4d9);\n  box-shadow: 0 4px 12px rgba(244, 143, 177, 0.25);\n}\n.btn-login:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #f8b4d9,\n      #f48fb1);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(244, 143, 177, 0.35);\n}\n.loading-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n  border-top-color: transparent;\n  animation: spin 1s ease-in-out infinite;\n  margin-right: 8px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes zoomIn {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 480px) {\n  .register-wrapper {\n    padding: 15px;\n  }\n  .register-container {\n    padding: 25px;\n    max-width: 100%;\n    margin: 10px;\n  }\n  .register-image {\n    max-height: 150px;\n    margin-bottom: 20px;\n  }\n  .card-title {\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n  }\n  .name-group,\n  .contact-group {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .form-group {\n    margin-bottom: 16px;\n  }\n  .form-control {\n    padding: 11px 40px 11px 12px;\n    font-size: 0.85rem;\n  }\n  .button-group {\n    gap: 10px;\n    margin-top: 22px;\n  }\n  .btn-register,\n  .btn-login {\n    padding: 12px 18px;\n    font-size: 0.9rem;\n  }\n  .toggle-password {\n    right: 8px;\n    width: 28px;\n    height: 28px;\n  }\n  .toggle-password .icon-eye,\n  .toggle-password .icon-eye-slash {\n    width: 16px;\n    height: 16px;\n  }\n}\n/*# sourceMappingURL=register.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register, { className: "Register", filePath: "src/app/pages/auth/register/register.ts", lineNumber: 14 });
})();
export {
  Register
};
//# sourceMappingURL=chunk-QIIARWYU.js.map
