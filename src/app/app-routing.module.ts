import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { StudentComponent } from './student/student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';


const routes: Routes = [
{path:'', redirectTo: 'home',pathMatch:'full'},
 {path:'home', component: HomeComponent },
 {path:'about', component: AboutComponent },
 {path:'React', component: ReactiveFormComponent },
 {path:'template', component: TemplateFormComponent },
 {path:'student', component: StudentComponent },
 {path:'interpolation', component: InterpolationComponent },
 {path:'input', component: ParentComponent },
 {path:'output', component: ParentComponent },
 {path:'directives', component: DirectivesComponent },
 {path:'ngswitch', component: NgswitchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
