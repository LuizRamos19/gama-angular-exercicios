import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { LanguageItemComponent } from './language-item/language-item.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { YearBeforePipe } from './year-before.pipe';

const routes: Routes = [
    { path: '', component: CountComponent },
    { path: 'counter', component: CountComponent },
    { path: 'languages', component: LanguageListComponent },
    { path: 'languages/add', component: AddLanguageComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        CountComponent,
        LanguageListComponent,
        LanguageItemComponent,
        AddLanguageComponent,
        YearBeforePipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
