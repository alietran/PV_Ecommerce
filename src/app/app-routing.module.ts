import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminTemplateComponent } from './Admin/components/admin-template/admin-template.component';
import { ClientComponent } from './HomePage/client.component';
import { LandingPageComponent } from './HomePage/components/landing-page/landing-page.component';
// import { UserComponent } from './User/user.component';






const routes: Routes = [
  { path: '',
    component: ClientComponent,
    children: [
      {
        path: '', component: LandingPageComponent,
      },

    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
