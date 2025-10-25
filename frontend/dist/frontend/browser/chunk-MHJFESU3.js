import {
  Router
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
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DEJWN6HZ.js";

// src/app/pages/historias/historias.ts
function Historias_article_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 21);
    \u0275\u0275listener("click", function Historias_article_16_Template_article_click_0_listener() {
      const testimonio_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.abrirModal(testimonio_r2));
    });
    \u0275\u0275elementStart(1, "div", 22)(2, "div", 23)(3, "img", 24);
    \u0275\u0275listener("error", function Historias_article_16_Template_img_error_3_listener($event) {
      const testimonio_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleImageError($event, testimonio_r2));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 25)(5, "h3", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "blockquote", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 29)(12, "button", 30);
    \u0275\u0275element(13, "i", 31);
    \u0275\u0275text(14, " Leer historia completa ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 32);
    \u0275\u0275element(16, "i", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const testimonio_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", ctx_r2.getCardColor(i_r4));
    \u0275\u0275classProp("featured", i_r4 === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", testimonio_r2.foto, \u0275\u0275sanitizeUrl)("alt", "Foto de " + testimonio_r2.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(testimonio_r2.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonio_r2.meta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(' "', testimonio_r2.textoCorto, '" ');
    \u0275\u0275advance(2);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate1("Leer historia completa de ", testimonio_r2.nombre));
  }
}
function Historias_div_31_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-lucide", ctx_r2.getTagIcon(tag_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r6, " ");
  }
}
function Historias_div_31_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "h4");
    \u0275\u0275element(2, "i", 59);
    \u0275\u0275text(3, " El impacto en mi vida ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.testimonioSeleccionado.impacto);
  }
}
function Historias_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function Historias_div_31_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 35);
    \u0275\u0275listener("click", function Historias_div_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cerrarModal());
    });
    \u0275\u0275element(2, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37)(4, "div", 38)(5, "img", 39);
    \u0275\u0275listener("error", function Historias_div_31_Template_img_error_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleModalImageError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 40)(7, "h2", 41);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 42);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 43);
    \u0275\u0275template(12, Historias_div_31_span_12_Template, 3, 2, "span", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 45)(14, "blockquote", 46);
    \u0275\u0275element(15, "i", 47);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 48)(18, "h3");
    \u0275\u0275element(19, "i", 31);
    \u0275\u0275text(20, " Mi Historia Completa ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, Historias_div_31_div_22_Template, 6, 1, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 51)(24, "button", 52);
    \u0275\u0275listener("click", function Historias_div_31_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.compartirHistoria());
    });
    \u0275\u0275element(25, "i", 53);
    \u0275\u0275text(26, " Compartir esta historia ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 54);
    \u0275\u0275listener("click", function Historias_div_31_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.inspirarme());
    });
    \u0275\u0275element(28, "i", 55);
    \u0275\u0275text(29, " Esta historia me inspira ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r2.testimonioSeleccionado.foto, \u0275\u0275sanitizeUrl)("alt", "Foto de " + ctx_r2.testimonioSeleccionado.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.testimonioSeleccionado.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.testimonioSeleccionado.meta);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.testimonioSeleccionado.tags);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(' "', ctx_r2.testimonioSeleccionado.textoCorto, '" ');
    \u0275\u0275advance(5);
    \u0275\u0275property("innerHTML", ctx_r2.testimonioSeleccionado.historiaCompleta, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.testimonioSeleccionado.impacto);
  }
}
var Historias = class _Historias {
  router = inject(Router);
  modalAbierto = false;
  testimonioSeleccionado = null;
  // Paleta de colores suaves para las cards
  cardColors = [
    "linear-gradient(135deg, #FF6B9D, #FFB6C1)",
    // Rosa suave
    "linear-gradient(135deg, #A78BFA, #C4B5FD)",
    // Lavanda
    "linear-gradient(135deg, #34D399, #6EE7B7)",
    // Verde menta
    "linear-gradient(135deg, #FCD34D, #FDE68A)"
    // Amarillo suave
  ];
  // Mapeo de tags a iconos Lucide
  tagIcons = {
    "Ansiedad": "brain",
    "Sue\xF1o": "moon",
    "Aceptaci\xF3n": "check-circle",
    "Organizaci\xF3n": "calendar",
    "Grupo de apoyo": "users",
    "Mindfulness": "eye",
    "Mentor\xEDa": "graduation-cap",
    "Resiliencia": "shield",
    "Prop\xF3sito": "target",
    "Vulnerabilidad": "heart",
    "Autenticidad": "user-check",
    "Expresi\xF3n emocional": "message-circle"
  };
  testimonios = [
    {
      id: 1,
      nombre: "Mar\xEDa Gonz\xE1lez",
      meta: "3 a\xF1os en remisi\xF3n",
      textoCorto: "Encontr\xE9 un espacio seguro para hablar del miedo y volver a dormir tranquila.",
      historiaCompleta: `
        <p>Cuando me diagnosticaron c\xE1ncer de mama, el mundo se me vino encima. El miedo era mi compa\xF1ero constante, especialmente en las noches cuando todo estaba en silencio.</p>
        
        <p>Llegar a Ma\xB4Care fue encontrar un faro en la tormenta. A trav\xE9s de las sesiones de terapia y el kit de memorias, aprend\xED a expresar mis emociones de manera sana. Cada carta que escrib\xEDa, cada foto que guardaba en mi caja de recuerdos, era un paso hacia la aceptaci\xF3n y la paz.</p>
        
        <p>Hoy, tres a\xF1os despu\xE9s, miro hacia atr\xE1s y veo c\xF3mo cada herramienta, cada sesi\xF3n, cada palabra de aliento, me ayud\xF3 a reconstruir mi vida no solo como sobreviviente, sino como una mujer m\xE1s fuerte y consciente de su valor.</p>
      `,
      impacto: "He podido retomar mi trabajo como docente y ahora ayudo a otras mujeres que atraviesan por lo mismo.",
      tags: ["Ansiedad", "Sue\xF1o", "Aceptaci\xF3n"],
      foto: "inspiran/1.jpg",
      colorCard: this.cardColors[0]
    },
    {
      id: 2,
      nombre: "Carolina Rodr\xEDguez",
      meta: "En tratamiento activo",
      textoCorto: "Las herramientas me ayudaron a organizar mis d\xEDas y encontrar calma en la incertidumbre.",
      historiaCompleta: `
        <p>El tratamiento de quimioterapia era abrumador. Los d\xEDas se mezclaban, las citas m\xE9dicas se acumulaban y la ansiedad por lo que vendr\xEDa me paralizaba.</p>
        
        <p>El paquete integral de Ma\xB4Care lleg\xF3 en el momento perfecto. Las sesiones virtuales me permit\xEDan conectar con mi psic\xF3loga desde la comodidad de mi casa en los d\xEDas dif\xEDciles, y el kit intermedio me dio estructura. Empec\xE9 a usar la agenda para organizar mis medicamentos y citas, y los ejercicios de mindfulness me ayudaban a centrarme en el presente.</p>
        
        <p>Lo m\xE1s valioso fue entender que no estaba sola. El grupo de apoyo se convirti\xF3 en mi red de contenci\xF3n, donde pod\xEDa compartir mis miedos y celebrar mis peque\xF1os logros con mujeres que realmente entend\xEDan por lo que estaba pasando.</p>
      `,
      impacto: "Manejo mejor los efectos secundarios del tratamiento y he encontrado una comunidad de apoyo invaluable.",
      tags: ["Organizaci\xF3n", "Grupo de apoyo", "Mindfulness"],
      foto: "inspiran/2.jpg",
      colorCard: this.cardColors[1]
    },
    {
      id: 3,
      nombre: "Carmen Silva",
      meta: "10 a\xF1os en remisi\xF3n",
      textoCorto: "Ser mentora me permite dar lo que recib\xED. No hay mayor satisfacci\xF3n que acompa\xF1ar a otras.",
      historiaCompleta: `
        <p>Hace una d\xE9cada, cuando me dijeron que ten\xEDa c\xE1ncer, pens\xE9 que mi vida hab\xEDa terminado. Hoy s\xE9 que fue un nuevo comienzo.</p>
        
        <p>El proceso con Ma\xB4Care no solo me ayud\xF3 a sanar emocionalmente, sino que me mostr\xF3 la belleza de la resiliencia. Las herramientas que aprend\xED las he aplicado en cada \xE1rea de mi vida, y la fuerza que encontr\xE9 en mi propio proceso me llev\xF3 a querer ayudar a otras.</p>
        
        <p>Ahora, como mentora voluntaria, tengo el privilegio de caminar junto a otras mujeres en su proceso. Verlas transformar su miedo en fortaleza, su dolor en prop\xF3sito, es el regago m\xE1s grande que he recibido. Cada historia que acompa\xF1o sana una parte m\xE1s de la m\xEDa.</p>
      `,
      impacto: "He acompa\xF1ado a m\xE1s de 20 mujeres en su proceso y fund\xE9 un grupo de mentoras en mi ciudad.",
      tags: ["Mentor\xEDa", "Resiliencia", "Prop\xF3sito"],
      foto: "inspiran/3.jpg",
      colorCard: this.cardColors[2]
    }
  ];
  ngOnInit() {
  }
  ngAfterViewInit() {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
  getCardColor(index) {
    return this.cardColors[index % this.cardColors.length];
  }
  getTagIcon(tag) {
    return this.tagIcons[tag] || "help-circle";
  }
  handleImageError(event, testimonio) {
    const img = event.target;
    const placeholder = document.createElement("div");
    placeholder.className = "avatar-placeholder";
    placeholder.style.background = this.getCardColor(this.testimonios.indexOf(testimonio));
    placeholder.textContent = testimonio.nombre.charAt(0);
    img.parentNode?.replaceChild(placeholder, img);
  }
  handleModalImageError(event) {
    const img = event.target;
    const placeholder = document.createElement("div");
    placeholder.className = "modal-avatar-placeholder";
    placeholder.textContent = this.testimonioSeleccionado?.nombre.charAt(0) || "?";
    img.parentNode?.replaceChild(placeholder, img);
  }
  abrirModal(testimonio) {
    this.testimonioSeleccionado = testimonio;
    this.modalAbierto = true;
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    }, 100);
  }
  cerrarModal() {
    this.modalAbierto = false;
    this.testimonioSeleccionado = null;
    document.body.style.overflow = "auto";
  }
  verMasTestimonios() {
    alert("Pr\xF3ximamente tendremos m\xE1s historias inspiradoras para ti");
  }
  compartirHistoria() {
    if (this.testimonioSeleccionado) {
      const texto = `"${this.testimonioSeleccionado.textoCorto}" - ${this.testimonioSeleccionado.nombre}`;
      if (navigator.share) {
        navigator.share({
          title: "Historia Inspiradora - Ma\xB4Care",
          text: texto,
          url: window.location.href
        });
      } else {
        alert(`Comparte esta historia: ${texto}`);
      }
    }
  }
  inspirarme() {
    alert("\xA1Qu\xE9 bonito que esta historia te haya inspirado! \xBFTe gustar\xEDa compartir tu propia experiencia?");
  }
  static \u0275fac = function Historias_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Historias)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Historias, selectors: [["app-historias"]], decls: 32, vars: 4, consts: [[1, "historias-container"], [1, "historias-hero"], [1, "container"], [1, "hero-content"], [1, "hero-title"], [1, "hero-subtitle"], ["aria-labelledby", "testimonios-title", 1, "testimonios-section"], [1, "section-header"], ["id", "testimonios-title", 1, "section-title"], [1, "section-subtitle"], [1, "testimonios-grid"], ["class", "testimonio-card", 3, "background", "featured", "click", 4, "ngFor", "ngForOf"], [1, "historias-cta"], [1, "cta-content"], [1, "cta-actions"], ["href", "https://docs.google.com/forms/d/e/1FAIpQLSeEXAMPLE/viewform", "target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-primary"], ["data-lucide", "edit-3", "aria-hidden", "true"], [1, "btn", "btn-secondary", 3, "click"], ["data-lucide", "heart", "aria-hidden", "true"], [1, "modal-overlay", 3, "click"], ["class", "modal-content", 3, "click", 4, "ngIf"], [1, "testimonio-card", 3, "click"], [1, "testimonio-header"], [1, "avatar-container"], ["loading", "lazy", 1, "testimonio-foto", 3, "error", "src", "alt"], [1, "testimonio-info"], [1, "testimonio-name"], [1, "testimonio-meta"], [1, "testimonio-text"], [1, "testimonio-actions"], [1, "btn-leer-mas", 3, "aria-label"], ["data-lucide", "book-open", "aria-hidden", "true"], [1, "testimonio-decoration"], ["data-lucide", "quote", "aria-hidden", "true"], [1, "modal-content", 3, "click"], ["aria-label", "Cerrar modal", 1, "modal-close", 3, "click"], ["data-lucide", "x", "aria-hidden", "true"], [1, "modal-header"], [1, "modal-avatar"], [1, "modal-foto", 3, "error", "src", "alt"], [1, "modal-info"], [1, "modal-name"], [1, "modal-meta"], [1, "modal-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "modal-body"], [1, "modal-quote"], ["data-lucide", "quote", "aria-hidden", "true", 1, "quote-icon"], [1, "modal-story"], [1, "story-content", 3, "innerHTML"], ["class", "modal-impact", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-outline", 3, "click"], ["data-lucide", "share-2", "aria-hidden", "true"], [1, "btn", "btn-primary", 3, "click"], ["data-lucide", "sparkles", "aria-hidden", "true"], [1, "tag"], ["aria-hidden", "true"], [1, "modal-impact"], ["data-lucide", "star", "aria-hidden", "true"]], template: function Historias_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5, "Historias que Inspiran");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, " Voces reales de mujeres valientes que han encontrado luz en su camino. Cada historia es un testimonio de fortaleza y esperanza. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "section", 6)(9, "div", 2)(10, "div", 7)(11, "h2", 8);
      \u0275\u0275text(12, "Testimonios Reales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 9);
      \u0275\u0275text(14, "Conoce las experiencias de quienes han caminado este proceso con nosotras");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275template(16, Historias_article_16_Template, 17, 11, "article", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "h3");
      \u0275\u0275text(20, "\xBFTienes una historia que compartir?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22, "Tu experiencia puede inspirar a otras mujeres en su camino");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14)(24, "a", 15);
      \u0275\u0275element(25, "i", 16);
      \u0275\u0275text(26, " Compartir mi historia ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 17);
      \u0275\u0275listener("click", function Historias_Template_button_click_27_listener() {
        return ctx.verMasTestimonios();
      });
      \u0275\u0275element(28, "i", 18);
      \u0275\u0275text(29, " Ver m\xE1s testimonios ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(30, "div", 19);
      \u0275\u0275listener("click", function Historias_Template_div_click_30_listener() {
        return ctx.cerrarModal();
      });
      \u0275\u0275template(31, Historias_div_31_Template, 30, 8, "div", 20);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.testimonios);
      \u0275\u0275advance(14);
      \u0275\u0275classProp("active", ctx.modalAbierto);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.testimonioSeleccionado);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.historias-container[_ngcontent-%COMP%] {\n  font-family:\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  background: #FFF9FB;\n  min-height: 100vh;\n}\n.historias-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  color: #FFFFFF;\n  padding: 4rem 0;\n  text-align: center;\n}\n.historias-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.historias-hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.historias-hero[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  opacity: 0.9;\n  line-height: 1.6;\n}\n.testimonios-section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n.testimonios-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.testimonios-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #4A5568;\n  margin-bottom: 1rem;\n}\n.testimonios-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #718096;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.testimonios-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto 4rem;\n}\n.testimonio-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 2rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);\n  border: 1px solid #E2E8F0;\n}\n.testimonio-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.testimonio-card.featured[_ngcontent-%COMP%] {\n  border: 2px solid #FF6B9D;\n}\n.testimonio-card[_ngcontent-%COMP%]   .testimonio-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.testimonio-card[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.testimonio-card[_ngcontent-%COMP%]   .testimonio-foto[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #FFFFFF;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.testimonio-card[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FFFFFF;\n  font-size: 1.5rem;\n  font-weight: 700;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.testimonio-card[_ngcontent-%COMP%]   .testimonio-info[_ngcontent-%COMP%]   .testimonio-name[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #4A5568;\n  margin-bottom: 0.25rem;\n}\n.testimonio-card[_ngcontent-%COMP%]   .testimonio-info[_ngcontent-%COMP%]   .testimonio-meta[_ngcontent-%COMP%] {\n  color: #718096;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.testimonio-card[_ngcontent-%COMP%]   .testimonio-text[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A5568;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n  font-size: 1.1rem;\n  position: relative;\n  padding-left: 1rem;\n  border-left: 3px solid #FF6B9D;\n}\n.testimonio-card[_ngcontent-%COMP%]   .testimonio-actions[_ngcontent-%COMP%]   .btn-leer-mas[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: transparent;\n  border: 2px solid #FF6B9D;\n  color: #FF6B9D;\n  padding: 0.75rem 1.5rem;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.testimonio-card[_ngcontent-%COMP%]   .testimonio-actions[_ngcontent-%COMP%]   .btn-leer-mas[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.testimonio-card[_ngcontent-%COMP%]   .testimonio-actions[_ngcontent-%COMP%]   .btn-leer-mas[_ngcontent-%COMP%]:hover {\n  background: #FF6B9D;\n  color: #FFFFFF;\n  transform: translateY(-2px);\n}\n.testimonio-card[_ngcontent-%COMP%]   .testimonio-decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  opacity: 0.1;\n}\n.testimonio-card[_ngcontent-%COMP%]   .testimonio-decoration[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #4A5568;\n}\n.historias-cta[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 3rem;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n  border: 1px solid #E2E8F0;\n}\n.historias-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.historias-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: #4A5568;\n  margin-bottom: 1rem;\n}\n.historias-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #718096;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n}\n.historias-cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 2rem;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.modal-overlay.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 24px;\n  max-width: 700px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease;\n}\n.modal-content[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  cursor: pointer;\n  color: #718096;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.modal-content[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: #FF6B9D;\n  color: #FFFFFF;\n  transform: scale(1.1);\n}\n.modal-content[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  color: #FFFFFF;\n  padding: 2.5rem 2rem 2rem;\n  border-radius: 24px 24px 0 0;\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-avatar[_ngcontent-%COMP%]   .modal-foto[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #FFFFFF;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%]   .modal-avatar[_ngcontent-%COMP%]   .modal-avatar-placeholder[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FFFFFF;\n  font-size: 2rem;\n  font-weight: 700;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\n  border: 3px solid #FFFFFF;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n}\n.modal-header[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-name[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-meta[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  opacity: 0.9;\n  margin-bottom: 1rem;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0.4rem 0.8rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.modal-header[_ngcontent-%COMP%]   .modal-info[_ngcontent-%COMP%]   .modal-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-quote[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #FF6B9D;\n  font-size: 1.3rem;\n  line-height: 1.6;\n  margin-bottom: 2rem;\n  padding-left: 1rem;\n  border-left: 4px solid #FF6B9D;\n  position: relative;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-quote[_ngcontent-%COMP%]   .quote-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -10px;\n  top: -10px;\n  width: 24px;\n  height: 24px;\n  opacity: 0.3;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-story[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-story[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #4A5568;\n  margin-bottom: 1rem;\n  font-size: 1.3rem;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-story[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: #FF6B9D;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-story[_ngcontent-%COMP%]   .story-content[_ngcontent-%COMP%] {\n  color: #4A5568;\n  line-height: 1.7;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-story[_ngcontent-%COMP%]   .story-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-impact[_ngcontent-%COMP%] {\n  background: rgba(52, 211, 153, 0.1);\n  padding: 1.5rem;\n  border-radius: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-impact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #34D399;\n  margin-bottom: 0.5rem;\n  font-size: 1.1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-impact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.modal-body[_ngcontent-%COMP%]   .modal-impact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4A5568;\n  line-height: 1.6;\n  margin: 0;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem 2rem;\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  border-top: 1px solid #E2E8F0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 1rem;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #EC4899);\n  color: #FFFFFF;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid #FF6B9D;\n  color: #FF6B9D;\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid #E2E8F0;\n  color: #4A5568;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .historias-hero[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .historias-hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .testimonios-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cta-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .testimonio-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .historias-cta[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n}\n/*# sourceMappingURL=historias.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Historias, [{
    type: Component,
    args: [{ selector: "app-historias", standalone: true, imports: [CommonModule], template: `<div class="historias-container">\r
  <!-- Hero Section -->\r
  <section class="historias-hero">\r
    <div class="container">\r
      <div class="hero-content">\r
        <h1 class="hero-title">Historias que Inspiran</h1>\r
        <p class="hero-subtitle">\r
          Voces reales de mujeres valientes que han encontrado luz en su camino. \r
          Cada historia es un testimonio de fortaleza y esperanza.\r
        </p>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Testimonios Grid -->\r
  <section class="testimonios-section" aria-labelledby="testimonios-title">\r
    <div class="container">\r
      <div class="section-header">\r
        <h2 id="testimonios-title" class="section-title">Testimonios Reales</h2>\r
        <p class="section-subtitle">Conoce las experiencias de quienes han caminado este proceso con nosotras</p>\r
      </div>\r
\r
      <div class="testimonios-grid">\r
        <article \r
          class="testimonio-card" \r
          *ngFor="let testimonio of testimonios; let i = index"\r
          [style.background]="getCardColor(i)"\r
          [class.featured]="i === 1"\r
          (click)="abrirModal(testimonio)">\r
          \r
          <div class="testimonio-header">\r
            <div class="avatar-container">\r
              <img \r
                [src]="testimonio.foto" \r
                [alt]="'Foto de ' + testimonio.nombre"\r
                class="testimonio-foto"\r
                loading="lazy"\r
                (error)="handleImageError($event, testimonio)"\r
              />\r
            </div>\r
            <div class="testimonio-info">\r
              <h3 class="testimonio-name">{{ testimonio.nombre }}</h3>\r
              <p class="testimonio-meta">{{ testimonio.meta }}</p>\r
            </div>\r
          </div>\r
\r
          <blockquote class="testimonio-text">\r
            "{{ testimonio.textoCorto }}"\r
          </blockquote>\r
\r
          <div class="testimonio-actions">\r
            <button class="btn-leer-mas" aria-label="Leer historia completa de {{ testimonio.nombre }}">\r
              <i data-lucide="book-open" aria-hidden="true"></i>\r
              Leer historia completa\r
            </button>\r
          </div>\r
\r
          <div class="testimonio-decoration">\r
            <i data-lucide="quote" aria-hidden="true"></i>\r
          </div>\r
        </article>\r
      </div>\r
\r
      <!-- CTA Section -->\r
      <div class="historias-cta">\r
        <div class="cta-content">\r
          <h3>\xBFTienes una historia que compartir?</h3>\r
          <p>Tu experiencia puede inspirar a otras mujeres en su camino</p>\r
          <div class="cta-actions">\r
            <a \r
              href="https://docs.google.com/forms/d/e/1FAIpQLSeEXAMPLE/viewform" \r
              target="_blank" \r
              rel="noopener noreferrer"\r
              class="btn btn-primary">\r
              <i data-lucide="edit-3" aria-hidden="true"></i>\r
              Compartir mi historia\r
            </a>\r
            <button class="btn btn-secondary" (click)="verMasTestimonios()">\r
              <i data-lucide="heart" aria-hidden="true"></i>\r
              Ver m\xE1s testimonios\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
</div>\r
\r
<!-- Modal de Historia Completa -->\r
<div class="modal-overlay" [class.active]="modalAbierto" (click)="cerrarModal()">\r
  <div class="modal-content" (click)="$event.stopPropagation()" *ngIf="testimonioSeleccionado">\r
    <button class="modal-close" (click)="cerrarModal()" aria-label="Cerrar modal">\r
      <i data-lucide="x" aria-hidden="true"></i>\r
    </button>\r
\r
    <div class="modal-header">\r
      <div class="modal-avatar">\r
        <img \r
          [src]="testimonioSeleccionado.foto" \r
          [alt]="'Foto de ' + testimonioSeleccionado.nombre"\r
          class="modal-foto"\r
          (error)="handleModalImageError($event)"\r
        />\r
      </div>\r
      <div class="modal-info">\r
        <h2 class="modal-name">{{ testimonioSeleccionado.nombre }}</h2>\r
        <p class="modal-meta">{{ testimonioSeleccionado.meta }}</p>\r
        <div class="modal-tags">\r
          <span class="tag" *ngFor="let tag of testimonioSeleccionado.tags">\r
            <i [attr.data-lucide]="getTagIcon(tag)" aria-hidden="true"></i>\r
            {{ tag }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="modal-body">\r
      <blockquote class="modal-quote">\r
        <i data-lucide="quote" class="quote-icon" aria-hidden="true"></i>\r
        "{{ testimonioSeleccionado.textoCorto }}"\r
      </blockquote>\r
\r
      <div class="modal-story">\r
        <h3>\r
          <i data-lucide="book-open" aria-hidden="true"></i>\r
          Mi Historia Completa\r
        </h3>\r
        <div class="story-content" [innerHTML]="testimonioSeleccionado.historiaCompleta"></div>\r
      </div>\r
\r
      <div class="modal-impact" *ngIf="testimonioSeleccionado.impacto">\r
        <h4>\r
          <i data-lucide="star" aria-hidden="true"></i>\r
          El impacto en mi vida\r
        </h4>\r
        <p>{{ testimonioSeleccionado.impacto }}</p>\r
      </div>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button class="btn btn-outline" (click)="compartirHistoria()">\r
        <i data-lucide="share-2" aria-hidden="true"></i>\r
        Compartir esta historia\r
      </button>\r
      <button class="btn btn-primary" (click)="inspirarme()">\r
        <i data-lucide="sparkles" aria-hidden="true"></i>\r
        Esta historia me inspira\r
      </button>\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/pages/historias/historias.scss */\n.historias-container {\n  font-family:\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  background: #FFF9FB;\n  min-height: 100vh;\n}\n.historias-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  color: #FFFFFF;\n  padding: 4rem 0;\n  text-align: center;\n}\n.historias-hero .hero-content {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.historias-hero .hero-title {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.historias-hero .hero-subtitle {\n  font-size: 1.2rem;\n  opacity: 0.9;\n  line-height: 1.6;\n}\n.testimonios-section {\n  padding: 4rem 0;\n}\n.testimonios-section .section-header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.testimonios-section .section-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #4A5568;\n  margin-bottom: 1rem;\n}\n.testimonios-section .section-subtitle {\n  font-size: 1.1rem;\n  color: #718096;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.testimonios-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto 4rem;\n}\n.testimonio-card {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 2rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);\n  border: 1px solid #E2E8F0;\n}\n.testimonio-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.testimonio-card.featured {\n  border: 2px solid #FF6B9D;\n}\n.testimonio-card .testimonio-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.testimonio-card .avatar-container {\n  margin-right: 1rem;\n}\n.testimonio-card .testimonio-foto {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #FFFFFF;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.testimonio-card .avatar-placeholder {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FFFFFF;\n  font-size: 1.5rem;\n  font-weight: 700;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.testimonio-card .testimonio-info .testimonio-name {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #4A5568;\n  margin-bottom: 0.25rem;\n}\n.testimonio-card .testimonio-info .testimonio-meta {\n  color: #718096;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.testimonio-card .testimonio-text {\n  font-style: italic;\n  color: #4A5568;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n  font-size: 1.1rem;\n  position: relative;\n  padding-left: 1rem;\n  border-left: 3px solid #FF6B9D;\n}\n.testimonio-card .testimonio-actions .btn-leer-mas {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: transparent;\n  border: 2px solid #FF6B9D;\n  color: #FF6B9D;\n  padding: 0.75rem 1.5rem;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.testimonio-card .testimonio-actions .btn-leer-mas i {\n  width: 16px;\n  height: 16px;\n}\n.testimonio-card .testimonio-actions .btn-leer-mas:hover {\n  background: #FF6B9D;\n  color: #FFFFFF;\n  transform: translateY(-2px);\n}\n.testimonio-card .testimonio-decoration {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  opacity: 0.1;\n}\n.testimonio-card .testimonio-decoration i {\n  width: 40px;\n  height: 40px;\n  color: #4A5568;\n}\n.historias-cta {\n  background: #FFFFFF;\n  border-radius: 20px;\n  padding: 3rem;\n  text-align: center;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n  border: 1px solid #E2E8F0;\n}\n.historias-cta .cta-content {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.historias-cta h3 {\n  font-size: 1.8rem;\n  color: #4A5568;\n  margin-bottom: 1rem;\n}\n.historias-cta p {\n  color: #718096;\n  margin-bottom: 2rem;\n  font-size: 1.1rem;\n}\n.historias-cta .cta-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 2rem;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.modal-overlay.active {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-content {\n  background: #FFFFFF;\n  border-radius: 24px;\n  max-width: 700px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);\n  animation: modalSlideIn 0.3s ease;\n}\n.modal-content .modal-close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  cursor: pointer;\n  color: #718096;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.modal-content .modal-close:hover {\n  background: #FF6B9D;\n  color: #FFFFFF;\n  transform: scale(1.1);\n}\n.modal-content .modal-close i {\n  width: 20px;\n  height: 20px;\n}\n.modal-header {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  color: #FFFFFF;\n  padding: 2.5rem 2rem 2rem;\n  border-radius: 24px 24px 0 0;\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.modal-header .modal-avatar .modal-foto {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #FFFFFF;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\n}\n.modal-header .modal-avatar .modal-avatar-placeholder {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FFFFFF;\n  font-size: 2rem;\n  font-weight: 700;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\n  border: 3px solid #FFFFFF;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n}\n.modal-header .modal-info {\n  flex: 1;\n}\n.modal-header .modal-info .modal-name {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.modal-header .modal-info .modal-meta {\n  font-size: 1.1rem;\n  opacity: 0.9;\n  margin-bottom: 1rem;\n}\n.modal-header .modal-info .modal-tags {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.modal-header .modal-info .modal-tags .tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0.4rem 0.8rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.modal-header .modal-info .modal-tags .tag i {\n  width: 12px;\n  height: 12px;\n}\n.modal-body {\n  padding: 2rem;\n}\n.modal-body .modal-quote {\n  font-style: italic;\n  color: #FF6B9D;\n  font-size: 1.3rem;\n  line-height: 1.6;\n  margin-bottom: 2rem;\n  padding-left: 1rem;\n  border-left: 4px solid #FF6B9D;\n  position: relative;\n}\n.modal-body .modal-quote .quote-icon {\n  position: absolute;\n  left: -10px;\n  top: -10px;\n  width: 24px;\n  height: 24px;\n  opacity: 0.3;\n}\n.modal-body .modal-story {\n  margin-bottom: 2rem;\n}\n.modal-body .modal-story h3 {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #4A5568;\n  margin-bottom: 1rem;\n  font-size: 1.3rem;\n}\n.modal-body .modal-story h3 i {\n  width: 20px;\n  height: 20px;\n  color: #FF6B9D;\n}\n.modal-body .modal-story .story-content {\n  color: #4A5568;\n  line-height: 1.7;\n}\n.modal-body .modal-story .story-content p {\n  margin-bottom: 1rem;\n}\n.modal-body .modal-impact {\n  background: rgba(52, 211, 153, 0.1);\n  padding: 1.5rem;\n  border-radius: 12px;\n}\n.modal-body .modal-impact h4 {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #34D399;\n  margin-bottom: 0.5rem;\n  font-size: 1.1rem;\n}\n.modal-body .modal-impact h4 i {\n  width: 18px;\n  height: 18px;\n}\n.modal-body .modal-impact p {\n  color: #4A5568;\n  line-height: 1.6;\n  margin: 0;\n}\n.modal-footer {\n  padding: 1.5rem 2rem 2rem;\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  border-top: 1px solid #E2E8F0;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 1.5rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 1rem;\n}\n.btn i {\n  width: 18px;\n  height: 18px;\n}\n.btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\n}\n.btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #EC4899);\n  color: #FFFFFF;\n}\n.btn.btn-secondary {\n  background: transparent;\n  border: 2px solid #FF6B9D;\n  color: #FF6B9D;\n}\n.btn.btn-outline {\n  background: transparent;\n  border: 2px solid #E2E8F0;\n  color: #4A5568;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .historias-hero {\n    padding: 3rem 0;\n  }\n  .historias-hero .hero-title {\n    font-size: 2.5rem;\n  }\n  .testimonios-grid {\n    grid-template-columns: 1fr;\n  }\n  .modal-header {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n  .modal-footer {\n    flex-direction: column;\n  }\n  .cta-actions {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .modal-overlay {\n    padding: 1rem;\n  }\n  .modal-content {\n    margin: 0;\n  }\n  .testimonio-card {\n    padding: 1.5rem;\n  }\n  .historias-cta {\n    padding: 2rem 1.5rem;\n  }\n}\n/*# sourceMappingURL=historias.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Historias, { className: "Historias", filePath: "src/app/pages/historias/historias.ts", lineNumber: 26 });
})();
export {
  Historias
};
//# sourceMappingURL=chunk-MHJFESU3.js.map
