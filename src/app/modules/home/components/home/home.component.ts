import {Component, Input, OnInit} from '@angular/core';
import {HomeModel} from "../../models/home.model";

@Component({
  selector: 'lt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() conteudo: HomeModel | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
