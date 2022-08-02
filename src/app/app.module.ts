import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TablaRegistrosComponent } from './finanzas-Personales/components/tabla-registros/tabla-registros.component';
import { FinanzasPersonalesComponent } from './finanzas-Personales/components/finanzas-personales/finanzas-personales.component';
import { ListRegistroComponent } from './finanzas-Personales/components/list-registro/list-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TablaRegistrosComponent,
    FinanzasPersonalesComponent,
    ListRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
