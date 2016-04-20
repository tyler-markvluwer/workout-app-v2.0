import {Control} from 'angular2/common'

export class AddUserValidators {
    static re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    static isValidEmail(control: Control) {
        if (AddUserValidators.re.test(control.value)) {
            return null;
        }
        else {
            return {invalidEmail: true};
        }
    }
}