import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './feature/users/pages/home-page/home-page.component';
import { CreateEditPageComponent } from './feature/users/pages/create-edit-page/create-edit-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'create',
    component: CreateEditPageComponent
  },
  {
    path: 'edit/:id',
    component: CreateEditPageComponent
  },
  // { TODO
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
