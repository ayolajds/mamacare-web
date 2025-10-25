import {
  CommonModule,
  NgForOf
} from "./chunk-Q4BX36PF.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-DEJWN6HZ.js";

// src/app/pages/recursos/recursos.ts
var _c0 = () => [1, 2, 3];
function Recursos_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 58);
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275styleMap(p_r1);
  }
}
function Recursos_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 58);
  }
}
function Recursos_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 58);
  }
}
function Recursos_div_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 58);
  }
}
function Recursos_div_173_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 58);
  }
}
var Recursos = class _Recursos {
  particles = [];
  ngOnInit() {
    this.generateParticles();
    this.initializeAnimations();
  }
  generateParticles() {
    this.particles = Array.from({ length: 15 }, (_, i) => ({
      "left.%": Math.random() * 100,
      "top.%": Math.random() * 100,
      "width.px": 4 + Math.random() * 8,
      "height.px": 4 + Math.random() * 8,
      "animation-delay.ms": Math.random() * 3e3,
      "opacity": 0.3 + Math.random() * 0.4
    }));
  }
  initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, { threshold: 0.1 });
    const cards = document.querySelectorAll(".resource-card");
    cards.forEach((card) => observer.observe(card));
  }
  descargarGuias() {
    console.log("Descargar gu\xEDas clicked");
  }
  escucharAhora() {
    console.log("Escuchar ahora clicked");
  }
  verVideos() {
    console.log("Ver videos clicked");
  }
  explorarHerramientas() {
    console.log("Explorar herramientas clicked");
  }
  agendarSesion() {
    console.log("Agendar sesi\xF3n clicked");
  }
  unirseGrupo() {
    console.log("Unirse a grupo clicked");
  }
  static \u0275fac = function Recursos_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Recursos)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Recursos, selectors: [["app-recursos"]], decls: 218, vars: 17, consts: [[1, "recursos"], [1, "resources-hero"], [1, "hero-background"], [1, "hero-particles"], ["class", "particle", 3, "style", 4, "ngFor", "ngForOf"], [1, "hero-content"], [1, "hero-title"], [1, "hero-subtitle"], [1, "hero-stats"], [1, "hero-stat"], [1, "stat-number"], [1, "stat-label"], [1, "hero-wave"], ["viewBox", "0 0 1200 120", "preserveAspectRatio", "none"], ["d", "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z", "opacity", ".25"], ["d", "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z", "opacity", ".5"], ["d", "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"], [1, "resources-main"], [1, "container"], [1, "resources-grid"], [1, "resource-card"], [1, "card-glow"], [1, "card-blob"], [1, "card-header"], [1, "card-icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"], [1, "card-content"], [1, "resource-list"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"], [1, "card-actions"], [1, "btn-card", 3, "click"], ["d", "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"], [1, "card-particles"], ["class", "particle", 4, "ngFor", "ngForOf"], ["d", "M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"], ["d", "M8,5.14V19.14L19,12.14L8,5.14Z"], ["d", "M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"], ["d", "M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"], ["d", "M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z"], ["d", "M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"], [1, "qr-section"], [1, "qr-content"], [1, "qr-text"], [1, "qr-features"], [1, "qr-feature"], [1, "qr-code"], [1, "qr-image-container"], ["src", "/recursos/qr.jpg", "alt", "QR Code para acceder a recursos", 1, "qr-image"], [1, "qr-scan-animation"], [1, "final-cta"], [1, "cta-content"], [1, "cta-buttons"], [1, "btn", "btn-primary", 3, "click"], ["d", "M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V9H19V19M19,7H5V5H19M7,11H9V13H7M11,11H13V13H11M15,11H17V13H15"], [1, "btn", "btn-secondary", 3, "click"], ["d", "M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"], [1, "particle"]], template: function Recursos_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275template(4, Recursos_div_4_Template, 1, 2, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5)(6, "h1", 6);
      \u0275\u0275text(7, "Herramientas para acompa\xF1arte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, " Encuentra recursos creados por profesionales para fortalecer tu bienestar, gestionar tus emociones y sentirte acompa\xF1ada cada d\xEDa. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "span", 10);
      \u0275\u0275text(13, "50+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 11);
      \u0275\u0275text(15, "Recursos disponibles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 9)(17, "span", 10);
      \u0275\u0275text(18, "100%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, "Gratuitos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 9)(22, "span", 10);
      \u0275\u0275text(23, "24/7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 11);
      \u0275\u0275text(25, "Acceso inmediato");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg", 13);
      \u0275\u0275element(28, "path", 14)(29, "path", 15)(30, "path", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "div", 17)(32, "div", 18)(33, "div", 19)(34, "div", 20);
      \u0275\u0275element(35, "div", 21)(36, "div", 22);
      \u0275\u0275elementStart(37, "div", 23)(38, "div", 24);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(39, "svg", 25);
      \u0275\u0275element(40, "path", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(41, "h3");
      \u0275\u0275text(42, "Gu\xEDas y Materiales Descargables");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 27)(44, "ul", 28)(45, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(46, "svg", 29);
      \u0275\u0275element(47, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, " Gu\xEDa pr\xE1ctica para manejar la ansiedad durante el tratamiento ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(49, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 29);
      \u0275\u0275element(51, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " Ejercicios de respiraci\xF3n y mindfulness para d\xEDas dif\xEDciles ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(54, "svg", 29);
      \u0275\u0275element(55, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, " Diario de gratitud Ma'Care (PDF descargable) ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(57, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(58, "svg", 29);
      \u0275\u0275element(59, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(60, " Kit de autocuidado emocional semanal ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(61, "div", 31)(62, "button", 32);
      \u0275\u0275listener("click", function Recursos_Template_button_click_62_listener() {
        return ctx.descargarGuias();
      });
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Descargar Gu\xEDas");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(65, "svg", 29);
      \u0275\u0275element(66, "path", 33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(67, "div", 34);
      \u0275\u0275template(68, Recursos_div_68_Template, 1, 0, "div", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 20);
      \u0275\u0275element(70, "div", 21)(71, "div", 22);
      \u0275\u0275elementStart(72, "div", 23)(73, "div", 24);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(74, "svg", 25);
      \u0275\u0275element(75, "path", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(76, "h3");
      \u0275\u0275text(77, "Podcast y Meditaciones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 27)(79, "ul", 28)(80, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(81, "svg", 29);
      \u0275\u0275element(82, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(83, " Episodio: Aceptar los cambios del cuerpo con amor ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(84, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(85, "svg", 29);
      \u0275\u0275element(86, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(87, " Meditaci\xF3n guiada: Calma para un nuevo d\xEDa ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(88, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(89, "svg", 29);
      \u0275\u0275element(90, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(91, " Audio de relajaci\xF3n para dormir mejor ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(92, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(93, "svg", 29);
      \u0275\u0275element(94, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, " Sonidos curativos para momentos de estr\xE9s ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(96, "div", 31)(97, "button", 32);
      \u0275\u0275listener("click", function Recursos_Template_button_click_97_listener() {
        return ctx.escucharAhora();
      });
      \u0275\u0275elementStart(98, "span");
      \u0275\u0275text(99, "Escuchar Ahora");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(100, "svg", 29);
      \u0275\u0275element(101, "path", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(102, "div", 34);
      \u0275\u0275template(103, Recursos_div_103_Template, 1, 0, "div", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 20);
      \u0275\u0275element(105, "div", 21)(106, "div", 22);
      \u0275\u0275elementStart(107, "div", 23)(108, "div", 24);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(109, "svg", 25);
      \u0275\u0275element(110, "path", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(111, "h3");
      \u0275\u0275text(112, "Videos y Charlas Inspiradoras");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 27)(114, "ul", 28)(115, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(116, "svg", 29);
      \u0275\u0275element(117, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(118, " Historias reales de mujeres en remisi\xF3n ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(119, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(120, "svg", 29);
      \u0275\u0275element(121, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(122, " Conversaciones con psic\xF3logas sobre resiliencia ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(123, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(124, "svg", 29);
      \u0275\u0275element(125, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(126, ' Talleres: "C\xF3mo volver a conectar contigo misma" ');
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(127, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(128, "svg", 29);
      \u0275\u0275element(129, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(130, " Sesiones de yoga y movimiento terap\xE9utico ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(131, "div", 31)(132, "button", 32);
      \u0275\u0275listener("click", function Recursos_Template_button_click_132_listener() {
        return ctx.verVideos();
      });
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134, "Ver Videos");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(135, "svg", 29);
      \u0275\u0275element(136, "path", 39);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(137, "div", 34);
      \u0275\u0275template(138, Recursos_div_138_Template, 1, 0, "div", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "div", 20);
      \u0275\u0275element(140, "div", 21)(141, "div", 22);
      \u0275\u0275elementStart(142, "div", 23)(143, "div", 24);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(144, "svg", 25);
      \u0275\u0275element(145, "path", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(146, "h3");
      \u0275\u0275text(147, "Herramientas Interactivas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 27)(149, "ul", 28)(150, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(151, "svg", 29);
      \u0275\u0275element(152, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(153, " Calendario emocional (seguimiento del \xE1nimo) ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(154, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(155, "svg", 29);
      \u0275\u0275element(156, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(157, " Test de bienestar y autocuidado ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(158, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(159, "svg", 29);
      \u0275\u0275element(160, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(161, " Muro de frases positivas y esperanza ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(162, "li");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(163, "svg", 29);
      \u0275\u0275element(164, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(165, " Planificador de autocuidado semanal ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(166, "div", 31)(167, "button", 32);
      \u0275\u0275listener("click", function Recursos_Template_button_click_167_listener() {
        return ctx.explorarHerramientas();
      });
      \u0275\u0275elementStart(168, "span");
      \u0275\u0275text(169, "Explorar Herramientas");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(170, "svg", 29);
      \u0275\u0275element(171, "path", 41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(172, "div", 34);
      \u0275\u0275template(173, Recursos_div_173_Template, 1, 0, "div", 35);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(174, "div", 42)(175, "div", 18)(176, "div", 43)(177, "div", 44)(178, "h2");
      \u0275\u0275text(179, "Acceso R\xE1pido por QR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "p");
      \u0275\u0275text(181, "Escanea este c\xF3digo para acceder directamente a todos nuestros recursos desde tu m\xF3vil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 45)(183, "div", 46);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(184, "svg", 29);
      \u0275\u0275element(185, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(186, "span");
      \u0275\u0275text(187, "Acceso instant\xE1neo 24/7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "div", 46);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(189, "svg", 29);
      \u0275\u0275element(190, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(191, "span");
      \u0275\u0275text(192, "Sin descargas adicionales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "div", 46);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(194, "svg", 29);
      \u0275\u0275element(195, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(196, "span");
      \u0275\u0275text(197, "Contenido actualizado semanalmente");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(198, "div", 47)(199, "div", 48);
      \u0275\u0275element(200, "img", 49)(201, "div", 50);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(202, "div", 51)(203, "div", 18)(204, "div", 52)(205, "h2");
      \u0275\u0275text(206, "\xBFNecesitas apoyo m\xE1s personalizado?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "p");
      \u0275\u0275text(208, " Cada recurso fue creado con amor y respaldo profesional para acompa\xF1arte paso a paso. Si necesitas un espacio m\xE1s personal, estamos aqu\xED para ti. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "div", 53)(210, "button", 54);
      \u0275\u0275listener("click", function Recursos_Template_button_click_210_listener() {
        return ctx.agendarSesion();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(211, "svg", 29);
      \u0275\u0275element(212, "path", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275text(213, " Agendar Sesi\xF3n ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(214, "button", 56);
      \u0275\u0275listener("click", function Recursos_Template_button_click_214_listener() {
        return ctx.unirseGrupo();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(215, "svg", 29);
      \u0275\u0275element(216, "path", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275text(217, " Unirme a un Grupo ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.particles);
      \u0275\u0275advance(30);
      \u0275\u0275classMap("resource-card card-1");
      \u0275\u0275advance(34);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275advance();
      \u0275\u0275classMap("resource-card card-2");
      \u0275\u0275advance(34);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance();
      \u0275\u0275classMap("resource-card card-3");
      \u0275\u0275advance(34);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(15, _c0));
      \u0275\u0275advance();
      \u0275\u0275classMap("resource-card card-4");
      \u0275\u0275advance(34);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(16, _c0));
    }
  }, dependencies: [CommonModule, NgForOf], styles: ['\n\n.recursos[_ngcontent-%COMP%] {\n  font-family:\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  line-height: 1.6;\n  color: #2a2a2a;\n  overflow-x: hidden;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n.resources-hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 70vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886 0%,\n      #6f6aa7 100%);\n}\n@media (max-width: 768px) {\n  .resources-hero[_ngcontent-%COMP%] {\n    min-height: 60vh;\n  }\n}\n.hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.hero-background[_ngcontent-%COMP%]   .hero-particles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.hero-background[_ngcontent-%COMP%]   .hero-particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%] {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(180deg);\n  }\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  max-width: 800px;\n  padding: 0 2rem;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: #ffffff;\n  padding: 0.5rem 1.5rem;\n  border-radius: 50px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  color: #ffffff;\n  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 768px) {\n  .hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n.hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  line-height: 1.6;\n  opacity: 0.9;\n  max-width: 600px;\n  margin: 0 auto 2rem;\n}\n@media (max-width: 768px) {\n  .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.hero-stats[_ngcontent-%COMP%]   .hero-stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.hero-stats[_ngcontent-%COMP%]   .hero-stat[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.hero-stats[_ngcontent-%COMP%]   .hero-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n@media (max-width: 768px) {\n  .hero-stats[_ngcontent-%COMP%] {\n    gap: 2rem;\n  }\n  .hero-stats[_ngcontent-%COMP%]   .hero-stat[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.hero-wave[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 120px;\n  color: #fdfaf5;\n}\n.hero-wave[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.resources-main[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background: #fdfaf5;\n}\n@media (max-width: 768px) {\n  .resources-main[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n}\n.resources-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .resources-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.resource-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  overflow: hidden;\n  opacity: 0;\n  transform: translateY(30px);\n  transition: all 0.6s ease;\n}\n.resource-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15), 0 5px 25px rgba(0, 0, 0, 0.08);\n}\n.resource-card.animate-in[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.resource-card[_ngcontent-%COMP%]   .card-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    conic-gradient(\n      from 0deg,\n      transparent,\n      rgba(247, 211, 225, 0.1),\n      transparent);\n  opacity: 0;\n  transition: all 0.8s ease;\n  pointer-events: none;\n}\n.resource-card[_ngcontent-%COMP%]   .card-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: -100px;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  filter: blur(40px);\n  opacity: 0.2;\n  transition: all 0.8s ease;\n  pointer-events: none;\n}\n.resource-card[_ngcontent-%COMP%]:hover   .card-glow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1.1);\n}\n.resource-card[_ngcontent-%COMP%]:hover   .card-blob[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(10deg);\n}\n.card-1[_ngcontent-%COMP%]   .card-blob[_ngcontent-%COMP%] {\n  background: #e15886;\n}\n.card-1[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1,\n      #e15886);\n  color: #ffffff;\n}\n.card-1[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1,\n      #e15886);\n  color: #ffffff;\n}\n.card-1[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgb(239.1538461538, 167.8461538462, 195.5769230769),\n      rgb(217.2335025381, 44.7664974619, 102.6751269036));\n}\n.card-2[_ngcontent-%COMP%]   .card-blob[_ngcontent-%COMP%] {\n  background: #6f6aa7;\n}\n.card-2[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ece9ff,\n      #6f6aa7);\n  color: #ffffff;\n}\n.card-2[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ece9ff,\n      #6f6aa7);\n  color: #ffffff;\n}\n.card-2[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgb(191.9545454545, 182, 255),\n      rgb(87.1139240506, 82.4303797468, 139.5696202532));\n}\n.card-3[_ngcontent-%COMP%]   .card-blob[_ngcontent-%COMP%] {\n  background: #7fc8a9;\n}\n.card-3[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5ee,\n      #7fc8a9);\n  color: #ffffff;\n}\n.card-3[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5ee,\n      #7fc8a9);\n  color: #ffffff;\n}\n.card-3[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgb(196.4545454545, 229.5454545455, 211.7272727273),\n      rgb(91.3278688525, 184.6721311475, 145.0327868852));\n}\n.card-4[_ngcontent-%COMP%]   .card-blob[_ngcontent-%COMP%] {\n  background: rgb(168, 97, 150.5);\n}\n.card-4[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1,\n      #6f6aa7);\n  color: #ffffff;\n}\n.card-4[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1,\n      #6f6aa7);\n  color: #ffffff;\n}\n.card-4[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgb(239.1538461538, 167.8461538462, 195.5769230769),\n      rgb(87.1139240506, 82.4303797468, 139.5696202532));\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.card-header[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #2a2a2a;\n  margin: 0;\n}\n.card-content[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.resource-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  color: #6b7280;\n  font-size: 0.95rem;\n  line-height: 1.5;\n}\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #7fc8a9;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1.5rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.card-actions[_ngcontent-%COMP%]   .btn-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.card-particles[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.card-particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  opacity: 0.6;\n  animation: _ngcontent-%COMP%_float 6s infinite ease-in-out;\n}\n.card-particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%]:nth-child(1) {\n  top: 94%;\n  left: 11%;\n  animation-delay: 1s;\n}\n.card-particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%]:nth-child(2) {\n  top: 54%;\n  left: 91%;\n  animation-delay: 2s;\n}\n.card-particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%]:nth-child(3) {\n  top: 53%;\n  left: 87%;\n  animation-delay: 3s;\n}\n.qr-section[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f7f5ff 0%,\n      #fdfaf5 100%);\n}\n@media (max-width: 768px) {\n  .qr-section[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n}\n.qr-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 968px) {\n  .qr-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.qr-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  color: #2a2a2a;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886,\n      #6f6aa7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 768px) {\n  .qr-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.qr-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 2rem;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.qr-features[_ngcontent-%COMP%]   .qr-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  color: #2a2a2a;\n}\n.qr-features[_ngcontent-%COMP%]   .qr-feature[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #7fc8a9;\n  flex-shrink: 0;\n}\n.qr-features[_ngcontent-%COMP%]   .qr-feature[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.qr-code[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.qr-code[_ngcontent-%COMP%]   .qr-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 220px;\n  height: 220px;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.qr-code[_ngcontent-%COMP%]   .qr-image-container[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 12px;\n  z-index: 2;\n  position: relative;\n}\n.qr-code[_ngcontent-%COMP%]   .qr-image-container[_ngcontent-%COMP%]   .qr-scan-animation[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #e15886,\n      transparent);\n  animation: _ngcontent-%COMP%_scan 2s ease-in-out infinite;\n  z-index: 3;\n  border-radius: 20px;\n}\n@keyframes _ngcontent-%COMP%_scan {\n  0% {\n    top: 0;\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    top: 100%;\n    opacity: 0;\n  }\n}\n.qr-code[_ngcontent-%COMP%]   .qr-image-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    conic-gradient(\n      from 0deg,\n      transparent,\n      rgba(247, 211, 225, 0.1),\n      rgba(236, 233, 255, 0.1),\n      transparent);\n  animation: _ngcontent-%COMP%_rotate 10s linear infinite;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.final-cta[_ngcontent-%COMP%] {\n  padding: 6rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886 0%,\n      #6f6aa7 100%);\n  color: #ffffff;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .final-cta[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n  }\n}\n.final-cta[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(127, 200, 169, 0.1) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.cta-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  color: #ffffff;\n}\n@media (max-width: 768px) {\n  .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 2.5rem;\n  opacity: 0.9;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  border-radius: 50px;\n  font-weight: 600;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  position: relative;\n  overflow: hidden;\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #e15886;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(242.25, 242.25, 242.25);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #7fc8a9;\n  color: #ffffff;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgb(91.3278688525, 184.6721311475, 145.0327868852);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(127, 200, 169, 0.3);\n}\n@media (max-width: 768px) {\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n    justify-content: center;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out forwards;\n}\n@media (max-width: 768px) {\n  .resources-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .qr-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .qr-features[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .resource-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n  .card-header[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  .qr-image-container[_ngcontent-%COMP%] {\n    width: 180px !important;\n    height: 180px !important;\n  }\n}\n/*# sourceMappingURL=recursos.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Recursos, [{
    type: Component,
    args: [{ selector: "app-recursos", imports: [CommonModule], template: `<section class="recursos">\r
  <!-- Hero Section -->\r
  <div class="resources-hero">\r
    <div class="hero-background">\r
      <div class="hero-particles">\r
        <div class="particle" *ngFor="let p of particles" [style]="p"></div>\r
      </div>\r
    </div>\r
    <div class="hero-content">\r
      <h1 class="hero-title">Herramientas para acompa\xF1arte</h1>\r
      <p class="hero-subtitle">\r
        Encuentra recursos creados por profesionales para fortalecer tu bienestar, \r
        gestionar tus emociones y sentirte acompa\xF1ada cada d\xEDa.\r
      </p>\r
      <div class="hero-stats">\r
        <div class="hero-stat">\r
          <span class="stat-number">50+</span>\r
          <span class="stat-label">Recursos disponibles</span>\r
        </div>\r
        <div class="hero-stat">\r
          <span class="stat-number">100%</span>\r
          <span class="stat-label">Gratuitos</span>\r
        </div>\r
        <div class="hero-stat">\r
          <span class="stat-number">24/7</span>\r
          <span class="stat-label">Acceso inmediato</span>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="hero-wave">\r
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">\r
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>\r
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>\r
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>\r
      </svg>\r
    </div>\r
  </div>\r
\r
  <!-- Main Resources Grid -->\r
  <div class="resources-main">\r
    <div class="container">\r
      <div class="resources-grid">\r
        <!-- Gu\xEDas y Materiales -->\r
        <div class="resource-card" [class]="'resource-card card-1'">\r
          <div class="card-glow"></div>\r
          <div class="card-blob"></div>\r
          <div class="card-header">\r
            <div class="card-icon">\r
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>\r
              </svg>\r
            </div>\r
            <h3>Gu\xEDas y Materiales Descargables</h3>\r
          </div>\r
          <div class="card-content">\r
            <ul class="resource-list">\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Gu\xEDa pr\xE1ctica para manejar la ansiedad durante el tratamiento\r
              </li>\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Ejercicios de respiraci\xF3n y mindfulness para d\xEDas dif\xEDciles\r
              </li>\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Diario de gratitud Ma'Care (PDF descargable)\r
              </li>\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Kit de autocuidado emocional semanal\r
              </li>\r
            </ul>\r
          </div>\r
          <div class="card-actions">\r
            <button class="btn-card" (click)="descargarGuias()">\r
              <span>Descargar Gu\xEDas</span>\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="card-particles">\r
            <div class="particle" *ngFor="let p of [1,2,3]"></div>\r
          </div>\r
        </div>\r
\r
        <!-- Podcast y Meditaciones -->\r
        <div class="resource-card" [class]="'resource-card card-2'">\r
          <div class="card-glow"></div>\r
          <div class="card-blob"></div>\r
          <div class="card-header">\r
            <div class="card-icon">\r
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>\r
              </svg>\r
            </div>\r
            <h3>Podcast y Meditaciones</h3>\r
          </div>\r
          <div class="card-content">\r
            <ul class="resource-list">\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Episodio: Aceptar los cambios del cuerpo con amor\r
              </li>\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Meditaci\xF3n guiada: Calma para un nuevo d\xEDa\r
              </li>\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Audio de relajaci\xF3n para dormir mejor\r
              </li>\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Sonidos curativos para momentos de estr\xE9s\r
              </li>\r
            </ul>\r
          </div>\r
          <div class="card-actions">\r
            <button class="btn-card" (click)="escucharAhora()">\r
              <span>Escuchar Ahora</span>\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="card-particles">\r
            <div class="particle" *ngFor="let p of [1,2,3]"></div>\r
          </div>\r
        </div>\r
\r
        <!-- Videos y Charlas -->\r
        <div class="resource-card" [class]="'resource-card card-3'">\r
          <div class="card-glow"></div>\r
          <div class="card-blob"></div>\r
          <div class="card-header">\r
            <div class="card-icon">\r
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"/>\r
              </svg>\r
            </div>\r
            <h3>Videos y Charlas Inspiradoras</h3>\r
          </div>\r
          <div class="card-content">\r
            <ul class="resource-list">\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Historias reales de mujeres en remisi\xF3n\r
              </li>\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Conversaciones con psic\xF3logas sobre resiliencia\r
              </li>\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Talleres: "C\xF3mo volver a conectar contigo misma"\r
              </li>\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Sesiones de yoga y movimiento terap\xE9utico\r
              </li>\r
            </ul>\r
          </div>\r
          <div class="card-actions">\r
            <button class="btn-card" (click)="verVideos()">\r
              <span>Ver Videos</span>\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="card-particles">\r
            <div class="particle" *ngFor="let p of [1,2,3]"></div>\r
          </div>\r
        </div>\r
\r
        <!-- Herramientas Interactivas -->\r
        <div class="resource-card" [class]="'resource-card card-4'">\r
          <div class="card-glow"></div>\r
          <div class="card-blob"></div>\r
          <div class="card-header">\r
            <div class="card-icon">\r
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z"/>\r
              </svg>\r
            </div>\r
            <h3>Herramientas Interactivas</h3>\r
          </div>\r
          <div class="card-content">\r
            <ul class="resource-list">\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Calendario emocional (seguimiento del \xE1nimo)\r
              </li>\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Test de bienestar y autocuidado\r
              </li>\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Muro de frases positivas y esperanza\r
              </li>\r
              <li>\r
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
                </svg>\r
                Planificador de autocuidado semanal\r
              </li>\r
            </ul>\r
          </div>\r
          <div class="card-actions">\r
            <button class="btn-card" (click)="explorarHerramientas()">\r
              <span>Explorar Herramientas</span>\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"/>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="card-particles">\r
            <div class="particle" *ngFor="let p of [1,2,3]"></div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- QR Access Section -->\r
  <div class="qr-section">\r
    <div class="container">\r
      <div class="qr-content">\r
        <div class="qr-text">\r
          <h2>Acceso R\xE1pido por QR</h2>\r
          <p>Escanea este c\xF3digo para acceder directamente a todos nuestros recursos desde tu m\xF3vil</p>\r
          <div class="qr-features">\r
            <div class="qr-feature">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
              </svg>\r
              <span>Acceso instant\xE1neo 24/7</span>\r
            </div>\r
            <div class="qr-feature">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
              </svg>\r
              <span>Sin descargas adicionales</span>\r
            </div>\r
            <div class="qr-feature">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>\r
              </svg>\r
              <span>Contenido actualizado semanalmente</span>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="qr-code">\r
          <div class="qr-image-container">\r
            <!-- Reemplaza 'assets/qr-recursos.png' con la ruta real de tu QR -->\r
            <img src="/recursos/qr.jpg" alt="QR Code para acceder a recursos" class="qr-image">\r
            <div class="qr-scan-animation"></div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Final CTA -->\r
  <div class="final-cta">\r
    <div class="container">\r
      <div class="cta-content">\r
        <h2>\xBFNecesitas apoyo m\xE1s personalizado?</h2>\r
        <p>\r
          Cada recurso fue creado con amor y respaldo profesional para acompa\xF1arte paso a paso. \r
          Si necesitas un espacio m\xE1s personal, estamos aqu\xED para ti.\r
        </p>\r
        <div class="cta-buttons">\r
          <button class="btn btn-primary" (click)="agendarSesion()">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
              <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V9H19V19M19,7H5V5H19M7,11H9V13H7M11,11H13V13H11M15,11H17V13H15"/>\r
            </svg>\r
            Agendar Sesi\xF3n\r
          </button>\r
          <button class="btn btn-secondary" (click)="unirseGrupo()">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
              <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"/>\r
            </svg>\r
            Unirme a un Grupo\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>`, styles: ['/* src/app/pages/recursos/recursos.scss */\n.recursos {\n  font-family:\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  line-height: 1.6;\n  color: #2a2a2a;\n  overflow-x: hidden;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 768px) {\n  .container {\n    padding: 0 1rem;\n  }\n}\n.resources-hero {\n  position: relative;\n  min-height: 70vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886 0%,\n      #6f6aa7 100%);\n}\n@media (max-width: 768px) {\n  .resources-hero {\n    min-height: 60vh;\n  }\n}\n.hero-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.hero-background .hero-particles {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.hero-background .hero-particles .particle {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  animation: float 6s ease-in-out infinite;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(180deg);\n  }\n}\n.hero-content {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  max-width: 800px;\n  padding: 0 2rem;\n}\n.hero-content .hero-badge {\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  color: #ffffff;\n  padding: 0.5rem 1.5rem;\n  border-radius: 50px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.hero-content .hero-title {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  color: #ffffff;\n  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 768px) {\n  .hero-content .hero-title {\n    font-size: 2.5rem;\n  }\n}\n.hero-content .hero-subtitle {\n  font-size: 1.3rem;\n  line-height: 1.6;\n  opacity: 0.9;\n  max-width: 600px;\n  margin: 0 auto 2rem;\n}\n@media (max-width: 768px) {\n  .hero-content .hero-subtitle {\n    font-size: 1.1rem;\n  }\n}\n.hero-stats {\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.hero-stats .hero-stat {\n  text-align: center;\n}\n.hero-stats .hero-stat .stat-number {\n  display: block;\n  font-size: 2rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.hero-stats .hero-stat .stat-label {\n  font-size: 0.9rem;\n  opacity: 0.8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n@media (max-width: 768px) {\n  .hero-stats {\n    gap: 2rem;\n  }\n  .hero-stats .hero-stat .stat-number {\n    font-size: 1.5rem;\n  }\n}\n.hero-wave {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 120px;\n  color: #fdfaf5;\n}\n.hero-wave svg {\n  width: 100%;\n  height: 100%;\n}\n.resources-main {\n  padding: 6rem 0;\n  background: #fdfaf5;\n}\n@media (max-width: 768px) {\n  .resources-main {\n    padding: 4rem 0;\n  }\n}\n.resources-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .resources-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.resource-card {\n  position: relative;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  overflow: hidden;\n  opacity: 0;\n  transform: translateY(30px);\n  transition: all 0.6s ease;\n}\n.resource-card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15), 0 5px 25px rgba(0, 0, 0, 0.08);\n}\n.resource-card.animate-in {\n  opacity: 1;\n  transform: translateY(0);\n}\n.resource-card .card-glow {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    conic-gradient(\n      from 0deg,\n      transparent,\n      rgba(247, 211, 225, 0.1),\n      transparent);\n  opacity: 0;\n  transition: all 0.8s ease;\n  pointer-events: none;\n}\n.resource-card .card-blob {\n  position: absolute;\n  top: 50%;\n  right: -100px;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  filter: blur(40px);\n  opacity: 0.2;\n  transition: all 0.8s ease;\n  pointer-events: none;\n}\n.resource-card:hover .card-glow {\n  opacity: 1;\n  transform: scale(1.1);\n}\n.resource-card:hover .card-blob {\n  transform: scale(1.2) rotate(10deg);\n}\n.card-1 .card-blob {\n  background: #e15886;\n}\n.card-1 .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1,\n      #e15886);\n  color: #ffffff;\n}\n.card-1 .btn-card {\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1,\n      #e15886);\n  color: #ffffff;\n}\n.card-1 .btn-card:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgb(239.1538461538, 167.8461538462, 195.5769230769),\n      rgb(217.2335025381, 44.7664974619, 102.6751269036));\n}\n.card-2 .card-blob {\n  background: #6f6aa7;\n}\n.card-2 .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #ece9ff,\n      #6f6aa7);\n  color: #ffffff;\n}\n.card-2 .btn-card {\n  background:\n    linear-gradient(\n      135deg,\n      #ece9ff,\n      #6f6aa7);\n  color: #ffffff;\n}\n.card-2 .btn-card:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgb(191.9545454545, 182, 255),\n      rgb(87.1139240506, 82.4303797468, 139.5696202532));\n}\n.card-3 .card-blob {\n  background: #7fc8a9;\n}\n.card-3 .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5ee,\n      #7fc8a9);\n  color: #ffffff;\n}\n.card-3 .btn-card {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5ee,\n      #7fc8a9);\n  color: #ffffff;\n}\n.card-3 .btn-card:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgb(196.4545454545, 229.5454545455, 211.7272727273),\n      rgb(91.3278688525, 184.6721311475, 145.0327868852));\n}\n.card-4 .card-blob {\n  background: rgb(168, 97, 150.5);\n}\n.card-4 .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1,\n      #6f6aa7);\n  color: #ffffff;\n}\n.card-4 .btn-card {\n  background:\n    linear-gradient(\n      135deg,\n      #f7d3e1,\n      #6f6aa7);\n  color: #ffffff;\n}\n.card-4 .btn-card:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgb(239.1538461538, 167.8461538462, 195.5769230769),\n      rgb(87.1139240506, 82.4303797468, 139.5696202532));\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.card-header .card-icon {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.card-header h3 {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #2a2a2a;\n  margin: 0;\n}\n.card-content {\n  margin-bottom: 2rem;\n}\n.resource-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.resource-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  color: #6b7280;\n  font-size: 0.95rem;\n  line-height: 1.5;\n}\n.resource-list li svg {\n  color: #7fc8a9;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n.resource-list li:last-child {\n  margin-bottom: 0;\n}\n.card-actions .btn-card {\n  width: 100%;\n  padding: 1rem 1.5rem;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.card-actions .btn-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.card-actions .btn-card:hover::before {\n  left: 100%;\n}\n.card-actions .btn-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.card-particles {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.card-particles .particle {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  opacity: 0.6;\n  animation: float 6s infinite ease-in-out;\n}\n.card-particles .particle:nth-child(1) {\n  top: 94%;\n  left: 11%;\n  animation-delay: 1s;\n}\n.card-particles .particle:nth-child(2) {\n  top: 54%;\n  left: 91%;\n  animation-delay: 2s;\n}\n.card-particles .particle:nth-child(3) {\n  top: 53%;\n  left: 87%;\n  animation-delay: 3s;\n}\n.qr-section {\n  padding: 6rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f7f5ff 0%,\n      #fdfaf5 100%);\n}\n@media (max-width: 768px) {\n  .qr-section {\n    padding: 4rem 0;\n  }\n}\n.qr-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 968px) {\n  .qr-content {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n  }\n}\n.qr-text h2 {\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  color: #2a2a2a;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886,\n      #6f6aa7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 768px) {\n  .qr-text h2 {\n    font-size: 2rem;\n  }\n}\n.qr-text p {\n  font-size: 1.2rem;\n  margin-bottom: 2rem;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.qr-features .qr-feature {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  color: #2a2a2a;\n}\n.qr-features .qr-feature svg {\n  color: #7fc8a9;\n  flex-shrink: 0;\n}\n.qr-features .qr-feature:last-child {\n  margin-bottom: 0;\n}\n.qr-code {\n  display: flex;\n  justify-content: center;\n}\n.qr-code .qr-image-container {\n  position: relative;\n  width: 220px;\n  height: 220px;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.qr-code .qr-image-container .qr-image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 12px;\n  z-index: 2;\n  position: relative;\n}\n.qr-code .qr-image-container .qr-scan-animation {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #e15886,\n      transparent);\n  animation: scan 2s ease-in-out infinite;\n  z-index: 3;\n  border-radius: 20px;\n}\n@keyframes scan {\n  0% {\n    top: 0;\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    top: 100%;\n    opacity: 0;\n  }\n}\n.qr-code .qr-image-container::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    conic-gradient(\n      from 0deg,\n      transparent,\n      rgba(247, 211, 225, 0.1),\n      rgba(236, 233, 255, 0.1),\n      transparent);\n  animation: rotate 10s linear infinite;\n  pointer-events: none;\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.final-cta {\n  padding: 6rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #e15886 0%,\n      #6f6aa7 100%);\n  color: #ffffff;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .final-cta {\n    padding: 4rem 0;\n  }\n}\n.final-cta::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(127, 200, 169, 0.1) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.cta-content {\n  position: relative;\n  z-index: 2;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.cta-content h2 {\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  color: #ffffff;\n}\n@media (max-width: 768px) {\n  .cta-content h2 {\n    font-size: 2rem;\n  }\n}\n.cta-content p {\n  font-size: 1.2rem;\n  margin-bottom: 2.5rem;\n  opacity: 0.9;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .cta-content p {\n    font-size: 1.1rem;\n  }\n}\n.cta-buttons {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn {\n  padding: 1rem 2rem;\n  border-radius: 50px;\n  font-weight: 600;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  position: relative;\n  overflow: hidden;\n}\n.btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.btn:hover::before {\n  left: 100%;\n}\n.btn.btn-primary {\n  background: #ffffff;\n  color: #e15886;\n}\n.btn.btn-primary:hover {\n  background: rgb(242.25, 242.25, 242.25);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.btn.btn-secondary {\n  background: #7fc8a9;\n  color: #ffffff;\n}\n.btn.btn-secondary:hover {\n  background: rgb(91.3278688525, 184.6721311475, 145.0327868852);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(127, 200, 169, 0.3);\n}\n@media (max-width: 768px) {\n  .btn {\n    width: 100%;\n    max-width: 300px;\n    justify-content: center;\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-in {\n  animation: fadeInUp 0.6s ease-out forwards;\n}\n@media (max-width: 768px) {\n  .resources-grid {\n    grid-template-columns: 1fr;\n  }\n  .qr-content {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .qr-features {\n    text-align: left;\n  }\n  .cta-buttons {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media (max-width: 480px) {\n  .container {\n    padding: 0 1rem;\n  }\n  .hero-content .hero-title {\n    font-size: 2rem;\n  }\n  .hero-subtitle {\n    font-size: 1rem;\n  }\n  .resource-card {\n    padding: 1.5rem;\n  }\n  .card-header {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n  .card-header .card-icon {\n    margin: 0 auto;\n  }\n  .qr-image-container {\n    width: 180px !important;\n    height: 180px !important;\n  }\n}\n/*# sourceMappingURL=recursos.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Recursos, { className: "Recursos", filePath: "src/app/pages/recursos/recursos.ts", lineNumber: 10 });
})();
export {
  Recursos
};
//# sourceMappingURL=chunk-RKDLNALP.js.map
