import {
  environment
} from "./chunk-BPEFTJA2.js";
import {
  HttpClient,
  Router
} from "./chunk-6P7TFCYF.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
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
  debounceTime,
  distinctUntilChanged,
  setClassMetadata,
  takeUntil,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DEJWN6HZ.js";

// src/app/admin/appointments/appointments.ts
function Appointments_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "div", 48);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando sesiones...");
    \u0275\u0275elementEnd()();
  }
}
function Appointments_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 51);
    \u0275\u0275element(3, "path", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Error al cargar las sesiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 53);
    \u0275\u0275listener("click", function Appointments_div_54_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadAppointments());
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
function Appointments_div_55_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, " (filtradas) ");
    \u0275\u0275elementEnd();
  }
}
function Appointments_div_55_div_6_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 87);
    \u0275\u0275text(2, "Motivo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const appointment_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(appointment_r3.reason);
  }
}
function Appointments_div_55_div_6_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function Appointments_div_55_div_6_button_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const appointment_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelAppointment(appointment_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 90);
    \u0275\u0275element(2, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appointment_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isUpdating[appointment_r3._id]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isUpdating[appointment_r3._id] ? "Cancelando..." : "Cancelar", " ");
  }
}
function Appointments_div_55_div_6_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function Appointments_div_55_div_6_button_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const appointment_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editAppointment(appointment_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 90);
    \u0275\u0275element(2, "path", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
  }
}
function Appointments_div_55_div_6_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function Appointments_div_55_div_6_button_52_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const appointment_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRescheduleModal(appointment_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 90);
    \u0275\u0275element(2, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Reagendar ");
    \u0275\u0275elementEnd();
  }
}
function Appointments_div_55_div_6_button_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function Appointments_div_55_div_6_button_53_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const appointment_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmAppointment(appointment_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 90);
    \u0275\u0275element(2, "path", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const appointment_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isUpdating[appointment_r3._id]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isUpdating[appointment_r3._id] ? "Confirmando..." : "Confirmar", " ");
  }
}
function Appointments_div_55_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "h3", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 67)(7, "div", 68)(8, "div", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 70);
    \u0275\u0275element(10, "path", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 72)(12, "span", 73);
    \u0275\u0275text(13, "Fecha y Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 74);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 75);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 70);
    \u0275\u0275element(20, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 72)(22, "span", 73);
    \u0275\u0275text(23, "Paciente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 74);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 77);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 70);
    \u0275\u0275element(30, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "div", 72)(32, "span", 73);
    \u0275\u0275text(33, "Profesional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 74);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 77);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 70);
    \u0275\u0275element(40, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "div", 72)(42, "span", 73);
    \u0275\u0275text(43, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 74);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 79);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(48, Appointments_div_55_div_6_div_48_Template, 5, 1, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 81);
    \u0275\u0275template(50, Appointments_div_55_div_6_button_50_Template, 4, 2, "button", 82)(51, Appointments_div_55_div_6_button_51_Template, 4, 0, "button", 83)(52, Appointments_div_55_div_6_button_52_Template, 4, 0, "button", 84)(53, Appointments_div_55_div_6_button_53_Template, 4, 2, "button", 85);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const appointment_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(appointment_r3.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(appointment_r3.title);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(appointment_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusDisplay(appointment_r3.status), " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(appointment_r3.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", appointment_r3.duration, " min");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getPatientName(appointment_r3), " ", ctx_r1.getPatientLastName(appointment_r3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getPatientEmail(appointment_r3));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getProfessionalName(appointment_r3), " ", ctx_r1.getProfessionalLastName(appointment_r3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getProfessionalEmail(appointment_r3));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getTypeDisplay(appointment_r3.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getPlatformDisplay(appointment_r3.meetingPlatform));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", appointment_r3.reason);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", appointment_r3.status === "scheduled" || appointment_r3.status === "confirmed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", appointment_r3.status !== "cancelled");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", appointment_r3.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", appointment_r3.status === "scheduled");
  }
}
function Appointments_div_55_div_7_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Intenta ajustar los filtros de b\xFAsqueda ");
    \u0275\u0275elementEnd();
  }
}
function Appointments_div_55_div_7_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " No hay sesiones programadas en el sistema ");
    \u0275\u0275elementEnd();
  }
}
function Appointments_div_55_div_7_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function Appointments_div_55_div_7_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(1, " Limpiar filtros ");
    \u0275\u0275elementEnd();
  }
}
function Appointments_div_55_div_7_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function Appointments_div_55_div_7_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCreateModal());
    });
    \u0275\u0275text(1, " Crear primera sesi\xF3n ");
    \u0275\u0275elementEnd();
  }
}
function Appointments_div_55_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 98);
    \u0275\u0275element(3, "path", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "No se encontraron sesiones");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Appointments_div_55_div_7_p_6_Template, 2, 0, "p", 100)(7, Appointments_div_55_div_7_p_7_Template, 2, 0, "p", 100)(8, Appointments_div_55_div_7_button_8_Template, 2, 0, "button", 101)(9, Appointments_div_55_div_7_button_9_Template, 2, 0, "button", 102);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.searchTerm || ctx_r1.statusFilter || ctx_r1.typeFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchTerm && !ctx_r1.statusFilter && !ctx_r1.typeFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchTerm || ctx_r1.statusFilter || ctx_r1.typeFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchTerm && !ctx_r1.statusFilter && !ctx_r1.typeFilter);
  }
}
function Appointments_div_55_div_8_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 111);
    \u0275\u0275listener("click", function Appointments_div_55_div_8_button_9_Template_button_click_0_listener() {
      const page_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", page_r12 === ctx_r1.pagination.currentPage);
    \u0275\u0275property("disabled", page_r12 === -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPageButtonText(page_r12), " ");
  }
}
function Appointments_div_55_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 105)(4, "button", 106);
    \u0275\u0275listener("click", function Appointments_div_55_div_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 51);
    \u0275\u0275element(6, "path", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 108);
    \u0275\u0275template(9, Appointments_div_55_div_8_button_9_Template, 2, 4, "button", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 106);
    \u0275\u0275listener("click", function Appointments_div_55_div_8_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(11, " Siguiente ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 51);
    \u0275\u0275element(13, "path", 110);
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
function Appointments_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275template(4, Appointments_div_55_span_4_Template, 2, 0, "span", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 58);
    \u0275\u0275template(6, Appointments_div_55_div_6_Template, 54, 21, "div", 59)(7, Appointments_div_55_div_7_Template, 10, 4, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, Appointments_div_55_div_8_Template, 14, 5, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Mostrando ", ctx_r1.filteredAppointments.length, " de ", ctx_r1.pagination.totalItems, " sesiones ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchTerm || ctx_r1.statusFilter || ctx_r1.typeFilter);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredAppointments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredAppointments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pagination.totalPages > 1);
  }
}
function Appointments_div_56_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r14 = ctx.$implicit;
    \u0275\u0275property("value", user_r14._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", user_r14.name, " ", user_r14.lastName, " - ", user_r14.email, " ");
  }
}
function Appointments_div_56_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275text(1, " Selecciona un profesional ");
    \u0275\u0275elementEnd();
  }
}
function Appointments_div_56_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r15 = ctx.$implicit;
    \u0275\u0275property("value", user_r15._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", user_r15.name, " ", user_r15.lastName, " - ", user_r15.email, " ");
  }
}
function Appointments_div_56_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275text(1, " Selecciona un paciente ");
    \u0275\u0275elementEnd();
  }
}
function Appointments_div_56_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275text(1, " El t\xEDtulo es requerido ");
    \u0275\u0275elementEnd();
  }
}
function Appointments_div_56_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275text(1, " La fecha es requerida ");
    \u0275\u0275elementEnd();
  }
}
function Appointments_div_56_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275text(1, " La hora es requerida ");
    \u0275\u0275elementEnd();
  }
}
function Appointments_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275listener("click", function Appointments_div_56_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreateModal());
    });
    \u0275\u0275elementStart(1, "div", 113);
    \u0275\u0275listener("click", function Appointments_div_56_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 114)(3, "h2", 115);
    \u0275\u0275text(4, "Crear Nueva Cita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 116);
    \u0275\u0275listener("click", function Appointments_div_56_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreateModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 51);
    \u0275\u0275element(7, "path", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 117, 0);
    \u0275\u0275listener("ngSubmit", function Appointments_div_56_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createAppointment());
    });
    \u0275\u0275elementStart(10, "div", 118)(11, "div", 119)(12, "label", 120);
    \u0275\u0275text(13, "Profesional *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 121, 1);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_56_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAppointment.professionalId, $event) || (ctx_r1.newAppointment.professionalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 29);
    \u0275\u0275text(17, "Seleccionar profesional");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, Appointments_div_56_option_18_Template, 2, 4, "option", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, Appointments_div_56_div_19_Template, 2, 0, "div", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 119)(21, "label", 120);
    \u0275\u0275text(22, "Paciente *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 124, 2);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_56_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAppointment.patientId, $event) || (ctx_r1.newAppointment.patientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 29);
    \u0275\u0275text(26, "Seleccionar paciente");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, Appointments_div_56_option_27_Template, 2, 4, "option", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, Appointments_div_56_div_28_Template, 2, 0, "div", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 119)(30, "label", 120);
    \u0275\u0275text(31, "T\xEDtulo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 125, 3);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_56_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAppointment.title, $event) || (ctx_r1.newAppointment.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, Appointments_div_56_div_34_Template, 2, 0, "div", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 126)(36, "div", 119)(37, "label", 120);
    \u0275\u0275text(38, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 127, 4);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_56_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAppointment.date, $event) || (ctx_r1.newAppointment.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, Appointments_div_56_div_41_Template, 2, 0, "div", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 119)(43, "label", 120);
    \u0275\u0275text(44, "Hora *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 128, 5);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_56_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAppointment.time, $event) || (ctx_r1.newAppointment.time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, Appointments_div_56_div_47_Template, 2, 0, "div", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 119)(49, "label", 120);
    \u0275\u0275text(50, "Duraci\xF3n (minutos) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "select", 129, 6);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_56_Template_select_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAppointment.duration, $event) || (ctx_r1.newAppointment.duration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(53, "option", 130);
    \u0275\u0275text(54, "30 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 131);
    \u0275\u0275text(56, "45 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 132);
    \u0275\u0275text(58, "60 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 133);
    \u0275\u0275text(60, "90 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 134);
    \u0275\u0275text(62, "120 minutos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 119)(64, "label", 120);
    \u0275\u0275text(65, "Tipo de cita *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "select", 135, 7);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_56_Template_select_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAppointment.type, $event) || (ctx_r1.newAppointment.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(68, "option", 35);
    \u0275\u0275text(69, "Consulta m\xE9dica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "option", 38);
    \u0275\u0275text(71, "Acompa\xF1amiento psicol\xF3gico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "option", 36);
    \u0275\u0275text(73, "Seguimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "option", 37);
    \u0275\u0275text(75, "Emergencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "option", 136);
    \u0275\u0275text(77, "Evaluaci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 119)(79, "label", 120);
    \u0275\u0275text(80, "Motivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "textarea", 137);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_56_Template_textarea_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newAppointment.reason, $event) || (ctx_r1.newAppointment.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 138)(83, "button", 139);
    \u0275\u0275listener("click", function Appointments_div_56_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCreateModal());
    });
    \u0275\u0275text(84, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 140);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const appointmentForm_r16 = \u0275\u0275reference(9);
    const professionalSelect_r17 = \u0275\u0275reference(15);
    const patientSelect_r18 = \u0275\u0275reference(24);
    const titleInput_r19 = \u0275\u0275reference(33);
    const dateInput_r20 = \u0275\u0275reference(40);
    const timeInput_r21 = \u0275\u0275reference(46);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAppointment.professionalId);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.professionals);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", professionalSelect_r17.invalid && professionalSelect_r17.touched);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAppointment.patientId);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.patients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", patientSelect_r18.invalid && patientSelect_r18.touched);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAppointment.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", titleInput_r19.invalid && titleInput_r19.touched);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAppointment.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", dateInput_r20.invalid && dateInput_r20.touched);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAppointment.time);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", timeInput_r21.invalid && timeInput_r21.touched);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAppointment.duration);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAppointment.type);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newAppointment.reason);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isCreating || !appointmentForm_r16.form.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isCreating ? "Creando..." : "Crear Cita", " ");
  }
}
function Appointments_div_57_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r23 = ctx.$implicit;
    \u0275\u0275property("value", user_r23._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", user_r23.name, " ", user_r23.lastName, " - ", user_r23.email, " ");
  }
}
function Appointments_div_57_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r24 = ctx.$implicit;
    \u0275\u0275property("value", user_r24._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", user_r24.name, " ", user_r24.lastName, " - ", user_r24.email, " ");
  }
}
function Appointments_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275listener("click", function Appointments_div_57_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditModal());
    });
    \u0275\u0275elementStart(1, "div", 113);
    \u0275\u0275listener("click", function Appointments_div_57_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 114)(3, "h2", 115);
    \u0275\u0275text(4, "Editar Cita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 116);
    \u0275\u0275listener("click", function Appointments_div_57_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 51);
    \u0275\u0275element(7, "path", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 117);
    \u0275\u0275listener("ngSubmit", function Appointments_div_57_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateAppointment());
    });
    \u0275\u0275elementStart(9, "div", 118)(10, "div", 119)(11, "label", 120);
    \u0275\u0275text(12, "Profesional *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 143);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_57_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAppointmentData.professionalId, $event) || (ctx_r1.editAppointmentData.professionalId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 29);
    \u0275\u0275text(15, "Seleccionar profesional");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, Appointments_div_57_option_16_Template, 2, 4, "option", 122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 119)(18, "label", 120);
    \u0275\u0275text(19, "Paciente *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 144);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_57_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAppointmentData.patientId, $event) || (ctx_r1.editAppointmentData.patientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "option", 29);
    \u0275\u0275text(22, "Seleccionar paciente");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, Appointments_div_57_option_23_Template, 2, 4, "option", 122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 119)(25, "label", 120);
    \u0275\u0275text(26, "T\xEDtulo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_57_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAppointmentData.title, $event) || (ctx_r1.editAppointmentData.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 126)(29, "div", 119)(30, "label", 120);
    \u0275\u0275text(31, "Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 146);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_57_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAppointmentData.date, $event) || (ctx_r1.editAppointmentData.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 119)(34, "label", 120);
    \u0275\u0275text(35, "Hora *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 147);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_57_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAppointmentData.time, $event) || (ctx_r1.editAppointmentData.time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 119)(38, "label", 120);
    \u0275\u0275text(39, "Duraci\xF3n (minutos) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 148);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_57_Template_select_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAppointmentData.duration, $event) || (ctx_r1.editAppointmentData.duration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(41, "option", 130);
    \u0275\u0275text(42, "30 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 131);
    \u0275\u0275text(44, "45 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 149);
    \u0275\u0275text(46, "60 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 133);
    \u0275\u0275text(48, "90 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 134);
    \u0275\u0275text(50, "120 minutos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 119)(52, "label", 120);
    \u0275\u0275text(53, "Tipo de cita *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "select", 150);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_57_Template_select_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAppointmentData.type, $event) || (ctx_r1.editAppointmentData.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(55, "option", 35);
    \u0275\u0275text(56, "Consulta m\xE9dica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 38);
    \u0275\u0275text(58, "Acompa\xF1amiento psicol\xF3gico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 36);
    \u0275\u0275text(60, "Seguimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 37);
    \u0275\u0275text(62, "Emergencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "option", 136);
    \u0275\u0275text(64, "Evaluaci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 119)(66, "label", 120);
    \u0275\u0275text(67, "Motivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "textarea", 151);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_57_Template_textarea_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editAppointmentData.reason, $event) || (ctx_r1.editAppointmentData.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 138)(70, "button", 139);
    \u0275\u0275listener("click", function Appointments_div_57_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeEditModal());
    });
    \u0275\u0275text(71, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 140);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAppointmentData.professionalId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.professionals);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAppointmentData.patientId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.patients);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAppointmentData.title);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAppointmentData.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAppointmentData.time);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAppointmentData.duration);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAppointmentData.type);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editAppointmentData.reason);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isEditing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditing ? "Guardando..." : "Guardar Cambios", " ");
  }
}
function Appointments_div_58_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156)(1, "div", 69)(2, "strong");
    \u0275\u0275text(3, "Paciente:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 69)(6, "strong");
    \u0275\u0275text(7, "Profesional:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 69)(10, "strong");
    \u0275\u0275text(11, "Motivo original:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getPatientName(ctx_r1.reschedulingAppointment), " ", ctx_r1.getPatientLastName(ctx_r1.reschedulingAppointment), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getProfessionalName(ctx_r1.reschedulingAppointment), " ", ctx_r1.getProfessionalLastName(ctx_r1.reschedulingAppointment), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.reschedulingAppointment.reason || "Sin motivo especificado", " ");
  }
}
function Appointments_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275listener("click", function Appointments_div_58_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRescheduleModal());
    });
    \u0275\u0275elementStart(1, "div", 113);
    \u0275\u0275listener("click", function Appointments_div_58_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 114)(3, "h2", 115);
    \u0275\u0275text(4, "Reagendar Cita Cancelada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 116);
    \u0275\u0275listener("click", function Appointments_div_58_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRescheduleModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 51);
    \u0275\u0275element(7, "path", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 117);
    \u0275\u0275listener("ngSubmit", function Appointments_div_58_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rescheduleAppointment());
    });
    \u0275\u0275elementStart(9, "div", 118);
    \u0275\u0275template(10, Appointments_div_58_div_10_Template, 13, 5, "div", 152);
    \u0275\u0275elementStart(11, "div", 126)(12, "div", 119)(13, "label", 120);
    \u0275\u0275text(14, "Nueva Fecha *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_58_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rescheduleData.date, $event) || (ctx_r1.rescheduleData.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 119)(17, "label", 120);
    \u0275\u0275text(18, "Nueva Hora *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_58_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rescheduleData.time, $event) || (ctx_r1.rescheduleData.time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 119)(21, "label", 120);
    \u0275\u0275text(22, "Duraci\xF3n (minutos) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 155);
    \u0275\u0275twoWayListener("ngModelChange", function Appointments_div_58_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rescheduleData.duration, $event) || (ctx_r1.rescheduleData.duration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 130);
    \u0275\u0275text(25, "30 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 131);
    \u0275\u0275text(27, "45 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 149);
    \u0275\u0275text(29, "60 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 133);
    \u0275\u0275text(31, "90 minutos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 134);
    \u0275\u0275text(33, "120 minutos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 138)(35, "button", 139);
    \u0275\u0275listener("click", function Appointments_div_58_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeRescheduleModal());
    });
    \u0275\u0275text(36, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 140);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.reschedulingAppointment);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rescheduleData.date);
    \u0275\u0275property("min", ctx_r1.getTodayDate());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rescheduleData.time);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rescheduleData.duration);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r1.isRescheduling);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRescheduling ? "Reagendando..." : "Reagendar Cita", " ");
  }
}
var Appointments = class _Appointments {
  http;
  router;
  // Estados principales
  appointments = [];
  filteredAppointments = [];
  professionals = [];
  patients = [];
  isLoading = false;
  isCreating = false;
  error = "";
  // Filtros y búsqueda
  searchTerm = "";
  statusFilter = "";
  typeFilter = "";
  dateFilter = "";
  // Paginación
  pagination = {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasNext: false,
    hasPrev: false
  };
  // Modal y formularios
  showCreateModal = false;
  newAppointment = {
    title: "",
    date: "",
    time: "",
    duration: 60,
    type: "consultation",
    reason: "",
    patientId: "",
    professionalId: ""
  };
  // Estados para edición
  showEditModal = false;
  editingAppointment = null;
  editAppointmentData = {
    title: "",
    date: "",
    time: "",
    duration: 60,
    type: "consultation",
    reason: "",
    patientId: "",
    professionalId: ""
  };
  isEditing = false;
  // NUEVO: Estados para reagendar
  showRescheduleModal = false;
  reschedulingAppointment = null;
  rescheduleData = {
    date: "",
    time: "",
    duration: 60
  };
  isRescheduling = false;
  // Estados de actualización individual
  isUpdating = {};
  // Subject para destrucción
  destroy$ = new Subject();
  searchSubject = new Subject();
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  ngOnInit() {
    this.setupSearch();
    this.loadAppointments();
    this.loadUsers();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchSubject.complete();
  }
  /**
   * Configura el debounce para la búsqueda
   */
  setupSearch() {
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.applyFilters();
    });
  }
  /**
   * Carga todas las sesiones
   */
  loadAppointments() {
    this.isLoading = true;
    this.error = "";
    const params = {
      page: this.pagination.currentPage.toString(),
      limit: "12"
    };
    if (this.statusFilter)
      params.status = this.statusFilter;
    if (this.typeFilter)
      params.type = this.typeFilter;
    if (this.dateFilter)
      params.date = this.dateFilter;
    if (this.searchTerm)
      params.search = this.searchTerm;
    this.http.get(`${environment.apiUrl}/appointments/admin`, { params }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log("Appointments response:", response);
        this.appointments = response.appointments || response.data?.appointments || response.data?.docs || response.data || response.docs || response || [];
        this.filteredAppointments = [...this.appointments];
        this.pagination = {
          currentPage: response.data?.page || response.page || response.currentPage || this.pagination.currentPage,
          totalPages: response.data?.totalPages || response.totalPages || response.pages || 1,
          totalItems: response.data?.totalDocs || response.data?.total || response.totalDocs || response.total || this.appointments.length,
          hasNext: response.data?.hasNextPage || response.hasNextPage || response.hasNext || false,
          hasPrev: response.data?.hasPrevPage || response.hasPrevPage || response.hasPrev || false
        };
        this.isLoading = false;
        console.log("Appointments loaded:", this.appointments.length);
      },
      error: (error) => {
        console.error("Error loading appointments from /appointments/admin:", error);
        this.error = error.error?.message || "Error al cargar las sesiones";
        this.isLoading = false;
      }
    });
  }
  /**
   * Carga usuarios (profesionales y pacientes) usando las NUEVAS rutas
   */
  loadUsers() {
    console.log("\u{1F50D} Cargando usuarios desde nuevas rutas...");
    this.http.get(`${environment.apiUrl}/users/professionals`).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.professionals = response.data || response;
        console.log("\u2705 Profesionales cargados:", this.professionals.length);
        if (this.professionals.length === 0) {
          this.loadProfessionalsFallback();
        }
      },
      error: (error) => {
        console.error("\u274C Error cargando profesionales:", error);
        this.loadProfessionalsFallback();
      }
    });
    this.http.get(`${environment.apiUrl}/users/patients`).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.patients = response.data || response;
        console.log("\u2705 Pacientes cargados:", this.patients.length);
        if (this.patients.length === 0) {
          this.loadPatientsFallback();
        }
      },
      error: (error) => {
        console.error("\u274C Error cargando pacientes:", error);
        this.loadPatientsFallback();
      }
    });
  }
  /**
   * Fallback para cargar profesionales
   */
  loadProfessionalsFallback() {
    console.log("\u{1F504} Intentando cargar profesionales con ruta alternativa...");
    this.http.get(`${environment.apiUrl}/users/role/professional`).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.professionals = response.data || response;
        console.log("\u2705 Profesionales cargados (fallback):", this.professionals.length);
        if (this.professionals.length === 0) {
          this.loadUsersFromAdmin();
        }
      },
      error: (err) => {
        console.error("\u274C Error en fallback de profesionales:", err);
        this.loadUsersFromAdmin();
      }
    });
  }
  /**
   * Fallback para cargar pacientes
   */
  loadPatientsFallback() {
    console.log("\u{1F504} Intentando cargar pacientes con ruta alternativa...");
    this.http.get(`${environment.apiUrl}/users/role/patient`).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.patients = response.data || response;
        console.log("\u2705 Pacientes cargados (fallback):", this.patients.length);
        if (this.patients.length === 0) {
          this.loadUsersFromAdmin();
        }
      },
      error: (err) => {
        console.error("\u274C Error en fallback de pacientes:", err);
        this.loadUsersFromAdmin();
      }
    });
  }
  /**
   * Carga todos los usuarios desde admin y los filtra por rol
   */
  loadUsersFromAdmin() {
    console.log("\u{1F504} Cargando usuarios desde ruta de admin...");
    this.http.get(`${environment.apiUrl}/admin/users`).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        const allUsers = response.users || response.data || response;
        if (Array.isArray(allUsers)) {
          this.professionals = allUsers.filter((user) => user.role === "professional" || user.role === "profesional" || user.role === "doctor" || user.role === "terapeuta" || user.role === "psicologo" || user.role === "medico");
          this.patients = allUsers.filter((user) => user.role === "patient" || user.role === "paciente" || user.role === "usuario" || user.role === "cliente");
          console.log("\u2705 Usuarios cargados desde admin - Profesionales:", this.professionals.length);
          console.log("\u2705 Usuarios cargados desde admin - Pacientes:", this.patients.length);
          if (this.professionals.length === 0 && this.patients.length === 0) {
            console.warn("\u26A0\uFE0F No se encontraron usuarios en el sistema");
            this.showNoUsersWarning();
          }
        }
      },
      error: (error) => {
        console.error("\u274C Error cargando usuarios desde admin:", error);
        this.showNoUsersWarning();
      }
    });
  }
  /**
   * Muestra advertencia cuando no hay usuarios
   */
  showNoUsersWarning() {
    console.warn("\u26A0\uFE0F No se pudieron cargar los usuarios del sistema");
    this.professionals = [];
    this.patients = [];
  }
  /**
   * Maneja cambios en la búsqueda
   */
  onSearch() {
    this.searchSubject.next(this.searchTerm);
  }
  /**
   * Maneja cambios en los filtros
   */
  onFilterChange() {
    this.applyFilters();
  }
  /**
   * Aplica todos los filtros
   */
  applyFilters() {
    let filtered = this.appointments;
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter((appointment) => appointment.title.toLowerCase().includes(searchLower) || this.getPatientName(appointment)?.toLowerCase().includes(searchLower) || this.getPatientLastName(appointment)?.toLowerCase().includes(searchLower) || this.getProfessionalName(appointment)?.toLowerCase().includes(searchLower) || this.getProfessionalLastName(appointment)?.toLowerCase().includes(searchLower) || this.getPatientEmail(appointment)?.toLowerCase().includes(searchLower) || this.getProfessionalEmail(appointment)?.toLowerCase().includes(searchLower));
    }
    if (this.statusFilter) {
      filtered = filtered.filter((appointment) => appointment.status === this.statusFilter);
    }
    if (this.typeFilter) {
      filtered = filtered.filter((appointment) => appointment.type === this.typeFilter);
    }
    if (this.dateFilter) {
      filtered = filtered.filter((appointment) => {
        try {
          const appointmentDate = new Date(appointment.date).toISOString().split("T")[0];
          return appointmentDate === this.dateFilter;
        } catch (error) {
          return false;
        }
      });
    }
    this.filteredAppointments = filtered;
    this.pagination.totalItems = filtered.length;
    this.pagination.totalPages = Math.ceil(filtered.length / 12);
    this.pagination.currentPage = 1;
  }
  /**
   * Helper para obtener nombre del paciente de forma segura
   */
  getPatientName(appointment) {
    return typeof appointment.patientId === "object" ? appointment.patientId.name : "";
  }
  /**
   * Helper para obtener apellido del paciente de forma segura
   */
  getPatientLastName(appointment) {
    return typeof appointment.patientId === "object" ? appointment.patientId.lastName : "";
  }
  /**
   * Helper para obtener email del paciente de forma segura
   */
  getPatientEmail(appointment) {
    return typeof appointment.patientId === "object" ? appointment.patientId.email : "";
  }
  /**
   * Helper para obtener nombre del profesional de forma segura
   */
  getProfessionalName(appointment) {
    return typeof appointment.professionalId === "object" ? appointment.professionalId.name : "";
  }
  /**
   * Helper para obtener apellido del profesional de forma segura
   */
  getProfessionalLastName(appointment) {
    return typeof appointment.professionalId === "object" ? appointment.professionalId.lastName : "";
  }
  /**
   * Helper para obtener email del profesional de forma segura
   */
  getProfessionalEmail(appointment) {
    return typeof appointment.professionalId === "object" ? appointment.professionalId.email : "";
  }
  /**
   * Helper para obtener ID del paciente de forma segura
   */
  getPatientId(appointment) {
    return typeof appointment.patientId === "object" ? appointment.patientId._id : appointment.patientId;
  }
  /**
   * Helper para obtener ID del profesional de forma segura
   */
  getProfessionalId(appointment) {
    return typeof appointment.professionalId === "object" ? appointment.professionalId._id : appointment.professionalId;
  }
  /**
   * Limpia todos los filtros
   */
  clearFilters() {
    this.searchTerm = "";
    this.statusFilter = "";
    this.typeFilter = "";
    this.dateFilter = "";
    this.applyFilters();
  }
  /**
   * Obtiene la clase CSS para el estado de la tarjeta
   */
  getStatusClass(status) {
    const statusClasses = {
      "scheduled": "status-scheduled",
      "confirmed": "status-confirmed",
      "in_progress": "status-in-progress",
      "completed": "status-completed",
      "cancelled": "status-cancelled"
    };
    return statusClasses[status] || "";
  }
  /**
   * Obtiene la clase CSS para el badge de estado
   */
  getStatusBadgeClass(status) {
    const badgeClasses = {
      "scheduled": "badge-scheduled",
      "confirmed": "badge-confirmed",
      "in_progress": "badge-in-progress",
      "completed": "badge-completed",
      "cancelled": "badge-cancelled"
    };
    return badgeClasses[status] || "";
  }
  /**
   * Obtiene el texto display para el estado
   */
  getStatusDisplay(status) {
    const statusMap = {
      "scheduled": "Programada",
      "confirmed": "Confirmada",
      "in_progress": "En Progreso",
      "completed": "Completada",
      "cancelled": "Cancelada"
    };
    return statusMap[status] || status;
  }
  /**
   * Obtiene el texto display para el tipo
   */
  getTypeDisplay(type) {
    const typeMap = {
      "consultation": "Consulta",
      "therapy": "Terapia",
      "follow_up": "Seguimiento",
      "emergency": "Emergencia",
      "evaluation": "Evaluaci\xF3n"
    };
    return typeMap[type] || type;
  }
  /**
   * Obtiene el texto display para la plataforma
   */
  getPlatformDisplay(platform) {
    const platformMap = {
      "in_person": "Presencial",
      "zoom": "Zoom",
      "google_meet": "Google Meet",
      "teams": "Microsoft Teams",
      "phone": "Tel\xE9fono"
    };
    return platformMap[platform] || platform;
  }
  /**
   * Formatea fecha y hora con manejo robusto de errores
   */
  formatDateTime(dateString) {
    try {
      if (!dateString)
        return "Fecha no disponible";
      let date;
      if (dateString.includes("T")) {
        date = new Date(dateString);
      } else if (dateString.includes(" ")) {
        date = new Date(dateString.replace(" ", "T"));
      } else {
        date = new Date(dateString);
      }
      if (isNaN(date.getTime())) {
        console.warn("Fecha inv\xE1lida:", dateString);
        return "Fecha no disponible";
      }
      return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch (error) {
      console.error("Error formateando fecha:", error, "Fecha original:", dateString);
      return "Fecha no disponible";
    }
  }
  /**
   * Obtiene la fecha actual en formato YYYY-MM-DD
   */
  getTodayDate() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  /**
   * Cancela una cita
   */
  cancelAppointment(appointment) {
    if (!confirm("\xBFEst\xE1s seguro de que deseas cancelar esta cita?")) {
      return;
    }
    this.isUpdating[appointment._id] = true;
    this.http.patch(`${environment.apiUrl}/appointments/${appointment._id}/cancel`, {}).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log("Appointment cancelled:", response);
        this.loadAppointments();
        this.isUpdating[appointment._id] = false;
      },
      error: (error) => {
        console.error("Error cancelling appointment:", error);
        alert("Error al cancelar la cita: " + (error.error?.message || "Error desconocido"));
        this.isUpdating[appointment._id] = false;
      }
    });
  }
  /**
   * Confirma una cita
   */
  confirmAppointment(appointment) {
    this.isUpdating[appointment._id] = true;
    this.http.put(`${environment.apiUrl}/appointments/${appointment._id}`, {
      status: "confirmed"
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log("Appointment confirmed:", response);
        this.loadAppointments();
        this.isUpdating[appointment._id] = false;
      },
      error: (error) => {
        console.error("Error confirming appointment:", error);
        alert("Error al confirmar la cita: " + (error.error?.message || "Error desconocido"));
        this.isUpdating[appointment._id] = false;
      }
    });
  }
  /**
   * Abre el modal de edición
   */
  editAppointment(appointment) {
    this.editingAppointment = appointment;
    this.showEditModal = true;
    const appointmentDate = new Date(appointment.date);
    const dateStr = appointmentDate.toISOString().split("T")[0];
    const timeStr = appointmentDate.toTimeString().slice(0, 5);
    this.editAppointmentData = {
      title: appointment.title,
      date: dateStr,
      time: timeStr,
      duration: appointment.duration,
      type: appointment.type,
      reason: appointment.reason || "",
      patientId: this.getPatientId(appointment),
      professionalId: this.getProfessionalId(appointment)
    };
  }
  /**
   * Guarda los cambios de la cita editada - VERSIÓN SEGURA
   */
  updateAppointment() {
    if (!this.validateEditForm()) {
      return;
    }
    this.isEditing = true;
    const dateTime = `${this.editAppointmentData.date}T${this.editAppointmentData.time}:00.000Z`;
    const appointmentData = {
      title: this.editAppointmentData.title,
      date: dateTime,
      duration: this.editAppointmentData.duration,
      type: this.editAppointmentData.type,
      reason: this.editAppointmentData.reason,
      patientId: this.editAppointmentData.patientId,
      professionalId: this.editAppointmentData.professionalId
    };
    this.http.put(`${environment.apiUrl}/appointments/${this.editingAppointment._id}`, appointmentData).pipe(takeUntil(this.destroy$)).subscribe({
      next: (updatedAppointment) => {
        console.log("\u2705 Cita actualizada, recargando lista completa...");
        this.loadAppointments();
        this.closeEditModal();
        this.isEditing = false;
      },
      error: (error) => {
        console.error("Error updating appointment:", error);
        alert("Error al actualizar la cita: " + (error.error?.message || "Error desconocido"));
        this.isEditing = false;
      }
    });
  }
  /**
   * Cierra el modal de edición
   */
  closeEditModal() {
    this.showEditModal = false;
    this.editingAppointment = null;
    this.editAppointmentData = {
      title: "",
      date: "",
      time: "",
      duration: 60,
      type: "consultation",
      reason: "",
      patientId: "",
      professionalId: ""
    };
  }
  /**
   * Valida el formulario de edición
   */
  validateEditForm() {
    if (!this.editAppointmentData.title.trim()) {
      alert("El t\xEDtulo es requerido");
      return false;
    }
    if (!this.editAppointmentData.date) {
      alert("La fecha es requerida");
      return false;
    }
    if (!this.editAppointmentData.time) {
      alert("La hora es requerida");
      return false;
    }
    if (!this.editAppointmentData.patientId) {
      alert("Selecciona un paciente");
      return false;
    }
    if (!this.editAppointmentData.professionalId) {
      alert("Selecciona un profesional");
      return false;
    }
    return true;
  }
  /**
   * NUEVO: Abre el modal de reagendar
   */
  openRescheduleModal(appointment) {
    this.reschedulingAppointment = appointment;
    const appointmentDate = new Date(appointment.date);
    const dateStr = appointmentDate.toISOString().split("T")[0];
    const timeStr = appointmentDate.toTimeString().slice(0, 5);
    this.rescheduleData = {
      date: dateStr,
      time: timeStr,
      duration: appointment.duration
    };
    this.showRescheduleModal = true;
  }
  /**
   * NUEVO: Cierra el modal de reagendar
   */
  closeRescheduleModal() {
    this.showRescheduleModal = false;
    this.reschedulingAppointment = null;
    this.rescheduleData = {
      date: "",
      time: "",
      duration: 60
    };
    this.isRescheduling = false;
  }
  /**
   * NUEVO: Ejecuta el reagendo de la cita
   */
  rescheduleAppointment() {
    return __async(this, null, function* () {
      if (!this.validateRescheduleForm()) {
        return;
      }
      if (!this.reschedulingAppointment) {
        return;
      }
      this.isRescheduling = true;
      try {
        const dateTime = `${this.rescheduleData.date}T${this.rescheduleData.time}:00.000Z`;
        const response = yield this.http.put(`${environment.apiUrl}/appointments/${this.reschedulingAppointment._id}/reschedule`, {
          newDate: dateTime,
          newDuration: this.rescheduleData.duration
        }).pipe(takeUntil(this.destroy$)).toPromise();
        console.log("\u2705 Cita reagendada exitosamente:", response);
        this.loadAppointments();
        this.closeRescheduleModal();
        this.showNotification("Cita reagendada exitosamente", "success");
      } catch (error) {
        console.error("Error reagendando cita:", error);
        alert("Error al reagendar la cita: " + (error.error?.message || "Error desconocido"));
      } finally {
        this.isRescheduling = false;
      }
    });
  }
  /**
   * NUEVO: Valida el formulario de reagendar
   */
  validateRescheduleForm() {
    if (!this.rescheduleData.date) {
      alert("La fecha es requerida");
      return false;
    }
    if (!this.rescheduleData.time) {
      alert("La hora es requerida");
      return false;
    }
    const selectedDateTime = /* @__PURE__ */ new Date(`${this.rescheduleData.date}T${this.rescheduleData.time}`);
    if (selectedDateTime < /* @__PURE__ */ new Date()) {
      alert("No puedes reagendar citas en fechas pasadas");
      return false;
    }
    return true;
  }
  /**
   * NUEVO: Muestra notificación (puedes implementar tu sistema de notificaciones)
   */
  showNotification(message, type) {
    if (type === "success") {
      alert(`\u2705 ${message}`);
    } else if (type === "error") {
      alert(`\u274C ${message}`);
    } else {
      alert(`\u2139\uFE0F ${message}`);
    }
  }
  /**
   * Abre el modal de creación
   */
  openCreateModal() {
    this.showCreateModal = true;
    this.newAppointment = {
      title: "",
      date: "",
      time: "",
      duration: 60,
      type: "consultation",
      reason: "",
      patientId: "",
      professionalId: ""
    };
  }
  /**
   * Cierra el modal de creación
   */
  closeCreateModal() {
    this.showCreateModal = false;
  }
  /**
   * Crea una nueva cita - COMO ADMIN
   */
  createAppointment() {
    if (!this.validateAppointmentForm()) {
      return;
    }
    this.isCreating = true;
    const dateTime = `${this.newAppointment.date}T${this.newAppointment.time}:00.000Z`;
    const appointmentData = {
      title: this.newAppointment.title,
      date: dateTime,
      duration: this.newAppointment.duration,
      type: this.newAppointment.type,
      reason: this.newAppointment.reason,
      patientId: this.newAppointment.patientId,
      professionalId: this.newAppointment.professionalId
    };
    this.http.post(`${environment.apiUrl}/appointments/admin`, appointmentData).pipe(takeUntil(this.destroy$)).subscribe({
      next: (appointment) => {
        this.loadAppointments();
        this.closeCreateModal();
        this.isCreating = false;
      },
      error: (error) => {
        console.error("Error creating appointment:", error);
        alert("Error al crear la cita: " + (error.error?.message || "Error desconocido"));
        this.isCreating = false;
      }
    });
  }
  /**
   * Valida el formulario de creación
   */
  validateAppointmentForm() {
    if (!this.newAppointment.title.trim()) {
      alert("El t\xEDtulo es requerido");
      return false;
    }
    if (!this.newAppointment.date) {
      alert("La fecha es requerida");
      return false;
    }
    if (!this.newAppointment.time) {
      alert("La hora es requerida");
      return false;
    }
    if (!this.newAppointment.patientId) {
      alert("Selecciona un paciente");
      return false;
    }
    if (!this.newAppointment.professionalId) {
      alert("Selecciona un profesional");
      return false;
    }
    const selectedDateTime = /* @__PURE__ */ new Date(`${this.newAppointment.date}T${this.newAppointment.time}`);
    const selectedHour = selectedDateTime.getHours();
    if (selectedHour < 8 || selectedHour > 18) {
      alert("Las citas deben estar entre 8:00 AM y 6:00 PM");
      return false;
    }
    if (selectedDateTime < /* @__PURE__ */ new Date()) {
      alert("No puedes crear citas en fechas pasadas");
      return false;
    }
    return true;
  }
  /**
   * Navega a la página anterior
   */
  prevPage() {
    if (this.pagination.hasPrev) {
      this.pagination.currentPage--;
      this.loadAppointments();
    }
  }
  /**
   * Navega a la página siguiente
   */
  nextPage() {
    if (this.pagination.hasNext) {
      this.pagination.currentPage++;
      this.loadAppointments();
    }
  }
  /**
   * Va a una página específica
   */
  goToPage(page) {
    if (page >= 1 && page <= this.pagination.totalPages) {
      this.pagination.currentPage = page;
      this.loadAppointments();
    }
  }
  /**
   * Obtiene los números de página para la paginación
   */
  getPageNumbers() {
    const pages = [];
    const totalPages = this.pagination.totalPages;
    const currentPage = this.pagination.currentPage;
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push(-1);
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(-1);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(totalPages);
      }
    }
    return pages;
  }
  /**
   * Obtiene el texto para el botón de paginación
   */
  getPageButtonText(page) {
    return page === -1 ? "..." : page.toString();
  }
  /**
   * Verifica si un botón de página está deshabilitado
   */
  isPageButtonDisabled(page) {
    return page === -1;
  }
  static \u0275fac = function Appointments_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Appointments)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Appointments, selectors: [["app-appointments-management"]], decls: 59, vars: 14, consts: [["appointmentForm", "ngForm"], ["professionalSelect", "ngModel"], ["patientSelect", "ngModel"], ["titleInput", "ngModel"], ["dateInput", "ngModel"], ["timeInput", "ngModel"], ["durationSelect", "ngModel"], ["typeSelect", "ngModel"], [1, "appointments-management"], [1, "management-header"], [1, "header-content"], [1, "management-title"], [1, "management-subtitle"], [1, "header-actions"], [1, "btn-primary", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "btn-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "btn-refresh", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "refresh-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "filters-section"], [1, "filters-main"], [1, "search-box"], [1, "search-input-wrapper"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "search-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Buscar por t\xEDtulo, paciente o profesional...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "filter-row"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "scheduled"], ["value", "confirmed"], ["value", "in_progress"], ["value", "completed"], ["value", "cancelled"], ["value", "consultation"], ["value", "follow_up"], ["value", "emergency"], ["value", "therapy"], ["type", "date", 1, "filter-select", 3, "ngModelChange", "change", "ngModel"], [1, "btn-clear-filters", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "clear-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "appointments-container", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "error-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "btn-retry", 3, "click"], [1, "appointments-container"], [1, "summary-bar"], [1, "summary-text"], ["class", "filtered-indicator", 4, "ngIf"], [1, "appointments-grid"], ["class", "appointment-card", 3, "class", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination-container", 4, "ngIf"], [1, "filtered-indicator"], [1, "appointment-card"], [1, "card-header"], [1, "appointment-title"], [1, "status-badge"], [1, "card-content"], [1, "info-row"], [1, "info-item"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "info-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "info-content"], [1, "info-label"], [1, "info-value"], [1, "info-duration"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "info-email"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [1, "info-platform"], ["class", "reason-section", 4, "ngIf"], [1, "card-actions"], ["class", "btn-cancel", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-edit", 3, "click", 4, "ngIf"], ["class", "btn-reschedule", 3, "click", 4, "ngIf"], ["class", "btn-confirm", 3, "disabled", "click", 4, "ngIf"], [1, "reason-section"], [1, "reason-label"], [1, "reason-text"], [1, "btn-cancel", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "action-icon"], [1, "btn-edit", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "btn-reschedule", 3, "click"], [1, "btn-confirm", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "empty-state"], [1, "empty-content"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "empty-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [4, "ngIf"], ["class", "btn-clear-filters", 3, "click", 4, "ngIf"], ["class", "btn-primary", 3, "click", 4, "ngIf"], [1, "pagination-container"], [1, "pagination-info"], [1, "pagination-controls"], [1, "pagination-btn", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "page-numbers"], ["class", "page-btn", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "page-btn", 3, "click", "disabled"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-close", 3, "click"], [3, "ngSubmit"], [1, "modal-body"], [1, "form-group"], [1, "form-label"], ["name", "professionalId", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error-message", 4, "ngIf"], ["name", "patientId", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "title", "placeholder", "Ej: Consulta de seguimiento, Entrega de kit...", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "date", "name", "date", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "time", "name", "time", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "duration", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "30"], ["value", "45"], ["value", "60", "selected", ""], ["value", "90"], ["value", "120"], ["name", "type", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "evaluation"], ["name", "reason", "placeholder", "Descripci\xF3n del motivo de la cita...", "rows", "3", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [3, "value"], [1, "error-message"], ["name", "editProfessionalId", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["name", "editPatientId", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "editTitle", "placeholder", "Ej: Consulta de seguimiento, Entrega de kit...", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "editDate", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "time", "name", "editTime", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "editDuration", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "60"], ["name", "editType", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["name", "editReason", "placeholder", "Descripci\xF3n del motivo de la cita...", "rows", "3", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["class", "readonly-info", 4, "ngIf"], ["type", "date", "name", "rescheduleDate", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel", "min"], ["type", "time", "name", "rescheduleTime", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "rescheduleDuration", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], [1, "readonly-info"]], template: function Appointments_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "h1", 11);
      \u0275\u0275text(4, "Gesti\xF3n de Sesiones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 12);
      \u0275\u0275text(6, "Administra citas y calendario de profesionales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 13)(8, "button", 14);
      \u0275\u0275listener("click", function Appointments_Template_button_click_8_listener() {
        return ctx.openCreateModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 15);
      \u0275\u0275element(10, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Nueva Cita ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "button", 17);
      \u0275\u0275listener("click", function Appointments_Template_button_click_12_listener() {
        return ctx.loadAppointments();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 18);
      \u0275\u0275element(14, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "div", 20)(17, "div", 21)(18, "div", 22)(19, "div", 23);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 24);
      \u0275\u0275element(21, "path", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function Appointments_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function Appointments_Template_input_input_22_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 27)(24, "select", 28);
      \u0275\u0275twoWayListener("ngModelChange", function Appointments_Template_select_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Appointments_Template_select_change_24_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(25, "option", 29);
      \u0275\u0275text(26, "Todos los estados");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 30);
      \u0275\u0275text(28, "Programada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 31);
      \u0275\u0275text(30, "Confirmada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 32);
      \u0275\u0275text(32, "En progreso");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "option", 33);
      \u0275\u0275text(34, "Completada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 34);
      \u0275\u0275text(36, "Cancelada");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "select", 28);
      \u0275\u0275twoWayListener("ngModelChange", function Appointments_Template_select_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.typeFilter, $event) || (ctx.typeFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Appointments_Template_select_change_37_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(38, "option", 29);
      \u0275\u0275text(39, "Todos los tipos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "option", 35);
      \u0275\u0275text(41, "Consulta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "option", 36);
      \u0275\u0275text(43, "Seguimiento");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 37);
      \u0275\u0275text(45, "Emergencia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 38);
      \u0275\u0275text(47, "Terapia");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function Appointments_Template_input_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dateFilter, $event) || (ctx.dateFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Appointments_Template_input_change_48_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 40);
      \u0275\u0275listener("click", function Appointments_Template_button_click_49_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 41);
      \u0275\u0275element(51, "path", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " Limpiar ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(53, Appointments_div_53_Template, 4, 0, "div", 43)(54, Appointments_div_54_Template, 10, 1, "div", 44)(55, Appointments_div_55_Template, 9, 6, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, Appointments_div_56_Template, 87, 17, "div", 46)(57, Appointments_div_57_Template, 74, 12, "div", 46)(58, Appointments_div_58_Template, 39, 7, "div", 46);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275classProp("loading", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Actualizando..." : "Actualizar", " ");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.typeFilter);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.dateFilter);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCreateModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRescheduleModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n\n.appointments-management[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n  min-height: 80vh;\n  background: #f8fafc;\n  position: relative;\n}\n.appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #ffffff;\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  margin-bottom: 2rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .management-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .management-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #6b7280;\n  margin: 0;\n}\n.appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2980b9;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: #f1f5f9;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(233.86, 239.9, 245.94);\n  color: #1f2937;\n}\n.appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]   .refresh-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]   .refresh-icon.loading[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  margin-bottom: 2rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 500px;\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  background: #ffffff;\n  color: #1f2937;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: transparent;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f1f5f9;\n  color: #1f2937;\n}\n.appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%]   .clear-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.appointments-management[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 3rem;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.appointments-management[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f1f5f9;\n  border-top: 3px solid #3498db;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.appointments-management[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6b7280;\n  font-size: 1rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 3rem;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  text-align: center;\n}\n.appointments-management[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4rem;\n  height: 4rem;\n  background: white;\n  border-radius: 50%;\n  color: #ef4444;\n}\n.appointments-management[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1f2937;\n  font-size: 1.25rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6b7280;\n  max-width: 400px;\n}\n.appointments-management[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.appointments-management[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(234.9802955665, 21.0197044335, 21.0197044335);\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .summary-bar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .summary-bar[_ngcontent-%COMP%]   .summary-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .summary-bar[_ngcontent-%COMP%]   .summary-text[_ngcontent-%COMP%]   .filtered-indicator[_ngcontent-%COMP%] {\n  color: #3498db;\n  font-weight: 500;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 1.5rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card.status-scheduled[_ngcontent-%COMP%] {\n  border-left: 4px solid #f59e0b;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card.status-confirmed[_ngcontent-%COMP%] {\n  border-left: 4px solid #3498db;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card.status-in-progress[_ngcontent-%COMP%] {\n  border-left: 4px solid #06b6d4;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card.status-completed[_ngcontent-%COMP%] {\n  border-left: 4px solid #27ae60;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card.status-cancelled[_ngcontent-%COMP%] {\n  border-left: 4px solid #ef4444;\n  opacity: 0.8;\n  position: relative;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card.status-cancelled[_ngcontent-%COMP%]::before {\n  content: "Cancelada";\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  background: #ef4444;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  font-size: 0.7rem;\n  font-weight: 600;\n  border-radius: 0 12px 0 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card.status-cancelled[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card.status-cancelled[_ngcontent-%COMP%]:hover::before {\n  background: rgb(234.9802955665, 21.0197044335, 21.0197044335);\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .appointment-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #1f2937;\n  flex: 1;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.badge-scheduled[_ngcontent-%COMP%] {\n  background: #fef5e7;\n  color: #f59e0b;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.badge-confirmed[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.badge-in-progress[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  color: #0ea5e9;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.badge-completed[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #64748b;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .status-badge.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  flex: 1;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n@media (min-width: 768px) {\n  .appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: #9ca3af;\n  margin-top: 0.25rem;\n  flex-shrink: 0;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 500;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-duration[_ngcontent-%COMP%], \n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-email[_ngcontent-%COMP%], \n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-platform[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .reason-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .reason-section[_ngcontent-%COMP%]   .reason-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .reason-section[_ngcontent-%COMP%]   .reason-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.5;\n  background: #f1f5f9;\n  padding: 1rem;\n  border-radius: 8px;\n  border-left: 3px solid #3498db;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  flex: 1;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button.btn-cancel[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ef4444;\n  color: white;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button.btn-edit[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button.btn-edit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #3b82f6;\n  color: white;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button.btn-confirm[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button.btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #10b981;\n  color: white;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button.btn-reschedule[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  color: #0369a1;\n  border: 1px solid #bae6fd;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button.btn-reschedule[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0369a1;\n  color: white;\n  border-color: #0369a1;\n  transform: translateY(-1px);\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button.btn-reschedule[_ngcontent-%COMP%]:disabled {\n  background: #f1f5f9;\n  color: #94a3b8;\n  border-color: #e2e8f0;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button.btn-reschedule[_ngcontent-%COMP%]:disabled:hover {\n  background: #f1f5f9;\n  color: #94a3b8;\n  border-color: #e2e8f0;\n  transform: none;\n}\n.status-cancelled[_ngcontent-%COMP%]   .appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%], \n.status-cancelled[_ngcontent-%COMP%]   .appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%], \n.status-cancelled[_ngcontent-%COMP%]   .appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.status-cancelled[_ngcontent-%COMP%]   .appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .btn-reschedule[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 1.5rem;\n  text-align: center;\n  max-width: 400px;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  color: #9ca3af;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1f2937;\n  font-size: 1.25rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%], \n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #ffffff;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: #ffffff;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f1f5f9;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pagination-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2.5rem;\n  height: 2.5rem;\n  background: #ffffff;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f1f5f9;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-btn.active[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n  border-color: #3498db;\n}\n.appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:disabled {\n  background: transparent;\n  border: none;\n  cursor: default;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 2rem;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: #6b7280;\n  padding: 0.5rem;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #1f2937;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .readonly-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0f9ff 0%,\n      #e0f2fe 100%);\n  border: 1px solid #bae6fd;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .readonly-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .readonly-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .readonly-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0369a1;\n  font-weight: 600;\n  display: inline-block;\n  min-width: 120px;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .readonly-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:last-child {\n  padding-top: 0.75rem;\n  border-top: 1px solid #bae6fd;\n  margin-top: 0.75rem;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.5rem;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]::after {\n  content: " *";\n  color: #ef4444;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: #ffffff;\n  color: #1f2937;\n  transition: all 0.2s ease;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, \n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus, \n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder, \n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]::placeholder, \n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  font-family: inherit;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #ef4444;\n  margin-top: 0.5rem;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f1f5f9;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(223.15, 232.25, 241.35);\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2980b9;\n}\n.modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-reschedule {\n  0% {\n    box-shadow: 0 0 0 0 rgba(3, 105, 161, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 6px rgba(3, 105, 161, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(3, 105, 161, 0);\n  }\n}\n.btn-reschedule.pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse-reschedule 2s infinite;\n}\n@media (max-width: 768px) {\n  .appointments-management[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%], \n   .appointments-management[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%]   .filters-main[_ngcontent-%COMP%]   .filter-row[_ngcontent-%COMP%]   .btn-clear-filters[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .appointments-container[_ngcontent-%COMP%]   .appointments-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .readonly-info[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .readonly-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    min-width: 100px;\n    font-size: 0.875rem;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%], \n   .appointments-management[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%], \n   .appointments-management[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .appointments-management[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .appointments-management[_ngcontent-%COMP%]   .btn-reschedule[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.75rem 0.5rem;\n  }\n}\n/*# sourceMappingURL=appointments.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Appointments, [{
    type: Component,
    args: [{ selector: "app-appointments-management", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="appointments-management">\r
  <!-- Header -->\r
  <div class="management-header">\r
    <div class="header-content">\r
      <h1 class="management-title">Gesti\xF3n de Sesiones</h1>\r
      <p class="management-subtitle">Administra citas y calendario de profesionales</p>\r
    </div>\r
    <div class="header-actions">\r
      <button class="btn-primary" (click)="openCreateModal()">\r
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>\r
        </svg>\r
        Nueva Cita\r
      </button>\r
      <button class="btn-refresh" (click)="loadAppointments()" [disabled]="isLoading">\r
        <svg class="refresh-icon" [class.loading]="isLoading" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
        </svg>\r
        {{ isLoading ? 'Actualizando...' : 'Actualizar' }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Filtros y B\xFAsqueda -->\r
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
            placeholder="Buscar por t\xEDtulo, paciente o profesional..." \r
            class="search-input"\r
          >\r
        </div>\r
      </div>\r
\r
      <div class="filter-row">\r
        <select [(ngModel)]="statusFilter" (change)="onFilterChange()" class="filter-select">\r
          <option value="">Todos los estados</option>\r
          <option value="scheduled">Programada</option>\r
          <option value="confirmed">Confirmada</option>\r
          <option value="in_progress">En progreso</option>\r
          <option value="completed">Completada</option>\r
          <option value="cancelled">Cancelada</option>\r
        </select>\r
\r
        <select [(ngModel)]="typeFilter" (change)="onFilterChange()" class="filter-select">\r
          <option value="">Todos los tipos</option>\r
          <option value="consultation">Consulta</option>\r
          <option value="follow_up">Seguimiento</option>\r
          <option value="emergency">Emergencia</option>\r
          <option value="therapy">Terapia</option>\r
        </select>\r
\r
        <input \r
          type="date" \r
          [(ngModel)]="dateFilter"\r
          (change)="onFilterChange()"\r
          class="filter-select"\r
        >\r
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
    <p>Cargando sesiones...</p>\r
  </div>\r
\r
  <div *ngIf="error && !isLoading" class="error-state">\r
    <div class="error-icon">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
      </svg>\r
    </div>\r
    <h3>Error al cargar las sesiones</h3>\r
    <p>{{ error }}</p>\r
    <button class="btn-retry" (click)="loadAppointments()">Reintentar</button>\r
  </div>\r
\r
  <!-- Contenido principal -->\r
  <div *ngIf="!isLoading && !error" class="appointments-container">\r
    <!-- Resumen -->\r
    <div class="summary-bar">\r
      <span class="summary-text">\r
        Mostrando {{ filteredAppointments.length }} de {{ pagination.totalItems }} sesiones\r
        <span *ngIf="searchTerm || statusFilter || typeFilter" class="filtered-indicator">\r
          (filtradas)\r
        </span>\r
      </span>\r
    </div>\r
\r
    <!-- Tarjetas de sesiones -->\r
    <div class="appointments-grid">\r
      <div *ngFor="let appointment of filteredAppointments" class="appointment-card" [class]="getStatusClass(appointment.status)">\r
        <div class="card-header">\r
          <h3 class="appointment-title">{{ appointment.title }}</h3>\r
          <div class="status-badge" [class]="getStatusBadgeClass(appointment.status)">\r
            {{ getStatusDisplay(appointment.status) }}\r
          </div>\r
        </div>\r
\r
        <div class="card-content">\r
          <div class="info-row">\r
            <div class="info-item">\r
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
              </svg>\r
              <div class="info-content">\r
                <span class="info-label">Fecha y Hora</span>\r
                <span class="info-value">{{ formatDateTime(appointment.date) }}</span>\r
                <span class="info-duration">{{ appointment.duration }} min</span>\r
              </div>\r
            </div>\r
\r
            <div class="info-item">\r
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
              </svg>\r
              <div class="info-content">\r
                <span class="info-label">Paciente</span>\r
                <span class="info-value">\r
                  {{ getPatientName(appointment) }} {{ getPatientLastName(appointment) }}\r
                </span>\r
                <span class="info-email">{{ getPatientEmail(appointment) }}</span>\r
              </div>\r
            </div>\r
\r
            <div class="info-item">\r
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
              </svg>\r
              <div class="info-content">\r
                <span class="info-label">Profesional</span>\r
                <span class="info-value">\r
                  {{ getProfessionalName(appointment) }} {{ getProfessionalLastName(appointment) }}\r
                </span>\r
                <span class="info-email">{{ getProfessionalEmail(appointment) }}</span>\r
              </div>\r
            </div>\r
\r
            <div class="info-item">\r
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>\r
              </svg>\r
              <div class="info-content">\r
                <span class="info-label">Tipo</span>\r
                <span class="info-value">{{ getTypeDisplay(appointment.type) }}</span>\r
                <span class="info-platform">{{ getPlatformDisplay(appointment.meetingPlatform) }}</span>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="appointment.reason" class="reason-section">\r
            <span class="reason-label">Motivo:</span>\r
            <p class="reason-text">{{ appointment.reason }}</p>\r
          </div>\r
        </div>\r
\r
        <div class="card-actions">\r
          <!-- Botones para citas PROGRAMADAS/CONFIRMADAS -->\r
          <button \r
            *ngIf="appointment.status === 'scheduled' || appointment.status === 'confirmed'"\r
            (click)="cancelAppointment(appointment)"\r
            [disabled]="isUpdating[appointment._id]"\r
            class="btn-cancel"\r
          >\r
            <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
            </svg>\r
            {{ isUpdating[appointment._id] ? 'Cancelando...' : 'Cancelar' }}\r
          </button>\r
\r
          <!-- Bot\xF3n EDITAR solo para citas NO canceladas -->\r
          <button \r
            *ngIf="appointment.status !== 'cancelled'"\r
            (click)="editAppointment(appointment)"\r
            class="btn-edit"\r
          >\r
            <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
            </svg>\r
            Editar\r
          </button>\r
\r
          <!-- Bot\xF3n REAGENDAR solo para citas CANCELADAS -->\r
          <button \r
            *ngIf="appointment.status === 'cancelled'"\r
            (click)="openRescheduleModal(appointment)"\r
            class="btn-reschedule"\r
          >\r
            <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>\r
            </svg>\r
            Reagendar\r
          </button>\r
\r
          <button \r
            *ngIf="appointment.status === 'scheduled'"\r
            (click)="confirmAppointment(appointment)"\r
            [disabled]="isUpdating[appointment._id]"\r
            class="btn-confirm"\r
          >\r
            <svg class="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
            </svg>\r
            {{ isUpdating[appointment._id] ? 'Confirmando...' : 'Confirmar' }}\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Estado vac\xEDo -->\r
      <div *ngIf="filteredAppointments.length === 0" class="empty-state">\r
        <div class="empty-content">\r
          <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
          </svg>\r
          <h3>No se encontraron sesiones</h3>\r
          <p *ngIf="searchTerm || statusFilter || typeFilter">\r
            Intenta ajustar los filtros de b\xFAsqueda\r
          </p>\r
          <p *ngIf="!searchTerm && !statusFilter && !typeFilter">\r
            No hay sesiones programadas en el sistema\r
          </p>\r
          <button *ngIf="searchTerm || statusFilter || typeFilter" \r
                  (click)="clearFilters()" \r
                  class="btn-clear-filters">\r
            Limpiar filtros\r
          </button>\r
          <button *ngIf="!searchTerm && !statusFilter && !typeFilter" \r
                  (click)="openCreateModal()" \r
                  class="btn-primary">\r
            Crear primera sesi\xF3n\r
          </button>\r
        </div>\r
      </div>\r
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
            [disabled]="page === -1"\r
          >\r
            {{ getPageButtonText(page) }}\r
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
</div>\r
\r
<!-- Modal de creaci\xF3n de cita -->\r
<div *ngIf="showCreateModal" class="modal-overlay" (click)="closeCreateModal()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2 class="modal-title">Crear Nueva Cita</h2>\r
      <button class="modal-close" (click)="closeCreateModal()">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <form (ngSubmit)="createAppointment()" #appointmentForm="ngForm">\r
      <div class="modal-body">\r
        \r
        <!-- Profesional -->\r
        <div class="form-group">\r
          <label class="form-label">Profesional *</label>\r
          <select \r
            [(ngModel)]="newAppointment.professionalId" \r
            name="professionalId" \r
            class="form-select"\r
            required\r
            #professionalSelect="ngModel">\r
            <option value="">Seleccionar profesional</option>\r
            <option *ngFor="let user of professionals" [value]="user._id">\r
              {{ user.name }} {{ user.lastName }} - {{ user.email }}\r
            </option>\r
          </select>\r
          <div *ngIf="professionalSelect.invalid && professionalSelect.touched" class="error-message">\r
            Selecciona un profesional\r
          </div>\r
        </div>\r
\r
        <!-- Paciente -->\r
        <div class="form-group">\r
          <label class="form-label">Paciente *</label>\r
          <select \r
            [(ngModel)]="newAppointment.patientId" \r
            name="patientId" \r
            class="form-select"\r
            required\r
            #patientSelect="ngModel">\r
            <option value="">Seleccionar paciente</option>\r
            <option *ngFor="let user of patients" [value]="user._id">\r
              {{ user.name }} {{ user.lastName }} - {{ user.email }}\r
            </option>\r
          </select>\r
          <div *ngIf="patientSelect.invalid && patientSelect.touched" class="error-message">\r
            Selecciona un paciente\r
          </div>\r
        </div>\r
\r
        <!-- T\xEDtulo -->\r
        <div class="form-group">\r
          <label class="form-label">T\xEDtulo *</label>\r
          <input \r
            type="text" \r
            [(ngModel)]="newAppointment.title" \r
            name="title"\r
            class="form-input"\r
            placeholder="Ej: Consulta de seguimiento, Entrega de kit..."\r
            required\r
            #titleInput="ngModel">\r
          <div *ngIf="titleInput.invalid && titleInput.touched" class="error-message">\r
            El t\xEDtulo es requerido\r
          </div>\r
        </div>\r
\r
        <!-- Fecha y Hora -->\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label class="form-label">Fecha *</label>\r
            <input \r
              type="date" \r
              [(ngModel)]="newAppointment.date" \r
              name="date"\r
              class="form-input"\r
              required\r
              #dateInput="ngModel">\r
            <div *ngIf="dateInput.invalid && dateInput.touched" class="error-message">\r
              La fecha es requerida\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">Hora *</label>\r
            <input \r
              type="time" \r
              [(ngModel)]="newAppointment.time" \r
              name="time"\r
              class="form-input"\r
              required\r
              #timeInput="ngModel">\r
            <div *ngIf="timeInput.invalid && timeInput.touched" class="error-message">\r
              La hora es requerida\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Duraci\xF3n -->\r
        <div class="form-group">\r
          <label class="form-label">Duraci\xF3n (minutos) *</label>\r
          <select \r
            [(ngModel)]="newAppointment.duration" \r
            name="duration"\r
            class="form-select"\r
            required\r
            #durationSelect="ngModel">\r
            <option value="30">30 minutos</option>\r
            <option value="45">45 minutos</option>\r
            <option value="60" selected>60 minutos</option>\r
            <option value="90">90 minutos</option>\r
            <option value="120">120 minutos</option>\r
          </select>\r
        </div>\r
\r
        <!-- Tipo -->\r
        <div class="form-group">\r
          <label class="form-label">Tipo de cita *</label>\r
          <select \r
            [(ngModel)]="newAppointment.type" \r
            name="type"\r
            class="form-select"\r
            required\r
            #typeSelect="ngModel">\r
            <option value="consultation">Consulta m\xE9dica</option>\r
            <option value="therapy">Acompa\xF1amiento psicol\xF3gico</option>\r
            <option value="follow_up">Seguimiento</option>\r
            <option value="emergency">Emergencia</option>\r
            <option value="evaluation">Evaluaci\xF3n</option>\r
          </select>\r
        </div>\r
\r
        <!-- Motivo -->\r
        <div class="form-group">\r
          <label class="form-label">Motivo</label>\r
          <textarea \r
            [(ngModel)]="newAppointment.reason" \r
            name="reason"\r
            class="form-textarea"\r
            placeholder="Descripci\xF3n del motivo de la cita..."\r
            rows="3"></textarea>\r
        </div>\r
\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button type="button" class="btn-secondary" (click)="closeCreateModal()">Cancelar</button>\r
        <button \r
          type="submit" \r
          class="btn-primary" \r
          [disabled]="isCreating || !appointmentForm.form.valid">\r
          {{ isCreating ? 'Creando...' : 'Crear Cita' }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
\r
<!-- Modal de edici\xF3n de cita -->\r
<div *ngIf="showEditModal" class="modal-overlay" (click)="closeEditModal()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2 class="modal-title">Editar Cita</h2>\r
      <button class="modal-close" (click)="closeEditModal()">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <form (ngSubmit)="updateAppointment()">\r
      <div class="modal-body">\r
        \r
        <!-- Profesional -->\r
        <div class="form-group">\r
          <label class="form-label">Profesional *</label>\r
          <select \r
            [(ngModel)]="editAppointmentData.professionalId" \r
            name="editProfessionalId" \r
            class="form-select"\r
            required>\r
            <option value="">Seleccionar profesional</option>\r
            <option *ngFor="let user of professionals" [value]="user._id">\r
              {{ user.name }} {{ user.lastName }} - {{ user.email }}\r
            </option>\r
          </select>\r
        </div>\r
\r
        <!-- Paciente -->\r
        <div class="form-group">\r
          <label class="form-label">Paciente *</label>\r
          <select \r
            [(ngModel)]="editAppointmentData.patientId" \r
            name="editPatientId" \r
            class="form-select"\r
            required>\r
            <option value="">Seleccionar paciente</option>\r
            <option *ngFor="let user of patients" [value]="user._id">\r
              {{ user.name }} {{ user.lastName }} - {{ user.email }}\r
            </option>\r
          </select>\r
        </div>\r
\r
        <!-- T\xEDtulo -->\r
        <div class="form-group">\r
          <label class="form-label">T\xEDtulo *</label>\r
          <input \r
            type="text" \r
            [(ngModel)]="editAppointmentData.title" \r
            name="editTitle"\r
            class="form-input"\r
            placeholder="Ej: Consulta de seguimiento, Entrega de kit..."\r
            required>\r
        </div>\r
\r
        <!-- Fecha y Hora -->\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label class="form-label">Fecha *</label>\r
            <input \r
              type="date" \r
              [(ngModel)]="editAppointmentData.date" \r
              name="editDate"\r
              class="form-input"\r
              required>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">Hora *</label>\r
            <input \r
              type="time" \r
              [(ngModel)]="editAppointmentData.time" \r
              name="editTime"\r
              class="form-input"\r
              required>\r
          </div>\r
        </div>\r
\r
        <!-- Duraci\xF3n -->\r
        <div class="form-group">\r
          <label class="form-label">Duraci\xF3n (minutos) *</label>\r
          <select \r
            [(ngModel)]="editAppointmentData.duration" \r
            name="editDuration"\r
            class="form-select"\r
            required>\r
            <option value="30">30 minutos</option>\r
            <option value="45">45 minutos</option>\r
            <option value="60">60 minutos</option>\r
            <option value="90">90 minutos</option>\r
            <option value="120">120 minutos</option>\r
          </select>\r
        </div>\r
\r
        <!-- Tipo -->\r
        <div class="form-group">\r
          <label class="form-label">Tipo de cita *</label>\r
          <select \r
            [(ngModel)]="editAppointmentData.type" \r
            name="editType"\r
            class="form-select"\r
            required>\r
            <option value="consultation">Consulta m\xE9dica</option>\r
            <option value="therapy">Acompa\xF1amiento psicol\xF3gico</option>\r
            <option value="follow_up">Seguimiento</option>\r
            <option value="emergency">Emergencia</option>\r
            <option value="evaluation">Evaluaci\xF3n</option>\r
          </select>\r
        </div>\r
\r
        <!-- Motivo -->\r
        <div class="form-group">\r
          <label class="form-label">Motivo</label>\r
          <textarea \r
            [(ngModel)]="editAppointmentData.reason" \r
            name="editReason"\r
            class="form-textarea"\r
            placeholder="Descripci\xF3n del motivo de la cita..."\r
            rows="3"></textarea>\r
        </div>\r
\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button type="button" class="btn-secondary" (click)="closeEditModal()">Cancelar</button>\r
        <button \r
          type="submit" \r
          class="btn-primary" \r
          [disabled]="isEditing">\r
          {{ isEditing ? 'Guardando...' : 'Guardar Cambios' }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
\r
<!-- NUEVO: Modal de reagendar cita cancelada -->\r
<div *ngIf="showRescheduleModal" class="modal-overlay" (click)="closeRescheduleModal()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2 class="modal-title">Reagendar Cita Cancelada</h2>\r
      <button class="modal-close" (click)="closeRescheduleModal()">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <form (ngSubmit)="rescheduleAppointment()">\r
      <div class="modal-body">\r
        \r
        <!-- Informaci\xF3n de solo lectura -->\r
        <div class="readonly-info" *ngIf="reschedulingAppointment">\r
          <div class="info-item">\r
            <strong>Paciente:</strong> \r
            {{ getPatientName(reschedulingAppointment) }} {{ getPatientLastName(reschedulingAppointment) }}\r
          </div>\r
          <div class="info-item">\r
            <strong>Profesional:</strong> \r
            {{ getProfessionalName(reschedulingAppointment) }} {{ getProfessionalLastName(reschedulingAppointment) }}\r
          </div>\r
          <div class="info-item">\r
            <strong>Motivo original:</strong> \r
            {{ reschedulingAppointment.reason || 'Sin motivo especificado' }}\r
          </div>\r
        </div>\r
\r
        <!-- Fecha y Hora -->\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label class="form-label">Nueva Fecha *</label>\r
            <input \r
              type="date" \r
              [(ngModel)]="rescheduleData.date" \r
              name="rescheduleDate"\r
              class="form-input"\r
              required\r
              [min]="getTodayDate()">\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">Nueva Hora *</label>\r
            <input \r
              type="time" \r
              [(ngModel)]="rescheduleData.time" \r
              name="rescheduleTime"\r
              class="form-input"\r
              required>\r
          </div>\r
        </div>\r
\r
        <!-- Duraci\xF3n -->\r
        <div class="form-group">\r
          <label class="form-label">Duraci\xF3n (minutos) *</label>\r
          <select \r
            [(ngModel)]="rescheduleData.duration" \r
            name="rescheduleDuration"\r
            class="form-select"\r
            required>\r
            <option value="30">30 minutos</option>\r
            <option value="45">45 minutos</option>\r
            <option value="60">60 minutos</option>\r
            <option value="90">90 minutos</option>\r
            <option value="120">120 minutos</option>\r
          </select>\r
        </div>\r
\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button type="button" class="btn-secondary" (click)="closeRescheduleModal()">Cancelar</button>\r
        <button \r
          type="submit" \r
          class="btn-primary" \r
          [disabled]="isRescheduling">\r
          {{ isRescheduling ? 'Reagendando...' : 'Reagendar Cita' }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>`, styles: ['/* src/app/admin/appointments/appointments.scss */\n.appointments-management {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n  min-height: 80vh;\n  background: #f8fafc;\n  position: relative;\n}\n.appointments-management .management-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #ffffff;\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  margin-bottom: 2rem;\n}\n.appointments-management .management-header .header-content .management-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.appointments-management .management-header .header-content .management-subtitle {\n  font-size: 1.1rem;\n  color: #6b7280;\n  margin: 0;\n}\n.appointments-management .management-header .header-actions {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.appointments-management .management-header .header-actions .btn-primary {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management .management-header .header-actions .btn-primary:hover:not(:disabled) {\n  background: #2980b9;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.appointments-management .management-header .header-actions .btn-primary .btn-icon {\n  width: 18px;\n  height: 18px;\n}\n.appointments-management .management-header .header-actions .btn-refresh {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: #f1f5f9;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management .management-header .header-actions .btn-refresh:hover:not(:disabled) {\n  background: rgb(233.86, 239.9, 245.94);\n  color: #1f2937;\n}\n.appointments-management .management-header .header-actions .btn-refresh .refresh-icon {\n  width: 18px;\n  height: 18px;\n}\n.appointments-management .management-header .header-actions .btn-refresh .refresh-icon.loading {\n  animation: spin 1s linear infinite;\n}\n.appointments-management .filters-section {\n  background: #ffffff;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  margin-bottom: 2rem;\n}\n.appointments-management .filters-section .filters-main {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.appointments-management .filters-section .filters-main .search-box .search-input-wrapper {\n  position: relative;\n  max-width: 500px;\n}\n.appointments-management .filters-section .filters-main .search-box .search-input-wrapper .search-icon {\n  width: 18px;\n  height: 18px;\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n}\n.appointments-management .filters-section .filters-main .search-box .search-input-wrapper .search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n.appointments-management .filters-section .filters-main .search-box .search-input-wrapper .search-input:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n.appointments-management .filters-section .filters-main .search-box .search-input-wrapper .search-input::placeholder {\n  color: #9ca3af;\n}\n.appointments-management .filters-section .filters-main .filter-row {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.appointments-management .filters-section .filters-main .filter-row .filter-select {\n  padding: 0.75rem 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  background: #ffffff;\n  color: #1f2937;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management .filters-section .filters-main .filter-row .filter-select:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n.appointments-management .filters-section .filters-main .filter-row .btn-clear-filters {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: transparent;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management .filters-section .filters-main .filter-row .btn-clear-filters:hover:not(:disabled) {\n  background: #f1f5f9;\n  color: #1f2937;\n}\n.appointments-management .filters-section .filters-main .filter-row .btn-clear-filters .clear-icon {\n  width: 16px;\n  height: 16px;\n}\n.appointments-management .loading-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 3rem;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.appointments-management .loading-state .loading-spinner {\n  width: 3rem;\n  height: 3rem;\n  border: 3px solid #f1f5f9;\n  border-top: 3px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.appointments-management .loading-state p {\n  margin: 0;\n  color: #6b7280;\n  font-size: 1rem;\n}\n.appointments-management .error-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 1.5rem;\n  padding: 3rem;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  text-align: center;\n}\n.appointments-management .error-state .error-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4rem;\n  height: 4rem;\n  background: white;\n  border-radius: 50%;\n  color: #ef4444;\n}\n.appointments-management .error-state .error-icon svg {\n  width: 2rem;\n  height: 2rem;\n}\n.appointments-management .error-state h3 {\n  margin: 0;\n  color: #1f2937;\n  font-size: 1.25rem;\n}\n.appointments-management .error-state p {\n  margin: 0;\n  color: #6b7280;\n  max-width: 400px;\n}\n.appointments-management .error-state .btn-retry {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.appointments-management .error-state .btn-retry:hover:not(:disabled) {\n  background: rgb(234.9802955665, 21.0197044335, 21.0197044335);\n}\n.appointments-management .appointments-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.appointments-management .appointments-container .summary-bar {\n  background: #ffffff;\n  padding: 1rem 1.5rem;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.appointments-management .appointments-container .summary-bar .summary-text {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.appointments-management .appointments-container .summary-bar .summary-text .filtered-indicator {\n  color: #3498db;\n  font-weight: 500;\n}\n.appointments-management .appointments-container .appointments-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 1.5rem;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card.status-scheduled {\n  border-left: 4px solid #f59e0b;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card.status-confirmed {\n  border-left: 4px solid #3498db;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card.status-in-progress {\n  border-left: 4px solid #06b6d4;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card.status-completed {\n  border-left: 4px solid #27ae60;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card.status-cancelled {\n  border-left: 4px solid #ef4444;\n  opacity: 0.8;\n  position: relative;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card.status-cancelled::before {\n  content: "Cancelada";\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  background: #ef4444;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  font-size: 0.7rem;\n  font-weight: 600;\n  border-radius: 0 12px 0 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card.status-cancelled:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card.status-cancelled:hover::before {\n  background: rgb(234.9802955665, 21.0197044335, 21.0197044335);\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-header .appointment-title {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #1f2937;\n  flex: 1;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-header .status-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-header .status-badge.badge-scheduled {\n  background: #fef5e7;\n  color: #f59e0b;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-header .status-badge.badge-confirmed {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-header .status-badge.badge-in-progress {\n  background: #f0f9ff;\n  color: #0ea5e9;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-header .status-badge.badge-completed {\n  background: #f8fafc;\n  color: #64748b;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-header .status-badge.badge-cancelled {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  flex: 1;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content .info-row {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n@media (min-width: 768px) {\n  .appointments-management .appointments-container .appointments-grid .appointment-card .card-content .info-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content .info-row .info-item {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content .info-row .info-item .info-icon {\n  width: 18px;\n  height: 18px;\n  color: #9ca3af;\n  margin-top: 0.25rem;\n  flex-shrink: 0;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content .info-row .info-item .info-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content .info-row .info-item .info-content .info-label {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content .info-row .info-item .info-content .info-value {\n  font-size: 0.875rem;\n  color: #1f2937;\n  font-weight: 500;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content .info-row .info-item .info-content .info-duration,\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content .info-row .info-item .info-content .info-email,\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content .info-row .info-item .info-content .info-platform {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content .reason-section {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content .reason-section .reason-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-content .reason-section .reason-text {\n  margin: 0;\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.5;\n  background: #f1f5f9;\n  padding: 1rem;\n  border-radius: 8px;\n  border-left: 3px solid #3498db;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  flex: 1;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button .action-icon {\n  width: 14px;\n  height: 14px;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button.btn-cancel {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button.btn-cancel:hover:not(:disabled) {\n  background: #ef4444;\n  color: white;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button.btn-edit {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button.btn-edit:hover:not(:disabled) {\n  background: #3b82f6;\n  color: white;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button.btn-confirm {\n  background: #ecfdf5;\n  color: #10b981;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button.btn-confirm:hover:not(:disabled) {\n  background: #10b981;\n  color: white;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button.btn-reschedule {\n  background: #f0f9ff;\n  color: #0369a1;\n  border: 1px solid #bae6fd;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button.btn-reschedule:hover:not(:disabled) {\n  background: #0369a1;\n  color: white;\n  border-color: #0369a1;\n  transform: translateY(-1px);\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button.btn-reschedule:disabled {\n  background: #f1f5f9;\n  color: #94a3b8;\n  border-color: #e2e8f0;\n}\n.appointments-management .appointments-container .appointments-grid .appointment-card .card-actions button.btn-reschedule:disabled:hover {\n  background: #f1f5f9;\n  color: #94a3b8;\n  border-color: #e2e8f0;\n  transform: none;\n}\n.status-cancelled .appointments-management .appointments-container .appointments-grid .appointment-card .card-actions .btn-edit,\n.status-cancelled .appointments-management .appointments-container .appointments-grid .appointment-card .card-actions .btn-confirm,\n.status-cancelled .appointments-management .appointments-container .appointments-grid .appointment-card .card-actions .btn-cancel {\n  display: none !important;\n}\n.status-cancelled .appointments-management .appointments-container .appointments-grid .appointment-card .card-actions .btn-reschedule {\n  display: flex !important;\n}\n.appointments-management .appointments-container .appointments-grid .empty-state {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n}\n.appointments-management .appointments-container .appointments-grid .empty-state .empty-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 1.5rem;\n  text-align: center;\n  max-width: 400px;\n}\n.appointments-management .appointments-container .appointments-grid .empty-state .empty-content .empty-icon {\n  width: 4rem;\n  height: 4rem;\n  color: #9ca3af;\n}\n.appointments-management .appointments-container .appointments-grid .empty-state .empty-content h3 {\n  margin: 0;\n  color: #1f2937;\n  font-size: 1.25rem;\n}\n.appointments-management .appointments-container .appointments-grid .empty-state .empty-content p {\n  margin: 0;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.appointments-management .appointments-container .appointments-grid .empty-state .empty-content .btn-clear-filters,\n.appointments-management .appointments-container .appointments-grid .empty-state .empty-content .btn-primary {\n  margin-top: 1rem;\n}\n.appointments-management .appointments-container .pagination-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #ffffff;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.appointments-management .appointments-container .pagination-container .pagination-info {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.appointments-management .appointments-container .pagination-container .pagination-controls {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.appointments-management .appointments-container .pagination-container .pagination-controls .pagination-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background: #ffffff;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management .appointments-container .pagination-container .pagination-controls .pagination-btn:hover:not(:disabled) {\n  background: #f1f5f9;\n}\n.appointments-management .appointments-container .pagination-container .pagination-controls .pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.appointments-management .appointments-container .pagination-container .pagination-controls .pagination-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.appointments-management .appointments-container .pagination-container .pagination-controls .page-numbers {\n  display: flex;\n  gap: 0.25rem;\n}\n.appointments-management .appointments-container .pagination-container .pagination-controls .page-numbers .page-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2.5rem;\n  height: 2.5rem;\n  background: #ffffff;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.appointments-management .appointments-container .pagination-container .pagination-controls .page-numbers .page-btn:hover:not(.active) {\n  background: #f1f5f9;\n}\n.appointments-management .appointments-container .pagination-container .pagination-controls .page-numbers .page-btn.active {\n  background: #3498db;\n  color: white;\n  border-color: #3498db;\n}\n.appointments-management .appointments-container .pagination-container .pagination-controls .page-numbers .page-btn:disabled {\n  background: transparent;\n  border: none;\n  cursor: default;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 2rem;\n}\n.modal-overlay .modal-content {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: modalSlideIn 0.3s ease-out;\n}\n.modal-overlay .modal-content .modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-overlay .modal-content .modal-header .modal-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.modal-overlay .modal-content .modal-header .modal-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: #6b7280;\n  padding: 0.5rem;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.modal-overlay .modal-content .modal-header .modal-close:hover {\n  background: #f1f5f9;\n  color: #1f2937;\n}\n.modal-overlay .modal-content .modal-header .modal-close svg {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.modal-overlay .modal-content .modal-body {\n  padding: 2rem;\n}\n.modal-overlay .modal-content .modal-body .readonly-info {\n  background:\n    linear-gradient(\n      135deg,\n      #f0f9ff 0%,\n      #e0f2fe 100%);\n  border: 1px solid #bae6fd;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.modal-overlay .modal-content .modal-body .readonly-info .info-item {\n  margin-bottom: 0.75rem;\n}\n.modal-overlay .modal-content .modal-body .readonly-info .info-item:last-child {\n  margin-bottom: 0;\n}\n.modal-overlay .modal-content .modal-body .readonly-info .info-item strong {\n  color: #0369a1;\n  font-weight: 600;\n  display: inline-block;\n  min-width: 120px;\n}\n.modal-overlay .modal-content .modal-body .readonly-info .info-item:last-child {\n  padding-top: 0.75rem;\n  border-top: 1px solid #bae6fd;\n  margin-top: 0.75rem;\n}\n.modal-overlay .modal-content .modal-body .form-group {\n  margin-bottom: 1.5rem;\n}\n.modal-overlay .modal-content .modal-body .form-group .form-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.5rem;\n}\n.modal-overlay .modal-content .modal-body .form-group .form-label::after {\n  content: " *";\n  color: #ef4444;\n}\n.modal-overlay .modal-content .modal-body .form-group .form-input,\n.modal-overlay .modal-content .modal-body .form-group .form-select,\n.modal-overlay .modal-content .modal-body .form-group .form-textarea {\n  width: 80%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  background: #ffffff;\n  color: #1f2937;\n  transition: all 0.2s ease;\n}\n.modal-overlay .modal-content .modal-body .form-group .form-input:focus,\n.modal-overlay .modal-content .modal-body .form-group .form-select:focus,\n.modal-overlay .modal-content .modal-body .form-group .form-textarea:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n.modal-overlay .modal-content .modal-body .form-group .form-input::placeholder,\n.modal-overlay .modal-content .modal-body .form-group .form-select::placeholder,\n.modal-overlay .modal-content .modal-body .form-group .form-textarea::placeholder {\n  color: #9ca3af;\n}\n.modal-overlay .modal-content .modal-body .form-group .form-textarea {\n  resize: vertical;\n  min-height: 100px;\n  font-family: inherit;\n}\n.modal-overlay .modal-content .modal-body .form-group .error-message {\n  font-size: 0.75rem;\n  color: #ef4444;\n  margin-top: 0.5rem;\n}\n.modal-overlay .modal-content .modal-body .form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.modal-overlay .modal-content .modal-footer {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n}\n.modal-overlay .modal-content .modal-footer .btn-secondary {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f1f5f9;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.modal-overlay .modal-content .modal-footer .btn-secondary:hover:not(:disabled) {\n  background: rgb(223.15, 232.25, 241.35);\n}\n.modal-overlay .modal-content .modal-footer .btn-primary {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #3498db;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.modal-overlay .modal-content .modal-footer .btn-primary:hover:not(:disabled) {\n  background: #2980b9;\n}\n.modal-overlay .modal-content .modal-footer .btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes pulse-reschedule {\n  0% {\n    box-shadow: 0 0 0 0 rgba(3, 105, 161, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 6px rgba(3, 105, 161, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(3, 105, 161, 0);\n  }\n}\n.btn-reschedule.pulse {\n  animation: pulse-reschedule 2s infinite;\n}\n@media (max-width: 768px) {\n  .appointments-management {\n    padding: 1rem;\n  }\n  .appointments-management .management-header {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .appointments-management .management-header .header-actions {\n    width: 100%;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .appointments-management .filters-section .filters-main .filter-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .appointments-management .filters-section .filters-main .filter-row .filter-select,\n  .appointments-management .filters-section .filters-main .filter-row .btn-clear-filters {\n    width: 100%;\n  }\n  .appointments-management .appointments-container .appointments-grid {\n    grid-template-columns: 1fr;\n  }\n  .appointments-management .pagination-container {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .appointments-management .modal-overlay {\n    padding: 1rem;\n  }\n  .appointments-management .modal-overlay .modal-content .modal-body .readonly-info {\n    padding: 1rem;\n  }\n  .appointments-management .modal-overlay .modal-content .modal-body .readonly-info .info-item strong {\n    min-width: 100px;\n    font-size: 0.875rem;\n  }\n  .appointments-management .modal-overlay .modal-content .modal-body .form-row {\n    grid-template-columns: 1fr;\n  }\n  .appointments-management .modal-overlay .modal-content .modal-body .form-group .form-input,\n  .appointments-management .modal-overlay .modal-content .modal-body .form-group .form-select,\n  .appointments-management .modal-overlay .modal-content .modal-body .form-group .form-textarea {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .appointments-management .appointment-card .card-actions {\n    flex-direction: column;\n  }\n  .appointments-management .modal-footer {\n    flex-direction: column;\n  }\n  .appointments-management .btn-reschedule {\n    font-size: 0.7rem;\n    padding: 0.75rem 0.5rem;\n  }\n}\n/*# sourceMappingURL=appointments.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Appointments, { className: "Appointments", filePath: "src/app/admin/appointments/appointments.ts", lineNumber: 85 });
})();
export {
  Appointments
};
//# sourceMappingURL=chunk-3QVGX5N4.js.map
