import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/_helpers/producto';
import { ProductoService } from 'src/app/_services/producto.service';
import { Usuario } from '../../_helpers/usuario';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  iduser!: number;

  usuario: Usuario = new Usuario ();
  productos!:Producto[];

  constructor(private productoServicio:ProductoService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
    this.iduser
  }

  actualizarProducto(id:number){
    this.router.navigate(['actualizar-producto',id]);
  }
  private obtenerProductos(){
    this.productoServicio.obtenerListaProductos().subscribe(dato => {
      this.productos=dato;
    })
  }
  eliminarProducto(id:number){
    this.productoServicio.eliminarProducto(id).subscribe(dato => {
      this.obtenerProductos();
    });
  }

  verDetallesDelProducto(id:number){
    this.router.navigate(['producto-detalles',id])
  }

}
