import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConfigGeneralComponent } from './components/config-general/config-general.component';
import { CrudProductComponent } from './components/crud-product/crud-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'parametros/generales',
    component: ConfigGeneralComponent,
    data: { title: 'Parametros Generales' }
  },
  {
    path: 'mantenimientos/productos',
    component: CrudProductComponent,
    data: { title: 'Productos' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }