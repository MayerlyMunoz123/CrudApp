import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient) {}

  BASE_URL: string = 'http://localhost:3000';

  getAllUsuarios(): Observable<any > {
    return this.http.get<any>(this.BASE_URL + '/users' );
  }

  getUsuariosById(id_usuario:number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + '/users/'+ id_usuario);
  }
  deleteUsuario(id_usuario: number): Observable<any> {
    return this.http.delete<any>(this.BASE_URL + '/users/' + id_usuario);
  }
  updateUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put<any>(this.BASE_URL + '/users/' + id, usuario);
  }
  createUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.BASE_URL + '/users/', usuario);
  }

}
