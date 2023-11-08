import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent  implements OnInit {

  constructor(private fotoService: FotoServiceService) {
   }
   tomarFoto(){
    this.fotoService.addNewToGallery();
  }

  ngOnInit() {}

}
