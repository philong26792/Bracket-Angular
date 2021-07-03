import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  optionMenu(i: number) {
    let elements = document.getElementsByClassName('br-menu-link');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('active');
    }
    elements[i].classList.add('active')
  }
}
