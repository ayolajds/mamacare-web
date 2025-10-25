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
  NgIf,
  TitleCasePipe
} from "./chunk-Q4BX36PF.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DEJWN6HZ.js";

// src/app/pages/auth/profile/profile.ts
function Profile_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "h2");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 17);
    \u0275\u0275element(4, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Cambiar Contrase\xF1a ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 19);
    \u0275\u0275listener("click", function Profile_div_0_div_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPasswordForm = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 20);
    \u0275\u0275element(8, "path", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "form", 22);
    \u0275\u0275listener("ngSubmit", function Profile_div_0_div_15_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updatePassword());
    });
    \u0275\u0275elementStart(10, "div", 23)(11, "label");
    \u0275\u0275text(12, "Contrase\xF1a Actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 24)(14, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function Profile_div_0_div_15_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.passwordData.currentPassword, $event) || (ctx_r1.passwordData.currentPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 26);
    \u0275\u0275listener("click", function Profile_div_0_div_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePasswordVisibility("current"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 20);
    \u0275\u0275element(17, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "svg", 20);
    \u0275\u0275element(19, "path", 28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 23)(21, "label");
    \u0275\u0275text(22, "Nueva Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 24)(24, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function Profile_div_0_div_15_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.passwordData.newPassword, $event) || (ctx_r1.passwordData.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 26);
    \u0275\u0275listener("click", function Profile_div_0_div_15_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePasswordVisibility("new"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 20);
    \u0275\u0275element(27, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "svg", 20);
    \u0275\u0275element(29, "path", 28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 23)(31, "label");
    \u0275\u0275text(32, "Confirmar Nueva Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 24)(34, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function Profile_div_0_div_15_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.passwordData.confirmPassword, $event) || (ctx_r1.passwordData.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 26);
    \u0275\u0275listener("click", function Profile_div_0_div_15_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePasswordVisibility("confirm"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 20);
    \u0275\u0275element(37, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "svg", 20);
    \u0275\u0275element(39, "path", 28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "div", 31)(41, "button", 32);
    \u0275\u0275listener("click", function Profile_div_0_div_15_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPasswordForm = false);
    });
    \u0275\u0275text(42, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 33);
    \u0275\u0275text(44, "Actualizar Contrase\xF1a");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("type", ctx_r1.passwordVisibility.current ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.passwordData.currentPassword);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", !ctx_r1.passwordVisibility.current);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx_r1.passwordVisibility.current);
    \u0275\u0275advance(6);
    \u0275\u0275property("type", ctx_r1.passwordVisibility.new ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.passwordData.newPassword);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", !ctx_r1.passwordVisibility.new);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx_r1.passwordVisibility.new);
    \u0275\u0275advance(6);
    \u0275\u0275property("type", ctx_r1.passwordVisibility.confirm ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.passwordData.confirmPassword);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", !ctx_r1.passwordVisibility.confirm);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx_r1.passwordVisibility.confirm);
  }
}
function Profile_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 16)(2, "h2");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 17);
    \u0275\u0275element(4, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Informaci\xF3n Personal ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 36)(7, "div", 37)(8, "div", 38)(9, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 20);
    \u0275\u0275element(11, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 40)(13, "label");
    \u0275\u0275text(14, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 41)(16, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function Profile_div_0_div_16_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editableUserData.name, $event) || (ctx_r1.editableUserData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 20);
    \u0275\u0275element(19, "path", 44);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 38)(21, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 20);
    \u0275\u0275element(23, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 40)(25, "label");
    \u0275\u0275text(26, "Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 41)(28, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function Profile_div_0_div_16_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editableUserData.lastName, $event) || (ctx_r1.editableUserData.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 20);
    \u0275\u0275element(31, "path", 44);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 47)(33, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 20);
    \u0275\u0275element(35, "path", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "div", 40)(37, "label");
    \u0275\u0275text(38, "Correo Electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 49);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 50);
    \u0275\u0275text(42, "No editable");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 37)(44, "div", 47)(45, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 20);
    \u0275\u0275element(47, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "div", 40)(49, "label");
    \u0275\u0275text(50, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p", 49);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 50);
    \u0275\u0275text(55, "No editable");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 47)(57, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 20);
    \u0275\u0275element(59, "path", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(60, "div", 40)(61, "label");
    \u0275\u0275text(62, "Edad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p", 49);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 50);
    \u0275\u0275text(66, "Calculada autom\xE1ticamente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 38)(68, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(69, "svg", 20);
    \u0275\u0275element(70, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(71, "div", 40)(72, "label");
    \u0275\u0275text(73, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 41)(75, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function Profile_div_0_div_16_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.editableUserData.phone, $event) || (ctx_r1.editableUserData.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "button", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(77, "svg", 20);
    \u0275\u0275element(78, "path", 44);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(79, "div", 56)(80, "div", 57)(81, "button", 58);
    \u0275\u0275listener("click", function Profile_div_0_div_16_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateUserInfo());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(82, "svg", 59);
    \u0275\u0275element(83, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(85, "button", 61);
    \u0275\u0275listener("click", function Profile_div_0_div_16_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPasswordForm = true);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(86, "svg", 59);
    \u0275\u0275element(87, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, " Cambiar Contrase\xF1a ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editableUserData.name);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editableUserData.lastName);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate((ctx_r1.user == null ? null : ctx_r1.user.email) || "\u2014");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 8, (ctx_r1.user == null ? null : ctx_r1.user.role) || "paciente"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r1.age() ?? "\u2014", " a\xF1os");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editableUserData.phone);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.updating);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.updating ? "Actualizando..." : "Actualizar Informaci\xF3n", " ");
  }
}
function Profile_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 7);
    \u0275\u0275element(6, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 9)(8, "h1", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(15, Profile_div_0_div_15_Template, 45, 18, "div", 13)(16, Profile_div_0_div_16_Template, 89, 10, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", (ctx_r1.user == null ? null : ctx_r1.user.name) || "Usuario", " ", (ctx_r1.user == null ? null : ctx_r1.user.lastName) || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.user == null ? null : ctx_r1.user.email) || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r1.user == null ? null : ctx_r1.user.role) || "paciente");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 8, (ctx_r1.user == null ? null : ctx_r1.user.role) || "paciente"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showPasswordForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showPasswordForm);
  }
}
function Profile_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "div", 63);
    \u0275\u0275elementStart(2, "p", 64);
    \u0275\u0275text(3, "Cargando tu perfil...");
    \u0275\u0275elementEnd()();
  }
}
var Profile = class _Profile {
  auth = inject(AuthService);
  router = inject(Router);
  user = null;
  loading = true;
  showPasswordForm = false;
  updating = false;
  // 👈 Agregar estado de carga
  passwordData = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  };
  passwordVisibility = {
    current: false,
    new: false,
    confirm: false
  };
  // Datos editables del usuario
  editableUserData = {
    name: "",
    lastName: "",
    phone: ""
  };
  ngOnInit() {
    const cached = this.auth.currentUser();
    if (cached) {
      this.user = cached;
      this.loadEditableData();
      this.loading = false;
    }
    this.auth.me().subscribe((u) => {
      if (u) {
        this.user = u;
        this.loadEditableData();
      }
      this.loading = false;
    });
  }
  loadEditableData() {
    if (this.user) {
      this.editableUserData = {
        name: this.user.name || "",
        lastName: this.user.lastName || "",
        phone: this.user.phone || ""
      };
    }
  }
  age() {
    if (!this.user?.birthDate)
      return null;
    const b = new Date(this.user.birthDate);
    const t = /* @__PURE__ */ new Date();
    let a = t.getFullYear() - b.getFullYear();
    const m = t.getMonth() - b.getMonth();
    if (m < 0 || m === 0 && t.getDate() < b.getDate())
      a--;
    return a;
  }
  togglePasswordVisibility(field) {
    this.passwordVisibility[field] = !this.passwordVisibility[field];
  }
  // 👇 MÉTODO ACTUALIZADO - LLAMADA REAL AL BACKEND
  updatePassword() {
    if (this.updating)
      return;
    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      alert("Las contrase\xF1as no coinciden");
      return;
    }
    if (this.passwordData.newPassword.length < 6) {
      alert("La nueva contrase\xF1a debe tener al menos 6 caracteres");
      return;
    }
    this.updating = true;
    const passwordRequest = {
      currentPassword: this.passwordData.currentPassword,
      newPassword: this.passwordData.newPassword,
      confirmPassword: this.passwordData.confirmPassword
    };
    console.log("\u{1F504} Enviando cambio de contrase\xF1a al backend...");
    this.auth.changePassword(passwordRequest).subscribe({
      next: (response) => {
        console.log("\u2705 Respuesta del backend:", response);
        this.updating = false;
        if (response.success) {
          alert("Contrase\xF1a actualizada correctamente");
          this.showPasswordForm = false;
          this.resetPasswordForm();
        } else {
          alert("Error: " + response.message);
        }
      },
      error: (error) => {
        console.log("\u274C Error del backend:", error);
        this.updating = false;
        alert("Error al cambiar contrase\xF1a: " + (error.error?.message || error.message));
      }
    });
  }
  // 👇 MÉTODO ACTUALIZADO - LLAMADA REAL AL BACKEND
  updateUserInfo() {
    if (this.updating)
      return;
    this.updating = true;
    const profileRequest = {
      name: this.editableUserData.name,
      lastName: this.editableUserData.lastName,
      phone: this.editableUserData.phone
    };
    console.log("\u{1F504} Enviando actualizaci\xF3n de perfil al backend...", profileRequest);
    this.auth.updateProfile(profileRequest).subscribe({
      next: (response) => {
        console.log("\u2705 Respuesta del backend:", response);
        this.updating = false;
        if (response.success && response.user) {
          alert("Informaci\xF3n actualizada correctamente");
          this.user = response.user;
          this.loadEditableData();
        } else {
          alert("Error: " + response.message);
        }
      },
      error: (error) => {
        console.log("\u274C Error del backend:", error);
        this.updating = false;
        alert("Error al actualizar informaci\xF3n: " + (error.error?.message || error.message));
      }
    });
  }
  resetPasswordForm() {
    this.passwordData = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
    this.passwordVisibility = {
      current: false,
      new: false,
      confirm: false
    };
  }
  goChangePassword() {
    this.showPasswordForm = true;
  }
  static \u0275fac = function Profile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Profile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Profile, selectors: [["app-profile"]], decls: 3, vars: 2, consts: [["loadingTpl", ""], ["class", "profile-wrapper", 4, "ngIf", "ngIfElse"], [1, "profile-wrapper"], [1, "profile-container"], [1, "profile-header"], [1, "avatar-section"], [1, "avatar"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "avatar-icon"], ["d", "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"], [1, "user-info"], [1, "user-name"], [1, "user-email"], [1, "user-badge"], ["class", "password-card", 4, "ngIf"], ["class", "profile-card", 4, "ngIf"], [1, "password-card"], [1, "card-header"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "header-icon"], ["d", "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"], [1, "close-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"], [1, "password-form", 3, "ngSubmit"], [1, "form-group"], [1, "password-input-group"], ["name", "currentPassword", "required", "", "autocomplete", "current-password", 1, "form-control", "password-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-password", 3, "click"], ["d", "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"], ["d", "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"], ["name", "newPassword", "required", "", "autocomplete", "new-password", 1, "form-control", "password-input", 3, "ngModelChange", "type", "ngModel"], ["name", "confirmPassword", "required", "", "autocomplete", "new-password", 1, "form-control", "password-input", 3, "ngModelChange", "type", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "secondary-btn", 3, "click"], ["type", "submit", 1, "btn", "primary-btn"], [1, "profile-card"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"], [1, "info-grid"], [1, "info-column"], [1, "info-item", "editable"], [1, "info-icon"], [1, "info-content"], [1, "input-group"], ["type", "text", "name", "nameInput", 1, "editable-input", 3, "ngModelChange", "ngModel"], ["title", "Editar nombre", 1, "edit-btn"], ["d", "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"], ["type", "text", "name", "lastNameInput", 1, "editable-input", 3, "ngModelChange", "ngModel"], ["title", "Editar apellido", 1, "edit-btn"], [1, "info-item"], ["d", "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"], [1, "info-value", "locked"], [1, "field-note"], ["d", "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"], ["d", "M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"], ["d", "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"], ["type", "text", "name", "phoneInput", 1, "editable-input", 3, "ngModelChange", "ngModel"], ["title", "Editar tel\xE9fono", 1, "edit-btn"], [1, "actions-section"], [1, "actions-grid"], [1, "action-btn", "secondary-btn", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "btn-icon"], ["d", "M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"], [1, "action-btn", "primary-btn", 3, "click"], [1, "loading-container"], [1, "loading-spinner"], [1, "loading-text"]], template: function Profile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, Profile_div_0_Template, 17, 10, "div", 1)(1, Profile_ng_template_1_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const loadingTpl_r4 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", loadingTpl_r4);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, TitleCasePipe], styles: ['@charset "UTF-8";\n\n\n\n.profile-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #fafafa 0%,\n      #f5f5f5 100%);\n  padding: 20px;\n  font-family:\n    "Sour Gummy",\n    system-ui,\n    -apple-system,\n    sans-serif;\n}\n.profile-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.profile-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 30px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e1e1e1;\n}\n.avatar-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886,\n      #ece9ff);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar[_ngcontent-%COMP%]   .avatar-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: white;\n}\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 900;\n  color: #2a2a2a;\n  margin: 0 0 4px 0;\n}\n.user-email[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 12px 0;\n  font-size: 1rem;\n}\n.user-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.user-badge.admin[_ngcontent-%COMP%] {\n  background: #e15886;\n  color: white;\n}\n.user-badge.paciente[_ngcontent-%COMP%], \n.user-badge.user[_ngcontent-%COMP%] {\n  background: #a8e6cf;\n  color: #2a2a2a;\n}\n.user-badge.doctor[_ngcontent-%COMP%], \n.user-badge.terapeuta[_ngcontent-%COMP%] {\n  background: #ece9ff;\n  color: #2a2a2a;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 30px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e1e1e1;\n}\n.password-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 30px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e1e1e1;\n  margin-bottom: 20px;\n}\n.password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n.password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #2a2a2a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #e15886;\n}\n.password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  padding: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #666;\n}\n.password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: #2a2a2a;\n}\n.password-form[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 0 auto;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  color: #2a2a2a;\n  font-size: 0.9rem;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.password-input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 50px 14px 16px;\n  border: 2px solid #e1e1e1;\n  border-radius: 12px;\n  background: white;\n  font-size: 1rem;\n  color: #2a2a2a;\n  transition: all 0.3s ease;\n  font-family: inherit;\n}\n.password-input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-webkit-credentials-auto-fill-button, \n.password-input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-webkit-strong-password-auto-fill-button, \n.password-input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-webkit-textfield-decoration-container {\n  display: none !important;\n  visibility: hidden !important;\n  opacity: 0 !important;\n}\n.password-input-group[_ngcontent-%COMP%]   .form-control[type=password][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.password-input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-ms-reveal, \n.password-input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n.password-input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e15886;\n  box-shadow: 0 0 0 3px rgba(225, 88, 134, 0.1);\n}\n.password-input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: #666;\n  opacity: 0.7;\n}\n.password-input-group[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  padding: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.password-input-group[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #666;\n  transition: color 0.2s ease;\n}\n.password-input-group[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%]:hover {\n  background: rgba(247, 211, 225, 0.1);\n}\n.password-input-group[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: #e15886;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e1e1e1;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  min-width: 140px;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.form-actions[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #2a2a2a;\n  border: 2px solid #e1e1e1;\n}\n.form-actions[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n  border-color: #666;\n}\n.form-actions[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {\n  background: #e15886;\n  color: white;\n}\n.form-actions[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);\n  box-shadow: 0 4px 16px rgba(225, 88, 134, 0.3);\n}\n.form-actions[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%]:disabled {\n  background: #666;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.card-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #2a2a2a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.card-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #e15886;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 16px;\n  background: #fafafa;\n  border-radius: 12px;\n  border: 1px solid #e1e1e1;\n  transition: all 0.2s ease;\n}\n.info-item.editable[_ngcontent-%COMP%] {\n  background: rgba(247, 211, 225, 0.05);\n  border-color: rgba(225, 88, 134, 0.2);\n}\n.info-item.editable[_ngcontent-%COMP%]:hover {\n  border-color: #e15886;\n  background: rgba(247, 211, 225, 0.1);\n}\n.info-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 1px solid #e1e1e1;\n}\n.info-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #e15886;\n}\n.info-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.info-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  color: #666;\n  font-size: 0.85rem;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-content[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #2a2a2a;\n  margin: 0;\n}\n.info-content[_ngcontent-%COMP%]   .info-value.locked[_ngcontent-%COMP%] {\n  color: #666;\n  font-style: italic;\n}\n.info-content[_ngcontent-%COMP%]   .field-note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #666;\n  font-style: italic;\n  margin-top: 2px;\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.input-group[_ngcontent-%COMP%]   .editable-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  border: 1px solid #e1e1e1;\n  border-radius: 8px;\n  background: white;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #2a2a2a;\n  transition: border-color 0.2s ease;\n}\n.input-group[_ngcontent-%COMP%]   .editable-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #e15886;\n}\n.input-group[_ngcontent-%COMP%]   .editable-input[_ngcontent-%COMP%]:disabled {\n  background: #f5f5f5;\n  color: #666;\n}\n.input-group[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #e1e1e1;\n  border-radius: 6px;\n  padding: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.input-group[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: #666;\n}\n.input-group[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]:hover {\n  background: #e15886;\n  border-color: #e15886;\n}\n.input-group[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.actions-section[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding-top: 24px;\n  border-top: 1px solid #e1e1e1;\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  max-width: 400px;\n  margin: 0 auto;\n}\n@media (max-width: 480px) {\n  .actions-grid[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  font-family: inherit;\n  flex: 1;\n}\n.action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.primary-btn[_ngcontent-%COMP%] {\n  background: #e15886;\n  color: white;\n}\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);\n  box-shadow: 0 4px 12px rgba(225, 88, 134, 0.3);\n}\n.secondary-btn[_ngcontent-%COMP%] {\n  background: #a8e6cf;\n  color: #2a2a2a;\n}\n.secondary-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(128.3839285714, 218.6160714286, 185.1428571429);\n  box-shadow: 0 4px 12px rgba(168, 230, 207, 0.3);\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  text-align: center;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(247, 211, 225, 0.3);\n  border-left: 3px solid #e15886;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #2a2a2a;\n  font-weight: 600;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .profile-wrapper[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .profile-header[_ngcontent-%COMP%], \n   .profile-card[_ngcontent-%COMP%], \n   .password-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .avatar-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 16px;\n  }\n  .info-item[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    min-width: auto;\n    width: 100%;\n  }\n  .password-input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding: 12px 45px 12px 14px;\n  }\n}\n/*# sourceMappingURL=profile.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Profile, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="profile-wrapper" *ngIf="!loading; else loadingTpl">\r
  <div class="profile-container">\r
    <!-- Header minimalista -->\r
    <div class="profile-header">\r
      <div class="avatar-section">\r
        <div class="avatar">\r
          <svg class="avatar-icon" viewBox="0 0 24 24" fill="currentColor">\r
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>\r
          </svg>\r
        </div>\r
        <div class="user-info">\r
          <h1 class="user-name">{{ user?.name || 'Usuario' }} {{ user?.lastName || '' }}</h1>\r
          <p class="user-email">{{ user?.email || '\u2014' }}</p>\r
          <div class="user-badge" [class]="user?.role || 'paciente'">\r
            {{ (user?.role || 'paciente') | titlecase }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u{1F510} SECCI\xD3N DE CAMBIO DE CONTRASE\xD1A -->\r
    <div class="password-card" *ngIf="showPasswordForm">\r
      <div class="card-header">\r
        <h2>\r
          <svg class="header-icon" viewBox="0 0 24 24" fill="currentColor">\r
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>\r
          </svg>\r
          Cambiar Contrase\xF1a\r
        </h2>\r
        <button class="close-btn" (click)="showPasswordForm = false">\r
          <svg viewBox="0 0 24 24" fill="currentColor">\r
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\r
          </svg>\r
        </button>\r
      </div>\r
\r
      <form class="password-form" (ngSubmit)="updatePassword()">\r
        <div class="form-group">\r
          <label>Contrase\xF1a Actual</label>\r
          <div class="password-input-group">\r
            <input \r
              [type]="passwordVisibility.current ? 'text' : 'password'"\r
              [(ngModel)]="passwordData.currentPassword" \r
              name="currentPassword" \r
              required\r
              autocomplete="current-password"\r
              class="form-control password-input">\r
            <button type="button" class="toggle-password" (click)="togglePasswordVisibility('current')">\r
              <svg [class.hidden]="!passwordVisibility.current" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>\r
              </svg>\r
              <svg [class.hidden]="passwordVisibility.current" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>\r
              </svg>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label>Nueva Contrase\xF1a</label>\r
          <div class="password-input-group">\r
            <input \r
              [type]="passwordVisibility.new ? 'text' : 'password'"\r
              [(ngModel)]="passwordData.newPassword" \r
              name="newPassword" \r
              required\r
              autocomplete="new-password"\r
              class="form-control password-input">\r
            <button type="button" class="toggle-password" (click)="togglePasswordVisibility('new')">\r
              <svg [class.hidden]="!passwordVisibility.new" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>\r
              </svg>\r
              <svg [class.hidden]="passwordVisibility.new" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>\r
              </svg>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label>Confirmar Nueva Contrase\xF1a</label>\r
          <div class="password-input-group">\r
            <input \r
              [type]="passwordVisibility.confirm ? 'text' : 'password'"\r
              [(ngModel)]="passwordData.confirmPassword" \r
              name="confirmPassword" \r
              required\r
              autocomplete="new-password"\r
              class="form-control password-input">\r
            <button type="button" class="toggle-password" (click)="togglePasswordVisibility('confirm')">\r
              <svg [class.hidden]="!passwordVisibility.confirm" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>\r
              </svg>\r
              <svg [class.hidden]="passwordVisibility.confirm" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>\r
              </svg>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="form-actions">\r
          <button type="button" class="btn secondary-btn" (click)="showPasswordForm = false">Cancelar</button>\r
          <button type="submit" class="btn primary-btn">Actualizar Contrase\xF1a</button>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Tarjeta principal minimalista -->\r
    <div class="profile-card" *ngIf="!showPasswordForm">\r
      <div class="card-header">\r
        <h2>\r
          <svg class="header-icon" viewBox="0 0 24 24" fill="currentColor">\r
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>\r
          </svg>\r
          Informaci\xF3n Personal\r
        </h2>\r
      </div>\r
\r
      <div class="info-grid">\r
        <!-- Campos editables -->\r
        <div class="info-column">\r
          <div class="info-item editable">\r
            <div class="info-icon">\r
              <svg viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>\r
              </svg>\r
            </div>\r
            <div class="info-content">\r
              <label>Nombre</label>\r
              <div class="input-group">\r
                <input \r
                  type="text" \r
                  [(ngModel)]="editableUserData.name"\r
                  class="editable-input"\r
                  name="nameInput">\r
                <button class="edit-btn" title="Editar nombre">\r
                  <svg viewBox="0 0 24 24" fill="currentColor">\r
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>\r
                  </svg>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="info-item editable">\r
            <div class="info-icon">\r
              <svg viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>\r
              </svg>\r
            </div>\r
            <div class="info-content">\r
              <label>Apellido</label>\r
              <div class="input-group">\r
                <input \r
                  type="text" \r
                  [(ngModel)]="editableUserData.lastName" \r
                  class="editable-input"\r
                  name="lastNameInput">\r
                <button class="edit-btn" title="Editar apellido">\r
                  <svg viewBox="0 0 24 24" fill="currentColor">\r
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>\r
                  </svg>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="info-item">\r
            <div class="info-icon">\r
              <svg viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>\r
              </svg>\r
            </div>\r
            <div class="info-content">\r
              <label>Correo Electr\xF3nico</label>\r
              <p class="info-value locked">{{ user?.email || '\u2014' }}</p>\r
              <span class="field-note">No editable</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Campos no editables -->\r
        <div class="info-column">\r
          <div class="info-item">\r
            <div class="info-icon">\r
              <svg viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>\r
              </svg>\r
            </div>\r
            <div class="info-content">\r
              <label>Rol</label>\r
              <p class="info-value locked">{{ (user?.role || 'paciente') | titlecase }}</p>\r
              <span class="field-note">No editable</span>\r
            </div>\r
          </div>\r
\r
          <div class="info-item">\r
            <div class="info-icon">\r
              <svg viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>\r
              </svg>\r
            </div>\r
            <div class="info-content">\r
              <label>Edad</label>\r
              <p class="info-value locked">{{ age() ?? '\u2014' }} a\xF1os</p>\r
              <span class="field-note">Calculada autom\xE1ticamente</span>\r
            </div>\r
          </div>\r
\r
          <div class="info-item editable">\r
            <div class="info-icon">\r
              <svg viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>\r
              </svg>\r
            </div>\r
            <div class="info-content">\r
              <label>Tel\xE9fono</label>\r
              <div class="input-group">\r
                <input \r
                  type="text" \r
                  [(ngModel)]="editableUserData.phone" \r
                  class="editable-input"\r
                  name="phoneInput">\r
                <button class="edit-btn" title="Editar tel\xE9fono">\r
                  <svg viewBox="0 0 24 24" fill="currentColor">\r
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>\r
                  </svg>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Acciones minimalistas -->\r
      <div class="actions-section">\r
        <div class="actions-grid">\r
          <button class="action-btn secondary-btn" (click)="updateUserInfo()" [disabled]="updating">\r
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">\r
              <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/>\r
            </svg>\r
            {{ updating ? 'Actualizando...' : 'Actualizar Informaci\xF3n' }}\r
          </button>\r
          \r
          <button class="action-btn primary-btn" (click)="showPasswordForm = true">\r
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">\r
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>\r
            </svg>\r
            Cambiar Contrase\xF1a\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<ng-template #loadingTpl>\r
  <div class="loading-container">\r
    <div class="loading-spinner"></div>\r
    <p class="loading-text">Cargando tu perfil...</p>\r
  </div>\r
</ng-template>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/auth/profile/profile.scss */\n.profile-wrapper {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #fafafa 0%,\n      #f5f5f5 100%);\n  padding: 20px;\n  font-family:\n    "Sour Gummy",\n    system-ui,\n    -apple-system,\n    sans-serif;\n}\n.profile-container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.profile-header {\n  background: #fff;\n  border-radius: 16px;\n  padding: 30px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e1e1e1;\n}\n.avatar-section {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.avatar {\n  width: 70px;\n  height: 70px;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886,\n      #ece9ff);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar .avatar-icon {\n  width: 32px;\n  height: 32px;\n  color: white;\n}\n.user-info {\n  flex: 1;\n}\n.user-name {\n  font-size: 1.6rem;\n  font-weight: 900;\n  color: #2a2a2a;\n  margin: 0 0 4px 0;\n}\n.user-email {\n  color: #666;\n  margin: 0 0 12px 0;\n  font-size: 1rem;\n}\n.user-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.user-badge.admin {\n  background: #e15886;\n  color: white;\n}\n.user-badge.paciente,\n.user-badge.user {\n  background: #a8e6cf;\n  color: #2a2a2a;\n}\n.user-badge.doctor,\n.user-badge.terapeuta {\n  background: #ece9ff;\n  color: #2a2a2a;\n}\n.profile-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 30px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e1e1e1;\n}\n.password-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 30px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e1e1e1;\n  margin-bottom: 20px;\n}\n.password-card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n.password-card .card-header h2 {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #2a2a2a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.password-card .card-header .header-icon {\n  width: 20px;\n  height: 20px;\n  color: #e15886;\n}\n.password-card .card-header .close-btn {\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  padding: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.password-card .card-header .close-btn svg {\n  width: 20px;\n  height: 20px;\n  color: #666;\n}\n.password-card .card-header .close-btn:hover {\n  background: #f5f5f5;\n}\n.password-card .card-header .close-btn:hover svg {\n  color: #2a2a2a;\n}\n.password-form {\n  max-width: 500px;\n  margin: 0 auto;\n}\n.form-group {\n  margin-bottom: 24px;\n}\n.form-group label {\n  display: block;\n  font-weight: 700;\n  color: #2a2a2a;\n  font-size: 0.9rem;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.password-input-group {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-input-group .form-control {\n  flex: 1;\n  padding: 14px 50px 14px 16px;\n  border: 2px solid #e1e1e1;\n  border-radius: 12px;\n  background: white;\n  font-size: 1rem;\n  color: #2a2a2a;\n  transition: all 0.3s ease;\n  font-family: inherit;\n}\n.password-input-group .form-control::-webkit-credentials-auto-fill-button,\n.password-input-group .form-control::-webkit-strong-password-auto-fill-button,\n.password-input-group .form-control::-webkit-textfield-decoration-container {\n  display: none !important;\n  visibility: hidden !important;\n  opacity: 0 !important;\n}\n.password-input-group .form-control[type=password] {\n  -moz-appearance: textfield;\n}\n.password-input-group .form-control::-ms-reveal,\n.password-input-group .form-control::-ms-clear {\n  display: none;\n}\n.password-input-group .form-control:focus {\n  outline: none;\n  border-color: #e15886;\n  box-shadow: 0 0 0 3px rgba(225, 88, 134, 0.1);\n}\n.password-input-group .form-control::placeholder {\n  color: #666;\n  opacity: 0.7;\n}\n.password-input-group .toggle-password {\n  position: absolute;\n  right: 12px;\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  padding: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.password-input-group .toggle-password svg {\n  width: 20px;\n  height: 20px;\n  color: #666;\n  transition: color 0.2s ease;\n}\n.password-input-group .toggle-password:hover {\n  background: rgba(247, 211, 225, 0.1);\n}\n.password-input-group .toggle-password:hover svg {\n  color: #e15886;\n}\n.hidden {\n  display: none;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e1e1e1;\n}\n.form-actions .btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  min-width: 140px;\n}\n.form-actions .btn:hover {\n  transform: translateY(-2px);\n}\n.form-actions .secondary-btn {\n  background: transparent;\n  color: #2a2a2a;\n  border: 2px solid #e1e1e1;\n}\n.form-actions .secondary-btn:hover {\n  background: #f5f5f5;\n  border-color: #666;\n}\n.form-actions .primary-btn {\n  background: #e15886;\n  color: white;\n}\n.form-actions .primary-btn:hover {\n  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);\n  box-shadow: 0 4px 16px rgba(225, 88, 134, 0.3);\n}\n.form-actions .primary-btn:disabled {\n  background: #666;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.card-header {\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.card-header h2 {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #2a2a2a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.card-header .header-icon {\n  width: 20px;\n  height: 20px;\n  color: #e15886;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.info-column {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.info-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 16px;\n  background: #fafafa;\n  border-radius: 12px;\n  border: 1px solid #e1e1e1;\n  transition: all 0.2s ease;\n}\n.info-item.editable {\n  background: rgba(247, 211, 225, 0.05);\n  border-color: rgba(225, 88, 134, 0.2);\n}\n.info-item.editable:hover {\n  border-color: #e15886;\n  background: rgba(247, 211, 225, 0.1);\n}\n.info-icon {\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border: 1px solid #e1e1e1;\n}\n.info-icon svg {\n  width: 20px;\n  height: 20px;\n  color: #e15886;\n}\n.info-content {\n  flex: 1;\n}\n.info-content label {\n  display: block;\n  font-weight: 700;\n  color: #666;\n  font-size: 0.85rem;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-content .info-value {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #2a2a2a;\n  margin: 0;\n}\n.info-content .info-value.locked {\n  color: #666;\n  font-style: italic;\n}\n.info-content .field-note {\n  font-size: 0.75rem;\n  color: #666;\n  font-style: italic;\n  margin-top: 2px;\n}\n.input-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.input-group .editable-input {\n  flex: 1;\n  padding: 8px 12px;\n  border: 1px solid #e1e1e1;\n  border-radius: 8px;\n  background: white;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #2a2a2a;\n  transition: border-color 0.2s ease;\n}\n.input-group .editable-input:focus {\n  outline: none;\n  border-color: #e15886;\n}\n.input-group .editable-input:disabled {\n  background: #f5f5f5;\n  color: #666;\n}\n.input-group .edit-btn {\n  background: transparent;\n  border: 1px solid #e1e1e1;\n  border-radius: 6px;\n  padding: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.input-group .edit-btn svg {\n  width: 16px;\n  height: 16px;\n  color: #666;\n}\n.input-group .edit-btn:hover {\n  background: #e15886;\n  border-color: #e15886;\n}\n.input-group .edit-btn:hover svg {\n  color: white;\n}\n.actions-section {\n  margin-top: 30px;\n  padding-top: 24px;\n  border-top: 1px solid #e1e1e1;\n}\n.actions-grid {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  max-width: 400px;\n  margin: 0 auto;\n}\n@media (max-width: 480px) {\n  .actions-grid {\n    flex-direction: column;\n  }\n}\n.action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  font-family: inherit;\n  flex: 1;\n}\n.action-btn .btn-icon {\n  width: 18px;\n  height: 18px;\n}\n.action-btn:hover {\n  transform: translateY(-1px);\n}\n.primary-btn {\n  background: #e15886;\n  color: white;\n}\n.primary-btn:hover {\n  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);\n  box-shadow: 0 4px 12px rgba(225, 88, 134, 0.3);\n}\n.secondary-btn {\n  background: #a8e6cf;\n  color: #2a2a2a;\n}\n.secondary-btn:hover {\n  background: rgb(128.3839285714, 218.6160714286, 185.1428571429);\n  box-shadow: 0 4px 12px rgba(168, 230, 207, 0.3);\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  text-align: center;\n}\n.loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(247, 211, 225, 0.3);\n  border-left: 3px solid #e15886;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-text {\n  font-size: 1rem;\n  color: #2a2a2a;\n  font-weight: 600;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .profile-wrapper {\n    padding: 10px;\n  }\n  .profile-header,\n  .profile-card,\n  .password-card {\n    padding: 20px;\n  }\n  .avatar-section {\n    flex-direction: column;\n    text-align: center;\n    gap: 16px;\n  }\n  .info-item {\n    padding: 14px;\n  }\n  .info-grid {\n    gap: 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .form-actions .btn {\n    min-width: auto;\n    width: 100%;\n  }\n  .password-input-group .form-control {\n    padding: 12px 45px 12px 14px;\n  }\n}\n/*# sourceMappingURL=profile.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Profile, { className: "Profile", filePath: "src/app/pages/auth/profile/profile.ts", lineNumber: 14 });
})();
export {
  Profile
};
//# sourceMappingURL=chunk-WQOVXVUH.js.map
