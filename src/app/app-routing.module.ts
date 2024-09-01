import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'resume',
    component:ResumeComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'**',
    component:HomeComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
