import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';

const routes: Routes = [
    { path: '', component: CountComponent },
    { path: 'counter', component: CountComponent },
    { path: 'languages', loadChildren: () => import('./language/language.module').then(m => m.LanguageModule) }
];

@NgModule({
    declarations: [
        AppComponent,
        CountComponent
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
