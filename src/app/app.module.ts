import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TablaRegistrosComponent } from './finanzas-Personales/components/tabla-registros/tabla-registros.component';
import { FinanzasPersonalesComponent } from './finanzas-Personales/components/finanzas-personales/finanzas-personales.component';
import { ListRegistroComponent } from './finanzas-Personales/components/list-registro/list-registro.component';
import { AnalisisMacroComponent } from './analisis-macro/components/analisis-macro/analisis-macro.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TablaRegistrosComponent,
    FinanzasPersonalesComponent,
    ListRegistroComponent,
    AnalisisMacroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
