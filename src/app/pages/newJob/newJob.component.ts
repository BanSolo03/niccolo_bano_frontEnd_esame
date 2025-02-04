import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-newJob',
  templateUrl: './newJob.component.html',
  styleUrls: ['./newJob.component.scss']
})
export class NewJobComponent implements OnInit {

  jobForm!: FormGroup;

  errors: string[] = [];

  constructor(private readonly jobsService: JobsService) {}

  ngOnInit(): void {
    this.jobForm = new FormGroup({
      titolo: new FormControl('', [Validators.required]),
      descrizioneBreve: new FormControl ('', [Validators.required]),
      dataInserimento: new FormControl ('', [Validators.required]),
      retribuzioneLorda: new FormControl ('', [Validators.required]),
    })

    this.jobForm.valueChanges.subscribe((res: any) => {
      this.getErrors();
    })
  }

  addNewJob() {
    if(this.jobForm.valid) {
      this.jobsService.createJob(this.jobForm.value);
    }
  }

  getErrors() {
    this.errors = [];
    if (this.jobForm.invalid) {
      Object.keys(this.jobForm.controls).forEach(field => {
        const control = this.jobForm.get(field);
        if (control && control.errors && control.dirty) {
          Object.keys(control.errors).forEach(errorKey => {
            let errorMessage = '';
            switch (errorKey) {
              case 'required':
                errorMessage = `${field} è richiesto.`;
                break;
            }
            this.errors.push(errorMessage);
          });
        }
      });
    }
  }

}
