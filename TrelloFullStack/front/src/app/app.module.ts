// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { TaskComponent } from './components/task/task.component';
import { FilterByStatusPipe } from './pipes/filter-by-status.pipe'; // Importa tu filtro aquí

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TaskComponent,
    FilterByStatusPipe // Declara tu filtro aquí
  ],
  imports: [
    BrowserModule,
    FormsModule, // Añade FormsModule para usar ngModel
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
