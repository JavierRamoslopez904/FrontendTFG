import { HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from '../../classes/product';
import { ProductService } from '../../services/product.service';
import { ModalService } from './modal-service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() product : Product;

  private fotoSeleccionada : File;

  progreso : number = 0;

  constructor(public modalService : ModalService, private productService : ProductService) {

   }

  ngOnInit(): void {
  }

  /**
   * Método para seleccionar foto
   * @param event
   */
  seleccionarFoto(event){
    this.fotoSeleccionada = event.target.files[0];
    if(this.fotoSeleccionada.type.indexOf('image')){
      Swal.fire('Error seleccionar imagen : ','El archivo debe ser de tipo imagen', 'error');
    }
  }

  /**
   * Método para subir la foto seleccionada anteriormente
   */
  subirFoto(){
    if(!this.fotoSeleccionada){
      Swal.fire('Error : ', 'Debe seleccionar una foto','error');
    }else{
      // Llamada al back para obtener los datos
      this.productService.subirFoto(this.fotoSeleccionada, this.product.id).subscribe(event => {
        // Establecemos condiciones para ver si el tipo del evento es una respuesta
        if(event.type === HttpEventType.Response){
          let response : any = event.body;
          this.product = response.product as Product;

          this.modalService.notificarUpload.emit(this.product);

          Swal.fire('La foto se ha subido correctamente', response.mensaje, 'success');
        }
      }
      )
    }
  }

  /**
   * Método para cerrar el modal
   */
  cerrarModal(){
    this.modalService.cerrarModal();
    this.fotoSeleccionada = null;
    this.progreso = 0;
  }

}
