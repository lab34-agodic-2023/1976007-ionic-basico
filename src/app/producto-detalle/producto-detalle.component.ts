import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
})
export class ProductoDetalleComponent  implements OnInit {

  constructor(private consulta:ConsultaService, private ruta:ActivatedRoute) { }
  producto : any = {};
  idProducto : string = this.ruta.snapshot.params['id'];
  realizarConsultaDetalle(idProducto: string): void{
    this.consulta.getProductoDetalle(idProducto).subscribe((resp: Object) => {
      console.log(resp);
      this.producto = resp as any[];  })
  }
  
  ngOnInit() {
    this.realizarConsultaDetalle(this.idProducto);
  }

}
