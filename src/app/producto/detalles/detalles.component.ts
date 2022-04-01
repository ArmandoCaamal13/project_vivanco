import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/_helpers/producto';
import { ProductoService } from 'src/app/_services/producto.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  id!:number;
  producto!: Producto;
  constructor(private route:ActivatedRoute, private productoServicio:ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(dato =>{
      this.producto = dato;
    });
  }
    
  irAlaListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  

}
