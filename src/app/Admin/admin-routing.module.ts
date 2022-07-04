import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';






const routes: Routes = [

  { path: 'admin', component: AdminComponent,
children:[
  {path: '' , component: AdminTemplateComponent}] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
