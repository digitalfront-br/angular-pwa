import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'df-auth-layout',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
