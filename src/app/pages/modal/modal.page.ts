import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Fernando',
        pais: 'Costa Rica'
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log("Retorno del modal-info", data);

  }

}
