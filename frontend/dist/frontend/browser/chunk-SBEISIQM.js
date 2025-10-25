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
  NgModel
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

// src/app/professional/pacientes/pacientes.ts
function Pacientes_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando pacientes...");
    \u0275\u0275elementEnd()();
  }
}
function Pacientes_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Error al cargar los pacientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 19);
    \u0275\u0275listener("click", function Pacientes_div_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadPacientes());
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
function Pacientes_div_20_div_7_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('No hay pacientes que coincidan con tu b\xFAsqueda "', ctx_r1.filtros.search, '".');
  }
}
function Pacientes_div_20_div_7_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "A\xFAn no tienes pacientes asignados.");
    \u0275\u0275elementEnd();
  }
}
function Pacientes_div_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No se encontraron pacientes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, Pacientes_div_20_div_7_p_5_Template, 2, 1, "p", 30)(6, Pacientes_div_20_div_7_p_6_Template, 2, 0, "p", 30);
    \u0275\u0275elementStart(7, "button", 31);
    \u0275\u0275listener("click", function Pacientes_div_20_div_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.limpiarFiltros());
    });
    \u0275\u0275text(8, "Ver todos los pacientes");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.filtros.search);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filtros.search);
  }
}
function Pacientes_div_20_div_8_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 43);
    \u0275\u0275element(2, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const paciente_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(paciente_r5.phone);
  }
}
function Pacientes_div_20_div_8_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 43);
    \u0275\u0275element(2, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const paciente_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(paciente_r5.birthDate), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r1.calculateAge(paciente_r5.birthDate), " a\xF1os)");
  }
}
function Pacientes_div_20_div_8_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 43);
    \u0275\u0275element(2, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const paciente_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Contacto: ", paciente_r5.emergencyContact.name);
  }
}
function Pacientes_div_20_div_8_div_1_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function Pacientes_div_20_div_8_div_1_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const paciente_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.contactarPaciente(paciente_r5, "telefono"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 4);
    \u0275\u0275element(2, "path", 50);
    \u0275\u0275elementEnd()();
  }
}
function Pacientes_div_20_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37)(5, "h3", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 40);
    \u0275\u0275template(10, Pacientes_div_20_div_8_div_1_div_10_Template, 5, 1, "div", 41)(11, Pacientes_div_20_div_8_div_1_div_11_Template, 7, 2, "div", 41);
    \u0275\u0275elementStart(12, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 43);
    \u0275\u0275element(14, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, Pacientes_div_20_div_8_div_1_div_17_Template, 5, 1, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 45)(19, "button", 46);
    \u0275\u0275listener("click", function Pacientes_div_20_div_8_div_1_Template_button_click_19_listener() {
      const paciente_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.contactarPaciente(paciente_r5, "email"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 4);
    \u0275\u0275element(21, "path", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, Pacientes_div_20_div_8_div_1_button_22_Template, 3, 0, "button", 48);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "button", 49);
    \u0275\u0275listener("click", function Pacientes_div_20_div_8_div_1_Template_button_click_23_listener() {
      const paciente_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewPatientDetails(paciente_r5));
    });
    \u0275\u0275text(24, " Ver Detalles ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const paciente_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(paciente_r5.name, paciente_r5.lastName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", paciente_r5.name, " ", paciente_r5.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(paciente_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", paciente_r5.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", paciente_r5.birthDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Registrado: ", ctx_r1.formatDate(paciente_r5.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", paciente_r5.emergencyContact);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", paciente_r5.phone);
  }
}
function Pacientes_div_20_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, Pacientes_div_20_div_8_div_1_Template, 25, 9, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredPacientes);
  }
}
function Pacientes_div_20_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "button", 55);
    \u0275\u0275listener("click", function Pacientes_div_20_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.pagination.currentPage - 1));
    });
    \u0275\u0275text(2, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 55);
    \u0275\u0275listener("click", function Pacientes_div_20_div_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
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
function Pacientes_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "span", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, Pacientes_div_20_div_7_Template, 9, 2, "div", 24)(8, Pacientes_div_20_div_8_Template, 2, 1, "div", 25)(9, Pacientes_div_20_div_9_Template, 7, 4, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Lista de Pacientes (", ctx_r1.filteredPacientes.length, ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Total: ", ctx_r1.pagination.totalPacientes || ctx_r1.filteredPacientes.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredPacientes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredPacientes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagination.totalPages > 1);
  }
}
var Pacientes = class _Pacientes {
  professionalService = inject(ProfessionalService);
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  // Lista de pacientes
  pacientes = [];
  filteredPacientes = [];
  // Filtros
  filtros = {
    search: ""
  };
  // Estados
  isLoading = true;
  error = "";
  // Paginación - ACTUALIZADO
  pagination = {
    currentPage: 1,
    totalPages: 1,
    totalPacientes: 0,
    hasNext: false,
    hasPrev: false
  };
  destroy$ = new Subject();
  ngOnInit() {
    return __async(this, null, function* () {
      this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
        this.filtros.search = params["search"] || "";
        this.pagination.currentPage = parseInt(params["page"]) || 1;
        this.loadPacientes();
      });
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadPacientes() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.error = "";
      try {
        const response = yield this.professionalService.getPatients({
          page: this.pagination.currentPage,
          limit: 10,
          search: this.filtros.search
        }).toPromise();
        if (response?.success && response.data) {
          this.pacientes = response.data.docs || [];
          this.filteredPacientes = [...this.pacientes];
          this.pagination = {
            currentPage: response.data.page || 1,
            totalPages: response.data.totalPages || 1,
            totalPacientes: response.data.totalDocs || 0,
            hasNext: response.data.hasNextPage || false,
            hasPrev: response.data.hasPrevPage || false
          };
          this.aplicarFiltroBusqueda();
        } else {
          this.error = "Error al cargar los pacientes";
        }
      } catch (error) {
        console.error("Error loading patients:", error);
        this.error = "Error al cargar los pacientes. Por favor, intenta nuevamente.";
        this.pacientes = [];
        this.filteredPacientes = [];
      } finally {
        this.isLoading = false;
      }
    });
  }
  aplicarFiltroBusqueda() {
    if (!this.filtros.search) {
      this.filteredPacientes = [...this.pacientes];
      return;
    }
    const searchTerm = this.filtros.search.toLowerCase();
    this.filteredPacientes = this.pacientes.filter((paciente) => paciente.name.toLowerCase().includes(searchTerm) || paciente.lastName.toLowerCase().includes(searchTerm) || paciente.email.toLowerCase().includes(searchTerm) || paciente.phone && paciente.phone.toLowerCase().includes(searchTerm));
  }
  // Navegación
  goToDashboard() {
    this.router.navigate(["/Panel-profesional"]);
  }
  // Filtros
  onSearchChange() {
    this.pagination.currentPage = 1;
    this.aplicarFiltroBusqueda();
    this.actualizarQueryParams();
  }
  limpiarFiltros() {
    this.filtros.search = "";
    this.pagination.currentPage = 1;
    this.actualizarQueryParams();
  }
  actualizarQueryParams() {
    const queryParams = {};
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
  // ✅ MÉTODOS NUEVOS AGREGADOS PARA EL TEMPLATE
  // Calcular edad a partir de la fecha de nacimiento
  calculateAge(birthDate) {
    if (!birthDate)
      return "Edad no disponible";
    try {
      const birth = new Date(birthDate);
      const today = /* @__PURE__ */ new Date();
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birth.getDate()) {
        age--;
      }
      return `${age} a\xF1os`;
    } catch {
      return "Fecha inv\xE1lida";
    }
  }
  // Contactar paciente por email o teléfono
  contactarPaciente(paciente, tipo) {
    if (tipo === "email" && paciente.email) {
      window.open(`mailto:${paciente.email}`, "_blank");
    } else if (tipo === "telefono" && paciente.phone) {
      window.open(`tel:${paciente.phone}`, "_blank");
    } else {
      alert(`No hay ${tipo} disponible para este paciente`);
    }
  }
  // Ver detalles del paciente
  viewPatientDetails(paciente) {
    const info = `
      Nombre: ${paciente.name} ${paciente.lastName}
      Email: ${paciente.email}
      Tel\xE9fono: ${paciente.phone || "No disponible"}
      Fecha de nacimiento: ${paciente.birthDate ? this.formatDate(paciente.birthDate) : "No disponible"}
      Edad: ${this.calculateAge(paciente.birthDate)}
      Registrado: ${this.formatDate(paciente.createdAt)}
    `;
    alert(info);
  }
  // Helper functions
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
  getInitials(name, lastName) {
    return `${name[0]}${lastName[0]}`.toUpperCase();
  }
  static \u0275fac = function Pacientes_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Pacientes)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Pacientes, selectors: [["app-pacientes"]], decls: 21, vars: 4, consts: [[1, "pacientes-page"], [1, "page-header"], [1, "header-content"], [1, "btn-back", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "filters-section"], [1, "filters-grid"], [1, "filter-group", "search-group"], ["type", "text", "placeholder", "Buscar por nombre, apellido, email...", 3, "ngModelChange", "input", "ngModel"], [1, "filter-actions"], [1, "btn-clear", 3, "click"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "pacientes-container", 4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "error-icon"], [1, "btn-retry", 3, "click"], [1, "pacientes-container"], [1, "pacientes-header"], [1, "header-stats"], [1, "stat-item"], ["class", "empty-state", 4, "ngIf"], ["class", "pacientes-grid", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "empty-state"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "empty-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [4, "ngIf"], [1, "btn-primary", 3, "click"], [1, "pacientes-grid"], ["class", "paciente-card", 4, "ngFor", "ngForOf"], [1, "paciente-card"], [1, "paciente-header"], [1, "paciente-avatar"], [1, "paciente-basic-info"], [1, "paciente-name"], [1, "paciente-email"], [1, "paciente-details"], ["class", "detail-item", 4, "ngIf"], [1, "detail-item"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "detail-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "paciente-actions"], ["title", "Enviar email", 1, "btn-action", "email", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["class", "btn-action phone", "title", "Llamar", 3, "click", 4, "ngIf"], [1, "btn-secondary", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], [1, "age"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["title", "Llamar", 1, "btn-action", "phone", 3, "click"], [1, "pagination"], [1, "btn-pagination", 3, "click", "disabled"], [1, "pagination-info"]], template: function Pacientes_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function Pacientes_Template_button_click_3_listener() {
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
      \u0275\u0275text(8, "Mis Pacientes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "label");
      \u0275\u0275text(13, "Buscar Pacientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function Pacientes_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filtros.search, $event) || (ctx.filtros.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function Pacientes_Template_input_input_14_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
      \u0275\u0275listener("click", function Pacientes_Template_button_click_16_listener() {
        return ctx.limpiarFiltros();
      });
      \u0275\u0275text(17, " Limpiar B\xFAsqueda ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(18, Pacientes_div_18_Template, 4, 0, "div", 12)(19, Pacientes_div_19_Template, 9, 1, "div", 13)(20, Pacientes_div_20_Template, 10, 5, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.filtros.search);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: [`

.pacientes-page[_ngcontent-%COMP%] {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.page-header[_ngcontent-%COMP%] {
  margin-bottom: 32px;
}
.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
}
.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #64748b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}
.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {
  background: #475569;
}
.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
}
.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  color: #1e293b;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
}
.filters-section[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: end;
}
.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  margin-bottom: 6px;
  color: #374151;
  font-weight: 500;
  font-size: 13px;
}
.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 80%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  height: 20px;
  background: white;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 12px center;
  background-size: 16px;
}
.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}
.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: end;
  height: 100%;
}
.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   .btn-clear[_ngcontent-%COMP%] {
  padding: 8px 14px;
  background: transparent;
  color: #64748b;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  height: 38px;
  white-space: nowrap;
}
.filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%]   .btn-clear[_ngcontent-%COMP%]:hover {
  background: #f8fafc;
  border-color: #64748b;
  color: #374151;
}
.loading-state[_ngcontent-%COMP%], 
.error-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  text-align: center;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], 
.error-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border: 3px solid #f1f5f9;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 1s linear infinite;
  margin-bottom: 16px;
}
.loading-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], 
.error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {
  font-size: 48px;
  margin-bottom: 16px;
}
.loading-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: #1e293b;
  margin-bottom: 8px;
}
.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  margin-bottom: 20px;
}
.loading-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%], 
.error-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.loading-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover, 
.error-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {
  background: #2563eb;
}
@keyframes _ngcontent-%COMP%_spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.pacientes-container[_ngcontent-%COMP%]   .pacientes-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.pacientes-container[_ngcontent-%COMP%]   .pacientes-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  color: #1e293b;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}
.pacientes-container[_ngcontent-%COMP%]   .pacientes-header[_ngcontent-%COMP%]   .header-stats[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
}
.pacientes-container[_ngcontent-%COMP%]   .pacientes-header[_ngcontent-%COMP%]   .header-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 14px;
  padding: 6px 12px;
  background: #f8fafc;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}
