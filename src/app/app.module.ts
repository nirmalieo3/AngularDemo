import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ColorChangeDirective } from './app.directive';
import { SecondChildComponent } from './second-child/second-child.component';
import { ModelComponent } from './model/model.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ParentComponent } from './parent/parent.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component'; 
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ColorChangeDirective,
    SecondChildComponent,
    ModelComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    StudentComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    InterpolationComponent,
    ParentComponent,
    DirectivesComponent,
    NgswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA] 
})
export class AppModule { }
