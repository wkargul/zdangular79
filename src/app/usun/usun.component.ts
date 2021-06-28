import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ListaService} from '../lista.service';

@Component({
  selector: 'app-usun',
  templateUrl: './usun.component.html',
  styleUrls: ['./usun.component.scss']
})
export class UsunComponent implements OnInit {
  public id: number;

  constructor(private route: ActivatedRoute, private listaService: ListaService) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.listaService.usunElement(this.id).subscribe(
          () => {
            console.log('usunieto id = ' + this.id);
          },
          error => {
            console.log('blad przy usuwaniu id = ' + this.id);
          }
        );

      }

    );
  }

  ngOnInit(): void {
  }

}
