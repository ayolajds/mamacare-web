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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DEJWN6HZ.js";

// src/app/professional/agenda/agenda.ts
function Agenda_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando configuraci\xF3n...");
    \u0275\u0275elementEnd()();
  }
}
function Agenda_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function Agenda_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 20);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.success);
  }
}
function Agenda_div_26_div_7_div_7_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 34)(2, "div", 35)(3, "label");
    \u0275\u0275text(4, "Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function Agenda_div_26_div_7_div_7_div_16_Template_input_ngModelChange_5_listener($event) {
      const descanso_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(descanso_r7.inicio, $event) || (descanso_r7.inicio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35)(7, "label");
    \u0275\u0275text(8, "Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function Agenda_div_26_div_7_div_7_div_16_Template_input_ngModelChange_9_listener($event) {
      const descanso_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(descanso_r7.fin, $event) || (descanso_r7.fin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 42);
    \u0275\u0275listener("click", function Agenda_div_26_div_7_div_7_div_16_Template_button_click_10_listener() {
      const j_r8 = \u0275\u0275restoreView(_r6).index;
      const i_r5 = \u0275\u0275nextContext(2).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminarDescanso(i_r5, j_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 4);
    \u0275\u0275element(12, "path", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const descanso_r7 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", descanso_r7.inicio);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", descanso_r7.fin);
  }
}
function Agenda_div_26_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "label");
    \u0275\u0275text(4, "Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function Agenda_div_26_div_7_div_7_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const horario_r3 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(horario_r3.horarioInicio, $event) || (horario_r3.horarioInicio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35)(7, "label");
    \u0275\u0275text(8, "Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function Agenda_div_26_div_7_div_7_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const horario_r3 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(horario_r3.horarioFin, $event) || (horario_r3.horarioFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 37)(11, "div", 38)(12, "h4");
    \u0275\u0275text(13, "Descansos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 39);
    \u0275\u0275listener("click", function Agenda_div_26_div_7_div_7_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.agregarDescanso(i_r5));
    });
    \u0275\u0275text(15, " + Agregar Descanso ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, Agenda_div_26_div_7_div_7_div_16_Template, 13, 2, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const horario_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", horario_r3.horarioInicio);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", horario_r3.horarioFin);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", horario_r3.descansos);
  }
}
function Agenda_div_26_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "p");
    \u0275\u0275text(2, "No disponible");
    \u0275\u0275elementEnd()();
  }
}
function Agenda_div_26_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "label", 28)(3, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function Agenda_div_26_div_7_Template_input_ngModelChange_3_listener($event) {
      const horario_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(horario_r3.activo, $event) || (horario_r3.activo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 30);
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, Agenda_div_26_div_7_div_7_Template, 17, 3, "div", 31)(8, Agenda_div_26_div_7_div_8_Template, 3, 0, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const horario_r3 = ctx.$implicit;
    \u0275\u0275classProp("inactive", !horario_r3.activo);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", horario_r3.activo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(horario_r3.dia);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", horario_r3.activo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !horario_r3.activo);
  }
}
function Agenda_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "h2");
    \u0275\u0275text(3, "Horarios de Atenci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Configura tus horarios de disponibilidad para cada d\xEDa de la semana");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 24);
    \u0275\u0275template(7, Agenda_div_26_div_7_Template, 9, 6, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r0.horarios);
  }
}
function Agenda_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "h2");
    \u0275\u0275text(3, "Configuraci\xF3n General");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Personaliza el comportamiento de tu agenda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 45)(7, "div", 46)(8, "h3");
    \u0275\u0275text(9, "Duraci\xF3n de Citas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 47)(11, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function Agenda_div_27_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.configuracion.duracionCita, $event) || (ctx_r0.configuracion.duracionCita = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "minutos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 46)(15, "h3");
    \u0275\u0275text(16, "Tiempo entre Citas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 47)(18, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function Agenda_div_27_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.configuracion.tiempoEntreCitas, $event) || (ctx_r0.configuracion.tiempoEntreCitas = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "minutos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 46)(22, "h3");
    \u0275\u0275text(23, "M\xE1ximo de Citas por D\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 47)(25, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function Agenda_div_27_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.configuracion.maxCitasPorDia, $event) || (ctx_r0.configuracion.maxCitasPorDia = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "citas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 51)(29, "h3");
    \u0275\u0275text(30, "Recordatorios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 52)(32, "label", 28)(33, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function Agenda_div_27_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.configuracion.recordatorioEmail, $event) || (ctx_r0.configuracion.recordatorioEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "span", 30);
    \u0275\u0275text(35, " Enviar recordatorio por email ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "label", 28)(37, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function Agenda_div_27_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.configuracion.recordatorioSMS, $event) || (ctx_r0.configuracion.recordatorioSMS = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "span", 30);
    \u0275\u0275text(39, " Enviar recordatorio por SMS ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.configuracion.duracionCita);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.configuracion.tiempoEntreCitas);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.configuracion.maxCitasPorDia);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.configuracion.recordatorioEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.configuracion.recordatorioSMS);
  }
}
function Agenda_div_28_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 64);
    \u0275\u0275listener("click", function Agenda_div_28_div_14_div_4_Template_button_click_3_listener() {
      const dia_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.eliminarDiaLibre(dia_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 4);
    \u0275\u0275element(5, "path", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dia_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatTime(dia_r12));
  }
}
function Agenda_div_28_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "h3");
    \u0275\u0275text(2, "D\xEDas libres programados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61);
    \u0275\u0275template(4, Agenda_div_28_div_14_div_4_Template, 6, 1, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.diasLibres);
  }
}
function Agenda_div_28_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "p");
    \u0275\u0275text(2, "No hay d\xEDas libres programados");
    \u0275\u0275elementEnd()();
  }
}
function Agenda_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "h2");
    \u0275\u0275text(3, "D\xEDas Libres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Agrega d\xEDas espec\xEDficos en los que no estar\xE1s disponible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 53)(7, "div", 54)(8, "label");
    \u0275\u0275text(9, "Agregar d\xEDa libre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 55)(11, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function Agenda_div_28_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoDiaLibre, $event) || (ctx_r0.nuevoDiaLibre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 57);
    \u0275\u0275listener("click", function Agenda_div_28_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.agregarDiaLibre());
    });
    \u0275\u0275text(13, " Agregar ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(14, Agenda_div_28_div_14_Template, 5, 1, "div", 58)(15, Agenda_div_28_div_15_Template, 3, 0, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoDiaLibre);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.nuevoDiaLibre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.diasLibres.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.diasLibres.length === 0);
  }
}
function Agenda_div_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4BE} Guardar Configuraci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function Agenda_div_29_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Guardando...");
    \u0275\u0275elementEnd();
  }
}
function Agenda_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "button", 67);
    \u0275\u0275listener("click", function Agenda_div_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardarConfiguracion());
    });
    \u0275\u0275template(2, Agenda_div_29_span_2_Template, 2, 0, "span", 68)(3, Agenda_div_29_span_3_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
  }
}
var Agenda = class _Agenda {
  professionalService = inject(ProfessionalService);
  authService = inject(AuthService);
  router = inject(Router);
  // Configuración de horarios
  horarios = [
    { dia: "Lunes", activo: true, horarioInicio: "08:00", horarioFin: "17:00", descansos: [] },
    { dia: "Martes", activo: true, horarioInicio: "08:00", horarioFin: "17:00", descansos: [] },
    { dia: "Mi\xE9rcoles", activo: true, horarioInicio: "08:00", horarioFin: "17:00", descansos: [] },
    { dia: "Jueves", activo: true, horarioInicio: "08:00", horarioFin: "17:00", descansos: [] },
    { dia: "Viernes", activo: true, horarioInicio: "08:00", horarioFin: "17:00", descansos: [] },
    { dia: "S\xE1bado", activo: false, horarioInicio: "09:00", horarioFin: "13:00", descansos: [] },
    { dia: "Domingo", activo: false, horarioInicio: "09:00", horarioFin: "13:00", descansos: [] }
  ];
  // Configuración general
  configuracion = {
    duracionCita: 60,
    tiempoEntreCitas: 15,
    recordatorioEmail: true,
    recordatorioSMS: false,
    maxCitasPorDia: 10
  };
  // Días libres
  diasLibres = [];
  nuevoDiaLibre = "";
  // Estados
  isLoading = false;
  error = "";
  success = "";
  // Vista actual
  vistaActual = "horarios";
  destroy$ = new Subject();
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.cargarConfiguracion();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  cargarConfiguracion() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        yield new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error) {
        console.error("Error loading agenda configuration:", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  // Navegación
  goToDashboard() {
    this.router.navigate(["/Panel-profesional"]);
  }
  // Gestión de horarios
  agregarDescanso(diaIndex) {
    this.horarios[diaIndex].descansos.push({ inicio: "12:00", fin: "13:00" });
  }
  eliminarDescanso(diaIndex, descansoIndex) {
    this.horarios[diaIndex].descansos.splice(descansoIndex, 1);
  }
  // Gestión de días libres
  agregarDiaLibre() {
    if (this.nuevoDiaLibre && !this.diasLibres.includes(this.nuevoDiaLibre)) {
      this.diasLibres.push(this.nuevoDiaLibre);
      this.nuevoDiaLibre = "";
    }
  }
  eliminarDiaLibre(dia) {
    this.diasLibres = this.diasLibres.filter((d) => d !== dia);
  }
  // Guardar configuración
  guardarConfiguracion() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.error = "";
      this.success = "";
      try {
        yield new Promise((resolve) => setTimeout(resolve, 1e3));
        this.success = "Configuraci\xF3n guardada correctamente";
        setTimeout(() => {
          this.success = "";
        }, 3e3);
      } catch (error) {
        console.error("Error saving agenda configuration:", error);
        this.error = "Error al guardar la configuraci\xF3n";
      } finally {
        this.isLoading = false;
      }
    });
  }
  // Helper functions
  formatTime(time) {
    return time;
  }
  getDiaNombre(dia) {
    const diasMap = {
      "Lunes": "Lunes",
      "Martes": "Martes",
      "Mi\xE9rcoles": "Mi\xE9rcoles",
      "Jueves": "Jueves",
      "Viernes": "Viernes",
      "S\xE1bado": "S\xE1bado",
      "Domingo": "Domingo"
    };
    return diasMap[dia] || dia;
  }
  // Validaciones
  validarHorario(horario) {
    if (!horario.activo)
      return true;
    const inicio = this.timeToMinutes(horario.horarioInicio);
    const fin = this.timeToMinutes(horario.horarioFin);
    return inicio < fin;
  }
  timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }
  // Cambiar vista
  cambiarVista(vista) {
    this.vistaActual = vista;
  }
  static \u0275fac = function Agenda_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Agenda)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Agenda, selectors: [["app-agenda"]], decls: 30, vars: 13, consts: [[1, "agenda-page"], [1, "page-header"], [1, "header-content"], [1, "btn-back", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "navigation-tabs"], [1, "tab-button", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["class", "loading-state", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], ["class", "section-container", 4, "ngIf"], ["class", "actions-footer", 4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-message"], [1, "message-icon"], [1, "success-message"], [1, "section-container"], [1, "section-header"], [1, "horarios-grid"], ["class", "horario-card", 3, "inactive", 4, "ngFor", "ngForOf"], [1, "horario-card"], [1, "horario-header"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkmark"], ["class", "horario-content", 4, "ngIf"], ["class", "horario-inactive", 4, "ngIf"], [1, "horario-content"], [1, "time-inputs"], [1, "time-group"], ["type", "time", 3, "ngModelChange", "ngModel"], [1, "descansos-section"], [1, "descansos-header"], [1, "btn-small", 3, "click"], ["class", "descanso-item", 4, "ngFor", "ngForOf"], [1, "descanso-item"], ["title", "Eliminar descanso", 1, "btn-remove", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "horario-inactive"], [1, "config-grid"], [1, "config-card"], [1, "config-input"], ["type", "number", "min", "15", "max", "240", "step", "15", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "60", "step", "5", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "max", "50", 3, "ngModelChange", "ngModel"], [1, "config-card", "full-width"], [1, "checkbox-group"], [1, "dias-libres-form"], [1, "form-group"], [1, "input-with-button"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], ["class", "dias-libres-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "dias-libres-list"], [1, "dias-grid"], ["class", "dia-libre-card", 4, "ngFor", "ngForOf"], [1, "dia-libre-card"], ["title", "Eliminar d\xEDa libre", 1, "btn-remove", 3, "click"], [1, "empty-state"], [1, "actions-footer"], [1, "btn-save", 3, "click", "disabled"], [4, "ngIf"]], template: function Agenda_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function Agenda_Template_button_click_3_listener() {
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
      \u0275\u0275text(8, "Mi Agenda");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
      \u0275\u0275listener("click", function Agenda_Template_button_click_10_listener() {
        return ctx.cambiarVista("horarios");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 4);
      \u0275\u0275element(12, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " Horarios ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "button", 7);
      \u0275\u0275listener("click", function Agenda_Template_button_click_14_listener() {
        return ctx.cambiarVista("configuracion");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 4);
      \u0275\u0275element(16, "path", 9)(17, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Configuraci\xF3n ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "button", 7);
      \u0275\u0275listener("click", function Agenda_Template_button_click_19_listener() {
        return ctx.cambiarVista("dias-libres");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 4);
      \u0275\u0275element(21, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " D\xEDas Libres ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, Agenda_div_23_Template, 4, 0, "div", 12)(24, Agenda_div_24_Template, 5, 1, "div", 13)(25, Agenda_div_25_Template, 5, 1, "div", 14)(26, Agenda_div_26_Template, 8, 1, "div", 15)(27, Agenda_div_27_Template, 40, 5, "div", 15)(28, Agenda_div_28_Template, 16, 4, "div", 15)(29, Agenda_div_29_Template, 4, 3, "div", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275classProp("active", ctx.vistaActual === "horarios");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.vistaActual === "configuracion");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.vistaActual === "dias-libres");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vistaActual === "horarios" && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vistaActual === "configuracion" && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vistaActual === "dias-libres" && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ['\n\n.agenda-page[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #64748b;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {\n  background: #475569;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n}\n.navigation-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 32px;\n  padding: 8px;\n  background: #f8fafc;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.navigation-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #64748b;\n  transition: all 0.2s ease;\n}\n.navigation-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.navigation-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #374151;\n}\n.navigation-tabs[_ngcontent-%COMP%]   .tab-button.active[_ngcontent-%COMP%] {\n  background: white;\n  color: #3b82f6;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f1f5f9;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.error-message[_ngcontent-%COMP%], \n.success-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n.error-message[_ngcontent-%COMP%]   .message-icon[_ngcontent-%COMP%], \n.success-message[_ngcontent-%COMP%]   .message-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.success-message[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #16a34a;\n}\n.section-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.section-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.section-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.section-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n  margin: 0;\n}\n.horarios-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.horario-card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n  transition: all 0.2s ease;\n}\n.horario-card[_ngcontent-%COMP%]:hover {\n  border-color: #3b82f6;\n}\n.horario-card.inactive[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-color: #e2e8f0;\n}\n.horario-card.inactive[_ngcontent-%COMP%]   .horario-header[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.horario-card[_ngcontent-%COMP%]   .horario-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.horario-card[_ngcontent-%COMP%]   .horario-header[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #1e293b;\n}\n.horario-card[_ngcontent-%COMP%]   .horario-header[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.horario-card[_ngcontent-%COMP%]   .horario-header[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 4px;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.horario-card[_ngcontent-%COMP%]   .horario-header[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 5px;\n  top: 1px;\n  width: 6px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.horario-card[_ngcontent-%COMP%]   .horario-header[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n}\n.horario-card[_ngcontent-%COMP%]   .horario-header[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.horario-card[_ngcontent-%COMP%]   .horario-content[_ngcontent-%COMP%]   .time-inputs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.horario-card[_ngcontent-%COMP%]   .horario-content[_ngcontent-%COMP%]   .time-inputs[_ngcontent-%COMP%]   .time-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #374151;\n  font-weight: 500;\n  font-size: 13px;\n}\n.horario-card[_ngcontent-%COMP%]   .horario-content[_ngcontent-%COMP%]   .time-inputs[_ngcontent-%COMP%]   .time-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.horario-card[_ngcontent-%COMP%]   .horario-content[_ngcontent-%COMP%]   .time-inputs[_ngcontent-%COMP%]   .time-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);\n}\n.horario-card[_ngcontent-%COMP%]   .descansos-section[_ngcontent-%COMP%]   .descansos-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.horario-card[_ngcontent-%COMP%]   .descansos-section[_ngcontent-%COMP%]   .descansos-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n}\n.horario-card[_ngcontent-%COMP%]   .descansos-section[_ngcontent-%COMP%]   .descansos-header[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.horario-card[_ngcontent-%COMP%]   .descansos-section[_ngcontent-%COMP%]   .descansos-header[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.horario-card[_ngcontent-%COMP%]   .descansos-section[_ngcontent-%COMP%]   .descanso-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  margin-bottom: 8px;\n}\n.horario-card[_ngcontent-%COMP%]   .descansos-section[_ngcontent-%COMP%]   .descanso-item[_ngcontent-%COMP%]   .time-inputs[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 0;\n  grid-template-columns: 1fr 1fr auto;\n  gap: 12px;\n}\n.horario-card[_ngcontent-%COMP%]   .descansos-section[_ngcontent-%COMP%]   .descanso-item[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  padding: 6px;\n  background: #ef4444;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.horario-card[_ngcontent-%COMP%]   .descansos-section[_ngcontent-%COMP%]   .descanso-item[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.horario-card[_ngcontent-%COMP%]   .descansos-section[_ngcontent-%COMP%]   .descanso-item[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.horario-card[_ngcontent-%COMP%]   .horario-inactive[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94a3b8;\n  font-style: italic;\n  padding: 20px 0;\n}\n.config-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%]   .config-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%]   .config-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  width: 100px;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%]   .config-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%]   .config-input[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  color: #374151;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid #d1d5db;\n  border-radius: 4px;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 4px;\n  top: 0px;\n  width: 5px;\n  height: 9px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  border-color: #3b82f6;\n}\n.config-grid[_ngcontent-%COMP%]   .config-card[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.dias-libres-form[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.dias-libres-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #374151;\n  font-weight: 500;\n  font-size: 14px;\n}\n.dias-libres-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-with-button[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.dias-libres-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-with-button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.dias-libres-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-with-button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);\n}\n.dias-libres-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-with-button[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.dias-libres-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-with-button[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.dias-libres-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-with-button[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.dias-libres-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.dias-libres-list[_ngcontent-%COMP%]   .dias-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n.dias-libres-list[_ngcontent-%COMP%]   .dia-libre-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n}\n.dias-libres-list[_ngcontent-%COMP%]   .dia-libre-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 14px;\n}\n.dias-libres-list[_ngcontent-%COMP%]   .dia-libre-card[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  padding: 4px;\n  background: #ef4444;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dias-libres-list[_ngcontent-%COMP%]   .dia-libre-card[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.dias-libres-list[_ngcontent-%COMP%]   .dia-libre-card[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 24px;\n  color: #94a3b8;\n  font-style: italic;\n}\n.actions-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 32px;\n}\n.actions-footer[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #10b981;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n}\n.actions-footer[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #059669;\n}\n.actions-footer[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .agenda-page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .navigation-tabs[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .navigation-tabs[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .horario-card[_ngcontent-%COMP%]   .time-inputs[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .descanso-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch !important;\n  }\n  .descanso-item[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n  .config-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dias-libres-form[_ngcontent-%COMP%]   .input-with-button[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .actions-footer[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=agenda.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Agenda, [{
    type: Component,
    args: [{ selector: "app-agenda", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div class="agenda-page">\r
  <!-- Header -->\r
  <div class="page-header">\r
    <div class="header-content">\r
      <button class="btn-back" (click)="goToDashboard()">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>\r
        </svg>\r
        Volver al Panel\r
      </button>\r
      <h1>Mi Agenda</h1>\r
    </div>\r
  </div>\r
\r
  <!-- Navegaci\xF3n entre secciones -->\r
  <div class="navigation-tabs">\r
    <button \r
      class="tab-button" \r
      [class.active]="vistaActual === 'horarios'"\r
      (click)="cambiarVista('horarios')">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>\r
      </svg>\r
      Horarios\r
    </button>\r
    \r
    <button \r
      class="tab-button" \r
      [class.active]="vistaActual === 'configuracion'"\r
      (click)="cambiarVista('configuracion')">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>\r
      </svg>\r
      Configuraci\xF3n\r
    </button>\r
    \r
    <button \r
      class="tab-button" \r
      [class.active]="vistaActual === 'dias-libres'"\r
      (click)="cambiarVista('dias-libres')">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>\r
      </svg>\r
      D\xEDas Libres\r
    </button>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="isLoading" class="loading-state">\r
    <div class="loading-spinner"></div>\r
    <p>Cargando configuraci\xF3n...</p>\r
  </div>\r
\r
  <!-- Mensajes -->\r
  <div *ngIf="error" class="error-message">\r
    <div class="message-icon">\u26A0\uFE0F</div>\r
    <p>{{ error }}</p>\r
  </div>\r
\r
  <div *ngIf="success" class="success-message">\r
    <div class="message-icon">\u2705</div>\r
    <p>{{ success }}</p>\r
  </div>\r
\r
  <!-- Secci\xF3n: Horarios -->\r
  <div *ngIf="vistaActual === 'horarios' && !isLoading" class="section-container">\r
    <div class="section-header">\r
      <h2>Horarios de Atenci\xF3n</h2>\r
      <p>Configura tus horarios de disponibilidad para cada d\xEDa de la semana</p>\r
    </div>\r
\r
    <div class="horarios-grid">\r
      <div *ngFor="let horario of horarios; let i = index" class="horario-card" [class.inactive]="!horario.activo">\r
        <div class="horario-header">\r
          <label class="checkbox-label">\r
            <input type="checkbox" [(ngModel)]="horario.activo">\r
            <span class="checkmark"></span>\r
            <strong>{{ horario.dia }}</strong>\r
          </label>\r
        </div>\r
\r
        <div class="horario-content" *ngIf="horario.activo">\r
          <div class="time-inputs">\r
            <div class="time-group">\r
              <label>Inicio</label>\r
              <input type="time" [(ngModel)]="horario.horarioInicio">\r
            </div>\r
            <div class="time-group">\r
              <label>Fin</label>\r
              <input type="time" [(ngModel)]="horario.horarioFin">\r
            </div>\r
          </div>\r
\r
          <!-- Descansos -->\r
          <div class="descansos-section">\r
            <div class="descansos-header">\r
              <h4>Descansos</h4>\r
              <button class="btn-small" (click)="agregarDescanso(i)">\r
                + Agregar Descanso\r
              </button>\r
            </div>\r
            \r
            <div *ngFor="let descanso of horario.descansos; let j = index" class="descanso-item">\r
              <div class="time-inputs">\r
                <div class="time-group">\r
                  <label>Inicio</label>\r
                  <input type="time" [(ngModel)]="descanso.inicio">\r
                </div>\r
                <div class="time-group">\r
                  <label>Fin</label>\r
                  <input type="time" [(ngModel)]="descanso.fin">\r
                </div>\r
              </div>\r
              <button class="btn-remove" (click)="eliminarDescanso(i, j)" title="Eliminar descanso">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>\r
                </svg>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="horario-inactive" *ngIf="!horario.activo">\r
          <p>No disponible</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Secci\xF3n: Configuraci\xF3n -->\r
  <div *ngIf="vistaActual === 'configuracion' && !isLoading" class="section-container">\r
    <div class="section-header">\r
      <h2>Configuraci\xF3n General</h2>\r
      <p>Personaliza el comportamiento de tu agenda</p>\r
    </div>\r
\r
    <div class="config-grid">\r
      <div class="config-card">\r
        <h3>Duraci\xF3n de Citas</h3>\r
        <div class="config-input">\r
          <input type="number" [(ngModel)]="configuracion.duracionCita" min="15" max="240" step="15">\r
          <span>minutos</span>\r
        </div>\r
      </div>\r
\r
      <div class="config-card">\r
        <h3>Tiempo entre Citas</h3>\r
        <div class="config-input">\r
          <input type="number" [(ngModel)]="configuracion.tiempoEntreCitas" min="0" max="60" step="5">\r
          <span>minutos</span>\r
        </div>\r
      </div>\r
\r
      <div class="config-card">\r
        <h3>M\xE1ximo de Citas por D\xEDa</h3>\r
        <div class="config-input">\r
          <input type="number" [(ngModel)]="configuracion.maxCitasPorDia" min="1" max="50">\r
          <span>citas</span>\r
        </div>\r
      </div>\r
\r
      <div class="config-card full-width">\r
        <h3>Recordatorios</h3>\r
        <div class="checkbox-group">\r
          <label class="checkbox-label">\r
            <input type="checkbox" [(ngModel)]="configuracion.recordatorioEmail">\r
            <span class="checkmark"></span>\r
            Enviar recordatorio por email\r
          </label>\r
          <label class="checkbox-label">\r
            <input type="checkbox" [(ngModel)]="configuracion.recordatorioSMS">\r
            <span class="checkmark"></span>\r
            Enviar recordatorio por SMS\r
          </label>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Secci\xF3n: D\xEDas Libres -->\r
  <div *ngIf="vistaActual === 'dias-libres' && !isLoading" class="section-container">\r
    <div class="section-header">\r
      <h2>D\xEDas Libres</h2>\r
      <p>Agrega d\xEDas espec\xEDficos en los que no estar\xE1s disponible</p>\r
    </div>\r
\r
    <div class="dias-libres-form">\r
      <div class="form-group">\r
        <label>Agregar d\xEDa libre</label>\r
        <div class="input-with-button">\r
          <input type="date" [(ngModel)]="nuevoDiaLibre">\r
          <button class="btn-primary" (click)="agregarDiaLibre()" [disabled]="!nuevoDiaLibre">\r
            Agregar\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="dias-libres-list" *ngIf="diasLibres.length > 0">\r
      <h3>D\xEDas libres programados</h3>\r
      <div class="dias-grid">\r
        <div *ngFor="let dia of diasLibres" class="dia-libre-card">\r
          <span>{{ formatTime(dia) }}</span>\r
          <button class="btn-remove" (click)="eliminarDiaLibre(dia)" title="Eliminar d\xEDa libre">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>\r
            </svg>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="diasLibres.length === 0" class="empty-state">\r
      <p>No hay d\xEDas libres programados</p>\r
    </div>\r
  </div>\r
\r
  <!-- Bot\xF3n Guardar -->\r
  <div class="actions-footer" *ngIf="!isLoading">\r
    <button class="btn-save" (click)="guardarConfiguracion()" [disabled]="isLoading">\r
      <span *ngIf="!isLoading">\u{1F4BE} Guardar Configuraci\xF3n</span>\r
      <span *ngIf="isLoading">Guardando...</span>\r
    </button>\r
  </div>\r
</div>`, styles: ['/* src/app/professional/agenda/agenda.scss */\n.agenda-page {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 32px;\n}\n.page-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.page-header .header-content .btn-back {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: #64748b;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.page-header .header-content .btn-back:hover {\n  background: #475569;\n}\n.page-header .header-content .btn-back svg {\n  width: 16px;\n  height: 16px;\n}\n.page-header .header-content h1 {\n  color: #1e293b;\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0;\n}\n.navigation-tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 32px;\n  padding: 8px;\n  background: #f8fafc;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.navigation-tabs .tab-button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #64748b;\n  transition: all 0.2s ease;\n}\n.navigation-tabs .tab-button svg {\n  width: 18px;\n  height: 18px;\n}\n.navigation-tabs .tab-button:hover {\n  background: white;\n  color: #374151;\n}\n.navigation-tabs .tab-button.active {\n  background: white;\n  color: #3b82f6;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 24px;\n  text-align: center;\n}\n.loading-state .loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f1f5f9;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-state p {\n  color: #64748b;\n  margin: 0;\n}\n.error-message,\n.success-message {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  font-size: 14px;\n}\n.error-message .message-icon,\n.success-message .message-icon {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.error-message {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n}\n.success-message {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #16a34a;\n}\n.section-container {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.section-container .section-header {\n  margin-bottom: 24px;\n}\n.section-container .section-header h2 {\n  color: #1e293b;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.section-container .section-header p {\n  color: #64748b;\n  font-size: 14px;\n  margin: 0;\n}\n.horarios-grid {\n  display: grid;\n  gap: 16px;\n}\n.horario-card {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n  transition: all 0.2s ease;\n}\n.horario-card:hover {\n  border-color: #3b82f6;\n}\n.horario-card.inactive {\n  background: #f8fafc;\n  border-color: #e2e8f0;\n}\n.horario-card.inactive .horario-header {\n  opacity: 0.6;\n}\n.horario-card .horario-header {\n  margin-bottom: 16px;\n}\n.horario-card .horario-header .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #1e293b;\n}\n.horario-card .horario-header .checkbox-label input {\n  display: none;\n}\n.horario-card .horario-header .checkbox-label .checkmark {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 4px;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.horario-card .horario-header .checkbox-label .checkmark::after {\n  content: "";\n  position: absolute;\n  left: 5px;\n  top: 1px;\n  width: 6px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.horario-card .horario-header .checkbox-label input:checked + .checkmark {\n  background: #3b82f6;\n  border-color: #3b82f6;\n}\n.horario-card .horario-header .checkbox-label input:checked + .checkmark::after {\n  opacity: 1;\n}\n.horario-card .horario-content .time-inputs {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.horario-card .horario-content .time-inputs .time-group label {\n  display: block;\n  margin-bottom: 6px;\n  color: #374151;\n  font-weight: 500;\n  font-size: 13px;\n}\n.horario-card .horario-content .time-inputs .time-group input {\n  width: 80%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.horario-card .horario-content .time-inputs .time-group input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);\n}\n.horario-card .descansos-section .descansos-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.horario-card .descansos-section .descansos-header h4 {\n  color: #374151;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n}\n.horario-card .descansos-section .descansos-header .btn-small {\n  padding: 6px 12px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.horario-card .descansos-section .descansos-header .btn-small:hover {\n  background: #2563eb;\n}\n.horario-card .descansos-section .descanso-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 6px;\n  margin-bottom: 8px;\n}\n.horario-card .descansos-section .descanso-item .time-inputs {\n  flex: 1;\n  margin-bottom: 0;\n  grid-template-columns: 1fr 1fr auto;\n  gap: 12px;\n}\n.horario-card .descansos-section .descanso-item .btn-remove {\n  padding: 6px;\n  background: #ef4444;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.horario-card .descansos-section .descanso-item .btn-remove svg {\n  width: 14px;\n  height: 14px;\n}\n.horario-card .descansos-section .descanso-item .btn-remove:hover {\n  background: #dc2626;\n}\n.horario-card .horario-inactive {\n  text-align: center;\n  color: #94a3b8;\n  font-style: italic;\n  padding: 20px 0;\n}\n.config-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n.config-grid .config-card {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 20px;\n}\n.config-grid .config-card.full-width {\n  grid-column: 1/-1;\n}\n.config-grid .config-card h3 {\n  color: #374151;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.config-grid .config-card .config-input {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.config-grid .config-card .config-input input {\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  width: 100px;\n}\n.config-grid .config-card .config-input input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);\n}\n.config-grid .config-card .config-input span {\n  color: #64748b;\n  font-size: 14px;\n}\n.config-grid .config-card .checkbox-group {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.config-grid .config-card .checkbox-group .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  color: #374151;\n}\n.config-grid .config-card .checkbox-group .checkbox-label input {\n  display: none;\n}\n.config-grid .config-card .checkbox-group .checkbox-label .checkmark {\n  width: 18px;\n  height: 18px;\n  border: 2px solid #d1d5db;\n  border-radius: 4px;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.config-grid .config-card .checkbox-group .checkbox-label .checkmark::after {\n  content: "";\n  position: absolute;\n  left: 4px;\n  top: 0px;\n  width: 5px;\n  height: 9px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.config-grid .config-card .checkbox-group .checkbox-label input:checked + .checkmark {\n  background: #3b82f6;\n  border-color: #3b82f6;\n}\n.config-grid .config-card .checkbox-group .checkbox-label input:checked + .checkmark::after {\n  opacity: 1;\n}\n.dias-libres-form {\n  margin-bottom: 24px;\n}\n.dias-libres-form .form-group label {\n  display: block;\n  margin-bottom: 8px;\n  color: #374151;\n  font-weight: 500;\n  font-size: 14px;\n}\n.dias-libres-form .form-group .input-with-button {\n  display: flex;\n  gap: 12px;\n}\n.dias-libres-form .form-group .input-with-button input {\n  flex: 1;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.dias-libres-form .form-group .input-with-button input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);\n}\n.dias-libres-form .form-group .input-with-button .btn-primary {\n  padding: 8px 16px;\n  background: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.dias-libres-form .form-group .input-with-button .btn-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.dias-libres-form .form-group .input-with-button .btn-primary:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.dias-libres-list h3 {\n  color: #374151;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.dias-libres-list .dias-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n.dias-libres-list .dia-libre-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 6px;\n}\n.dias-libres-list .dia-libre-card span {\n  color: #374151;\n  font-size: 14px;\n}\n.dias-libres-list .dia-libre-card .btn-remove {\n  padding: 4px;\n  background: #ef4444;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dias-libres-list .dia-libre-card .btn-remove svg {\n  width: 14px;\n  height: 14px;\n}\n.dias-libres-list .dia-libre-card .btn-remove:hover {\n  background: #dc2626;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px 24px;\n  color: #94a3b8;\n  font-style: italic;\n}\n.actions-footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 32px;\n}\n.actions-footer .btn-save {\n  padding: 12px 24px;\n  background: #10b981;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n}\n.actions-footer .btn-save:hover:not(:disabled) {\n  background: #059669;\n}\n.actions-footer .btn-save:disabled {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .agenda-page {\n    padding: 16px;\n  }\n  .navigation-tabs {\n    flex-direction: column;\n  }\n  .navigation-tabs .tab-button {\n    justify-content: center;\n  }\n  .horario-card .time-inputs {\n    grid-template-columns: 1fr !important;\n  }\n  .descanso-item {\n    flex-direction: column;\n    align-items: stretch !important;\n  }\n  .descanso-item .btn-remove {\n    align-self: flex-end;\n  }\n  .config-grid {\n    grid-template-columns: 1fr;\n  }\n  .dias-libres-form .input-with-button {\n    flex-direction: column;\n  }\n  .actions-footer {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=agenda.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Agenda, { className: "Agenda", filePath: "src/app/professional/agenda/agenda.ts", lineNumber: 32 });
})();
export {
  Agenda
};
//# sourceMappingURL=chunk-L2E4KHND.js.map
