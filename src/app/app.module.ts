import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';

import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { TreinoComponent } from './saude/treino/treino.component';

import { TabelaComponent } from './componentes/tabela/tabela.component';
import {ContaRecorrenteComponent} from "./financas/conta-recorrente/conta-recorrente.component";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TreinoComponent,
    TabelaComponent,
    ContaRecorrenteComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AgGridModule.withComponents([]),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
