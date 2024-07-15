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
import { DeleteJobComponent } from './pages/delete-job/delete-job.component';
import { SearchJobsComponent } from './pages/search-jobs/search-jobs.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FindAllJobsComponent,
    NewJobComponent,
    EditJobComponent,
    DeleteJobComponent,
    SearchJobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
