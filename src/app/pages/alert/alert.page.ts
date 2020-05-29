import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentInput() {
    const input = await this.alertController.create({
      header: 'Input',
      subHeader: 'Ingrese su nombre',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Introduzca el titulo'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            this.titulo = data.txtNombre;
          }
        }
      ]
    });
    await input.present();
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton Cancelar');
          }
        },
        {
          text: 'OK',
          handler: (blah) => {
            console.log('Boton Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
