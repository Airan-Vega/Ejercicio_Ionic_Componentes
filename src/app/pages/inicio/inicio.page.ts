import { Component, OnInit } from '@angular/core';
// Codigo para hacer el menu de navegacion de la forma dificil
//import { MenuController } from '@ionic/angular';

import { Componente } from '../../interface/interface';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  // Codigo para hacer el menu de navegacion de la forma dificil
  constructor(private dataService: DataService /*private menuController: MenuController*/) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

  // Funcion para hacer el menu de navegacion de la forma dificil
  // toggleMenu() {
  //   this.menuController.toggle();
  // }

}


