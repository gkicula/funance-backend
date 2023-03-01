import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Competencia } from '../model/competencia';
import { CompetenciasService } from '../services/competencias.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'funance-competencias-form',
  templateUrl: './competencias-form.component.html',
  styleUrls: ['./competencias-form.component.css']
})
export class CompetenciasFormComponent implements OnInit {

  form: FormGroup;
  descricao: string;

  constructor(
      private formBuilder: FormBuilder,
      private snackBar: MatSnackBar,
      private competenciasService: CompetenciasService,
      private location: Location
    ) {
      this.form = this.formBuilder.group({
        descricao: [null],
        valor: [null]
      })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.competenciasService.save(this.form.value).
      subscribe(data => this.onSuccess(), error => {
        this.snackBar.open('Erro ao salvar registro','',{duration:5000});
      });
  }

  onSuccess(){
    this.snackBar.open('Registro salvo com sucesso! ','',{duration:2000});
    this.onCancel();
  }

  onError(){
    this.snackBar.open('Erro ao salvar registro','',{duration:5000});
  }

  onCancel(){
    this.location.back();
  }

}
