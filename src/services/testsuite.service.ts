import { TestSuite } from './../models/test-suite';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestsuiteService {

  constructor(private httpClient: HttpClient) {}

  getSuites(): Observable<TestSuite[]> {
    return this.httpClient.get<TestSuite[]>('/api/suites');
  }

  countSuites(): Observable<number> {
    return this.httpClient.get<number>('/api/suites/count');
  }

  addSuites(testsuite: TestSuite): Observable<TestSuite> {
    return this.httpClient.post<TestSuite>('/api/TestSuite', TestSuite);
  }

  getSuite(testSuite: TestSuite): Observable<TestSuite> {
    return this.httpClient.get<TestSuite>(`/api/TestSuite/${testSuite._id}`);
  }

  editSuite(testSuite: TestSuite): Observable<any> {

    return this.httpClient.put(`/api/TestSuite/${testSuite._id}`, TestSuite, { responseType: 'text' });
  }

  deleteSuite(testSuite: TestSuite): Observable<any> {
    return this.httpClient.delete(`/api/TestSuite/${testSuite._id}`, { responseType: 'text' });
  }


}
