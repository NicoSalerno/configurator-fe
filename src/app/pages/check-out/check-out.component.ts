import { Component, OnInit } from '@angular/core';
import { OptionalModello } from 'src/app/utils/modello.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit{
  loaded: boolean = false;
  modelloID!: number;
  optionals!: OptionalModello[];

  ngOnInit(): void {
    this.optionals = history.state.optionals;
    this.modelloID = history.state.modelloID;

    if(this.optionals != null){
      this.loaded = true;
    }
    console.log('Optionals ricevuti:', this.optionals);
  }

}
