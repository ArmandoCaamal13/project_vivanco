import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/_helpers/producto';
import { ProductoService } from 'src/app/_services/producto.service';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {

  producto: Producto = new Producto();
  
  constructor(private productoServicio: ProductoService, private router: Router) { }

  ngOnInit(): void {
    

  }

  guardarProducto(){
    this.productoServicio.registrarProducto(this.producto).subscribe(dato =>{
      console.log(dato);
      this.irAlaListaProductos();
    },error => console.log(error));
}

  irAlaListaProductos(){
    this.router.navigate(['productos']);
  }
  onSubmit(){
    this.guardarProducto();
  }

}
