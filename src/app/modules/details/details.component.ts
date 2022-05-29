import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private _location : Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this._location.back();
  }
}
