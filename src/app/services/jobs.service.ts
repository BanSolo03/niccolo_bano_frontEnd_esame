import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Job } from '../entities/job';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private _jobs$ = new BehaviorSubject<Job[]>([]);
  jobs$ = this._jobs$.asObservable();

  private jobsUrl = 'https://niccolo-bano-back-end-esame.vercel.app/api/jobs';

  constructor(
    private readonly http: HttpClient
  ) {}

  findAllJobs(limit: number) {
    this.http.get<Job[]>(`${this.jobsUrl}?limit=${limit}`).subscribe((jobs) => {
      this._jobs$.next(jobs);
    });
  }

  createJob(body: Job) {
    this.http.post<Job>(`${this.jobsUrl}/new`, body).subscribe((res) => {
      this.findAllJobs(10)
    })
  }

  editJob(id: string, body: Job) {
    this.http.post<Job>(`${this.jobsUrl}/${id}`, body).subscribe((res) => {
      this.findAllJobs(10)
    })
  }
}
