import {
  ProfessionalService
} from "./chunk-KCFJDGWD.js";
import {
  AuthService
} from "./chunk-A2PELOIP.js";
import "./chunk-BPEFTJA2.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-6P7TFCYF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VTU4YTDN.js";
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DEJWN6HZ.js";

// src/app/professional/appointments/appointments.ts
function Appointments_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando citas...");
    \u0275\u0275elementEnd()();
  }
}
function Appointments_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Error al cargar las citas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 27);
    \u0275\u0275listener("click", function Appointments_div_41_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCitas());
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
function Appointments_div_42_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No se encontraron citas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No hay citas que coincidan con tus filtros actuales.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 36);
    \u0275\u0275listener("click", function Appointments_div_42_div_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.limpiarFiltros());
    });
    \u0275\u0275text(8, "Ver todas las citas");
    \u0275\u0275elementEnd()();
  }
}
function Appointments_div_42_div_5_div_1_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cita_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cita_r5.patientId.phone);
  }
}
function Appointments_div_42_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 45)(10, "h3", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 47);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 48)(15, "div", 49);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 50)(18, "h4");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, Appointments_div_42_div_5_div_1_p_22_Template, 2, 1, "p", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 52)(24, "button", 53);
    \u0275\u0275listener("click", function Appointments_div_42_div_5_div_1_Template_button_click_24_listener() {
      const cita_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewCitaDetails(cita_r5));
    });
    \u0275\u0275text(25, " Ver Detalles ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cita_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(cita_r5.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(cita_r5.date));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(cita_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusDisplay(cita_r5.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cita_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cita_r5.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", cita_r5.patientId.name[0], "", cita_r5.patientId.lastName[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", cita_r5.patientId.name, " ", cita_r5.patientId.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cita_r5.patientId.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cita_r5.patientId.phone);
  }
}
function Appointments_div_42_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, Appointments_div_42_div_5_div_1_Template, 26, 13, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredCitas);
  }
}
function Appointments_div_42_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "button", 55);
    \u0275\u0275listener("click", function Appointments_div_42_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pagination.currentPage - 1));
    });
    \u0275\u0275text(2, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 55);
    \u0275\u0275listener("click", function Appointments_div_42_div_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pagination.currentPage + 1));
    });
    \u0275\u0275text(6, " Siguiente ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.pagination.hasPrev);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" P\xE1gina ", ctx_r1.pagination.currentPage, " de ", ctx_r1.pagination.totalPages, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.pagination.hasNext);
  }
}
function Appointments_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, Appointments_div_42_div_4_Template, 9, 0, "div", 30)(5, Appointments_div_42_div_5_Template, 2, 1, "div", 31)(6, Appointments_div_42_div_6_Template, 7, 4, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Citas Programadas (", ctx_r1.filteredCitas.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredCitas.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredCitas.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagination.totalPages > 1);
  }
}
var Appointments = class _Appointments {
  professionalService = inject(ProfessionalService);
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  // Lista de citas
  citas = [];
  filteredCitas = [];
  // Filtros
  filtros = {
    status: "",
    search: "",
    dateFrom: "",
    dateTo: ""
  };
  // Estados
  isLoading = true;
  error = "";
  // Paginación - ACTUALIZADO para usar la estructura correcta
  pagination = {
    currentPage: 1,
    totalPages: 1,
    totalCitas: 0,
    hasNext: false,
    hasPrev: false
  };
  destroy$ = new Subject();
  ngOnInit() {
    return __async(this, null, function* () {
      this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
        this.filtros.status = params["status"] || "";
        this.filtros.search = params["search"] || "";
        this.pagination.currentPage = parseInt(params["page"]) || 1;
        this.loadCitas();
      });
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // ✅ CAMBIADO A PÚBLICO - para que el template pueda llamarlo
  loadCitas() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.error = "";
      try {
        const response = yield this.professionalService.getAppointments({
          page: this.pagination.currentPage,
          limit: 10,
          status: this.filtros.status,
          dateFrom: this.filtros.dateFrom,
          dateTo: this.filtros.dateTo
        }).toPromise();
        if (response?.success && response.data) {
          this.citas = response.data.docs || [];
          this.filteredCitas = [...this.citas];
          this.pagination = {
            currentPage: response.data.page || 1,
            totalPages: response.data.totalPages || 1,
            totalCitas: response.data.totalDocs || 0,
            hasNext: response.data.hasNextPage || false,
            hasPrev: response.data.hasPrevPage || false
          };
          this.aplicarFiltroBusqueda();
        } else {
          this.error = "Error al cargar las citas";
        }
      } catch (error) {
        console.error("Error loading appointments:", error);
        this.error = "Error al cargar las citas. Por favor, intenta nuevamente.";
        this.citas = [];
        this.filteredCitas = [];
      } finally {
        this.isLoading = false;
      }
    });
  }
  aplicarFiltroBusqueda() {
    if (!this.filtros.search) {
      this.filteredCitas = [...this.citas];
      return;
    }
    const searchTerm = this.filtros.search.toLowerCase();
    this.filteredCitas = this.citas.filter((cita) => cita.title.toLowerCase().includes(searchTerm) || cita.patientId.name.toLowerCase().includes(searchTerm) || cita.patientId.lastName.toLowerCase().includes(searchTerm) || cita.type.toLowerCase().includes(searchTerm));
  }
  // Navegación
  goToDashboard() {
    this.router.navigate(["/Panel-profesional"]);
  }
  viewCitaDetails(cita) {
    this.router.navigate(["/profesional/citas", cita._id]);
  }
  // Filtros
  onFiltroChange() {
    this.pagination.currentPage = 1;
    this.actualizarQueryParams();
  }
  onSearchChange() {
    this.aplicarFiltroBusqueda();
  }
  limpiarFiltros() {
    this.filtros = {
      status: "",
      search: "",
      dateFrom: "",
      dateTo: ""
    };
    this.pagination.currentPage = 1;
    this.actualizarQueryParams();
  }
  actualizarQueryParams() {
    const queryParams = {};
    if (this.filtros.status)
      queryParams.status = this.filtros.status;
    if (this.filtros.search)
      queryParams.search = this.filtros.search;
    if (this.pagination.currentPage > 1)
      queryParams.page = this.pagination.currentPage;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: "merge"
    });
  }
  // Paginación
  goToPage(page) {
    if (page >= 1 && page <= this.pagination.totalPages) {
      this.pagination.currentPage = page;
      this.actualizarQueryParams();
    }
  }
  // Helper functions
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
        month: "short",
        year: "numeric"
      });
    } catch {
      return "Fecha inv\xE1lida";
    }
  }
  formatDateTime(dateString) {
    try {
      return new Date(dateString).toLocaleString("es-ES", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return "Fecha inv\xE1lida";
    }
  }
  getStatusDisplay(status) {
    const statusMap = {
      "scheduled": "Programada",
      "confirmed": "Confirmada",
      "in_progress": "En Progreso",
      "completed": "Completada",
      "cancelled": "Cancelada",
      "rescheduled": "Reprogramada",
      "no_show": "No Se Present\xF3"
    };
    return statusMap[status] || status;
  }
  getStatusClass(status) {
    const classMap = {
      "scheduled": "status-scheduled",
      "confirmed": "status-confirmed",
      "in_progress": "status-in-progress",
      "completed": "status-completed",
      "cancelled": "status-cancelled",
      "rescheduled": "status-rescheduled",
      "no_show": "status-no-show"
    };
    return classMap[status] || "";
  }
  getStatusBadgeClass(status) {
    const classMap = {
      "scheduled": "badge-scheduled",
      "confirmed": "badge-confirmed",
      "in_progress": "badge-in-progress",
      "completed": "badge-completed",
      "cancelled": "badge-cancelled",
      "rescheduled": "badge-rescheduled",
      "no_show": "badge-no-show"
    };
    return classMap[status] || "badge-default";
  }
  static \u0275fac = function Appointments_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Appointments)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Appointments, selectors: [["app-appointments"]], decls: 43, vars: 7, consts: [[1, "appointments-page"], [1, "page-header"], [1, "header-content"], [1, "btn-back", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "filters-section"], [1, "filters-grid"], [1, "filter-group"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "scheduled"], ["value", "confirmed"], ["value", "completed"], ["value", "cancelled"], ["type", "date", 3, "ngModelChange", "change", "ngModel"], [1, "filter-group", "search-group"], ["type", "text", "placeholder", "Buscar por paciente, t\xEDtulo...", 3, "ngModelChange", "input", "ngModel"], [1, "filter-actions"], [1, "btn-clear", 3, "click"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "citas-container", 4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "error-icon"], [1, "btn-retry", 3, "click"], [1, "citas-container"], [1, "citas-header"], ["class", "empty-state", 4, "ngIf"], ["class", "citas-list", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "empty-state"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "empty-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "btn-primary", 3, "click"], [1, "citas-list"], ["class", "cita-card", 4, "ngFor", "ngForOf"], [1, "cita-card"], [1, "cita-header"], [1, "cita-time"], [1, "time"], [1, "date"], [1, "status-badge"], [1, "cita-content"], [1, "cita-title"], [1, "cita-type"], [1, "patient-info"], [1, "patient-avatar"], [1, "patient-details"], [4, "ngIf"], [1, "cita-actions"], [1, "btn-secondary", 3, "click"], [1, "pagination"], [1, "btn-pagination", 3, "click", "disabled"], [1, "pagination-info"]], template: function Appointments_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function Appointments_Template_button_click_3_listener() {
        return ctx.goToDashboard();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Volver al Panel ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8, "Gesti\xF3n de Citas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "label");
      \u0275\u0275text(13, "Estado");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function Appointments_Template_select_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtros.status, $event) || (ctx.filtros.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Appointments_Template_select_change_14_listener() {
        return ctx.onFiltroChange();
      });
      \u0275\u0275elementStart(15, "option", 10);
      \u0275\u0275text(16, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 11);
      \u0275\u0275text(18, "Programadas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 12);
      \u0275\u0275text(20, "Confirmadas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 13);
      \u0275\u0275text(22, "Completadas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 14);
      \u0275\u0275text(24, "Canceladas");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 8)(26, "label");
      \u0275\u0275text(27, "Desde");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function Appointments_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtros.dateFrom, $event) || (ctx.filtros.dateFrom = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Appointments_Template_input_change_28_listener() {
        return ctx.onFiltroChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 8)(30, "label");
      \u0275\u0275text(31, "Hasta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function Appointments_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtros.dateTo, $event) || (ctx.filtros.dateTo = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Appointments_Template_input_change_32_listener() {
        return ctx.onFiltroChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 16)(34, "label");
      \u0275\u0275text(35, "Buscar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function Appointments_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtros.search, $event) || (ctx.filtros.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function Appointments_Template_input_input_36_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 18)(38, "button", 19);
      \u0275\u0275listener("click", function Appointments_Template_button_click_38_listener() {
        return ctx.limpiarFiltros();
      });
      \u0275\u0275text(39, " Limpiar Filtros ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(40, Appointments_div_40_Template, 4, 0, "div", 20)(41, Appointments_div_41_Template, 9, 1, "div", 21)(42, Appointments_div_42_Template, 7, 4, "div", 22);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtros.status);
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtros.dateFrom);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtros.dateTo);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtros.search);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.appointments-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #64748b;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {\n  background: #475569;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n}\n.filters-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  column-gap: 24px;\n  row-gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  align-items: end;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #374151;\n  font-weight: 500;\n  font-size: 14px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group.search-group[_ngcontent-%COMP%] {\n  min-width: 320px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   .btn-clear[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background: transparent;\n  color: #64748b;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   .btn-clear[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #64748b;\n}\n@media (min-width: 992px) {\n  .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 220px 1fr 1fr 2fr auto;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]:nth-child(2), \n   .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]:nth-child(3) {\n    min-width: 220px;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group.search-group[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  text-align: center;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f1f5f9;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1e293b;\n  margin-bottom: 8px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 20px;\n}\n.loading-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.loading-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover, \n.error-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.citas-container[_ngcontent-%COMP%]   .citas-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.citas-container[_ngcontent-%COMP%]   .citas-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.citas-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 24px;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.citas-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  color: #94a3b8;\n  margin-bottom: 16px;\n}\n.citas-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #374151;\n  margin-bottom: 8px;\n}\n.citas-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 20px;\n}\n.citas-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.citas-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.citas-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.cita-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n  transition: all 0.2s ease;\n}\n.cita-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border-color: #3b82f6;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-header[_ngcontent-%COMP%]   .cita-time[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-header[_ngcontent-%COMP%]   .cita-time[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-header[_ngcontent-%COMP%]   .cita-time[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-header[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-header[_ngcontent-%COMP%]   .status-badge.badge-scheduled[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-header[_ngcontent-%COMP%]   .status-badge.badge-confirmed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-header[_ngcontent-%COMP%]   .status-badge.badge-completed[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-header[_ngcontent-%COMP%]   .status-badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-header[_ngcontent-%COMP%]   .status-badge.badge-pending[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-content[_ngcontent-%COMP%]   .cita-title[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-content[_ngcontent-%COMP%]   .cita-type[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n  margin: 0 0 16px 0;\n  text-transform: capitalize;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-content[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-content[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #1d4ed8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-content[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-content[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n  margin: 0;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-content[_ngcontent-%COMP%]   .cita-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: transparent;\n  color: #3b82f6;\n  border: 1px solid #3b82f6;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.cita-card[_ngcontent-%COMP%]   .cita-content[_ngcontent-%COMP%]   .cita-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #3b82f6;\n  color: white;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 0;\n}\n.pagination[_ngcontent-%COMP%]   .btn-pagination[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.pagination[_ngcontent-%COMP%]   .btn-pagination[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.pagination[_ngcontent-%COMP%]   .btn-pagination[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .appointments-page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    column-gap: 0;\n    row-gap: 12px;\n  }\n  .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group.search-group[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .cita-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .cita-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 12px;\n  }\n  .patient-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n}\n/*# sourceMappingURL=appointments.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Appointments, [{
    type: Component,
    args: [{ selector: "app-appointments", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: '<div class="appointments-page">\r\n  <!-- Header -->\r\n  <div class="page-header">\r\n    <div class="header-content">\r\n      <button class="btn-back" (click)="goToDashboard()">\r\n        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>\r\n        </svg>\r\n        Volver al Panel\r\n      </button>\r\n      <h1>Gesti\xF3n de Citas</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Filtros -->\r\n  <div class="filters-section">\r\n    <div class="filters-grid">\r\n      <div class="filter-group">\r\n        <label>Estado</label>\r\n        <select [(ngModel)]="filtros.status" (change)="onFiltroChange()">\r\n          <option value="">Todos los estados</option>\r\n          <option value="scheduled">Programadas</option>\r\n          <option value="confirmed">Confirmadas</option>\r\n          <option value="completed">Completadas</option>\r\n          <option value="cancelled">Canceladas</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class="filter-group">\r\n        <label>Desde</label>\r\n        <input type="date" [(ngModel)]="filtros.dateFrom" (change)="onFiltroChange()">\r\n      </div>\r\n\r\n      <div class="filter-group">\r\n        <label>Hasta</label>\r\n        <input type="date" [(ngModel)]="filtros.dateTo" (change)="onFiltroChange()">\r\n      </div>\r\n\r\n      <div class="filter-group search-group">\r\n        <label>Buscar</label>\r\n        <input \r\n          type="text" \r\n          [(ngModel)]="filtros.search" \r\n          (input)="onSearchChange()"\r\n          placeholder="Buscar por paciente, t\xEDtulo..."\r\n        >\r\n      </div>\r\n\r\n      <div class="filter-actions">\r\n        <button class="btn-clear" (click)="limpiarFiltros()">\r\n          Limpiar Filtros\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Loading State -->\r\n  <div *ngIf="isLoading" class="loading-state">\r\n    <div class="loading-spinner"></div>\r\n    <p>Cargando citas...</p>\r\n  </div>\r\n\r\n  <!-- Error State -->\r\n  <div *ngIf="error && !isLoading" class="error-state">\r\n    <div class="error-icon">\u26A0\uFE0F</div>\r\n    <h3>Error al cargar las citas</h3>\r\n    <p>{{ error }}</p>\r\n    <!-- \u2705 CORREGIDO: loadCitas ahora es p\xFAblico -->\r\n    <button class="btn-retry" (click)="loadCitas()">Reintentar</button>\r\n  </div>\r\n\r\n  <!-- Citas List -->\r\n  <div *ngIf="!isLoading && !error" class="citas-container">\r\n    <div class="citas-header">\r\n      <h2>Citas Programadas ({{ filteredCitas.length }})</h2>\r\n    </div>\r\n\r\n    <div *ngIf="filteredCitas.length === 0" class="empty-state">\r\n      <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>\r\n      </svg>\r\n      <h3>No se encontraron citas</h3>\r\n      <p>No hay citas que coincidan con tus filtros actuales.</p>\r\n      <button class="btn-primary" (click)="limpiarFiltros()">Ver todas las citas</button>\r\n    </div>\r\n\r\n    <div *ngIf="filteredCitas.length > 0" class="citas-list">\r\n      <div *ngFor="let cita of filteredCitas" class="cita-card">\r\n        <div class="cita-header">\r\n          <div class="cita-time">\r\n            <span class="time">{{ formatTime(cita.date) }}</span>\r\n            <span class="date">{{ formatDate(cita.date) }}</span>\r\n          </div>\r\n          <span class="status-badge" [class]="getStatusBadgeClass(cita.status)">\r\n            {{ getStatusDisplay(cita.status) }}\r\n          </span>\r\n        </div>\r\n\r\n        <div class="cita-content">\r\n          <h3 class="cita-title">{{ cita.title }}</h3>\r\n          <p class="cita-type">{{ cita.type }}</p>\r\n          \r\n          <div class="patient-info">\r\n            <div class="patient-avatar">\r\n              {{ cita.patientId.name[0] }}{{ cita.patientId.lastName[0] }}\r\n            </div>\r\n            <div class="patient-details">\r\n              <h4>{{ cita.patientId.name }} {{ cita.patientId.lastName }}</h4>\r\n              <p>{{ cita.patientId.email }}</p>\r\n              <p *ngIf="cita.patientId.phone">{{ cita.patientId.phone }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="cita-actions">\r\n            <button class="btn-secondary" (click)="viewCitaDetails(cita)">\r\n              Ver Detalles\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Paginaci\xF3n -->\r\n    <div *ngIf="pagination.totalPages > 1" class="pagination">\r\n      <button \r\n        class="btn-pagination" \r\n        [disabled]="!pagination.hasPrev"\r\n        (click)="goToPage(pagination.currentPage - 1)">\r\n        Anterior\r\n      </button>\r\n      \r\n      <span class="pagination-info">\r\n        P\xE1gina {{ pagination.currentPage }} de {{ pagination.totalPages }}\r\n      </span>\r\n      \r\n      <button \r\n        class="btn-pagination" \r\n        [disabled]="!pagination.hasNext"\r\n        (click)="goToPage(pagination.currentPage + 1)">\r\n        Siguiente\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>', styles: ['@charset "UTF-8";\n\n/* src/app/professional/appointments/appointments.scss */\n.appointments-page {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 32px;\n}\n.page-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.page-header .header-content .btn-back {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #64748b;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.page-header .header-content .btn-back:hover {\n  background: #475569;\n}\n.page-header .header-content .btn-back svg {\n  width: 16px;\n  height: 16px;\n}\n.page-header .header-content h1 {\n  color: #1e293b;\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n}\n.filters-section {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.filters-section .filters-grid {\n  display: grid;\n  column-gap: 24px;\n  row-gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  align-items: end;\n}\n.filters-section .filters-grid .filter-group {\n  min-width: 200px;\n}\n.filters-section .filters-grid .filter-group label {\n  display: block;\n  margin-bottom: 8px;\n  color: #374151;\n  font-weight: 500;\n  font-size: 14px;\n}\n.filters-section .filters-grid .filter-group select,\n.filters-section .filters-grid .filter-group input {\n  width: 80%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.filters-section .filters-grid .filter-group select:focus,\n.filters-section .filters-grid .filter-group input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.filters-section .filters-grid .filter-group.search-group {\n  min-width: 320px;\n}\n.filters-section .filters-grid .filter-actions {\n  display: flex;\n  align-items: end;\n}\n.filters-section .filters-grid .filter-actions .btn-clear {\n  padding: 10px 16px;\n  background: transparent;\n  color: #64748b;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.filters-section .filters-grid .filter-actions .btn-clear:hover {\n  background: #f8fafc;\n  border-color: #64748b;\n}\n@media (min-width: 992px) {\n  .filters-section .filters-grid {\n    grid-template-columns: 220px 1fr 1fr 2fr auto;\n  }\n  .filters-section .filters-grid .filter-group:nth-child(2),\n  .filters-section .filters-grid .filter-group:nth-child(3) {\n    min-width: 220px;\n  }\n  .filters-section .filters-grid .filter-group.search-group {\n    grid-column: auto;\n  }\n}\n.loading-state,\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  text-align: center;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.loading-state .loading-spinner,\n.error-state .loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f1f5f9;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-state .error-icon,\n.error-state .error-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.loading-state h3,\n.error-state h3 {\n  color: #1e293b;\n  margin-bottom: 8px;\n}\n.loading-state p,\n.error-state p {\n  color: #64748b;\n  margin-bottom: 20px;\n}\n.loading-state .btn-retry,\n.error-state .btn-retry {\n  padding: 10px 20px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.loading-state .btn-retry:hover,\n.error-state .btn-retry:hover {\n  background: #2563eb;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.citas-container .citas-header {\n  margin-bottom: 24px;\n}\n.citas-container .citas-header h2 {\n  color: #1e293b;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.citas-container .empty-state {\n  text-align: center;\n  padding: 60px 24px;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.citas-container .empty-state .empty-icon {\n  width: 64px;\n  height: 64px;\n  color: #94a3b8;\n  margin-bottom: 16px;\n}\n.citas-container .empty-state h3 {\n  color: #374151;\n  margin-bottom: 8px;\n}\n.citas-container .empty-state p {\n  color: #64748b;\n  margin-bottom: 20px;\n}\n.citas-container .empty-state .btn-primary {\n  padding: 12px 24px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.citas-container .empty-state .btn-primary:hover {\n  background: #2563eb;\n}\n.citas-list {\n  display: grid;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.cita-card {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n  transition: all 0.2s ease;\n}\n.cita-card:hover {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border-color: #3b82f6;\n}\n.cita-card .cita-header {\n  display: flex;\n  justify-content: between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.cita-card .cita-header .cita-time {\n  display: flex;\n  flex-direction: column;\n}\n.cita-card .cita-header .cita-time .time {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.cita-card .cita-header .cita-time .date {\n  font-size: 14px;\n  color: #64748b;\n}\n.cita-card .cita-header .status-badge {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.cita-card .cita-header .status-badge.badge-scheduled {\n  background: #fef3c7;\n  color: #92400e;\n}\n.cita-card .cita-header .status-badge.badge-confirmed {\n  background: #d1fae5;\n  color: #065f46;\n}\n.cita-card .cita-header .status-badge.badge-completed {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.cita-card .cita-header .status-badge.badge-cancelled {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.cita-card .cita-header .status-badge.badge-pending {\n  background: #f3f4f6;\n  color: #374151;\n}\n.cita-card .cita-content .cita-title {\n  color: #1e293b;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.cita-card .cita-content .cita-type {\n  color: #64748b;\n  font-size: 14px;\n  margin: 0 0 16px 0;\n  text-transform: capitalize;\n}\n.cita-card .cita-content .patient-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.cita-card .cita-content .patient-info .patient-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #1d4ed8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n.cita-card .cita-content .patient-info .patient-details h4 {\n  color: #1e293b;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n}\n.cita-card .cita-content .patient-info .patient-details p {\n  color: #64748b;\n  font-size: 14px;\n  margin: 0;\n}\n.cita-card .cita-content .cita-actions .btn-secondary {\n  padding: 8px 16px;\n  background: transparent;\n  color: #3b82f6;\n  border: 1px solid #3b82f6;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.cita-card .cita-content .cita-actions .btn-secondary:hover {\n  background: #3b82f6;\n  color: white;\n}\n.pagination {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 0;\n}\n.pagination .btn-pagination {\n  padding: 10px 16px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.pagination .btn-pagination:hover:not(:disabled) {\n  background: #2563eb;\n}\n.pagination .btn-pagination:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.pagination .pagination-info {\n  color: #64748b;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .appointments-page {\n    padding: 16px;\n  }\n  .filters-section .filters-grid {\n    grid-template-columns: 1fr;\n    column-gap: 0;\n    row-gap: 12px;\n  }\n  .filters-section .filters-grid .filter-group.search-group {\n    min-width: 0;\n  }\n  .cita-card {\n    padding: 16px;\n  }\n  .cita-header {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 12px;\n  }\n  .patient-info {\n    flex-direction: column;\n    align-items: flex-start !important;\n  }\n}\n/*# sourceMappingURL=appointments.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Appointments, { className: "Appointments", filePath: "src/app/professional/appointments/appointments.ts", lineNumber: 23 });
})();
export {
  Appointments
};
//# sourceMappingURL=chunk-I3JXN5XA.js.map
