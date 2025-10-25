import {
  environment
} from "./chunk-BPEFTJA2.js";
import {
  HttpClient,
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-DEJWN6HZ.js";

// src/app/admin/dashboard/dashboard.ts
function Dashboard_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando datos del dashboard...");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "path", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Error al cargar los datos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 18);
    \u0275\u0275listener("click", function Dashboard_div_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refreshData());
    });
    \u0275\u0275text(9, "Reintentar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function Dashboard_div_14_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", ctx_r1.stats.newUsersThisMonth, " registros");
  }
}
function Dashboard_div_14_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.appointmentStats.totalAppointments, " sesiones");
  }
}
function Dashboard_div_14_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "Pr\xF3ximos 7 d\xEDas");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_div_14_div_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "div", 72);
    \u0275\u0275elementStart(2, "div", 73)(3, "span", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 75);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getAppointmentStatusClass(status_r3._id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(status_r3.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getAppointmentStatusDisplay(status_r3._id));
  }
}
function Dashboard_div_14_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "div", 76);
    \u0275\u0275elementStart(2, "div", 73)(3, "span", 74);
    \u0275\u0275text(4, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 75);
    \u0275\u0275text(6, "Sin citas");
    \u0275\u0275elementEnd()()();
  }
}
function Dashboard_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 19)(2, "div", 20)(3, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 22);
    \u0275\u0275element(5, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 24)(7, "h3", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 26);
    \u0275\u0275text(10, "Usuarios Totales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 27)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 20)(15, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 22);
    \u0275\u0275element(17, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 24)(19, "h3", 25);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 26);
    \u0275\u0275text(22, "Usuarios Activos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 30)(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 20)(27, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 22);
    \u0275\u0275element(29, "path", 32)(30, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "div", 24)(32, "h3", 25);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 26);
    \u0275\u0275text(35, "Nuevos este Mes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, Dashboard_div_14_div_36_Template, 3, 1, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 20)(38, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 22);
    \u0275\u0275element(40, "path", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "div", 24)(42, "h3", 25);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 26);
    \u0275\u0275text(45, "Usuarios con Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 37)(47, "span", 38);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 38);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 38);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(53, "div", 19)(54, "div", 20)(55, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 22);
    \u0275\u0275element(57, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(58, "div", 24)(59, "h3", 25);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p", 26);
    \u0275\u0275text(62, "Citas Totales");
    \u0275\u0275elementEnd();
    \u0275\u0275template(63, Dashboard_div_14_div_63_Template, 3, 1, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 20)(65, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 22);
    \u0275\u0275element(67, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(68, "div", 24)(69, "h3", 25);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p", 26);
    \u0275\u0275text(72, "Citas Hoy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 27)(74, "span");
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "div", 20)(77, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(78, "svg", 22);
    \u0275\u0275element(79, "path", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(80, "div", 24)(81, "h3", 25);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "p", 26);
    \u0275\u0275text(84, "Pr\xF3ximas Sesiones");
    \u0275\u0275elementEnd();
    \u0275\u0275template(85, Dashboard_div_14_div_85_Template, 3, 0, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 20)(87, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(88, "svg", 22);
    \u0275\u0275element(89, "path", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(90, "div", 24)(91, "h3", 25);
    \u0275\u0275text(92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p", 26);
    \u0275\u0275text(94, "Tasa de Asistencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 27)(96, "span");
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(98, "div", 46)(99, "div", 47)(100, "div", 48)(101, "h3", 49);
    \u0275\u0275text(102, "Distribuci\xF3n de Usuarios");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 50)(104, "div", 51)(105, "div", 52);
    \u0275\u0275element(106, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 54)(108, "span", 55);
    \u0275\u0275text(109, "Pacientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "span", 56);
    \u0275\u0275text(111);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(112, "div", 51)(113, "div", 52);
    \u0275\u0275element(114, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "div", 54)(116, "span", 55);
    \u0275\u0275text(117, "Profesionales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "span", 56);
    \u0275\u0275text(119);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(120, "div", 51)(121, "div", 52);
    \u0275\u0275element(122, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "div", 54)(124, "span", 55);
    \u0275\u0275text(125, "Voluntarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "span", 56);
    \u0275\u0275text(127);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(128, "div", 47)(129, "div", 48)(130, "h3", 49);
    \u0275\u0275text(131, "Estado de Citas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "div", 59);
    \u0275\u0275template(133, Dashboard_div_14_div_133_Template, 7, 4, "div", 60)(134, Dashboard_div_14_div_134_Template, 7, 0, "div", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div", 62)(136, "div", 63)(137, "h3", 64);
    \u0275\u0275text(138, "Acciones R\xE1pidas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "div", 65)(140, "a", 66)(141, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(142, "svg", 16);
    \u0275\u0275element(143, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(144, "span", 69);
    \u0275\u0275text(145, "Gestionar Usuarios");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "a", 70)(147, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(148, "svg", 16);
    \u0275\u0275element(149, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(150, "span", 69);
    \u0275\u0275text(151, "Gestionar Sesiones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "a", 66)(153, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(154, "svg", 16);
    \u0275\u0275element(155, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(156, "span", 69);
    \u0275\u0275text(157, "Ver Actividad");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalUsers);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("positive", ctx_r1.getUserGrowth() > 0)("negative", ctx_r1.getUserGrowth() < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.getUserGrowth() > 0 ? "+" : "", "", ctx_r1.getUserGrowth(), "% crecimiento");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.activeUsers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.getActiveGrowth(), "% del total");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.newUsersThisMonth);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.stats.newUsersThisMonth > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.stats.professionalsCount + ctx_r1.stats.patientsCount + ctx_r1.stats.volunteersCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("P: ", ctx_r1.stats.patientsCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Pr: ", ctx_r1.stats.professionalsCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("V: ", ctx_r1.stats.volunteersCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.appointmentStats.totalAppointments);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.appointmentStats.totalAppointments > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.appointmentStats.todayAppointments);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("positive", ctx_r1.appointmentStats.todayAppointments > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.appointmentStats.todayAppointments > 0 ? "+" : "", "", ctx_r1.appointmentStats.todayAppointments, " hoy");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.appointmentStats.upcomingAppointments);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.appointmentStats.upcomingAppointments > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.appointmentStats.attendanceRate, "%");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("positive", ctx_r1.appointmentStats.attendanceRate >= 80)("negative", ctx_r1.appointmentStats.attendanceRate < 80);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.appointmentStats.attendanceRate >= 80 ? "Excelente" : "Por mejorar");
    \u0275\u0275advance(9);
    \u0275\u0275styleProp("width", ctx_r1.calculatePercentage(ctx_r1.stats.patientsCount, ctx_r1.stats.totalUsers), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.stats.patientsCount, " (", ctx_r1.calculatePercentage(ctx_r1.stats.patientsCount, ctx_r1.stats.totalUsers), "%)");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.calculatePercentage(ctx_r1.stats.professionalsCount, ctx_r1.stats.totalUsers), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.stats.professionalsCount, " (", ctx_r1.calculatePercentage(ctx_r1.stats.professionalsCount, ctx_r1.stats.totalUsers), "%)");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.calculatePercentage(ctx_r1.stats.volunteersCount, ctx_r1.stats.totalUsers), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.stats.volunteersCount, " (", ctx_r1.calculatePercentage(ctx_r1.stats.volunteersCount, ctx_r1.stats.totalUsers), "%)");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.appointmentStats.statusStats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.appointmentStats.statusStats.length === 0);
  }
}
var Dashboard = class _Dashboard {
  http;
  stats = {
    totalUsers: 0,
    activeUsers: 0,
    inactiveUsers: 0,
    professionalsCount: 0,
    patientsCount: 0,
    volunteersCount: 0,
    newUsersThisMonth: 0
  };
  appointmentStats = {
    totalAppointments: 0,
    todayAppointments: 0,
    upcomingAppointments: 0,
    attendanceRate: 0,
    statusStats: []
  };
  recentActivity = [];
  isLoading = true;
  error = null;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.isLoading = true;
    this.error = null;
    this.loadUserStats();
  }
  loadUserStats() {
    this.http.get(`${environment.apiUrl}/admin/dashboard/stats`).subscribe({
      next: (response) => {
        if (response.success) {
          this.processUserStats(response.data);
          this.loadAppointmentStats();
        } else {
          this.error = "Error en la respuesta del servidor";
          this.isLoading = false;
        }
      },
      error: (error) => {
        console.error("Error loading user stats:", error);
        this.error = "Error al cargar las estad\xEDsticas de usuarios";
        this.isLoading = false;
      }
    });
  }
  processUserStats(backendData) {
    console.log("Datos de usuarios recibidos:", backendData);
    this.stats = {
      totalUsers: backendData.totalUsers || 0,
      activeUsers: backendData.activeUsers || 0,
      inactiveUsers: backendData.inactiveUsers || 0,
      professionalsCount: backendData.professionalsCount || 0,
      patientsCount: backendData.patientsCount || 0,
      volunteersCount: backendData.volunteersCount || 0,
      newUsersThisMonth: backendData.newUsersThisMonth || 0
    };
  }
  loadAppointmentStats() {
    this.http.get(`${environment.apiUrl}/appointments/admin/stats`).subscribe({
      next: (response) => {
        if (response.success) {
          this.processAppointmentStats(response.data);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading appointment stats:", error);
        this.isLoading = false;
      }
    });
  }
  processAppointmentStats(statsData) {
    console.log("Datos de citas recibidos:", statsData);
    this.appointmentStats.totalAppointments = statsData.totalAppointments || 0;
    this.appointmentStats.todayAppointments = this.calculateTodayAppointments(statsData);
    this.appointmentStats.upcomingAppointments = this.calculateUpcomingAppointments(statsData);
    this.appointmentStats.attendanceRate = this.calculateAttendanceRate(statsData);
    this.appointmentStats.statusStats = statsData.statusStats || [];
  }
  calculateTodayAppointments(statsData) {
    const scheduled = statsData.statusStats?.find((s) => s._id === "scheduled");
    return scheduled?.count || 0;
  }
  calculateUpcomingAppointments(statsData) {
    const scheduled = statsData.statusStats?.find((s) => s._id === "scheduled")?.count || 0;
    const confirmed = statsData.statusStats?.find((s) => s._id === "confirmed")?.count || 0;
    return scheduled + confirmed;
  }
  calculateAttendanceRate(statsData) {
    const completed = statsData.statusStats?.find((s) => s._id === "completed")?.count || 0;
    const total = statsData.totalAppointments || 1;
    if (total === 0)
      return 0;
    return Math.round(completed / total * 100);
  }
  // Método público para usar en el template
  calculatePercentage(part, total) {
    if (!total || total === 0)
      return 0;
    return Math.round(part / total * 100);
  }
  getAppointmentStatusClass(status) {
    const statusClasses = {
      scheduled: "scheduled",
      confirmed: "active",
      in_progress: "new",
      completed: "active",
      cancelled: "inactive"
    };
    return statusClasses[status] || "inactive";
  }
  getAppointmentStatusDisplay(status) {
    const statusDisplay = {
      scheduled: "Programadas",
      confirmed: "Confirmadas",
      in_progress: "En Progreso",
      completed: "Completadas",
      cancelled: "Canceladas"
    };
    return statusDisplay[status] || status;
  }
  // Métodos para las tendencias (usando datos reales)
  getUserGrowth() {
    if (this.stats.totalUsers === 0 || this.stats.newUsersThisMonth === 0)
      return 0;
    const previousUsers = this.stats.totalUsers - this.stats.newUsersThisMonth;
    if (previousUsers <= 0)
      return 100;
    return Math.round(this.stats.newUsersThisMonth / previousUsers * 100);
  }
  getActiveGrowth() {
    return this.calculatePercentage(this.stats.activeUsers, this.stats.totalUsers);
  }
  refreshData() {
    this.loadDashboardData();
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 15, vars: 7, consts: [[1, "dashboard"], [1, "dashboard-header"], [1, "header-content"], [1, "dashboard-title"], [1, "dashboard-subtitle"], [1, "header-actions"], [1, "btn-refresh", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "refresh-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "error-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "btn-retry", 3, "click"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "users"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], [1, "stat-trend"], [1, "stat-icon", "active"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "stat-trend", "positive"], [1, "stat-icon", "new"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 7l5 5m0 0l-5 5m5-5H6"], ["class", "stat-trend positive", 4, "ngIf"], [1, "stat-icon", "distribution"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "stat-breakdown"], [1, "breakdown-item"], [1, "stat-icon", "appointments"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "stat-icon", "today"], [1, "stat-icon", "upcoming"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "stat-icon", "attendance"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "charts-grid"], [1, "chart-card"], [1, "chart-header"], [1, "chart-title"], [1, "distribution-visual"], [1, "dist-item"], [1, "dist-bar"], [1, "dist-fill", "pacientes"], [1, "dist-info"], [1, "dist-label"], [1, "dist-value"], [1, "dist-fill", "profesionales"], [1, "dist-fill", "voluntarios"], [1, "status-grid"], ["class", "status-item", 4, "ngFor", "ngForOf"], ["class", "status-item", 4, "ngIf"], [1, "actions-card"], [1, "actions-header"], [1, "actions-title"], [1, "actions-grid"], ["routerLink", "/admin/users/user-list", 1, "action-item"], [1, "action-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"], [1, "action-label"], ["routerLink", "/admin/appointments", 1, "action-item"], [1, "status-item"], [1, "status-indicator"], [1, "status-info"], [1, "status-value"], [1, "status-label"], [1, "status-indicator", "inactive"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Resumen general del sistema Ma\xB4Care");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function Dashboard_Template_button_click_8_listener() {
        return ctx.refreshData();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 7);
      \u0275\u0275element(10, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, Dashboard_div_12_Template, 4, 0, "div", 9)(13, Dashboard_div_13_Template, 10, 1, "div", 10)(14, Dashboard_div_14_Template, 158, 44, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275classProp("loading", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Cargando..." : "Actualizar", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n\n.dashboard[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 2rem;\n  min-height: 80vh;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 0.5rem 0;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .dashboard-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin: 0;\n}\n.dashboard-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.dashboard-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2980b9;\n  transform: translateY(-1px);\n}\n.dashboard-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.dashboard-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]   .refresh-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.dashboard-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]   .refresh-icon.loading[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  color: #e74c3c;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 1.5rem;\n}\n.btn-retry[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-retry[_ngcontent-%COMP%]:hover {\n  background: #2980b9;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: all 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon.users[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #2980b9);\n}\n.stat-icon.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #229954);\n}\n.stat-icon.new[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n}\n.stat-icon.distribution[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #9b59b6,\n      #8e44ad);\n}\n.stat-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: white;\n}\n.stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-content[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 0.25rem 0;\n  line-height: 1;\n}\n.stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin: 0 0 0.5rem 0;\n  font-size: 0.9rem;\n}\n.stat-content[_ngcontent-%COMP%]   .stat-trend[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.stat-content[_ngcontent-%COMP%]   .stat-trend.positive[_ngcontent-%COMP%] {\n  color: #27ae60;\n}\n.stat-content[_ngcontent-%COMP%]   .stat-trend.negative[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.stat-content[_ngcontent-%COMP%]   .stat-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.stat-content[_ngcontent-%COMP%]   .stat-breakdown[_ngcontent-%COMP%]   .breakdown-item[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  background: #f8f9fa;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 1.5rem;\n}\n.chart-card[_ngcontent-%COMP%], \n.actions-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n.chart-header[_ngcontent-%COMP%], \n.actions-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.chart-header[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%], \n.chart-header[_ngcontent-%COMP%]   .actions-title[_ngcontent-%COMP%], \n.actions-header[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%], \n.actions-header[_ngcontent-%COMP%]   .actions-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0;\n}\n.distribution-visual[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.dist-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dist-item[_ngcontent-%COMP%]   .dist-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.dist-item[_ngcontent-%COMP%]   .dist-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.dist-item[_ngcontent-%COMP%]   .dist-fill.pacientes[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #2980b9);\n}\n.dist-item[_ngcontent-%COMP%]   .dist-fill.profesionales[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #27ae60,\n      #229954);\n}\n.dist-item[_ngcontent-%COMP%]   .dist-fill.voluntarios[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n}\n.dist-item[_ngcontent-%COMP%]   .dist-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: 2;\n}\n.dist-item[_ngcontent-%COMP%]   .dist-info[_ngcontent-%COMP%]   .dist-label[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 500;\n}\n.dist-item[_ngcontent-%COMP%]   .dist-info[_ngcontent-%COMP%]   .dist-value[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.status-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.status-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n}\n.status-item[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.status-item[_ngcontent-%COMP%]   .status-indicator.active[_ngcontent-%COMP%] {\n  background: #27ae60;\n}\n.status-item[_ngcontent-%COMP%]   .status-indicator.inactive[_ngcontent-%COMP%] {\n  background: #e74c3c;\n}\n.status-item[_ngcontent-%COMP%]   .status-indicator.new[_ngcontent-%COMP%] {\n  background: #f39c12;\n}\n.status-item[_ngcontent-%COMP%]   .status-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.status-item[_ngcontent-%COMP%]   .status-info[_ngcontent-%COMP%]   .status-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.status-item[_ngcontent-%COMP%]   .status-info[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n.action-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.3s ease;\n}\n.action-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateX(4px);\n}\n.action-item[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #3498db;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-item[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: white;\n}\n.action-item[_ngcontent-%COMP%]   .action-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2c3e50;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .charts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .dashboard[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .distribution-visual[_ngcontent-%COMP%]   .dist-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .distribution-visual[_ngcontent-%COMP%]   .dist-item[_ngcontent-%COMP%]   .dist-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.25rem;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard-header[_ngcontent-%COMP%]   .dashboard-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .stat-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n  .stat-content[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n.stat-icon.appointments[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #9b59b6,\n      #8e44ad);\n}\n.stat-icon.today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e74c3c,\n      #c0392b);\n}\n.stat-icon.upcoming[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n}\n.stat-icon.attendance[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #229954);\n}\n.status-indicator.scheduled[_ngcontent-%COMP%] {\n  background: #f39c12;\n}\n/*# sourceMappingURL=dashboard.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="dashboard">\r
  <!-- Header -->\r
  <div class="dashboard-header">\r
    <div class="header-content">\r
      <h1 class="dashboard-title">Dashboard</h1>\r
      <p class="dashboard-subtitle">Resumen general del sistema Ma\xB4Care</p>\r
    </div>\r
    <div class="header-actions">\r
      <button class="btn-refresh" (click)="refreshData()" [disabled]="isLoading">\r
        <svg class="refresh-icon" [class.loading]="isLoading" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
        </svg>\r
        {{ isLoading ? 'Cargando...' : 'Actualizar' }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Estados de carga y error -->\r
  <div *ngIf="isLoading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Cargando datos del dashboard...</p>\r
  </div>\r
\r
  <div *ngIf="error && !isLoading" class="error-state">\r
    <div class="error-icon">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
      </svg>\r
    </div>\r
    <h3>Error al cargar los datos</h3>\r
    <p>{{ error }}</p>\r
    <button class="btn-retry" (click)="refreshData()">Reintentar</button>\r
  </div>\r
\r
  <!-- Contenido principal -->\r
  <div *ngIf="!isLoading && !error">\r
    <!-- Estad\xEDsticas Principales - USUARIOS -->\r
    <div class="stats-grid">\r
      <!-- Usuarios Totales -->\r
      <div class="stat-card">\r
        <div class="stat-icon users">\r
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>\r
          </svg>\r
        </div>\r
        <div class="stat-content">\r
          <h3 class="stat-value">{{ stats.totalUsers }}</h3>\r
          <p class="stat-label">Usuarios Totales</p>\r
          <div class="stat-trend" [class.positive]="getUserGrowth() > 0" [class.negative]="getUserGrowth() < 0">\r
            <span>{{ getUserGrowth() > 0 ? '+' : '' }}{{ getUserGrowth() }}% crecimiento</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Usuarios Activos -->\r
      <div class="stat-card">\r
        <div class="stat-icon active">\r
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>\r
          </svg>\r
        </div>\r
        <div class="stat-content">\r
          <h3 class="stat-value">{{ stats.activeUsers }}</h3>\r
          <p class="stat-label">Usuarios Activos</p>\r
          <div class="stat-trend positive">\r
            <span>{{ getActiveGrowth() }}% del total</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Nuevos este Mes -->\r
      <div class="stat-card">\r
        <div class="stat-icon new">\r
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>\r
          </svg>\r
        </div>\r
        <div class="stat-content">\r
          <h3 class="stat-value">{{ stats.newUsersThisMonth }}</h3>\r
          <p class="stat-label">Nuevos este Mes</p>\r
          <div class="stat-trend positive" *ngIf="stats.newUsersThisMonth > 0">\r
            <span>+{{ stats.newUsersThisMonth }} registros</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Distribuci\xF3n de Roles -->\r
      <div class="stat-card">\r
        <div class="stat-icon distribution">\r
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r
          </svg>\r
        </div>\r
        <div class="stat-content">\r
          <h3 class="stat-value">{{ stats.professionalsCount + stats.patientsCount + stats.volunteersCount }}</h3>\r
          <p class="stat-label">Usuarios con Rol</p>\r
          <div class="stat-breakdown">\r
            <span class="breakdown-item">P: {{ stats.patientsCount }}</span>\r
            <span class="breakdown-item">Pr: {{ stats.professionalsCount }}</span>\r
            <span class="breakdown-item">V: {{ stats.volunteersCount }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Estad\xEDsticas Principales - CITAS -->\r
    <div class="stats-grid">\r
      <!-- Citas Totales -->\r
      <div class="stat-card">\r
        <div class="stat-icon appointments">\r
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
          </svg>\r
        </div>\r
        <div class="stat-content">\r
          <h3 class="stat-value">{{ appointmentStats.totalAppointments }}</h3>\r
          <p class="stat-label">Citas Totales</p>\r
          <div class="stat-trend positive" *ngIf="appointmentStats.totalAppointments > 0">\r
            <span>{{ appointmentStats.totalAppointments }} sesiones</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Citas Hoy -->\r
      <div class="stat-card">\r
        <div class="stat-icon today">\r
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
        </div>\r
        <div class="stat-content">\r
          <h3 class="stat-value">{{ appointmentStats.todayAppointments }}</h3>\r
          <p class="stat-label">Citas Hoy</p>\r
          <div class="stat-trend" [class.positive]="appointmentStats.todayAppointments > 0">\r
            <span>{{ appointmentStats.todayAppointments > 0 ? '+' : '' }}{{ appointmentStats.todayAppointments }} hoy</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Pr\xF3ximas Sesiones -->\r
      <div class="stat-card">\r
        <div class="stat-icon upcoming">\r
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
          </svg>\r
        </div>\r
        <div class="stat-content">\r
          <h3 class="stat-value">{{ appointmentStats.upcomingAppointments }}</h3>\r
          <p class="stat-label">Pr\xF3ximas Sesiones</p>\r
          <div class="stat-trend positive" *ngIf="appointmentStats.upcomingAppointments > 0">\r
            <span>Pr\xF3ximos 7 d\xEDas</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Tasa de Asistencia -->\r
      <div class="stat-card">\r
        <div class="stat-icon attendance">\r
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
        </div>\r
        <div class="stat-content">\r
          <h3 class="stat-value">{{ appointmentStats.attendanceRate }}%</h3>\r
          <p class="stat-label">Tasa de Asistencia</p>\r
          <div class="stat-trend" [class.positive]="appointmentStats.attendanceRate >= 80" [class.negative]="appointmentStats.attendanceRate < 80">\r
            <span>{{ appointmentStats.attendanceRate >= 80 ? 'Excelente' : 'Por mejorar' }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- M\xE9tricas Detalladas -->\r
    <div class="charts-grid">\r
      <!-- Tarjeta de Distribuci\xF3n -->\r
      <div class="chart-card">\r
        <div class="chart-header">\r
          <h3 class="chart-title">Distribuci\xF3n de Usuarios</h3>\r
        </div>\r
        <div class="distribution-visual">\r
          <div class="dist-item">\r
            <div class="dist-bar">\r
              <div class="dist-fill pacientes" [style.width.%]="calculatePercentage(stats.patientsCount, stats.totalUsers)"></div>\r
            </div>\r
            <div class="dist-info">\r
              <span class="dist-label">Pacientes</span>\r
              <span class="dist-value">{{ stats.patientsCount }} ({{ calculatePercentage(stats.patientsCount, stats.totalUsers) }}%)</span>\r
            </div>\r
          </div>\r
          <div class="dist-item">\r
            <div class="dist-bar">\r
              <div class="dist-fill profesionales" [style.width.%]="calculatePercentage(stats.professionalsCount, stats.totalUsers)"></div>\r
            </div>\r
            <div class="dist-info">\r
              <span class="dist-label">Profesionales</span>\r
              <span class="dist-value">{{ stats.professionalsCount }} ({{ calculatePercentage(stats.professionalsCount, stats.totalUsers) }}%)</span>\r
            </div>\r
          </div>\r
          <div class="dist-item">\r
            <div class="dist-bar">\r
              <div class="dist-fill voluntarios" [style.width.%]="calculatePercentage(stats.volunteersCount, stats.totalUsers)"></div>\r
            </div>\r
            <div class="dist-info">\r
              <span class="dist-label">Voluntarios</span>\r
              <span class="dist-value">{{ stats.volunteersCount }} ({{ calculatePercentage(stats.volunteersCount, stats.totalUsers) }}%)</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Estado de Citas -->\r
      <div class="chart-card">\r
        <div class="chart-header">\r
          <h3 class="chart-title">Estado de Citas</h3>\r
        </div>\r
        <div class="status-grid">\r
          <div class="status-item" *ngFor="let status of appointmentStats.statusStats">\r
            <div class="status-indicator" [class]="getAppointmentStatusClass(status._id)"></div>\r
            <div class="status-info">\r
              <span class="status-value">{{ status.count }}</span>\r
              <span class="status-label">{{ getAppointmentStatusDisplay(status._id) }}</span>\r
            </div>\r
          </div>\r
          <div class="status-item" *ngIf="appointmentStats.statusStats.length === 0">\r
            <div class="status-indicator inactive"></div>\r
            <div class="status-info">\r
              <span class="status-value">0</span>\r
              <span class="status-label">Sin citas</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Acciones R\xE1pidas -->\r
      <div class="actions-card">\r
        <div class="actions-header">\r
          <h3 class="actions-title">Acciones R\xE1pidas</h3>\r
        </div>\r
        <div class="actions-grid">\r
          <a routerLink="/admin/users/user-list" class="action-item">\r
            <div class="action-icon">\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>\r
              </svg>\r
            </div>\r
            <span class="action-label">Gestionar Usuarios</span>\r
          </a>\r
          <a routerLink="/admin/appointments" class="action-item">\r
            <div class="action-icon">\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
              </svg>\r
            </div>\r
            <span class="action-label">Gestionar Sesiones</span>\r
          </a>\r
          <a routerLink="/admin/users/user-list" class="action-item">\r
            <div class="action-icon">\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>\r
              </svg>\r
            </div>\r
            <span class="action-label">Ver Actividad</span>\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/admin/dashboard/dashboard.scss */\n.dashboard {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 2rem;\n  min-height: 80vh;\n}\n.dashboard-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.dashboard-header .header-content .dashboard-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 0.5rem 0;\n}\n.dashboard-header .header-content .dashboard-subtitle {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin: 0;\n}\n.dashboard-header .btn-refresh {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.dashboard-header .btn-refresh:hover:not(:disabled) {\n  background: #2980b9;\n  transform: translateY(-1px);\n}\n.dashboard-header .btn-refresh:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.dashboard-header .btn-refresh .refresh-icon {\n  width: 16px;\n  height: 16px;\n}\n.dashboard-header .btn-refresh .refresh-icon.loading {\n  animation: spin 1s linear infinite;\n}\n.loading-state,\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.loading-state .loading-spinner,\n.error-state .loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-state .error-icon,\n.error-state .error-icon {\n  width: 48px;\n  height: 48px;\n  color: #e74c3c;\n  margin-bottom: 1rem;\n}\n.loading-state h3,\n.error-state h3 {\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.loading-state p,\n.error-state p {\n  color: #6c757d;\n  margin-bottom: 1.5rem;\n}\n.btn-retry {\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-retry:hover {\n  background: #2980b9;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card {\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  transition: all 0.3s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stat-icon {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon.users {\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #2980b9);\n}\n.stat-icon.active {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #229954);\n}\n.stat-icon.new {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n}\n.stat-icon.distribution {\n  background:\n    linear-gradient(\n      135deg,\n      #9b59b6,\n      #8e44ad);\n}\n.stat-icon .icon {\n  width: 24px;\n  height: 24px;\n  color: white;\n}\n.stat-content {\n  flex: 1;\n}\n.stat-content .stat-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 0.25rem 0;\n  line-height: 1;\n}\n.stat-content .stat-label {\n  color: #6c757d;\n  margin: 0 0 0.5rem 0;\n  font-size: 0.9rem;\n}\n.stat-content .stat-trend {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.stat-content .stat-trend.positive {\n  color: #27ae60;\n}\n.stat-content .stat-trend.negative {\n  color: #e74c3c;\n}\n.stat-content .stat-breakdown {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.stat-content .stat-breakdown .breakdown-item {\n  font-size: 0.8rem;\n  color: #6c757d;\n  background: #f8f9fa;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n}\n.charts-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 1.5rem;\n}\n.chart-card,\n.actions-card {\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n.chart-header,\n.actions-header {\n  margin-bottom: 1.5rem;\n}\n.chart-header .chart-title,\n.chart-header .actions-title,\n.actions-header .chart-title,\n.actions-header .actions-title {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0;\n}\n.distribution-visual {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.dist-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.dist-item .dist-bar {\n  flex: 1;\n  height: 8px;\n  background: #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.dist-item .dist-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.dist-item .dist-fill.pacientes {\n  background:\n    linear-gradient(\n      90deg,\n      #3498db,\n      #2980b9);\n}\n.dist-item .dist-fill.profesionales {\n  background:\n    linear-gradient(\n      90deg,\n      #27ae60,\n      #229954);\n}\n.dist-item .dist-fill.voluntarios {\n  background:\n    linear-gradient(\n      90deg,\n      #f39c12,\n      #e67e22);\n}\n.dist-item .dist-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: 2;\n}\n.dist-item .dist-info .dist-label {\n  color: #2c3e50;\n  font-weight: 500;\n}\n.dist-item .dist-info .dist-value {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.status-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.status-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n}\n.status-item .status-indicator {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.status-item .status-indicator.active {\n  background: #27ae60;\n}\n.status-item .status-indicator.inactive {\n  background: #e74c3c;\n}\n.status-item .status-indicator.new {\n  background: #f39c12;\n}\n.status-item .status-info {\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.status-item .status-info .status-value {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.status-item .status-info .status-label {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.actions-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n.action-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.3s ease;\n}\n.action-item:hover {\n  background: #e9ecef;\n  transform: translateX(4px);\n}\n.action-item .action-icon {\n  width: 40px;\n  height: 40px;\n  background: #3498db;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-item .action-icon svg {\n  width: 20px;\n  height: 20px;\n  color: white;\n}\n.action-item .action-label {\n  font-weight: 500;\n  color: #2c3e50;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .charts-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .dashboard {\n    padding: 1rem;\n  }\n  .dashboard-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .dashboard-header .dashboard-title {\n    font-size: 2rem;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .stat-card {\n    padding: 1.25rem;\n  }\n  .distribution-visual .dist-item {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .distribution-visual .dist-item .dist-info {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.25rem;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard-header .dashboard-title {\n    font-size: 1.75rem;\n  }\n  .stat-icon {\n    width: 50px;\n    height: 50px;\n  }\n  .stat-icon .icon {\n    width: 20px;\n    height: 20px;\n  }\n  .stat-content .stat-value {\n    font-size: 1.75rem;\n  }\n}\n.stat-icon.appointments {\n  background:\n    linear-gradient(\n      135deg,\n      #9b59b6,\n      #8e44ad);\n}\n.stat-icon.today {\n  background:\n    linear-gradient(\n      135deg,\n      #e74c3c,\n      #c0392b);\n}\n.stat-icon.upcoming {\n  background:\n    linear-gradient(\n      135deg,\n      #f39c12,\n      #e67e22);\n}\n.stat-icon.attendance {\n  background:\n    linear-gradient(\n      135deg,\n      #27ae60,\n      #229954);\n}\n.status-indicator.scheduled {\n  background: #f39c12;\n}\n/*# sourceMappingURL=dashboard.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/admin/dashboard/dashboard.ts", lineNumber: 40 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-VMGAFJ2N.js.map
