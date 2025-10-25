import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-6P7TFCYF.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-Q4BX36PF.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DEJWN6HZ.js";

// src/app/pages/acompanamiento/acompanamiento.ts
function Acompanamiento_div_37_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bullet_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", bullet_r1, " ");
  }
}
function Acompanamiento_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275element(2, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 48);
    \u0275\u0275template(6, Acompanamiento_div_37_li_6_Template, 3, 1, "li", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 50);
    \u0275\u0275element(8, "i", 51);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const modalidad_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-lucide", modalidad_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(modalidad_r2.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", modalidad_r2.bullets);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", modalidad_r2.cta == null ? null : modalidad_r2.cta.link);
    \u0275\u0275attribute("aria-label", modalidad_r2.cta == null ? null : modalidad_r2.cta.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", modalidad_r2.cta == null ? null : modalidad_r2.cta.label, " ");
  }
}
function Acompanamiento_div_55_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paquete_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", paquete_r3.badge, " ");
  }
}
function Acompanamiento_div_55_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-lucide", ctx_r4.iconFor(mod_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mod_r4 === "individual" ? "Individual" : mod_r4 === "grupal" ? "Grupal" : "Talleres", " ");
  }
}
function Acompanamiento_div_55_li_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r6, " ");
  }
}
function Acompanamiento_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275template(2, Acompanamiento_div_55_div_2_Template, 2, 1, "div", 55);
    \u0275\u0275elementStart(3, "h3", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 59);
    \u0275\u0275template(10, Acompanamiento_div_55_span_10_Template, 3, 2, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 61)(12, "h4");
    \u0275\u0275text(13, "Incluye:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ul");
    \u0275\u0275template(15, Acompanamiento_div_55_li_15_Template, 3, 1, "li", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 62)(17, "div", 63);
    \u0275\u0275element(18, "i", 64);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "a", 65);
    \u0275\u0275element(22, "i", 8);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const paquete_r3 = ctx.$implicit;
    \u0275\u0275classProp("featured", paquete_r3.nombre === "Integral");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", paquete_r3.badge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(paquete_r3.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(paquete_r3.precioDesde);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(paquete_r3.resumen);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", paquete_r3.modalidades);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", paquete_r3.incluye);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Incluye Kit ", paquete_r3.kit);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", paquete_r3.cta.link);
    \u0275\u0275attribute("aria-label", paquete_r3.cta.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", paquete_r3.cta.label, " ");
  }
}
var Acompanamiento = class _Acompanamiento {
  router = inject(Router);
  modalidades = [
    {
      slug: "individual",
      titulo: "Sesiones Individuales",
      bullets: [
        "50 minutos por sesi\xF3n personalizada",
        "Psic\xF3logas especializadas en oncolog\xEDa",
        "Modalidad presencial o virtual",
        "Confidencialidad y espacio seguro garantizado",
        "Enfoque cl\xEDnico-humanista"
      ],
      icon: "user",
      cta: { label: "Solicitar informaci\xF3n", link: "/contacto" }
    },
    {
      slug: "grupal",
      titulo: "Terapia Grupal",
      bullets: [
        "Grupos reducidos de 6-8 participantes",
        "Sesiones semanales de 90 minutos",
        "Tem\xE1ticas: ansiedad, autoimagen, afrontamiento",
        "Gu\xEDa profesional especializada",
        "Apoyo entre pares y comunidad"
      ],
      icon: "users",
      cta: { label: "Ver grupos disponibles", link: "/contacto" }
    },
    {
      slug: "talleres",
      titulo: "Talleres Educativos",
      bullets: [
        "Programas de 4-6 sesiones",
        "Materiales y recursos incluidos",
        "Ejercicios para casa",
        "Bienestar emocional y familiar",
        "Certificado de participaci\xF3n"
      ],
      icon: "book-open",
      cta: { label: "Explorar talleres", link: "/contacto" }
    }
  ];
  paquetes = [
    {
      nombre: "Esencial",
      incluye: [
        "4 sesiones psicol\xF3gicas presenciales",
        "Evaluaci\xF3n y plan terap\xE9utico",
        "Seguimiento b\xE1sico entre sesiones",
        "Materiales de apoyo digital"
      ],
      resumen: "Ideal para comenzar con acompa\xF1amiento cercano y herramientas esenciales.",
      precioDesde: "$280.000 COP",
      cta: { label: "Solicitar paquete", link: "/contacto" },
      badge: void 0,
      modalidades: ["individual"],
      kit: "B\xE1sico"
    },
    {
      nombre: "Integral",
      incluye: [
        "8 sesiones (presenciales + virtuales)",
        "Plan terap\xE9utico integral",
        "Seguimiento continuo y recursos QR",
        "Acceso a comunidad de apoyo",
        "2 sesiones familiares incluidas"
      ],
      resumen: "Programa completo que combina modalidades para una experiencia profunda.",
      precioDesde: "$650.000 COP",
      cta: { label: "Solicitar paquete", link: "/contacto" },
      badge: "RECOMENDADO",
      modalidades: ["individual", "grupal"],
      kit: "Intermedio"
    },
    {
      nombre: "Premium",
      incluye: [
        "12 sesiones (presenciales + virtuales + a domicilio)",
        "Seguimiento intensivo y recursos premium",
        "Acompa\xF1amiento familiar completo",
        "Sesiones de emergencia incluidas",
        "Coaching emocional personalizado"
      ],
      resumen: "M\xE1xima personalizaci\xF3n, acompa\xF1amiento intensivo y recursos exclusivos.",
      precioDesde: "$1.200.000 COP",
      cta: { label: "Solicitar paquete", link: "/contacto" },
      badge: void 0,
      modalidades: ["individual", "grupal", "talleres"],
      kit: "Premium"
    }
  ];
  ngOnInit() {
  }
  ngAfterViewInit() {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
  // Helpers
  iconFor(slug) {
    const m = this.modalidades.find((x) => x.slug === slug);
    return m?.icon ?? "help-circle";
  }
  agendarCita() {
    this.router.navigateByUrl("/contacto");
  }
  scrollToPaquetes() {
    const el = document.getElementById("paquetes");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  solicitarModalidad(modalidad) {
    this.router.navigateByUrl("/contacto");
  }
  solicitarPaquete(_) {
    this.router.navigateByUrl("/contacto");
  }
  contactar() {
    this.router.navigateByUrl("/contacto");
  }
  static \u0275fac = function Acompanamiento_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Acompanamiento)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Acompanamiento, selectors: [["app-acompanamiento"]], decls: 71, vars: 2, consts: [[1, "acompanamiento-container"], ["aria-labelledby", "hero-title", 1, "hero-section"], [1, "hero-content"], [1, "hero-text"], ["id", "hero-title", 1, "hero-title"], [1, "hero-subtitle"], [1, "hero-actions"], ["aria-label", "Agendar cita inicial", 1, "btn", "btn-primary", 3, "click"], ["data-lucide", "calendar", "aria-hidden", "true"], ["aria-label", "Ver paquetes disponibles", 1, "btn", "btn-secondary", 3, "click"], ["data-lucide", "package", "aria-hidden", "true"], [1, "hero-visual"], [1, "floating-elements"], [1, "floating-card", "floating-card-1"], ["data-lucide", "heart", "aria-hidden", "true"], [1, "floating-card", "floating-card-2"], ["data-lucide", "users", "aria-hidden", "true"], [1, "floating-card", "floating-card-3"], ["data-lucide", "shield", "aria-hidden", "true"], ["aria-labelledby", "modalidades-title", 1, "modalidades-section"], [1, "container"], [1, "section-header"], ["id", "modalidades-title", 1, "section-title"], [1, "section-subtitle"], [1, "modalidades-grid"], ["class", "modalidad-card", 4, "ngFor", "ngForOf"], ["aria-labelledby", "solo-sesion-title", 1, "solo-sesion-section"], [1, "container", "solo-sesion"], ["id", "solo-sesion-title"], ["routerLink", "/contacto", "aria-label", "Agendar sesi\xF3n suelta", 1, "btn", "btn-secondary"], ["data-lucide", "user-check", "aria-hidden", "true"], ["id", "paquetes", "aria-labelledby", "paquetes-title", 1, "paquetes-section"], ["id", "paquetes-title", 1, "section-title"], [1, "paquetes-grid"], ["class", "paquete-card", 3, "featured", 4, "ngFor", "ngForOf"], ["aria-labelledby", "cta-title", 1, "cta-section"], [1, "cta-content"], [1, "cta-text"], ["id", "cta-title"], [1, "cta-actions"], ["aria-label", "Agendar consulta por tel\xE9fono", 1, "btn", "btn-light", 3, "click"], ["data-lucide", "phone", "aria-hidden", "true"], ["aria-label", "Obtener m\xE1s informaci\xF3n", 1, "btn", "btn-outline-light", 3, "click"], ["data-lucide", "message-circle", "aria-hidden", "true"], [1, "modalidad-card"], [1, "modalidad-icon"], ["aria-hidden", "true"], [1, "modalidad-title"], [1, "modalidad-features"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-outline", 3, "routerLink"], ["data-lucide", "info", "aria-hidden", "true"], ["data-lucide", "check", "aria-hidden", "true", 1, "feature-check"], [1, "paquete-card"], [1, "paquete-header"], ["class", "paquete-badge", 4, "ngIf"], [1, "paquete-name"], [1, "paquete-price"], [1, "paquete-description"], [1, "paquete-modalidades"], ["class", "chip", 4, "ngFor", "ngForOf"], [1, "paquete-includes"], [1, "paquete-kit"], [1, "kit-info"], ["data-lucide", "package", "aria-hidden", "true", 1, "kit-icon"], [1, "btn", "btn-primary", "paquete-cta", 3, "routerLink"], [1, "paquete-badge"], [1, "chip"], ["data-lucide", "check-circle", "aria-hidden", "true", 1, "include-check"]], template: function Acompanamiento_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5, "Acompa\xF1amiento Psicol\xF3gico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, ' Programas cl\xEDnico-humanistas para mujeres con c\xE1ncer de mama y sus familias. Integramos sesiones profesionales con herramientas terap\xE9uticas de los Kits "Memorias que permanecen". ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function Acompanamiento_Template_button_click_9_listener() {
        return ctx.agendarCita();
      });
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275text(11, " Agendar cita inicial ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275listener("click", function Acompanamiento_Template_button_click_12_listener() {
        return ctx.scrollToPaquetes();
      });
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275text(14, " Ver paquetes ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "div", 13);
      \u0275\u0275element(18, "i", 14);
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Acompa\xF1amiento emocional");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 15);
      \u0275\u0275element(22, "i", 16);
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Apoyo familiar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 17);
      \u0275\u0275element(26, "i", 18);
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Espacio seguro");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(29, "section", 19)(30, "div", 20)(31, "div", 21)(32, "h2", 22);
      \u0275\u0275text(33, "Modalidades de Atenci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p", 23);
      \u0275\u0275text(35, "Diferentes formas de recibir nuestro apoyo profesional");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 24);
      \u0275\u0275template(37, Acompanamiento_div_37_Template, 10, 6, "div", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "section", 26)(39, "div", 27)(40, "h3", 28);
      \u0275\u0275text(41, "\xBFPrefieres una sesi\xF3n suelta?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p");
      \u0275\u0275text(43, "Tambi\xE9n atendemos sesiones individuales sin paquete (presencial o virtual).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "a", 29);
      \u0275\u0275element(45, "i", 30);
      \u0275\u0275text(46, " Agendar sesi\xF3n suelta ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "section", 31)(48, "div", 20)(49, "div", 21)(50, "h2", 32);
      \u0275\u0275text(51, "Paquetes de Acompa\xF1amiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 23);
      \u0275\u0275text(53, "Programas completos que integran sesiones psicol\xF3gicas con kits terap\xE9uticos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 33);
      \u0275\u0275template(55, Acompanamiento_div_55_Template, 24, 12, "div", 34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "section", 35)(57, "div", 20)(58, "div", 36)(59, "div", 37)(60, "h3", 38);
      \u0275\u0275text(61, "\xBFLista para comenzar tu proceso de sanaci\xF3n?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p");
      \u0275\u0275text(63, "Agenda una cita inicial sin compromiso y recibe la orientaci\xF3n que necesitas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 39)(65, "button", 40);
      \u0275\u0275listener("click", function Acompanamiento_Template_button_click_65_listener() {
        return ctx.agendarCita();
      });
      \u0275\u0275element(66, "i", 41);
      \u0275\u0275text(67, " Agendar consulta ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 42);
      \u0275\u0275listener("click", function Acompanamiento_Template_button_click_68_listener() {
        return ctx.contactar();
      });
      \u0275\u0275element(69, "i", 43);
      \u0275\u0275text(70, " M\xE1s informaci\xF3n ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(37);
      \u0275\u0275property("ngForOf", ctx.modalidades);
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.paquetes);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ['\n\n.acompanamiento-container[_ngcontent-%COMP%] {\n  font-family:\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n}\n.hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FFF9FB 0%,\n      white 100%);\n  padding: 4rem 0;\n  position: relative;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #4A5568;\n  margin-bottom: 1.5rem;\n  line-height: 1.2;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #718096;\n  line-height: 1.6;\n  margin-bottom: 2.5rem;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.floating-elements[_ngcontent-%COMP%] {\n  position: relative;\n  height: 300px;\n}\n.floating-elements[_ngcontent-%COMP%]   .floating-card[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #FFFFFF;\n  padding: 1rem 1.5rem;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 600;\n  color: #4A5568;\n  border: 1px solid #E2E8F0;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n}\n.floating-elements[_ngcontent-%COMP%]   .floating-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #FF6B9D;\n  width: 20px;\n  height: 20px;\n}\n.floating-elements[_ngcontent-%COMP%]   .floating-card.floating-card-1[_ngcontent-%COMP%] {\n  top: 20%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.floating-elements[_ngcontent-%COMP%]   .floating-card.floating-card-2[_ngcontent-%COMP%] {\n  top: 50%;\n  right: 20%;\n  animation-delay: 2s;\n}\n.floating-elements[_ngcontent-%COMP%]   .floating-card.floating-card-3[_ngcontent-%COMP%] {\n  bottom: 20%;\n  left: 30%;\n  animation-delay: 4s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n}\n.modalidades-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: #FFFFFF;\n}\n.modalidades-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.modalidades-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #4A5568;\n  margin-bottom: 1rem;\n}\n.modalidades-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #718096;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.modalidades-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.modalidad-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 20px;\n  padding: 2.5rem 2rem;\n  text-align: center;\n  transition: all 0.3s ease;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);\n}\n.modalidad-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n  border-color: #FF6B9D;\n}\n.modalidad-card[_ngcontent-%COMP%]   .modalidad-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modalidad-card[_ngcontent-%COMP%]   .modalidad-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #FFFFFF;\n}\n.modalidad-card[_ngcontent-%COMP%]   .modalidad-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #4A5568;\n  margin-bottom: 1.5rem;\n}\n.modalidad-card[_ngcontent-%COMP%]   .modalidad-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 2rem;\n}\n.modalidad-card[_ngcontent-%COMP%]   .modalidad-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  color: #4A5568;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.modalidad-card[_ngcontent-%COMP%]   .modalidad-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .feature-check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #34D399;\n  flex-shrink: 0;\n}\n.paquetes-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: #FFF9FB;\n}\n.paquetes-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.paquetes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.paquete-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 2px solid #E2E8F0;\n  border-radius: 24px;\n  padding: 2.5rem;\n  position: relative;\n  transition: all 0.3s ease;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);\n}\n.paquete-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.paquete-card.featured[_ngcontent-%COMP%] {\n  border-color: #FF6B9D;\n  transform: scale(1.05);\n}\n.paquete-card.featured[_ngcontent-%COMP%]   .paquete-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #EC4899);\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  position: relative;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #A78BFA;\n  color: #FFFFFF;\n  padding: 0.5rem 1.5rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-name[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #4A5568;\n  margin-bottom: 0.5rem;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-price[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #FF6B9D;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-description[_ngcontent-%COMP%] {\n  color: #718096;\n  text-align: center;\n  margin-bottom: 2rem;\n  font-style: italic;\n  line-height: 1.6;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-includes[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-includes[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #4A5568;\n  margin-bottom: 1rem;\n  font-size: 1.1rem;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-includes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-includes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.75rem 0;\n  color: #4A5568;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-bottom: 1px solid #E2E8F0;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-includes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-includes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .include-check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #34D399;\n  margin-top: 0.1rem;\n  flex-shrink: 0;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-kit[_ngcontent-%COMP%] {\n  background: rgba(52, 211, 153, 0.1);\n  border-radius: 12px;\n  padding: 1rem;\n  margin-bottom: 2rem;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-kit[_ngcontent-%COMP%]   .kit-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #34D399;\n  font-weight: 600;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-kit[_ngcontent-%COMP%]   .kit-info[_ngcontent-%COMP%]   .kit-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.paquete-card[_ngcontent-%COMP%]   .paquete-cta[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.cta-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  padding: 4rem 0;\n  color: #FFFFFF;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: center;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-text[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  opacity: 0.9;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 1rem;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #EC4899);\n  color: #FFFFFF;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid #FF6B9D;\n  color: #FF6B9D;\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid #E2E8F0;\n  color: #4A5568;\n}\n.btn.btn-light[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  color: #FF6B9D;\n}\n.btn.btn-outline-light[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid #FFFFFF;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 768px) {\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    text-align: center;\n    gap: 2rem !important;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem !important;\n  }\n  .floating-elements[_ngcontent-%COMP%] {\n    height: 200px !important;\n  }\n  .modalidades-grid[_ngcontent-%COMP%], \n   .paquetes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .paquete-card.featured[_ngcontent-%COMP%] {\n    transform: none !important;\n  }\n  .hero-actions[_ngcontent-%COMP%], \n   .cta-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2rem !important;\n  }\n  .modalidad-card[_ngcontent-%COMP%], \n   .paquete-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem !important;\n  }\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem !important;\n  }\n}\n/*# sourceMappingURL=acompanamiento.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Acompanamiento, [{
    type: Component,
    args: [{ selector: "app-acompanamiento", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="acompanamiento-container">\r
  <!-- Hero Section -->\r
  <section class="hero-section" aria-labelledby="hero-title">\r
    <div class="hero-content">\r
      <div class="hero-text">\r
        <h1 id="hero-title" class="hero-title">Acompa\xF1amiento Psicol\xF3gico</h1>\r
        <p class="hero-subtitle">\r
          Programas cl\xEDnico-humanistas para mujeres con c\xE1ncer de mama y sus familias. \r
          Integramos sesiones profesionales con herramientas terap\xE9uticas de los Kits "Memorias que permanecen".\r
        </p>\r
        <div class="hero-actions">\r
          <button class="btn btn-primary" (click)="agendarCita()" aria-label="Agendar cita inicial">\r
            <i data-lucide="calendar" aria-hidden="true"></i>\r
            Agendar cita inicial\r
          </button>\r
          <button class="btn btn-secondary" (click)="scrollToPaquetes()" aria-label="Ver paquetes disponibles">\r
            <i data-lucide="package" aria-hidden="true"></i>\r
            Ver paquetes\r
          </button>\r
        </div>\r
      </div>\r
      <div class="hero-visual">\r
        <div class="floating-elements">\r
          <div class="floating-card floating-card-1">\r
            <i data-lucide="heart" aria-hidden="true"></i>\r
            <span>Acompa\xF1amiento emocional</span>\r
          </div>\r
          <div class="floating-card floating-card-2">\r
            <i data-lucide="users" aria-hidden="true"></i>\r
            <span>Apoyo familiar</span>\r
          </div>\r
          <div class="floating-card floating-card-3">\r
            <i data-lucide="shield" aria-hidden="true"></i>\r
            <span>Espacio seguro</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Modalidades Section -->\r
  <section class="modalidades-section" aria-labelledby="modalidades-title">\r
    <div class="container">\r
      <div class="section-header">\r
        <h2 id="modalidades-title" class="section-title">Modalidades de Atenci\xF3n</h2>\r
        <p class="section-subtitle">Diferentes formas de recibir nuestro apoyo profesional</p>\r
      </div>\r
      \r
      <div class="modalidades-grid">\r
        <div class="modalidad-card" *ngFor="let modalidad of modalidades">\r
          <div class="modalidad-icon">\r
            <i [attr.data-lucide]="modalidad.icon" aria-hidden="true"></i>\r
          </div>\r
          <h3 class="modalidad-title">{{ modalidad.titulo }}</h3>\r
          <ul class="modalidad-features">\r
            <li *ngFor="let bullet of modalidad.bullets">\r
              <i data-lucide="check" class="feature-check" aria-hidden="true"></i>\r
              {{ bullet }}\r
            </li>\r
          </ul>\r
          <a class="btn btn-outline" [routerLink]="modalidad.cta?.link" \r
             [attr.aria-label]="modalidad.cta?.label">\r
            <i data-lucide="info" aria-hidden="true"></i>\r
            {{ modalidad.cta?.label }}\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Sesi\xF3n Suelta Section -->\r
  <section class="solo-sesion-section" aria-labelledby="solo-sesion-title">\r
    <div class="container solo-sesion">\r
      <h3 id="solo-sesion-title">\xBFPrefieres una sesi\xF3n suelta?</h3>\r
      <p>Tambi\xE9n atendemos sesiones individuales sin paquete (presencial o virtual).</p>\r
      <a class="btn btn-secondary" routerLink="/contacto" aria-label="Agendar sesi\xF3n suelta">\r
        <i data-lucide="user-check" aria-hidden="true"></i>\r
        Agendar sesi\xF3n suelta\r
      </a>\r
    </div>\r
  </section>\r
\r
  <!-- Paquetes Section -->\r
  <section class="paquetes-section" id="paquetes" aria-labelledby="paquetes-title">\r
    <div class="container">\r
      <div class="section-header">\r
        <h2 id="paquetes-title" class="section-title">Paquetes de Acompa\xF1amiento</h2>\r
        <p class="section-subtitle">Programas completos que integran sesiones psicol\xF3gicas con kits terap\xE9uticos</p>\r
      </div>\r
\r
      <div class="paquetes-grid">\r
        <div class="paquete-card" \r
             *ngFor="let paquete of paquetes" \r
             [class.featured]="paquete.nombre === 'Integral'">\r
          <div class="paquete-header">\r
            <div class="paquete-badge" *ngIf="paquete.badge">\r
              {{ paquete.badge }}\r
            </div>\r
            <h3 class="paquete-name">{{ paquete.nombre }}</h3>\r
            <div class="paquete-price">{{ paquete.precioDesde }}</div>\r
          </div>\r
\r
          <p class="paquete-description">{{ paquete.resumen }}</p>\r
\r
          <!-- Modalidades incluidas (chips) -->\r
          <div class="paquete-modalidades">\r
            <span class="chip" *ngFor="let mod of paquete.modalidades">\r
              <i [attr.data-lucide]="iconFor(mod)" aria-hidden="true"></i>\r
              {{ mod === 'individual' ? 'Individual' : mod === 'grupal' ? 'Grupal' : 'Talleres' }}\r
            </span>\r
          </div>\r
\r
          <div class="paquete-includes">\r
            <h4>Incluye:</h4>\r
            <ul>\r
              <li *ngFor="let item of paquete.incluye">\r
                <i data-lucide="check-circle" class="include-check" aria-hidden="true"></i>\r
                {{ item }}\r
              </li>\r
            </ul>\r
          </div>\r
\r
          <div class="paquete-kit">\r
            <div class="kit-info">\r
              <i data-lucide="package" class="kit-icon" aria-hidden="true"></i>\r
              <span>Incluye Kit {{ paquete.kit }}</span>\r
            </div>\r
          </div>\r
\r
          <a class="btn btn-primary paquete-cta" [routerLink]="paquete.cta.link" \r
             [attr.aria-label]="paquete.cta.label">\r
            <i data-lucide="calendar" aria-hidden="true"></i>\r
            {{ paquete.cta.label }}\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- CTA Section -->\r
  <section class="cta-section" aria-labelledby="cta-title">\r
    <div class="container">\r
      <div class="cta-content">\r
        <div class="cta-text">\r
          <h3 id="cta-title">\xBFLista para comenzar tu proceso de sanaci\xF3n?</h3>\r
          <p>Agenda una cita inicial sin compromiso y recibe la orientaci\xF3n que necesitas</p>\r
        </div>\r
        <div class="cta-actions">\r
          <button class="btn btn-light" (click)="agendarCita()" aria-label="Agendar consulta por tel\xE9fono">\r
            <i data-lucide="phone" aria-hidden="true"></i>\r
            Agendar consulta\r
          </button>\r
          <button class="btn btn-outline-light" (click)="contactar()" aria-label="Obtener m\xE1s informaci\xF3n">\r
            <i data-lucide="message-circle" aria-hidden="true"></i>\r
            M\xE1s informaci\xF3n\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
</div>`, styles: ['/* src/app/pages/acompanamiento/acompanamiento.scss */\n.acompanamiento-container {\n  font-family:\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n}\n.hero-section {\n  background:\n    linear-gradient(\n      135deg,\n      #FFF9FB 0%,\n      white 100%);\n  padding: 4rem 0;\n  position: relative;\n  overflow: hidden;\n}\n.hero-section .hero-content {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n.hero-section .hero-title {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #4A5568;\n  margin-bottom: 1.5rem;\n  line-height: 1.2;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-section .hero-subtitle {\n  font-size: 1.2rem;\n  color: #718096;\n  line-height: 1.6;\n  margin-bottom: 2.5rem;\n}\n.hero-section .hero-actions {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.floating-elements {\n  position: relative;\n  height: 300px;\n}\n.floating-elements .floating-card {\n  position: absolute;\n  background: #FFFFFF;\n  padding: 1rem 1.5rem;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 600;\n  color: #4A5568;\n  border: 1px solid #E2E8F0;\n  animation: float 6s ease-in-out infinite;\n}\n.floating-elements .floating-card i {\n  color: #FF6B9D;\n  width: 20px;\n  height: 20px;\n}\n.floating-elements .floating-card.floating-card-1 {\n  top: 20%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.floating-elements .floating-card.floating-card-2 {\n  top: 50%;\n  right: 20%;\n  animation-delay: 2s;\n}\n.floating-elements .floating-card.floating-card-3 {\n  bottom: 20%;\n  left: 30%;\n  animation-delay: 4s;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n}\n.modalidades-section {\n  padding: 5rem 0;\n  background: #FFFFFF;\n}\n.modalidades-section .section-header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.modalidades-section .section-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #4A5568;\n  margin-bottom: 1rem;\n}\n.modalidades-section .section-subtitle {\n  font-size: 1.1rem;\n  color: #718096;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.modalidades-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.modalidad-card {\n  background: #FFFFFF;\n  border: 1px solid #E2E8F0;\n  border-radius: 20px;\n  padding: 2.5rem 2rem;\n  text-align: center;\n  transition: all 0.3s ease;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);\n}\n.modalidad-card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n  border-color: #FF6B9D;\n}\n.modalidad-card .modalidad-icon {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modalidad-card .modalidad-icon i {\n  width: 40px;\n  height: 40px;\n  color: #FFFFFF;\n}\n.modalidad-card .modalidad-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #4A5568;\n  margin-bottom: 1.5rem;\n}\n.modalidad-card .modalidad-features {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 2rem;\n}\n.modalidad-card .modalidad-features li {\n  padding: 0.5rem 0;\n  color: #4A5568;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.modalidad-card .modalidad-features li .feature-check {\n  width: 18px;\n  height: 18px;\n  color: #34D399;\n  flex-shrink: 0;\n}\n.paquetes-section {\n  padding: 5rem 0;\n  background: #FFF9FB;\n}\n.paquetes-section .section-header {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.paquetes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.paquete-card {\n  background: #FFFFFF;\n  border: 2px solid #E2E8F0;\n  border-radius: 24px;\n  padding: 2.5rem;\n  position: relative;\n  transition: all 0.3s ease;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);\n}\n.paquete-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.paquete-card.featured {\n  border-color: #FF6B9D;\n  transform: scale(1.05);\n}\n.paquete-card.featured .paquete-badge {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #EC4899);\n}\n.paquete-card .paquete-header {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  position: relative;\n}\n.paquete-card .paquete-badge {\n  position: absolute;\n  top: -1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #A78BFA;\n  color: #FFFFFF;\n  padding: 0.5rem 1.5rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.paquete-card .paquete-name {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #4A5568;\n  margin-bottom: 0.5rem;\n}\n.paquete-card .paquete-price {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #FF6B9D;\n}\n.paquete-card .paquete-description {\n  color: #718096;\n  text-align: center;\n  margin-bottom: 2rem;\n  font-style: italic;\n  line-height: 1.6;\n}\n.paquete-card .paquete-includes {\n  margin-bottom: 2rem;\n}\n.paquete-card .paquete-includes h4 {\n  color: #4A5568;\n  margin-bottom: 1rem;\n  font-size: 1.1rem;\n}\n.paquete-card .paquete-includes ul {\n  list-style: none;\n  padding: 0;\n}\n.paquete-card .paquete-includes ul li {\n  padding: 0.75rem 0;\n  color: #4A5568;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-bottom: 1px solid #E2E8F0;\n}\n.paquete-card .paquete-includes ul li:last-child {\n  border-bottom: none;\n}\n.paquete-card .paquete-includes ul li .include-check {\n  width: 18px;\n  height: 18px;\n  color: #34D399;\n  margin-top: 0.1rem;\n  flex-shrink: 0;\n}\n.paquete-card .paquete-kit {\n  background: rgba(52, 211, 153, 0.1);\n  border-radius: 12px;\n  padding: 1rem;\n  margin-bottom: 2rem;\n}\n.paquete-card .paquete-kit .kit-info {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #34D399;\n  font-weight: 600;\n}\n.paquete-card .paquete-kit .kit-info .kit-icon {\n  width: 20px;\n  height: 20px;\n}\n.paquete-card .paquete-cta {\n  width: 100%;\n  justify-content: center;\n}\n.cta-section {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  padding: 4rem 0;\n  color: #FFFFFF;\n}\n.cta-section .cta-content {\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: center;\n}\n.cta-section .cta-text {\n  margin-bottom: 2.5rem;\n}\n.cta-section .cta-text h3 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.cta-section .cta-text p {\n  font-size: 1.1rem;\n  opacity: 0.9;\n}\n.cta-section .cta-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 1rem;\n}\n.btn i {\n  width: 18px;\n  height: 18px;\n}\n.btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n}\n.btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #EC4899);\n  color: #FFFFFF;\n}\n.btn.btn-secondary {\n  background: transparent;\n  border: 2px solid #FF6B9D;\n  color: #FF6B9D;\n}\n.btn.btn-outline {\n  background: transparent;\n  border: 2px solid #E2E8F0;\n  color: #4A5568;\n}\n.btn.btn-light {\n  background: #FFFFFF;\n  color: #FF6B9D;\n}\n.btn.btn-outline-light {\n  background: transparent;\n  border: 2px solid #FFFFFF;\n  color: #FFFFFF;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 768px) {\n  .hero-content {\n    grid-template-columns: 1fr !important;\n    text-align: center;\n    gap: 2rem !important;\n  }\n  .hero-title {\n    font-size: 2.5rem !important;\n  }\n  .floating-elements {\n    height: 200px !important;\n  }\n  .modalidades-grid,\n  .paquetes-grid {\n    grid-template-columns: 1fr !important;\n  }\n  .paquete-card.featured {\n    transform: none !important;\n  }\n  .hero-actions,\n  .cta-actions {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero-title {\n    font-size: 2rem !important;\n  }\n  .modalidad-card,\n  .paquete-card {\n    padding: 2rem 1.5rem !important;\n  }\n  .container {\n    padding: 0 1rem !important;\n  }\n}\n/*# sourceMappingURL=acompanamiento.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Acompanamiento, { className: "Acompanamiento", filePath: "src/app/pages/acompanamiento/acompanamiento.ts", lineNumber: 35 });
})();
export {
  Acompanamiento
};
//# sourceMappingURL=chunk-A42LFJWJ.js.map
