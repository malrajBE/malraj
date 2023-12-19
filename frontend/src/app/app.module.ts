import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { GetAllComponent } from './get-all/get-all.component';
import { GetByIDComponent } from './get-by-id/get-by-id.component';
import { DeleteComponent } from './delete/delete.component';
import { PutComponent } from './put/put.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    GetAllComponent,
    GetByIDComponent,
    DeleteComponent,
    PutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
