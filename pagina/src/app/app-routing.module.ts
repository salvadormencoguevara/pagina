import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ContactoComponent } from './component/contacto/contacto.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'contacto', component:ContactoComponent},
  {path:'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
