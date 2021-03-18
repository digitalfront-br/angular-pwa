import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-guest-layout',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class GuestLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
