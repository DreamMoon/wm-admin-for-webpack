/**
 * Created by DreamBoy on 2017/2/27.
 */
import { Injectable }    from '@angular/core';

import { AppHttpService } from "../../providers/app-http.service";

@Injectable()
export class RegisterService {
    
    constructor(private http: AppHttpService) {
        
    }
}