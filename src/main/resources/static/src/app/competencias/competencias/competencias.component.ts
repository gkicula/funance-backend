import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { CompetenciasFormComponent } from '../competencias-form/competencias-form.component';
import { Competencia } from '../model/competencia';
import { CompetenciasService } from '../services/competencias.service';

@Component({
  selector: 'funance-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {

  competencias$: Observable <Competencia[]>;
  displayedColumns = ['descricao', 'valor', 'acoes'];
  descricao: String
  display: boolean = false;

  //competenciasService: CompetenciasService;


  constructor(
    private competenciasService: CompetenciasService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
      //this.competenciasService = new CompetenciasService();
      this.competencias$ = this.competenciasService.list()
      .pipe(
      catchError(error => {
        this.onError('Erro ao carregar as informações')
        console.log("StackTrace: ", error);
        //comando of([]) cria um Observable com array vazio, pois nesse caso é ncessário retornar algum dado
        return of([])
      })
      );
    }

    addLinha() {
      console.log("Clicou add linha!");
      this.display = true;
    }
    onAdd(){
      this.router.navigate(['new'], {relativeTo: this.route})

      // console.log("Adicionado afterClosed => result | ");
      // const dialofRef = this.dialog.open(CompetenciasFormComponent, {
      //   data: "errorMsg",
      //   height: '500px',
      //   width: '400px',
      // });
      // dialofRef.afterClosed().subscribe(result => {
      //   debugger
      //   console.log("Adicionado afterClosed => result | ", result);
      // })
    this.display = true;
  }


  showDialog(){

    this.dialog.open(CompetenciasFormComponent, {
      data: "errorMsg"
    });
    this.display = true;
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
