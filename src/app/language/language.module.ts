import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageListComponent } from './language-list/language-list.component';
import { LanguageItemComponent } from './language-item/language-item.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { YearBeforePipe } from './year-before.pipe';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: LanguageListComponent },
    { path: 'add', component: AddLanguageComponent }
];

@NgModule({
    declarations: [
        LanguageListComponent,
        LanguageItemComponent,
        AddLanguageComponent,
        YearBeforePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class LanguageModule { }