.pacientes-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {
  text-align: center;
  padding: 60px 24px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.pacientes-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {
  width: 64px;
  height: 64px;
  color: #94a3b8;
  margin-bottom: 16px;
}
.pacientes-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: #374151;
  margin-bottom: 8px;
}
.pacientes-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #64748b;
  margin-bottom: 20px;
}
.pacientes-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.pacientes-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {
  background: #2563eb;
}
.pacientes-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}
.paciente-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  padding: 20px;
  transition: all 0.2s ease;
}
.paciente-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
  transform: translateY(-2px);
}
.paciente-card[_ngcontent-%COMP%]   .paciente-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-header[_ngcontent-%COMP%]   .paciente-avatar[_ngcontent-%COMP%] {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #8b5cf6,
      #7c3aed);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-header[_ngcontent-%COMP%]   .paciente-basic-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-header[_ngcontent-%COMP%]   .paciente-basic-info[_ngcontent-%COMP%]   .paciente-name[_ngcontent-%COMP%] {
  color: #1e293b;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 4px 0;
  line-height: 1.2;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-header[_ngcontent-%COMP%]   .paciente-basic-info[_ngcontent-%COMP%]   .paciente-email[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 14px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-details[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 13px;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .age[_ngcontent-%COMP%] {
  color: #94a3b8;
  font-size: 12px;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {
  padding: 6px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-actions[_ngcontent-%COMP%]   .btn-action.email[_ngcontent-%COMP%] {
  background: #dbeafe;
  color: #1d4ed8;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-actions[_ngcontent-%COMP%]   .btn-action.email[_ngcontent-%COMP%]:hover {
  background: #3b82f6;
  color: white;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-actions[_ngcontent-%COMP%]   .btn-action.phone[_ngcontent-%COMP%] {
  background: #d1fae5;
  color: #065f46;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-actions[_ngcontent-%COMP%]   .btn-action.phone[_ngcontent-%COMP%]:hover {
  background: #10b981;
  color: white;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {
  flex: 1;
  padding: 8px 12px;
  background: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  text-align: center;
}
.paciente-card[_ngcontent-%COMP%]   .paciente-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {
  background: #3b82f6;
  color: white;
}
.pagination[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 20px 0;
}
.pagination[_ngcontent-%COMP%]   .btn-pagination[_ngcontent-%COMP%] {
  padding: 8px 14px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
}
.pagination[_ngcontent-%COMP%]   .btn-pagination[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #2563eb;
}
.pagination[_ngcontent-%COMP%]   .btn-pagination[_ngcontent-%COMP%]:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}
.pagination[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 13px;
  padding: 0 8px;
}
@media (max-width: 768px) {
  .pacientes-page[_ngcontent-%COMP%] {
    padding: 16px;
  }
  .filters-section[_ngcontent-%COMP%] {
    padding: 16px;
  }
  .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .filters-section[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%]   .filter-actions[_ngcontent-%COMP%] {
    justify-content: center;
  }
  .pacientes-header[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .pacientes-header[_ngcontent-%COMP%]   .header-stats[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
  .pacientes-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .paciente-card[_ngcontent-%COMP%] {
    padding: 16px;
  }
  .paciente-header[_ngcontent-%COMP%] {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  .paciente-header[_ngcontent-%COMP%]   .paciente-basic-info[_ngcontent-%COMP%] {
    text-align: center;
  }
  .pagination[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 8px;
  }
  .pagination[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {
    order: -1;
  }
}
@media (max-width: 480px) {
  .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .paciente-actions[_ngcontent-%COMP%] {
    flex-wrap: wrap;
  }
  .paciente-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {
    min-width: 100%;
    order: -1;
  }
}
/*# sourceMappingURL=pacientes.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Pacientes, [{
    type: Component,
    args: [{ selector: "app-pacientes", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div class="pacientes-page">\r
  <!-- Header -->\r
  <div class="page-header">\r
    <div class="header-content">\r
      <button class="btn-back" (click)="goToDashboard()">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>\r
        </svg>\r
        Volver al Panel\r
      </button>\r
      <h1>Mis Pacientes</h1>\r
    </div>\r
  </div>\r
\r
  <!-- Filtros -->\r
  <div class="filters-section">\r
    <div class="filters-grid">\r
      <div class="filter-group search-group">\r
        <label>Buscar Pacientes</label>\r
        <input \r
          type="text" \r
          [(ngModel)]="filtros.search" \r
          (input)="onSearchChange()"\r
          placeholder="Buscar por nombre, apellido, email..."\r
        >\r
      </div>\r
\r
      <div class="filter-actions">\r
        <button class="btn-clear" (click)="limpiarFiltros()">\r
          Limpiar B\xFAsqueda\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="isLoading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Cargando pacientes...</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !isLoading" class="error-state">\r
    <div class="error-icon">\u26A0\uFE0F</div>\r
    <h3>Error al cargar los pacientes</h3>\r
    <p>{{ error }}</p>\r
    <button class="btn-retry" (click)="loadPacientes()">Reintentar</button>\r
  </div>\r
\r
  <!-- Pacientes List -->\r
  <div *ngIf="!isLoading && !error" class="pacientes-container">\r
    <div class="pacientes-header">\r
      <h2>Lista de Pacientes ({{ filteredPacientes.length }})</h2>\r
      <div class="header-stats">\r
        <span class="stat-item">Total: {{ pagination.totalPacientes || filteredPacientes.length }}</span>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="filteredPacientes.length === 0" class="empty-state">\r
      <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>\r
      </svg>\r
      <h3>No se encontraron pacientes</h3>\r
      <p *ngIf="filtros.search">No hay pacientes que coincidan con tu b\xFAsqueda "{{ filtros.search }}".</p>\r
      <p *ngIf="!filtros.search">A\xFAn no tienes pacientes asignados.</p>\r
      <button class="btn-primary" (click)="limpiarFiltros()">Ver todos los pacientes</button>\r
    </div>\r
\r
    <div *ngIf="filteredPacientes.length > 0" class="pacientes-grid">\r
      <div *ngFor="let paciente of filteredPacientes" class="paciente-card">\r
        <div class="paciente-header">\r
          <div class="paciente-avatar">\r
            {{ getInitials(paciente.name, paciente.lastName) }}\r
          </div>\r
          <div class="paciente-basic-info">\r
            <h3 class="paciente-name">{{ paciente.name }} {{ paciente.lastName }}</h3>\r
            <p class="paciente-email">{{ paciente.email }}</p>\r
          </div>\r
        </div>\r
\r
        <div class="paciente-details">\r
          <div class="detail-item" *ngIf="paciente.phone">\r
            <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>\r
            </svg>\r
            <span>{{ paciente.phone }}</span>\r
          </div>\r
\r
          <div class="detail-item" *ngIf="paciente.birthDate">\r
            <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>\r
            </svg>\r
            <span>\r
              {{ formatDate(paciente.birthDate) }} \r
              <span class="age">({{ calculateAge(paciente.birthDate) }} a\xF1os)</span>\r
            </span>\r
          </div>\r
\r
          <div class="detail-item">\r
            <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>\r
            </svg>\r
            <span>Registrado: {{ formatDate(paciente.createdAt) }}</span>\r
          </div>\r
\r
          <div class="detail-item" *ngIf="paciente.emergencyContact">\r
            <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>\r
            </svg>\r
            <span>Contacto: {{ paciente.emergencyContact.name }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="paciente-actions">\r
          <button class="btn-action email" \r
                  (click)="contactarPaciente(paciente, 'email')"\r
                  title="Enviar email">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>\r
            </svg>\r
          </button>\r
          \r
          <button class="btn-action phone" \r
                  *ngIf="paciente.phone"\r
                  (click)="contactarPaciente(paciente, 'telefono')"\r
                  title="Llamar">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>\r
            </svg>\r
          </button>\r
\r
          <button class="btn-secondary" \r
                  (click)="viewPatientDetails(paciente)">\r
            Ver Detalles\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Paginaci\xF3n -->\r
    <div *ngIf="pagination.totalPages > 1" class="pagination">\r
      <button \r
        class="btn-pagination" \r
        [disabled]="!pagination.hasPrev"\r
        (click)="goToPage(pagination.currentPage - 1)">\r
        Anterior\r
      </button>\r
      \r
      <span class="pagination-info">\r
        P\xE1gina {{ pagination.currentPage }} de {{ pagination.totalPages }}\r
      </span>\r
      \r
      <button \r
        class="btn-pagination" \r
        [disabled]="!pagination.hasNext"\r
        (click)="goToPage(pagination.currentPage + 1)">\r
        Siguiente\r
      </button>\r
    </div>\r
  </div>\r
</div>`, styles: [`/* src/app/professional/pacientes/pacientes.scss */
.pacientes-page {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.page-header {
  margin-bottom: 32px;
}
.page-header .header-content {
  display: flex;
  align-items: center;
  gap: 16px;
}
.page-header .header-content .btn-back {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #64748b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}
.page-header .header-content .btn-back:hover {
  background: #475569;
}
.page-header .header-content .btn-back svg {
  width: 16px;
  height: 16px;
}
.page-header .header-content h1 {
  color: #1e293b;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
}
.filters-section {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.filters-section .filters-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: end;
}
.filters-section .filters-grid .filter-group label {
  display: block;
  margin-bottom: 6px;
  color: #374151;
  font-weight: 500;
  font-size: 13px;
}
.filters-section .filters-grid .filter-group input {
  width: 80%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  height: 20px;
  background: white;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 12px center;
  background-size: 16px;
}
.filters-section .filters-grid .filter-group input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}
.filters-section .filters-grid .filter-actions {
  display: flex;
  align-items: end;
  height: 100%;
}
.filters-section .filters-grid .filter-actions .btn-clear {
  padding: 8px 14px;
  background: transparent;
  color: #64748b;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  height: 38px;
  white-space: nowrap;
}
.filters-section .filters-grid .filter-actions .btn-clear:hover {
  background: #f8fafc;
  border-color: #64748b;
  color: #374151;
}
.loading-state,
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  text-align: center;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.loading-state .loading-spinner,
.error-state .loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f1f5f9;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}
.loading-state .error-icon,
.error-state .error-icon {
  font-size: 48px;
  margin-bottom: 16px;
}
.loading-state h3,
.error-state h3 {
  color: #1e293b;
  margin-bottom: 8px;
}
.loading-state p,
.error-state p {
  color: #64748b;
  margin-bottom: 20px;
}
.loading-state .btn-retry,
.error-state .btn-retry {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.loading-state .btn-retry:hover,
.error-state .btn-retry:hover {
  background: #2563eb;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.pacientes-container .pacientes-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.pacientes-container .pacientes-header h2 {
  color: #1e293b;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}
.pacientes-container .pacientes-header .header-stats {
  display: flex;
  gap: 16px;
}
.pacientes-container .pacientes-header .header-stats .stat-item {
  color: #64748b;
  font-size: 14px;
  padding: 6px 12px;
  background: #f8fafc;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}
.pacientes-container .empty-state {
  text-align: center;
  padding: 60px 24px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.pacientes-container .empty-state .empty-icon {
  width: 64px;
  height: 64px;
  color: #94a3b8;
  margin-bottom: 16px;
}
.pacientes-container .empty-state h3 {
  color: #374151;
  margin-bottom: 8px;
}
.pacientes-container .empty-state p {
  color: #64748b;
  margin-bottom: 20px;
}
.pacientes-container .empty-state .btn-primary {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.pacientes-container .empty-state .btn-primary:hover {
  background: #2563eb;
}
.pacientes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}
.paciente-card {
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  padding: 20px;
  transition: all 0.2s ease;
}
.paciente-card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
  transform: translateY(-2px);
}
.paciente-card .paciente-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
}
.paciente-card .paciente-header .paciente-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #8b5cf6,
      #7c3aed);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;
}
.paciente-card .paciente-header .paciente-basic-info {
  flex: 1;
  min-width: 0;
}
.paciente-card .paciente-header .paciente-basic-info .paciente-name {
  color: #1e293b;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 4px 0;
  line-height: 1.2;
}
.paciente-card .paciente-header .paciente-basic-info .paciente-email {
  color: #64748b;
  font-size: 14px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.paciente-card .paciente-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}
.paciente-card .paciente-details .detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 13px;
}
.paciente-card .paciente-details .detail-item .detail-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}
.paciente-card .paciente-details .detail-item .age {
  color: #94a3b8;
  font-size: 12px;
}
.paciente-card .paciente-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.paciente-card .paciente-actions .btn-action {
  padding: 6px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.paciente-card .paciente-actions .btn-action svg {
  width: 16px;
  height: 16px;
}
.paciente-card .paciente-actions .btn-action.email {
  background: #dbeafe;
  color: #1d4ed8;
}
.paciente-card .paciente-actions .btn-action.email:hover {
  background: #3b82f6;
  color: white;
}
.paciente-card .paciente-actions .btn-action.phone {
  background: #d1fae5;
  color: #065f46;
}
.paciente-card .paciente-actions .btn-action.phone:hover {
  background: #10b981;
  color: white;
}
.paciente-card .paciente-actions .btn-secondary {
  flex: 1;
  padding: 8px 12px;
  background: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  text-align: center;
}
.paciente-card .paciente-actions .btn-secondary:hover {
  background: #3b82f6;
  color: white;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 20px 0;
}
.pagination .btn-pagination {
  padding: 8px 14px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
}
.pagination .btn-pagination:hover:not(:disabled) {
  background: #2563eb;
}
.pagination .btn-pagination:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}
.pagination .pagination-info {
  color: #64748b;
  font-size: 13px;
  padding: 0 8px;
}
@media (max-width: 768px) {
  .pacientes-page {
    padding: 16px;
  }
  .filters-section {
    padding: 16px;
  }
  .filters-section .filters-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .filters-section .filters-grid .filter-actions {
    justify-content: center;
  }
  .pacientes-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .pacientes-header .header-stats {
    width: 100%;
    justify-content: center;
  }
  .pacientes-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .paciente-card {
    padding: 16px;
  }
  .paciente-header {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  .paciente-header .paciente-basic-info {
    text-align: center;
  }
  .pagination {
    flex-direction: column;
    gap: 8px;
  }
  .pagination .pagination-info {
    order: -1;
  }
}
@media (max-width: 480px) {
  .page-header .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .paciente-actions {
    flex-wrap: wrap;
  }
  .paciente-actions .btn-secondary {
    min-width: 100%;
    order: -1;
  }
}
/*# sourceMappingURL=pacientes.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Pacientes, { className: "Pacientes", filePath: "src/app/professional/pacientes/pacientes.ts", lineNumber: 33 });
})();
export {
  Pacientes
};
//# sourceMappingURL=chunk-SBEISIQM.js.map
