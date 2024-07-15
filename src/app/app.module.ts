import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FindAllJobsComponent } from './pages/findAllJobs/findAllJobs.component';
import { NewJobComponent } from './pages/newJob/newJob.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditJobComponent } from './pages/edit-job/edit-job.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FindAllJobsComponent,
    NewJobComponent,
    EditJobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
