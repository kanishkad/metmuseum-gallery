import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ObjectsRes } from "../../interfaces/ObjectsRes";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getObjectsByDepartment(departmentId: number): Observable<ObjectsRes> {
    const params = new HttpParams()
      .set('q', '*')
      .set('departmentId', departmentId)
      .set('hasImages', true);

    return this.httpClient.get<ObjectsRes>(environment.searchEndpoint, {params});
  }

  searchObjects(searchString: string): Observable<ObjectsRes> {
    const params = new HttpParams()
      .set('q', searchString)
      .set('hasImages', true);

    return this.httpClient.get<ObjectsRes>(environment.searchEndpoint, {params});
  }
}
