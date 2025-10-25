import {
  CheckboxControlValueAccessor,
  CheckboxRequiredValidator,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VTU4YTDN.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-Q4BX36PF.js";
import {
  Component,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DEJWN6HZ.js";

// src/app/pages/contacto/contacto.ts
function Contacto_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 93);
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    \u0275\u0275styleProp("width", element_r2.size, "px")("height", element_r2.size, "px")("left", element_r2.left, "%")("animation-delay", element_r2.delay, "s")("animation-duration", element_r2.duration, "s");
  }
}
function Contacto_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95)(2, "div", 96);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "path", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 97)(6, "h3");
    \u0275\u0275text(7, "\xA1Mensaje enviado con \xE9xito!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Te contactaremos en menos de 24 horas. Gracias por confiar en nosotros.");
    \u0275\u0275elementEnd()()()();
  }
}
function Contacto_span_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98)(1, "div", 99);
    \u0275\u0275element(2, "div", 100)(3, "div", 100)(4, "div", 100);
    \u0275\u0275elementEnd()();
  }
}
function Contacto__svg_svg_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 101);
    \u0275\u0275element(1, "path", 102);
    \u0275\u0275elementEnd();
  }
}
var Contacto = class _Contacto {
  contactForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false
  };
  isSubmitting = false;
  submitted = false;
  floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 15 + 15
  }));
  onSubmit() {
    if (!this.contactForm.privacy) {
      alert("Por favor acepta la pol\xEDtica de privacidad");
      return;
    }
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.subject || !this.contactForm.message) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }
    this.isSubmitting = true;
    setTimeout(() => {
      console.log("Formulario enviado:", this.contactForm);
      this.isSubmitting = false;
      this.submitted = true;
      this.contactForm = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacy: false
      };
      setTimeout(() => {
        this.submitted = false;
      }, 5e3);
    }, 2e3);
  }
  openWhatsApp() {
    const message = `Hola, me gustar\xEDa obtener m\xE1s informaci\xF3n sobre Ma'Care.`;
    window.open(`https://wa.me/34600000000?text=${encodeURIComponent(message)}`, "_blank");
  }
  sendEmail() {
    const subject = "Consulta MaCare";
    const body = "Hola, me gustar\xEDa obtener m\xE1s informaci\xF3n sobre sus servicios...";
    window.location.href = `mailto:hola@macare.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  makeCall() {
    window.location.href = "tel:+34910000000";
  }
  openMaps() {
    window.open("https://maps.google.com/?q=Calle+Esperanza+123,+Madrid,+Espa\xF1a", "_blank");
  }
  static \u0275fac = function Contacto_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contacto)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Contacto, selectors: [["app-contacto"]], decls: 214, vars: 18, consts: [["form", "ngForm"], [1, "contacto-section"], [1, "floating-background"], ["class", "floating-element", 3, "width", "height", "left", "animation-delay", "animation-duration", 4, "ngFor", "ngForOf"], [1, "container"], [1, "contact-header"], [1, "header-title"], [1, "header-subtitle"], ["class", "success-message", 4, "ngIf"], [1, "contact-grid"], [1, "contact-form-section"], [1, "form-card"], [1, "form-header"], [1, "form-icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"], [1, "contact-form", 3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["for", "name"], [1, "input-container"], [1, "input-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"], ["type", "text", "id", "name", "name", "name", "placeholder", "Mar\xEDa Garc\xEDa L\xF3pez", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "input-focus-border"], ["for", "email"], ["d", "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"], ["type", "email", "id", "email", "name", "email", "placeholder", "maria@ejemplo.com", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "phone"], ["d", "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"], ["type", "tel", "id", "phone", "name", "phone", "placeholder", "+34 600 000 000", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "subject"], ["d", "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z"], ["id", "subject", "name", "subject", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "emotional-support"], ["value", "resources"], ["value", "appointment"], ["value", "group"], ["value", "partnership"], ["value", "other"], [1, "select-arrow"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"], ["for", "message"], [1, "input-container", "textarea-container"], ["d", "M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18"], ["id", "message", "name", "message", "placeholder", "Cu\xE9ntanos m\xE1s sobre tu situaci\xF3n y c\xF3mo podemos ayudarte...", "rows", "5", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-checkbox"], [1, "checkbox-container"], ["type", "checkbox", "name", "privacy", "required", "", 3, "ngModelChange", "ngModel"], [1, "checkmark"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"], [1, "checkbox-text"], ["href", "#", 1, "privacy-link"], ["type", "submit", 1, "submit-btn", 3, "disabled"], [1, "btn-content"], [1, "btn-text"], ["class", "btn-loader", 4, "ngIf"], ["class", "btn-icon", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor", 4, "ngIf"], [1, "btn-shine"], [1, "channels-section"], [1, "quick-actions"], [1, "actions-header"], [1, "action-buttons"], [1, "action-btn", "whatsapp-btn", 3, "click", "disabled"], [1, "action-glow"], [1, "btn-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.56C9.43,11.15 9.41,11.22 9.72,11.73C10.15,12.5 10.61,13 11.08,13.5C11.58,14 12.09,14.5 12.89,14.83C13.14,14.94 13.3,14.9 13.43,14.75L13.66,14.5L14,14.2C14.07,14.14 14.19,14.08 14.32,14.13L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"], [1, "btn-badge"], [1, "action-btn", "phone-btn", 3, "click", "disabled"], [1, "action-btn", "email-btn", 3, "click", "disabled"], [1, "info-cards"], [1, "info-card", "address-card"], [1, "card-glow"], [1, "card-content"], [1, "card-icon"], ["d", "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"], [1, "card-btn", 3, "click", "disabled"], ["d", "M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"], [1, "info-card", "schedule-card"], ["d", "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.7L16.2,16.2Z"], [1, "schedule-list"], [1, "schedule-item"], [1, "schedule-item", "emergency"], [1, "contact-stats"], [1, "stat-item"], [1, "stat-icon"], [1, "stat-number"], [1, "stat-label"], [1, "floating-element"], [1, "success-message"], [1, "success-content"], [1, "success-icon"], [1, "success-text"], [1, "btn-loader"], [1, "loader-dots"], [1, "dot"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "btn-icon"], ["d", "M2,21L23,12L2,3V10L17,12L2,14V21Z"]], template: function Contacto_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2);
      \u0275\u0275template(2, Contacto_div_2_Template, 1, 10, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "h1", 6);
      \u0275\u0275text(6, "Hablemos, estamos aqu\xED para ti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 7);
      \u0275\u0275text(8, " Cada conversaci\xF3n es un paso hacia tu bienestar. Elige la forma que m\xE1s te convenga. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, Contacto_div_9_Template, 10, 0, "div", 8);
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 14);
      \u0275\u0275element(16, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "h2");
      \u0275\u0275text(18, "Env\xEDanos un mensaje");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p");
      \u0275\u0275text(20, "Te responderemos en menos de 24 horas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "form", 16, 0);
      \u0275\u0275listener("ngSubmit", function Contacto_Template_form_ngSubmit_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(23, "div", 17)(24, "div", 18)(25, "label", 19);
      \u0275\u0275text(26, "Tu nombre completo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 20)(28, "div", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 22);
      \u0275\u0275element(30, "path", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function Contacto_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.name, $event) || (ctx.contactForm.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 18)(34, "label", 26);
      \u0275\u0275text(35, "Correo electr\xF3nico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 20)(37, "div", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 22);
      \u0275\u0275element(39, "path", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(40, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function Contacto_Template_input_ngModelChange_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.email, $event) || (ctx.contactForm.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "div", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 17)(43, "div", 18)(44, "label", 29);
      \u0275\u0275text(45, "Tel\xE9fono (opcional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 20)(47, "div", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 22);
      \u0275\u0275element(49, "path", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(50, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function Contacto_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.phone, $event) || (ctx.contactForm.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 18)(53, "label", 32);
      \u0275\u0275text(54, "Motivo de tu consulta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 20)(56, "div", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(57, "svg", 22);
      \u0275\u0275element(58, "path", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(59, "select", 34);
      \u0275\u0275twoWayListener("ngModelChange", function Contacto_Template_select_ngModelChange_59_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.subject, $event) || (ctx.contactForm.subject = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(60, "option", 35);
      \u0275\u0275text(61, "Selecciona una opci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option", 36);
      \u0275\u0275text(63, "Apoyo emocional");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "option", 37);
      \u0275\u0275text(65, "Informaci\xF3n sobre recursos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "option", 38);
      \u0275\u0275text(67, "Agendar cita con especialista");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "option", 39);
      \u0275\u0275text(69, "Unirme a grupo de apoyo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "option", 40);
      \u0275\u0275text(71, "Colaboraci\xF3n o partnership");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "option", 41);
      \u0275\u0275text(73, "Otro motivo");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(74, "div", 25);
      \u0275\u0275elementStart(75, "div", 42);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(76, "svg", 43);
      \u0275\u0275element(77, "path", 44);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(78, "div", 18)(79, "label", 45);
      \u0275\u0275text(80, "Tu mensaje");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 46)(82, "div", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(83, "svg", 22);
      \u0275\u0275element(84, "path", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(85, "textarea", 48);
      \u0275\u0275twoWayListener("ngModelChange", function Contacto_Template_textarea_ngModelChange_85_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.message, $event) || (ctx.contactForm.message = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 49)(88, "label", 50)(89, "input", 51);
      \u0275\u0275twoWayListener("ngModelChange", function Contacto_Template_input_ngModelChange_89_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contactForm.privacy, $event) || (ctx.contactForm.privacy = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "span", 52);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(91, "svg", 53);
      \u0275\u0275element(92, "path", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(93, "span", 55);
      \u0275\u0275text(94, " Acepto la ");
      \u0275\u0275elementStart(95, "a", 56);
      \u0275\u0275text(96, "pol\xEDtica de privacidad");
      \u0275\u0275elementEnd();
      \u0275\u0275text(97, " y el tratamiento de mis datos ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "button", 57)(99, "span", 58)(100, "span", 59);
      \u0275\u0275text(101);
      \u0275\u0275elementEnd();
      \u0275\u0275template(102, Contacto_span_102_Template, 5, 0, "span", 60)(103, Contacto__svg_svg_103_Template, 2, 0, "svg", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275element(104, "div", 62);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(105, "div", 63)(106, "div", 64)(107, "div", 65)(108, "h3");
      \u0275\u0275text(109, "Contacto inmediato");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "p");
      \u0275\u0275text(111, "Elige la opci\xF3n que prefieras");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 66)(113, "button", 67);
      \u0275\u0275listener("click", function Contacto_Template_button_click_113_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openWhatsApp());
      });
      \u0275\u0275element(114, "div", 68);
      \u0275\u0275elementStart(115, "div", 58)(116, "div", 69);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(117, "svg", 70);
      \u0275\u0275element(118, "path", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(119, "div", 59)(120, "strong");
      \u0275\u0275text(121, "WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "span");
      \u0275\u0275text(123, "Respuesta en minutos");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 72);
      \u0275\u0275text(125, "R\xE1pido");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "button", 73);
      \u0275\u0275listener("click", function Contacto_Template_button_click_126_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.makeCall());
      });
      \u0275\u0275element(127, "div", 68);
      \u0275\u0275elementStart(128, "div", 58)(129, "div", 69);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(130, "svg", 70);
      \u0275\u0275element(131, "path", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(132, "div", 59)(133, "strong");
      \u0275\u0275text(134, "Llamada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136, "910 000 000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 72);
      \u0275\u0275text(138, "Directo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "button", 74);
      \u0275\u0275listener("click", function Contacto_Template_button_click_139_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sendEmail());
      });
      \u0275\u0275element(140, "div", 68);
      \u0275\u0275elementStart(141, "div", 58)(142, "div", 69);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(143, "svg", 70);
      \u0275\u0275element(144, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(145, "div", 59)(146, "strong");
      \u0275\u0275text(147, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "span");
      \u0275\u0275text(149, "hola@macare.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "div", 72);
      \u0275\u0275text(151, "24h");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(152, "div", 75)(153, "div", 76);
      \u0275\u0275element(154, "div", 77);
      \u0275\u0275elementStart(155, "div", 78)(156, "div", 79);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(157, "svg", 14);
      \u0275\u0275element(158, "path", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(159, "h4");
      \u0275\u0275text(160, "Vis\xEDtanos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "p");
      \u0275\u0275text(162, "Calle Esperanza 123, Madrid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "button", 81);
      \u0275\u0275listener("click", function Contacto_Template_button_click_163_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openMaps());
      });
      \u0275\u0275elementStart(164, "span");
      \u0275\u0275text(165, "Ver en mapa");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(166, "svg", 43);
      \u0275\u0275element(167, "path", 82);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(168, "div", 83);
      \u0275\u0275element(169, "div", 77);
      \u0275\u0275elementStart(170, "div", 78)(171, "div", 79);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(172, "svg", 14);
      \u0275\u0275element(173, "path", 84);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(174, "h4");
      \u0275\u0275text(175, "Horarios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 85)(177, "div", 86)(178, "span");
      \u0275\u0275text(179, "Lun - Vie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "span");
      \u0275\u0275text(181, "9:00 - 18:00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "div", 86)(183, "span");
      \u0275\u0275text(184, "S\xE1bados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "span");
      \u0275\u0275text(186, "10:00 - 14:00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "div", 87)(188, "span");
      \u0275\u0275text(189, "Urgencias");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "span");
      \u0275\u0275text(191, "24/7");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(192, "div", 88)(193, "div", 89)(194, "div", 90);
      \u0275\u0275text(195, "\u26A1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div", 91);
      \u0275\u0275text(197, "15 min");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 92);
      \u0275\u0275text(199, "Respuesta promedio WhatsApp");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "div", 89)(201, "div", 90);
      \u0275\u0275text(202, "\u{1F4E7}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "div", 91);
      \u0275\u0275text(204, "24h");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "div", 92);
      \u0275\u0275text(206, "Respuesta email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "div", 89)(208, "div", 90);
      \u0275\u0275text(209, "\u{1F512}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 91);
      \u0275\u0275text(211, "100%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 92);
      \u0275\u0275text(213, "Confidencialidad");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.floatingElements);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.submitted);
      \u0275\u0275advance(22);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.name);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.email);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.phone);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.subject);
      \u0275\u0275advance(26);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.message);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.contactForm.privacy);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("loading", ctx.isSubmitting);
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isSubmitting ? "Enviando..." : "Enviar mensaje");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
      \u0275\u0275advance(10);
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance(24);
      \u0275\u0275property("disabled", ctx.isSubmitting);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, CheckboxRequiredValidator, NgModel, NgForm], styles: ['\n\n.contacto-section[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f7f5ff 0%,\n      #fdfaf5 50%,\n      #fceef3 100%);\n  overflow: hidden;\n  font-family:\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  position: relative;\n  z-index: 2;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n.floating-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n.floating-element[_ngcontent-%COMP%] {\n  position: absolute;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(225, 88, 134, 0.1),\n      rgba(111, 106, 167, 0.1));\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_float 25s infinite ease-in-out;\n  opacity: 0.4;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px) rotate(0deg) scale(1);\n    opacity: 0.3;\n  }\n  33% {\n    transform: translateY(-40px) rotate(120deg) scale(1.2);\n    opacity: 0.6;\n  }\n  66% {\n    transform: translateY(30px) rotate(240deg) scale(0.8);\n    opacity: 0.4;\n  }\n}\n.contact-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5rem 0 3rem;\n}\n.contact-header[_ngcontent-%COMP%]   .header-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886,\n      #6f6aa7);\n  color: #ffffff;\n  padding: 0.75rem 2rem;\n  border-radius: 50px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin-bottom: 2rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out;\n}\n.contact-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #2a2a2a,\n      #6f6aa7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out 0.2s both;\n}\n@media (max-width: 768px) {\n  .contact-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n.contact-header[_ngcontent-%COMP%]   .header-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #6b7280;\n  max-width: 500px;\n  margin: 0 auto;\n  line-height: 1.6;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out 0.4s both;\n}\n@media (max-width: 768px) {\n  .contact-header[_ngcontent-%COMP%]   .header-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.success-message[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5ee,\n      #7fc8a9);\n  color: #2c6a52;\n  border-radius: 20px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_slideIn 0.6s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.success-message[_ngcontent-%COMP%]   .success-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.success-message[_ngcontent-%COMP%]   .success-content[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: #7fc8a9;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n}\n.success-message[_ngcontent-%COMP%]   .success-content[_ngcontent-%COMP%]   .success-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: #2c6a52;\n}\n.success-message[_ngcontent-%COMP%]   .success-content[_ngcontent-%COMP%]   .success-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #2c6a52;\n  opacity: 0.9;\n  margin: 0;\n  line-height: 1.5;\n  font-size: 1rem;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-30px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 4rem;\n  padding: 2rem 0 6rem;\n}\n@media (max-width: 968px) {\n  .contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.contact-form-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 28px;\n  padding: 3rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  position: relative;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out 0.6s both;\n}\n.contact-form-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.1);\n}\n.contact-form-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e15886,\n      #6f6aa7,\n      #7fc8a9);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_gradientShift 3s ease infinite;\n}\n@media (max-width: 768px) {\n  .contact-form-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n    padding: 2rem;\n    border-radius: 24px;\n  }\n}\n@keyframes _ngcontent-%COMP%_gradientShift {\n  0%, 100% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n.form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.form-header[_ngcontent-%COMP%]   .form-icon[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  background:\n    linear-gradient(\n      135deg,\n      #fceef3,\n      #f7f5ff);\n  border-radius: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 2rem;\n  color: #e15886;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.form-header[_ngcontent-%COMP%]   .form-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05) rotate(5deg);\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  margin-bottom: 0.75rem;\n  color: #2a2a2a;\n  background:\n    linear-gradient(\n      135deg,\n      #2a2a2a,\n      #6f6aa7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n.contact-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .contact-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.75rem;\n  font-weight: 700;\n  color: #2a2a2a;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1.25rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  z-index: 2;\n  transition: all 0.3s ease;\n}\n.input-container.textarea-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  transform: none;\n}\n.input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1.25rem 1.25rem 1.25rem 3.5rem;\n  border: 2px solid transparent;\n  border-radius: 16px;\n  font-size: 1.05rem;\n  transition: all 0.3s ease;\n  background:\n    linear-gradient(\n      135deg,\n      #f7f5ff,\n      #ffffff);\n  font-family: inherit;\n  position: relative;\n  z-index: 1;\n}\n.input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: rgb(160.770212766, 165.9234042553, 176.229787234);\n  transition: all 0.3s ease;\n}\n.input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: #ffffff;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(225, 88, 134, 0.15);\n}\n.input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus::placeholder {\n  transform: translateX(5px);\n  opacity: 0.7;\n}\n.input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus    + .input-focus-border[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scaleX(1);\n}\n.input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus    ~ .input-icon[_ngcontent-%COMP%] {\n  color: #e15886;\n  transform: translateY(-50%) scale(1.1);\n}\n.input-container[_ngcontent-%COMP%]   textarea.form-input[_ngcontent-%COMP%] {\n  min-height: 140px;\n  padding-top: 1.5rem;\n  resize: vertical;\n  line-height: 1.5;\n}\n.input-container[_ngcontent-%COMP%]   .input-focus-border[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #e15886,\n      #6f6aa7);\n  border-radius: 0 0 16px 16px;\n  opacity: 0;\n  transform: scaleX(0);\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  z-index: 2;\n}\n.input-container[_ngcontent-%COMP%]   .select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1.25rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  pointer-events: none;\n  z-index: 2;\n  transition: all 0.3s ease;\n}\n.input-container[_ngcontent-%COMP%]   select.form-input[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n.input-container[_ngcontent-%COMP%]   select.form-input[_ngcontent-%COMP%]:focus    ~ .select-arrow[_ngcontent-%COMP%] {\n  color: #e15886;\n  transform: translateY(-50%) rotate(180deg);\n}\n.form-checkbox[_ngcontent-%COMP%] {\n  margin: 2.5rem 0;\n}\n.form-checkbox[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  cursor: pointer;\n  font-size: 0.95rem;\n  color: #2a2a2a;\n  line-height: 1.5;\n  transition: all 0.3s ease;\n}\n.form-checkbox[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n}\n.form-checkbox[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.form-checkbox[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid #ece9ff;\n  border-radius: 6px;\n  margin-right: 1rem;\n  position: relative;\n  transition: all 0.3s ease;\n  background: #ffffff;\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-checkbox[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.8);\n  transition: all 0.3s ease;\n  color: #ffffff;\n}\n.form-checkbox[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {\n  background: #e15886;\n  border-color: #e15886;\n}\n.form-checkbox[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.form-checkbox[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-checkbox[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%]   .privacy-link[_ngcontent-%COMP%] {\n  color: #e15886;\n  text-decoration: none;\n  font-weight: 700;\n  position: relative;\n}\n.form-checkbox[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%]   .privacy-link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: #e15886;\n  transition: width 0.3s ease;\n}\n.form-checkbox[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%]   .privacy-link[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1.5rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886,\n      #6f6aa7);\n  color: #ffffff;\n  border: none;\n  border-radius: 16px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  position: relative;\n  overflow: hidden;\n}\n.submit-btn[_ngcontent-%COMP%]   .btn-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  position: relative;\n  z-index: 2;\n}\n.submit-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.submit-btn[_ngcontent-%COMP%]   .btn-loader[_ngcontent-%COMP%] {\n  display: none;\n}\n.submit-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.submit-btn[_ngcontent-%COMP%]   .btn-shine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  transition: left 0.8s ease;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 40px rgba(225, 88, 134, 0.4);\n}\n.submit-btn[_ngcontent-%COMP%]:hover   .btn-shine[_ngcontent-%COMP%] {\n  left: 100%;\n}\n.submit-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(-1px);\n}\n.submit-btn.loading[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.submit-btn.loading[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.submit-btn.loading[_ngcontent-%COMP%]   .btn-loader[_ngcontent-%COMP%] {\n  display: block;\n}\n.submit-btn.loading[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled:hover {\n  box-shadow: none;\n}\n.loader-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.loader-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ffffff;\n  animation: _ngcontent-%COMP%_dotPulse 1.4s ease-in-out infinite both;\n}\n.loader-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.loader-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_dotPulse {\n  0%, 80%, 100% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n  40% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n}\n.channels-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 2.5rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out 0.8s both;\n}\n.quick-actions[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.1);\n}\n.quick-actions[_ngcontent-%COMP%]   .actions-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.quick-actions[_ngcontent-%COMP%]   .actions-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n  color: #2a2a2a;\n  background:\n    linear-gradient(\n      135deg,\n      #2a2a2a,\n      #6f6aa7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.quick-actions[_ngcontent-%COMP%]   .actions-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.1rem;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px solid #ece9ff;\n  border-radius: 20px;\n  padding: 1.75rem;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  text-align: left;\n  position: relative;\n  overflow: hidden;\n}\n.action-btn[_ngcontent-%COMP%]   .action-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(236, 233, 255, 0.2),\n      transparent);\n  transition: left 0.6s ease;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: transparent;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.1);\n}\n.action-btn[_ngcontent-%COMP%]:hover   .action-glow[_ngcontent-%COMP%] {\n  left: 100%;\n}\n.action-btn[_ngcontent-%COMP%]:hover   .btn-badge[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.action-btn[_ngcontent-%COMP%]   .btn-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  position: relative;\n  z-index: 2;\n}\n.action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.action-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.action-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n  color: #2a2a2a;\n}\n.action-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #6b7280;\n}\n.action-btn[_ngcontent-%COMP%]   .btn-badge[_ngcontent-%COMP%] {\n  background: #ece9ff;\n  color: #6f6aa7;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: all 0.3s ease;\n}\n.whatsapp-btn[_ngcontent-%COMP%] {\n  border-color: rgba(37, 211, 102, 0.3);\n}\n.whatsapp-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #25D366,\n      #128C7E);\n  color: #ffffff;\n}\n.whatsapp-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 15px 40px rgba(37, 211, 102, 0.2);\n}\n.whatsapp-btn[_ngcontent-%COMP%]:hover   .btn-badge[_ngcontent-%COMP%] {\n  background: #25D366;\n  color: #ffffff;\n}\n.phone-btn[_ngcontent-%COMP%] {\n  border-color: rgba(76, 175, 80, 0.3);\n}\n.phone-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4CAF50,\n      rgb(60.5577689243, 139.4422310757, 63.7450199203));\n  color: #ffffff;\n}\n.phone-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 15px 40px rgba(76, 175, 80, 0.2);\n}\n.phone-btn[_ngcontent-%COMP%]:hover   .btn-badge[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  color: #ffffff;\n}\n.email-btn[_ngcontent-%COMP%] {\n  border-color: rgba(234, 67, 53, 0.3);\n}\n.email-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #EA4335,\n      rgb(213.7757847534, 37.0403587444, 22.2242152466));\n  color: #ffffff;\n}\n.email-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 15px 40px rgba(234, 67, 53, 0.2);\n}\n.email-btn[_ngcontent-%COMP%]:hover   .btn-badge[_ngcontent-%COMP%] {\n  background: #EA4335;\n  color: #ffffff;\n}\n.info-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.75rem;\n}\n@media (max-width: 768px) {\n  .info-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  position: relative;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out 1s both;\n}\n.info-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.1);\n}\n.info-card[_ngcontent-%COMP%]   .card-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    conic-gradient(\n      from 0deg,\n      transparent,\n      rgba(247, 211, 225, 0.1),\n      transparent);\n  opacity: 0;\n  transition: all 0.8s ease;\n}\n.info-card[_ngcontent-%COMP%]:hover   .card-glow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1.1);\n}\n.card-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.card-content[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n}\n.card-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  margin-bottom: 0.75rem;\n  color: #2a2a2a;\n}\n.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n  line-height: 1.5;\n  font-size: 1rem;\n}\n.address-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5ee,\n      #7fc8a9);\n  color: #ffffff;\n}\n.schedule-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ece9ff,\n      #6f6aa7);\n  color: #ffffff;\n}\n.schedule-list[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #ece9ff;\n}\n.schedule-list[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.schedule-list[_ngcontent-%COMP%]   .schedule-item.emergency[_ngcontent-%COMP%] {\n  color: #FF6B6B;\n  font-weight: 700;\n  background: rgba(255, 107, 107, 0.05);\n  margin: 0 -1rem;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 107, 107, 0.2);\n}\n.card-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: transparent;\n  border: 2px solid #ece9ff;\n  color: #6f6aa7;\n  padding: 0.75rem 1.25rem;\n  border-radius: 12px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.card-btn[_ngcontent-%COMP%]:hover {\n  background: #ece9ff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(111, 106, 167, 0.2);\n}\n.contact-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out 1.2s both;\n}\n@media (max-width: 480px) {\n  .contact-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-item[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #e15886;\n  margin-bottom: 0.5rem;\n}\n.stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6b7280;\n  line-height: 1.3;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .contact-header[_ngcontent-%COMP%] {\n    padding: 3rem 0 2rem;\n  }\n  .contact-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  .contact-header[_ngcontent-%COMP%]   .header-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .contact-grid[_ngcontent-%COMP%] {\n    padding: 1rem 0 4rem;\n    gap: 2.5rem;\n  }\n  .form-header[_ngcontent-%COMP%]   .form-icon[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n  }\n  .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .input-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n    padding: 1.1rem 1.1rem 1.1rem 3rem;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n  .quick-actions[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    padding: 1.75rem;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .contact-form-section[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n    padding: 1.75rem;\n    border-radius: 20px;\n  }\n  .contact-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .submit-btn[_ngcontent-%COMP%] {\n    padding: 1.25rem 1.5rem;\n    font-size: 1.1rem;\n  }\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\nbutton[_ngcontent-%COMP%]:disabled:hover {\n  transform: none !important;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=contacto.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Contacto, [{
    type: Component,
    args: [{ selector: "app-contacto", imports: [CommonModule, FormsModule], template: `<section class="contacto-section">\r
  <!-- Floating Background Elements -->\r
  <div class="floating-background">\r
    <div class="floating-element" \r
         *ngFor="let element of floatingElements"\r
         [style.width.px]="element.size"\r
         [style.height.px]="element.size"\r
         [style.left.%]="element.left"\r
         [style.animation-delay.s]="element.delay"\r
         [style.animation-duration.s]="element.duration">\r
    </div>\r
  </div>\r
\r
  <div class="container">\r
    <!-- Header Section -->\r
    <div class="contact-header">\r
      <h1 class="header-title">Hablemos, estamos aqu\xED para ti</h1>\r
      <p class="header-subtitle">\r
        Cada conversaci\xF3n es un paso hacia tu bienestar. Elige la forma que m\xE1s te convenga.\r
      </p>\r
    </div>\r
\r
    <!-- Success Message -->\r
    <div *ngIf="submitted" class="success-message">\r
      <div class="success-content">\r
        <div class="success-icon">\r
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">\r
            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
          </svg>\r
        </div>\r
        <div class="success-text">\r
          <h3>\xA1Mensaje enviado con \xE9xito!</h3>\r
          <p>Te contactaremos en menos de 24 horas. Gracias por confiar en nosotros.</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Main Contact Grid -->\r
    <div class="contact-grid">\r
      <!-- Contact Form -->\r
      <div class="contact-form-section">\r
        <div class="form-card">\r
          <div class="form-header">\r
            <div class="form-icon">\r
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>\r
              </svg>\r
            </div>\r
            <h2>Env\xEDanos un mensaje</h2>\r
            <p>Te responderemos en menos de 24 horas</p>\r
          </div>\r
\r
          <form class="contact-form" (ngSubmit)="onSubmit()" #form="ngForm">\r
            <div class="form-row">\r
              <div class="form-group">\r
                <label for="name">Tu nombre completo</label>\r
                <div class="input-container">\r
                  <div class="input-icon">\r
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                      <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>\r
                    </svg>\r
                  </div>\r
                  <input \r
                    type="text" \r
                    id="name" \r
                    [(ngModel)]="contactForm.name" \r
                    name="name"\r
                    placeholder="Mar\xEDa Garc\xEDa L\xF3pez"\r
                    required\r
                    class="form-input">\r
                  <div class="input-focus-border"></div>\r
                </div>\r
              </div>\r
\r
              <div class="form-group">\r
                <label for="email">Correo electr\xF3nico</label>\r
                <div class="input-container">\r
                  <div class="input-icon">\r
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                      <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"/>\r
                    </svg>\r
                  </div>\r
                  <input \r
                    type="email" \r
                    id="email" \r
                    [(ngModel)]="contactForm.email" \r
                    name="email"\r
                    placeholder="maria@ejemplo.com"\r
                    required\r
                    class="form-input">\r
                  <div class="input-focus-border"></div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="form-row">\r
              <div class="form-group">\r
                <label for="phone">Tel\xE9fono (opcional)</label>\r
                <div class="input-container">\r
                  <div class="input-icon">\r
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                      <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>\r
                    </svg>\r
                  </div>\r
                  <input \r
                    type="tel" \r
                    id="phone" \r
                    [(ngModel)]="contactForm.phone" \r
                    name="phone"\r
                    placeholder="+34 600 000 000"\r
                    class="form-input">\r
                  <div class="input-focus-border"></div>\r
                </div>\r
              </div>\r
\r
              <div class="form-group">\r
                <label for="subject">Motivo de tu consulta</label>\r
                <div class="input-container">\r
                  <div class="input-icon">\r
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                      <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z"/>\r
                    </svg>\r
                  </div>\r
                  <select \r
                    id="subject" \r
                    [(ngModel)]="contactForm.subject" \r
                    name="subject"\r
                    required\r
                    class="form-input">\r
                    <option value="">Selecciona una opci\xF3n</option>\r
                    <option value="emotional-support">Apoyo emocional</option>\r
                    <option value="resources">Informaci\xF3n sobre recursos</option>\r
                    <option value="appointment">Agendar cita con especialista</option>\r
                    <option value="group">Unirme a grupo de apoyo</option>\r
                    <option value="partnership">Colaboraci\xF3n o partnership</option>\r
                    <option value="other">Otro motivo</option>\r
                  </select>\r
                  <div class="input-focus-border"></div>\r
                  <div class="select-arrow">\r
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">\r
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>\r
                    </svg>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="message">Tu mensaje</label>\r
              <div class="input-container textarea-container">\r
                <div class="input-icon">\r
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                    <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18"/>\r
                  </svg>\r
                </div>\r
                <textarea \r
                  id="message" \r
                  [(ngModel)]="contactForm.message" \r
                  name="message"\r
                  placeholder="Cu\xE9ntanos m\xE1s sobre tu situaci\xF3n y c\xF3mo podemos ayudarte..."\r
                  rows="5"\r
                  required\r
                  class="form-input"></textarea>\r
                <div class="input-focus-border"></div>\r
              </div>\r
            </div>\r
\r
            <div class="form-checkbox">\r
              <label class="checkbox-container">\r
                <input \r
                  type="checkbox" \r
                  [(ngModel)]="contactForm.privacy" \r
                  name="privacy"\r
                  required>\r
                <span class="checkmark">\r
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">\r
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                  </svg>\r
                </span>\r
                <span class="checkbox-text">\r
                  Acepto la <a href="#" class="privacy-link">pol\xEDtica de privacidad</a> y el tratamiento de mis datos\r
                </span>\r
              </label>\r
            </div>\r
\r
            <button type="submit" class="submit-btn" [class.loading]="isSubmitting" [disabled]="isSubmitting">\r
              <span class="btn-content">\r
                <span class="btn-text">{{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}</span>\r
                <span class="btn-loader" *ngIf="isSubmitting">\r
                  <div class="loader-dots">\r
                    <div class="dot"></div>\r
                    <div class="dot"></div>\r
                    <div class="dot"></div>\r
                  </div>\r
                </span>\r
                <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" *ngIf="!isSubmitting">\r
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>\r
                </svg>\r
              </span>\r
              <div class="btn-shine"></div>\r
            </button>\r
          </form>\r
        </div>\r
      </div>\r
\r
      <!-- Contact Channels -->\r
      <div class="channels-section">\r
        <!-- Quick Actions -->\r
        <div class="quick-actions">\r
          <div class="actions-header">\r
            <h3>Contacto inmediato</h3>\r
            <p>Elige la opci\xF3n que prefieras</p>\r
          </div>\r
          \r
          <div class="action-buttons">\r
            <button class="action-btn whatsapp-btn" (click)="openWhatsApp()" [disabled]="isSubmitting">\r
              <div class="action-glow"></div>\r
              <div class="btn-content">\r
                <div class="btn-icon">\r
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">\r
                    <path d="M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.56C9.43,11.15 9.41,11.22 9.72,11.73C10.15,12.5 10.61,13 11.08,13.5C11.58,14 12.09,14.5 12.89,14.83C13.14,14.94 13.3,14.9 13.43,14.75L13.66,14.5L14,14.2C14.07,14.14 14.19,14.08 14.32,14.13L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>\r
                  </svg>\r
                </div>\r
                <div class="btn-text">\r
                  <strong>WhatsApp</strong>\r
                  <span>Respuesta en minutos</span>\r
                </div>\r
              </div>\r
              <div class="btn-badge">R\xE1pido</div>\r
            </button>\r
\r
            <button class="action-btn phone-btn" (click)="makeCall()" [disabled]="isSubmitting">\r
              <div class="action-glow"></div>\r
              <div class="btn-content">\r
                <div class="btn-icon">\r
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">\r
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>\r
                  </svg>\r
                </div>\r
                <div class="btn-text">\r
                  <strong>Llamada</strong>\r
                  <span>910 000 000</span>\r
                </div>\r
              </div>\r
              <div class="btn-badge">Directo</div>\r
            </button>\r
\r
            <button class="action-btn email-btn" (click)="sendEmail()" [disabled]="isSubmitting">\r
              <div class="action-glow"></div>\r
              <div class="btn-content">\r
                <div class="btn-icon">\r
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">\r
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>\r
                  </svg>\r
                </div>\r
                <div class="btn-text">\r
                  <strong>Email</strong>\r
                  <span>hola@macare.com</span>\r
                </div>\r
              </div>\r
              <div class="btn-badge">24h</div>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Info Cards -->\r
        <div class="info-cards">\r
          <div class="info-card address-card">\r
            <div class="card-glow"></div>\r
            <div class="card-content">\r
              <div class="card-icon">\r
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>\r
                </svg>\r
              </div>\r
              <h4>Vis\xEDtanos</h4>\r
              <p>Calle Esperanza 123, Madrid</p>\r
              <button class="card-btn" (click)="openMaps()" [disabled]="isSubmitting">\r
                <span>Ver en mapa</span>\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"/>\r
                </svg>\r
              </button>\r
            </div>\r
          </div>\r
\r
          <div class="info-card schedule-card">\r
            <div class="card-glow"></div>\r
            <div class="card-content">\r
              <div class="card-icon">\r
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.7L16.2,16.2Z"/>\r
                </svg>\r
              </div>\r
              <h4>Horarios</h4>\r
              <div class="schedule-list">\r
                <div class="schedule-item">\r
                  <span>Lun - Vie</span>\r
                  <span>9:00 - 18:00</span>\r
                </div>\r
                <div class="schedule-item">\r
                  <span>S\xE1bados</span>\r
                  <span>10:00 - 14:00</span>\r
                </div>\r
                <div class="schedule-item emergency">\r
                  <span>Urgencias</span>\r
                  <span>24/7</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Stats -->\r
        <div class="contact-stats">\r
          <div class="stat-item">\r
            <div class="stat-icon">\u26A1</div>\r
            <div class="stat-number">15 min</div>\r
            <div class="stat-label">Respuesta promedio WhatsApp</div>\r
          </div>\r
          <div class="stat-item">\r
            <div class="stat-icon">\u{1F4E7}</div>\r
            <div class="stat-number">24h</div>\r
            <div class="stat-label">Respuesta email</div>\r
          </div>\r
          <div class="stat-item">\r
            <div class="stat-icon">\u{1F512}</div>\r
            <div class="stat-number">100%</div>\r
            <div class="stat-label">Confidencialidad</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>`, styles: ['/* src/app/pages/contacto/contacto.scss */\n.contacto-section {\n  position: relative;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f7f5ff 0%,\n      #fdfaf5 50%,\n      #fceef3 100%);\n  overflow: hidden;\n  font-family:\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  position: relative;\n  z-index: 2;\n}\n@media (max-width: 768px) {\n  .container {\n    padding: 0 1rem;\n  }\n}\n.floating-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n.floating-element {\n  position: absolute;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(225, 88, 134, 0.1),\n      rgba(111, 106, 167, 0.1));\n  border-radius: 50%;\n  animation: float 25s infinite ease-in-out;\n  opacity: 0.4;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0px) rotate(0deg) scale(1);\n    opacity: 0.3;\n  }\n  33% {\n    transform: translateY(-40px) rotate(120deg) scale(1.2);\n    opacity: 0.6;\n  }\n  66% {\n    transform: translateY(30px) rotate(240deg) scale(0.8);\n    opacity: 0.4;\n  }\n}\n.contact-header {\n  text-align: center;\n  padding: 5rem 0 3rem;\n}\n.contact-header .header-badge {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886,\n      #6f6aa7);\n  color: #ffffff;\n  padding: 0.75rem 2rem;\n  border-radius: 50px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin-bottom: 2rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  animation: fadeInUp 0.8s ease-out;\n}\n.contact-header .header-title {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #2a2a2a,\n      #6f6aa7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: fadeInUp 0.8s ease-out 0.2s both;\n}\n@media (max-width: 768px) {\n  .contact-header .header-title {\n    font-size: 2.5rem;\n  }\n}\n.contact-header .header-subtitle {\n  font-size: 1.3rem;\n  color: #6b7280;\n  max-width: 500px;\n  margin: 0 auto;\n  line-height: 1.6;\n  animation: fadeInUp 0.8s ease-out 0.4s both;\n}\n@media (max-width: 768px) {\n  .contact-header .header-subtitle {\n    font-size: 1.1rem;\n  }\n}\n.success-message {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5ee,\n      #7fc8a9);\n  color: #2c6a52;\n  border-radius: 20px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  animation: slideIn 0.6s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.success-message .success-content {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.success-message .success-content .success-icon {\n  width: 60px;\n  height: 60px;\n  background: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: #7fc8a9;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n}\n.success-message .success-content .success-text h3 {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  color: #2c6a52;\n}\n.success-message .success-content .success-text p {\n  color: #2c6a52;\n  opacity: 0.9;\n  margin: 0;\n  line-height: 1.5;\n  font-size: 1rem;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-30px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.contact-grid {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 4rem;\n  padding: 2rem 0 6rem;\n}\n@media (max-width: 968px) {\n  .contact-grid {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.contact-form-section .form-card {\n  background: #ffffff;\n  border-radius: 28px;\n  padding: 3rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  position: relative;\n  overflow: hidden;\n  animation: fadeInUp 0.8s ease-out 0.6s both;\n}\n.contact-form-section .form-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.1);\n}\n.contact-form-section .form-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e15886,\n      #6f6aa7,\n      #7fc8a9);\n  background-size: 200% 100%;\n  animation: gradientShift 3s ease infinite;\n}\n@media (max-width: 768px) {\n  .contact-form-section .form-card {\n    padding: 2rem;\n    border-radius: 24px;\n  }\n}\n@keyframes gradientShift {\n  0%, 100% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n.form-header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.form-header .form-icon {\n  width: 90px;\n  height: 90px;\n  background:\n    linear-gradient(\n      135deg,\n      #fceef3,\n      #f7f5ff);\n  border-radius: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 2rem;\n  color: #e15886;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n}\n.form-header .form-icon:hover {\n  transform: scale(1.05) rotate(5deg);\n}\n.form-header h2 {\n  font-size: 2rem;\n  font-weight: 800;\n  margin-bottom: 0.75rem;\n  color: #2a2a2a;\n  background:\n    linear-gradient(\n      135deg,\n      #2a2a2a,\n      #6f6aa7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.form-header p {\n  color: #6b7280;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n.contact-form .form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .contact-form .form-row {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.contact-form .form-group {\n  margin-bottom: 2rem;\n}\n.contact-form .form-group label {\n  display: block;\n  margin-bottom: 0.75rem;\n  font-weight: 700;\n  color: #2a2a2a;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.input-container {\n  position: relative;\n}\n.input-container .input-icon {\n  position: absolute;\n  left: 1.25rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  z-index: 2;\n  transition: all 0.3s ease;\n}\n.input-container.textarea-container .input-icon {\n  top: 1.5rem;\n  transform: none;\n}\n.input-container .form-input {\n  width: 100%;\n  padding: 1.25rem 1.25rem 1.25rem 3.5rem;\n  border: 2px solid transparent;\n  border-radius: 16px;\n  font-size: 1.05rem;\n  transition: all 0.3s ease;\n  background:\n    linear-gradient(\n      135deg,\n      #f7f5ff,\n      #ffffff);\n  font-family: inherit;\n  position: relative;\n  z-index: 1;\n}\n.input-container .form-input::placeholder {\n  color: rgb(160.770212766, 165.9234042553, 176.229787234);\n  transition: all 0.3s ease;\n}\n.input-container .form-input:focus {\n  outline: none;\n  background: #ffffff;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(225, 88, 134, 0.15);\n}\n.input-container .form-input:focus::placeholder {\n  transform: translateX(5px);\n  opacity: 0.7;\n}\n.input-container .form-input:focus + .input-focus-border {\n  opacity: 1;\n  transform: scaleX(1);\n}\n.input-container .form-input:focus ~ .input-icon {\n  color: #e15886;\n  transform: translateY(-50%) scale(1.1);\n}\n.input-container textarea.form-input {\n  min-height: 140px;\n  padding-top: 1.5rem;\n  resize: vertical;\n  line-height: 1.5;\n}\n.input-container .input-focus-border {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #e15886,\n      #6f6aa7);\n  border-radius: 0 0 16px 16px;\n  opacity: 0;\n  transform: scaleX(0);\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  z-index: 2;\n}\n.input-container .select-arrow {\n  position: absolute;\n  right: 1.25rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n  pointer-events: none;\n  z-index: 2;\n  transition: all 0.3s ease;\n}\n.input-container select.form-input {\n  appearance: none;\n  cursor: pointer;\n}\n.input-container select.form-input:focus ~ .select-arrow {\n  color: #e15886;\n  transform: translateY(-50%) rotate(180deg);\n}\n.form-checkbox {\n  margin: 2.5rem 0;\n}\n.form-checkbox .checkbox-container {\n  display: flex;\n  align-items: flex-start;\n  cursor: pointer;\n  font-size: 0.95rem;\n  color: #2a2a2a;\n  line-height: 1.5;\n  transition: all 0.3s ease;\n}\n.form-checkbox .checkbox-container:hover {\n  transform: translateX(5px);\n}\n.form-checkbox .checkbox-container input {\n  display: none;\n}\n.form-checkbox .checkbox-container .checkmark {\n  width: 24px;\n  height: 24px;\n  border: 2px solid #ece9ff;\n  border-radius: 6px;\n  margin-right: 1rem;\n  position: relative;\n  transition: all 0.3s ease;\n  background: #ffffff;\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-checkbox .checkbox-container .checkmark svg {\n  opacity: 0;\n  transform: scale(0.8);\n  transition: all 0.3s ease;\n  color: #ffffff;\n}\n.form-checkbox .checkbox-container input:checked + .checkmark {\n  background: #e15886;\n  border-color: #e15886;\n}\n.form-checkbox .checkbox-container input:checked + .checkmark svg {\n  opacity: 1;\n  transform: scale(1);\n}\n.form-checkbox .checkbox-container .checkbox-text {\n  flex: 1;\n}\n.form-checkbox .checkbox-container .checkbox-text .privacy-link {\n  color: #e15886;\n  text-decoration: none;\n  font-weight: 700;\n  position: relative;\n}\n.form-checkbox .checkbox-container .checkbox-text .privacy-link::after {\n  content: "";\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: #e15886;\n  transition: width 0.3s ease;\n}\n.form-checkbox .checkbox-container .checkbox-text .privacy-link:hover::after {\n  width: 100%;\n}\n.submit-btn {\n  width: 100%;\n  padding: 1.5rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886,\n      #6f6aa7);\n  color: #ffffff;\n  border: none;\n  border-radius: 16px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  position: relative;\n  overflow: hidden;\n}\n.submit-btn .btn-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  position: relative;\n  z-index: 2;\n}\n.submit-btn .btn-text {\n  transition: all 0.3s ease;\n}\n.submit-btn .btn-loader {\n  display: none;\n}\n.submit-btn .btn-icon {\n  transition: all 0.3s ease;\n}\n.submit-btn .btn-shine {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  transition: left 0.8s ease;\n}\n.submit-btn:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 40px rgba(225, 88, 134, 0.4);\n}\n.submit-btn:hover .btn-shine {\n  left: 100%;\n}\n.submit-btn:active {\n  transform: translateY(-1px);\n}\n.submit-btn.loading {\n  pointer-events: none;\n}\n.submit-btn.loading .btn-text {\n  opacity: 0;\n}\n.submit-btn.loading .btn-loader {\n  display: block;\n}\n.submit-btn.loading .btn-icon {\n  opacity: 0;\n}\n.submit-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.submit-btn:disabled:hover {\n  box-shadow: none;\n}\n.loader-dots {\n  display: flex;\n  gap: 4px;\n}\n.loader-dots .dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ffffff;\n  animation: dotPulse 1.4s ease-in-out infinite both;\n}\n.loader-dots .dot:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.loader-dots .dot:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes dotPulse {\n  0%, 80%, 100% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n  40% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n}\n.channels-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2.5rem;\n}\n.quick-actions {\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 2.5rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  animation: fadeInUp 0.8s ease-out 0.8s both;\n}\n.quick-actions:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.1);\n}\n.quick-actions .actions-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.quick-actions .actions-header h3 {\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n  color: #2a2a2a;\n  background:\n    linear-gradient(\n      135deg,\n      #2a2a2a,\n      #6f6aa7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.quick-actions .actions-header p {\n  color: #6b7280;\n  font-size: 1.1rem;\n}\n.action-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.action-btn {\n  background: #ffffff;\n  border: 2px solid #ece9ff;\n  border-radius: 20px;\n  padding: 1.75rem;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  text-align: left;\n  position: relative;\n  overflow: hidden;\n}\n.action-btn .action-glow {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(236, 233, 255, 0.2),\n      transparent);\n  transition: left 0.6s ease;\n}\n.action-btn:hover {\n  transform: translateY(-5px);\n  border-color: transparent;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.1);\n}\n.action-btn:hover .action-glow {\n  left: 100%;\n}\n.action-btn:hover .btn-badge {\n  transform: scale(1.1);\n}\n.action-btn .btn-content {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  position: relative;\n  z-index: 2;\n}\n.action-btn .btn-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.action-btn .btn-text {\n  flex: 1;\n}\n.action-btn .btn-text strong {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n  color: #2a2a2a;\n}\n.action-btn .btn-text span {\n  font-size: 0.95rem;\n  color: #6b7280;\n}\n.action-btn .btn-badge {\n  background: #ece9ff;\n  color: #6f6aa7;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: all 0.3s ease;\n}\n.whatsapp-btn {\n  border-color: rgba(37, 211, 102, 0.3);\n}\n.whatsapp-btn .btn-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #25D366,\n      #128C7E);\n  color: #ffffff;\n}\n.whatsapp-btn:hover {\n  box-shadow: 0 15px 40px rgba(37, 211, 102, 0.2);\n}\n.whatsapp-btn:hover .btn-badge {\n  background: #25D366;\n  color: #ffffff;\n}\n.phone-btn {\n  border-color: rgba(76, 175, 80, 0.3);\n}\n.phone-btn .btn-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #4CAF50,\n      rgb(60.5577689243, 139.4422310757, 63.7450199203));\n  color: #ffffff;\n}\n.phone-btn:hover {\n  box-shadow: 0 15px 40px rgba(76, 175, 80, 0.2);\n}\n.phone-btn:hover .btn-badge {\n  background: #4CAF50;\n  color: #ffffff;\n}\n.email-btn {\n  border-color: rgba(234, 67, 53, 0.3);\n}\n.email-btn .btn-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #EA4335,\n      rgb(213.7757847534, 37.0403587444, 22.2242152466));\n  color: #ffffff;\n}\n.email-btn:hover {\n  box-shadow: 0 15px 40px rgba(234, 67, 53, 0.2);\n}\n.email-btn:hover .btn-badge {\n  background: #EA4335;\n  color: #ffffff;\n}\n.info-cards {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.75rem;\n}\n@media (max-width: 768px) {\n  .info-cards {\n    grid-template-columns: 1fr;\n  }\n}\n.info-card {\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  position: relative;\n  overflow: hidden;\n  animation: fadeInUp 0.8s ease-out 1s both;\n}\n.info-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.1);\n}\n.info-card .card-glow {\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    conic-gradient(\n      from 0deg,\n      transparent,\n      rgba(247, 211, 225, 0.1),\n      transparent);\n  opacity: 0;\n  transition: all 0.8s ease;\n}\n.info-card:hover .card-glow {\n  opacity: 1;\n  transform: scale(1.1);\n}\n.card-content {\n  position: relative;\n  z-index: 2;\n}\n.card-content .card-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n}\n.card-content h4 {\n  font-size: 1.2rem;\n  font-weight: 800;\n  margin-bottom: 0.75rem;\n  color: #2a2a2a;\n}\n.card-content p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n  line-height: 1.5;\n  font-size: 1rem;\n}\n.address-card .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5ee,\n      #7fc8a9);\n  color: #ffffff;\n}\n.schedule-card .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #ece9ff,\n      #6f6aa7);\n  color: #ffffff;\n}\n.schedule-list .schedule-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #ece9ff;\n}\n.schedule-list .schedule-item:last-child {\n  border-bottom: none;\n}\n.schedule-list .schedule-item.emergency {\n  color: #FF6B6B;\n  font-weight: 700;\n  background: rgba(255, 107, 107, 0.05);\n  margin: 0 -1rem;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 107, 107, 0.2);\n}\n.card-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: transparent;\n  border: 2px solid #ece9ff;\n  color: #6f6aa7;\n  padding: 0.75rem 1.25rem;\n  border-radius: 12px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.card-btn:hover {\n  background: #ece9ff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(111, 106, 167, 0.2);\n}\n.contact-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  animation: fadeInUp 0.8s ease-out 1.2s both;\n}\n@media (max-width: 480px) {\n  .contact-stats {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-item {\n  text-align: center;\n}\n.stat-item .stat-icon {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.stat-item .stat-number {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #e15886;\n  margin-bottom: 0.5rem;\n}\n.stat-item .stat-label {\n  font-size: 0.85rem;\n  color: #6b7280;\n  line-height: 1.3;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .contact-header {\n    padding: 3rem 0 2rem;\n  }\n  .contact-header .header-title {\n    font-size: 2.2rem;\n  }\n  .contact-header .header-subtitle {\n    font-size: 1.1rem;\n  }\n  .contact-grid {\n    padding: 1rem 0 4rem;\n    gap: 2.5rem;\n  }\n  .form-header .form-icon {\n    width: 70px;\n    height: 70px;\n  }\n  .form-header h2 {\n    font-size: 1.6rem;\n  }\n  .input-container .form-input {\n    padding: 1.1rem 1.1rem 1.1rem 3rem;\n  }\n  .action-btn {\n    padding: 1.5rem;\n  }\n  .action-btn .btn-icon {\n    width: 48px;\n    height: 48px;\n  }\n  .quick-actions {\n    padding: 2rem;\n  }\n  .info-card {\n    padding: 1.75rem;\n  }\n}\n@media (max-width: 480px) {\n  .container {\n    padding: 0 1rem;\n  }\n  .contact-form-section .form-card {\n    padding: 1.75rem;\n    border-radius: 20px;\n  }\n  .contact-header .header-title {\n    font-size: 1.8rem;\n  }\n  .submit-btn {\n    padding: 1.25rem 1.5rem;\n    font-size: 1.1rem;\n  }\n}\nbutton:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\nbutton:disabled:hover {\n  transform: none !important;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=contacto.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Contacto, { className: "Contacto", filePath: "src/app/pages/contacto/contacto.ts", lineNumber: 11 });
})();
export {
  Contacto
};
//# sourceMappingURL=chunk-YEEYBLM3.js.map
