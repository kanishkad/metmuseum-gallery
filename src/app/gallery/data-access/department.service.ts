import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map, Observable } from "rxjs";
import { DepartmentRes } from "../../interfaces/DepartmentRes";
import { Department } from "../../interfaces/Department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private httpClient: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<DepartmentRes>(environment.departmentsEndpoint)
      .pipe(map((res: DepartmentRes) => res.departments.slice(0,environment.departmentsSliceLimit)));
  }
}
