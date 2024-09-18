import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PivotComponent } from './pivot/pivot.component';

@NgModule({
	declarations: [
		AppComponent,
		PivotComponent
	],
	imports: [BrowserModule],
	bootstrap: [AppComponent]
})
export class AppModule { }
