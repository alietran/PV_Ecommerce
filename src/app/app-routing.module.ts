import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTemplateComponent } from './Admin/components/admin-template/admin-template.component';
import { LandingPageComponent } from './HomePage/components/landing-page/landing-page.component';





const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'admin', component: AdminTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
