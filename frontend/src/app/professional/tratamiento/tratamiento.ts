import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProfessionalService } from '../../shared/services/profesional';

@Component({
  selector: 'app-tratamiento',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './tratamiento.html',
  styleUrls: ['./tratamiento.scss']
})
export class Tratamiento implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private professionalService = inject(ProfessionalService);

  patientId: string = '';
  patientName: string = 'Cargando...';
  
  // ✅ ESTRUCTURA COMPATIBLE CON BACKEND
  treatmentData = {
    diagnosis: '',
    cancerType: 'other' as const,
    cancerStage: 'I' as const,
    treatmentPhase: 'diagnosis' as const,
    treatmentPlan: '',
    medications: [] as any[]
  };

  // ✅ OPCIONES COMPATIBLES CON ENUM DEL BACKEND
  cancerTypes = [
    { value: 'ductal_in_situ', label: 'Carcinoma ductal in situ' },
    { value: 'lobular_in_situ', label: 'Carcinoma lobulillar in situ' },
    { value: 'invasive_ductal', label: 'Carcinoma ductal invasivo' },
    { value: 'invasive_lobular', label: 'Carcinoma lobulillar invasivo' },
    { value: 'inflammatory', label: 'Cáncer inflamatorio' },
    { value: 'other', label: 'Otro tipo' }
  ];

  cancerStages = [
    { value: '0', label: 'Estadio 0' },
    { value: 'I', label: 'Estadio I' },
    { value: 'II', label: 'Estadio II' },
    { value: 'III', label: 'Estadio III' },
    { value: 'IV', label: 'Estadio IV' }
  ];

  treatmentPhases = [
    { value: 'diagnosis', label: 'Diagnóstico' },
    { value: 'pre_op', label: 'Pre-operatorio' },
    { value: 'post_op', label: 'Post-operatorio' },
    { value: 'chemotherapy', label: 'Quimioterapia' },
    { value: 'radiotherapy', label: 'Radioterapia' },
    { value: 'hormone_therapy', label: 'Terapia hormonal' },
    { value: 'follow_up', label: 'Seguimiento' }
  ];

  isLoading = false;
  errorMessage = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.patientId = params['patientId'];
      this.loadPatientData();
    });
  }

  loadPatientData() {
    // ✅ Aquí luego puedes cargar el nombre real del paciente
    this.patientName = 'Paciente';
  }

  onSubmit() {
    if (!this.isFormValid()) {
      this.errorMessage = 'Por favor completa todos los campos requeridos';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    
    // ✅ LLAMADA COMPATIBLE CON BACKEND
    this.professionalService.createPatientTreatment(this.patientId, this.treatmentData)
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.success) {
            alert('🎗️ Tratamiento creado exitosamente');
            this.router.navigate(['/profesional/pacientes']);
          } else {
            this.errorMessage = response.message || 'Error al crear tratamiento';
          }
        },
        error: (error) => {
          this.isLoading = false;
          console.error('❌ Error creando tratamiento:', error);
          this.errorMessage = error.error?.message || 'Error de conexión al crear tratamiento';
        }
      });
  }

  isFormValid(): boolean {
    return !!this.treatmentData.diagnosis && 
           !!this.treatmentData.cancerType && 
           !!this.treatmentData.cancerStage && 
           !!this.treatmentData.treatmentPhase && 
           !!this.treatmentData.treatmentPlan;
  }

  addMedication() {
    this.treatmentData.medications.push({
      name: '',
      dosage: '',
      frequency: '',
      startDate: '',
      endDate: ''
    });
  }

  removeMedication(index: number) {
    this.treatmentData.medications.splice(index, 1);
  }

  cancel() {
    this.router.navigate(['/profesional/pacientes']);
  }
}