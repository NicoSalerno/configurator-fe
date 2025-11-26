import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChoiceComponent } from './pages/choice/choice.component';
import { ConfiguratorComponent } from './pages/configurator/configurator.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
