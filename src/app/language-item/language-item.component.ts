import { Component, OnInit, Input } from '@angular/core';
import { Languages } from 'src/typings/languages';

@Component({
    selector: 'app-language-item',
    templateUrl: './language-item.component.html',
    styleUrls: ['./language-item.component.css']
})
export class LanguageItemComponent implements OnInit {

    @Input() language: Languages;

    constructor() { }

    ngOnInit() {
    }

}
