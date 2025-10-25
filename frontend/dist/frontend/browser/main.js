import {
  AuthService
} from "./chunk-A2PELOIP.js";
import "./chunk-BPEFTJA2.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withInterceptors
} from "./chunk-6P7TFCYF.js";
import {
  CommonModule,
  NgIf
} from "./chunk-Q4BX36PF.js";
import {
  Component,
  HostListener,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DEJWN6HZ.js";

// src/app/shared/navbar/navbar.ts
function Navbar_a_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 42);
    \u0275\u0275text(1, "Iniciar sesi\xF3n");
    \u0275\u0275elementEnd();
  }
}
function Navbar_div_31_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 50);
    \u0275\u0275listener("click", function Navbar_div_31_li_11_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeUserMenu());
    });
    \u0275\u0275text(2, " Panel de Administraci\xF3n ");
    \u0275\u0275elementEnd()();
  }
}
function Navbar_div_31_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 51);
    \u0275\u0275listener("click", function Navbar_div_31_li_12_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeUserMenu());
    });
    \u0275\u0275text(2, " Panel Profesional ");
    \u0275\u0275elementEnd()();
  }
}
function Navbar_div_31_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 52);
    \u0275\u0275listener("click", function Navbar_div_31_li_13_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeUserMenu());
    });
    \u0275\u0275text(2, " Panel Paciente ");
    \u0275\u0275elementEnd()();
  }
}
function Navbar_div_31_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 53);
    \u0275\u0275listener("click", function Navbar_div_31_li_14_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeUserMenu());
    });
    \u0275\u0275text(2, " Panel Voluntario ");
    \u0275\u0275elementEnd()();
  }
}
function Navbar_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44)(2, "span", 45);
    \u0275\u0275text(3, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6, "\u25BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ul", 46)(8, "li")(9, "a", 47);
    \u0275\u0275listener("click", function Navbar_div_31_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserMenu());
    });
    \u0275\u0275text(10, "Mi Cuenta");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, Navbar_div_31_li_11_Template, 3, 0, "li", 48)(12, Navbar_div_31_li_12_Template, 3, 0, "li", 48)(13, Navbar_div_31_li_13_Template, 3, 0, "li", 48)(14, Navbar_div_31_li_14_Template, 3, 0, "li", 48);
    \u0275\u0275elementStart(15, "li")(16, "button", 49);
    \u0275\u0275listener("click", function Navbar_div_31_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275text(17, "Salir");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.displayName, " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProfesional);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPaciente);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVoluntario);
  }
}
function Navbar_li_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 54)(1, "a", 55);
    \u0275\u0275listener("click", function Navbar_li_72_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(2, "Iniciar sesi\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function Navbar_li_73_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 60);
    \u0275\u0275listener("click", function Navbar_li_73_li_12_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.closeUserMenu();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(2, " Panel de Administraci\xF3n ");
    \u0275\u0275elementEnd()();
  }
}
function Navbar_li_73_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 61);
    \u0275\u0275listener("click", function Navbar_li_73_li_13_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.closeUserMenu();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(2, " Panel Profesional ");
    \u0275\u0275elementEnd()();
  }
}
function Navbar_li_73_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 62);
    \u0275\u0275listener("click", function Navbar_li_73_li_14_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.closeUserMenu();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(2, " Panel Paciente ");
    \u0275\u0275elementEnd()();
  }
}
function Navbar_li_73_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 63);
    \u0275\u0275listener("click", function Navbar_li_73_li_15_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.closeUserMenu();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(2, " Panel Voluntario ");
    \u0275\u0275elementEnd()();
  }
}
function Navbar_li_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 54)(1, "div", 56)(2, "button", 57);
    \u0275\u0275listener("click", function Navbar_li_73_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleUserMenu($event));
    });
    \u0275\u0275elementStart(3, "span", 58);
    \u0275\u0275text(4, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7, "\u25BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ul", 59)(9, "li")(10, "a", 47);
    \u0275\u0275listener("click", function Navbar_li_73_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.closeUserMenu();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(11, "Mi Cuenta");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, Navbar_li_73_li_12_Template, 3, 0, "li", 48)(13, Navbar_li_73_li_13_Template, 3, 0, "li", 48)(14, Navbar_li_73_li_14_Template, 3, 0, "li", 48)(15, Navbar_li_73_li_15_Template, 3, 0, "li", 48);
    \u0275\u0275elementStart(16, "li")(17, "button", 49);
    \u0275\u0275listener("click", function Navbar_li_73_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275text(18, "Salir");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-expanded", ctx_r1.isUserMenuOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.displayName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-open", ctx_r1.isUserMenuOpen);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProfesional);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPaciente);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVoluntario);
  }
}
var Navbar = class _Navbar {
  auth = inject(AuthService);
  router = inject(Router);
  /* ===== Estados existentes ===== */
  isMobileMenuOpen = false;
  isLangOpen = false;
  currentLang = localStorage.getItem("lang") || "es";
  langCloseTimeout;
  /* ===== NUEVO: Menú de usuario ===== */
  isUserMenuOpen = false;
  /* ===== Helpers de sesión ===== */
  get isLoggedIn() {
    return this.auth.isLoggedIn();
  }
  get user() {
    return this.auth.currentUser();
  }
  get displayName() {
    const u = this.user;
    if (!u)
      return "Mi cuenta";
    const name = (u.name || "").trim();
    const last = (u.lastName || "").trim();
    return [name, last].filter(Boolean).join(" ") || u.email;
  }
  // ✅ NUEVOS: Helpers para roles
  get isAdmin() {
    return (this.user?.role || "").toLowerCase() === "admin";
  }
  get isProfesional() {
    const role = (this.user?.role || "").toLowerCase();
    return role === "profesional" || role === "professional";
  }
  get isPaciente() {
    const role = (this.user?.role || "").toLowerCase();
    return role === "paciente" || role === "patient";
  }
  get isVoluntario() {
    const role = (this.user?.role || "").toLowerCase();
    return role === "voluntario" || role === "volunteer";
  }
  /* ===== Acciones menú usuario ===== */
  toggleUserMenu(evt) {
    evt.stopPropagation();
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  closeUserMenu() {
    this.isUserMenuOpen = false;
  }
  onLogout() {
    this.auth.logout();
    this.closeUserMenu();
    this.closeMobileMenu();
    this.router.navigate(["/inicio"]);
  }
  /* ===== Métodos existentes (idioma) ===== */
  openLang() {
    this.clearLangTimeout();
    this.isLangOpen = true;
  }
  closeLang() {
    this.clearLangTimeout();
    this.isLangOpen = false;
  }
  closeLangWithDelay() {
    this.clearLangTimeout();
    this.langCloseTimeout = setTimeout(() => {
      this.isLangOpen = false;
    }, 300);
  }
  keepLangOpen() {
    this.clearLangTimeout();
  }
  clearLangTimeout() {
    if (this.langCloseTimeout) {
      clearTimeout(this.langCloseTimeout);
      this.langCloseTimeout = null;
    }
  }
  toggleLang(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isLangOpen = !this.isLangOpen;
    this.clearLangTimeout();
  }
  setLanguage(event, lang) {
    event.preventDefault();
    event.stopPropagation();
    this.currentLang = lang;
    localStorage.setItem("lang", lang);
    this.isLangOpen = false;
    this.clearLangTimeout();
  }
  /* ===== Métodos móvil ===== */
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.closeLang();
      this.closeUserMenu();
    }
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.closeLang();
    this.closeUserMenu();
  }
  /* ===== HostListeners ===== */
  onDocumentClick(e) {
    const target = e.target;
    if (this.isMobileMenuOpen) {
      const clickedBurger = !!target.closest(".navbar__burger");
      const clickedMobilePanel = !!target.closest(".mobile");
      if (!clickedBurger && !clickedMobilePanel) {
        this.closeMobileMenu();
      }
    }
    if (this.isLangOpen) {
      const insideLang = !!target.closest(".lang");
      if (!insideLang) {
        this.closeLang();
      }
    }
    if (this.isUserMenuOpen) {
      const insideUserMenu = !!target.closest(".mobile-user");
      if (!insideUserMenu) {
        this.closeUserMenu();
      }
    }
  }
  onEsc() {
    this.closeLang();
    this.closeUserMenu();
    this.closeMobileMenu();
  }
  onResize() {
    if (window.innerWidth >= 1024 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
  ngOnDestroy() {
    this.clearLangTimeout();
  }
  static \u0275fac = function Navbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Navbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Navbar, selectors: [["app-navbar"]], hostBindings: function Navbar_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function Navbar_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument)("keydown.escape", function Navbar_keydown_escape_HostBindingHandler() {
        return ctx.onEsc();
      }, \u0275\u0275resolveDocument)("resize", function Navbar_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 86, vars: 22, consts: [[1, "navbar"], [1, "navbar__container"], ["routerLink", "/", "aria-label", "Ma\xB4Care - Inicio", 1, "navbar__brand"], ["src", "/Logo.jpg", "alt", "Ma\xB4Care", 1, "navbar__logo-img"], [1, "navbar__brand-name"], ["aria-label", "Abrir men\xFA", "aria-controls", "mobile-panel", 1, "navbar__burger", 3, "click"], ["role", "menubar", 1, "navbar__menu", "navbar__menu--desktop"], ["routerLink", "/quienes-somos", "routerLinkActive", "is-active", "role", "menuitem"], ["routerLink", "/kits", "routerLinkActive", "is-active", "role", "menuitem"], ["routerLink", "/acompanamiento", "routerLinkActive", "is-active", "role", "menuitem"], ["routerLink", "/recursos", "routerLinkActive", "is-active", "role", "menuitem"], ["routerLink", "/historias", "routerLinkActive", "is-active", "role", "menuitem"], ["routerLink", "/contacto", "routerLinkActive", "is-active", "role", "menuitem"], [1, "navbar__actions", "navbar__actions--desktop"], ["routerLink", "/login", "class", "btn btn--secondary", 4, "ngIf"], ["class", "user", 4, "ngIf"], [1, "lang", 3, "mouseenter", "mouseleave"], ["aria-haspopup", "true", 1, "lang__btn", 3, "click"], ["aria-hidden", "true", 1, "lang__icon"], [1, "lang__code"], [1, "caret"], [1, "lang__menu", 3, "mouseenter", "mouseleave"], ["href", "#", 3, "click"], ["id", "mobile-panel", 1, "mobile", 3, "click"], [1, "mobile__header"], [1, "mobile__title"], ["aria-label", "Cerrar men\xFA", 1, "mobile__close", 3, "click"], [1, "mobile__menu"], ["routerLink", "/quienes-somos", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/kits", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/acompanamiento", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/recursos", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/historias", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/contacto", "routerLinkActive", "is-active", 3, "click"], ["class", "mobile__login", 4, "ngIf"], [1, "mobile__lang"], [1, "mobile__lang-row"], [1, "mobile__lang-label"], [1, "mobile__lang-current"], [1, "mobile__lang-actions"], [3, "click"], [1, "mobile__backdrop", 3, "click"], ["routerLink", "/login", 1, "btn", "btn--secondary"], [1, "user"], [1, "user__btn"], [1, "user__icon"], [1, "user__menu"], ["routerLink", "/profile", "routerLinkActive", "is-active", 3, "click"], [4, "ngIf"], ["type", "button", 1, "as-link", 3, "click"], ["routerLink", "/Panel-admin", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/Panel-profesional", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/Panel-paciente", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/Panel-voluntario", "routerLinkActive", "is-active", 3, "click"], [1, "mobile__login"], ["routerLink", "/login", 1, "btn", "btn--secondary", 3, "click"], [1, "mobile-user"], ["aria-haspopup", "true", 1, "mobile-user__btn", 3, "click"], [1, "mobile-user__icon"], [1, "mobile-user__menu"], ["routerLink", "/admin", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/profesional", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/paciente", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/voluntario", "routerLinkActive", "is-active", 3, "click"]], template: function Navbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275text(5, "Ma\xB4Care");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function Navbar_Template_button_click_6_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275element(7, "span")(8, "span")(9, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul", 6)(11, "li")(12, "a", 7);
      \u0275\u0275text(13, "\xBFQui\xE9nes somos?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 8);
      \u0275\u0275text(16, "Kits");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 9);
      \u0275\u0275text(19, "Acompa\xF1amiento Psicol\xF3gico");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 10);
      \u0275\u0275text(22, "Recursos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 11);
      \u0275\u0275text(25, "Historias");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 12);
      \u0275\u0275text(28, "Contacto");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 13);
      \u0275\u0275template(30, Navbar_a_30_Template, 2, 0, "a", 14)(31, Navbar_div_31_Template, 18, 5, "div", 15);
      \u0275\u0275elementStart(32, "div", 16);
      \u0275\u0275listener("mouseenter", function Navbar_Template_div_mouseenter_32_listener() {
        return ctx.openLang();
      })("mouseleave", function Navbar_Template_div_mouseleave_32_listener() {
        return ctx.closeLangWithDelay();
      });
      \u0275\u0275elementStart(33, "button", 17);
      \u0275\u0275listener("click", function Navbar_Template_button_click_33_listener($event) {
        return ctx.toggleLang($event);
      });
      \u0275\u0275elementStart(34, "span", 18);
      \u0275\u0275text(35, "\u{1F310}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 19);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 20);
      \u0275\u0275text(39, "\u25BE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "ul", 21);
      \u0275\u0275listener("mouseenter", function Navbar_Template_ul_mouseenter_40_listener() {
        return ctx.keepLangOpen();
      })("mouseleave", function Navbar_Template_ul_mouseleave_40_listener() {
        return ctx.closeLangWithDelay();
      });
      \u0275\u0275elementStart(41, "li")(42, "a", 22);
      \u0275\u0275listener("click", function Navbar_Template_a_click_42_listener($event) {
        return ctx.setLanguage($event, "es");
      });
      \u0275\u0275text(43, " Espa\xF1ol ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 22);
      \u0275\u0275listener("click", function Navbar_Template_a_click_45_listener($event) {
        return ctx.setLanguage($event, "en");
      });
      \u0275\u0275text(46, " English ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(47, "div", 23);
      \u0275\u0275listener("click", function Navbar_Template_div_click_47_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(48, "div", 24)(49, "span", 25);
      \u0275\u0275text(50, "Men\xFA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "button", 26);
      \u0275\u0275listener("click", function Navbar_Template_button_click_51_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(52, "\u2715");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "ul", 27)(54, "li")(55, "a", 28);
      \u0275\u0275listener("click", function Navbar_Template_a_click_55_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(56, "\xBFQui\xE9nes somos?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 29);
      \u0275\u0275listener("click", function Navbar_Template_a_click_58_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(59, "Kits");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 30);
      \u0275\u0275listener("click", function Navbar_Template_a_click_61_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(62, "Acompa\xF1amiento Psicol\xF3gico");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 31);
      \u0275\u0275listener("click", function Navbar_Template_a_click_64_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(65, "Recursos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "li")(67, "a", 32);
      \u0275\u0275listener("click", function Navbar_Template_a_click_67_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(68, "Historias");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "li")(70, "a", 33);
      \u0275\u0275listener("click", function Navbar_Template_a_click_70_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(71, "Contacto");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(72, Navbar_li_72_Template, 3, 0, "li", 34)(73, Navbar_li_73_Template, 19, 8, "li", 34);
      \u0275\u0275elementStart(74, "li", 35)(75, "div", 36)(76, "span", 37);
      \u0275\u0275text(77, "\u{1F310} Idioma");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span", 38);
      \u0275\u0275text(79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 39)(81, "button", 40);
      \u0275\u0275listener("click", function Navbar_Template_button_click_81_listener($event) {
        return ctx.setLanguage($event, "es");
      });
      \u0275\u0275text(82, "ES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "button", 40);
      \u0275\u0275listener("click", function Navbar_Template_button_click_83_listener($event) {
        return ctx.setLanguage($event, "en");
      });
      \u0275\u0275text(84, "EN");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(85, "div", 41);
      \u0275\u0275listener("click", function Navbar_Template_div_click_85_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275attribute("aria-expanded", ctx.isMobileMenuOpen);
      \u0275\u0275advance(24);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-expanded", ctx.isLangOpen);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.currentLang.toUpperCase());
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-open", ctx.isLangOpen);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-active", ctx.currentLang === "es");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-active", ctx.currentLang === "en");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-open", ctx.isMobileMenuOpen);
      \u0275\u0275advance(25);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.currentLang.toUpperCase());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-active", ctx.currentLang === "es");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-active", ctx.currentLang === "en");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-open", ctx.isMobileMenuOpen);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, RouterLinkActive], styles: [`@charset "UTF-8";



.navbar[_ngcontent-%COMP%] {
  background: #f7d3e1;
  border-bottom: 1px solid rgb(252.1827411168, 239.3172588832, 243.6370558376);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  font-family:
    "Sour Gummy",
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  position: relative;
  z-index: 100;
}
.navbar__container[_ngcontent-%COMP%] {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  min-height: 60px;
}
.navbar__brand[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  text-decoration: none;
}
.navbar__logo-img[_ngcontent-%COMP%] {
  height: 44px;
  width: 44px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.6);
}
.navbar__brand-name[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 0.2px;
  color: rgb(221.116751269, 66.383248731, 118.3375634518);
}
.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar__burger[_ngcontent-%COMP%] {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0.35rem;
}
.navbar__burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  display: block;
  width: 22px;
  height: 2px;
  background: #2a2a2a;
  border-radius: 2px;
}
@media (min-width: 1024px) {
  .navbar__burger[_ngcontent-%COMP%] {
    display: none;
  }
}
.navbar__menu--desktop[_ngcontent-%COMP%] {
  display: none;
}
@media (min-width: 1024px) {
  .navbar__menu--desktop[_ngcontent-%COMP%] {
    display: flex;
  }
}
.navbar__actions--desktop[_ngcontent-%COMP%] {
  display: none;
}
@media (min-width: 1024px) {
  .navbar__actions--desktop[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
}
.navbar__menu[_ngcontent-%COMP%] {
  align-items: center;
  gap: 1.6rem;
}
.navbar__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  position: relative;
}
.navbar__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 800;
  font-style: italic;
  font-size: 0.95rem;
  line-height: 1.1;
  color: #2a2a2a;
  text-decoration: none;
  border-radius: 8px;
  padding: 0.35rem 0.5rem;
  padding-left: 0.5rem;
  transition: all 0.18s ease;
}
.navbar__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #e15886;
  background: rgba(225, 88, 134, 0.1);
}
.navbar__menu[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {
  color: #e15886;
  background: rgba(225, 88, 134, 0.15);
  font-weight: 900;
}
.navbar__menu[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {
  font-size: 0.85em;
  transform: translateY(1px);
}
.navbar__dropdown[_ngcontent-%COMP%] {
  position: relative;
}
.navbar__dropdown[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 10px;
  background: transparent;
}
.navbar__dropdown-menu[_ngcontent-%COMP%] {
  position: absolute;
  top: calc(100% + 0.45rem);
  left: 0.5rem;
  background: #fff;
  border-radius: 12px;
  padding: 0.6rem;
  min-width: 240px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity 0.18s ease, transform 0.18s ease;
  z-index: 1000;
}
.navbar__dropdown-menu[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: -8px;
  left: calc(0.5rem + 16px);
  width: 14px;
  height: 14px;
  background: #fff;
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.06));
}
.navbar__dropdown-menu.is-open[_ngcontent-%COMP%] {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.navbar__dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  display: block;
  font-weight: 800;
  font-style: italic;
  font-size: 0.95rem;
  line-height: 1.25;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  color: #2a2a2a;
  transition: background-color 0.18s ease, color 0.18s ease;
}
.navbar__dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  background: #ece9ff;
  color: #e15886;
}
.navbar__dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {
  background: #e15886;
  color: #fff;
  font-weight: 900;
}
.btn.btn--secondary[_ngcontent-%COMP%] {
  background: #e15886;
  border: 2px solid #e15886;
  color: #fff;
  font-weight: 900;
  font-size: 0.95rem;
  padding: 0.45rem 0.9rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.18s ease;
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn.btn--secondary[_ngcontent-%COMP%]:hover {
  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);
  border-color: rgb(217.2335025381, 44.7664974619, 102.6751269036);
  color: #fff;
  box-shadow: 0 6px 16px rgba(225, 88, 134, 0.4);
  transform: translateY(-2px);
}
.btn.btn--secondary[_ngcontent-%COMP%]:active {
  transform: translateY(0);
  box-shadow: 0 3px 8px rgba(225, 88, 134, 0.3);
}
.lang[_ngcontent-%COMP%] {
  position: relative;
}
.lang[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 8px;
  background: transparent;
  z-index: 1001;
}
.lang__btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0.35rem 0.45rem;
  border-radius: 8px;
  color: #2a2a2a;
  font-weight: 800;
  font-style: italic;
  transition: background-color 0.18s ease, color 0.18s ease;
  min-height: 40px;
}
.lang__btn[_ngcontent-%COMP%]:hover {
  background: rgba(225, 88, 134, 0.1);
  color: #e15886;
}
.lang__btn[aria-expanded=true][_ngcontent-%COMP%] {
  background: rgba(225, 88, 134, 0.15);
  color: #e15886;
}
.lang__icon[_ngcontent-%COMP%] {
  font-size: 1rem;
  line-height: 1;
}
.lang__code[_ngcontent-%COMP%] {
  font-size: 0.9rem;
}
.lang__menu[_ngcontent-%COMP%] {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  background: #fff;
  border-radius: 12px;
  padding: 0.5rem;
  min-width: 140px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 1000;
}
.lang__menu[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: -6px;
  right: 12px;
  width: 12px;
  height: 12px;
  background: #fff;
  transform: rotate(45deg);
  box-shadow: -2px -2px 2px rgba(0, 0, 0, 0.05);
}
.lang__menu.is-open[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.lang__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  margin-bottom: 0.25rem;
}
.lang__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {
  margin-bottom: 0;
}
.lang__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  display: block;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  color: #2a2a2a;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92rem;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.lang__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  background: #ece9ff;
  color: #e15886;
}
.lang__menu[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {
  background: #e15886;
  color: #fff;
  font-weight: 800;
}
.user[_ngcontent-%COMP%] {
  position: relative;
}
.user__btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #e15886;
  color: #fff;
  border: 0;
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 800;
  font-style: italic;
  font-size: 0.95rem;
  transition: all 0.18s ease;
  min-height: 40px;
}
.user__btn[_ngcontent-%COMP%]:hover {
  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);
  box-shadow: 0 4px 12px rgba(225, 88, 134, 0.3);
}
.user__icon[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  line-height: 1;
}
.user__menu[_ngcontent-%COMP%] {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  list-style: none;
  margin: 0;
  padding: 8px 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  min-width: 220px;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 50;
}
.user__menu[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;
  height: 8px;
  background: transparent;
}
.user[_ngcontent-%COMP%]:hover   .user__menu[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding: 0;
}
.user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
.user[_ngcontent-%COMP%]   .as-link[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 10px 14px;
  background: transparent;
  color: #2a2a2a;
  text-align: left;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-style: italic;
  transition: background-color 0.16s ease, color 0.16s ease;
}
.user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before, 
.user[_ngcontent-%COMP%]   .as-link[_ngcontent-%COMP%]::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%]::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E");
}
.user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'/%3E%3C/svg%3E");
}
.user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   .as-link[_ngcontent-%COMP%]::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z'/%3E%3C/svg%3E");
}
.user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, 
.user[_ngcontent-%COMP%]   .as-link[_ngcontent-%COMP%]:hover {
  background: #ece9ff;
  color: #e15886;
}
.user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before, 
.user[_ngcontent-%COMP%]   .as-link[_ngcontent-%COMP%]:hover::before {
  filter: brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(1500%) hue-rotate(300deg);
}
.user[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {
  background: rgba(225, 88, 134, 0.1);
  color: #e15886;
}
.user[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%]::before {
  filter: brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(1500%) hue-rotate(300deg);
}
.mobile-user[_ngcontent-%COMP%] {
  position: relative;
  margin: 0.5rem 0.35rem;
}
.mobile-user__btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #e15886;
  color: #fff;
  border: 0;
  border-radius: 10px;
  padding: 0.75rem;
  cursor: pointer;
  font-weight: 800;
  font-style: italic;
  font-size: 0.95rem;
  width: 100%;
  transition: all 0.18s ease;
}
.mobile-user__btn[_ngcontent-%COMP%]:hover {
  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);
}
.mobile-user__icon[_ngcontent-%COMP%] {
  font-size: 1.1rem;
}
.mobile-user__menu[_ngcontent-%COMP%] {
  list-style: none;
  margin: 0.5rem 0 0 0;
  padding: 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  display: none;
  overflow: hidden;
}
.mobile-user__menu.is-open[_ngcontent-%COMP%] {
  display: block;
}
.mobile-user__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding: 0;
}
.mobile-user__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
.mobile-user__menu[_ngcontent-%COMP%]   .as-link[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  color: #2a2a2a;
  text-align: left;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-style: italic;
  transition: background-color 0.16s ease, color 0.16s ease;
}
.mobile-user__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before, 
.mobile-user__menu[_ngcontent-%COMP%]   .as-link[_ngcontent-%COMP%]::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.mobile-user__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%]::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E");
}
.mobile-user__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'/%3E%3C/svg%3E");
}
.mobile-user__menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   .as-link[_ngcontent-%COMP%]::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z'/%3E%3C/svg%3E");
}
.mobile-user__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, 
.mobile-user__menu[_ngcontent-%COMP%]   .as-link[_ngcontent-%COMP%]:hover {
  background: #ece9ff;
  color: #e15886;
}
.mobile-user__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before, 
.mobile-user__menu[_ngcontent-%COMP%]   .as-link[_ngcontent-%COMP%]:hover::before {
  filter: brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(1500%) hue-rotate(300deg);
}
.mobile-user__menu[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {
  background: rgba(225, 88, 134, 0.1);
  color: #e15886;
}
.mobile-user__menu[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%]::before {
  filter: brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(1500%) hue-rotate(300deg);
}
.mobile__backdrop[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 90;
}
.mobile__backdrop.is-open[_ngcontent-%COMP%] {
  opacity: 1;
  pointer-events: auto;
}
.mobile[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: min(86vw, 340px);
  background: #fff;
  box-shadow: -16px 0 28px rgba(0, 0, 0, 0.18);
  transform: translateX(100%);
  transition: transform 0.24s ease;
  z-index: 120;
  display: flex;
  flex-direction: column;
}
.mobile.is-open[_ngcontent-%COMP%] {
  transform: translateX(0);
}
@media (min-width: 1024px) {
  .mobile[_ngcontent-%COMP%] {
    display: none;
  }
}
.mobile__header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 0.9rem 0.3rem;
  border-bottom: 1px solid #eee;
}
.mobile__title[_ngcontent-%COMP%] {
  font-weight: 900;
  color: #2a2a2a;
}
.mobile__close[_ngcontent-%COMP%] {
  background: transparent;
  border: 0;
  font-size: 1.1rem;
  cursor: pointer;
}
.mobile__menu[_ngcontent-%COMP%] {
  padding: 0.5rem 0.4rem 1rem 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.mobile__menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {
  display: block;
  padding: 0.75rem 0.75rem;
  border-radius: 10px;
  text-decoration: none;
  color: #2a2a2a;
  font-weight: 800;
  font-style: italic;
  transition: all 0.16s ease;
}
.mobile__menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {
  background: #ece9ff;
  color: #e15886;
}
.mobile__menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.is-active[_ngcontent-%COMP%] {
  background: rgba(225, 88, 134, 0.15);
  color: #e15886;
  font-weight: 900;
}
.mobile__accordion[_ngcontent-%COMP%] {
  margin-top: 0.15rem;
}
.mobile__accordion-btn[_ngcontent-%COMP%] {
  width: 100%;
  text-align: left;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0.75rem 0.75rem;
  border-radius: 10px;
  color: #2a2a2a;
  font-weight: 900;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mobile__accordion-btn[_ngcontent-%COMP%]:hover {
  background: #ece9ff;
  color: #e15886;
}
.mobile__submenu[_ngcontent-%COMP%] {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.22s ease;
  margin: 0 0.35rem;
  border-left: 2px solid #ece9ff;
  border-radius: 8px;
}
.mobile__submenu.is-open[_ngcontent-%COMP%] {
  max-height: 400px;
}
.mobile__submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  display: block;
  padding: 0.6rem 0.75rem;
  margin: 0.15rem 0;
  border-radius: 8px;
  color: #2a2a2a;
  text-decoration: none;
  font-weight: 700;
  font-style: italic;
  transition: all 0.16s ease;
}
.mobile__submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  background: #ece9ff;
  color: #e15886;
}
.mobile__submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {
  background: rgba(225, 88, 134, 0.15);
  color: #e15886;
  font-weight: 900;
}
.mobile__login[_ngcontent-%COMP%] {
  padding: 0.5rem 0.35rem;
}
.mobile__login[_ngcontent-%COMP%]   .btn.btn--secondary[_ngcontent-%COMP%] {
  background: #e15886;
  border: 2px solid #e15886;
  color: #fff;
  font-weight: 900;
  font-size: 0.95rem;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  display: block;
  width: 100%;
  transition: all 0.18s ease;
}
.mobile__login[_ngcontent-%COMP%]   .btn.btn--secondary[_ngcontent-%COMP%]:hover {
  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);
  border-color: rgb(217.2335025381, 44.7664974619, 102.6751269036);
  color: #fff;
  box-shadow: 0 6px 16px rgba(225, 88, 134, 0.4);
  transform: translateY(-2px);
}
.mobile__lang[_ngcontent-%COMP%] {
  margin-top: 0.35rem;
  padding: 0.35rem 0.35rem 0.7rem;
}
.mobile__lang[_ngcontent-%COMP%]   .mobile__lang-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.4rem;
  color: #2a2a2a;
  font-weight: 800;
}
.mobile__lang[_ngcontent-%COMP%]   .mobile__lang-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  padding: 0 0.4rem;
}
.mobile__lang[_ngcontent-%COMP%]   .mobile__lang-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  border: 2px solid #e15886;
  background: transparent;
  color: #e15886;
  border-radius: 10px;
  padding: 0.4rem 0.75rem;
  font-weight: 900;
  cursor: pointer;
  transition: background 0.16s ease, color 0.16s ease;
}
.mobile__lang[_ngcontent-%COMP%]   .mobile__lang-actions[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%], 
.mobile__lang[_ngcontent-%COMP%]   .mobile__lang-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {
  background: #e15886;
  color: #fff;
}
.as-link[_ngcontent-%COMP%] {
  font-family: inherit;
  font-size: inherit;
}
@media (min-width: 1024px) {
  .navbar__actions--desktop[_ngcontent-%COMP%] {
    display: flex;
  }
}
/*# sourceMappingURL=navbar.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Navbar, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule, RouterModule], template: `<nav class="navbar">\r
  <div class="navbar__container">\r
\r
    <!-- Marca -->\r
    <a routerLink="/" class="navbar__brand" aria-label="Ma\xB4Care - Inicio">\r
      <img src="/Logo.jpg" alt="Ma\xB4Care" class="navbar__logo-img" />\r
      <span class="navbar__brand-name">Ma\xB4Care</span>\r
    </a>\r
\r
    <!-- Bot\xF3n Hamburguesa (m\xF3vil) -->\r
    <button class="navbar__burger"\r
            aria-label="Abrir men\xFA"\r
            aria-controls="mobile-panel"\r
            [attr.aria-expanded]="isMobileMenuOpen"\r
            (click)="toggleMobileMenu()">\r
      <span></span><span></span><span></span>\r
    </button>\r
\r
    <!-- Men\xFA Desktop -->\r
    <ul class="navbar__menu navbar__menu--desktop" role="menubar">\r
      <li>\r
        <a routerLink="/quienes-somos" routerLinkActive="is-active" role="menuitem">\xBFQui\xE9nes somos?</a>\r
      </li>\r
\r
      <li>\r
        <a routerLink="/kits" routerLinkActive="is-active" role="menuitem">Kits</a>\r
      </li>\r
\r
      <!-- Enlace directo (reemplaza el antiguo dropdown de Servicios) -->\r
      <li>\r
        <a routerLink="/acompanamiento" routerLinkActive="is-active" role="menuitem">Acompa\xF1amiento Psicol\xF3gico</a>\r
      </li>\r
\r
      <li>\r
        <a routerLink="/recursos" routerLinkActive="is-active" role="menuitem">Recursos</a>\r
      </li>\r
\r
      <li>\r
        <a routerLink="/historias" routerLinkActive="is-active" role="menuitem">Historias</a>\r
      </li>\r
\r
      <li>\r
        <a routerLink="/contacto" routerLinkActive="is-active" role="menuitem">Contacto</a>\r
      </li>\r
    </ul>\r
\r
    <!-- Acciones Desktop -->\r
    <div class="navbar__actions navbar__actions--desktop">\r
      <!-- Si NO est\xE1 logueado: bot\xF3n Iniciar sesi\xF3n -->\r
      <a *ngIf="!isLoggedIn"\r
         routerLink="/login"\r
         class="btn btn--secondary">Iniciar sesi\xF3n</a>\r
\r
      <!-- Si S\xCD est\xE1 logueado: dropdown con nombre e icono (AUTO HOVER) -->\r
      <div *ngIf="isLoggedIn" class="user">\r
        <button class="user__btn">\r
          <span class="user__icon">\u{1F464}</span>\r
          {{ displayName }} <span class="caret">\u25BE</span>\r
        </button>\r
        <ul class="user__menu">\r
          <li><a routerLink="/profile" routerLinkActive="is-active" (click)="closeUserMenu()">Mi Cuenta</a></li>\r
          \r
          <!-- \u2705 NUEVO: Paneles seg\xFAn rol -->\r
          <li *ngIf="isAdmin">\r
            <a routerLink="/Panel-admin" routerLinkActive="is-active" (click)="closeUserMenu()">\r
              Panel de Administraci\xF3n\r
            </a>\r
          </li>\r
          \r
          <li *ngIf="isProfesional">\r
            <a routerLink="/Panel-profesional" routerLinkActive="is-active" (click)="closeUserMenu()">\r
              Panel Profesional\r
            </a>\r
          </li>\r
          \r
          <li *ngIf="isPaciente">\r
            <a routerLink="/Panel-paciente" routerLinkActive="is-active" (click)="closeUserMenu()">\r
              Panel Paciente\r
            </a>\r
          </li>\r
          \r
          <li *ngIf="isVoluntario">\r
            <a routerLink="/Panel-voluntario" routerLinkActive="is-active" (click)="closeUserMenu()">\r
              Panel Voluntario\r
            </a>\r
          </li>\r
\r
          <li><button type="button" class="as-link" (click)="onLogout()">Salir</button></li>\r
        </ul>\r
      </div>\r
\r
      <!-- Selector de idioma (desktop) -->\r
      <div class="lang" \r
           (mouseenter)="openLang()" \r
           (mouseleave)="closeLangWithDelay()">\r
        <button class="lang__btn" \r
                (click)="toggleLang($event)" \r
                aria-haspopup="true" \r
                [attr.aria-expanded]="isLangOpen">\r
          <span class="lang__icon" aria-hidden="true">\u{1F310}</span>\r
          <span class="lang__code">{{ currentLang.toUpperCase() }}</span>\r
          <span class="caret">\u25BE</span>\r
        </button>\r
        <ul class="lang__menu" \r
            [class.is-open]="isLangOpen"\r
            (mouseenter)="keepLangOpen()"\r
            (mouseleave)="closeLangWithDelay()">\r
          <li>\r
            <a href="#" \r
               (click)="setLanguage($event, 'es')"\r
               [class.is-active]="currentLang === 'es'">\r
              Espa\xF1ol\r
            </a>\r
          </li>\r
          <li>\r
            <a href="#" \r
               (click)="setLanguage($event, 'en')"\r
               [class.is-active]="currentLang === 'en'">\r
              English\r
            </a>\r
          </li>\r
        </ul>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- Panel m\xF3vil -->\r
  <div id="mobile-panel" class="mobile" [class.is-open]="isMobileMenuOpen" (click)="$event.stopPropagation()">\r
    <div class="mobile__header">\r
      <span class="mobile__title">Men\xFA</span>\r
      <button class="mobile__close" aria-label="Cerrar men\xFA" (click)="closeMobileMenu()">\u2715</button>\r
    </div>\r
\r
    <ul class="mobile__menu">\r
      <li><a routerLink="/quienes-somos" routerLinkActive="is-active" (click)="closeMobileMenu()">\xBFQui\xE9nes somos?</a></li>\r
      <li><a routerLink="/kits" routerLinkActive="is-active" (click)="closeMobileMenu()">Kits</a></li>\r
\r
      <!-- Enlace directo (sin acorde\xF3n de Servicios) -->\r
      <li><a routerLink="/acompanamiento" routerLinkActive="is-active" (click)="closeMobileMenu()">Acompa\xF1amiento Psicol\xF3gico</a></li>\r
\r
      <li><a routerLink="/recursos" routerLinkActive="is-active" (click)="closeMobileMenu()">Recursos</a></li>\r
      <li><a routerLink="/historias" routerLinkActive="is-active" (click)="closeMobileMenu()">Historias</a></li>\r
      <li><a routerLink="/contacto" routerLinkActive="is-active" (click)="closeMobileMenu()">Contacto</a></li>\r
\r
      <!-- Si NO est\xE1 logueado: bot\xF3n Iniciar sesi\xF3n -->\r
      <li class="mobile__login" *ngIf="!isLoggedIn">\r
        <a routerLink="/login" class="btn btn--secondary" (click)="closeMobileMenu()">Iniciar sesi\xF3n</a>\r
      </li>\r
\r
      <!-- Si S\xCD est\xE1 logueado: dropdown de usuario en m\xF3vil (SOLO SE ABRE CON CLICK) -->\r
      <li class="mobile__login" *ngIf="isLoggedIn">\r
        <div class="mobile-user">\r
          <button class="mobile-user__btn" \r
                  (click)="toggleUserMenu($event)" \r
                  aria-haspopup="true" \r
                  [attr.aria-expanded]="isUserMenuOpen">\r
            <span class="mobile-user__icon">\u{1F464}</span>\r
            {{ displayName }} <span class="caret">\u25BE</span>\r
          </button>\r
          <ul class="mobile-user__menu" [class.is-open]="isUserMenuOpen">\r
            <li><a routerLink="/profile" routerLinkActive="is-active" (click)="closeUserMenu(); closeMobileMenu()">Mi Cuenta</a></li>\r
            \r
            <!-- \u2705 NUEVO: Paneles seg\xFAn rol (m\xF3vil) -->\r
            <li *ngIf="isAdmin">\r
              <a routerLink="/admin" routerLinkActive="is-active" (click)="closeUserMenu(); closeMobileMenu()">\r
                Panel de Administraci\xF3n\r
              </a>\r
            </li>\r
            \r
            <li *ngIf="isProfesional">\r
              <a routerLink="/profesional" routerLinkActive="is-active" (click)="closeUserMenu(); closeMobileMenu()">\r
                Panel Profesional\r
              </a>\r
            </li>\r
            \r
            <li *ngIf="isPaciente">\r
              <a routerLink="/paciente" routerLinkActive="is-active" (click)="closeUserMenu(); closeMobileMenu()">\r
                Panel Paciente\r
              </a>\r
            </li>\r
            \r
            <li *ngIf="isVoluntario">\r
              <a routerLink="/voluntario" routerLinkActive="is-active" (click)="closeUserMenu(); closeMobileMenu()">\r
                Panel Voluntario\r
              </a>\r
            </li>\r
\r
            <li><button type="button" class="as-link" (click)="onLogout()">Salir</button></li>\r
          </ul>\r
        </div>\r
      </li>\r
\r
      <!-- Idioma m\xF3vil -->\r
      <li class="mobile__lang">\r
        <div class="mobile__lang-row">\r
          <span class="mobile__lang-label">\u{1F310} Idioma</span>\r
          <span class="mobile__lang-current">{{ currentLang.toUpperCase() }}</span>\r
        </div>\r
        <div class="mobile__lang-actions">\r
          <button (click)="setLanguage($event, 'es')" [class.is-active]="currentLang==='es'">ES</button>\r
          <button (click)="setLanguage($event, 'en')" [class.is-active]="currentLang==='en'">EN</button>\r
        </div>\r
      </li>\r
    </ul>\r
  </div>\r
\r
  <!-- backdrop m\xF3vil -->\r
  <div class="mobile__backdrop" [class.is-open]="isMobileMenuOpen" (click)="closeMobileMenu()"></div>\r
</nav>`, styles: [`@charset "UTF-8";

/* src/app/shared/navbar/navbar.scss */
.navbar {
  background: #f7d3e1;
  border-bottom: 1px solid rgb(252.1827411168, 239.3172588832, 243.6370558376);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  font-family:
    "Sour Gummy",
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  position: relative;
  z-index: 100;
}
.navbar__container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  min-height: 60px;
}
.navbar__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  text-decoration: none;
}
.navbar__logo-img {
  height: 44px;
  width: 44px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.6);
}
.navbar__brand-name {
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 0.2px;
  color: rgb(221.116751269, 66.383248731, 118.3375634518);
}
.navbar ul,
.navbar li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar__burger {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0.35rem;
}
.navbar__burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #2a2a2a;
  border-radius: 2px;
}
@media (min-width: 1024px) {
  .navbar__burger {
    display: none;
  }
}
.navbar__menu--desktop {
  display: none;
}
@media (min-width: 1024px) {
  .navbar__menu--desktop {
    display: flex;
  }
}
.navbar__actions--desktop {
  display: none;
}
@media (min-width: 1024px) {
  .navbar__actions--desktop {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
}
.navbar__menu {
  align-items: center;
  gap: 1.6rem;
}
.navbar__menu li {
  position: relative;
}
.navbar__menu a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 800;
  font-style: italic;
  font-size: 0.95rem;
  line-height: 1.1;
  color: #2a2a2a;
  text-decoration: none;
  border-radius: 8px;
  padding: 0.35rem 0.5rem;
  padding-left: 0.5rem;
  transition: all 0.18s ease;
}
.navbar__menu a:hover {
  color: #e15886;
  background: rgba(225, 88, 134, 0.1);
}
.navbar__menu a.is-active {
  color: #e15886;
  background: rgba(225, 88, 134, 0.15);
  font-weight: 900;
}
.navbar__menu .caret {
  font-size: 0.85em;
  transform: translateY(1px);
}
.navbar__dropdown {
  position: relative;
}
.navbar__dropdown::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 10px;
  background: transparent;
}
.navbar__dropdown-menu {
  position: absolute;
  top: calc(100% + 0.45rem);
  left: 0.5rem;
  background: #fff;
  border-radius: 12px;
  padding: 0.6rem;
  min-width: 240px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity 0.18s ease, transform 0.18s ease;
  z-index: 1000;
}
.navbar__dropdown-menu::before {
  content: "";
  position: absolute;
  top: -8px;
  left: calc(0.5rem + 16px);
  width: 14px;
  height: 14px;
  background: #fff;
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
  filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.06));
}
.navbar__dropdown-menu.is-open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.navbar__dropdown-menu li a {
  display: block;
  font-weight: 800;
  font-style: italic;
  font-size: 0.95rem;
  line-height: 1.25;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  color: #2a2a2a;
  transition: background-color 0.18s ease, color 0.18s ease;
}
.navbar__dropdown-menu li a:hover {
  background: #ece9ff;
  color: #e15886;
}
.navbar__dropdown-menu li a.is-active {
  background: #e15886;
  color: #fff;
  font-weight: 900;
}
.btn.btn--secondary {
  background: #e15886;
  border: 2px solid #e15886;
  color: #fff;
  font-weight: 900;
  font-size: 0.95rem;
  padding: 0.45rem 0.9rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.18s ease;
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn.btn--secondary:hover {
  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);
  border-color: rgb(217.2335025381, 44.7664974619, 102.6751269036);
  color: #fff;
  box-shadow: 0 6px 16px rgba(225, 88, 134, 0.4);
  transform: translateY(-2px);
}
.btn.btn--secondary:active {
  transform: translateY(0);
  box-shadow: 0 3px 8px rgba(225, 88, 134, 0.3);
}
.lang {
  position: relative;
}
.lang::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 8px;
  background: transparent;
  z-index: 1001;
}
.lang__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0.35rem 0.45rem;
  border-radius: 8px;
  color: #2a2a2a;
  font-weight: 800;
  font-style: italic;
  transition: background-color 0.18s ease, color 0.18s ease;
  min-height: 40px;
}
.lang__btn:hover {
  background: rgba(225, 88, 134, 0.1);
  color: #e15886;
}
.lang__btn[aria-expanded=true] {
  background: rgba(225, 88, 134, 0.15);
  color: #e15886;
}
.lang__icon {
  font-size: 1rem;
  line-height: 1;
}
.lang__code {
  font-size: 0.9rem;
}
.lang__menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  background: #fff;
  border-radius: 12px;
  padding: 0.5rem;
  min-width: 140px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 1000;
}
.lang__menu::before {
  content: "";
  position: absolute;
  top: -6px;
  right: 12px;
  width: 12px;
  height: 12px;
  background: #fff;
  transform: rotate(45deg);
  box-shadow: -2px -2px 2px rgba(0, 0, 0, 0.05);
}
.lang__menu.is-open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.lang__menu li {
  margin-bottom: 0.25rem;
}
.lang__menu li:last-child {
  margin-bottom: 0;
}
.lang__menu a {
  display: block;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  color: #2a2a2a;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92rem;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.lang__menu a:hover {
  background: #ece9ff;
  color: #e15886;
}
.lang__menu a.is-active {
  background: #e15886;
  color: #fff;
  font-weight: 800;
}
.user {
  position: relative;
}
.user__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #e15886;
  color: #fff;
  border: 0;
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 800;
  font-style: italic;
  font-size: 0.95rem;
  transition: all 0.18s ease;
  min-height: 40px;
}
.user__btn:hover {
  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);
  box-shadow: 0 4px 12px rgba(225, 88, 134, 0.3);
}
.user__icon {
  font-size: 1.1rem;
  line-height: 1;
}
.user__menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  list-style: none;
  margin: 0;
  padding: 8px 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  min-width: 220px;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 50;
}
.user__menu::before {
  content: "";
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;
  height: 8px;
  background: transparent;
}
.user:hover .user__menu {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.user li {
  padding: 0;
}
.user a,
.user .as-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 10px 14px;
  background: transparent;
  color: #2a2a2a;
  text-align: left;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-style: italic;
  transition: background-color 0.16s ease, color 0.16s ease;
}
.user a::before,
.user .as-link::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.user li:first-child a::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E");
}
.user li:nth-child(2) a::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'/%3E%3C/svg%3E");
}
.user li:last-child .as-link::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z'/%3E%3C/svg%3E");
}
.user a:hover,
.user .as-link:hover {
  background: #ece9ff;
  color: #e15886;
}
.user a:hover::before,
.user .as-link:hover::before {
  filter: brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(1500%) hue-rotate(300deg);
}
.user a.is-active {
  background: rgba(225, 88, 134, 0.1);
  color: #e15886;
}
.user a.is-active::before {
  filter: brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(1500%) hue-rotate(300deg);
}
.mobile-user {
  position: relative;
  margin: 0.5rem 0.35rem;
}
.mobile-user__btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #e15886;
  color: #fff;
  border: 0;
  border-radius: 10px;
  padding: 0.75rem;
  cursor: pointer;
  font-weight: 800;
  font-style: italic;
  font-size: 0.95rem;
  width: 100%;
  transition: all 0.18s ease;
}
.mobile-user__btn:hover {
  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);
}
.mobile-user__icon {
  font-size: 1.1rem;
}
.mobile-user__menu {
  list-style: none;
  margin: 0.5rem 0 0 0;
  padding: 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  display: none;
  overflow: hidden;
}
.mobile-user__menu.is-open {
  display: block;
}
.mobile-user__menu li {
  padding: 0;
}
.mobile-user__menu a,
.mobile-user__menu .as-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  color: #2a2a2a;
  text-align: left;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-style: italic;
  transition: background-color 0.16s ease, color 0.16s ease;
}
.mobile-user__menu a::before,
.mobile-user__menu .as-link::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.mobile-user__menu li:first-child a::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E");
}
.mobile-user__menu li:nth-child(2) a::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z'/%3E%3C/svg%3E");
}
.mobile-user__menu li:last-child .as-link::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232a2a2a'%3E%3Cpath d='M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z'/%3E%3C/svg%3E");
}
.mobile-user__menu a:hover,
.mobile-user__menu .as-link:hover {
  background: #ece9ff;
  color: #e15886;
}
.mobile-user__menu a:hover::before,
.mobile-user__menu .as-link:hover::before {
  filter: brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(1500%) hue-rotate(300deg);
}
.mobile-user__menu a.is-active {
  background: rgba(225, 88, 134, 0.1);
  color: #e15886;
}
.mobile-user__menu a.is-active::before {
  filter: brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(1500%) hue-rotate(300deg);
}
.mobile__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 90;
}
.mobile__backdrop.is-open {
  opacity: 1;
  pointer-events: auto;
}
.mobile {
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: min(86vw, 340px);
  background: #fff;
  box-shadow: -16px 0 28px rgba(0, 0, 0, 0.18);
  transform: translateX(100%);
  transition: transform 0.24s ease;
  z-index: 120;
  display: flex;
  flex-direction: column;
}
.mobile.is-open {
  transform: translateX(0);
}
@media (min-width: 1024px) {
  .mobile {
    display: none;
  }
}
.mobile__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 0.9rem 0.3rem;
  border-bottom: 1px solid #eee;
}
.mobile__title {
  font-weight: 900;
  color: #2a2a2a;
}
.mobile__close {
  background: transparent;
  border: 0;
  font-size: 1.1rem;
  cursor: pointer;
}
.mobile__menu {
  padding: 0.5rem 0.4rem 1rem 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.mobile__menu > li > a {
  display: block;
  padding: 0.75rem 0.75rem;
  border-radius: 10px;
  text-decoration: none;
  color: #2a2a2a;
  font-weight: 800;
  font-style: italic;
  transition: all 0.16s ease;
}
.mobile__menu > li > a:hover {
  background: #ece9ff;
  color: #e15886;
}
.mobile__menu > li > a.is-active {
  background: rgba(225, 88, 134, 0.15);
  color: #e15886;
  font-weight: 900;
}
.mobile__accordion {
  margin-top: 0.15rem;
}
.mobile__accordion-btn {
  width: 100%;
  text-align: left;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0.75rem 0.75rem;
  border-radius: 10px;
  color: #2a2a2a;
  font-weight: 900;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mobile__accordion-btn:hover {
  background: #ece9ff;
  color: #e15886;
}
.mobile__submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.22s ease;
  margin: 0 0.35rem;
  border-left: 2px solid #ece9ff;
  border-radius: 8px;
}
.mobile__submenu.is-open {
  max-height: 400px;
}
.mobile__submenu li a {
  display: block;
  padding: 0.6rem 0.75rem;
  margin: 0.15rem 0;
  border-radius: 8px;
  color: #2a2a2a;
  text-decoration: none;
  font-weight: 700;
  font-style: italic;
  transition: all 0.16s ease;
}
.mobile__submenu li a:hover {
  background: #ece9ff;
  color: #e15886;
}
.mobile__submenu li a.is-active {
  background: rgba(225, 88, 134, 0.15);
  color: #e15886;
  font-weight: 900;
}
.mobile__login {
  padding: 0.5rem 0.35rem;
}
.mobile__login .btn.btn--secondary {
  background: #e15886;
  border: 2px solid #e15886;
  color: #fff;
  font-weight: 900;
  font-size: 0.95rem;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  display: block;
  width: 100%;
  transition: all 0.18s ease;
}
.mobile__login .btn.btn--secondary:hover {
  background: rgb(217.2335025381, 44.7664974619, 102.6751269036);
  border-color: rgb(217.2335025381, 44.7664974619, 102.6751269036);
  color: #fff;
  box-shadow: 0 6px 16px rgba(225, 88, 134, 0.4);
  transform: translateY(-2px);
}
.mobile__lang {
  margin-top: 0.35rem;
  padding: 0.35rem 0.35rem 0.7rem;
}
.mobile__lang .mobile__lang-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.4rem;
  color: #2a2a2a;
  font-weight: 800;
}
.mobile__lang .mobile__lang-actions {
  display: flex;
  gap: 0.5rem;
  padding: 0 0.4rem;
}
.mobile__lang .mobile__lang-actions button {
  border: 2px solid #e15886;
  background: transparent;
  color: #e15886;
  border-radius: 10px;
  padding: 0.4rem 0.75rem;
  font-weight: 900;
  cursor: pointer;
  transition: background 0.16s ease, color 0.16s ease;
}
.mobile__lang .mobile__lang-actions button.is-active,
.mobile__lang .mobile__lang-actions button:hover {
  background: #e15886;
  color: #fff;
}
.as-link {
  font-family: inherit;
  font-size: inherit;
}
@media (min-width: 1024px) {
  .navbar__actions--desktop {
    display: flex;
  }
}
/*# sourceMappingURL=navbar.css.map */
`] }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onEsc: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }], onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Navbar, { className: "Navbar", filePath: "src/app/shared/navbar/navbar.ts", lineNumber: 13 });
})();

// src/app/shared/footer/footer.ts
var Footer = class _Footer {
  year = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 2, vars: 0, template: function Footer_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "footer works!");
      \u0275\u0275domElementEnd();
    }
  }, dependencies: [RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterModule], template: "<p>footer works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/shared/footer/footer.ts", lineNumber: 11 });
})();

// src/app/app.ts
var App = class _App {
  title = signal("frontend", ...ngDevMode ? [{ debugName: "title" }] : []);
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[2, "padding-top", "72px", "min-height", "70vh"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "main", 0);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-footer");
    }
  }, dependencies: [RouterOutlet, Navbar, Footer], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, Navbar, Footer], template: '<app-navbar></app-navbar>\r\n\r\n<main style="padding-top:72px; min-height:70vh">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<app-footer></app-footer>\r\n', styles: ["/* src/app/app.scss */\nmain {\n  padding-top: 0 !important;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 13 });
})();

// src/app/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn())
    return true;
  router.navigate(["/login"]);
  return false;
};

// src/app/guards/admin-guard.ts
var adminGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log("\u{1F6E1}\uFE0F Admin Guard ejecut\xE1ndose...");
  if (!authService.isLoggedIn()) {
    console.log("\u274C No est\xE1 logueado - redirigiendo a login");
    router.navigate(["/login"]);
    return false;
  }
  const currentUser = authService.currentUser();
  console.log("\u{1F464} Usuario actual:", currentUser);
  if (currentUser?.role === "admin") {
    console.log("\u2705 Acceso permitido - Es admin");
    return true;
  }
  console.log("\u274C Acceso denegado - No es admin");
  router.navigate(["/"]);
  return false;
};

// src/app/guards/paciente-guard.ts
var pacienteGuard = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn()) {
    return router.createUrlTree(["/login"], { queryParams: { redirect: state.url } });
  }
  const role = (auth.currentUser()?.role || "").toLowerCase();
  return role === "paciente" || role === "patient" || role === "admin" ? true : router.createUrlTree(["/inicio"]);
};

// src/app/guards/profesional-guard.ts
var profesionalGuard = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn()) {
    return router.createUrlTree(["/login"], { queryParams: { redirect: state.url } });
  }
  const role = (auth.currentUser()?.role || "").toLowerCase();
  return role === "profesional" || role === "professional" || role === "admin" ? true : router.createUrlTree(["/inicio"]);
};

// src/app/app.routes.ts
var routes = [
  // Home
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: "full"
  },
  {
    path: "inicio",
    title: "Ma\xB4Care | Inicio",
    loadComponent: () => import("./chunk-HGLMWJFM.js").then((m) => m.Inicio)
  },
  // Secciones principales
  {
    path: "quienes-somos",
    title: "Ma\xB4Care | \xBFQui\xE9nes somos?",
    loadComponent: () => import("./chunk-RYWMDWPS.js").then((m) => m.QuienesSomos)
  },
  {
    path: "kits",
    title: "Ma\xB4Care | Kits",
    loadComponent: () => import("./chunk-WLS2UO4W.js").then((m) => m.Kits)
  },
  {
    path: "acompanamiento",
    title: "Ma\xB4Care | Acompa\xF1amiento",
    loadComponent: () => import("./chunk-A42LFJWJ.js").then((m) => m.Acompanamiento)
  },
  {
    path: "recursos",
    title: "Ma\xB4Care | Recursos",
    loadComponent: () => import("./chunk-RKDLNALP.js").then((m) => m.Recursos)
  },
  {
    path: "historias",
    title: "Ma\xB4Care | Historias",
    loadComponent: () => import("./chunk-MHJFESU3.js").then((m) => m.Historias)
  },
  {
    path: "contacto",
    title: "Ma\xB4Care | Contacto",
    loadComponent: () => import("./chunk-YEEYBLM3.js").then((m) => m.Contacto)
  },
  // 🔐 Autenticación
  {
    path: "login",
    title: "Ma\xB4Care | Iniciar sesi\xF3n",
    loadComponent: () => import("./chunk-7ZOBDUND.js").then((m) => m.Login)
  },
  {
    path: "register",
    title: "Ma\xB4Care | Crear cuenta",
    loadComponent: () => import("./chunk-QIIARWYU.js").then((m) => m.Register)
  },
  {
    path: "forgot-password",
    title: "Ma\xB4Care | Recuperar contrase\xF1a",
    loadComponent: () => import("./chunk-6FF7IOWZ.js").then((m) => m.ForgotPassword)
  },
  {
    path: "reset-password/:token",
    title: "Ma\xB4Care | Restablecer contrase\xF1a",
    loadComponent: () => import("./chunk-5UGDLUJS.js").then((m) => m.ResetPassword)
  },
  {
    path: "profile",
    title: "Ma\xB4Care | Profile",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-WQOVXVUH.js").then((m) => m.Profile)
  },
  // 👑 Panel de Administración
  {
    path: "Panel-admin",
    title: "Ma\xB4Care | Panel de Administraci\xF3n",
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import("./chunk-CQOF7U7J.js").then((m) => m.AdminPanel)
  },
  {
    path: "admin/dashboard",
    title: "Ma\xB4Care | Dashboard Admin",
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import("./chunk-VMGAFJ2N.js").then((m) => m.Dashboard)
  },
  {
    path: "admin/users/user-list",
    title: "Ma\xB4Care | Lista de Usuarios",
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import("./chunk-ALQ6HFS7.js").then((m) => m.UserList)
  },
  {
    path: "admin/users/user-edit/:id",
    title: "Ma\xB4Care | Editar Usuario",
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import("./chunk-B7RQ2JCX.js").then((m) => m.UserEdit)
  },
  {
    path: "admin/appointments",
    title: "Ma\xB4Care | Gesti\xF3n de Sesiones",
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import("./chunk-3QVGX5N4.js").then((m) => m.Appointments)
  },
  // 👨‍⚕️ PANEL PROFESIONAL - RUTAS AGREGADAS
  {
    path: "Panel-profesional",
    title: "Ma\xB4Care | Panel Profesional",
    canActivate: [authGuard, profesionalGuard],
    loadComponent: () => import("./chunk-ZLTEKFQX.js").then((m) => m.ProfesionalPanel)
  },
  {
    path: "profesional/citas",
    title: "Ma\xB4Care | Gesti\xF3n de Citas",
    canActivate: [authGuard, profesionalGuard],
    loadComponent: () => import("./chunk-I3JXN5XA.js").then((m) => m.Appointments)
  },
  {
    path: "profesional/agenda",
    title: "Ma\xB4Care | Mi Agenda",
    canActivate: [authGuard, profesionalGuard],
    loadComponent: () => import("./chunk-L2E4KHND.js").then((m) => m.Agenda)
  },
  {
    path: "profesional/pacientes",
    title: "Ma\xB4Care | Mis Pacientes",
    canActivate: [authGuard, profesionalGuard],
    loadComponent: () => import("./chunk-SBEISIQM.js").then((m) => m.Pacientes)
  },
  {
    path: "profesional/citas/:id",
    title: "Ma\xB4Care | Detalles de Cita",
    canActivate: [authGuard, profesionalGuard],
    loadComponent: () => import("./chunk-65Z5L4CQ.js").then((m) => m.CitaDetalles)
  },
  // 👤 Paneles por rol
  {
    path: "Panel-paciente",
    title: "Ma\xB4Care | Panel Paciente",
    canActivate: [authGuard, pacienteGuard],
    loadComponent: () => import("./chunk-7LL5ENKY.js").then((m) => m.PacientePanel)
  },
  {
    path: "Panel-voluntario",
    title: "Ma\xB4Care | Panel Voluntario",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-HA7HDADB.js").then((m) => m.VoluntarioPanel)
  },
  // Not found → Inicio
  {
    path: "**",
    redirectTo: "inicio"
  }
];

// src/app/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.token();
  if (token) {
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(cloned);
  }
  return next(req);
};

// src/main.ts
bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    // 👇 Activa HttpClient + agrega el interceptor del token
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
