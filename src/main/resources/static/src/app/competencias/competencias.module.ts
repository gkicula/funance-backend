import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CompetenciasRoutingModule } from './competencias-routing.module';
import { CompetenciasComponent } from './competencias/competencias.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CompetenciasFormComponent } from './competencias-form/competencias-form.component';

@NgModule({
  declarations: [CompetenciasComponent, CompetenciasFormComponent],
  imports: [
    CommonModule,
    CompetenciasRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CompetenciasModule { }
