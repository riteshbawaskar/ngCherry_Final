import { TestStep } from '../models/test-step';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeststepService {

  constructor(private httpClient: HttpClient) {}

  getSteps(TestId): Observable<TestStep[]> {
    return this.httpClient.get<TestStep[]>(`/api/tests/${TestId}`);
  }

  getAllSteps(): Observable<TestStep[]> {
    return this.httpClient.get<TestStep[]>('/api/tests/');
  }

  addStep(testStep: TestStep): Observable<TestStep> {
    return this.httpClient.post<TestStep>('/api/test', testStep);
  }

  getStep(testStep: TestStep): Observable<TestStep> {
    return this.httpClient.get<TestStep>(`/api/test/${testStep._id}`);
  }

  editStep(testStep: TestStep): Observable<any> {

    return this.httpClient.put(`/api/test/${testStep._id}`, TestStep, { responseType: 'text' });
  }

  deleteStep(testStep: TestStep): Observable<any> {
    return this.httpClient.delete(`/api/test/${testStep._id}`, { responseType: 'text' });
  }


}
