import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, throwError as observableThrowError } from 'rxjs/index';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    public newsPageActiveTab$: Subject<string> = new Subject();

    constructor(private httpClient: HttpClient) { }

    registerUser(register_data: any) {
        console.log(register_data.get('data'))
        const HttpUploadOptions = {
            headers: new HttpHeaders({ "Accept": "application/json" })
        }
        return this.httpClient.post(environment.API_ENDPOINT + '/dealer/registerDealer', register_data)
    }

    verifyDealerOtp(verify_data: any) {
        return this.httpClient.post(environment.API_ENDPOINT + '/dealer/verifyDealerRegOtp' , verify_data)

    }
    // {
    //     "personalPhone": "9844038037",
    //     "otpNumber": "1111"
    // }
}