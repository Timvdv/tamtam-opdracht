import {Component, View} from 'angular2/core';
import {Cases}             from '../cases/index';
import {Instagram}             from '../instagram/index';

@Component({
    directives: [Cases, Instagram],
    selector: "home",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})

export class Home {
    constructor() {
    }
}
