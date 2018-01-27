import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { GooglePlaceDirective } from './_directives/google-place.directive';
import { GoogleAnalyticsEventsService } from './_services/google-analytics-events.service';
import { SubscriberDialogComponent } from './subscriber-dialog/subscriber-dialog.component';
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';

import { SafeHtmlPipe } from './_pipes/safe-html.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatDialogModule, MatProgressBarModule } from '@angular/material';
import { MaterializeModule } from 'angular2-materialize';


import { MatIconRegistry, MatIconModule, MatMenuModule, MatFormFieldModule,MatButtonModule,
  MatSelectModule, MatCardModule,MatCheckboxModule,MatInputModule,MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    GooglePlaceDirective,
    SubscriberDialogComponent,
    BlogPostDetailComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    HttpClientModule,
    CommonModule,
    MaterializeModule,
  ],
  providers: [GoogleAnalyticsEventsService],
  bootstrap: [AppComponent],
  entryComponents: [
    SubscriberDialogComponent,
  ]
})
export class AppModule { }
