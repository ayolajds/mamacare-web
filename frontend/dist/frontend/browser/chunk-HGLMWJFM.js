import {
  DomSanitizer,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-6P7TFCYF.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-Q4BX36PF.js";
import {
  Component,
  HostListener,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DEJWN6HZ.js";

// src/app/pages/inicio/inicio.ts
var _c0 = () => [1, 2, 3, 4, 5];
function Inicio_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "img", 44)(2, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r2 === ctx_r2.currentSlide);
    \u0275\u0275attribute("aria-hidden", i_r2 === ctx_r2.currentSlide ? "false" : "true")("inert", i_r2 === ctx_r2.currentSlide ? null : "");
    \u0275\u0275advance();
    \u0275\u0275property("src", s_r1.image, \u0275\u0275sanitizeUrl)("alt", s_r1.alt);
    \u0275\u0275attribute("fetchpriority", i_r2 === ctx_r2.currentSlide ? "high" : null);
  }
}
function Inicio_article_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 46)(1, "div", 47);
    \u0275\u0275element(2, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275property("ngClass", "scheme-" + i_r5 % 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", p_r4.iconSafe, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r4.desc);
  }
}
function Inicio_article_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 50);
    \u0275\u0275element(1, "div", 51);
    \u0275\u0275elementStart(2, "h3")(3, "span", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", s_r6.iconSafe, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r6.n);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r6.t);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r6.d);
  }
}
function Inicio_article_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "img", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", t_r8.img, \u0275\u0275sanitizeUrl)("alt", "Foto de " + t_r8.nombre);
  }
}
function Inicio_article_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 53)(1, "div", 54);
    \u0275\u0275template(2, Inicio_article_40_div_2_Template, 2, 2, "div", 55);
    \u0275\u0275elementStart(3, "div", 56)(4, "h3", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "blockquote", 59);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 60);
    \u0275\u0275listener("click", function Inicio_article_40_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToStories());
    });
    \u0275\u0275text(11, " Leer m\xE1s historias \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    \u0275\u0275property("ngClass", "scheme-" + i_r9 % 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", t_r8.img);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r8.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.meta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', t_r8.texto, '"');
  }
}
function Inicio_article_52_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 81);
  }
}
function Inicio_article_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 62);
    \u0275\u0275element(1, "div", 63)(2, "div", 64);
    \u0275\u0275elementStart(3, "div", 65);
    \u0275\u0275element(4, "img", 66)(5, "div", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 68)(7, "div", 69)(8, "h3", 70);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 71);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 72)(13, "a", 73)(14, "span", 74);
    \u0275\u0275text(15, "Descubrir m\xE1s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 76);
    \u0275\u0275element(18, "path", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(19, "div", 78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 79);
    \u0275\u0275template(21, Inicio_article_52_div_21_Template, 1, 0, "div", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    \u0275\u0275classMap("premium-card card-style-" + (i_r11 + 1));
    \u0275\u0275advance(4);
    \u0275\u0275property("src", s_r10.img, \u0275\u0275sanitizeUrl)("alt", s_r10.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r10.desc);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", s_r10.link);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(8, _c0));
  }
}
var Inicio = class _Inicio {
  sanitizer;
  router;
  constructor(sanitizer, router) {
    this.sanitizer = sanitizer;
    this.router = router;
  }
  // ===== HERO =====
  slides = [
    { image: "img/1.jpg", alt: "Acompa\xF1amiento emocional", title: "Un espacio seguro para ser escuchada", subtitle: "Te acompa\xF1amos con calidez, ciencia y comunidad." },
    { image: "img/2.jpg", alt: "Resiliencia y liderazgo", title: "Tu fortaleza inspira cada paso", subtitle: "Transforma tu historia en poder personal." },
    { image: "img/3.jpg", alt: "Bienestar y autocuidado", title: "Cuidarte es tambi\xE9n disfrutar de quienes amas", subtitle: "Peque\xF1os h\xE1bitos, grandes cambios." },
    { image: "img/4.jpg", alt: "Comunidad", title: "Juntas construimos comunidad", subtitle: "V\xEDnculos que sostienen y transforman." },
    { image: "img/5.jpg", alt: "Talleres educativos", title: "Aprender tambi\xE9n es sanar", subtitle: "Herramientas pr\xE1cticas para tu d\xEDa a d\xEDa." },
    { image: "img/6.jpg", alt: "Esperanza y alegr\xEDa", title: "En cada abrazo, la esperanza florece", subtitle: "Celebra cada avance, por peque\xF1o que sea." }
  ];
  primaryCta = { label: "Con\xF3cenos", link: "/quienes-somos" };
  secondaryCta = { label: "Explorar recursos", link: "/recursos" };
  currentSlide = 0;
  intervalId;
  autoMs = 6e3;
  ngOnInit() {
    this.pilares = this.pilares.map((p) => __spreadProps(__spreadValues({}, p), {
      iconSafe: this.sanitizer.bypassSecurityTrustHtml(p.icon)
    }));
    this.pasos = this.pasos.map((p) => __spreadProps(__spreadValues({}, p), {
      iconSafe: this.sanitizer.bypassSecurityTrustHtml(p.icon)
    }));
    this.start();
  }
  ngOnDestroy() {
    this.stop();
  }
  start() {
    this.stop();
    this.intervalId = window.setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, this.autoMs);
  }
  stop() {
    if (this.intervalId !== void 0) {
      window.clearInterval(this.intervalId);
      this.intervalId = void 0;
    }
  }
  // Pausar cuando la pestaña no está visible (ahorra CPU)
  onVisibility() {
    if (document.hidden)
      this.stop();
    else
      this.start();
  }
  // Navegar a historias con scroll arriba
  goToStories() {
    this.router.navigate(["/historias"]).then(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  // ===== CONTENIDO DE LAS SECCIONES =====
  pilares = [
    {
      title: "Informaci\xF3n confiable",
      desc: "Art\xEDculos y gu\xEDas validadas por profesionales sobre salud mental y c\xE1ncer de mama.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                <path fill="currentColor"
                  d="M4 4h9a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.79.407L10 15l-4.21 2.907A.5.5 0 0 1 5 17.5V6a2 2 0 0 1 2-2Z"/>
              </svg>`
    },
    {
      title: "Apoyo profesional",
      desc: "Sesiones psicol\xF3gicas y talleres para manejar ansiedad, estr\xE9s y depresi\xF3n.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                <path fill="currentColor"
                  d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14Z"/>
              </svg>`
    },
    {
      title: "Comunidad",
      desc: "Conecta con mujeres que entienden por lo que est\xE1s pasando.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                <path fill="currentColor"
                  d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 2c-2.7 0-8 1.35-8 4v2h16v-2c0-2.65-5.3-4-8-4Zm-8 1c-2.21 0-6 1.1-6 3v2h6v-2c0-1.03.44-1.95 1.18-2.73A11.4 11.4 0 0 0 8 14Z"/>
              </svg>`
    }
  ];
  pasos = [
    {
      n: 1,
      t: "Escucha",
      d: "Validamos tus emociones y tu contexto sin prisa ni juicios.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-1-9h2v6h-2zm0-4h2v2h-2z"/>
            </svg>`
    },
    {
      n: 2,
      t: "Herramientas",
      d: "Mindfulness, respiraci\xF3n, escritura terap\xE9utica y psicoeducaci\xF3n.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M21 6h-4V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a1 1 0 0 0-1-1zM9 4h6v2H9zm11 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8h2v2h12V8h2z"/>
            </svg>`
    },
    {
      n: 3,
      t: "Acompa\xF1amiento",
      d: "Metas realistas, seguimiento y cuidado tambi\xE9n a tu familia.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm5-9h-2v2h2v2h-2v2h-2v-2h-2v2H9v-2H7v-2h2v-2H7V9h2V7h2v2h2V7h2v2h2z"/>
            </svg>`
    }
  ];
  testimonios = [
    {
      nombre: "Mar\xEDa",
      meta: "3 a\xF1os en remisi\xF3n",
      texto: "Encontr\xE9 un espacio seguro para hablar del miedo y volver a dormir.",
      img: "inspiran/1.jpg"
    },
    {
      nombre: "Carolina",
      meta: "En tratamiento",
      texto: "Las herramientas me ayudaron a organizar mis d\xEDas y bajar la ansiedad.",
      img: "inspiran/2.jpg"
    },
    {
      nombre: "Carmen",
      meta: "10 a\xF1os en remisi\xF3n",
      texto: "Ser mentora me permite dar lo que recib\xED. No hay mayor satisfacci\xF3n que acompa\xF1ar a otras.",
      img: "inspiran/3.jpg"
    }
  ];
  servicios = [
    {
      title: "Sesiones individuales",
      desc: "Espacios personalizados uno a uno con psic\xF3logas especializadas en c\xE1ncer de mama, para trabajar emociones, ansiedad y resiliencia.",
      img: "img/1.jpg",
      link: "/servicios/sesiones"
    },
    {
      title: "Terapia grupal",
      desc: "Encuentros con otras mujeres que viven procesos similares. Compartir fortalece, inspira y ayuda a no sentirse sola.",
      img: "img/4.jpg",
      link: "/servicios/grupal"
    },
    {
      title: "Talleres educativos",
      desc: "Actividades pr\xE1cticas sobre autocuidado, manejo del estr\xE9s, comunicaci\xF3n familiar y herramientas psicol\xF3gicas.",
      img: "img/2.jpg",
      link: "/servicios/talleres"
    }
  ];
  // CTA WhatsApp
  whatsappPhone = "57XXXXXXXXXX";
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappPhone}`;
  }
  static \u0275fac = function Inicio_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Inicio)(\u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Inicio, selectors: [["app-inicio"]], hostBindings: function Inicio_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("visibilitychange", function Inicio_visibilitychange_HostBindingHandler() {
        return ctx.onVisibility();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 87, vars: 14, consts: [["role", "region", "aria-label", "Presentaci\xF3n Ma\xB4Care", 1, "hero-carousel"], [1, "carousel"], ["class", "slide", 3, "active", 4, "ngFor", "ngForOf"], ["aria-live", "polite", 1, "content", "content--fixed"], [1, "title"], [1, "subtitle"], [1, "actions"], [1, "btn", "btn--primary", 3, "routerLink"], [1, "btn", "btn--ghost", 3, "routerLink"], ["viewBox", "0 0 1440 120", "preserveAspectRatio", "none", "aria-hidden", "true", 1, "hero__wave"], ["d", "M0,40 C240,120 480,0 720,60 C960,120 1200,40 1440,80 L1440,120 L0,120 Z"], [1, "section", "container"], [1, "head"], [1, "lead"], [1, "pillars"], ["class", "pillar", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "section", "alt"], [1, "container"], [1, "steps"], ["class", "step", 4, "ngFor", "ngForOf"], [1, "section", "stories"], [1, "stories__grid"], ["class", "story", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "stories__cta"], [1, "btn", "btn--ghost", 3, "click"], [1, "services-premium"], [1, "hero-header"], [1, "hero-title"], [1, "hero-subtitle"], [1, "premium-cards"], ["class", "premium-card", 3, "class", 4, "ngFor", "ngForOf"], [1, "container", "comp"], [1, "comp__text"], [1, "commitment-badge"], [1, "bullets"], [1, "highlight-box"], [1, "comp__img"], ["src", "ods.png", "alt", "ODS 3 Salud y Bienestar", "loading", "lazy", "decoding", "async"], [1, "cta-final"], [1, "wrap"], ["routerLink", "/agenda", 1, "btn", "btn--primary"], ["routerLink", "/recursos", 1, "btn", "btn--ghost"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn--whatsapp", 3, "href"], [1, "slide"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "overlay"], [1, "pillar", 3, "ngClass"], [1, "icon-wrap"], ["aria-hidden", "true", 1, "icn", 3, "innerHTML"], [1, "pillar__text"], [1, "step"], ["aria-hidden", "true", 1, "step-icon", 3, "innerHTML"], [1, "badge"], [1, "story", 3, "ngClass"], [1, "story__top"], ["class", "avatar", 4, "ngIf"], [1, "who"], [1, "name"], [1, "meta"], [1, "quote"], ["aria-label", "Leer m\xE1s historias inspiradoras", 1, "readmore", 3, "click"], [1, "avatar"], [1, "premium-card"], [1, "card-glow"], [1, "card-blob"], [1, "card-image-container"], ["loading", "lazy", 1, "card-image", 3, "src", "alt"], [1, "image-overlay"], [1, "card-content"], [1, "text-content"], [1, "service-title"], [1, "service-desc"], [1, "card-actions"], [1, "cta-button", 3, "routerLink"], [1, "btn-text"], [1, "btn-arrow"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M5 12H19M19 12L12 5M19 12L12 19", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "btn-shine"], [1, "card-particles"], ["class", "particle", 4, "ngFor", "ngForOf"], [1, "particle"]], template: function Inicio_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275template(2, Inicio_div_2_Template, 3, 7, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "a", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 9);
      \u0275\u0275element(14, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "section", 11)(16, "header", 12)(17, "h2");
      \u0275\u0275text(18, "C\xF3mo te ayudamos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 13);
      \u0275\u0275text(20, "Informaci\xF3n confiable, apoyo profesional y comunidad para que no camines sola.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275template(22, Inicio_article_22_Template, 8, 4, "article", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "section", 16)(24, "div", 17)(25, "header", 12)(26, "h2");
      \u0275\u0275text(27, "\xBFC\xF3mo te acompa\xF1amos?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 13);
      \u0275\u0275text(29, "Metodolog\xEDa cl\xEDnico-humanista basada en evidencia.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18);
      \u0275\u0275template(31, Inicio_article_31_Template, 8, 4, "article", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "section", 20)(33, "div", 17)(34, "header", 12)(35, "h2");
      \u0275\u0275text(36, "Historias que inspiran");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 13);
      \u0275\u0275text(38, "Voces reales que nos recuerdan que no est\xE1s sola.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 21);
      \u0275\u0275template(40, Inicio_article_40_Template, 12, 5, "article", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 23)(42, "a", 24);
      \u0275\u0275listener("click", function Inicio_Template_a_click_42_listener() {
        return ctx.goToStories();
      });
      \u0275\u0275text(43, "Ver m\xE1s historias");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "section", 25)(45, "div", 17)(46, "header", 26)(47, "h2", 27);
      \u0275\u0275text(48, "Conoce nuestros servicios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p", 28);
      \u0275\u0275text(50, "Espacios y herramientas para tu cuidado emocional");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 29);
      \u0275\u0275template(52, Inicio_article_52_Template, 22, 9, "article", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "section", 16)(54, "div", 31)(55, "div", 32)(56, "span", 33);
      \u0275\u0275text(57, "Compromiso Social");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "h2");
      \u0275\u0275text(59, "Declaraci\xF3n de compromiso responsable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p");
      \u0275\u0275text(61, " Promovemos el bienestar integral con enfoque cl\xEDnico-humanista y pr\xE1cticas basadas en evidencia, cuidando la dignidad, inclusi\xF3n y confidencialidad. Nos alineamos con los ODS y trabajamos por el fortalecimiento de la salud mental en Colombia. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "ul", 34)(63, "li");
      \u0275\u0275text(64, "\xC9tica, privacidad y acompa\xF1amiento informado en todos nuestros procesos.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "li");
      \u0275\u0275text(66, "Articulaci\xF3n estrat\xE9gica con aliados y programas de voluntariado especializado.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "li");
      \u0275\u0275text(68, "Acceso equitativo a herramientas pr\xE1cticas y cuidadosas para el bienestar psicol\xF3gico.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "li");
      \u0275\u0275text(70, "Investigaci\xF3n continua para mejorar nuestras intervenciones y servicios.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 35)(72, "p");
      \u0275\u0275text(73, "Nuestro modelo de atenci\xF3n integra los m\xE1s altos est\xE1ndares cient\xEDficos con una perspectiva humanista que valora la singularidad de cada persona.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 36);
      \u0275\u0275element(75, "img", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "section", 38)(77, "div", 39)(78, "h2");
      \u0275\u0275text(79, "\xBFTe acompa\xF1amos hoy?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 6)(81, "a", 40);
      \u0275\u0275text(82, "Agenda tu cita");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "a", 41);
      \u0275\u0275text(84, "Explorar recursos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "a", 42);
      \u0275\u0275text(86, "WhatsApp");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.slides);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.slides[ctx.currentSlide].title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.slides[ctx.currentSlide].subtitle);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.primaryCta.link);
      \u0275\u0275attribute("aria-label", ctx.primaryCta.label);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.primaryCta.label, " ");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.secondaryCta.link);
      \u0275\u0275attribute("aria-label", ctx.secondaryCta.label);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.secondaryCta.label, " ");
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.pilares);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.pasos);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.testimonios);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.servicios);
      \u0275\u0275advance(33);
      \u0275\u0275property("href", ctx.whatsappUrl, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.container[_ngcontent-%COMP%] {\n  width: min(1100px, 92%);\n  margin-inline: auto;\n}\n.section[_ngcontent-%COMP%] {\n  padding: clamp(2rem, 4vw, 4rem) 0;\n  background: #fff;\n}\n.section.alt[_ngcontent-%COMP%] {\n  background: #fff6f9;\n}\n.head[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.25rem;\n}\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: clamp(1.5rem, 3vw, 2.25rem);\n  color: #2a2a2a;\n}\n.head[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  color: #5d5d5d;\n}\n.hero-carousel[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n}\n.hero-carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: min(78vh, 720px);\n}\n@media (max-width: 640px) {\n  .hero-carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n    height: 62vh;\n  }\n}\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transition: opacity 0.6s ease;\n}\n.slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n}\n.content.content--fixed[_ngcontent-%COMP%] {\n  position: absolute;\n  left: clamp(1rem, 7vw, 6rem);\n  bottom: clamp(3rem, 10vh, 9rem);\n  max-width: min(900px, 80%);\n  color: #fff;\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  line-height: 1.05;\n  font-size: clamp(1.8rem, 4vw, 3rem);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  font-size: clamp(1rem, 2.1vw, 1.25rem);\n  opacity: 0.95;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.85rem 1.3rem;\n  border-radius: 999px;\n  font-weight: 800;\n  transition: transform 0.12s ease, box-shadow 0.2s;\n  cursor: pointer;\n  text-decoration: none;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background: #e15886;\n  color: #fff;\n  box-shadow: 0 8px 20px rgba(225, 88, 134, 0.35);\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 12px 25px rgba(225, 88, 134, 0.45);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  -webkit-backdrop-filter: saturate(120%) blur(2px);\n  backdrop-filter: saturate(120%) blur(2px);\n}\n.btn--ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-1px);\n}\n.btn--light[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #2a2a2a;\n}\n.btn--whatsapp[_ngcontent-%COMP%] {\n  background: #25D366;\n  color: #fff;\n}\n.ctrl[_ngcontent-%COMP%], \n.dots[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.hero__wave[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 70px;\n  fill: #f7d3e1;\n}\n.pillars[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 900px) {\n  .pillars[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.pillar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  border-radius: 18px;\n  padding: 1.1rem 1.2rem;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.07);\n  transition: transform 0.15s ease, box-shadow 0.2s ease;\n}\n.pillar[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.1);\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  min-width: 56px;\n  border-radius: 16px;\n  display: grid;\n  place-items: center;\n  font-size: 0;\n}\n.icn[_ngcontent-%COMP%] {\n  color: currentColor;\n}\n.pillar__text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0.35rem;\n  font-weight: 900;\n  color: #2a2a2a;\n}\n.pillar__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgb(80.25, 80.25, 80.25);\n}\n.scheme-0[_ngcontent-%COMP%] {\n  background: rgb(253.8, 248.4, 250.5);\n  color: #e15886;\n}\n.scheme-0[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  background: rgb(252.6, 241.8, 246);\n  color: #e15886;\n}\n.scheme-1[_ngcontent-%COMP%] {\n  background: rgb(239.64, 248.4, 244.68);\n  color: #2c6a52;\n}\n.scheme-1[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  background: rgb(216.6, 238.5, 229.2);\n  color: #2c6a52;\n}\n.scheme-2[_ngcontent-%COMP%] {\n  background: rgb(252.15, 251.7, 255);\n  color: #6f6aa7;\n}\n.scheme-2[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  background: rgb(249.3, 248.4, 255);\n  color: #6f6aa7;\n}\n.scheme-3[_ngcontent-%COMP%] {\n  background: rgb(253.8, 253.05, 251.85);\n  color: #6b5f54;\n}\n.scheme-3[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  background: rgb(252.6, 251.1, 248.7);\n  color: #6b5f54;\n}\n.steps[_ngcontent-%COMP%] {\n  width: min(1100px, 92%);\n  margin-inline: auto;\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 900px) {\n  .steps[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.step[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid hsl(339.8540145985, 69.5431472081%, 101.3725490196%);\n  border-radius: 18px;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  position: relative;\n  transition: transform 0.15s ease, box-shadow 0.2s ease;\n}\n.step[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);\n}\n.step-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto 1rem;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgb(252.6, 241.8, 246);\n}\n.step-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #e15886;\n}\n.step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 999px;\n  font-weight: 900;\n  background: #f7d3e1;\n  color: #2a2a2a;\n  font-size: 0.9rem;\n}\n.stories[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f7d3e1 0%,\n      #fff6f9 100%);\n}\n.stories[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2a2a2a;\n}\n.stories[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  color: rgba(42, 42, 42, 0.7);\n}\n.stories__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .stories__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .stories__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.story[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px;\n  padding: 1.5rem;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: transform 0.18s ease, box-shadow 0.25s ease;\n  -webkit-backdrop-filter: saturate(120%);\n  backdrop-filter: saturate(120%);\n}\n.story[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 46px rgba(0, 0, 0, 0.14);\n}\n.story__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 900;\n  color: #2a2a2a;\n}\n.meta[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.92rem;\n  opacity: 0.8;\n}\n.quote[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 1rem;\n  font-size: 1.05rem;\n  line-height: 1.5;\n  color: #2a2a2a;\n  font-style: italic;\n}\n.readmore[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-weight: 800;\n  text-decoration: none;\n  padding: 0.45rem 0.75rem;\n  border-radius: 999px;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  background: rgba(255, 255, 255, 0.6);\n  color: inherit;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.readmore[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.8);\n  transform: translateY(-1px);\n}\n.scheme-0[_ngcontent-%COMP%] {\n  background: #ffeef6;\n  color: #8f2f54;\n}\n.scheme-1[_ngcontent-%COMP%] {\n  background: #eef8f3;\n  color: #2c6a52;\n}\n.scheme-2[_ngcontent-%COMP%] {\n  background: #f3f2ff;\n  color: #6f6aa7;\n}\n.scheme-3[_ngcontent-%COMP%] {\n  background: #fbf7f0;\n  color: #6b5f54;\n}\n.stories__cta[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2rem;\n}\n.stories__cta[_ngcontent-%COMP%]   .btn--ghost[_ngcontent-%COMP%] {\n  border-color: #e15886;\n  color: #e15886;\n  background: transparent;\n}\n.stories__cta[_ngcontent-%COMP%]   .btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #e15886;\n  color: white;\n}\n.services-premium[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9ff 0%,\n      #f0f2ff 50%,\n      #e8ebff 100%);\n  position: relative;\n  overflow: hidden;\n}\n.services-premium[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 107, 157, 0.3),\n      transparent);\n}\n.hero-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b9d,\n      #9d65ff,\n      #00d2b4);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 1rem;\n  letter-spacing: -0.5px;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #6b7280;\n  font-weight: 500;\n  max-width: 500px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.premium-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2.5rem;\n}\n@media (max-width: 1100px) {\n  .premium-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 2rem;\n  }\n}\n@media (max-width: 768px) {\n  .premium-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    max-width: 500px;\n    margin: 0 auto;\n  }\n}\n.premium-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 32px;\n  padding: 2.5rem;\n  min-height: 520px;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n}\n.premium-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1),\n      rgba(255, 255, 255, 0));\n  border-radius: 32px;\n  pointer-events: none;\n}\n.premium-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-15px) scale(1.02);\n  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);\n}\n.premium-card[_ngcontent-%COMP%]:hover   .card-glow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1.1);\n}\n.premium-card[_ngcontent-%COMP%]:hover   .card-blob[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(10deg);\n}\n.premium-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.premium-card[_ngcontent-%COMP%]:hover   .cta-button[_ngcontent-%COMP%] {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);\n}\n.card-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    conic-gradient(\n      from 0deg,\n      transparent,\n      rgba(255, 255, 255, 0.1),\n      transparent);\n  opacity: 0;\n  transition: all 0.8s ease;\n  pointer-events: none;\n}\n.card-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: -100px;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  filter: blur(60px);\n  opacity: 0.3;\n  transition: all 0.8s ease;\n  pointer-events: none;\n}\n.card-image-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 180px;\n  border-radius: 24px 24px 0 0;\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.8s ease;\n}\n.image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.2) 0%,\n      transparent 50%);\n}\n.card-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  margin-top: 160px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.text-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 2rem;\n}\n.service-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  line-height: 1.2;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n}\n.service-desc[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #4b5563;\n  opacity: 0.9;\n}\n.card-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.cta-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 1rem;\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  padding: 1.2rem 2rem;\n  border-radius: 16px;\n  text-decoration: none;\n  font-weight: 700;\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  position: relative;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.cta-button[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  transform: translateY(-3px);\n}\n.cta-button[_ngcontent-%COMP%]:hover   .btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(5px);\n}\n.cta-button[_ngcontent-%COMP%]:hover   .btn-shine[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.btn-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.btn-arrow[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  transition: transform 0.3s ease;\n}\n.btn-shine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transition: transform 0.6s ease;\n}\n.card-particles[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.particle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  opacity: 0.6;\n  animation: _ngcontent-%COMP%_float 6s infinite ease-in-out;\n}\n.particle[_ngcontent-%COMP%]:nth-child(1) {\n  top: 38%;\n  left: 99%;\n  animation-delay: 1s;\n}\n.particle[_ngcontent-%COMP%]:nth-child(2) {\n  top: 36%;\n  left: 30%;\n  animation-delay: 2s;\n}\n.particle[_ngcontent-%COMP%]:nth-child(3) {\n  top: 21%;\n  left: 76%;\n  animation-delay: 3s;\n}\n.particle[_ngcontent-%COMP%]:nth-child(4) {\n  top: 74%;\n  left: 54%;\n  animation-delay: 4s;\n}\n.particle[_ngcontent-%COMP%]:nth-child(5) {\n  top: 59%;\n  left: 53%;\n  animation-delay: 5s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(180deg);\n  }\n}\n.card-style-1[_ngcontent-%COMP%]   .card-blob[_ngcontent-%COMP%] {\n  background: #ff6b9d;\n}\n.card-style-1[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%] {\n  color: #c44569;\n}\n.card-style-1[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b9d 0%,\n      #c44569 100%);\n  color: white;\n}\n.card-style-1[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ff8bb3 0%,\n      #d45a7a 100%);\n  color: white;\n  box-shadow: 0 15px 40px rgba(255, 107, 157, 0.4);\n}\n.card-style-1[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%] {\n  background: #ff6b9d;\n}\n.card-style-2[_ngcontent-%COMP%]   .card-blob[_ngcontent-%COMP%] {\n  background: #00d2b4;\n}\n.card-style-2[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%] {\n  color: #00a896;\n}\n.card-style-2[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #00d2b4 0%,\n      #00a896 100%);\n  color: white;\n}\n.card-style-2[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #26e6ca 0%,\n      #00c2a8 100%);\n  color: white;\n  box-shadow: 0 15px 40px rgba(0, 210, 180, 0.4);\n}\n.card-style-2[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%] {\n  background: #00d2b4;\n}\n.card-style-3[_ngcontent-%COMP%]   .card-blob[_ngcontent-%COMP%] {\n  background: #9d65ff;\n}\n.card-style-3[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%] {\n  color: #6d44c4;\n}\n.card-style-3[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #9d65ff 0%,\n      #6d44c4 100%);\n  color: white;\n}\n.card-style-3[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #b18aff 0%,\n      #7d55d4 100%);\n  color: white;\n  box-shadow: 0 15px 40px rgba(157, 101, 255, 0.4);\n}\n.card-style-3[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%] {\n  background: #9d65ff;\n}\n@media (max-width: 1100px) {\n  .premium-card[_ngcontent-%COMP%] {\n    min-height: 480px;\n    padding: 2rem;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n@media (max-width: 768px) {\n  .services-premium[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .premium-card[_ngcontent-%COMP%] {\n    min-height: 450px;\n    padding: 1.5rem;\n  }\n}\n.comp[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2.5rem;\n  grid-template-columns: 1.2fr 0.8fr;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .comp[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.comp__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 800;\n  margin-bottom: 1.25rem;\n  font-size: 2rem;\n  line-height: 1.3;\n  color: #e15886;\n  position: relative;\n}\n.comp__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  width: 50px;\n  height: 3px;\n  background: #7fc8a9;\n  margin-top: 0.75rem;\n  border-radius: 2px;\n}\n.comp__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #2a2a2a;\n  font-size: 1.1rem;\n  margin-bottom: 1.25rem;\n  line-height: 1.6;\n}\n.bullets[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  padding-left: 0;\n  color: #2a2a2a;\n  list-style: none;\n}\n.bullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.875rem;\n  padding-left: 1.75rem;\n  position: relative;\n  font-size: 1.05rem;\n}\n.bullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0.5rem;\n  width: 10px;\n  height: 10px;\n  background-color: #6f6aa7;\n  border-radius: 50%;\n}\n.comp__img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.comp__img[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: 10px;\n  bottom: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1,\n      #6f6aa7);\n  border-radius: 20px;\n  z-index: -1;\n  opacity: 0.7;\n}\n.comp__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 16px;\n  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  border: 8px solid white;\n}\n.comp__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.15);\n}\n.commitment-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886,\n      #6f6aa7);\n  color: white;\n  padding: 0.5rem 1.25rem;\n  border-radius: 50px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 1.25rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  box-shadow: 0 4px 15px rgba(225, 88, 134, 0.3);\n}\n.highlight-box[_ngcontent-%COMP%] {\n  background: #f7f2ea;\n  border-left: 4px solid #7fc8a9;\n  padding: 1.5rem;\n  margin-top: 1.75rem;\n  border-radius: 0 12px 12px 0;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);\n}\n.highlight-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-style: italic;\n  color: #2a2a2a;\n  line-height: 1.5;\n}\n.cta-final[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e15886,\n      rgb(217.2335025381, 44.7664974619, 102.6751269036));\n  color: #fff;\n  padding: clamp(3rem, 6vw, 5rem) 0;\n  position: relative;\n  overflow: hidden;\n}\n.cta-final[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(111, 106, 167, 0.15) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(127, 200, 169, 0.1) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.wrap[_ngcontent-%COMP%] {\n  width: min(1100px, 92%);\n  margin-inline: auto;\n  text-align: center;\n  position: relative;\n  z-index: 2;\n}\n.cta-final[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  font-size: clamp(1.75rem, 4vw, 2.5rem);\n  line-height: 1.2;\n}\n.cta-final[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background: #7fc8a9;\n  margin: 1rem auto 0;\n  border-radius: 2px;\n  opacity: 0.8;\n}\n.cta-final[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=inicio.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Inicio, [{
    type: Component,
    args: [{ selector: "app-inicio", standalone: true, imports: [CommonModule, RouterModule], template: `<!-- ===== HERO (carrusel autom\xE1tico, sin puntos) ===== -->\r
<section class="hero-carousel" role="region" aria-label="Presentaci\xF3n Ma\xB4Care">\r
  <div class="carousel">\r
    <!-- SOLO im\xE1genes + overlay; SIN contenido por slide -->\r
    <div\r
      class="slide"\r
      *ngFor="let s of slides; let i = index"\r
      [class.active]="i === currentSlide"\r
      [attr.aria-hidden]="i === currentSlide ? 'false' : 'true'"\r
      [attr.inert]="i === currentSlide ? null : ''"\r
    >\r
      <img\r
        [src]="s.image"\r
        [alt]="s.alt"\r
        loading="lazy"\r
        decoding="async"\r
        [attr.fetchpriority]="i === currentSlide ? 'high' : null"\r
      />\r
      <div class="overlay"></div>\r
    </div>\r
\r
    <!-- CONTENIDO FIJO (t\xEDtulo, subt\xEDtulo y CTAs) -->\r
    <div class="content content--fixed" aria-live="polite">\r
      <h1 class="title">{{ slides[currentSlide].title }}</h1>\r
      <p class="subtitle">{{ slides[currentSlide].subtitle }}</p>\r
\r
      <div class="actions">\r
        <a\r
          class="btn btn--primary"\r
          [routerLink]="primaryCta.link"\r
          [attr.aria-label]="primaryCta.label"\r
        >\r
          {{ primaryCta.label }}\r
        </a>\r
        <a\r
          class="btn btn--ghost"\r
          [routerLink]="secondaryCta.link"\r
          [attr.aria-label]="secondaryCta.label"\r
        >\r
          {{ secondaryCta.label }}\r
        </a>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <svg class="hero__wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">\r
    <path d="M0,40 C240,120 480,0 720,60 C960,120 1200,40 1440,80 L1440,120 L0,120 Z"></path>\r
  </svg>\r
</section>\r
\r
<!-- ===== C\xD3MO TE AYUDAMOS (pilares con paleta) ===== -->\r
<section class="section container">\r
  <header class="head">\r
    <h2>C\xF3mo te ayudamos</h2>\r
    <p class="lead">Informaci\xF3n confiable, apoyo profesional y comunidad para que no camines sola.</p>\r
  </header>\r
\r
  <div class="pillars">\r
    <article class="pillar" *ngFor="let p of pilares; let i = index" [ngClass]="'scheme-'+(i % 4)">\r
      <div class="icon-wrap">\r
        <!-- Usa el HTML sanitizado -->\r
        <div class="icn" [innerHTML]="p.iconSafe" aria-hidden="true"></div>\r
      </div>\r
      <div class="pillar__text">\r
        <h3>{{ p.title }}</h3>\r
        <p>{{ p.desc }}</p>\r
      </div>\r
    </article>\r
  </div>\r
</section>\r
\r
<!-- ===== C\xD3MO TE ACOMPA\xD1AMOS (m\xE9todo 3 pasos) ===== -->\r
<section class="section alt">\r
  <div class="container">\r
    <header class="head">\r
      <h2>\xBFC\xF3mo te acompa\xF1amos?</h2>\r
      <p class="lead">Metodolog\xEDa cl\xEDnico-humanista basada en evidencia.</p>\r
    </header>\r
\r
    <div class="steps">\r
      <article class="step" *ngFor="let s of pasos">\r
        <div class="step-icon" [innerHTML]="s.iconSafe" aria-hidden="true"></div>\r
        <h3><span class="badge">{{ s.n }}</span> {{ s.t }}</h3>\r
        <p>{{ s.d }}</p>\r
      </article>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ===== HISTORIAS (tarjetas c\xE1lidas) ===== -->\r
<section class="section stories">\r
  <div class="container">\r
    <header class="head">\r
      <h2>Historias que inspiran</h2>\r
      <p class="lead">Voces reales que nos recuerdan que no est\xE1s sola.</p>\r
    </header>\r
\r
    <div class="stories__grid">\r
      <article\r
        class="story"\r
        *ngFor="let t of testimonios; let i = index"\r
        [ngClass]="'scheme-' + (i % 4)"\r
      >\r
        <div class="story__top">\r
          <div class="avatar" *ngIf="t.img">\r
            <img [src]="t.img" [alt]="'Foto de ' + t.nombre" loading="lazy" decoding="async" />\r
          </div>\r
          <div class="who">\r
            <h3 class="name">{{ t.nombre }}</h3>\r
            <p class="meta">{{ t.meta }}</p>\r
          </div>\r
        </div>\r
\r
        <blockquote class="quote">"{{ t.texto }}"</blockquote>\r
\r
        <a\r
          class="readmore"\r
          (click)="goToStories()"\r
          aria-label="Leer m\xE1s historias inspiradoras"\r
        >\r
          Leer m\xE1s historias \u2192\r
        </a>\r
      </article>\r
    </div>\r
\r
    <div class="stories__cta">\r
      <a (click)="goToStories()" class="btn btn--ghost">Ver m\xE1s historias</a>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ===== SERVICIOS PREMIUM ===== -->\r
<section class="services-premium">\r
  <div class="container">\r
    <header class="hero-header">\r
      <h2 class="hero-title">Conoce nuestros servicios</h2>\r
      <p class="hero-subtitle">Espacios y herramientas para tu cuidado emocional</p>\r
    </header>\r
\r
    <div class="premium-cards">\r
      <article class="premium-card" *ngFor="let s of servicios; let i = index" [class]="'premium-card card-style-' + (i + 1)">\r
        <div class="card-glow"></div>\r
        <div class="card-blob"></div>\r
        \r
        <div class="card-image-container">\r
          <img [src]="s.img" [alt]="s.title" loading="lazy" class="card-image" />\r
          <div class="image-overlay"></div>\r
        </div>\r
\r
        <div class="card-content">\r
          <div class="text-content">\r
            <h3 class="service-title">{{ s.title }}</h3>\r
            <p class="service-desc">{{ s.desc }}</p>\r
          </div>\r
\r
          <div class="card-actions">\r
            <a [routerLink]="s.link" class="cta-button">\r
              <span class="btn-text">Descubrir m\xE1s</span>\r
              <div class="btn-arrow">\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">\r
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
                </svg>\r
              </div>\r
              <div class="btn-shine"></div>\r
            </a>\r
          </div>\r
        </div>\r
\r
        <div class="card-particles">\r
          <div class="particle" *ngFor="let p of [1,2,3,4,5]"></div>\r
        </div>\r
      </article>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ===== COMPROMISO / MISI\xD3N ===== -->\r
<section class="section alt">\r
  <div class="container comp">\r
    <div class="comp__text">\r
      <span class="commitment-badge">Compromiso Social</span>\r
      <h2>Declaraci\xF3n de compromiso responsable</h2>\r
      <p>\r
        Promovemos el bienestar integral con enfoque cl\xEDnico-humanista y pr\xE1cticas basadas en evidencia,\r
        cuidando la dignidad, inclusi\xF3n y confidencialidad. Nos alineamos con los ODS y trabajamos por\r
        el fortalecimiento de la salud mental en Colombia.\r
      </p>\r
      \r
      <ul class="bullets">\r
        <li>\xC9tica, privacidad y acompa\xF1amiento informado en todos nuestros procesos.</li>\r
        <li>Articulaci\xF3n estrat\xE9gica con aliados y programas de voluntariado especializado.</li>\r
        <li>Acceso equitativo a herramientas pr\xE1cticas y cuidadosas para el bienestar psicol\xF3gico.</li>\r
        <li>Investigaci\xF3n continua para mejorar nuestras intervenciones y servicios.</li>\r
      </ul>\r
      \r
      <div class="highlight-box">\r
        <p>Nuestro modelo de atenci\xF3n integra los m\xE1s altos est\xE1ndares cient\xEDficos con una perspectiva humanista que valora la singularidad de cada persona.</p>\r
      </div>\r
    </div>\r
    \r
    <div class="comp__img">\r
      <img src="ods.png" alt="ODS 3 Salud y Bienestar" loading="lazy" decoding="async" />\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ===== CTA FINAL ===== -->\r
<section class="cta-final">\r
  <div class="wrap">\r
    <h2>\xBFTe acompa\xF1amos hoy?</h2>\r
    <div class="actions">\r
      <a routerLink="/agenda" class="btn btn--primary">Agenda tu cita</a>\r
      <a routerLink="/recursos" class="btn btn--ghost">Explorar recursos</a>\r
      <a [href]="whatsappUrl" target="_blank" rel="noopener" class="btn btn--whatsapp">WhatsApp</a>\r
    </div>\r
  </div>\r
</section>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/inicio/inicio.scss */\n.container {\n  width: min(1100px, 92%);\n  margin-inline: auto;\n}\n.section {\n  padding: clamp(2rem, 4vw, 4rem) 0;\n  background: #fff;\n}\n.section.alt {\n  background: #fff6f9;\n}\n.head {\n  text-align: center;\n  margin-bottom: 1.25rem;\n}\n.head h2 {\n  font-weight: 900;\n  font-size: clamp(1.5rem, 3vw, 2.25rem);\n  color: #2a2a2a;\n}\n.head .lead {\n  color: #5d5d5d;\n}\n.hero-carousel {\n  position: relative;\n  isolation: isolate;\n}\n.hero-carousel .carousel {\n  position: relative;\n  overflow: hidden;\n  height: min(78vh, 720px);\n}\n@media (max-width: 640px) {\n  .hero-carousel .carousel {\n    height: 62vh;\n  }\n}\n.slide {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transition: opacity 0.6s ease;\n}\n.slide.active {\n  opacity: 1;\n}\n.slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n}\n.content.content--fixed {\n  position: absolute;\n  left: clamp(1rem, 7vw, 6rem);\n  bottom: clamp(3rem, 10vh, 9rem);\n  max-width: min(900px, 80%);\n  color: #fff;\n}\n.title {\n  font-weight: 900;\n  line-height: 1.05;\n  font-size: clamp(1.8rem, 4vw, 3rem);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);\n}\n.subtitle {\n  margin-top: 0.75rem;\n  font-size: clamp(1rem, 2.1vw, 1.25rem);\n  opacity: 0.95;\n}\n.actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n  flex-wrap: wrap;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.85rem 1.3rem;\n  border-radius: 999px;\n  font-weight: 800;\n  transition: transform 0.12s ease, box-shadow 0.2s;\n  cursor: pointer;\n  text-decoration: none;\n}\n.btn--primary {\n  background: #e15886;\n  color: #fff;\n  box-shadow: 0 8px 20px rgba(225, 88, 134, 0.35);\n}\n.btn--primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 12px 25px rgba(225, 88, 134, 0.45);\n}\n.btn--ghost {\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  -webkit-backdrop-filter: saturate(120%) blur(2px);\n  backdrop-filter: saturate(120%) blur(2px);\n}\n.btn--ghost:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-1px);\n}\n.btn--light {\n  background: #fff;\n  color: #2a2a2a;\n}\n.btn--whatsapp {\n  background: #25D366;\n  color: #fff;\n}\n.ctrl,\n.dots {\n  display: none !important;\n}\n.hero__wave {\n  display: block;\n  width: 100%;\n  height: 70px;\n  fill: #f7d3e1;\n}\n.pillars {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 900px) {\n  .pillars {\n    grid-template-columns: 1fr;\n  }\n}\n.pillar {\n  position: relative;\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  border-radius: 18px;\n  padding: 1.1rem 1.2rem;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.07);\n  transition: transform 0.15s ease, box-shadow 0.2s ease;\n}\n.pillar:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.1);\n}\n.icon-wrap {\n  width: 56px;\n  height: 56px;\n  min-width: 56px;\n  border-radius: 16px;\n  display: grid;\n  place-items: center;\n  font-size: 0;\n}\n.icn {\n  color: currentColor;\n}\n.pillar__text h3 {\n  margin: 0.15rem 0 0.35rem;\n  font-weight: 900;\n  color: #2a2a2a;\n}\n.pillar__text p {\n  color: rgb(80.25, 80.25, 80.25);\n}\n.scheme-0 {\n  background: rgb(253.8, 248.4, 250.5);\n  color: #e15886;\n}\n.scheme-0 .icon-wrap {\n  background: rgb(252.6, 241.8, 246);\n  color: #e15886;\n}\n.scheme-1 {\n  background: rgb(239.64, 248.4, 244.68);\n  color: #2c6a52;\n}\n.scheme-1 .icon-wrap {\n  background: rgb(216.6, 238.5, 229.2);\n  color: #2c6a52;\n}\n.scheme-2 {\n  background: rgb(252.15, 251.7, 255);\n  color: #6f6aa7;\n}\n.scheme-2 .icon-wrap {\n  background: rgb(249.3, 248.4, 255);\n  color: #6f6aa7;\n}\n.scheme-3 {\n  background: rgb(253.8, 253.05, 251.85);\n  color: #6b5f54;\n}\n.scheme-3 .icon-wrap {\n  background: rgb(252.6, 251.1, 248.7);\n  color: #6b5f54;\n}\n.steps {\n  width: min(1100px, 92%);\n  margin-inline: auto;\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 900px) {\n  .steps {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.step {\n  background: #fff;\n  border: 1px solid hsl(339.8540145985, 69.5431472081%, 101.3725490196%);\n  border-radius: 18px;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  position: relative;\n  transition: transform 0.15s ease, box-shadow 0.2s ease;\n}\n.step:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);\n}\n.step-icon {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto 1rem;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgb(252.6, 241.8, 246);\n}\n.step-icon svg {\n  color: #e15886;\n}\n.step h3 {\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  color: #2a2a2a;\n  margin-bottom: 1rem;\n}\n.badge {\n  display: inline-grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 999px;\n  font-weight: 900;\n  background: #f7d3e1;\n  color: #2a2a2a;\n  font-size: 0.9rem;\n}\n.stories {\n  background:\n    linear-gradient(\n      180deg,\n      #f7d3e1 0%,\n      #fff6f9 100%);\n}\n.stories .head h2 {\n  color: #2a2a2a;\n}\n.stories .head .lead {\n  color: rgba(42, 42, 42, 0.7);\n}\n.stories__grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .stories__grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .stories__grid {\n    grid-template-columns: 1fr;\n  }\n}\n.story {\n  position: relative;\n  border-radius: 20px;\n  padding: 1.5rem;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: transform 0.18s ease, box-shadow 0.25s ease;\n  -webkit-backdrop-filter: saturate(120%);\n  backdrop-filter: saturate(120%);\n}\n.story:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 46px rgba(0, 0, 0, 0.14);\n}\n.story__top {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);\n}\n.avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.name {\n  margin: 0;\n  font-weight: 900;\n  color: #2a2a2a;\n}\n.meta {\n  margin: 0;\n  font-size: 0.92rem;\n  opacity: 0.8;\n}\n.quote {\n  margin: 0.35rem 0 1rem;\n  font-size: 1.05rem;\n  line-height: 1.5;\n  color: #2a2a2a;\n  font-style: italic;\n}\n.readmore {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-weight: 800;\n  text-decoration: none;\n  padding: 0.45rem 0.75rem;\n  border-radius: 999px;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  background: rgba(255, 255, 255, 0.6);\n  color: inherit;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.readmore:hover {\n  background: rgba(255, 255, 255, 0.8);\n  transform: translateY(-1px);\n}\n.scheme-0 {\n  background: #ffeef6;\n  color: #8f2f54;\n}\n.scheme-1 {\n  background: #eef8f3;\n  color: #2c6a52;\n}\n.scheme-2 {\n  background: #f3f2ff;\n  color: #6f6aa7;\n}\n.scheme-3 {\n  background: #fbf7f0;\n  color: #6b5f54;\n}\n.stories__cta {\n  text-align: center;\n  margin-top: 2rem;\n}\n.stories__cta .btn--ghost {\n  border-color: #e15886;\n  color: #e15886;\n  background: transparent;\n}\n.stories__cta .btn--ghost:hover {\n  background: #e15886;\n  color: white;\n}\n.services-premium {\n  padding: 6rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9ff 0%,\n      #f0f2ff 50%,\n      #e8ebff 100%);\n  position: relative;\n  overflow: hidden;\n}\n.services-premium::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 107, 157, 0.3),\n      transparent);\n}\n.hero-header {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n.hero-title {\n  font-size: 3.5rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b9d,\n      #9d65ff,\n      #00d2b4);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 1rem;\n  letter-spacing: -0.5px;\n}\n.hero-subtitle {\n  font-size: 1.4rem;\n  color: #6b7280;\n  font-weight: 500;\n  max-width: 500px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.premium-cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2.5rem;\n}\n@media (max-width: 1100px) {\n  .premium-cards {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 2rem;\n  }\n}\n@media (max-width: 768px) {\n  .premium-cards {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    max-width: 500px;\n    margin: 0 auto;\n  }\n}\n.premium-card {\n  position: relative;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 32px;\n  padding: 2.5rem;\n  min-height: 520px;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n}\n.premium-card::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1),\n      rgba(255, 255, 255, 0));\n  border-radius: 32px;\n  pointer-events: none;\n}\n.premium-card:hover {\n  transform: translateY(-15px) scale(1.02);\n  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);\n}\n.premium-card:hover .card-glow {\n  opacity: 1;\n  transform: scale(1.1);\n}\n.premium-card:hover .card-blob {\n  transform: scale(1.2) rotate(10deg);\n}\n.premium-card:hover .card-image {\n  transform: scale(1.1);\n}\n.premium-card:hover .cta-button {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);\n}\n.card-glow {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    conic-gradient(\n      from 0deg,\n      transparent,\n      rgba(255, 255, 255, 0.1),\n      transparent);\n  opacity: 0;\n  transition: all 0.8s ease;\n  pointer-events: none;\n}\n.card-blob {\n  position: absolute;\n  top: 50%;\n  right: -100px;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  filter: blur(60px);\n  opacity: 0.3;\n  transition: all 0.8s ease;\n  pointer-events: none;\n}\n.card-image-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 180px;\n  border-radius: 24px 24px 0 0;\n  overflow: hidden;\n}\n.card-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.8s ease;\n}\n.image-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.2) 0%,\n      transparent 50%);\n}\n.card-content {\n  position: relative;\n  z-index: 3;\n  margin-top: 160px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.text-content {\n  flex: 1;\n  margin-bottom: 2rem;\n}\n.service-title {\n  font-size: 1.8rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  line-height: 1.2;\n  text-transform: uppercase;\n  letter-spacing: -0.5px;\n}\n.service-desc {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #4b5563;\n  opacity: 0.9;\n}\n.card-actions {\n  margin-top: auto;\n}\n.cta-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 1rem;\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  padding: 1.2rem 2rem;\n  border-radius: 16px;\n  text-decoration: none;\n  font-weight: 700;\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  position: relative;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.cta-button:hover {\n  text-decoration: none;\n  transform: translateY(-3px);\n}\n.cta-button:hover .btn-arrow {\n  transform: translateX(5px);\n}\n.cta-button:hover .btn-shine {\n  transform: translateX(100%);\n}\n.btn-text {\n  position: relative;\n  z-index: 2;\n}\n.btn-arrow {\n  position: relative;\n  z-index: 2;\n  transition: transform 0.3s ease;\n}\n.btn-shine {\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transition: transform 0.6s ease;\n}\n.card-particles {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.particle {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  opacity: 0.6;\n  animation: float 6s infinite ease-in-out;\n}\n.particle:nth-child(1) {\n  top: 38%;\n  left: 99%;\n  animation-delay: 1s;\n}\n.particle:nth-child(2) {\n  top: 36%;\n  left: 30%;\n  animation-delay: 2s;\n}\n.particle:nth-child(3) {\n  top: 21%;\n  left: 76%;\n  animation-delay: 3s;\n}\n.particle:nth-child(4) {\n  top: 74%;\n  left: 54%;\n  animation-delay: 4s;\n}\n.particle:nth-child(5) {\n  top: 59%;\n  left: 53%;\n  animation-delay: 5s;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(180deg);\n  }\n}\n.card-style-1 .card-blob {\n  background: #ff6b9d;\n}\n.card-style-1 .service-title {\n  color: #c44569;\n}\n.card-style-1 .cta-button {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b9d 0%,\n      #c44569 100%);\n  color: white;\n}\n.card-style-1 .cta-button:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #ff8bb3 0%,\n      #d45a7a 100%);\n  color: white;\n  box-shadow: 0 15px 40px rgba(255, 107, 157, 0.4);\n}\n.card-style-1 .particle {\n  background: #ff6b9d;\n}\n.card-style-2 .card-blob {\n  background: #00d2b4;\n}\n.card-style-2 .service-title {\n  color: #00a896;\n}\n.card-style-2 .cta-button {\n  background:\n    linear-gradient(\n      135deg,\n      #00d2b4 0%,\n      #00a896 100%);\n  color: white;\n}\n.card-style-2 .cta-button:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #26e6ca 0%,\n      #00c2a8 100%);\n  color: white;\n  box-shadow: 0 15px 40px rgba(0, 210, 180, 0.4);\n}\n.card-style-2 .particle {\n  background: #00d2b4;\n}\n.card-style-3 .card-blob {\n  background: #9d65ff;\n}\n.card-style-3 .service-title {\n  color: #6d44c4;\n}\n.card-style-3 .cta-button {\n  background:\n    linear-gradient(\n      135deg,\n      #9d65ff 0%,\n      #6d44c4 100%);\n  color: white;\n}\n.card-style-3 .cta-button:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #b18aff 0%,\n      #7d55d4 100%);\n  color: white;\n  box-shadow: 0 15px 40px rgba(157, 101, 255, 0.4);\n}\n.card-style-3 .particle {\n  background: #9d65ff;\n}\n@media (max-width: 1100px) {\n  .premium-card {\n    min-height: 480px;\n    padding: 2rem;\n  }\n  .hero-title {\n    font-size: 3rem;\n  }\n}\n@media (max-width: 768px) {\n  .services-premium {\n    padding: 4rem 0;\n  }\n  .hero-title {\n    font-size: 2.5rem;\n  }\n  .hero-subtitle {\n    font-size: 1.2rem;\n  }\n  .premium-card {\n    min-height: 450px;\n    padding: 1.5rem;\n  }\n}\n.comp {\n  display: grid;\n  gap: 2.5rem;\n  grid-template-columns: 1.2fr 0.8fr;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .comp {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.comp__text h2 {\n  font-weight: 800;\n  margin-bottom: 1.25rem;\n  font-size: 2rem;\n  line-height: 1.3;\n  color: #e15886;\n  position: relative;\n}\n.comp__text h2::after {\n  content: "";\n  display: block;\n  width: 50px;\n  height: 3px;\n  background: #7fc8a9;\n  margin-top: 0.75rem;\n  border-radius: 2px;\n}\n.comp__text p {\n  color: #2a2a2a;\n  font-size: 1.1rem;\n  margin-bottom: 1.25rem;\n  line-height: 1.6;\n}\n.bullets {\n  margin-top: 1.25rem;\n  padding-left: 0;\n  color: #2a2a2a;\n  list-style: none;\n}\n.bullets li {\n  margin-bottom: 0.875rem;\n  padding-left: 1.75rem;\n  position: relative;\n  font-size: 1.05rem;\n}\n.bullets li::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0.5rem;\n  width: 10px;\n  height: 10px;\n  background-color: #6f6aa7;\n  border-radius: 50%;\n}\n.comp__img {\n  position: relative;\n}\n.comp__img::before {\n  content: "";\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: 10px;\n  bottom: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1,\n      #6f6aa7);\n  border-radius: 20px;\n  z-index: -1;\n  opacity: 0.7;\n}\n.comp__img img {\n  width: 100%;\n  height: auto;\n  border-radius: 16px;\n  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  border: 8px solid white;\n}\n.comp__img img:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.15);\n}\n.commitment-badge {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886,\n      #6f6aa7);\n  color: white;\n  padding: 0.5rem 1.25rem;\n  border-radius: 50px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 1.25rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  box-shadow: 0 4px 15px rgba(225, 88, 134, 0.3);\n}\n.highlight-box {\n  background: #f7f2ea;\n  border-left: 4px solid #7fc8a9;\n  padding: 1.5rem;\n  margin-top: 1.75rem;\n  border-radius: 0 12px 12px 0;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);\n}\n.highlight-box p {\n  margin-bottom: 0;\n  font-style: italic;\n  color: #2a2a2a;\n  line-height: 1.5;\n}\n.cta-final {\n  background:\n    linear-gradient(\n      135deg,\n      #e15886,\n      rgb(217.2335025381, 44.7664974619, 102.6751269036));\n  color: #fff;\n  padding: clamp(3rem, 6vw, 5rem) 0;\n  position: relative;\n  overflow: hidden;\n}\n.cta-final::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(111, 106, 167, 0.15) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(127, 200, 169, 0.1) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.wrap {\n  width: min(1100px, 92%);\n  margin-inline: auto;\n  text-align: center;\n  position: relative;\n  z-index: 2;\n}\n.cta-final h2 {\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  font-size: clamp(1.75rem, 4vw, 2.5rem);\n  line-height: 1.2;\n}\n.cta-final h2::after {\n  content: "";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background: #7fc8a9;\n  margin: 1rem auto 0;\n  border-radius: 2px;\n  opacity: 0.8;\n}\n.cta-final .actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=inicio.css.map */\n'] }]
  }], () => [{ type: DomSanitizer }, { type: Router }], { onVisibility: [{
    type: HostListener,
    args: ["document:visibilitychange"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Inicio, { className: "Inicio", filePath: "src/app/pages/inicio/inicio.ts", lineNumber: 13 });
})();
export {
  Inicio
};
//# sourceMappingURL=chunk-HGLMWJFM.js.map
