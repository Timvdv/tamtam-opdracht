import {Component, View}    from 'angular2/core';
import {Navbar}             from './navbar/index';
import {Home}               from './home/index';
import {Contact}              from './contact/index';
import {Footer}                from './footer';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: "app"
})
@View({
        directives: [Navbar, ROUTER_DIRECTIVES, Footer],
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})
@RouteConfig([
    new Route({ path: '/', component: Home, name: 'Home' }),
    new Route({ path: '/contact', component: Contact, name: 'Contact'}),
])
export class App {

    constructor() {

    }

    ngOnInit() {
        console.log('[Component] app running');
    }
}
