import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://dummy.restapiexample.com/api/v1/';
  
  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get(this.baseUrl+'employees');
  }

  getEmployeeById(id: number ){
    return this.http.get(this.baseUrl+'employee/'+ id)
  }

  addEmployee(formData: any ){
    var headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", 'http://localhost:4200');
    return this.http.post(this.baseUrl+'create', formData, { headers: headers} )
  }

  deleteEmployee(id: number){
    return this.http.delete(this.baseUrl+ 'delete/' + id);
  }

  updateEmployee(id: number , formData: any){
    return this.http.put(this.baseUrl+ 'update/' + id, {formData});
  }


}
