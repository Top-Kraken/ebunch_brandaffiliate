import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, throwError as observableThrowError } from 'rxjs/index';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    public newsPageActiveTab$: Subject<string> = new Subject();

    constructor(private httpClient: HttpClient) { }

    getCountryCode() {
        return this.httpClient.get(environment.API_ENDPOINT + '/dealer/getCountryCode')
    }

    getStates_with_CountryCode(countryCode: number) {
        return this.httpClient.get(environment.API_ENDPOINT + '/dealer/getStates/countryId/'+countryCode)
    }

    getAllIndustries() {
        return this.httpClient.get(environment.API_ENDPOINT + '/dealer/getAllIndustry')
    }
}

// {headers: new HttpHeaders({'Content-Type': 'application/json'})},