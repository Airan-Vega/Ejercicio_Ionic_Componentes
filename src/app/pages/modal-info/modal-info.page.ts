import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre;
  @Input() pais;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalController.dismiss();
  }

  salirConArgumentos() {
    this.modalController.dismiss({
      nombre: 'Felipe',
      pais: 'España'
    });
  }

}
