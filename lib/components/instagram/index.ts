import {Component, View} from 'angular2/core';
import {Inject} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
    selector: "instagram",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})

export class Instagram {
    public pictures: Object[];

    constructor(public http: Http) {

    }

    getInstaFeed()
    {
        this.http.get('http://timvandevathorst.nl/tamtam/instagram.php').subscribe((response) => {
            this.pictures = response.json();
        });
    }

    ngOnInit()
    {
        this.getInstaFeed();
    }
}
