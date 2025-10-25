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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DEJWN6HZ.js";

// src/app/pages/kits/kits.ts
function Kits_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando kits...");
    \u0275\u0275elementEnd()();
  }
}
function Kits_div_16_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kit_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.getBadgeClass(kit_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getBadgeText(kit_r2), " ");
  }
}
function Kits_div_16_div_1_li_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r4);
  }
}
function Kits_div_16_div_1_li_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const benefit_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.getBenefitIcon(), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", benefit_r5.titulo, " ");
  }
}
function Kits_div_16_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kit_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" $", ctx_r2.formatPrice(kit_r2.precioOriginal), " COP ");
  }
}
function Kits_div_16_div_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const kit_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", kit_r2.descuento, "% ");
  }
}
function Kits_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, Kits_div_16_div_1_div_1_Template, 2, 3, "div", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275element(3, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23)(12, "h4");
    \u0275\u0275text(13, "Contenido del kit:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ul", 24);
    \u0275\u0275template(15, Kits_div_16_div_1_li_15_Template, 2, 1, "li", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 26)(17, "h4");
    \u0275\u0275text(18, "Beneficios emocionales:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul", 27);
    \u0275\u0275template(20, Kits_div_16_div_1_li_20_Template, 3, 2, "li", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 28)(22, "span", 29);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, Kits_div_16_div_1_span_24_Template, 2, 1, "span", 30)(25, Kits_div_16_div_1_span_25_Template, 2, 1, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 32);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 33)(29, "button", 34);
    \u0275\u0275listener("click", function Kits_div_16_div_1_Template_button_click_29_listener() {
      const kit_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.solicitarKit(kit_r2));
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 35);
    \u0275\u0275listener("click", function Kits_div_16_div_1_Template_button_click_31_listener() {
      const kit_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showKitDetails(kit_r2));
    });
    \u0275\u0275text(32, " Ver Detalles ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const kit_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.getBadgeClass(kit_r2) ? "kit-card has-badge" : "kit-card");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getBadgeClass(kit_r2));
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r2.getKitIcon(kit_r2.categoria), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryName(kit_r2.categoria));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kit_r2.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kit_r2.descripcion);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", kit_r2.elementos);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", kit_r2.beneficios);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", ctx_r2.formatPrice(kit_r2.precio), " COP");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", kit_r2.precioOriginal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", kit_r2.descuento);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStockClass(kit_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStockText(kit_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.estaEnStock(kit_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.estaEnStock(kit_r2) ? "Solicitar Kit" : "Agotado", " ");
  }
}
function Kits_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, Kits_div_16_div_1_Template, 33, 17, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredKits);
  }
}
function Kits_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275element(2, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No se encontraron kits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Intenta con otros filtros");
    \u0275\u0275elementEnd()();
  }
}
function Kits_div_19_li_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r7);
  }
}
function Kits_div_19_li_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const benefit_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r8.titulo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(": ", benefit_r8.descripcion, " ");
  }
}
function Kits_div_19_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" $", ctx_r2.formatPrice(ctx_r2.selectedKit.precioOriginal), " COP ");
  }
}
function Kits_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function Kits_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275element(2, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 48);
    \u0275\u0275element(9, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 50);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 51)(13, "h4");
    \u0275\u0275element(14, "i", 52);
    \u0275\u0275text(15, " Contenido del kit: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ul", 53);
    \u0275\u0275template(17, Kits_div_19_li_17_Template, 2, 1, "li", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 51)(19, "h4");
    \u0275\u0275element(20, "i", 54);
    \u0275\u0275text(21, " Beneficios psicol\xF3gicos: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ul", 55);
    \u0275\u0275template(23, Kits_div_19_li_23_Template, 4, 2, "li", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 56)(25, "span", 29);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, Kits_div_19_span_27_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 57);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 58);
    \u0275\u0275listener("click", function Kits_div_19_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.solicitarKit(ctx_r2.selectedKit));
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedKit.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryName(ctx_r2.selectedKit.categoria));
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r2.getKitIcon(ctx_r2.selectedKit.categoria), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedKit.descripcion);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.selectedKit.elementos);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.selectedKit.beneficios);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", ctx_r2.formatPrice(ctx_r2.selectedKit.precio), " COP");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedKit.precioOriginal);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStockClass(ctx_r2.selectedKit));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStockText(ctx_r2.selectedKit), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.estaEnStock(ctx_r2.selectedKit));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.estaEnStock(ctx_r2.selectedKit) ? "Solicitar este Kit" : "Kit Agotado", " ");
  }
}
var Kits = class _Kits {
  kits = [];
  filteredKits = [];
  selectedKit = null;
  activeFilter = "all";
  isLoading = true;
  // Solo 3 kits como solicitado
  sampleKits = [
    {
      id: 1,
      nombre: "Kit Esencial de Recuerdos",
      categoria: "basico",
      precio: 89900,
      precioOriginal: 119900,
      descuento: 25,
      imagen: "assets/images/kit-basico.jpg",
      descripcion: "Perfecto para comenzar a preservar tus momentos m\xE1s especiales de forma organizada y emotiva.",
      elementos: [
        "Caja de memorias con dise\xF1o premium",
        "5 sobres archivadores para fotos",
        "Etiquetas decorativas personalizables",
        "Kit de escritura con pluma especial",
        "Gu\xEDa de preservaci\xF3n de recuerdos",
        "Tarjetas para anotaciones emocionales"
      ],
      beneficios: [
        {
          titulo: "Organizaci\xF3n terap\xE9utica",
          descripcion: "Ayuda a procesar emociones mediante la organizaci\xF3n de recuerdos"
        },
        {
          titulo: "Conexi\xF3n emocional",
          descripcion: "Fomenta la reflexi\xF3n y conexi\xF3n con momentos significativos"
        },
        {
          titulo: "Reducci\xF3n de estr\xE9s",
          descripcion: "Actividad mindfulness que promueve la calma mental"
        }
      ],
      stock: 15,
      popular: true,
      nuevo: true
    },
    {
      id: 2,
      nombre: "Kit Memoria Avanzada",
      categoria: "intermedio",
      precio: 169900,
      imagen: "assets/images/kit-intermedio.jpg",
      descripcion: "Para quienes buscan profundizar en la preservaci\xF3n de sus historias con elementos especializados.",
      elementos: [
        "Archivo expandible de alta calidad",
        "Sobres de conservaci\xF3n acid-free",
        "Kit completo de scrapbooking",
        "Materiales para journaling creativo",
        "Plantillas de documentaci\xF3n",
        "Accesorios de decoraci\xF3n premium",
        "Gu\xEDa avanzada de preservaci\xF3n"
      ],
      beneficios: [
        {
          titulo: "Expresi\xF3n creativa",
          descripcion: "Libera tu creatividad mientras preservas momentos importantes"
        },
        {
          titulo: "Legado familiar",
          descripcion: "Crea un tesoro familiar que perdurar\xE1 por generaciones"
        },
        {
          titulo: "Terapia narrativa",
          descripcion: "Sanaci\xF3n a trav\xE9s de la organizaci\xF3n y narraci\xF3n de tu historia"
        },
        {
          titulo: "Mindfulness profundo",
          descripcion: "Inmersi\xF3n total en el momento presente mediante recuerdos"
        }
      ],
      stock: 8,
      popular: true,
      nuevo: false
    },
    {
      id: 3,
      nombre: "Kit Legado Eterno",
      categoria: "premium",
      precio: 299900,
      imagen: "assets/images/kit-premium.jpg",
      descripcion: "La experiencia definitiva para crear un legado familiar que trascienda el tiempo.",
      elementos: [
        "Caja de conservaci\xF3n museum-grade",
        "Sistema completo de archivo profesional",
        "Materiales de preservaci\xF3n de m\xE1xima calidad",
        "Kit de digitalizaci\xF3n incluido",
        "Asesor\xEDa personalizada de organizaci\xF3n",
        "Elementos heirloom de lujo",
        "Certificado de autenticidad",
        "Acceso a comunidad exclusiva"
      ],
      beneficios: [
        {
          titulo: "Preservaci\xF3n eterna",
          descripcion: "Tus recuerdos se conservar\xE1n en perfecto estado por d\xE9cadas"
        },
        {
          titulo: "Herencia emocional",
          descripcion: "Crea un patrimonio familiar cargado de significado y amor"
        },
        {
          titulo: "Sanaci\xF3n generacional",
          descripcion: "Proceso terap\xE9utico que beneficia a toda la familia"
        },
        {
          titulo: "Legado tangible",
          descripcion: "Transforma memorias en un tesoro f\xEDsico perdurable"
        }
      ],
      stock: 5,
      popular: false,
      nuevo: true
    }
  ];
  ngOnInit() {
    this.loadKits();
  }
  ngAfterViewInit() {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
  loadKits() {
    this.isLoading = true;
    setTimeout(() => {
      this.kits = this.sampleKits;
      this.filteredKits = this.kits;
      this.isLoading = false;
      setTimeout(() => {
        if (typeof lucide !== "undefined") {
          lucide.createIcons();
        }
      }, 100);
    }, 1500);
  }
  filterKits(category) {
    this.activeFilter = category;
    if (category === "all") {
      this.filteredKits = this.kits;
    } else {
      this.filteredKits = this.kits.filter((kit) => kit.categoria === category);
    }
  }
  showKitDetails(kit) {
    this.selectedKit = kit;
    setTimeout(() => {
      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    }, 100);
  }
  closeModal() {
    this.selectedKit = null;
  }
  solicitarKit(kit) {
    console.log("Solicitando kit:", kit);
    alert(`\xA1Perfecto! Has solicitado el "${kit.nombre}". Nos pondremos en contacto contigo pronto.`);
  }
  // Métodos auxiliares
  tieneDescuento(kit) {
    return !!kit.descuento && kit.descuento > 0;
  }
  estaEnStock(kit) {
    return kit.stock > 0;
  }
  getBadgeClass(kit) {
    if (kit.nuevo)
      return "badge-new";
    if (kit.popular)
      return "badge-popular";
    if (kit.descuento)
      return "badge-discount";
    return "";
  }
  getBadgeText(kit) {
    if (kit.nuevo)
      return "Nuevo";
    if (kit.popular)
      return "Popular";
    if (kit.descuento)
      return `-${kit.descuento}%`;
    return "";
  }
  getStockClass(kit) {
    if (kit.stock === 0)
      return "out-of-stock";
    if (kit.stock < 5)
      return "low-stock";
    return "in-stock";
  }
  getStockText(kit) {
    if (kit.stock === 0)
      return "Agotado temporalmente";
    if (kit.stock < 5)
      return `\xDAltimas ${kit.stock} unidades`;
    return `Disponible (${kit.stock} en stock)`;
  }
  getKitIcon(category) {
    switch (category) {
      case "basico":
        return '<i data-lucide="archive"></i>';
      case "intermedio":
        return '<i data-lucide="layers"></i>';
      case "premium":
        return '<i data-lucide="crown"></i>';
      default:
        return '<i data-lucide="package"></i>';
    }
  }
  getBenefitIcon() {
    return '<i data-lucide="heart"></i>';
  }
  getCategoryName(category) {
    switch (category) {
      case "basico":
        return "Kit B\xE1sico";
      case "intermedio":
        return "Kit Intermedio";
      case "premium":
        return "Kit Premium";
      default:
        return category;
    }
  }
  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  static \u0275fac = function Kits_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Kits)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Kits, selectors: [["app-kits"]], decls: 20, vars: 14, consts: [[1, "kits-container"], [1, "kits-header"], [1, "kits-title"], [1, "kits-subtitle"], [1, "kits-filters"], [1, "filter-btn", 3, "click"], ["class", "loading-state", 4, "ngIf"], ["class", "kits-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "kit-modal"], ["class", "modal-content", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "kits-grid"], ["class", "kit-card", 3, "class", 4, "ngFor", "ngForOf"], [1, "kit-card"], ["class", "kit-badge", 3, "class", 4, "ngIf"], [1, "kit-image"], [1, "kit-icon", 3, "innerHTML"], [1, "kit-content"], [1, "kit-category"], [1, "kit-name"], [1, "kit-description"], [1, "kit-elements"], [1, "kit-features"], [4, "ngFor", "ngForOf"], [1, "kit-benefits"], [1, "benefits-list"], [1, "kit-price"], [1, "current-price"], ["class", "original-price", 4, "ngIf"], ["class", "discount", 4, "ngIf"], [1, "kit-stock"], [1, "kit-actions"], [1, "btn-primary", 3, "click", "disabled"], [1, "btn-secondary", 3, "click"], [1, "kit-badge"], [1, "benefit-icon", 3, "innerHTML"], [1, "original-price"], [1, "discount"], [1, "empty-state"], [1, "empty-icon"], ["data-lucide", "package"], [1, "modal-content"], [1, "modal-close", 3, "click"], ["data-lucide", "x"], [1, "modal-body"], [1, "modal-category"], [1, "modal-image"], [1, "modal-icon", 3, "innerHTML"], [1, "modal-description"], [1, "modal-section"], ["data-lucide", "package", 1, "section-icon"], [1, "modal-features"], ["data-lucide", "heart", 1, "section-icon"], [1, "modal-benefits"], [1, "modal-price"], [1, "modal-stock"], [1, "btn-primary", "modal-add-btn", 3, "click", "disabled"]], template: function Kits_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Memorias que permanecen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Cada kit est\xE1 dise\xF1ado para conservar tus recuerdos m\xE1s preciados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
      \u0275\u0275listener("click", function Kits_Template_button_click_7_listener() {
        return ctx.filterKits("all");
      });
      \u0275\u0275text(8, " Todos ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 5);
      \u0275\u0275listener("click", function Kits_Template_button_click_9_listener() {
        return ctx.filterKits("basico");
      });
      \u0275\u0275text(10, " Kit B\xE1sico ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function Kits_Template_button_click_11_listener() {
        return ctx.filterKits("intermedio");
      });
      \u0275\u0275text(12, " Kit Intermedio ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 5);
      \u0275\u0275listener("click", function Kits_Template_button_click_13_listener() {
        return ctx.filterKits("premium");
      });
      \u0275\u0275text(14, " Kit Premium ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, Kits_div_15_Template, 4, 0, "div", 6)(16, Kits_div_16_Template, 2, 1, "div", 7)(17, Kits_div_17_Template, 7, 0, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 9);
      \u0275\u0275template(19, Kits_div_19_Template, 32, 13, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.activeFilter === "all");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeFilter === "basico");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeFilter === "intermedio");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeFilter === "premium");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredKits.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredKits.length === 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", !ctx.selectedKit);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedKit);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.kits-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  background: #FFF9FB;\n  min-height: 80vh;\n}\n.kits-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.kits-header[_ngcontent-%COMP%]   .kits-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #4A5568;\n  margin-bottom: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.kits-header[_ngcontent-%COMP%]   .kits-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #718096;\n  margin-bottom: 2rem;\n  font-style: italic;\n  line-height: 1.6;\n}\n.kits-filters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.kits-filters[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: 2px solid #FF6B9D;\n  background: transparent;\n  color: #FF6B9D;\n  border-radius: 25px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.kits-filters[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]:hover {\n  background: #FF6B9D;\n  color: #FFFFFF;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);\n}\n.kits-filters[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%] {\n  background: #FF6B9D;\n  color: #FFFFFF;\n  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);\n}\n.kits-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n.kit-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  position: relative;\n  border: 1px solid #E2E8F0;\n}\n.kit-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.kit-card[_ngcontent-%COMP%]   .kit-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  z-index: 2;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.kit-card[_ngcontent-%COMP%]   .kit-badge.badge-new[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #34D399,\n      #10B981);\n  color: #FFFFFF;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-badge.badge-popular[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #EC4899);\n  color: #FFFFFF;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-badge.badge-discount[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #A78BFA,\n      #8B5CF6);\n  color: #FFFFFF;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-image[_ngcontent-%COMP%]   .kit-icon[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-image[_ngcontent-%COMP%]   .kit-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  stroke: currentColor;\n  stroke-width: 1.5;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-category[_ngcontent-%COMP%] {\n  color: #A78BFA;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-name[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #4A5568;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-description[_ngcontent-%COMP%] {\n  color: #718096;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  margin-bottom: 1.5rem;\n  font-style: italic;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-elements[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-elements[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #4A5568;\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 1.5rem;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.4rem 0;\n  color: #4A5568;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  color: #34D399;\n  font-weight: bold;\n  margin-right: 0.5rem;\n  font-size: 1.1rem;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-benefits[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-benefits[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #4A5568;\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  color: #4A5568;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .benefit-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .benefit-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  stroke: #FF6B9D;\n  stroke-width: 2;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-price[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #4A5568;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-price[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #718096;\n  text-decoration: line-through;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-price[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%] {\n  background: #A78BFA;\n  color: #FFFFFF;\n  padding: 0.3rem 0.8rem;\n  border-radius: 15px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-stock[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1rem 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding: 0.5rem;\n  border-radius: 8px;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-stock.in-stock[_ngcontent-%COMP%] {\n  background: rgba(52, 211, 153, 0.1);\n  color: #34D399;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-stock.low-stock[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-stock.out-of-stock[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  flex: 2;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #EC4899);\n  color: #FFFFFF;\n  border: none;\n  padding: 1rem 1.5rem;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(255, 107, 157, 0.4);\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #718096;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: 2px solid #FF6B9D;\n  color: #FF6B9D;\n  padding: 1rem;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.kit-card[_ngcontent-%COMP%]   .kit-content[_ngcontent-%COMP%]   .kit-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #FF6B9D;\n  color: #FFFFFF;\n  transform: translateY(-2px);\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border: 4px solid rgba(255, 107, 157, 0.2);\n  border-top: 4px solid #FF6B9D;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1.5rem;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #718096;\n  font-size: 1.1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  color: #718096;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  stroke: currentColor;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #4A5568;\n  margin-bottom: 1rem;\n  font-size: 1.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #718096;\n  font-size: 1.1rem;\n}\n.kit-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  opacity: 1;\n  visibility: visible;\n  transition: all 0.3s ease;\n}\n.kit-modal.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n.kit-modal.hidden[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  transform: translateY(30px);\n  opacity: 0;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 20px;\n  max-width: 500px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.3s ease;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  cursor: pointer;\n  color: #718096;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: #FF6B9D;\n  color: #FFFFFF;\n  transform: scale(1.1);\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  stroke: currentColor;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #4A5568;\n  margin-bottom: 0.5rem;\n  font-size: 1.8rem;\n  padding-right: 3rem;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-category[_ngcontent-%COMP%] {\n  color: #A78BFA;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  font-size: 0.9rem;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-image[_ngcontent-%COMP%]   .modal-icon[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-image[_ngcontent-%COMP%]   .modal-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  stroke: currentColor;\n  stroke-width: 1.5;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-description[_ngcontent-%COMP%] {\n  color: #718096;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n  font-size: 1rem;\n  font-style: italic;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #4A5568;\n  margin-bottom: 1rem;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  stroke: currentColor;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  color: #4A5568;\n  display: flex;\n  align-items: center;\n  font-size: 0.95rem;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  color: #34D399;\n  font-weight: bold;\n  margin-right: 0.5rem;\n  font-size: 1.1rem;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-benefits[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.75rem 0;\n  color: #4A5568;\n  border-bottom: 1px solid #E2E8F0;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #FF6B9D;\n  display: block;\n  margin-bottom: 0.25rem;\n  font-size: 0.95rem;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-price[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #4A5568;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-price[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #718096;\n  text-decoration: line-through;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-stock[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1.5rem 0;\n  font-weight: 600;\n  padding: 0.75rem;\n  border-radius: 10px;\n  font-size: 0.95rem;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-stock.in-stock[_ngcontent-%COMP%] {\n  background: rgba(52, 211, 153, 0.1);\n  color: #34D399;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-stock.low-stock[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-stock.out-of-stock[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-add-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1.2rem;\n  font-size: 1.1rem;\n  margin-top: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #EC4899);\n  color: #FFFFFF;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-add-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(255, 107, 157, 0.4);\n}\n.kit-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-add-btn[_ngcontent-%COMP%]:disabled {\n  background: #718096;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n@media (max-width: 768px) {\n  .kits-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .kits-header[_ngcontent-%COMP%]   .kits-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .kits-header[_ngcontent-%COMP%]   .kits-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .kits-filters[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .kits-filters[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n    padding: 0.6rem 1.2rem;\n    font-size: 0.85rem;\n  }\n  .kits-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .kit-content[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .kit-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .kit-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n   .kit-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    flex: none;\n    width: 100%;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n  }\n  .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    padding-right: 2rem;\n  }\n}\n@media (max-width: 480px) {\n  .kits-header[_ngcontent-%COMP%]   .kits-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .kit-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .kit-image[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n  .kit-image[_ngcontent-%COMP%]   .kit-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .modal-body[_ngcontent-%COMP%]   .modal-image[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n  .modal-body[_ngcontent-%COMP%]   .modal-image[_ngcontent-%COMP%]   .modal-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .kits-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .kits-filters[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 0 20px 20px 0;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #FF6B9D;\n  border-radius: 3px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgb(255, 56, 123.2297297297);\n}\n/*# sourceMappingURL=kits.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Kits, [{
    type: Component,
    args: [{ selector: "app-kits", standalone: true, imports: [CommonModule], template: `<div class="kits-container">\r
  <!-- Header Section -->\r
  <div class="kits-header">\r
    <h1 class="kits-title">Memorias que permanecen</h1>\r
    <p class="kits-subtitle">Cada kit est\xE1 dise\xF1ado para conservar tus recuerdos m\xE1s preciados</p>\r
    \r
    <!-- Filtros -->\r
    <div class="kits-filters">\r
      <button \r
        class="filter-btn" \r
        [class.active]="activeFilter === 'all'"\r
        (click)="filterKits('all')">\r
        Todos\r
      </button>\r
      <button \r
        class="filter-btn" \r
        [class.active]="activeFilter === 'basico'"\r
        (click)="filterKits('basico')">\r
        Kit B\xE1sico\r
      </button>\r
      <button \r
        class="filter-btn" \r
        [class.active]="activeFilter === 'intermedio'"\r
        (click)="filterKits('intermedio')">\r
        Kit Intermedio\r
      </button>\r
      <button \r
        class="filter-btn" \r
        [class.active]="activeFilter === 'premium'"\r
        (click)="filterKits('premium')">\r
        Kit Premium\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div class="loading-state" *ngIf="isLoading">\r
    <div class="spinner"></div>\r
    <p>Cargando kits...</p>\r
  </div>\r
\r
  <!-- Kits Grid -->\r
  <div class="kits-grid" *ngIf="!isLoading && filteredKits.length > 0">\r
    <div \r
      class="kit-card" \r
      *ngFor="let kit of filteredKits"\r
      [class]="getBadgeClass(kit) ? 'kit-card has-badge' : 'kit-card'">\r
      \r
      <!-- Badge -->\r
      <div class="kit-badge" *ngIf="getBadgeClass(kit)" [class]="getBadgeClass(kit)">\r
        {{ getBadgeText(kit) }}\r
      </div>\r
\r
      <!-- Imagen -->\r
      <div class="kit-image">\r
        <div class="kit-icon" [innerHTML]="getKitIcon(kit.categoria)"></div>\r
      </div>\r
\r
      <!-- Contenido -->\r
      <div class="kit-content">\r
        <div class="kit-category">{{ getCategoryName(kit.categoria) }}</div>\r
        <h3 class="kit-name">{{ kit.nombre }}</h3>\r
        <p class="kit-description">{{ kit.descripcion }}</p>\r
\r
        <!-- Elementos incluidos -->\r
        <div class="kit-elements">\r
          <h4>Contenido del kit:</h4>\r
          <ul class="kit-features">\r
            <li *ngFor="let element of kit.elementos">{{ element }}</li>\r
          </ul>\r
        </div>\r
\r
        <!-- Beneficios psicol\xF3gicos -->\r
        <div class="kit-benefits">\r
          <h4>Beneficios emocionales:</h4>\r
          <ul class="benefits-list">\r
            <li *ngFor="let benefit of kit.beneficios">\r
              <span class="benefit-icon" [innerHTML]="getBenefitIcon()"></span>\r
              {{ benefit.titulo }}\r
            </li>\r
          </ul>\r
        </div>\r
\r
        <!-- Precio -->\r
        <div class="kit-price">\r
          <span class="current-price">\${{ formatPrice(kit.precio) }} COP</span>\r
          <span class="original-price" *ngIf="kit.precioOriginal">\r
            \${{ formatPrice(kit.precioOriginal) }} COP\r
          </span>\r
          <span class="discount" *ngIf="kit.descuento">\r
            -{{ kit.descuento }}%\r
          </span>\r
        </div>\r
\r
        <!-- Stock -->\r
        <div class="kit-stock" [class]="getStockClass(kit)">\r
          {{ getStockText(kit) }}\r
        </div>\r
\r
        <!-- Acciones -->\r
        <div class="kit-actions">\r
          <button \r
            class="btn-primary" \r
            (click)="solicitarKit(kit)"\r
            [disabled]="!estaEnStock(kit)">\r
            {{ estaEnStock(kit) ? 'Solicitar Kit' : 'Agotado' }}\r
          </button>\r
          <button class="btn-secondary" (click)="showKitDetails(kit)">\r
            Ver Detalles\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div class="empty-state" *ngIf="!isLoading && filteredKits.length === 0">\r
    <div class="empty-icon">\r
      <i data-lucide="package"></i>\r
    </div>\r
    <h3>No se encontraron kits</h3>\r
    <p>Intenta con otros filtros</p>\r
  </div>\r
</div>\r
\r
<!-- Modal de Detalles del Kit -->\r
<div class="kit-modal" [class.hidden]="!selectedKit">\r
  <div class="modal-content" *ngIf="selectedKit">\r
    <button class="modal-close" (click)="closeModal()">\r
      <i data-lucide="x"></i>\r
    </button>\r
    <div class="modal-body">\r
      <h2>{{ selectedKit.nombre }}</h2>\r
      <p class="modal-category">{{ getCategoryName(selectedKit.categoria) }}</p>\r
      \r
      <div class="modal-image">\r
        <div class="modal-icon" [innerHTML]="getKitIcon(selectedKit.categoria)"></div>\r
      </div>\r
\r
      <p class="modal-description">{{ selectedKit.descripcion }}</p>\r
\r
      <div class="modal-section">\r
        <h4>\r
          <i data-lucide="package" class="section-icon"></i>\r
          Contenido del kit:\r
        </h4>\r
        <ul class="modal-features">\r
          <li *ngFor="let element of selectedKit.elementos">{{ element }}</li>\r
        </ul>\r
      </div>\r
\r
      <div class="modal-section">\r
        <h4>\r
          <i data-lucide="heart" class="section-icon"></i>\r
          Beneficios psicol\xF3gicos:\r
        </h4>\r
        <ul class="modal-benefits">\r
          <li *ngFor="let benefit of selectedKit.beneficios">\r
            <strong>{{ benefit.titulo }}</strong>: {{ benefit.descripcion }}\r
          </li>\r
        </ul>\r
      </div>\r
\r
      <div class="modal-price">\r
        <span class="current-price">\${{ formatPrice(selectedKit.precio) }} COP</span>\r
        <span class="original-price" *ngIf="selectedKit.precioOriginal">\r
          \${{ formatPrice(selectedKit.precioOriginal) }} COP\r
        </span>\r
      </div>\r
\r
      <div class="modal-stock" [class]="getStockClass(selectedKit)">\r
        {{ getStockText(selectedKit) }}\r
      </div>\r
\r
      <button \r
        class="btn-primary modal-add-btn"\r
        (click)="solicitarKit(selectedKit)"\r
        [disabled]="!estaEnStock(selectedKit)">\r
        {{ estaEnStock(selectedKit) ? 'Solicitar este Kit' : 'Kit Agotado' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/kits/kits.scss */\n.kits-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    sans-serif;\n  background: #FFF9FB;\n  min-height: 80vh;\n}\n.kits-header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.kits-header .kits-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #4A5568;\n  margin-bottom: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.kits-header .kits-subtitle {\n  font-size: 1.1rem;\n  color: #718096;\n  margin-bottom: 2rem;\n  font-style: italic;\n  line-height: 1.6;\n}\n.kits-filters {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.kits-filters .filter-btn {\n  padding: 0.75rem 1.5rem;\n  border: 2px solid #FF6B9D;\n  background: transparent;\n  color: #FF6B9D;\n  border-radius: 25px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.kits-filters .filter-btn:hover {\n  background: #FF6B9D;\n  color: #FFFFFF;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);\n}\n.kits-filters .filter-btn.active {\n  background: #FF6B9D;\n  color: #FFFFFF;\n  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);\n}\n.kits-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n.kit-card {\n  background: #FFFFFF;\n  border-radius: 20px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  position: relative;\n  border: 1px solid #E2E8F0;\n}\n.kit-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.kit-card .kit-badge {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  z-index: 2;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n.kit-card .kit-badge.badge-new {\n  background:\n    linear-gradient(\n      135deg,\n      #34D399,\n      #10B981);\n  color: #FFFFFF;\n}\n.kit-card .kit-badge.badge-popular {\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #EC4899);\n  color: #FFFFFF;\n}\n.kit-card .kit-badge.badge-discount {\n  background:\n    linear-gradient(\n      135deg,\n      #A78BFA,\n      #8B5CF6);\n  color: #FFFFFF;\n}\n.kit-card .kit-image {\n  width: 100%;\n  height: 200px;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kit-card .kit-image .kit-icon {\n  color: #FFFFFF;\n}\n.kit-card .kit-image .kit-icon i {\n  width: 80px;\n  height: 80px;\n  stroke: currentColor;\n  stroke-width: 1.5;\n}\n.kit-card .kit-content {\n  padding: 1.5rem;\n}\n.kit-card .kit-content .kit-category {\n  color: #A78BFA;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n.kit-card .kit-content .kit-name {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #4A5568;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.kit-card .kit-content .kit-description {\n  color: #718096;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  margin-bottom: 1.5rem;\n  font-style: italic;\n}\n.kit-card .kit-content .kit-elements {\n  margin-bottom: 1.5rem;\n}\n.kit-card .kit-content .kit-elements h4 {\n  color: #4A5568;\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n}\n.kit-card .kit-content .kit-features {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 1.5rem;\n}\n.kit-card .kit-content .kit-features li {\n  padding: 0.4rem 0;\n  color: #4A5568;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n}\n.kit-card .kit-content .kit-features li::before {\n  content: "\\2713";\n  color: #34D399;\n  font-weight: bold;\n  margin-right: 0.5rem;\n  font-size: 1.1rem;\n}\n.kit-card .kit-content .kit-benefits {\n  margin-bottom: 1.5rem;\n}\n.kit-card .kit-content .kit-benefits h4 {\n  color: #4A5568;\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n}\n.kit-card .kit-content .benefits-list {\n  list-style: none;\n  padding: 0;\n}\n.kit-card .kit-content .benefits-list li {\n  padding: 0.5rem 0;\n  color: #4A5568;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n.kit-card .kit-content .benefits-list li .benefit-icon {\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n}\n.kit-card .kit-content .benefits-list li .benefit-icon i {\n  width: 16px;\n  height: 16px;\n  stroke: #FF6B9D;\n  stroke-width: 2;\n}\n.kit-card .kit-content .kit-price {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.kit-card .kit-content .kit-price .current-price {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #4A5568;\n}\n.kit-card .kit-content .kit-price .original-price {\n  font-size: 1.1rem;\n  color: #718096;\n  text-decoration: line-through;\n}\n.kit-card .kit-content .kit-price .discount {\n  background: #A78BFA;\n  color: #FFFFFF;\n  padding: 0.3rem 0.8rem;\n  border-radius: 15px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.kit-card .kit-content .kit-stock {\n  text-align: center;\n  margin: 1rem 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding: 0.5rem;\n  border-radius: 8px;\n}\n.kit-card .kit-content .kit-stock.in-stock {\n  background: rgba(52, 211, 153, 0.1);\n  color: #34D399;\n}\n.kit-card .kit-content .kit-stock.low-stock {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.kit-card .kit-content .kit-stock.out-of-stock {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.kit-card .kit-content .kit-actions {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.kit-card .kit-content .kit-actions .btn-primary {\n  flex: 2;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #EC4899);\n  color: #FFFFFF;\n  border: none;\n  padding: 1rem 1.5rem;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);\n}\n.kit-card .kit-content .kit-actions .btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(255, 107, 157, 0.4);\n}\n.kit-card .kit-content .kit-actions .btn-primary:disabled {\n  background: #718096;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.kit-card .kit-content .kit-actions .btn-secondary {\n  flex: 1;\n  background: transparent;\n  border: 2px solid #FF6B9D;\n  color: #FF6B9D;\n  padding: 1rem;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.kit-card .kit-content .kit-actions .btn-secondary:hover {\n  background: #FF6B9D;\n  color: #FFFFFF;\n  transform: translateY(-2px);\n}\n.loading-state {\n  text-align: center;\n  padding: 4rem;\n}\n.loading-state .spinner {\n  width: 60px;\n  height: 60px;\n  border: 4px solid rgba(255, 107, 157, 0.2);\n  border-top: 4px solid #FF6B9D;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1.5rem;\n}\n.loading-state p {\n  color: #718096;\n  font-size: 1.1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.empty-state .empty-icon {\n  color: #718096;\n  margin-bottom: 1rem;\n}\n.empty-state .empty-icon i {\n  width: 64px;\n  height: 64px;\n  stroke: currentColor;\n}\n.empty-state h3 {\n  color: #4A5568;\n  margin-bottom: 1rem;\n  font-size: 1.5rem;\n}\n.empty-state p {\n  color: #718096;\n  font-size: 1.1rem;\n}\n.kit-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  opacity: 1;\n  visibility: visible;\n  transition: all 0.3s ease;\n}\n.kit-modal.hidden {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n.kit-modal.hidden .modal-content {\n  transform: translateY(30px);\n  opacity: 0;\n}\n.kit-modal .modal-content {\n  background: #FFFFFF;\n  border-radius: 20px;\n  max-width: 500px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.3s ease;\n}\n.kit-modal .modal-content .modal-close {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  cursor: pointer;\n  color: #718096;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.kit-modal .modal-content .modal-close:hover {\n  background: #FF6B9D;\n  color: #FFFFFF;\n  transform: scale(1.1);\n}\n.kit-modal .modal-content .modal-close i {\n  width: 20px;\n  height: 20px;\n  stroke: currentColor;\n}\n.kit-modal .modal-content .modal-body {\n  padding: 2rem;\n}\n.kit-modal .modal-content .modal-body h2 {\n  color: #4A5568;\n  margin-bottom: 0.5rem;\n  font-size: 1.8rem;\n  padding-right: 3rem;\n}\n.kit-modal .modal-content .modal-body .modal-category {\n  color: #A78BFA;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  font-size: 0.9rem;\n}\n.kit-modal .modal-content .modal-body .modal-image {\n  width: 100%;\n  height: 200px;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #A78BFA);\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n}\n.kit-modal .modal-content .modal-body .modal-image .modal-icon {\n  color: #FFFFFF;\n}\n.kit-modal .modal-content .modal-body .modal-image .modal-icon i {\n  width: 80px;\n  height: 80px;\n  stroke: currentColor;\n  stroke-width: 1.5;\n}\n.kit-modal .modal-content .modal-body .modal-description {\n  color: #718096;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n  font-size: 1rem;\n  font-style: italic;\n}\n.kit-modal .modal-content .modal-body .modal-section {\n  margin-bottom: 2rem;\n}\n.kit-modal .modal-content .modal-body .modal-section h4 {\n  color: #4A5568;\n  margin-bottom: 1rem;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.kit-modal .modal-content .modal-body .modal-section h4 i {\n  width: 20px;\n  height: 20px;\n  stroke: currentColor;\n}\n.kit-modal .modal-content .modal-body .modal-features {\n  list-style: none;\n  padding: 0;\n}\n.kit-modal .modal-content .modal-body .modal-features li {\n  padding: 0.5rem 0;\n  color: #4A5568;\n  display: flex;\n  align-items: center;\n  font-size: 0.95rem;\n}\n.kit-modal .modal-content .modal-body .modal-features li::before {\n  content: "\\2713";\n  color: #34D399;\n  font-weight: bold;\n  margin-right: 0.5rem;\n  font-size: 1.1rem;\n}\n.kit-modal .modal-content .modal-body .modal-benefits {\n  list-style: none;\n  padding: 0;\n}\n.kit-modal .modal-content .modal-body .modal-benefits li {\n  padding: 0.75rem 0;\n  color: #4A5568;\n  border-bottom: 1px solid #E2E8F0;\n}\n.kit-modal .modal-content .modal-body .modal-benefits li:last-child {\n  border-bottom: none;\n}\n.kit-modal .modal-content .modal-body .modal-benefits li strong {\n  color: #FF6B9D;\n  display: block;\n  margin-bottom: 0.25rem;\n  font-size: 0.95rem;\n}\n.kit-modal .modal-content .modal-body .modal-price {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.kit-modal .modal-content .modal-body .modal-price .current-price {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #4A5568;\n}\n.kit-modal .modal-content .modal-body .modal-price .original-price {\n  font-size: 1.3rem;\n  color: #718096;\n  text-decoration: line-through;\n}\n.kit-modal .modal-content .modal-body .modal-stock {\n  text-align: center;\n  margin: 1.5rem 0;\n  font-weight: 600;\n  padding: 0.75rem;\n  border-radius: 10px;\n  font-size: 0.95rem;\n}\n.kit-modal .modal-content .modal-body .modal-stock.in-stock {\n  background: rgba(52, 211, 153, 0.1);\n  color: #34D399;\n}\n.kit-modal .modal-content .modal-body .modal-stock.low-stock {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.kit-modal .modal-content .modal-body .modal-stock.out-of-stock {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.kit-modal .modal-content .modal-body .modal-add-btn {\n  width: 100%;\n  padding: 1.2rem;\n  font-size: 1.1rem;\n  margin-top: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #FF6B9D,\n      #EC4899);\n  color: #FFFFFF;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);\n}\n.kit-modal .modal-content .modal-body .modal-add-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(255, 107, 157, 0.4);\n}\n.kit-modal .modal-content .modal-body .modal-add-btn:disabled {\n  background: #718096;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n@media (max-width: 768px) {\n  .kits-container {\n    padding: 1rem;\n  }\n  .kits-header .kits-title {\n    font-size: 2rem;\n  }\n  .kits-header .kits-subtitle {\n    font-size: 1rem;\n  }\n  .kits-filters {\n    gap: 0.5rem;\n  }\n  .kits-filters .filter-btn {\n    padding: 0.6rem 1.2rem;\n    font-size: 0.85rem;\n  }\n  .kits-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .kit-content {\n    padding: 1.25rem;\n  }\n  .kit-actions {\n    flex-direction: column;\n  }\n  .kit-actions .btn-primary,\n  .kit-actions .btn-secondary {\n    flex: none;\n    width: 100%;\n  }\n  .modal-content {\n    margin: 0.5rem;\n  }\n  .modal-content .modal-body {\n    padding: 1.5rem;\n  }\n  .modal-content .modal-body h2 {\n    font-size: 1.5rem;\n    padding-right: 2rem;\n  }\n}\n@media (max-width: 480px) {\n  .kits-header .kits-title {\n    font-size: 1.75rem;\n  }\n  .kit-content {\n    padding: 1rem;\n  }\n  .kit-image {\n    height: 160px;\n  }\n  .kit-image .kit-icon i {\n    width: 60px;\n    height: 60px;\n  }\n  .modal-body {\n    padding: 1.25rem;\n  }\n  .modal-body .modal-image {\n    height: 160px;\n  }\n  .modal-body .modal-image .modal-icon i {\n    width: 60px;\n    height: 60px;\n  }\n  .modal-body h2 {\n    font-size: 1.4rem;\n  }\n  .kits-filters {\n    flex-direction: column;\n    align-items: center;\n  }\n  .kits-filters .filter-btn {\n    width: 200px;\n  }\n}\n.hidden {\n  display: none !important;\n}\n.modal-content::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-content::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 0 20px 20px 0;\n}\n.modal-content::-webkit-scrollbar-thumb {\n  background: #FF6B9D;\n  border-radius: 3px;\n}\n.modal-content::-webkit-scrollbar-thumb:hover {\n  background: rgb(255, 56, 123.2297297297);\n}\n/*# sourceMappingURL=kits.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Kits, { className: "Kits", filePath: "src/app/pages/kits/kits.ts", lineNumber: 34 });
})();
export {
  Kits
};
//# sourceMappingURL=chunk-WLS2UO4W.js.map
