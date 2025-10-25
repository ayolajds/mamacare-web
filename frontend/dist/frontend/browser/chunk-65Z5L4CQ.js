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

// src/app/professional/cita-detalles/cita-detalles.ts
function CitaDetalles_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando detalles de la cita...");
    \u0275\u0275elementEnd()();
  }
}
function CitaDetalles_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Error al cargar la cita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275listener("click", function CitaDetalles_div_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToCitas());
    });
    \u0275\u0275text(8, "Volver a Citas");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function CitaDetalles_div_11_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.cita.patientId.phone);
  }
}
function CitaDetalles_div_11_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function CitaDetalles_div_11_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.contactarPaciente("telefono"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 67);
    \u0275\u0275elementEnd()();
  }
}
function CitaDetalles_div_11_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 39);
    \u0275\u0275text(2, "Actualizada:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(ctx_r1.cita.updatedAt));
  }
}
function CitaDetalles_div_11_button_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function CitaDetalles_div_11_button_73_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cambiarEstado("confirmed"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Confirmar Disponibilidad ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.guardando);
  }
}
function CitaDetalles_div_11_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function CitaDetalles_div_11_button_74_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cambiarEstado("in_progress"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Iniciar Consulta ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.guardando);
  }
}
function CitaDetalles_div_11_button_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function CitaDetalles_div_11_button_75_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cambiarEstado("completed"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Marcar como Completada ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.guardando);
  }
}
function CitaDetalles_div_11_button_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function CitaDetalles_div_11_button_76_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cambiarEstado("no_show"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No Se Present\xF3 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.guardando);
  }
}
function CitaDetalles_div_11_button_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function CitaDetalles_div_11_button_77_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cambiarEstado("cancelled"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cancelar Cita ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.guardando);
  }
}
function CitaDetalles_div_11_p_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 79);
    \u0275\u0275text(1, " \u23F3 ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Esperando confirmaci\xF3n del profesional");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275text(5, " Por favor confirma tu disponibilidad para atender esta cita. ");
    \u0275\u0275elementEnd();
  }
}
function CitaDetalles_div_11_p_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 80);
    \u0275\u0275text(1, " \u2705 ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Cita confirmada");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Lista para ser atendida el ", ctx_r1.formatDate(ctx_r1.cita.date), " ");
  }
}
function CitaDetalles_div_11_p_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1, " \u{1F504} ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Consulta en progreso");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275text(5, " La cita est\xE1 siendo atendida actualmente. ");
    \u0275\u0275elementEnd();
  }
}
function CitaDetalles_div_11_p_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 82);
    \u0275\u0275text(1, " \u2705 ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Cita completada");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275text(5, " La consulta ha finalizado exitosamente. ");
    \u0275\u0275elementEnd();
  }
}
function CitaDetalles_div_11_p_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 83);
    \u0275\u0275text(1, " \u274C ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Cita cancelada");
    \u0275\u0275elementEnd()();
  }
}
function CitaDetalles_div_11_p_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1, " \u{1F6AB} ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Paciente no se present\xF3");
    \u0275\u0275elementEnd()();
  }
}
function CitaDetalles_div_11_p_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1, " \u{1F4C5} ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Cita reprogramada");
    \u0275\u0275elementEnd()();
  }
}
function CitaDetalles_div_11_button_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function CitaDetalles_div_11_button_93_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isEditing = true);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "path", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Editar ");
    \u0275\u0275elementEnd();
  }
}
function CitaDetalles_div_11_div_94_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.notas.notasPaciente, " ");
  }
}
function CitaDetalles_div_11_div_94_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 91);
    \u0275\u0275text(1, "No hay notas para esta cita.");
    \u0275\u0275elementEnd();
  }
}
function CitaDetalles_div_11_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275template(1, CitaDetalles_div_11_div_94_p_1_Template, 2, 1, "p", 89)(2, CitaDetalles_div_11_div_94_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sinNotas_r11 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notas.notasPaciente)("ngIfElse", sinNotas_r11);
  }
}
function CitaDetalles_div_11_div_95_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4BE} Guardar");
    \u0275\u0275elementEnd();
  }
}
function CitaDetalles_div_11_div_95_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Guardando...");
    \u0275\u0275elementEnd();
  }
}
function CitaDetalles_div_11_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "textarea", 93);
    \u0275\u0275twoWayListener("ngModelChange", function CitaDetalles_div_11_div_95_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.notas.notasPaciente, $event) || (ctx_r1.notas.notasPaciente = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 94)(3, "button", 95);
    \u0275\u0275listener("click", function CitaDetalles_div_11_div_95_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isEditing = false);
    });
    \u0275\u0275text(4, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 96);
    \u0275\u0275listener("click", function CitaDetalles_div_11_div_95_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.guardarNotas());
    });
    \u0275\u0275template(6, CitaDetalles_div_11_div_95_span_6_Template, 2, 0, "span", 66)(7, CitaDetalles_div_11_div_95_span_7_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notas.notasPaciente);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.guardando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.guardando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.guardando);
  }
}
function CitaDetalles_div_11_p_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Motivo:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cita.reason);
  }
}
function CitaDetalles_div_11_p_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "S\xEDntomas:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cita.symptoms);
  }
}
function CitaDetalles_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 22)(13, "span", 23);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 24)(16, "div", 25)(17, "div", 26)(18, "h3");
    \u0275\u0275text(19, "Informaci\xF3n del Paciente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 27)(21, "div", 28);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 29)(24, "h4");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 30)(27, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 5);
    \u0275\u0275element(29, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, CitaDetalles_div_11_div_32_Template, 5, 1, "div", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 34)(34, "button", 35);
    \u0275\u0275listener("click", function CitaDetalles_div_11_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.contactarPaciente("email"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 5);
    \u0275\u0275element(36, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, CitaDetalles_div_11_button_37_Template, 3, 0, "button", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "div", 26)(39, "h3");
    \u0275\u0275text(40, "Detalles de la Cita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 37)(42, "div", 38)(43, "span", 39);
    \u0275\u0275text(44, "Tipo de cita:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 40);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 38)(48, "span", 39);
    \u0275\u0275text(49, "Fecha y hora:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 40);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 38)(53, "span", 39);
    \u0275\u0275text(54, "Duraci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 40);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 38)(58, "span", 39);
    \u0275\u0275text(59, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 41);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 38)(63, "span", 39);
    \u0275\u0275text(64, "Creada:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 40);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(67, CitaDetalles_div_11_div_67_Template, 5, 1, "div", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 43)(69, "div", 44)(70, "h3");
    \u0275\u0275text(71, "Gesti\xF3n de Cita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 45);
    \u0275\u0275template(73, CitaDetalles_div_11_button_73_Template, 4, 1, "button", 46)(74, CitaDetalles_div_11_button_74_Template, 4, 1, "button", 47)(75, CitaDetalles_div_11_button_75_Template, 4, 1, "button", 48)(76, CitaDetalles_div_11_button_76_Template, 4, 1, "button", 49)(77, CitaDetalles_div_11_button_77_Template, 4, 1, "button", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 51)(79, "h3");
    \u0275\u0275text(80, "Estado Actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 52);
    \u0275\u0275template(82, CitaDetalles_div_11_p_82_Template, 6, 0, "p", 53)(83, CitaDetalles_div_11_p_83_Template, 6, 1, "p", 54)(84, CitaDetalles_div_11_p_84_Template, 6, 0, "p", 55)(85, CitaDetalles_div_11_p_85_Template, 6, 0, "p", 56)(86, CitaDetalles_div_11_p_86_Template, 4, 0, "p", 57)(87, CitaDetalles_div_11_p_87_Template, 4, 0, "p", 58)(88, CitaDetalles_div_11_p_88_Template, 4, 0, "p", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 60)(90, "div", 61)(91, "h3");
    \u0275\u0275text(92, "Notas y Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275template(93, CitaDetalles_div_11_button_93_Template, 4, 0, "button", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(94, CitaDetalles_div_11_div_94_Template, 4, 2, "div", 63)(95, CitaDetalles_div_11_div_95_Template, 8, 4, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 26)(97, "h3");
    \u0275\u0275text(98, "Informaci\xF3n Adicional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 65)(100, "p")(101, "strong");
    \u0275\u0275text(102, "ID de la cita:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "p")(105, "strong");
    \u0275\u0275text(106, "Profesional:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(107, " T\xFA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "p")(109, "strong");
    \u0275\u0275text(110, "Plataforma:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111);
    \u0275\u0275elementEnd();
    \u0275\u0275template(112, CitaDetalles_div_11_p_112_Template, 4, 1, "p", 66)(113, CitaDetalles_div_11_p_113_Template, 4, 1, "p", 66);
    \u0275\u0275elementStart(114, "p")(115, "strong");
    \u0275\u0275text(116, "Prioridad:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(117);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.cita.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.cita.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.formatTime(ctx_r1.cita.date), " - ", ctx_r1.calcularHoraFin());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r1.cita.duration, " minutos)");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.cita.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusDisplay(ctx_r1.cita.status), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" ", ctx_r1.cita.patientId.name[0], "", ctx_r1.cita.patientId.lastName[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.cita.patientId.name, " ", ctx_r1.cita.patientId.lastName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.cita.patientId.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cita.patientId.phone);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.cita.patientId.phone);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.cita.type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(ctx_r1.cita.date));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.cita.duration, " minutos");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.cita.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusDisplay(ctx_r1.cita.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(ctx_r1.cita.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cita.updatedAt !== ctx_r1.cita.createdAt);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.puedeConfirmar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.puedeIniciarConsulta);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.puedeCompletar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.puedeMarcarNoShow);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.puedeCancelar);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.puedeConfirmar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estaConfirmada);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estaEnProgreso);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estaCompletada);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estaCancelada);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.noSePresento);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.estaReprogramada);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.isEditing && ctx_r1.puedeEditarNotas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditing);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cita._id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cita.meetingPlatform || "Presencial");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cita.reason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cita.symptoms);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cita.priority);
  }
}
var CitaDetalles = class _CitaDetalles {
  professionalService = inject(ProfessionalService);
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  // Datos de la cita
  cita = null;
  // Notas y observaciones
  notas = {
    notasPaciente: "",
    notasProfesional: "",
    notasInternas: ""
  };
  // Estados
  isLoading = true;
  error = "";
  isEditing = false;
  guardando = false;
  destroy$ = new Subject();
  ngOnInit() {
    const citaId = this.route.snapshot.paramMap.get("id");
    if (citaId) {
      this.loadCitaDetails(citaId);
    } else {
      this.error = "ID de cita no v\xE1lido";
      this.isLoading = false;
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadCitaDetails(citaId) {
    this.isLoading = true;
    this.error = "";
    this.professionalService.getAppointments().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response?.success && response?.data?.docs) {
          const citaEncontrada = response.data.docs.find((c) => c._id === citaId);
          if (citaEncontrada) {
            this.cita = citaEncontrada;
            if (this.cita.notes) {
              this.notas.notasPaciente = this.cita.notes;
            }
            console.log("\u2705 Cita cargada:", this.cita);
          } else {
            this.error = "Cita no encontrada";
          }
        } else {
          this.error = "Error al cargar los datos de citas";
          console.error("Respuesta inv\xE1lida:", response);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading appointment details:", error);
        this.error = "Error al cargar los detalles de la cita";
        this.isLoading = false;
      }
    });
  }
  // Navegación
  goBack() {
    this.router.navigate(["/profesional/citas"]);
  }
  goToCitas() {
    this.router.navigate(["/profesional/citas"]);
  }
  // Acciones de la cita - CON LLAMADAS REALES AL BACKEND
  cambiarEstado(nuevoEstado) {
    return __async(this, null, function* () {
      if (!this.cita)
        return;
      this.guardando = true;
      try {
        const response = yield this.professionalService.updateAppointmentStatus(this.cita._id, nuevoEstado).toPromise();
        if (response?.success && response.data) {
          this.cita = response.data;
          this.mostrarMensaje("Estado actualizado correctamente");
        } else {
          this.error = "Error al actualizar el estado";
        }
      } catch (error) {
        console.error("Error changing status:", error);
        this.error = "Error al cambiar el estado de la cita";
      } finally {
        this.guardando = false;
      }
    });
  }
  guardarNotas() {
    return __async(this, null, function* () {
      if (!this.cita)
        return;
      this.guardando = true;
      try {
        const response = yield this.professionalService.updateAppointmentNotes(this.cita._id, this.notas.notasPaciente).toPromise();
        if (response?.success && response.data) {
          this.cita = response.data;
          this.isEditing = false;
          this.mostrarMensaje("Notas guardadas correctamente");
        } else {
          this.error = "Error al guardar las notas";
        }
      } catch (error) {
        console.error("Error saving notes:", error);
        this.error = "Error al guardar las notas";
      } finally {
        this.guardando = false;
      }
    });
  }
  mostrarMensaje(mensaje) {
    console.log(mensaje);
    alert(mensaje);
  }
  // ✅ GETTERS CORREGIDOS según tus estados del backend
  get puedeConfirmar() {
    return this.cita?.status === "scheduled";
  }
  get estaConfirmada() {
    return this.cita?.status === "confirmed";
  }
  get estaEnProgreso() {
    return this.cita?.status === "in_progress";
  }
  get estaCompletada() {
    return this.cita?.status === "completed";
  }
  get estaCancelada() {
    return this.cita?.status === "cancelled";
  }
  get estaReprogramada() {
    return this.cita?.status === "rescheduled";
  }
  get noSePresento() {
    return this.cita?.status === "no_show";
  }
  // ✅ El profesional puede completar cuando está confirmada o en progreso
  get puedeCompletar() {
    return this.estaConfirmada || this.estaEnProgreso;
  }
  // ✅ El profesional puede cancelar en varios estados
  get puedeCancelar() {
    return this.cita?.status === "scheduled" || this.cita?.status === "confirmed" || this.cita?.status === "rescheduled";
  }
  // ✅ Puede marcar "no se presentó" cuando está confirmada
  get puedeMarcarNoShow() {
    return this.estaConfirmada;
  }
  // ✅ Puede iniciar consulta cuando está confirmada
  get puedeIniciarConsulta() {
    return this.estaConfirmada;
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
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch {
      return "Fecha inv\xE1lida";
    }
  }
  formatDateTime(dateString) {
    try {
      return new Date(dateString).toLocaleString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
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
  calcularHoraFin() {
    if (!this.cita)
      return "--:--";
    try {
      const fechaInicio = new Date(this.cita.date);
      const fechaFin = new Date(fechaInicio.getTime() + this.cita.duration * 6e4);
      return fechaFin.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return "--:--";
    }
  }
  // Contactar paciente
  contactarPaciente(tipo) {
    if (!this.cita)
      return;
    if (tipo === "email" && this.cita.patientId.email) {
      window.open(`mailto:${this.cita.patientId.email}`, "_blank");
    } else if (tipo === "telefono" && this.cita.patientId.phone) {
      window.open(`tel:${this.cita.patientId.phone}`, "_blank");
    }
  }
  // Verificar si se puede editar notas
  get puedeEditarNotas() {
    return !this.estaCancelada;
  }
  static \u0275fac = function CitaDetalles_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CitaDetalles)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CitaDetalles, selectors: [["app-cita-detalles"]], decls: 12, vars: 3, consts: [["sinNotas", ""], [1, "cita-detalles-page"], [1, "page-header"], [1, "header-content"], [1, "btn-back", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "cita-content", 4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "error-icon"], [1, "btn-retry", 3, "click"], [1, "cita-content"], [1, "cita-header"], [1, "cita-info-basic"], [1, "cita-meta"], [1, "cita-date"], [1, "cita-time"], [1, "cita-duration"], [1, "cita-status"], [1, "status-badge"], [1, "details-grid"], [1, "details-column"], [1, "info-section"], [1, "patient-card"], [1, "patient-avatar"], [1, "patient-details"], [1, "patient-contact"], [1, "contact-item"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["class", "contact-item", 4, "ngIf"], [1, "patient-actions"], ["title", "Enviar email", 1, "btn-action", "email", 3, "click"], ["class", "btn-action phone", "title", "Llamar", 3, "click", 4, "ngIf"], [1, "details-list"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "detail-value", "status"], ["class", "detail-item", 4, "ngIf"], [1, "actions-column"], [1, "actions-section"], [1, "actions-grid"], ["class", "btn-action confirm", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-action in-progress", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-action complete", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-action no-show", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-action cancel", 3, "disabled", "click", 4, "ngIf"], [1, "status-section"], [1, "current-status"], ["class", "status-scheduled", 4, "ngIf"], ["class", "status-confirmed", 4, "ngIf"], ["class", "status-in-progress", 4, "ngIf"], ["class", "status-completed", 4, "ngIf"], ["class", "status-cancelled", 4, "ngIf"], ["class", "status-no-show", 4, "ngIf"], ["class", "status-rescheduled", 4, "ngIf"], [1, "notes-section"], [1, "section-header"], ["class", "btn-edit", 3, "click", 4, "ngIf"], ["class", "notes-content", 4, "ngIf"], ["class", "notes-editor", 4, "ngIf"], [1, "additional-info"], [4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], ["title", "Llamar", 1, "btn-action", "phone", 3, "click"], [1, "btn-action", "confirm", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "btn-action", "in-progress", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "btn-action", "complete", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "btn-action", "no-show", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"], [1, "btn-action", "cancel", 3, "click", "disabled"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "status-scheduled"], [1, "status-confirmed"], [1, "status-in-progress"], [1, "status-completed"], [1, "status-cancelled"], [1, "status-no-show"], [1, "status-rescheduled"], [1, "btn-edit", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "notes-content"], ["class", "notes-text", 4, "ngIf", "ngIfElse"], [1, "notes-text"], [1, "no-notes"], [1, "notes-editor"], ["placeholder", "Escribe aqu\xED las notas de la cita...", "rows", "6", 3, "ngModelChange", "ngModel"], [1, "editor-actions"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click", "disabled"]], template: function CitaDetalles_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
      \u0275\u0275listener("click", function CitaDetalles_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 5);
      \u0275\u0275element(5, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Volver a Citas ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8, "Detalles de la Cita");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(9, CitaDetalles_div_9_Template, 4, 0, "div", 7)(10, CitaDetalles_div_10_Template, 9, 1, "div", 8)(11, CitaDetalles_div_11_Template, 118, 43, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cita && !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.cita-detalles-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #64748b;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {\n  background: #475569;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  text-align: center;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f1f5f9;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1e293b;\n  margin-bottom: 8px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 20px;\n}\n.loading-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.loading-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover, \n.error-state[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.cita-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.cita-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 24px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.cita-header[_ngcontent-%COMP%]   .cita-info-basic[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n}\n.cita-header[_ngcontent-%COMP%]   .cita-info-basic[_ngcontent-%COMP%]   .cita-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cita-header[_ngcontent-%COMP%]   .cita-info-basic[_ngcontent-%COMP%]   .cita-meta[_ngcontent-%COMP%]   .cita-date[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 500;\n}\n.cita-header[_ngcontent-%COMP%]   .cita-info-basic[_ngcontent-%COMP%]   .cita-meta[_ngcontent-%COMP%]   .cita-time[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.cita-header[_ngcontent-%COMP%]   .cita-info-basic[_ngcontent-%COMP%]   .cita-meta[_ngcontent-%COMP%]   .cita-duration[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 14px;\n}\n.cita-header[_ngcontent-%COMP%]   .cita-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.cita-header[_ngcontent-%COMP%]   .cita-status[_ngcontent-%COMP%]   .status-badge.status-scheduled[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.cita-header[_ngcontent-%COMP%]   .cita-status[_ngcontent-%COMP%]   .status-badge.status-confirmed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.cita-header[_ngcontent-%COMP%]   .cita-status[_ngcontent-%COMP%]   .status-badge.status-completed[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.cita-header[_ngcontent-%COMP%]   .cita-status[_ngcontent-%COMP%]   .status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.cita-header[_ngcontent-%COMP%]   .cita-status[_ngcontent-%COMP%]   .status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 0;\n}\n.details-grid[_ngcontent-%COMP%]   .details-column[_ngcontent-%COMP%], \n.details-grid[_ngcontent-%COMP%]   .actions-column[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.details-grid[_ngcontent-%COMP%]   .details-column[_ngcontent-%COMP%] {\n  border-right: 1px solid #e2e8f0;\n}\n.info-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.info-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.patient-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #7c3aed);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   .patient-contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   .patient-contact[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #64748b;\n  font-size: 14px;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   .patient-contact[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  padding: 8px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-actions[_ngcontent-%COMP%]   .btn-action.email[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-actions[_ngcontent-%COMP%]   .btn-action.email[_ngcontent-%COMP%]:hover {\n  background: #3b82f6;\n  color: white;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-actions[_ngcontent-%COMP%]   .btn-action.phone[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.patient-card[_ngcontent-%COMP%]   .patient-actions[_ngcontent-%COMP%]   .btn-action.phone[_ngcontent-%COMP%]:hover {\n  background: #10b981;\n  color: white;\n}\n.details-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n}\n.details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n}\n.details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 500;\n}\n.details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.status[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.status.status-scheduled[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.status.status-confirmed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.status.status-completed[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value.status.status-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.actions-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.actions-section[_ngcontent-%COMP%]   .actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.actions-section[_ngcontent-%COMP%]   .actions-grid[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.actions-section[_ngcontent-%COMP%]   .actions-grid[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.actions-section[_ngcontent-%COMP%]   .actions-grid[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.actions-section[_ngcontent-%COMP%]   .actions-grid[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.actions-section[_ngcontent-%COMP%]   .actions-grid[_ngcontent-%COMP%]   .btn-action.confirm[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.actions-section[_ngcontent-%COMP%]   .actions-grid[_ngcontent-%COMP%]   .btn-action.confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #10b981;\n  color: white;\n}\n.actions-section[_ngcontent-%COMP%]   .actions-grid[_ngcontent-%COMP%]   .btn-action.complete[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n  border: 1px solid #bfdbfe;\n}\n.actions-section[_ngcontent-%COMP%]   .actions-grid[_ngcontent-%COMP%]   .btn-action.complete[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #3b82f6;\n  color: white;\n}\n.actions-section[_ngcontent-%COMP%]   .actions-grid[_ngcontent-%COMP%]   .btn-action.cancel[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.actions-section[_ngcontent-%COMP%]   .actions-grid[_ngcontent-%COMP%]   .btn-action.cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ef4444;\n  color: white;\n}\n.status-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.status-section[_ngcontent-%COMP%]   .current-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin: 0;\n  font-weight: 500;\n}\n.status-section[_ngcontent-%COMP%]   .current-status[_ngcontent-%COMP%]   p.status-completed[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #16a34a;\n}\n.status-section[_ngcontent-%COMP%]   .current-status[_ngcontent-%COMP%]   p.status-cancelled[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.notes-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.notes-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.notes-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.notes-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: transparent;\n  color: #3b82f6;\n  border: 1px solid #3b82f6;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.notes-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.notes-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #3b82f6;\n  color: white;\n}\n.notes-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.notes-section[_ngcontent-%COMP%]   .notes-content[_ngcontent-%COMP%]   .notes-text[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  margin: 0;\n  line-height: 1.5;\n  white-space: pre-wrap;\n}\n.notes-section[_ngcontent-%COMP%]   .notes-content[_ngcontent-%COMP%]   .no-notes[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-style: italic;\n  text-align: center;\n  padding: 20px;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px dashed #e2e8f0;\n}\n.notes-section[_ngcontent-%COMP%]   .notes-editor[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n  line-height: 1.5;\n  resize: vertical;\n  min-height: 120px;\n}\n.notes-section[_ngcontent-%COMP%]   .notes-editor[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);\n}\n.notes-section[_ngcontent-%COMP%]   .notes-editor[_ngcontent-%COMP%]   .editor-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 12px;\n}\n.notes-section[_ngcontent-%COMP%]   .notes-editor[_ngcontent-%COMP%]   .editor-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: transparent;\n  color: #64748b;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.notes-section[_ngcontent-%COMP%]   .notes-editor[_ngcontent-%COMP%]   .editor-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.notes-section[_ngcontent-%COMP%]   .notes-editor[_ngcontent-%COMP%]   .editor-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.notes-section[_ngcontent-%COMP%]   .notes-editor[_ngcontent-%COMP%]   .editor-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.notes-section[_ngcontent-%COMP%]   .notes-editor[_ngcontent-%COMP%]   .editor-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.additional-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  color: #64748b;\n  font-size: 14px;\n}\n.additional-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #374151;\n}\n@media (max-width: 1024px) {\n  .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .details-grid[_ngcontent-%COMP%]   .details-column[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid #e2e8f0;\n  }\n}\n@media (max-width: 768px) {\n  .cita-detalles-page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .cita-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n  }\n  .patient-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .patient-card[_ngcontent-%COMP%]   .patient-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=cita-detalles.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CitaDetalles, [{
    type: Component,
    args: [{ selector: "app-cita-detalles", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div class="cita-detalles-page">\r
  <!-- Header -->\r
  <div class="page-header">\r
    <div class="header-content">\r
      <button class="btn-back" (click)="goBack()">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>\r
        </svg>\r
        Volver a Citas\r
      </button>\r
      <h1>Detalles de la Cita</h1>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="isLoading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Cargando detalles de la cita...</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !isLoading" class="error-state">\r
    <div class="error-icon">\u26A0\uFE0F</div>\r
    <h3>Error al cargar la cita</h3>\r
    <p>{{ error }}</p>\r
    <button class="btn-retry" (click)="goToCitas()">Volver a Citas</button>\r
  </div>\r
\r
  <!-- Contenido principal -->\r
  <div *ngIf="cita && !isLoading" class="cita-content">\r
    <!-- Header de la cita -->\r
    <div class="cita-header">\r
      <div class="cita-info-basic">\r
        <h2>{{ cita.title }}</h2>\r
        <div class="cita-meta">\r
          <span class="cita-date">{{ formatDate(cita.date) }}</span>\r
          <span class="cita-time">{{ formatTime(cita.date) }} - {{ calcularHoraFin() }}</span>\r
          <span class="cita-duration">({{ cita.duration }} minutos)</span>\r
        </div>\r
      </div>\r
      <div class="cita-status">\r
        <span class="status-badge" [class]="getStatusClass(cita.status)">\r
          {{ getStatusDisplay(cita.status) }}\r
        </span>\r
      </div>\r
    </div>\r
\r
    <!-- Grid principal -->\r
    <div class="details-grid">\r
      <!-- Columna izquierda: Informaci\xF3n -->\r
      <div class="details-column">\r
        <!-- Informaci\xF3n del paciente -->\r
        <div class="info-section">\r
          <h3>Informaci\xF3n del Paciente</h3>\r
          <div class="patient-card">\r
            <div class="patient-avatar">\r
              {{ cita.patientId.name[0] }}{{ cita.patientId.lastName[0] }}\r
            </div>\r
            <div class="patient-details">\r
              <h4>{{ cita.patientId.name }} {{ cita.patientId.lastName }}</h4>\r
              <div class="patient-contact">\r
                <div class="contact-item">\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>\r
                  </svg>\r
                  <span>{{ cita.patientId.email }}</span>\r
                </div>\r
                <div class="contact-item" *ngIf="cita.patientId.phone">\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>\r
                  </svg>\r
                  <span>{{ cita.patientId.phone }}</span>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="patient-actions">\r
              <button class="btn-action email" \r
                      (click)="contactarPaciente('email')"\r
                      title="Enviar email">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>\r
                </svg>\r
              </button>\r
              <button class="btn-action phone" \r
                      *ngIf="cita.patientId.phone"\r
                      (click)="contactarPaciente('telefono')"\r
                      title="Llamar">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>\r
                </svg>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Detalles de la cita -->\r
        <div class="info-section">\r
          <h3>Detalles de la Cita</h3>\r
          <div class="details-list">\r
            <div class="detail-item">\r
              <span class="detail-label">Tipo de cita:</span>\r
              <span class="detail-value">{{ cita.type }}</span>\r
            </div>\r
            <div class="detail-item">\r
              <span class="detail-label">Fecha y hora:</span>\r
              <span class="detail-value">{{ formatDateTime(cita.date) }}</span>\r
            </div>\r
            <div class="detail-item">\r
              <span class="detail-label">Duraci\xF3n:</span>\r
              <span class="detail-value">{{ cita.duration }} minutos</span>\r
            </div>\r
            <div class="detail-item">\r
              <span class="detail-label">Estado:</span>\r
              <span class="detail-value status" [class]="getStatusClass(cita.status)">\r
                {{ getStatusDisplay(cita.status) }}\r
              </span>\r
            </div>\r
            <div class="detail-item">\r
              <span class="detail-label">Creada:</span>\r
              <span class="detail-value">{{ formatDateTime(cita.createdAt) }}</span>\r
            </div>\r
            <div class="detail-item" *ngIf="cita.updatedAt !== cita.createdAt">\r
              <span class="detail-label">Actualizada:</span>\r
              <span class="detail-value">{{ formatDateTime(cita.updatedAt) }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Columna derecha: Acciones y notas -->\r
      <div class="actions-column">\r
        <!-- Acciones r\xE1pidas - FLUJO CORREGIDO SEG\xDAN BACKEND -->\r
        <div class="actions-section">\r
          <h3>Gesti\xF3n de Cita</h3>\r
          <div class="actions-grid">\r
            \r
            <!-- CONFIRMAR - Solo cuando est\xE1 "scheduled" -->\r
            <button class="btn-action confirm" \r
                    *ngIf="puedeConfirmar"\r
                    (click)="cambiarEstado('confirmed')"\r
                    [disabled]="guardando">\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>\r
              </svg>\r
              Confirmar Disponibilidad\r
            </button>\r
            \r
            <!-- EN PROGRESO - Cuando est\xE1 "confirmed" -->\r
            <button class="btn-action in-progress" \r
                    *ngIf="puedeIniciarConsulta"\r
                    (click)="cambiarEstado('in_progress')"\r
                    [disabled]="guardando">\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>\r
              </svg>\r
              Iniciar Consulta\r
            </button>\r
            \r
            <!-- COMPLETAR - Cuando est\xE1 "confirmed" o "in_progress" -->\r
            <button class="btn-action complete" \r
                    *ngIf="puedeCompletar"\r
                    (click)="cambiarEstado('completed')"\r
                    [disabled]="guardando">\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>\r
              </svg>\r
              Marcar como Completada\r
            </button>\r
            \r
            <!-- NO SE PRESENT\xD3 - Cuando est\xE1 "confirmed" -->\r
            <button class="btn-action no-show" \r
                    *ngIf="puedeMarcarNoShow"\r
                    (click)="cambiarEstado('no_show')"\r
                    [disabled]="guardando">\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"/>\r
              </svg>\r
              No Se Present\xF3\r
            </button>\r
            \r
            <!-- CANCELAR - Disponible en varios estados -->\r
            <button class="btn-action cancel" \r
                    *ngIf="puedeCancelar"\r
                    (click)="cambiarEstado('cancelled')"\r
                    [disabled]="guardando">\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>\r
              </svg>\r
              Cancelar Cita\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Estado actual informativo -->\r
        <div class="status-section">\r
          <h3>Estado Actual</h3>\r
          <div class="current-status">\r
            <p *ngIf="puedeConfirmar" class="status-scheduled">\r
              \u23F3 <strong>Esperando confirmaci\xF3n del profesional</strong><br>\r
              Por favor confirma tu disponibilidad para atender esta cita.\r
            </p>\r
            <p *ngIf="estaConfirmada" class="status-confirmed">\r
              \u2705 <strong>Cita confirmada</strong><br>\r
              Lista para ser atendida el {{ formatDate(cita.date) }}\r
            </p>\r
            <p *ngIf="estaEnProgreso" class="status-in-progress">\r
              \u{1F504} <strong>Consulta en progreso</strong><br>\r
              La cita est\xE1 siendo atendida actualmente.\r
            </p>\r
            <p *ngIf="estaCompletada" class="status-completed">\r
              \u2705 <strong>Cita completada</strong><br>\r
              La consulta ha finalizado exitosamente.\r
            </p>\r
            <p *ngIf="estaCancelada" class="status-cancelled">\r
              \u274C <strong>Cita cancelada</strong>\r
            </p>\r
            <p *ngIf="noSePresento" class="status-no-show">\r
              \u{1F6AB} <strong>Paciente no se present\xF3</strong>\r
            </p>\r
            <p *ngIf="estaReprogramada" class="status-rescheduled">\r
              \u{1F4C5} <strong>Cita reprogramada</strong>\r
            </p>\r
          </div>\r
        </div>\r
\r
        <!-- Notas y observaciones -->\r
        <div class="notes-section">\r
          <div class="section-header">\r
            <h3>Notas y Observaciones</h3>\r
            <button *ngIf="!isEditing && puedeEditarNotas" \r
                    class="btn-edit" \r
                    (click)="isEditing = true">\r
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>\r
              </svg>\r
              Editar\r
            </button>\r
          </div>\r
\r
          <div *ngIf="!isEditing" class="notes-content">\r
            <p *ngIf="notas.notasPaciente; else sinNotas" class="notes-text">\r
              {{ notas.notasPaciente }}\r
            </p>\r
            <ng-template #sinNotas>\r
              <p class="no-notes">No hay notas para esta cita.</p>\r
            </ng-template>\r
          </div>\r
\r
          <div *ngIf="isEditing" class="notes-editor">\r
            <textarea [(ngModel)]="notas.notasPaciente" \r
                      placeholder="Escribe aqu\xED las notas de la cita..."\r
                      rows="6"></textarea>\r
            <div class="editor-actions">\r
              <button class="btn-secondary" \r
                      (click)="isEditing = false">\r
                Cancelar\r
              </button>\r
              <button class="btn-primary" \r
                      (click)="guardarNotas()"\r
                      [disabled]="guardando">\r
                <span *ngIf="!guardando">\u{1F4BE} Guardar</span>\r
                <span *ngIf="guardando">Guardando...</span>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Informaci\xF3n adicional -->\r
        <div class="info-section">\r
          <h3>Informaci\xF3n Adicional</h3>\r
          <div class="additional-info">\r
            <p><strong>ID de la cita:</strong> {{ cita._id }}</p>\r
            <p><strong>Profesional:</strong> T\xFA</p>\r
            <p><strong>Plataforma:</strong> {{ cita.meetingPlatform || 'Presencial' }}</p>\r
            <p *ngIf="cita.reason"><strong>Motivo:</strong> {{ cita.reason }}</p>\r
            <p *ngIf="cita.symptoms"><strong>S\xEDntomas:</strong> {{ cita.symptoms }}</p>\r
            <p><strong>Prioridad:</strong> {{ cita.priority }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/professional/cita-detalles/cita-detalles.scss */\n.cita-detalles-page {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 32px;\n}\n.page-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.page-header .header-content .btn-back {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #64748b;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.page-header .header-content .btn-back:hover {\n  background: #475569;\n}\n.page-header .header-content .btn-back svg {\n  width: 16px;\n  height: 16px;\n}\n.page-header .header-content h1 {\n  color: #1e293b;\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n}\n.loading-state,\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  text-align: center;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.loading-state .loading-spinner,\n.error-state .loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f1f5f9;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-state .error-icon,\n.error-state .error-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.loading-state h3,\n.error-state h3 {\n  color: #1e293b;\n  margin-bottom: 8px;\n}\n.loading-state p,\n.error-state p {\n  color: #64748b;\n  margin-bottom: 20px;\n}\n.loading-state .btn-retry,\n.error-state .btn-retry {\n  padding: 10px 20px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.loading-state .btn-retry:hover,\n.error-state .btn-retry:hover {\n  background: #2563eb;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.cita-content {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.cita-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 24px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.cita-header .cita-info-basic h2 {\n  color: #1e293b;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n}\n.cita-header .cita-info-basic .cita-meta {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cita-header .cita-info-basic .cita-meta .cita-date {\n  color: #374151;\n  font-weight: 500;\n}\n.cita-header .cita-info-basic .cita-meta .cita-time {\n  color: #64748b;\n}\n.cita-header .cita-info-basic .cita-meta .cita-duration {\n  color: #94a3b8;\n  font-size: 14px;\n}\n.cita-header .cita-status .status-badge {\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.cita-header .cita-status .status-badge.status-scheduled {\n  background: #fef3c7;\n  color: #92400e;\n}\n.cita-header .cita-status .status-badge.status-confirmed {\n  background: #d1fae5;\n  color: #065f46;\n}\n.cita-header .cita-status .status-badge.status-completed {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.cita-header .cita-status .status-badge.status-cancelled {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.cita-header .cita-status .status-badge.status-pending {\n  background: #f3f4f6;\n  color: #374151;\n}\n.details-grid {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 0;\n}\n.details-grid .details-column,\n.details-grid .actions-column {\n  padding: 24px;\n}\n.details-grid .details-column {\n  border-right: 1px solid #e2e8f0;\n}\n.info-section {\n  margin-bottom: 32px;\n}\n.info-section:last-child {\n  margin-bottom: 0;\n}\n.info-section h3 {\n  color: #374151;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.patient-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.patient-card .patient-avatar {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #7c3aed);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 600;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.patient-card .patient-details {\n  flex: 1;\n}\n.patient-card .patient-details h4 {\n  color: #1e293b;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.patient-card .patient-details .patient-contact {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.patient-card .patient-details .patient-contact .contact-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #64748b;\n  font-size: 14px;\n}\n.patient-card .patient-details .patient-contact .contact-item svg {\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.patient-card .patient-actions {\n  display: flex;\n  gap: 8px;\n}\n.patient-card .patient-actions .btn-action {\n  padding: 8px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.patient-card .patient-actions .btn-action svg {\n  width: 18px;\n  height: 18px;\n}\n.patient-card .patient-actions .btn-action.email {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.patient-card .patient-actions .btn-action.email:hover {\n  background: #3b82f6;\n  color: white;\n}\n.patient-card .patient-actions .btn-action.phone {\n  background: #d1fae5;\n  color: #065f46;\n}\n.patient-card .patient-actions .btn-action.phone:hover {\n  background: #10b981;\n  color: white;\n}\n.details-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.details-list .detail-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n}\n.details-list .detail-item .detail-label {\n  color: #64748b;\n  font-weight: 500;\n}\n.details-list .detail-item .detail-value {\n  color: #374151;\n  font-weight: 500;\n}\n.details-list .detail-item .detail-value.status {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.details-list .detail-item .detail-value.status.status-scheduled {\n  background: #fef3c7;\n  color: #92400e;\n}\n.details-list .detail-item .detail-value.status.status-confirmed {\n  background: #d1fae5;\n  color: #065f46;\n}\n.details-list .detail-item .detail-value.status.status-completed {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.details-list .detail-item .detail-value.status.status-cancelled {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.actions-section {\n  margin-bottom: 24px;\n}\n.actions-section .actions-grid {\n  display: grid;\n  gap: 12px;\n}\n.actions-section .actions-grid .btn-action {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.actions-section .actions-grid .btn-action svg {\n  width: 18px;\n  height: 18px;\n}\n.actions-section .actions-grid .btn-action:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.actions-section .actions-grid .btn-action:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.actions-section .actions-grid .btn-action.confirm {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.actions-section .actions-grid .btn-action.confirm:hover:not(:disabled) {\n  background: #10b981;\n  color: white;\n}\n.actions-section .actions-grid .btn-action.complete {\n  background: #dbeafe;\n  color: #1e40af;\n  border: 1px solid #bfdbfe;\n}\n.actions-section .actions-grid .btn-action.complete:hover:not(:disabled) {\n  background: #3b82f6;\n  color: white;\n}\n.actions-section .actions-grid .btn-action.cancel {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.actions-section .actions-grid .btn-action.cancel:hover:not(:disabled) {\n  background: #ef4444;\n  color: white;\n}\n.status-section {\n  margin-bottom: 24px;\n}\n.status-section .current-status p {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin: 0;\n  font-weight: 500;\n}\n.status-section .current-status p.status-completed {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #16a34a;\n}\n.status-section .current-status p.status-cancelled {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.notes-section {\n  margin-bottom: 24px;\n}\n.notes-section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.notes-section .section-header h3 {\n  margin: 0;\n}\n.notes-section .section-header .btn-edit {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  background: transparent;\n  color: #3b82f6;\n  border: 1px solid #3b82f6;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 13px;\n}\n.notes-section .section-header .btn-edit svg {\n  width: 14px;\n  height: 14px;\n}\n.notes-section .section-header .btn-edit:hover:not(:disabled) {\n  background: #3b82f6;\n  color: white;\n}\n.notes-section .section-header .btn-edit:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.notes-section .notes-content .notes-text {\n  background: #f8fafc;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  margin: 0;\n  line-height: 1.5;\n  white-space: pre-wrap;\n}\n.notes-section .notes-content .no-notes {\n  color: #94a3b8;\n  font-style: italic;\n  text-align: center;\n  padding: 20px;\n  background: #f8fafc;\n  border-radius: 8px;\n  border: 1px dashed #e2e8f0;\n}\n.notes-section .notes-editor textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 14px;\n  line-height: 1.5;\n  resize: vertical;\n  min-height: 120px;\n}\n.notes-section .notes-editor textarea:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);\n}\n.notes-section .notes-editor .editor-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 12px;\n}\n.notes-section .notes-editor .editor-actions .btn-secondary {\n  padding: 8px 16px;\n  background: transparent;\n  color: #64748b;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.notes-section .notes-editor .editor-actions .btn-secondary:hover {\n  background: #f8fafc;\n}\n.notes-section .notes-editor .editor-actions .btn-primary {\n  padding: 8px 16px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.notes-section .notes-editor .editor-actions .btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.notes-section .notes-editor .editor-actions .btn-primary:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.additional-info p {\n  margin: 8px 0;\n  color: #64748b;\n  font-size: 14px;\n}\n.additional-info p strong {\n  color: #374151;\n}\n@media (max-width: 1024px) {\n  .details-grid {\n    grid-template-columns: 1fr;\n  }\n  .details-grid .details-column {\n    border-right: none;\n    border-bottom: 1px solid #e2e8f0;\n  }\n}\n@media (max-width: 768px) {\n  .cita-detalles-page {\n    padding: 16px;\n  }\n  .cita-header {\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n  }\n  .patient-card {\n    flex-direction: column;\n    text-align: center;\n  }\n  .patient-card .patient-actions {\n    justify-content: center;\n  }\n  .details-list .detail-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .actions-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=cita-detalles.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CitaDetalles, { className: "CitaDetalles", filePath: "src/app/professional/cita-detalles/cita-detalles.ts", lineNumber: 19 });
})();
export {
  CitaDetalles
};
//# sourceMappingURL=chunk-65Z5L4CQ.js.map
