import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext
} from "./chunk-DEJWN6HZ.js";

// src/app/pages/quienes-somos/quienes-somos.ts
var QuienesSomos = class _QuienesSomos {
  ngOnInit() {
    this.animateStats();
  }
  ngAfterViewInit() {
    if (typeof lucide?.createIcons === "function") {
      lucide.createIcons();
    }
  }
  animateStats() {
    setTimeout(() => {
      const stats = document.querySelectorAll(".stat-number");
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-count") || "0");
        const duration = 2e3;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          stat.textContent = Math.floor(current) + (stat.getAttribute("data-count") === "85" ? "%" : "+");
        }, 16);
      });
    }, 500);
  }
  solicitarAyuda() {
    console.log("Solicitar ayuda clicked");
  }
  serVoluntario() {
    console.log("Ser voluntario clicked");
  }
  donar() {
    console.log("Donar clicked");
  }
  static \u0275fac = function QuienesSomos_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuienesSomos)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuienesSomos, selectors: [["app-quienes-somos"]], decls: 132, vars: 0, consts: [[1, "quienes-somos"], [1, "hero-section"], [1, "hero-background"], [1, "hero-overlay"], [1, "hero-content"], [1, "fundacion-name"], [1, "hero-tagline"], [1, "hero-divider"], [1, "hero-description"], [1, "mission-vision-section"], [1, "container"], [1, "section-header"], [1, "cards-grid"], [1, "feature-card"], [1, "card-image", "mission-image"], [1, "image-overlay"], [1, "card-content"], [1, "card-icon"], ["data-lucide", "target", "aria-hidden", "true", 1, "icon", "icon-target"], [1, "card-image", "vision-image"], ["data-lucide", "eye", "aria-hidden", "true", 1, "icon", "icon-vision"], [1, "values-section"], [1, "values-grid"], [1, "value-item"], [1, "value-icon"], ["data-lucide", "handshake", "aria-hidden", "true", 1, "icon", "icon-commitment"], ["data-lucide", "shield-check", "aria-hidden", "true", 1, "icon", "icon-resilience"], ["data-lucide", "hand-heart", "aria-hidden", "true", 1, "icon", "icon-solidarity"], ["data-lucide", "ear", "aria-hidden", "true", 1, "icon", "icon-empathy"], ["data-lucide", "globe-2", "aria-hidden", "true", 1, "icon", "icon-responsibility"], [1, "impact-section"], [1, "impact-content"], [1, "impact-text"], [1, "stats-grid"], [1, "stat"], ["data-count", "500", 1, "stat-number"], [1, "stat-label"], ["data-count", "85", 1, "stat-number"], ["data-count", "200", 1, "stat-number"], ["data-count", "15", 1, "stat-number"], [1, "impact-image"], [1, "image-placeholder"], [1, "cta-section"], [1, "cta-content"], [1, "cta-buttons"], [1, "btn", "btn-primary", 3, "click"], ["data-lucide", "life-buoy", "aria-hidden", "true", 1, "icon", "icon-help"], [1, "btn", "btn-secondary", 3, "click"], ["data-lucide", "hand", "aria-hidden", "true", 1, "icon", "icon-volunteer"], [1, "btn", "btn-outline", 3, "click"], ["data-lucide", "gift", "aria-hidden", "true", 1, "icon", "icon-donate"]], template: function QuienesSomos_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275domElement(3, "div", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "Ma\xB4Care");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p", 6);
      \u0275\u0275text(8, "Cuidando tu bienestar, transformando tu camino");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(9, "div", 7);
      \u0275\u0275domElementStart(10, "p", 8);
      \u0275\u0275text(11, " Una fundaci\xF3n dedicada al apoyo integral de mujeres diagnosticadas con c\xE1ncer de mama, donde la salud mental y el bienestar emocional son nuestra prioridad. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "h2");
      \u0275\u0275text(16, "Nuestro Prop\xF3sito");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "p");
      \u0275\u0275text(18, "Comprometidos con el bienestar integral de cada mujer");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "div", 12)(20, "div", 13)(21, "div", 14);
      \u0275\u0275domElement(22, "div", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "div", 16)(24, "div", 17);
      \u0275\u0275domElement(25, "i", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "h3");
      \u0275\u0275text(27, "Nuestra Misi\xF3n");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "p");
      \u0275\u0275text(29, " Prevenir los trastornos de ansiedad y depresi\xF3n en mujeres con c\xE1ncer de mama mediante acompa\xF1amiento integral que combina atenci\xF3n psicol\xF3gica, herramientas tecnol\xF3gicas y fortalecimiento de redes de apoyo. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(30, "div", 13)(31, "div", 19);
      \u0275\u0275domElement(32, "div", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "div", 16)(34, "div", 17);
      \u0275\u0275domElement(35, "i", 20);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "h3");
      \u0275\u0275text(37, "Nuestra Visi\xF3n");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "p");
      \u0275\u0275text(39, " Ser referente nacional en apoyo integral para mujeres con c\xE1ncer de mama, reconocidos por soluciones innovadoras que promueven salud mental, fortalecen redes de apoyo y mejoran el bienestar durante todo el proceso. ");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(40, "div", 21)(41, "div", 10)(42, "div", 11)(43, "h2");
      \u0275\u0275text(44, "Nuestros Valores");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "p");
      \u0275\u0275text(46, "Principios que gu\xEDan nuestro trabajo diario");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(47, "div", 22)(48, "div", 23)(49, "div", 24);
      \u0275\u0275domElement(50, "i", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "h4");
      \u0275\u0275text(52, "Compromiso");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "p");
      \u0275\u0275text(54, "Acompa\xF1amiento constante y de calidad en todas las etapas del proceso.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(55, "div", 23)(56, "div", 24);
      \u0275\u0275domElement(57, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(58, "h4");
      \u0275\u0275text(59, "Resiliencia");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(60, "p");
      \u0275\u0275text(61, "Fortaleza emocional y crecimiento personal frente a las adversidades.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(62, "div", 23)(63, "div", 24);
      \u0275\u0275domElement(64, "i", 27);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "h4");
      \u0275\u0275text(66, "Solidaridad");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(67, "p");
      \u0275\u0275text(68, "Apoyo mutuo y empat\xEDa en una comunidad que se cuida.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(69, "div", 23)(70, "div", 24);
      \u0275\u0275domElement(71, "i", 28);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(72, "h4");
      \u0275\u0275text(73, "Empat\xEDa");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(74, "p");
      \u0275\u0275text(75, "Acompa\xF1amiento humano que reconoce necesidades individuales.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(76, "div", 23)(77, "div", 24);
      \u0275\u0275domElement(78, "i", 29);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(79, "h4");
      \u0275\u0275text(80, "Responsabilidad Social");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(81, "p");
      \u0275\u0275text(82, "Compromiso con el impacto positivo en nuestra comunidad.");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(83, "div", 30)(84, "div", 10)(85, "div", 31)(86, "div", 32)(87, "h2");
      \u0275\u0275text(88, "Nuestro Impacto");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(89, "p");
      \u0275\u0275text(90, "Transformando vidas a trav\xE9s del apoyo emocional y psicol\xF3gico");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(91, "div", 33)(92, "div", 34)(93, "div", 35);
      \u0275\u0275text(94, "0");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(95, "div", 36);
      \u0275\u0275text(96, "Mujeres acompa\xF1adas");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(97, "div", 34)(98, "div", 37);
      \u0275\u0275text(99, "0");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(100, "div", 36);
      \u0275\u0275text(101, "Mejora en bienestar");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(102, "div", 34)(103, "div", 38);
      \u0275\u0275text(104, "0");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(105, "div", 36);
      \u0275\u0275text(106, "Sesiones mensuales");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(107, "div", 34)(108, "div", 39);
      \u0275\u0275text(109, "0");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(110, "div", 36);
      \u0275\u0275text(111, "Ciudades impactadas");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(112, "div", 40)(113, "div", 41);
      \u0275\u0275domElement(114, "div", 15);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(115, "div", 42)(116, "div", 10)(117, "div", 43)(118, "h2");
      \u0275\u0275text(119, "\xBFLista para comenzar tu camino de bienestar?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(120, "p");
      \u0275\u0275text(121, "Juntas podemos enfrentar los desaf\xEDos y construir una red de apoyo s\xF3lida");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(122, "div", 44)(123, "button", 45);
      \u0275\u0275domListener("click", function QuienesSomos_Template_button_click_123_listener() {
        return ctx.solicitarAyuda();
      });
      \u0275\u0275domElement(124, "i", 46);
      \u0275\u0275text(125, " Solicitar Ayuda ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(126, "button", 47);
      \u0275\u0275domListener("click", function QuienesSomos_Template_button_click_126_listener() {
        return ctx.serVoluntario();
      });
      \u0275\u0275domElement(127, "i", 48);
      \u0275\u0275text(128, " Ser Voluntaria ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(129, "button", 49);
      \u0275\u0275domListener("click", function QuienesSomos_Template_button_click_129_listener() {
        return ctx.donar();
      });
      \u0275\u0275domElement(130, "i", 50);
      \u0275\u0275text(131, " Hacer una Donaci\xF3n ");
      \u0275\u0275domElementEnd()()()()()();
    }
  }, styles: ['@charset "UTF-8";\n\n\n\n.icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  line-height: 1;\n  display: inline-block;\n  vertical-align: -0.125em;\n  color: #ffffff;\n  transition:\n    transform 0.18s ease,\n    color 0.18s ease,\n    opacity 0.18s ease;\n}\n.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  stroke: currentColor;\n}\n.card-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #ffffff;\n}\n.value-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  color: #ffffff;\n}\n.btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1.125rem;\n  height: 1.125rem;\n}\n.feature-card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n.value-item[_ngcontent-%COMP%]:hover   .value-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n.btn[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  transform: translateY(-1px) scale(1.06);\n}\n.quienes-somos[_ngcontent-%COMP%] {\n  font-family:\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  line-height: 1.6;\n  color: #5a4c4c;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #d48ea8;\n  margin-bottom: 1rem;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background: #88c9a1;\n  margin: 1rem auto 0;\n  border-radius: 2px;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #8a7b7b;\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: 70vh;\n  min-height: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  overflow: hidden;\n}\n.hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(/imagenes/quienes-somos.jpg);\n  background-size: cover;\n  background-position: center;\n  background-color: #d48ea8;\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  max-width: 800px;\n  padding: 0 2rem;\n}\n.fundacion-name[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  color: #ffffff;\n}\n.hero-tagline[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 400;\n  margin-bottom: 2rem;\n  color: #ffffff;\n  opacity: 0.95;\n}\n.hero-divider[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 3px;\n  background: #88c9a1;\n  margin: 0 auto 2rem;\n  border-radius: 2px;\n}\n.hero-description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  line-height: 1.6;\n  opacity: 0.9;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.mission-vision-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: #f5f0e6;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 2rem;\n}\n.feature-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.card-image[_ngcontent-%COMP%] {\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n}\n.card-image.mission-image[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(212, 142, 168, 0.7),\n      rgba(184, 161, 201, 0.6)),\n    url(/imagenes/mision.jpg);\n  background-size: cover;\n  background-position: center;\n}\n.card-image.vision-image[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(136, 201, 161, 0.7),\n      rgba(184, 161, 201, 0.6)),\n    url(/imagenes/vision.jpg);\n  background-size: cover;\n  background-position: center;\n}\n.card-image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.1);\n  transition: background 0.3s ease;\n}\n.feature-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.2);\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.card-content[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8b5ce,\n      #b8a1c9);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n}\n.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #b86f8d;\n  margin-bottom: 1rem;\n}\n.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5a4c4c;\n  line-height: 1.6;\n}\n.values-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: #ffffff;\n}\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n}\n.value-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1.5rem;\n  background: #f5f0e6;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.value-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.value-item[_ngcontent-%COMP%]   .value-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background:\n    linear-gradient(\n      135deg,\n      #d48ea8,\n      #b8a1c9);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n}\n.value-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #b86f8d;\n  margin-bottom: 1rem;\n}\n.value-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5a4c4c;\n  line-height: 1.5;\n  font-size: 0.95rem;\n}\n.impact-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #88c9a1,\n      rgb(188.6213872832, 224.8786127168, 202.5664739884));\n  color: #ffffff;\n}\n.impact-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n.impact-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.impact-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 2rem;\n  opacity: 0.9;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n}\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n.stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.9;\n}\n.impact-image[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%] {\n  height: 300px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1),\n      rgba(184, 161, 201, 0.2)),\n    url(/imagenes/impacto.jpg);\n  background-size: cover;\n  background-position: center;\n  border-radius: 15px;\n  position: relative;\n  background-color: #88c9a1;\n}\n.impact-image[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: #e8b5ce;\n  color: #ffffff;\n  text-align: center;\n}\n.cta-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 2.5rem;\n  opacity: 0.9;\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  border-radius: 50px;\n  font-weight: 600;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #d48ea8;\n}\n.btn.btn-primary[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #d48ea8;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(242.25, 242.25, 242.25);\n  transform: translateY(-2px);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #88c9a1;\n  color: #ffffff;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgb(100.9190751445, 185.0809248555, 133.289017341);\n  transform: translateY(-2px);\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #ffffff;\n  border: 2px solid #ffffff;\n}\n.btn.btn-outline[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  color: #d48ea8;\n  transform: translateY(-2px);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  color: #d48ea8;\n}\n@media (max-width: 768px) {\n  .fundacion-name[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .impact-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .cta-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .hero-section[_ngcontent-%COMP%] {\n    height: 60vh;\n    min-height: 400px;\n  }\n  .fundacion-name[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=quienes-somos.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuienesSomos, [{
    type: Component,
    args: [{ selector: "app-quienes-somos", template: '<section class="quienes-somos">\r\n  <!-- Hero Section -->\r\n  <div class="hero-section">\r\n    <div class="hero-background">\r\n      <div class="hero-overlay"></div>\r\n    </div>\r\n    <div class="hero-content">\r\n      <h1 class="fundacion-name">Ma\xB4Care</h1>\r\n      <p class="hero-tagline">Cuidando tu bienestar, transformando tu camino</p>\r\n      <div class="hero-divider"></div>\r\n      <p class="hero-description">\r\n        Una fundaci\xF3n dedicada al apoyo integral de mujeres diagnosticadas con c\xE1ncer de mama, \r\n        donde la salud mental y el bienestar emocional son nuestra prioridad.\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Misi\xF3n y Visi\xF3n -->\r\n  <div class="mission-vision-section">\r\n    <div class="container">\r\n      <div class="section-header">\r\n        <h2>Nuestro Prop\xF3sito</h2>\r\n        <p>Comprometidos con el bienestar integral de cada mujer</p>\r\n      </div>\r\n      \r\n      <div class="cards-grid">\r\n        <!-- Misi\xF3n -->\r\n        <div class="feature-card">\r\n          <div class="card-image mission-image">\r\n            <div class="image-overlay"></div>\r\n          </div>\r\n          <div class="card-content">\r\n            <div class="card-icon">\r\n              <i class="icon icon-target" data-lucide="target" aria-hidden="true"></i>\r\n            </div>\r\n            <h3>Nuestra Misi\xF3n</h3>\r\n            <p>\r\n              Prevenir los trastornos de ansiedad y depresi\xF3n en mujeres con c\xE1ncer de mama \r\n              mediante acompa\xF1amiento integral que combina atenci\xF3n psicol\xF3gica, herramientas \r\n              tecnol\xF3gicas y fortalecimiento de redes de apoyo.\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Visi\xF3n -->\r\n        <div class="feature-card">\r\n          <div class="card-image vision-image">\r\n            <div class="image-overlay"></div>\r\n          </div>\r\n          <div class="card-content">\r\n            <div class="card-icon">\r\n              <i class="icon icon-vision" data-lucide="eye" aria-hidden="true"></i>\r\n            </div>\r\n            <h3>Nuestra Visi\xF3n</h3>\r\n            <p>\r\n              Ser referente nacional en apoyo integral para mujeres con c\xE1ncer de mama, \r\n              reconocidos por soluciones innovadoras que promueven salud mental, fortalecen \r\n              redes de apoyo y mejoran el bienestar durante todo el proceso.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Valores -->\r\n  <div class="values-section">\r\n    <div class="container">\r\n      <div class="section-header">\r\n        <h2>Nuestros Valores</h2>\r\n        <p>Principios que gu\xEDan nuestro trabajo diario</p>\r\n      </div>\r\n      \r\n      <div class="values-grid">\r\n        <div class="value-item">\r\n          <div class="value-icon">\r\n            <i class="icon icon-commitment" data-lucide="handshake" aria-hidden="true"></i>\r\n          </div>\r\n          <h4>Compromiso</h4>\r\n          <p>Acompa\xF1amiento constante y de calidad en todas las etapas del proceso.</p>\r\n        </div>\r\n\r\n        <div class="value-item">\r\n          <div class="value-icon">\r\n            <i class="icon icon-resilience" data-lucide="shield-check" aria-hidden="true"></i>\r\n          </div>\r\n          <h4>Resiliencia</h4>\r\n          <p>Fortaleza emocional y crecimiento personal frente a las adversidades.</p>\r\n        </div>\r\n\r\n        <div class="value-item">\r\n          <div class="value-icon">\r\n            <i class="icon icon-solidarity" data-lucide="hand-heart" aria-hidden="true"></i>\r\n          </div>\r\n          <h4>Solidaridad</h4>\r\n          <p>Apoyo mutuo y empat\xEDa en una comunidad que se cuida.</p>\r\n        </div>\r\n\r\n        <div class="value-item">\r\n          <div class="value-icon">\r\n            <i class="icon icon-empathy" data-lucide="ear" aria-hidden="true"></i>\r\n          </div>\r\n          <h4>Empat\xEDa</h4>\r\n          <p>Acompa\xF1amiento humano que reconoce necesidades individuales.</p>\r\n        </div>\r\n\r\n        <div class="value-item">\r\n          <div class="value-icon">\r\n            <i class="icon icon-responsibility" data-lucide="globe-2" aria-hidden="true"></i>\r\n          </div>\r\n          <h4>Responsabilidad Social</h4>\r\n          <p>Compromiso con el impacto positivo en nuestra comunidad.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Impacto -->\r\n  <div class="impact-section">\r\n    <div class="container">\r\n      <div class="impact-content">\r\n        <div class="impact-text">\r\n          <h2>Nuestro Impacto</h2>\r\n          <p>Transformando vidas a trav\xE9s del apoyo emocional y psicol\xF3gico</p>\r\n          \r\n          <div class="stats-grid">\r\n            <div class="stat">\r\n              <div class="stat-number" data-count="500">0</div>\r\n              <div class="stat-label">Mujeres acompa\xF1adas</div>\r\n            </div>\r\n            <div class="stat">\r\n              <div class="stat-number" data-count="85">0</div>\r\n              <div class="stat-label">Mejora en bienestar</div>\r\n            </div>\r\n            <div class="stat">\r\n              <div class="stat-number" data-count="200">0</div>\r\n              <div class="stat-label">Sesiones mensuales</div>\r\n            </div>\r\n            <div class="stat">\r\n              <div class="stat-number" data-count="15">0</div>\r\n              <div class="stat-label">Ciudades impactadas</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class="impact-image">\r\n          <div class="image-placeholder">\r\n            <div class="image-overlay"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Call to Action -->\r\n  <div class="cta-section">\r\n    <div class="container">\r\n      <div class="cta-content">\r\n        <h2>\xBFLista para comenzar tu camino de bienestar?</h2>\r\n        <p>Juntas podemos enfrentar los desaf\xEDos y construir una red de apoyo s\xF3lida</p>\r\n        \r\n        <div class="cta-buttons">\r\n          <button class="btn btn-primary" (click)="solicitarAyuda()">\r\n            <i class="icon icon-help" data-lucide="life-buoy" aria-hidden="true"></i>\r\n            Solicitar Ayuda\r\n          </button>\r\n          <button class="btn btn-secondary" (click)="serVoluntario()">\r\n            <i class="icon icon-volunteer" data-lucide="hand" aria-hidden="true"></i>\r\n            Ser Voluntaria\r\n          </button>\r\n          <button class="btn btn-outline" (click)="donar()">\r\n            <i class="icon icon-donate" data-lucide="gift" aria-hidden="true"></i>\r\n            Hacer una Donaci\xF3n\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>', styles: ['@charset "UTF-8";\n\n/* src/app/pages/quienes-somos/quienes-somos.scss */\n.icon {\n  width: 1.25rem;\n  height: 1.25rem;\n  line-height: 1;\n  display: inline-block;\n  vertical-align: -0.125em;\n  color: #ffffff;\n  transition:\n    transform 0.18s ease,\n    color 0.18s ease,\n    opacity 0.18s ease;\n}\n.icon svg {\n  width: 100%;\n  height: 100%;\n  stroke: currentColor;\n}\n.card-icon .icon {\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #ffffff;\n}\n.value-icon .icon {\n  width: 1.75rem;\n  height: 1.75rem;\n  color: #ffffff;\n}\n.btn .icon {\n  width: 1.125rem;\n  height: 1.125rem;\n}\n.feature-card:hover .card-icon .icon,\n.value-item:hover .value-icon .icon,\n.btn:hover .icon {\n  transform: translateY(-1px) scale(1.06);\n}\n.quienes-somos {\n  font-family:\n    "Segoe UI",\n    system-ui,\n    -apple-system,\n    sans-serif;\n  line-height: 1.6;\n  color: #5a4c4c;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.section-header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.section-header h2 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #d48ea8;\n  margin-bottom: 1rem;\n}\n.section-header h2::after {\n  content: "";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background: #88c9a1;\n  margin: 1rem auto 0;\n  border-radius: 2px;\n}\n.section-header p {\n  font-size: 1.2rem;\n  color: #8a7b7b;\n}\n.hero-section {\n  position: relative;\n  height: 70vh;\n  min-height: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  overflow: hidden;\n}\n.hero-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(/imagenes/quienes-somos.jpg);\n  background-size: cover;\n  background-position: center;\n  background-color: #d48ea8;\n}\n.hero-overlay {\n  display: none;\n}\n.hero-content {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  max-width: 800px;\n  padding: 0 2rem;\n}\n.fundacion-name {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  color: #ffffff;\n}\n.hero-tagline {\n  font-size: 1.4rem;\n  font-weight: 400;\n  margin-bottom: 2rem;\n  color: #ffffff;\n  opacity: 0.95;\n}\n.hero-divider {\n  width: 80px;\n  height: 3px;\n  background: #88c9a1;\n  margin: 0 auto 2rem;\n  border-radius: 2px;\n}\n.hero-description {\n  font-size: 1.2rem;\n  line-height: 1.6;\n  opacity: 0.9;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.mission-vision-section {\n  padding: 5rem 0;\n  background: #f5f0e6;\n}\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 2rem;\n}\n.feature-card {\n  background: #ffffff;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n.feature-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.card-image {\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n}\n.card-image.mission-image {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(212, 142, 168, 0.7),\n      rgba(184, 161, 201, 0.6)),\n    url(/imagenes/mision.jpg);\n  background-size: cover;\n  background-position: center;\n}\n.card-image.vision-image {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(136, 201, 161, 0.7),\n      rgba(184, 161, 201, 0.6)),\n    url(/imagenes/vision.jpg);\n  background-size: cover;\n  background-position: center;\n}\n.card-image .image-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.1);\n  transition: background 0.3s ease;\n}\n.feature-card:hover .card-image .image-overlay {\n  background: rgba(0, 0, 0, 0.2);\n}\n.card-content {\n  padding: 2rem;\n}\n.card-content .card-icon {\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8b5ce,\n      #b8a1c9);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n}\n.card-content h3 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #b86f8d;\n  margin-bottom: 1rem;\n}\n.card-content p {\n  color: #5a4c4c;\n  line-height: 1.6;\n}\n.values-section {\n  padding: 5rem 0;\n  background: #ffffff;\n}\n.values-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n}\n.value-item {\n  text-align: center;\n  padding: 2rem 1.5rem;\n  background: #f5f0e6;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n.value-item:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.value-item .value-icon {\n  width: 70px;\n  height: 70px;\n  background:\n    linear-gradient(\n      135deg,\n      #d48ea8,\n      #b8a1c9);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n}\n.value-item h4 {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #b86f8d;\n  margin-bottom: 1rem;\n}\n.value-item p {\n  color: #5a4c4c;\n  line-height: 1.5;\n  font-size: 0.95rem;\n}\n.impact-section {\n  padding: 5rem 0;\n  background:\n    linear-gradient(\n      135deg,\n      #88c9a1,\n      rgb(188.6213872832, 224.8786127168, 202.5664739884));\n  color: #ffffff;\n}\n.impact-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n.impact-text h2 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.impact-text p {\n  font-size: 1.2rem;\n  margin-bottom: 2rem;\n  opacity: 0.9;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n}\n.stat {\n  text-align: center;\n}\n.stat .stat-number {\n  font-size: 3rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n.stat .stat-label {\n  font-size: 1rem;\n  opacity: 0.9;\n}\n.impact-image .image-placeholder {\n  height: 300px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1),\n      rgba(184, 161, 201, 0.2)),\n    url(/imagenes/impacto.jpg);\n  background-size: cover;\n  background-position: center;\n  border-radius: 15px;\n  position: relative;\n  background-color: #88c9a1;\n}\n.impact-image .image-placeholder .image-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n}\n.cta-section {\n  padding: 5rem 0;\n  background: #e8b5ce;\n  color: #ffffff;\n  text-align: center;\n}\n.cta-content {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-content h2 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n.cta-content p {\n  font-size: 1.2rem;\n  margin-bottom: 2.5rem;\n  opacity: 0.9;\n}\n.cta-buttons {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn {\n  padding: 1rem 2rem;\n  border-radius: 50px;\n  font-weight: 600;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn.btn-primary {\n  background: #ffffff;\n  color: #d48ea8;\n}\n.btn.btn-primary .icon {\n  color: #d48ea8;\n}\n.btn.btn-primary:hover {\n  background: rgb(242.25, 242.25, 242.25);\n  transform: translateY(-2px);\n}\n.btn.btn-secondary {\n  background: #88c9a1;\n  color: #ffffff;\n}\n.btn.btn-secondary .icon {\n  color: #ffffff;\n}\n.btn.btn-secondary:hover {\n  background: rgb(100.9190751445, 185.0809248555, 133.289017341);\n  transform: translateY(-2px);\n}\n.btn.btn-outline {\n  background: transparent;\n  color: #ffffff;\n  border: 2px solid #ffffff;\n}\n.btn.btn-outline .icon {\n  color: #ffffff;\n}\n.btn.btn-outline:hover {\n  background: #ffffff;\n  color: #d48ea8;\n  transform: translateY(-2px);\n}\n.btn.btn-outline:hover .icon {\n  color: #d48ea8;\n}\n@media (max-width: 768px) {\n  .fundacion-name {\n    font-size: 3rem;\n  }\n  .cards-grid {\n    grid-template-columns: 1fr;\n  }\n  .impact-content {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .cta-buttons {\n    flex-direction: column;\n    align-items: center;\n  }\n  .cta-buttons .btn {\n    width: 100%;\n    max-width: 300px;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .container {\n    padding: 0 1rem;\n  }\n  .hero-section {\n    height: 60vh;\n    min-height: 400px;\n  }\n  .fundacion-name {\n    font-size: 2.5rem;\n  }\n  .section-header h2 {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=quienes-somos.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuienesSomos, { className: "QuienesSomos", filePath: "src/app/pages/quienes-somos/quienes-somos.ts", lineNumber: 10 });
})();
export {
  QuienesSomos
};
//# sourceMappingURL=chunk-RYWMDWPS.js.map
