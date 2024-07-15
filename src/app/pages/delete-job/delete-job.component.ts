import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.scss'],
})
export class DeleteJobComponent {

  id!: FormControl;

  error!: string;

  constructor(private readonly jobsService: JobsService) {
    this.id = new FormControl('', [Validators.required]);
  }

  deleteJob() {
    this.jobsService.deleteJob(this.id.value);
  }
}
