import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interface/interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

}
