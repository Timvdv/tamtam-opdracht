import {Component, View} from 'angular2/core';

@Component({
    selector: "footer",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})

export class Footer {

    constructor() {
        
    }
}
