
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {CommonModule} from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './project/project.component';
import { EpicsComponent } from './epics/epics.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { ConfirmationdialogComponent } from './confirmationdialog/confirmationdialog.component' 
import {MatSortModule} from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
//import { AddNewProjectComponent } from './project-m/add-new-project/add-new-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AddNewProjectComponent,
    ConfirmationdialogComponent,
    EpicsComponent,
    AddNewProjectComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatRippleModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
