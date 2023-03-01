import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'competencias' },
  {
    path: 'competencias',
    loadChildren: () => import('./competencias/competencias.module').then(m => m.CompetenciasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
