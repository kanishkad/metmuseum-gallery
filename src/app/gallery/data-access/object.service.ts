import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { map } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private httpClient: HttpClient) { }

  getObjectsByDepartment(departmentId: number) {
    const params = new HttpParams()
      .set('metadataDate', environment.metadataDate)
      .set('departmentIds', departmentId);

    return this.httpClient.get(environment.objectsEndpoint, {params});
  }

  getObjectById(objectId: number) {
    return this.httpClient.get(environment.objectsEndpoint + '/' + encodeURIComponent(objectId));
  }
}
