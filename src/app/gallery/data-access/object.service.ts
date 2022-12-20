import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Artefact } from "../../interfaces/Artefact";
import { ObjectsRes } from "../../interfaces/ObjectsRes";

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private httpClient: HttpClient) { }

  getObjectsByDepartment(departmentId: number): Observable<ObjectsRes> {
    const params = new HttpParams()
      .set('metadataDate', environment.metadataDate)
      .set('departmentIds', departmentId);

    return this.httpClient.get<ObjectsRes>(environment.objectsEndpoint, {params});
  }

  getObjectById(objectId: number): Observable<Artefact> {
    return this.httpClient.get<Artefact>(environment.objectsEndpoint + '/' + encodeURIComponent(objectId));
  }
}
