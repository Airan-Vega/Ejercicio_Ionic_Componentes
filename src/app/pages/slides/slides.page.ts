import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  ocultar = '';

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '../../assets/slides/photos.jpg',
      titulo: 'Comparte fotos',
      desc: 'Mira y comparte increibles fotos de todo el mundo'
    },
    {
      img: '../../assets/slides/music-player-2.jpg',
      titulo: 'Escucha musica',
      desc: 'Toda tu musica favorita esta aqui'
    },
    {
      img: '../../assets/slides/calendar.png',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposicion'
    },
    {
      img: '../../assets/slides/placeholder-1.png',
      titulo: 'Tu ubicacion',
      desc: 'Siempre sabremos donde estas!'
    }
  ];

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  onClick() {
    this.ocultar = 'animated fadeOut fast';
    this.navController.navigateBack('/');
  }

}
