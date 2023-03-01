import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoriasPipe } from './pipes/categorias.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoriasPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoriasPipe
  ]
})
export class SharedModule { }
