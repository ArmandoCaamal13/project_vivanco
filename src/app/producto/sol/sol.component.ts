import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/_helpers/producto';
import { ProductoService } from 'src/app/_services/producto.service';

@Component({
  selector: 'app-sol',
  templateUrl: './sol.component.html',
  styleUrls: ['./sol.component.css']
})
export class SolComponent implements OnInit {


  productos!: Producto[];

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerProductosTipo();
  }

  private obtenerProductosTipo(){
    this.productoService.ObtenerListaProductoSol().subscribe(dato => {
      this.productos=dato;
    })}

    
    verDetallesDelProducto(id:number){
      this.router.navigate(['producto-detalles',id])
    }
    actualizarProducto(id:number){
      this.router.navigate(['actualizar-producto',id]);
    }
}

