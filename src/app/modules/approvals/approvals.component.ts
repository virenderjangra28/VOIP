import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit {

  isDropDownOpen : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  openMenu() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }
}
