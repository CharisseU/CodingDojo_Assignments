import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getTasks(){
    return this._http.get('/tasks');
  }
  getTask(id: String){
    return this._http.get('/tasks/'+id);
  }
  deleteTask(id: string){
    return this._http.delete('/tasks/'+id);
  }
  addTask(newtask){
    return this._http.post('/tasks', newtask);
  }
  updateTask(id: String, editTask){
    return this._http.put('/tasks/'+id, editTask);
  }
}
