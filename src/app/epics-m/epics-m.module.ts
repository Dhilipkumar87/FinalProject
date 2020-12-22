import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
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
import {HttpClientModule } from '@angular/common/http';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import { EpicsComponent } from './epics/epics.component';
import {epicsmRoutingModule} from './epics-m-routing.module';



@NgModule({
  declarations: [EpicsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
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
    epicsmRoutingModule,
  ]
})
export class EpicsMModule { }
