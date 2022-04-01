import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../_helpers/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //ESTA URL OPTIENE TODO EL LISTADO DE LA BD EN EL BACK-END CON SPRING
  private baseURL ="http://localhost:8080/api/auth/productos";

  private consultURL ="http://localhost:8080/api/auth/productos/list/1";
  private aumentoURL ="http://localhost:8080/api/auth/productos/list/2";
  constructor(private httpClient: HttpClient) { }


  //este metodo nos permite obtener los productos
  obtenerListaProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }

  ObtenerListaProductoSol():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.consultURL}`);
  }
  ObtenerListaProductoAumento():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.aumentoURL}`);
  }

  //este metodo es para registrar productos
  registrarProducto(producto: Producto): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,producto);
  }

  //este metodo nos permite obtener los productos
  actualizarProducto(id:number,producto:Producto):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,producto);
  }
  //este metodo nos permite obtener los productos
  obtenerProductoPorId(id:number):Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.baseURL}/${id}`);
  }

  obtenerProductoTipoPorId(idTipo:number):Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.consultURL}/${idTipo}`);
  }

  eliminarProducto(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


  
}
