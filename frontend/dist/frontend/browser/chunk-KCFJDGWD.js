import {
  environment
} from "./chunk-BPEFTJA2.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-6P7TFCYF.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-DEJWN6HZ.js";

// src/app/shared/services/profesional.ts
var ProfessionalService = class _ProfessionalService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/professional`;
  // 👤 Obtener perfil del profesional
  getProfessionalProfile() {
    console.log("\u{1F464} Obteniendo perfil del profesional...");
    return this.http.get(`${this.baseUrl}/profile`);
  }
  // 📊 Obtener estadísticas del dashboard profesional
  getStats() {
    console.log("\u{1F4CA} Obteniendo estad\xEDsticas del profesional...");
    return this.http.get(`${this.baseUrl}/stats`);
  }
  // 📅 Obtener citas del profesional (con filtros)
  getAppointments(params = {}) {
    let httpParams = new HttpParams();
    if (params.page)
      httpParams = httpParams.set("page", params.page.toString());
    if (params.limit)
      httpParams = httpParams.set("limit", params.limit.toString());
    if (params.status)
      httpParams = httpParams.set("status", params.status);
    if (params.dateFrom)
      httpParams = httpParams.set("dateFrom", params.dateFrom);
    if (params.dateTo)
      httpParams = httpParams.set("dateTo", params.dateTo);
    console.log("\u{1F4C5} Obteniendo citas del profesional:", params);
    return this.http.get(`${this.baseUrl}/appointments`, {
      params: httpParams
    });
  }
  // ✅ MÉTODO HELPER PARA EXTRAER CITAS - ACTUALIZADO
  extractAppointments(response) {
    if (!response.success) {
      return [];
    }
    return response.data?.docs || [];
  }
  // ➕ Crear nueva cita
  createAppointment(appointmentData) {
    console.log("\u2795 Creando nueva cita:", appointmentData);
    return this.http.post(`${this.baseUrl}/appointments`, appointmentData);
  }
  // ✏️ Actualizar cita
  updateAppointment(appointmentId, updateData) {
    console.log("\u270F\uFE0F Actualizando cita:", { appointmentId, updateData });
    return this.http.put(`${this.baseUrl}/appointments/${appointmentId}`, updateData);
  }
  // 🗑️ Cancelar cita
  cancelAppointment(appointmentId) {
    console.log("\u{1F5D1}\uFE0F Cancelando cita:", appointmentId);
    return this.http.patch(`${this.baseUrl}/appointments/${appointmentId}/cancel`, {});
  }
  // 👥 Obtener pacientes del profesional
  getPatients(params = {}) {
    let httpParams = new HttpParams();
    if (params.page)
      httpParams = httpParams.set("page", params.page.toString());
    if (params.limit)
      httpParams = httpParams.set("limit", params.limit.toString());
    if (params.search)
      httpParams = httpParams.set("search", params.search);
    httpParams = httpParams.set("_t", Date.now().toString());
    console.log("\u{1F465} Obteniendo pacientes del profesional:", params);
    return this.http.get(`${this.baseUrl}/patients`, { params: httpParams });
  }
  // 🔄 Actualizar estado de cita
  updateAppointmentStatus(appointmentId, status) {
    console.log("\u{1F504} Actualizando estado de cita:", { appointmentId, status });
    return this.http.patch(`${this.baseUrl}/appointments/${appointmentId}/status`, { status });
  }
  // 📝 Actualizar notas de cita
  updateAppointmentNotes(appointmentId, notes) {
    console.log("\u{1F4DD} Actualizando notas de cita:", { appointmentId, notes });
    return this.http.patch(`${this.baseUrl}/appointments/${appointmentId}/notes`, { notes });
  }
  static \u0275fac = function ProfessionalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfessionalService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfessionalService, factory: _ProfessionalService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfessionalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ProfessionalService
};
//# sourceMappingURL=chunk-KCFJDGWD.js.map
