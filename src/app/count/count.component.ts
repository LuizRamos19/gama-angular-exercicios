import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-count',
    templateUrl: './count.component.html',
    styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
    number = 0;
    constructor() { }

    ngOnInit() {
    }

    changeNumber(increment: boolean) {
        increment ? this.number++ : this.number--;
    }

}
