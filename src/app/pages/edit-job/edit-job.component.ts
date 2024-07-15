import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent {

  editJobForm!: FormGroup;

  id!: FormControl;

  errors: string[] = [];

  constructor(private readonly jobsService: JobsService) {}

  ngOnInit(): void {
    this.editJobForm = new FormGroup({
      titolo: new FormControl('', [Validators.required]),
      descrizioneBreve: new FormControl ('', [Validators.required]),
      dataInserimento: new FormControl ('', [Validators.required]),
      retribuzioneLorda: new FormControl ('', [Validators.required]),
    })

    this.id = new FormControl('', [Validators.required])

    this.editJobForm.valueChanges.subscribe((res: any) => {
      this.getErrors();
    })

    this.id.valueChanges.subscribe((res: any) => {
      this.getErrors();
    })
  }

  editJob() {
    if(this.editJobForm.valid) {
      this.jobsService.editJob(this.id.value, this.editJobForm.value);
    }
  }

  getErrors() {
    this.errors = [];
    if (this.editJobForm.invalid) {
      Object.keys(this.editJobForm.controls).forEach(field => {
        const control = this.editJobForm.get(field);
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
