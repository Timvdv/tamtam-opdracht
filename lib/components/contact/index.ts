import {Component, View} from 'angular2/core';
import { NgForm } from 'angular2/common';

import { ContactForm } from "./contactForm"

@Component({
    selector: "contact",
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
    template: require('./index.html')
})

export class Contact
{
    submitted = false;
    valid = true;
    model = new ContactForm("", "", "", "");
    form_error = "Please complete the form and try again.";

    submit()
    {
            this.submitted = true;    
    }

    validateForm(form)
    {
        this.form_error = "Please complete the form and try again.";

        if (form.valid)
        {
            if (!this.validateEmail(form.value.email))
            {
                this.form_error = "Please enter a valid email address";
                this.valid = false;
            }
            else
            {
                this.valid = true;
                this.submit();    
            }
        }
        else
        {
            this.valid = false;
        }
    }

    validateEmail(email)
    {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}


