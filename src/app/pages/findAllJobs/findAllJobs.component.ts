import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-findAllJobs',
  templateUrl: './findAllJobs.component.html',
  styleUrls: ['./findAllJobs.component.scss'],
})
export class FindAllJobsComponent {
  jobs$ = this.jobsService.jobs$;

  limit: FormControl;

  constructor(
    private readonly jobsService: JobsService
  ) {
    this.limit = new FormControl('', Validators.nullValidator);
    this.limit.valueChanges.subscribe((res: any) => {
      if (this.limit.value !== null) {
        this.jobsService.findAllJobs(this.limit.value);
      }
    });
  }
}
