import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title="Virtual Shopsway Portal";
  constructor() { }

  ngOnInit(): void {
  }

}
