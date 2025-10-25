import {
  ProfessionalService
} from "./chunk-KCFJDGWD.js";
import {
  AuthService
} from "./chunk-A2PELOIP.js";
import "./chunk-BPEFTJA2.js";
import {
  Router,
  RouterModule
} from "./chunk-6P7TFCYF.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-Q4BX36PF.js";
import {
  Component,
  Subject,
  __async,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-DEJWN6HZ.js";

// src/app/panels/profesional-panel/profesional-panel.ts
function ProfesionalPanel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando panel profesional...");
    \u0275\u0275elementEnd()();
  }
}
function ProfesionalPanel_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Error al cargar el panel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 8);
    \u0275\u0275listener("click", function ProfesionalPanel_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275text(8, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ProfesionalPanel_div_3_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 58)(7, "h4", 59);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 60);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 61);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 62)(14, "button", 63);
    \u0275\u0275listener("click", function ProfesionalPanel_div_3_div_67_Template_button_click_14_listener() {
      const cita_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewCitaDetails(cita_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 28);
    \u0275\u0275element(16, "path", 64)(17, "path", 65);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cita_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(cita_r5.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(cita_r5.date));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", cita_r5.patientId.name, " ", cita_r5.patientId.lastName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cita_r5.title);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(cita_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusDisplay(cita_r5.status), " ");
  }
}
function ProfesionalPanel_div_3_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 67);
    \u0275\u0275element(2, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No tienes citas programadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function ProfesionalPanel_div_3_div_68_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToAgenda());
    });
    \u0275\u0275text(6, "Programar Cita");
    \u0275\u0275elementEnd()();
  }
}
function ProfesionalPanel_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "h1", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 18)(14, "button", 19);
    \u0275\u0275listener("click", function ProfesionalPanel_div_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToAgenda());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 20);
    \u0275\u0275element(16, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Mi Agenda ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 22);
    \u0275\u0275listener("click", function ProfesionalPanel_div_3_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 23);
    \u0275\u0275element(20, "path", 24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 25)(22, "div", 26);
    \u0275\u0275listener("click", function ProfesionalPanel_div_3_Template_div_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToCitas());
    });
    \u0275\u0275elementStart(23, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 28);
    \u0275\u0275element(25, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "div", 29)(27, "h3", 30);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 31);
    \u0275\u0275text(30, "Citas Hoy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 26);
    \u0275\u0275listener("click", function ProfesionalPanel_div_3_Template_div_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToCitas());
    });
    \u0275\u0275elementStart(32, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 28);
    \u0275\u0275element(34, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "div", 29)(36, "h3", 30);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 31);
    \u0275\u0275text(39, "Pendientes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 26);
    \u0275\u0275listener("click", function ProfesionalPanel_div_3_Template_div_click_40_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToCitas());
    });
    \u0275\u0275elementStart(41, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 28);
    \u0275\u0275element(43, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "div", 29)(45, "h3", 30);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 31);
    \u0275\u0275text(48, "Esta Semana");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 26);
    \u0275\u0275listener("click", function ProfesionalPanel_div_3_Template_div_click_49_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPacientes());
    });
    \u0275\u0275elementStart(50, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 28);
    \u0275\u0275element(52, "path", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "div", 29)(54, "h3", 30);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p", 31);
    \u0275\u0275text(57, "Pacientes Activos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 37)(59, "div", 38)(60, "div", 39)(61, "div", 40)(62, "h2", 41);
    \u0275\u0275text(63, "Pr\xF3ximas Citas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 42);
    \u0275\u0275listener("click", function ProfesionalPanel_div_3_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToCitas());
    });
    \u0275\u0275text(65, " Ver Todas ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 43);
    \u0275\u0275template(67, ProfesionalPanel_div_3_div_67_Template, 18, 8, "div", 44)(68, ProfesionalPanel_div_3_div_68_Template, 7, 0, "div", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 38)(70, "div", 39)(71, "h2", 41);
    \u0275\u0275text(72, "Acciones R\xE1pidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 46)(74, "button", 47);
    \u0275\u0275listener("click", function ProfesionalPanel_div_3_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToCitas());
    });
    \u0275\u0275elementStart(75, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(76, "svg", 28);
    \u0275\u0275element(77, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(78, "h3");
    \u0275\u0275text(79, "Gesti\xF3n de Citas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p");
    \u0275\u0275text(81, "Administra tus citas y agenda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "button", 47);
    \u0275\u0275listener("click", function ProfesionalPanel_div_3_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPacientes());
    });
    \u0275\u0275elementStart(83, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(84, "svg", 28);
    \u0275\u0275element(85, "path", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(86, "h3");
    \u0275\u0275text(87, "Mis Pacientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "p");
    \u0275\u0275text(89, "Gestiona informaci\xF3n de pacientes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "button", 47);
    \u0275\u0275listener("click", function ProfesionalPanel_div_3_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToAgenda());
    });
    \u0275\u0275elementStart(91, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(92, "svg", 28);
    \u0275\u0275element(93, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(94, "h3");
    \u0275\u0275text(95, "Mi Agenda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "p");
    \u0275\u0275text(97, "Configura tu disponibilidad");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(98, "div", 39)(99, "h2", 41);
    \u0275\u0275text(100, "M\xE9tricas del Mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 50)(102, "div", 51)(103, "span", 52);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span", 53);
    \u0275\u0275text(106, "Citas Completadas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 51)(108, "span", 52);
    \u0275\u0275text(109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "span", 53);
    \u0275\u0275text(111, "Tasa de Asistencia");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getInitials(ctx_r1.profesional.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Bienvenido, ", ctx_r1.profesional.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profesional.specialty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profesional.email);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.stats.citasHoy);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.stats.citasPendientes);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.stats.citasEstaSemana);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.stats.pacientesActivos);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.proximasCitas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.proximasCitas.length === 0);
    \u0275\u0275advance(36);
    \u0275\u0275textInterpolate(ctx_r1.stats.citasCompletadasMes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.stats.tasaAsistencia, "%");
  }
}
var ProfesionalPanel = class _ProfesionalPanel {
  // Inyectar servicios
  professionalService = inject(ProfessionalService);
  authService = inject(AuthService);
  router = inject(Router);
  // Datos del profesional
  profesional = {
    _id: "",
    name: "Cargando...",
    specialty: "Cargando...",
    email: "cargando@ejemplo.com",
    isActive: true,
    createdAt: "",
    updatedAt: ""
  };
  stats = {
    citasHoy: 0,
    citasPendientes: 0,
    citasEstaSemana: 0,
    pacientesActivos: 0,
    citasCompletadasMes: 0,
    tasaAsistencia: 0
  };
  proximasCitas = [];
  isLoading = true;
  error = "";
  destroy$ = new Subject();
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.loadProfessionalData();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadProfessionalData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.error = "";
      try {
        yield Promise.all([
          this.loadProfessionalProfile(),
          this.loadStats(),
          this.loadProximasCitas()
        ]);
      } catch (error) {
        console.error("Error loading professional data:", error);
        this.error = this.getErrorMessage(error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  loadProfessionalProfile() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.professionalService.getProfessionalProfile().pipe(takeUntil(this.destroy$)).subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.profesional = response.data;
              resolve();
            } else {
              reject(new Error("No se pudo cargar el perfil profesional"));
            }
          },
          error: (error) => {
            console.error("Error loading professional profile:", error);
            const user = this.authService.currentUser();
            if (user) {
              this.profesional = {
                _id: user.id,
                name: `${user.name} ${user.lastName}`.trim(),
                email: user.email,
                specialty: "Profesional de Salud",
                phone: user.phone,
                isActive: true,
                createdAt: (/* @__PURE__ */ new Date()).toISOString(),
                updatedAt: (/* @__PURE__ */ new Date()).toISOString()
              };
              resolve();
            } else {
              reject(error);
            }
          }
        });
      });
    });
  }
  loadStats() {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        this.professionalService.getStats().pipe(takeUntil(this.destroy$)).subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.stats = response.data;
            }
            resolve();
          },
          error: (error) => {
            console.error("Error loading stats:", error);
            this.stats = this.getDefaultStats();
            resolve();
          }
        });
      });
    });
  }
  loadProximasCitas() {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        this.professionalService.getAppointments({
          limit: 5,
          status: "scheduled,confirmed"
        }).pipe(takeUntil(this.destroy$)).subscribe({
          next: (response) => {
            this.proximasCitas = this.professionalService.extractAppointments(response);
            resolve();
          },
          error: (error) => {
            console.error("Error loading appointments:", error);
            this.proximasCitas = [];
            resolve();
          }
        });
      });
    });
  }
  getErrorMessage(error) {
    if (error?.status === 401) {
      return "No autorizado. Por favor, inicia sesi\xF3n nuevamente.";
    } else if (error?.status === 403) {
      return "No tienes permisos para acceder a este panel.";
    } else if (error?.status === 404) {
      return "Recurso no encontrado.";
    } else if (error?.status >= 500) {
      return "Error del servidor. Por favor, intenta m\xE1s tarde.";
    } else {
      return "Error al cargar los datos del panel. Por favor, intenta nuevamente.";
    }
  }
  getDefaultStats() {
    return {
      citasHoy: 0,
      citasPendientes: 0,
      citasEstaSemana: 0,
      pacientesActivos: 0,
      citasCompletadasMes: 0,
      tasaAsistencia: 0
    };
  }
  // Helper functions
  getInitials(name) {
    if (!name || name === "Cargando...")
      return "P";
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }
  formatTime(dateString) {
    try {
      return new Date(dateString).toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return "--:--";
    }
  }
  formatDate(dateString) {
    try {
      return new Date(dateString).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short"
      });
    } catch {
      return "Fecha inv\xE1lida";
    }
  }
  getStatusDisplay(status) {
    const statusMap = {
      "scheduled": "Programada",
      "confirmed": "Confirmada",
      "completed": "Completada",
      "cancelled": "Cancelada",
      "pending": "Pendiente"
    };
    return statusMap[status] || status;
  }
  getStatusClass(status) {
    const classMap = {
      "scheduled": "status-scheduled",
      "confirmed": "status-confirmed",
      "completed": "status-completed",
      "cancelled": "status-cancelled",
      "pending": "status-scheduled"
    };
    return classMap[status] || "";
  }
  // Navegación ACTUALIZADA
  goToCitas() {
    console.log("\u{1F4CD} Navegando a citas...");
    this.router.navigate(["/profesional/citas"]);
  }
  goToAgenda() {
    console.log("\u{1F4CD} Navegando a agenda...");
    this.router.navigate(["/profesional/agenda"]);
  }
  goToPacientes() {
    console.log("\u{1F4CD} Navegando a pacientes...");
    this.router.navigate(["/profesional/pacientes"]);
  }
  // ELIMINADO: goToPerfil() - Usamos el profile general
  viewCitaDetails(cita) {
    console.log("\u{1F4CD} Ver detalles de cita:", cita._id);
    this.router.navigate(["/profesional/citas", cita._id]);
  }
  refreshData() {
    console.log("\u{1F4CD} Refrescando datos...");
    this.loadProfessionalData();
  }
  static \u0275fac = function ProfesionalPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfesionalPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfesionalPanel, selectors: [["app-professional-panel"]], decls: 4, vars: 3, consts: [[1, "professional-panel"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "panel-content", 4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "error-icon"], [1, "btn-retry", 3, "click"], [1, "panel-content"], [1, "panel-header"], [1, "user-info"], [1, "avatar"], [1, "avatar-initials"], [1, "user-details"], [1, "user-name"], [1, "user-specialty"], [1, "user-contact"], [1, "header-actions"], [1, "btn-primary", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "btn-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["title", "Actualizar datos", 1, "btn-refresh", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "refresh-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "stats-grid"], [1, "stat-card", 3, "click"], [1, "stat-icon", "today"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], [1, "stat-content"], [1, "stat-number"], [1, "stat-label"], [1, "stat-icon", "pending"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "stat-icon", "week"], [1, "stat-icon", "patients"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "content-columns"], [1, "column"], [1, "section"], [1, "section-header"], [1, "section-title"], [1, "btn-secondary", 3, "click"], [1, "citas-list"], ["class", "cita-item", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "actions-grid"], [1, "action-card", 3, "click"], [1, "action-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "metrics-grid"], [1, "metric-item"], [1, "metric-value"], [1, "metric-label"], [1, "cita-item"], [1, "cita-time"], [1, "time"], [1, "date"], [1, "cita-info"], [1, "paciente-name"], [1, "cita-type"], [1, "status-badge"], [1, "cita-actions"], ["title", "Ver detalles", 1, "btn-action", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], [1, "empty-state"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "empty-icon"]], template: function ProfesionalPanel_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ProfesionalPanel_div_1_Template, 4, 0, "div", 1)(2, ProfesionalPanel_div_2_Template, 9, 1, "div", 2)(3, ProfesionalPanel_div_3_Template, 112, 12, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ['\n\n[_nghost-%COMP%] {\n  --primary-color: #2563eb;\n  --primary-hover: #1d4ed8;\n  --secondary-color: #64748b;\n  --secondary-hover: #475569;\n  --success-color: #059669;\n  --warning-color: #d97706;\n  --error-color: #dc2626;\n  --background-color: #f8fafc;\n  --surface-color: #ffffff;\n  --text-primary: #1e293b;\n  --text-secondary: #64748b;\n  --text-muted: #94a3b8;\n  --border-color: #e2e8f0;\n  --border-radius: 12px;\n  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n.professional-panel[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: var(--background-color);\n  padding: 24px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  text-align: center;\n  background: var(--surface-color);\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow-sm);\n  padding: 48px 24px;\n}\n.loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 3px solid var(--border-color);\n  border-top: 3px solid var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  margin-bottom: 8px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 24px;\n  font-size: 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%], \n.btn-retry[_ngcontent-%COMP%], \n.btn-refresh[_ngcontent-%COMP%], \n.btn-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  font-family: inherit;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled, \n.btn-secondary[_ngcontent-%COMP%]:disabled, \n.btn-retry[_ngcontent-%COMP%]:disabled, \n.btn-refresh[_ngcontent-%COMP%]:disabled, \n.btn-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%]:focus-visible, \n.btn-secondary[_ngcontent-%COMP%]:focus-visible, \n.btn-retry[_ngcontent-%COMP%]:focus-visible, \n.btn-refresh[_ngcontent-%COMP%]:focus-visible, \n.btn-action[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-color);\n  outline-offset: 2px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--primary-hover);\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-md);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--primary-color);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f1f5f9;\n  border-color: var(--primary-color);\n}\n.btn-retry[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n  padding: 10px 20px;\n}\n.btn-retry[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-hover);\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--border-color);\n  padding: 10px;\n  border-radius: 8px;\n  color: var(--text-secondary);\n}\n.btn-refresh[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.btn-action[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--border-color);\n  padding: 8px;\n  border-radius: 6px;\n  color: var(--text-secondary);\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.btn-icon[_ngcontent-%COMP%], \n.refresh-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.panel-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--surface-color);\n  border-radius: var(--border-radius);\n  padding: 32px;\n  margin-bottom: 24px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n}\n.panel-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.panel-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--primary-hover));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 20px;\n}\n.panel-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .avatar-initials[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.panel-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n}\n.panel-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-specialty[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 4px 0;\n}\n.panel-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-contact[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  margin: 0;\n}\n.panel-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: var(--surface-color);\n  border-radius: var(--border-radius);\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--primary-color);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon.today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon.pending[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon.week[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #2563eb);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-icon.patients[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #7c3aed);\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  line-height: 1;\n}\n.stats-grid[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0;\n}\n.content-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 32px;\n  align-items: start;\n}\n.content-columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.section[_ngcontent-%COMP%] {\n  background: var(--surface-color);\n  border-radius: var(--border-radius);\n  padding: 24px;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n.citas-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  box-shadow: var(--shadow-sm);\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]   .cita-time[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 60px;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]   .cita-time[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]   .cita-time[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 12px;\n  margin-top: 4px;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]   .cita-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]   .cita-info[_ngcontent-%COMP%]   .paciente-name[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]   .cita-info[_ngcontent-%COMP%]   .cita-type[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  margin: 0 0 8px 0;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]   .cita-info[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]   .cita-info[_ngcontent-%COMP%]   .status-badge.status-scheduled[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]   .cita-info[_ngcontent-%COMP%]   .status-badge.status-confirmed[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]   .cita-info[_ngcontent-%COMP%]   .status-badge.status-completed[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]   .cita-info[_ngcontent-%COMP%]   .status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.citas-list[_ngcontent-%COMP%]   .cita-item[_ngcontent-%COMP%]   .cita-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.citas-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 24px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.citas-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-bottom: 16px;\n  color: var(--text-muted);\n}\n.citas-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n.actions-grid[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: transparent;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: left;\n  width: 100%;\n}\n.actions-grid[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  background-color: #f8fafc;\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-sm);\n}\n.actions-grid[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--primary-hover));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  flex-shrink: 0;\n}\n.actions-grid[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.actions-grid[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n}\n.actions-grid[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  margin: 0;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.metrics-grid[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n}\n.metrics-grid[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.metrics-grid[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 12px;\n  font-weight: 500;\n  text-align: center;\n}\n@media (max-width: 1024px) {\n  .content-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .panel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n    align-items: flex-start;\n  }\n  .panel-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 768px) {\n  .professional-panel[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .panel-header[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .panel-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n  }\n  .panel-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .panel-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cita-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n    text-align: left;\n  }\n  .cita-item[_ngcontent-%COMP%]   .cita-time[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n    gap: 8px;\n  }\n  .cita-item[_ngcontent-%COMP%]   .cita-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .action-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .action-card[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n}\n/*# sourceMappingURL=profesional-panel.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfesionalPanel, [{
    type: Component,
    args: [{ selector: "app-professional-panel", standalone: true, imports: [CommonModule, RouterModule], template: '<div class="professional-panel">\r\n  <!-- Loading State -->\r\n  <div *ngIf="isLoading" class="loading-state">\r\n    <div class="loading-spinner"></div>\r\n    <p>Cargando panel profesional...</p>\r\n  </div>\r\n\r\n  <!-- Error State -->\r\n  <div *ngIf="error && !isLoading" class="error-state">\r\n    <div class="error-icon">\u26A0\uFE0F</div>\r\n    <h3>Error al cargar el panel</h3>\r\n    <p>{{ error }}</p>\r\n    <button class="btn-retry" (click)="refreshData()">Reintentar</button>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div *ngIf="!isLoading && !error" class="panel-content">\r\n    <!-- Header del Panel -->\r\n    <div class="panel-header">\r\n      <div class="user-info">\r\n        <div class="avatar">\r\n          <span class="avatar-initials">{{ getInitials(profesional.name) }}</span>\r\n        </div>\r\n        <div class="user-details">\r\n          <h1 class="user-name">Bienvenido, {{ profesional.name }}</h1>\r\n          <p class="user-specialty">{{ profesional.specialty }}</p>\r\n          <p class="user-contact">{{ profesional.email }}</p>\r\n        </div>\r\n      </div>\r\n      <div class="header-actions">\r\n        <button class="btn-primary" (click)="goToAgenda()">\r\n          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>\r\n          </svg>\r\n          Mi Agenda\r\n        </button>\r\n        <button class="btn-refresh" (click)="refreshData()" title="Actualizar datos">\r\n          <svg class="refresh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>\r\n          </svg>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Estad\xEDsticas R\xE1pidas -->\r\n    <div class="stats-grid">\r\n      <div class="stat-card" (click)="goToCitas()">\r\n        <div class="stat-icon today">\r\n          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>\r\n          </svg>\r\n        </div>\r\n        <div class="stat-content">\r\n          <h3 class="stat-number">{{ stats.citasHoy }}</h3>\r\n          <p class="stat-label">Citas Hoy</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="stat-card" (click)="goToCitas()">\r\n        <div class="stat-icon pending">\r\n          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>\r\n          </svg>\r\n        </div>\r\n        <div class="stat-content">\r\n          <h3 class="stat-number">{{ stats.citasPendientes }}</h3>\r\n          <p class="stat-label">Pendientes</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="stat-card" (click)="goToCitas()">\r\n        <div class="stat-icon week">\r\n          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>\r\n          </svg>\r\n        </div>\r\n        <div class="stat-content">\r\n          <h3 class="stat-number">{{ stats.citasEstaSemana }}</h3>\r\n          <p class="stat-label">Esta Semana</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="stat-card" (click)="goToPacientes()">\r\n        <div class="stat-icon patients">\r\n          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>\r\n          </svg>\r\n        </div>\r\n        <div class="stat-content">\r\n          <h3 class="stat-number">{{ stats.pacientesActivos }}</h3>\r\n          <p class="stat-label">Pacientes Activos</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Dos columnas: Pr\xF3ximas Citas y Acciones R\xE1pidas -->\r\n    <div class="content-columns">\r\n      <!-- Columna izquierda: Pr\xF3ximas Citas -->\r\n      <div class="column">\r\n        <div class="section">\r\n          <div class="section-header">\r\n            <h2 class="section-title">Pr\xF3ximas Citas</h2>\r\n            <button class="btn-secondary" (click)="goToCitas()">\r\n              Ver Todas\r\n            </button>\r\n          </div>\r\n\r\n          <div class="citas-list">\r\n            <div *ngFor="let cita of proximasCitas" class="cita-item">\r\n              <div class="cita-time">\r\n                <span class="time">{{ formatTime(cita.date) }}</span>\r\n                <span class="date">{{ formatDate(cita.date) }}</span>\r\n              </div>\r\n              <div class="cita-info">\r\n                <h4 class="paciente-name">\r\n                  {{ cita.patientId.name }} {{ cita.patientId.lastName }}\r\n                </h4>\r\n                <p class="cita-type">{{ cita.title }}</p>\r\n                <span class="status-badge" [class]="getStatusClass(cita.status)">\r\n                  {{ getStatusDisplay(cita.status) }}\r\n                </span>\r\n              </div>\r\n              <div class="cita-actions">\r\n                <button class="btn-action" \r\n                        (click)="viewCitaDetails(cita)"\r\n                        title="Ver detalles">\r\n                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>\r\n                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>\r\n                  </svg>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf="proximasCitas.length === 0" class="empty-state">\r\n              <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>\r\n              </svg>\r\n              <p>No tienes citas programadas</p>\r\n              <button class="btn-primary" (click)="goToAgenda()">Programar Cita</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Columna derecha: Acciones R\xE1pidas -->\r\n      <div class="column">\r\n        <div class="section">\r\n          <h2 class="section-title">Acciones R\xE1pidas</h2>\r\n          <div class="actions-grid">\r\n            <button class="action-card" (click)="goToCitas()">\r\n              <div class="action-icon">\r\n                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>\r\n                </svg>\r\n              </div>\r\n              <h3>Gesti\xF3n de Citas</h3>\r\n              <p>Administra tus citas y agenda</p>\r\n            </button>\r\n\r\n            <button class="action-card" (click)="goToPacientes()">\r\n              <div class="action-icon">\r\n                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>\r\n                </svg>\r\n              </div>\r\n              <h3>Mis Pacientes</h3>\r\n              <p>Gestiona informaci\xF3n de pacientes</p>\r\n            </button>\r\n\r\n            <button class="action-card" (click)="goToAgenda()">\r\n              <div class="action-icon">\r\n                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>\r\n                </svg>\r\n              </div>\r\n              <h3>Mi Agenda</h3>\r\n              <p>Configura tu disponibilidad</p>\r\n            </button>\r\n\r\n            <!-- ELIMINADO: Bot\xF3n de Mi Perfil -->\r\n          </div>\r\n        </div>\r\n\r\n        <!-- M\xE9tricas Adicionales -->\r\n        <div class="section">\r\n          <h2 class="section-title">M\xE9tricas del Mes</h2>\r\n          <div class="metrics-grid">\r\n            <div class="metric-item">\r\n              <span class="metric-value">{{ stats.citasCompletadasMes }}</span>\r\n              <span class="metric-label">Citas Completadas</span>\r\n            </div>\r\n            <div class="metric-item">\r\n              <span class="metric-value">{{ stats.tasaAsistencia }}%</span>\r\n              <span class="metric-label">Tasa de Asistencia</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>', styles: ['/* src/app/panels/profesional-panel/profesional-panel.scss */\n:host {\n  --primary-color: #2563eb;\n  --primary-hover: #1d4ed8;\n  --secondary-color: #64748b;\n  --secondary-hover: #475569;\n  --success-color: #059669;\n  --warning-color: #d97706;\n  --error-color: #dc2626;\n  --background-color: #f8fafc;\n  --surface-color: #ffffff;\n  --text-primary: #1e293b;\n  --text-secondary: #64748b;\n  --text-muted: #94a3b8;\n  --border-color: #e2e8f0;\n  --border-radius: 12px;\n  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n.professional-panel {\n  min-height: 100vh;\n  background-color: var(--background-color);\n  padding: 24px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\n.loading-state,\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  text-align: center;\n  background: var(--surface-color);\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow-sm);\n  padding: 48px 24px;\n}\n.loading-state .loading-spinner,\n.error-state .loading-spinner {\n  width: 48px;\n  height: 48px;\n  border: 3px solid var(--border-color);\n  border-top: 3px solid var(--primary-color);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-state .error-icon,\n.error-state .error-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.loading-state h3,\n.error-state h3 {\n  color: var(--text-primary);\n  margin-bottom: 8px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.loading-state p,\n.error-state p {\n  color: var(--text-secondary);\n  margin-bottom: 24px;\n  font-size: 16px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.btn-primary,\n.btn-secondary,\n.btn-retry,\n.btn-refresh,\n.btn-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  font-family: inherit;\n}\n.btn-primary:disabled,\n.btn-secondary:disabled,\n.btn-retry:disabled,\n.btn-refresh:disabled,\n.btn-action:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary:focus-visible,\n.btn-secondary:focus-visible,\n.btn-retry:focus-visible,\n.btn-refresh:focus-visible,\n.btn-action:focus-visible {\n  outline: 2px solid var(--primary-color);\n  outline-offset: 2px;\n}\n.btn-primary {\n  background-color: var(--primary-color);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: var(--primary-hover);\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-md);\n}\n.btn-secondary {\n  background-color: transparent;\n  color: var(--primary-color);\n  border: 1px solid var(--border-color);\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #f1f5f9;\n  border-color: var(--primary-color);\n}\n.btn-retry {\n  background-color: var(--primary-color);\n  color: white;\n  padding: 10px 20px;\n}\n.btn-retry:hover {\n  background-color: var(--primary-hover);\n}\n.btn-refresh {\n  background: transparent;\n  border: 1px solid var(--border-color);\n  padding: 10px;\n  border-radius: 8px;\n  color: var(--text-secondary);\n}\n.btn-refresh:hover {\n  background-color: #f8fafc;\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.btn-action {\n  background: transparent;\n  border: 1px solid var(--border-color);\n  padding: 8px;\n  border-radius: 6px;\n  color: var(--text-secondary);\n}\n.btn-action:hover {\n  background-color: #f8fafc;\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.btn-icon,\n.refresh-icon {\n  width: 18px;\n  height: 18px;\n}\n.panel-content {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--surface-color);\n  border-radius: var(--border-radius);\n  padding: 32px;\n  margin-bottom: 24px;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n}\n.panel-header .user-info {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.panel-header .user-info .avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--primary-hover));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 20px;\n}\n.panel-header .user-info .avatar .avatar-initials {\n  line-height: 1;\n}\n.panel-header .user-info .user-details .user-name {\n  color: var(--text-primary);\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n}\n.panel-header .user-info .user-details .user-specialty {\n  color: var(--primary-color);\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 4px 0;\n}\n.panel-header .user-info .user-details .user-contact {\n  color: var(--text-secondary);\n  font-size: 14px;\n  margin: 0;\n}\n.panel-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.stats-grid .stat-card {\n  background: var(--surface-color);\n  border-radius: var(--border-radius);\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n}\n.stats-grid .stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--primary-color);\n}\n.stats-grid .stat-card .stat-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.stats-grid .stat-card .stat-icon svg {\n  width: 24px;\n  height: 24px;\n}\n.stats-grid .stat-card .stat-icon.today {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n}\n.stats-grid .stat-card .stat-icon.pending {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n}\n.stats-grid .stat-card .stat-icon.week {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #2563eb);\n}\n.stats-grid .stat-card .stat-icon.patients {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #7c3aed);\n}\n.stats-grid .stat-card .stat-content .stat-number {\n  color: var(--text-primary);\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  line-height: 1;\n}\n.stats-grid .stat-card .stat-content .stat-label {\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0;\n}\n.content-columns {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 32px;\n  align-items: start;\n}\n.content-columns .column {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.section {\n  background: var(--surface-color);\n  border-radius: var(--border-radius);\n  padding: 24px;\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n}\n.section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.section .section-header .section-title {\n  color: var(--text-primary);\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n.citas-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.citas-list .cita-item {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.citas-list .cita-item:hover {\n  border-color: var(--primary-color);\n  box-shadow: var(--shadow-sm);\n}\n.citas-list .cita-item .cita-time {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 60px;\n}\n.citas-list .cita-item .cita-time .time {\n  color: var(--text-primary);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1;\n}\n.citas-list .cita-item .cita-time .date {\n  color: var(--text-secondary);\n  font-size: 12px;\n  margin-top: 4px;\n}\n.citas-list .cita-item .cita-info {\n  flex: 1;\n}\n.citas-list .cita-item .cita-info .paciente-name {\n  color: var(--text-primary);\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n}\n.citas-list .cita-item .cita-info .cita-type {\n  color: var(--text-secondary);\n  font-size: 14px;\n  margin: 0 0 8px 0;\n}\n.citas-list .cita-item .cita-info .status-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.citas-list .cita-item .cita-info .status-badge.status-scheduled {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.citas-list .cita-item .cita-info .status-badge.status-confirmed {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.citas-list .cita-item .cita-info .status-badge.status-completed {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.citas-list .cita-item .cita-info .status-badge.status-cancelled {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.citas-list .cita-item .cita-actions {\n  display: flex;\n  gap: 8px;\n}\n.citas-list .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 24px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.citas-list .empty-state .empty-icon {\n  width: 48px;\n  height: 48px;\n  margin-bottom: 16px;\n  color: var(--text-muted);\n}\n.citas-list .empty-state p {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n}\n.actions-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n.actions-grid .action-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: transparent;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: left;\n  width: 100%;\n}\n.actions-grid .action-card:hover {\n  border-color: var(--primary-color);\n  background-color: #f8fafc;\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-sm);\n}\n.actions-grid .action-card .action-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--primary-hover));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  flex-shrink: 0;\n}\n.actions-grid .action-card .action-icon svg {\n  width: 20px;\n  height: 20px;\n}\n.actions-grid .action-card h3 {\n  color: var(--text-primary);\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n}\n.actions-grid .action-card p {\n  color: var(--text-secondary);\n  font-size: 14px;\n  margin: 0;\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.metrics-grid .metric-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n}\n.metrics-grid .metric-item .metric-value {\n  color: var(--text-primary);\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.metrics-grid .metric-item .metric-label {\n  color: var(--text-secondary);\n  font-size: 12px;\n  font-weight: 500;\n  text-align: center;\n}\n@media (max-width: 1024px) {\n  .content-columns {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .panel-header {\n    flex-direction: column;\n    gap: 20px;\n    align-items: flex-start;\n  }\n  .panel-header .header-actions {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 768px) {\n  .professional-panel {\n    padding: 16px;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .panel-header {\n    padding: 24px;\n  }\n  .panel-header .user-info {\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n  }\n  .panel-header .header-actions {\n    flex-direction: column;\n    width: 100%;\n  }\n  .panel-header .header-actions .btn-primary {\n    width: 100%;\n    justify-content: center;\n  }\n  .metrics-grid {\n    grid-template-columns: 1fr;\n  }\n  .cita-item {\n    flex-direction: column;\n    align-items: flex-start !important;\n    text-align: left;\n  }\n  .cita-item .cita-time {\n    flex-direction: row !important;\n    gap: 8px;\n  }\n  .cita-item .cita-actions {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .section {\n    padding: 16px;\n  }\n  .action-card {\n    flex-direction: column;\n    text-align: center;\n  }\n  .action-card .action-icon {\n    margin-bottom: 8px;\n  }\n}\n/*# sourceMappingURL=profesional-panel.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfesionalPanel, { className: "ProfesionalPanel", filePath: "src/app/panels/profesional-panel/profesional-panel.ts", lineNumber: 24 });
})();
export {
  ProfesionalPanel
};
//# sourceMappingURL=chunk-ZLTEKFQX.js.map
