import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.page.html',
  styleUrls: ['./infinity-scroll.page.scss'],
})
export class InfinityScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) inifiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log("Cargando siguiente");

    setTimeout(() => {

      if (this.data.length > 50) {
        event.target.complete();
        this.inifiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      //Los ... es el operador de propagación (spread operator)
      this.data.push(...nuevoArr);
      event.target.complete();

    }, 1000);
  }

}
