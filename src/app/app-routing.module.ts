import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChoiceComponent } from './pages/choice/choice.component';
import { ConfiguratorComponent } from './pages/configurator/configurator.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
