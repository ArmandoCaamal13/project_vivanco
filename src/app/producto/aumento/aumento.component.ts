import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/_helpers/producto';
import { ProductoService } from 'src/app/_services/producto.service';

@Component({
  selector: 'app-aumento',
  templateUrl: './aumento.component.html',
  styleUrls: ['./aumento.component.css']
})
export class AumentoComponent implements OnInit {

  productos!: Producto[];

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerProductosTipo();
  }

  private obtenerProductosTipo(){
    this.productoService.ObtenerListaProductoAumento().subscribe(dato => {
      this.productos=dato;
    })}

    verDetallesDelProducto(id:number){
      this.router.navigate(['detalles',id])
    }
    actualizarProducto(id:number){
      this.router.navigate(['actualizar',id]);
    }


}

