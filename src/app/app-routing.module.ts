import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';

const routes: Routes = [
  {path:'home', component: MainPageComponent},
  {path: 'edit', component: EditItemModalComponent},
  {path: '', component: LoginPageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
