/// <reference path="../../../typings/jquery/jquery.d.ts" />
import {Component, View} from 'angular2/core';
import * as jQuery from "jquery";

//Safari could not handle variables inside the background property
//in a style tag thats why I included NgStyle
import {NgStyle} from 'angular2/common';

@Component({
    selector: "cases",
    directives: [NgStyle],
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})

export class Cases
{
    private slide = 0;

    private cases: Object[] = [
        {
            image: "/images/walibi.jpg",
            title: "Walibi",
        },
        {
            image: "/images/florensis.jpg",
            title: "Florensis",
        },
        {
            image: "/images/artsen-zonder-grenzen.jpg",
            title: "Artsen zonder grenzen",
        }       
    ];

    public activeCase = this.cases[this.slide];

    constructor() {
        
    }

    slideRight()
    {
        if (this.slide < this.cases.length - 1)
            this.slide++;
        else
            this.slide = 0;

        this.enableSlide(this.slide);
    }

    slideLeft()
    {
        if (this.slide > 0)
            this.slide--;
        else
            this.slide = this.cases.length - 1;

        this.enableSlide(this.slide);
    }

    enableSlide(slide)
    {
        //Activate the correct slide based on a int
        this.activeCase = this.cases[slide]
    }

    scrollDown()
    {
        //Animate scroll to the correct position on the page
        jQuery("html, body").stop().animate({ scrollTop: window.innerHeight }, '400', 'swing');
    }
}