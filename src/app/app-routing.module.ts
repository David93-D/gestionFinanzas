import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalisisMacroComponent } from './analisis-macro/components/analisis-macro/analisis-macro.component';
import { FinanzasPersonalesComponent } from './finanzas-Personales/components/finanzas-personales/finanzas-personales.component';

const routes: Routes = [
  {path: "finanzas-personales", component: FinanzasPersonalesComponent},
  {path: "analisis-macro", component: AnalisisMacroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
