import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Languages } from 'src/typings/languages';

@Injectable({
    providedIn: 'root'
})
export class LanguagesService {
    readonly URL = 'https://alefesouza.dev/gama/languages.php';

    constructor(private httpClient: HttpClient) { }

    getLanguages(): Observable<Languages[]> {
        return this.httpClient.get<Languages[]>(this.URL);
    }
}
