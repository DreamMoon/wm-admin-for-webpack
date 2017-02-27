/**
 * Created by DreamBoy on 2017/1/28.
 */
import { Component } from '@angular/core';

import 'style-loader!./register.component.scss';
import { AppHttpService } from "../../providers/app-http.service";

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    constructor(private http: AppHttpService) {

    }

    test() {
        this.http.get(AppHttpService.URL_GET_REGI_VCODE).then((data) => {
            console.log(data);
        });
    }
}
