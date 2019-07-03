import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { LanguageItemComponent } from './language-item/language-item.component';

const routes: Routes = [
    { path: '', component: CountComponent },
    { path: 'counter', component: CountComponent },
    { path: 'languages', component: LanguageListComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        CountComponent,
        LanguageListComponent,
        LanguageItemComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
