import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { CityInfo } from 'src/app/model/city-info';
import { StateInfo } from 'src/app/model/state-info';
import { BasicService } from 'src/app/services/basic.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() address: Address = new Address();

  states: StateInfo[] = [];

  cities: CityInfo[] = [];

  constructor(private basicService: BasicService) { }

  ngOnInit(): void {
    this.basicService.getStates().subscribe(
      res => {
        this.states = res
        console.log(res)
      }
    )
  }

  onStateChange(stateId: string) {
    this.cities = [];
    this.basicService.getCities(stateId).subscribe(
      cities => this.cities = cities
    )
  }
}
