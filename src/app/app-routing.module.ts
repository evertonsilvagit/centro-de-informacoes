import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TreinoComponent} from "./saude/treino/treino.component";
import {ContaRecorrenteComponent} from "./financas/conta-recorrente/conta-recorrente.component";

const routes: Routes = [
  { path: 'treino', component: TreinoComponent },
  { path: 'conta-recorrente', component: ContaRecorrenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
