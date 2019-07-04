import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Languages } from 'src/typings/languages';

@Injectable({
    providedIn: 'root'
})
export class LanguagesService {
    readonly URL = 'http://localhost:3000/languages';

    constructor(private httpClient: HttpClient) { }

    getLanguages(): Observable<Languages[]> {
        return this.httpClient.get<Languages[]>(this.URL);
    }

    addLanguage(language: Languages): Observable<Languages> {
        return this.httpClient.post<Languages>(this.URL, language);
    }
}
