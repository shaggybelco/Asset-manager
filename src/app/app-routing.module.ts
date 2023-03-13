import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },{
    path: 'home',
    component: HomepageComponent
  },{
    path: 'detail/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
