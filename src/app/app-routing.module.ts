import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAllJobsComponent } from './pages/findAllJobs/findAllJobs.component';
import { NewJobComponent } from './pages/newJob/newJob.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'findAll',
    pathMatch: 'full'
  },
  {
    path: 'findAll',
    component: FindAllJobsComponent
  },
  {
    path: 'newJob',
    component: NewJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
