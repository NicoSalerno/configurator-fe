import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChoiceComponent } from './pages/choice/choice.component';
import { ConfiguratorComponent } from './pages/configurator/configurator.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'choice',
    component:ChoiceComponent
  },
  {
    path:'configurator/:id',
    component:ConfiguratorComponent
  },
  {
    path:'check-out',
    component:CheckOutComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
