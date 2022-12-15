import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getObjectsByDepartment(departmentId: number) {
    const params = new HttpParams()
      .set('q', '*')
      .set('departmentId', departmentId)
      .set('hasImages', true);

    return this.httpClient.get(environment.searchEndpoint, {params});
  }
}
