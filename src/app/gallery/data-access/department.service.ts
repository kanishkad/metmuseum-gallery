import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private httpClient: HttpClient) { }

  getDepartments() {
    return this.httpClient.get(environment.departmentsEndpoint)
      .pipe(map((res: any) => res.departments.slice(0,environment.departmentsSliceLimit)));
  }
}
