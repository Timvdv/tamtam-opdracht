import {Component, View} from 'angular2/core';
import { RouterLink} from 'angular2/router';
import {NgClass} from 'angular2/common';

@Component({
  selector: "navbar",
  directives: [RouterLink, NgClass],
  styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
  template: require('./index.html')
})
export class Navbar {
    title: string;
    showMenu: boolean = false;

    constructor() {
        this.title = window.noBullshitBoilerplate.name;
    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }
}
