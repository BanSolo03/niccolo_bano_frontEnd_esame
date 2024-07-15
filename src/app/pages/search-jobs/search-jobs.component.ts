import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.scss']
})
export class SearchJobsComponent {

  results$ = this.jobsService.results$;

  searchText: FormControl;
  limit: FormControl

  constructor(private readonly jobsService: JobsService) {
    this.searchText = new FormControl();
    this.limit = new FormControl();

    this.searchText.valueChanges.subscribe((res) => {
      this.searchJobs();
    })

    this.limit.valueChanges.subscribe((res) => {
      this.searchJobs();
    })
  }

  searchJobs() {
    this.jobsService.searchJobs(this.searchText.value, this.limit.value)
  }

}
