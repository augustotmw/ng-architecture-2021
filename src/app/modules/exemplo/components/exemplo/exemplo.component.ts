import {Component, Input, OnInit} from '@angular/core';
import {ExemploModel} from '../../models/exemplo.model';

@Component({
  selector: 'cp-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.scss']
})
export class ExemploComponent implements OnInit {

  @Input() lista: ExemploModel[] | null = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
