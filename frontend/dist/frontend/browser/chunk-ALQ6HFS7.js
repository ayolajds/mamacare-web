import {
  environment
} from "./chunk-BPEFTJA2.js";
import {
  HttpClient,
  HttpParams,
  RouterLink,
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
  Injectable,
  Subscription,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DEJWN6HZ.js";

// src/app/shared/services/admin.ts
var AdminService = class _AdminService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/admin`;
  // 📊 Obtener estadísticas del dashboard
  getDashboardStats() {
    console.log("\u{1F4CA} Obteniendo estad\xEDsticas del dashboard...");
    return this.http.get(`${this.baseUrl}/dashboard/stats`);
  }
  // 👥 Obtener lista de usuarios (con paginación y filtros) - CORREGIDO
  getUsers(page = 1, limit = 10, search = "", role = "", status = "") {
    let params = new HttpParams().set("page", page.toString()).set("limit", limit.toString());
    if (search)
      params = params.set("search", search);
    if (role)
      params = params.set("role", role);
    if (status)
      params = params.set("status", status);
    console.log("\u{1F465} Obteniendo lista de usuarios:", { page, limit, search, role, status });
    return this.http.get(`${this.baseUrl}/users`, { params });
  }
  // 🔄 Activar/desactivar usuario
  toggleUserStatus(userId) {
    console.log("\u{1F504} Cambiando estado del usuario:", userId);
    return this.http.patch(`${this.baseUrl}/users/${userId}/toggle`, {});
  }
  // 🎭 Cambiar rol de usuario
  updateUserRole(userId, newRole) {
    console.log("\u{1F3AD} Cambiando rol del usuario:", { userId, newRole });
    return this.http.patch(`${this.baseUrl}/users/${userId}/role`, { role: newRole });
  }
  static \u0275fac = function AdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/admin/users/user-list/user-list.ts
var _c0 = (a0) => ["/admin/users/user-edit", a0];
function UserList_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando usuarios...");
    \u0275\u0275elementEnd()();
  }
}
function UserList_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 35);
    \u0275\u0275element(3, "path", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Error al cargar los usuarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 37);
    \u0275\u0275listener("click", function UserList_div_41_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadUsers(ctx_r1.pagination.currentPage));
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
function UserList_div_42_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, " (filtrados) ");
    \u0275\u0275elementEnd();
  }
}
function UserList_div_42_tr_22_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", role_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleDisplayName(role_r5), " ");
  }
}
function UserList_div_42_tr_22_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(user_r4.lastLogin), " ");
  }
}
function UserList_div_42_tr_22_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "Nunca");
    \u0275\u0275elementEnd();
  }
}
function UserList_div_42_tr_22_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.isActive ? "Desactivar" : "Activar", " ");
  }
}
function UserList_div_42_tr_22_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "path", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Procesando... ");
    \u0275\u0275elementEnd();
  }
}
function UserList_div_42_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 53)(1, "td", 54)(2, "div", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56)(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 59)(10, "div", 60)(11, "span", 61);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 62);
    \u0275\u0275listener("change", function UserList_div_42_tr_22_Template_select_change_13_listener($event) {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRoleChange(user_r4, $event));
    });
    \u0275\u0275template(14, UserList_div_42_tr_22_option_14_Template, 2, 2, "option", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td", 64)(16, "span", 65);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 66)(19, "div", 67)(20, "span", 68);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "td", 66)(23, "div", 67);
    \u0275\u0275template(24, UserList_div_42_tr_22_span_24_Template, 2, 1, "span", 69)(25, UserList_div_42_tr_22_ng_template_25_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 70)(28, "div", 71)(29, "button", 72);
    \u0275\u0275listener("click", function UserList_div_42_tr_22_Template_button_click_29_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleUserStatus(user_r4));
    });
    \u0275\u0275template(30, UserList_div_42_tr_22_span_30_Template, 2, 1, "span", 50)(31, UserList_div_42_tr_22_span_31_Template, 4, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "a", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 35);
    \u0275\u0275element(34, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Editar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const neverLoggedIn_r6 = \u0275\u0275reference(26);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getUserInitials(user_r4), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r4.name || "Sin nombre", " ", user_r4.lastName || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.email);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getRoleBadgeClass(user_r4.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRoleDisplayName(user_r4.role), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", user_r4.role)("disabled", ctx_r1.isUpdating[user_r4._id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.roles);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(user_r4.isActive));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.isActive ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(user_r4.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", user_r4.lastLogin)("ngIfElse", neverLoggedIn_r6);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(user_r4.isActive ? "btn-deactivate" : "btn-activate");
    \u0275\u0275property("disabled", ctx_r1.isUpdating[user_r4._id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isUpdating[user_r4._id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isUpdating[user_r4._id]);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c0, user_r4._id));
  }
}
function UserList_div_42_tr_23_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Intenta ajustar los filtros de b\xFAsqueda ");
    \u0275\u0275elementEnd();
  }
}
function UserList_div_42_tr_23_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " No hay usuarios registrados en el sistema ");
    \u0275\u0275elementEnd();
  }
}
function UserList_div_42_tr_23_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function UserList_div_42_tr_23_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(1, " Limpiar filtros ");
    \u0275\u0275elementEnd();
  }
}
function UserList_div_42_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 81)(2, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 83);
    \u0275\u0275element(4, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "No se encontraron usuarios");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, UserList_div_42_tr_23_p_7_Template, 2, 0, "p", 50)(8, UserList_div_42_tr_23_p_8_Template, 2, 0, "p", 50)(9, UserList_div_42_tr_23_button_9_Template, 2, 0, "button", 85);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.searchTerm || ctx_r1.roleFilter || ctx_r1.statusFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchTerm && !ctx_r1.roleFilter && !ctx_r1.statusFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchTerm || ctx_r1.roleFilter || ctx_r1.statusFilter);
  }
}
function UserList_div_42_div_24_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function UserList_div_42_div_24_button_9_Template_button_click_0_listener() {
      const page_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", page_r10 === ctx_r1.pagination.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r10, " ");
  }
}
function UserList_div_42_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 88)(4, "button", 89);
    \u0275\u0275listener("click", function UserList_div_42_div_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 35);
    \u0275\u0275element(6, "path", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 91);
    \u0275\u0275template(9, UserList_div_42_div_24_button_9_Template, 2, 3, "button", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 89);
    \u0275\u0275listener("click", function UserList_div_42_div_24_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(11, " Siguiente ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 35);
    \u0275\u0275element(13, "path", 93);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" P\xE1gina ", ctx_r1.pagination.currentPage, " de ", ctx_r1.pagination.totalPages, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.pagination.hasPrev);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.pagination.hasNext);
  }
}
function UserList_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275template(4, UserList_div_42_span_4_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 42)(6, "table", 43)(7, "thead")(8, "tr")(9, "th", 44);
    \u0275\u0275text(10, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 45);
    \u0275\u0275text(12, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 46);
    \u0275\u0275text(14, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 47);
    \u0275\u0275text(16, "Fecha Registro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 47);
    \u0275\u0275text(18, "\xDAltimo Acceso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 48);
    \u0275\u0275text(20, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, UserList_div_42_tr_22_Template, 36, 24, "tr", 49)(23, UserList_div_42_tr_23_Template, 10, 3, "tr", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, UserList_div_42_div_24_Template, 14, 5, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Mostrando ", ctx_r1.users.length, " de ", ctx_r1.pagination.totalUsers, " usuarios ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchTerm || ctx_r1.roleFilter || ctx_r1.statusFilter);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.users);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.users.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagination.totalPages > 1);
  }
}
var UserList = class _UserList {
  adminService;
  subscriptions = new Subscription();
  users = [];
  pagination = {
    currentPage: 1,
    totalPages: 0,
    totalUsers: 0,
    hasNext: false,
    hasPrev: false
  };
  // Filtros y búsqueda
  searchTerm = "";
  roleFilter = "";
  statusFilter = "";
  // Estados
  isLoading = true;
  error = null;
  isUpdating = {};
  // Roles disponibles (sin admin)
  roles = ["paciente", "profesional", "voluntario"];
  itemsPerPage = 10;
  constructor(adminService) {
    this.adminService = adminService;
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers(page = 1) {
    this.isLoading = true;
    this.error = null;
    const usersSub = this.adminService.getUsers(
      page,
      this.itemsPerPage,
      this.searchTerm,
      this.roleFilter,
      this.statusFilter
      // ✅ AGREGADO: Enviar statusFilter al backend
    ).subscribe({
      next: (response) => {
        if (response.success) {
          this.users = response.data.users.filter((user) => user.role !== "admin").map((user) => this.normalizeUser(user));
          this.pagination = response.data.pagination;
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.error = "Error al cargar los usuarios";
        this.isLoading = false;
        console.error("Error loading users:", error);
      }
    });
    this.subscriptions.add(usersSub);
  }
  // Normalizar usuario para asegurar que todas las propiedades tengan valores
  normalizeUser(userData) {
    return {
      _id: userData._id || "",
      name: userData.name || "Sin nombre",
      lastName: userData.lastName || "",
      email: userData.email || "",
      role: userData.role || "paciente",
      isActive: Boolean(userData.isActive),
      createdAt: userData.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
      lastLogin: userData.lastLogin
    };
  }
  // Búsqueda y filtros
  onSearch() {
    this.pagination.currentPage = 1;
    this.loadUsers();
  }
  onFilterChange() {
    this.pagination.currentPage = 1;
    this.loadUsers();
  }
  clearFilters() {
    this.searchTerm = "";
    this.roleFilter = "";
    this.statusFilter = "";
    this.pagination.currentPage = 1;
    this.loadUsers();
  }
  // Paginación
  nextPage() {
    if (this.pagination.hasNext) {
      this.loadUsers(this.pagination.currentPage + 1);
    }
  }
  prevPage() {
    if (this.pagination.hasPrev) {
      this.loadUsers(this.pagination.currentPage - 1);
    }
  }
  goToPage(page) {
    if (page >= 1 && page <= this.pagination.totalPages) {
      this.loadUsers(page);
    }
  }
  // Gestión de usuarios
  toggleUserStatus(user) {
    this.isUpdating[user._id] = true;
    const toggleSub = this.adminService.toggleUserStatus(user._id).subscribe({
      next: (response) => {
        if (response.success) {
          user.isActive = Boolean(response.data.isActive);
        }
        this.isUpdating[user._id] = false;
      },
      error: (error) => {
        this.error = "Error al cambiar el estado del usuario";
        this.isUpdating[user._id] = false;
        console.error("Error toggling user status:", error);
      }
    });
    this.subscriptions.add(toggleSub);
  }
  updateUserRole(user, newRole) {
    if (user.role === newRole)
      return;
    this.isUpdating[user._id] = true;
    const roleSub = this.adminService.updateUserRole(user._id, newRole).subscribe({
      next: (response) => {
        if (response.success) {
          user.role = response.data.role || user.role;
        }
        this.isUpdating[user._id] = false;
      },
      error: (error) => {
        this.error = "Error al actualizar el rol del usuario";
        this.isUpdating[user._id] = false;
        console.error("Error updating user role:", error);
      }
    });
    this.subscriptions.add(roleSub);
  }
  // Método para manejar cambio de rol desde el template
  onRoleChange(user, event) {
    const target = event.target;
    if (target && target.value) {
      this.updateUserRole(user, target.value);
    }
  }
  // Utilidades
  getUserInitials(user) {
    const first = user.name.charAt(0);
    const last = user.lastName.charAt(0);
    return (first + last).toUpperCase() || "U";
  }
  getRoleBadgeClass(role) {
    const roleClasses = {
      paciente: "badge-paciente",
      profesional: "badge-profesional",
      voluntario: "badge-voluntario"
    };
    return roleClasses[role] || "badge-default";
  }
  getRoleDisplayName(role) {
    const roleNames = {
      paciente: "Paciente",
      profesional: "Profesional",
      voluntario: "Voluntario"
    };
    return roleNames[role] || role;
  }
  getStatusBadgeClass(isActive) {
    return isActive ? "badge-active" : "badge-inactive";
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("es-ES");
  }
  getPageNumbers() {
    const pages = [];
    const totalPages = this.pagination.totalPages;
    const currentPage = this.pagination.currentPage;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);
    if (currentPage <= 3) {
      end = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      start = Math.max(totalPages - 4, 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static \u0275fac = function UserList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserList)(\u0275\u0275directiveInject(AdminService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserList, selectors: [["app-user-list"]], decls: 43, vars: 10, consts: [["neverLoggedIn", ""], [1, "user-management"], [1, "management-header"], [1, "header-content"], [1, "management-title"], [1, "management-subtitle"], [1, "header-actions"], [1, "btn-refresh", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "refresh-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "filters-section"], [1, "filters-main"], [1, "search-box"], [1, "search-input-wrapper"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "search-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Buscar por nombre, apellido o email...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "filter-row"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "paciente"], ["value", "profesional"], ["value", "voluntario"], ["value", "active"], ["value", "inactive"], [1, "btn-clear-filters", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "clear-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "users-container", 4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "error-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "btn-retry", 3, "click"], [1, "users-container"], [1, "summary-bar"], [1, "summary-text"], ["class", "filtered-indicator", 4, "ngIf"], [1, "table-container"], [1, "users-table"], [1, "user-col"], [1, "role-col"], [1, "status-col"], [1, "date-col"], [1, "actions-col"], ["class", "user-row", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination-container", 4, "ngIf"], [1, "filtered-indicator"], [1, "user-row"], [1, "user-info-cell"], [1, "user-avatar"], [1, "user-details"], [1, "user-name"], [1, "user-email"], [1, "role-cell"], [1, "role-display"], [1, "role-badge"], [1, "role-select", 3, "change", "value", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [1, "status-cell"], [1, "status-badge"], [1, "date-cell"], [1, "date-info"], [1, "date-main"], ["class", "date-main", 4, "ngIf", "ngIfElse"], [1, "actions-cell"], [1, "action-buttons"], [1, "btn-status", 3, "click", "disabled"], ["class", "loading-text", 4, "ngIf"], [1, "btn-edit", 3, "routerLink"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [3, "value"], [1, "date-secondary"], [1, "loading-text"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "loading-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 2v4m0 12v4m8-10h-4M6 12H2"], ["colspan", "6", 1, "empty-state"], [1, "empty-content"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "empty-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["class", "btn-clear-filters", 3, "click", 4, "ngIf"], [1, "pagination-container"], [1, "pagination-info"], [1, "pagination-controls"], [1, "pagination-btn", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "page-numbers"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "page-btn", 3, "click"]], template: function UserList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
      \u0275\u0275text(4, "Gesti\xF3n de Usuarios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Administra usuarios, roles y estados de cuenta");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
      \u0275\u0275listener("click", function UserList_Template_button_click_8_listener() {
        return ctx.loadUsers(ctx.pagination.currentPage);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 8);
      \u0275\u0275element(10, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 14);
      \u0275\u0275element(17, "path", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function UserList_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function UserList_Template_input_input_18_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 17)(20, "select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function UserList_Template_select_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.roleFilter, $event) || (ctx.roleFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UserList_Template_select_change_20_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(21, "option", 19);
      \u0275\u0275text(22, "Todos los roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 20);
      \u0275\u0275text(24, "Pacientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 21);
      \u0275\u0275text(26, "Profesionales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 22);
      \u0275\u0275text(28, "Voluntarios");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function UserList_Template_select_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UserList_Template_select_change_29_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(30, "option", 19);
      \u0275\u0275text(31, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 23);
      \u0275\u0275text(33, "Activos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 24);
      \u0275\u0275text(35, "Inactivos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "button", 25);
      \u0275\u0275listener("click", function UserList_Template_button_click_36_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 26);
      \u0275\u0275element(38, "path", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " Limpiar ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(40, UserList_div_40_Template, 4, 0, "div", 28)(41, UserList_div_41_Template, 10, 1, "div", 29)(42, UserList_div_42_Template, 25, 6, "div", 30);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275classProp("loading", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Actualizando..." : "Actualizar", " ");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.roleFilter);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.user-management[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 2rem;\n  min-height: 80vh;\n}\n.management-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.management-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .management-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 0.5rem 0;\n}\n.management-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .management-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin: 0;\n}\n.management-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.management-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2980b9;\n  transform: translateY(-1px);\n}\n.management-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.management-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]   .refresh-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.management-header[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]   .refresh-icon.loading[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.filters-main[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-end;\n}\n.search-box[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.search-box[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  color: #6c757d;\n}\n.search-box[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0.75rem 1rem 0.75rem 3rem;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.search-box[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.filter-row[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  background: white;\n  font-size: 0.9rem;\n  min-width: 140px;\n}\n.filter-row[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n}\n.filter-row[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #6c757d;\n  color: white;\n  border: none;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.filter-row[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n.filter-row[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%]   .clear-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  color: #e74c3c;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 1.5rem;\n}\n.btn-retry[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-retry[_ngcontent-%COMP%]:hover {\n  background: #2980b9;\n}\n.users-container[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.summary-bar[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.summary-bar[_ngcontent-%COMP%]   .summary-text[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.summary-bar[_ngcontent-%COMP%]   .summary-text[_ngcontent-%COMP%]   .filtered-indicator[_ngcontent-%COMP%] {\n  color: #3498db;\n  font-weight: 500;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n.users-table[_ngcontent-%COMP%]   th.user-col[_ngcontent-%COMP%] {\n  width: 25%;\n  min-width: 200px;\n}\n.users-table[_ngcontent-%COMP%]   th.role-col[_ngcontent-%COMP%] {\n  width: 15%;\n  min-width: 120px;\n}\n.users-table[_ngcontent-%COMP%]   th.status-col[_ngcontent-%COMP%] {\n  width: 12%;\n  min-width: 100px;\n}\n.users-table[_ngcontent-%COMP%]   th.date-col[_ngcontent-%COMP%] {\n  width: 20%;\n  min-width: 150px;\n}\n.users-table[_ngcontent-%COMP%]   th.actions-col[_ngcontent-%COMP%] {\n  width: 18%;\n  min-width: 140px;\n}\n.user-info-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.user-info-cell[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #2980b9);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.user-info-cell[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.user-info-cell[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2c3e50;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-info-cell[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.role-cell[_ngcontent-%COMP%]   .role-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.role-cell[_ngcontent-%COMP%]   .role-display[_ngcontent-%COMP%]   .role-badge[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-align: center;\n  display: inline-block;\n}\n.role-cell[_ngcontent-%COMP%]   .role-display[_ngcontent-%COMP%]   .role-badge.badge-paciente[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n  border: 1px solid #bbdefb;\n}\n.role-cell[_ngcontent-%COMP%]   .role-display[_ngcontent-%COMP%]   .role-badge.badge-profesional[_ngcontent-%COMP%] {\n  background: #e8f5e8;\n  color: #2e7d32;\n  border: 1px solid #c8e6c9;\n}\n.role-cell[_ngcontent-%COMP%]   .role-display[_ngcontent-%COMP%]   .role-badge.badge-voluntario[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #ef6c00;\n  border: 1px solid #ffe0b2;\n}\n.role-cell[_ngcontent-%COMP%]   .role-display[_ngcontent-%COMP%]   .role-select[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background: white;\n  font-size: 0.85rem;\n  width: 100%;\n}\n.role-cell[_ngcontent-%COMP%]   .role-display[_ngcontent-%COMP%]   .role-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n}\n.role-cell[_ngcontent-%COMP%]   .role-display[_ngcontent-%COMP%]   .role-select[_ngcontent-%COMP%]:disabled {\n  background: #f8f9fa;\n  cursor: not-allowed;\n}\n.status-cell[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-align: center;\n  display: inline-block;\n  min-width: 70px;\n}\n.status-cell[_ngcontent-%COMP%]   .status-badge.badge-active[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.status-cell[_ngcontent-%COMP%]   .status-badge.badge-inactive[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f1b0b7;\n}\n.date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   .register-date[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   .last-login[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-start;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-width: 110px;\n  justify-content: center;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status.btn-activate[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status.btn-activate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c3e6cb;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status.btn-deactivate[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status.btn-deactivate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f1b0b7;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%]   .loading-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 3rem 1.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  color: #6c757d;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 1.5rem;\n}\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-top: 1px solid #e9ecef;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.pagination-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #2c3e50;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n}\n.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #3498db;\n  color: white;\n  border-color: #3498db;\n}\n.pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #2c3e50;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n  min-width: 40px;\n}\n.page-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n  border-color: #3498db;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .filters-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .filter-row[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 768px) {\n  .user-management[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .management-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .management-header[_ngcontent-%COMP%]   .management-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .filter-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    border-bottom: none;\n    padding: 1rem;\n  }\n  .users-table[_ngcontent-%COMP%]   td.user-info-cell[_ngcontent-%COMP%] {\n    background: #f8f9fa;\n    border-radius: 8px 8px 0 0;\n    padding-bottom: 0.75rem;\n  }\n  .users-table[_ngcontent-%COMP%]   td.role-cell[_ngcontent-%COMP%]   .role-display[_ngcontent-%COMP%]   .role-badge[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .users-table[_ngcontent-%COMP%]   td.status-cell[_ngcontent-%COMP%], \n   .users-table[_ngcontent-%COMP%]   td.date-cell[_ngcontent-%COMP%], \n   .users-table[_ngcontent-%COMP%]   td.actions-cell[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #e9ecef;\n  }\n  .users-table[_ngcontent-%COMP%]   td.date-cell[_ngcontent-%COMP%]   .date-info[_ngcontent-%COMP%]   .last-login[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .users-table[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 1rem;\n    border: 1px solid #e9ecef;\n    border-radius: 8px;\n    background: white;\n  }\n  .pagination-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .page-numbers[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 480px) {\n  .management-header[_ngcontent-%COMP%]   .management-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .user-info-cell[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .user-info-cell[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n.users-table[_ngcontent-%COMP%]   th.user-col[_ngcontent-%COMP%] {\n  width: 22%;\n  min-width: 200px;\n}\n.users-table[_ngcontent-%COMP%]   th.role-col[_ngcontent-%COMP%] {\n  width: 15%;\n  min-width: 120px;\n}\n.users-table[_ngcontent-%COMP%]   th.status-col[_ngcontent-%COMP%] {\n  width: 12%;\n  min-width: 100px;\n}\n.users-table[_ngcontent-%COMP%]   th.date-col[_ngcontent-%COMP%] {\n  width: 18%;\n  min-width: 140px;\n}\n.users-table[_ngcontent-%COMP%]   th.actions-col[_ngcontent-%COMP%] {\n  width: 15%;\n  min-width: 140px;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-start;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status[_ngcontent-%COMP%], \n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status[_ngcontent-%COMP%]:disabled, \n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status.btn-activate[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status.btn-activate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c3e6cb;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status.btn-deactivate[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status.btn-deactivate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f1b0b7;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-status[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%]   .loading-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]:hover {\n  background: #ffeaa7;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n@media (max-width: 768px) {\n  .users-table[_ngcontent-%COMP%]   th.user-col[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n  .users-table[_ngcontent-%COMP%]   th.role-col[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n  .users-table[_ngcontent-%COMP%]   th.status-col[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n  .users-table[_ngcontent-%COMP%]   th.date-col[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n  .users-table[_ngcontent-%COMP%]   th.actions-col[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=user-list.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserList, [{
    type: Component,
    args: [{ selector: "app-user-list", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div class="user-management">\r
  <!-- Header -->\r
  <div class="management-header">\r
    <div class="header-content">\r
      <h1 class="management-title">Gesti\xF3n de Usuarios</h1>\r
      <p class="management-subtitle">Administra usuarios, roles y estados de cuenta</p>\r
    </div>\r
    <div class="header-actions">\r
      <button class="btn-refresh" (click)="loadUsers(pagination.currentPage)" [disabled]="isLoading">\r
        <svg class="refresh-icon" [class.loading]="isLoading" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
        </svg>\r
        {{ isLoading ? 'Actualizando...' : 'Actualizar' }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Filtros y B\xFAsqueda - Mejor organizados -->\r
  <div class="filters-section">\r
    <div class="filters-main">\r
      <div class="search-box">\r
        <div class="search-input-wrapper">\r
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
          <input \r
            type="text" \r
            [(ngModel)]="searchTerm" \r
            (input)="onSearch()"\r
            placeholder="Buscar por nombre, apellido o email..." \r
            class="search-input"\r
          >\r
        </div>\r
      </div>\r
\r
      <div class="filter-row">\r
        <select [(ngModel)]="roleFilter" (change)="onFilterChange()" class="filter-select">\r
          <option value="">Todos los roles</option>\r
          <option value="paciente">Pacientes</option>\r
          <option value="profesional">Profesionales</option>\r
          <option value="voluntario">Voluntarios</option>\r
        </select>\r
\r
        <select [(ngModel)]="statusFilter" (change)="onFilterChange()" class="filter-select">\r
          <option value="">Todos los estados</option>\r
          <option value="active">Activos</option>\r
          <option value="inactive">Inactivos</option>\r
        </select>\r
\r
        <button (click)="clearFilters()" class="btn-clear-filters">\r
          <svg class="clear-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
          </svg>\r
          Limpiar\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Estados de carga y error -->\r
  <div *ngIf="isLoading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Cargando usuarios...</p>\r
  </div>\r
\r
  <div *ngIf="error && !isLoading" class="error-state">\r
    <div class="error-icon">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
      </svg>\r
    </div>\r
    <h3>Error al cargar los usuarios</h3>\r
    <p>{{ error }}</p>\r
    <button class="btn-retry" (click)="loadUsers(pagination.currentPage)">Reintentar</button>\r
  </div>\r
\r
  <!-- Tabla de usuarios -->\r
  <div *ngIf="!isLoading && !error" class="users-container">\r
    <!-- Resumen -->\r
    <div class="summary-bar">\r
      <span class="summary-text">\r
        Mostrando {{ users.length }} de {{ pagination.totalUsers }} usuarios\r
        <span *ngIf="searchTerm || roleFilter || statusFilter" class="filtered-indicator">\r
          (filtrados)\r
        </span>\r
      </span>\r
    </div>\r
\r
    <!-- Tabla -->\r
    <div class="table-container">\r
      <table class="users-table">\r
        <thead>\r
          <tr>\r
            <th class="user-col">Usuario</th>\r
            <th class="role-col">Rol</th>\r
            <th class="status-col">Estado</th>\r
            <th class="date-col">Fecha Registro</th>\r
            <th class="date-col">\xDAltimo Acceso</th>\r
            <th class="actions-col">Acciones</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let user of users" class="user-row">\r
            <!-- Informaci\xF3n del usuario -->\r
            <td class="user-info-cell">\r
              <div class="user-avatar">\r
                {{ getUserInitials(user) }}\r
              </div>\r
              <div class="user-details">\r
                <span class="user-name">{{ user.name || 'Sin nombre' }} {{ user.lastName || '' }}</span>\r
                <span class="user-email">{{ user.email }}</span>\r
              </div>\r
            </td>\r
\r
            <!-- Rol con colores -->\r
            <td class="role-cell">\r
              <div class="role-display">\r
                <span class="role-badge" [class]="getRoleBadgeClass(user.role)">\r
                  {{ getRoleDisplayName(user.role) }}\r
                </span>\r
                <select \r
                  [value]="user.role" \r
                  (change)="onRoleChange(user, $event)"\r
                  [disabled]="isUpdating[user._id]"\r
                  class="role-select"\r
                >\r
                  <option *ngFor="let role of roles" [value]="role">\r
                    {{ getRoleDisplayName(role) }}\r
                  </option>\r
                </select>\r
              </div>\r
            </td>\r
\r
            <!-- Estado -->\r
            <td class="status-cell">\r
              <span class="status-badge" [class]="getStatusBadgeClass(user.isActive)">\r
                {{ user.isActive ? 'Activo' : 'Inactivo' }}\r
              </span>\r
            </td>\r
\r
            <!-- Fecha Registro -->\r
            <td class="date-cell">\r
              <div class="date-info">\r
                <span class="date-main">{{ formatDate(user.createdAt) }}</span>\r
              </div>\r
            </td>\r
\r
            <!-- \xDAltimo Acceso -->\r
            <td class="date-cell">\r
              <div class="date-info">\r
                <span class="date-main" *ngIf="user.lastLogin; else neverLoggedIn">\r
                  {{ formatDate(user.lastLogin) }}\r
                </span>\r
                <ng-template #neverLoggedIn>\r
                  <span class="date-secondary">Nunca</span>\r
                </ng-template>\r
              </div>\r
            </td>\r
\r
            <!-- Acciones -->\r
            <td class="actions-cell">\r
              <div class="action-buttons">\r
                <button \r
                  (click)="toggleUserStatus(user)"\r
                  [disabled]="isUpdating[user._id]"\r
                  [class]="user.isActive ? 'btn-deactivate' : 'btn-activate'"\r
                  class="btn-status"\r
                >\r
                  <span *ngIf="!isUpdating[user._id]">\r
                    {{ user.isActive ? 'Desactivar' : 'Activar' }}\r
                  </span>\r
                  <span *ngIf="isUpdating[user._id]" class="loading-text">\r
                    <svg class="loading-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v4m0 12v4m8-10h-4M6 12H2"></path>\r
                    </svg>\r
                    Procesando...\r
                  </span>\r
                </button>\r
\r
                <a [routerLink]="['/admin/users/user-edit', user._id]" class="btn-edit">\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                  </svg>\r
                  Editar\r
                </a>\r
              </div>\r
            </td>\r
          </tr>\r
\r
          <!-- Estado vac\xEDo -->\r
          <tr *ngIf="users.length === 0">\r
            <td colspan="6" class="empty-state">\r
              <div class="empty-content">\r
                <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                </svg>\r
                <h3>No se encontraron usuarios</h3>\r
                <p *ngIf="searchTerm || roleFilter || statusFilter">\r
                  Intenta ajustar los filtros de b\xFAsqueda\r
                </p>\r
                <p *ngIf="!searchTerm && !roleFilter && !statusFilter">\r
                  No hay usuarios registrados en el sistema\r
                </p>\r
                <button *ngIf="searchTerm || roleFilter || statusFilter" \r
                        (click)="clearFilters()" \r
                        class="btn-clear-filters">\r
                  Limpiar filtros\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Paginaci\xF3n -->\r
    <div *ngIf="pagination.totalPages > 1" class="pagination-container">\r
      <div class="pagination-info">\r
        P\xE1gina {{ pagination.currentPage }} de {{ pagination.totalPages }}\r
      </div>\r
      \r
      <div class="pagination-controls">\r
        <button \r
          (click)="prevPage()" \r
          [disabled]="!pagination.hasPrev"\r
          class="pagination-btn"\r
        >\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\r
          </svg>\r
          Anterior\r
        </button>\r
\r
        <div class="page-numbers">\r
          <button \r
            *ngFor="let page of getPageNumbers()" \r
            (click)="goToPage(page)"\r
            [class.active]="page === pagination.currentPage"\r
            class="page-btn"\r
          >\r
            {{ page }}\r
          </button>\r
        </div>\r
\r
        <button \r
          (click)="nextPage()" \r
          [disabled]="!pagination.hasNext"\r
          class="pagination-btn"\r
        >\r
          Siguiente\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/admin/users/user-list/user-list.scss */\n.user-management {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 2rem;\n  min-height: 80vh;\n}\n.management-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.management-header .header-content .management-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 0.5rem 0;\n}\n.management-header .header-content .management-subtitle {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin: 0;\n}\n.management-header .btn-refresh {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.management-header .btn-refresh:hover:not(:disabled) {\n  background: #2980b9;\n  transform: translateY(-1px);\n}\n.management-header .btn-refresh:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.management-header .btn-refresh .refresh-icon {\n  width: 16px;\n  height: 16px;\n}\n.management-header .btn-refresh .refresh-icon.loading {\n  animation: spin 1s linear infinite;\n}\n.filters-section {\n  margin-bottom: 2rem;\n}\n.filters-main {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-end;\n}\n.search-box {\n  flex: 1;\n}\n.search-box .search-input-wrapper {\n  position: relative;\n}\n.search-box .search-input-wrapper .search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  color: #6c757d;\n}\n.search-box .search-input-wrapper .search-input {\n  width: 80%;\n  padding: 0.75rem 1rem 0.75rem 3rem;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.search-box .search-input-wrapper .search-input:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n.filter-row {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.filter-row .filter-select {\n  padding: 0.75rem 1rem;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  background: white;\n  font-size: 0.9rem;\n  min-width: 140px;\n}\n.filter-row .filter-select:focus {\n  outline: none;\n  border-color: #3498db;\n}\n.filter-row .btn-clear-filters {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #6c757d;\n  color: white;\n  border: none;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.filter-row .btn-clear-filters:hover {\n  background: #5a6268;\n}\n.filter-row .btn-clear-filters .clear-icon {\n  width: 16px;\n  height: 16px;\n}\n.loading-state,\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.loading-state .loading-spinner,\n.error-state .loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-state .error-icon,\n.error-state .error-icon {\n  width: 48px;\n  height: 48px;\n  color: #e74c3c;\n  margin-bottom: 1rem;\n}\n.loading-state h3,\n.error-state h3 {\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.loading-state p,\n.error-state p {\n  color: #6c757d;\n  margin-bottom: 1.5rem;\n}\n.btn-retry {\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-retry:hover {\n  background: #2980b9;\n}\n.users-container {\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.summary-bar {\n  padding: 1rem 1.5rem;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.summary-bar .summary-text {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.summary-bar .summary-text .filtered-indicator {\n  color: #3498db;\n  font-weight: 500;\n}\n.table-container {\n  overflow-x: auto;\n}\n.users-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.users-table th,\n.users-table td {\n  padding: 1rem 1.25rem;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.users-table th {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n.users-table th.user-col {\n  width: 25%;\n  min-width: 200px;\n}\n.users-table th.role-col {\n  width: 15%;\n  min-width: 120px;\n}\n.users-table th.status-col {\n  width: 12%;\n  min-width: 100px;\n}\n.users-table th.date-col {\n  width: 20%;\n  min-width: 150px;\n}\n.users-table th.actions-col {\n  width: 18%;\n  min-width: 140px;\n}\n.user-info-cell {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.user-info-cell .user-avatar {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #3498db,\n      #2980b9);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.user-info-cell .user-details {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.user-info-cell .user-details .user-name {\n  font-weight: 500;\n  color: #2c3e50;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-info-cell .user-details .user-email {\n  font-size: 0.8rem;\n  color: #6c757d;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.role-cell .role-display {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.role-cell .role-display .role-badge {\n  padding: 0.4rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-align: center;\n  display: inline-block;\n}\n.role-cell .role-display .role-badge.badge-paciente {\n  background: #e3f2fd;\n  color: #1976d2;\n  border: 1px solid #bbdefb;\n}\n.role-cell .role-display .role-badge.badge-profesional {\n  background: #e8f5e8;\n  color: #2e7d32;\n  border: 1px solid #c8e6c9;\n}\n.role-cell .role-display .role-badge.badge-voluntario {\n  background: #fff3e0;\n  color: #ef6c00;\n  border: 1px solid #ffe0b2;\n}\n.role-cell .role-display .role-select {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background: white;\n  font-size: 0.85rem;\n  width: 100%;\n}\n.role-cell .role-display .role-select:focus {\n  outline: none;\n  border-color: #3498db;\n}\n.role-cell .role-display .role-select:disabled {\n  background: #f8f9fa;\n  cursor: not-allowed;\n}\n.status-cell .status-badge {\n  padding: 0.4rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-align: center;\n  display: inline-block;\n  min-width: 70px;\n}\n.status-cell .status-badge.badge-active {\n  background: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.status-cell .status-badge.badge-inactive {\n  background: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f1b0b7;\n}\n.date-cell .date-info {\n  display: flex;\n  flex-direction: column;\n}\n.date-cell .date-info .register-date {\n  color: #2c3e50;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.date-cell .date-info .last-login {\n  font-size: 0.75rem;\n  color: #6c757d;\n}\n.actions-cell .action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-start;\n}\n.actions-cell .action-buttons .btn-status {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-width: 110px;\n  justify-content: center;\n}\n.actions-cell .action-buttons .btn-status:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.actions-cell .action-buttons .btn-status.btn-activate {\n  background: #d4edda;\n  color: #155724;\n}\n.actions-cell .action-buttons .btn-status.btn-activate:hover:not(:disabled) {\n  background: #c3e6cb;\n}\n.actions-cell .action-buttons .btn-status.btn-deactivate {\n  background: #f8d7da;\n  color: #721c24;\n}\n.actions-cell .action-buttons .btn-status.btn-deactivate:hover:not(:disabled) {\n  background: #f1b0b7;\n}\n.actions-cell .action-buttons .btn-status .loading-text {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.actions-cell .action-buttons .btn-status .loading-text .loading-icon {\n  width: 14px;\n  height: 14px;\n  animation: spin 1s linear infinite;\n}\n.empty-state {\n  padding: 3rem 1.5rem;\n}\n.empty-state .empty-content {\n  text-align: center;\n}\n.empty-state .empty-content .empty-icon {\n  width: 64px;\n  height: 64px;\n  color: #6c757d;\n  margin-bottom: 1rem;\n}\n.empty-state .empty-content h3 {\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.empty-state .empty-content p {\n  color: #6c757d;\n  margin-bottom: 1.5rem;\n}\n.pagination-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-top: 1px solid #e9ecef;\n}\n.pagination-info {\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.pagination-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #2c3e50;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n}\n.pagination-btn:hover:not(:disabled) {\n  background: #3498db;\n  color: white;\n  border-color: #3498db;\n}\n.pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.page-numbers {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-btn {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #2c3e50;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n  min-width: 40px;\n}\n.page-btn:hover {\n  background: #e9ecef;\n}\n.page-btn.active {\n  background: #3498db;\n  color: white;\n  border-color: #3498db;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1024px) {\n  .filters-main {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .filter-row {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 768px) {\n  .user-management {\n    padding: 1rem;\n  }\n  .management-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .management-header .management-title {\n    font-size: 2rem;\n  }\n  .filter-row {\n    flex-wrap: wrap;\n  }\n  .users-table th,\n  .users-table td {\n    padding: 0.75rem 1rem;\n  }\n  .users-table th {\n    display: none;\n  }\n  .users-table td {\n    display: block;\n    border-bottom: none;\n    padding: 1rem;\n  }\n  .users-table td.user-info-cell {\n    background: #f8f9fa;\n    border-radius: 8px 8px 0 0;\n    padding-bottom: 0.75rem;\n  }\n  .users-table td.role-cell .role-display .role-badge {\n    display: none;\n  }\n  .users-table td.status-cell,\n  .users-table td.date-cell,\n  .users-table td.actions-cell {\n    border-bottom: 1px solid #e9ecef;\n  }\n  .users-table td.date-cell .date-info .last-login {\n    display: none;\n  }\n  .users-table .user-row {\n    display: block;\n    margin-bottom: 1rem;\n    border: 1px solid #e9ecef;\n    border-radius: 8px;\n    background: white;\n  }\n  .pagination-container {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .page-numbers {\n    display: none;\n  }\n}\n@media (max-width: 480px) {\n  .management-header .management-title {\n    font-size: 1.75rem;\n  }\n  .user-info-cell {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .user-info-cell .user-avatar {\n    align-self: flex-start;\n  }\n  .actions-cell .action-buttons {\n    flex-direction: column;\n  }\n  .pagination-controls {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n}\n.users-table th,\n.users-table td {\n  padding: 1rem 1.25rem;\n  text-align: left;\n  border-bottom: 1px solid #e9ecef;\n}\n.users-table th {\n  background: #f8f9fa;\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.85rem;\n  white-space: nowrap;\n}\n.users-table th.user-col {\n  width: 22%;\n  min-width: 200px;\n}\n.users-table th.role-col {\n  width: 15%;\n  min-width: 120px;\n}\n.users-table th.status-col {\n  width: 12%;\n  min-width: 100px;\n}\n.users-table th.date-col {\n  width: 18%;\n  min-width: 140px;\n}\n.users-table th.actions-col {\n  width: 15%;\n  min-width: 140px;\n}\n.actions-cell .action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-start;\n}\n.actions-cell .action-buttons .btn-status,\n.actions-cell .action-buttons .btn-edit {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.actions-cell .action-buttons .btn-status:disabled,\n.actions-cell .action-buttons .btn-edit:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.actions-cell .action-buttons .btn-status.btn-activate {\n  background: #d4edda;\n  color: #155724;\n}\n.actions-cell .action-buttons .btn-status.btn-activate:hover:not(:disabled) {\n  background: #c3e6cb;\n}\n.actions-cell .action-buttons .btn-status.btn-deactivate {\n  background: #f8d7da;\n  color: #721c24;\n}\n.actions-cell .action-buttons .btn-status.btn-deactivate:hover:not(:disabled) {\n  background: #f1b0b7;\n}\n.actions-cell .action-buttons .btn-status .loading-text {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.actions-cell .action-buttons .btn-status .loading-text .loading-icon {\n  width: 14px;\n  height: 14px;\n  animation: spin 1s linear infinite;\n}\n.actions-cell .action-buttons .btn-edit {\n  background: #fff3cd;\n  color: #856404;\n}\n.actions-cell .action-buttons .btn-edit:hover {\n  background: #ffeaa7;\n}\n.actions-cell .action-buttons .btn-edit svg {\n  width: 14px;\n  height: 14px;\n}\n@media (max-width: 768px) {\n  .users-table th.user-col {\n    width: 25%;\n  }\n  .users-table th.role-col {\n    width: 20%;\n  }\n  .users-table th.status-col {\n    width: 15%;\n  }\n  .users-table th.date-col {\n    width: 20%;\n  }\n  .users-table th.actions-col {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=user-list.css.map */\n"] }]
  }], () => [{ type: AdminService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserList, { className: "UserList", filePath: "src/app/admin/users/user-list/user-list.ts", lineNumber: 34 });
})();
export {
  UserList
};
//# sourceMappingURL=chunk-ALQ6HFS7.js.map
