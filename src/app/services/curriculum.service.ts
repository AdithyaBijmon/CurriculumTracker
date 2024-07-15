import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private httpClient:HttpClient) { }
  addCurriculum(data:any):Observable<any>{
    return this.httpClient.post('http://localhost:4000/curriculum',data)
  }
  getCurriculumList():Observable<any>{
    return this.httpClient.get('http://localhost:4000/curriculum')
  }
  updateCurriculum(id:number,data:any):Observable<any>{
    return this.httpClient.put(`http://localhost:4000/curriculum/${id}`,data)
  }
  deleteCurriculum(id:number):Observable<any>{
    return this.httpClient.delete(`http://localhost:4000/curriculum/${id}`)
  }
}
