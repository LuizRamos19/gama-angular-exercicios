import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';
import { Languages } from 'src/typings/languages';

@Component({
    selector: 'app-language-list',
    templateUrl: './language-list.component.html',
    styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {

    languages: Languages[] = [];
    loading: boolean = false;

    constructor(public languageService: LanguagesService) { }

    ngOnInit() {
        this.loading = true;
        this.languageService.getLanguages().subscribe(value => {
            this.languages = value;
            this.loading = false;
        });
    }

}
