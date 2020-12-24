import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddTodoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ToolBarComponent,
    AddTodoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    FormsModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMomentDateModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddTodoDialogComponent
  ]
})
export class AppModule { }

