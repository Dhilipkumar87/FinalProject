import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {AddNewProjectComponent} from '../add-new-project/add-new-project.component'
import { MatSnackBar } from '@angular/material/snack-bar';
import{ProjectService} from '../project.service'
import {ConfirmationdialogComponent} from '../confirmationdialog/confirmationdialog.component'
import {  MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'startdate', 'enddate','actions'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private builder: FormBuilder, 
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public ProjectService:ProjectService


  ) { }

  ngOnInit(): void {
    this.ProjectService.fetchproject();
  }

  onsignup():void
  {
    debugger;
    const dialogRef = this.dialog.open(AddNewProjectComponent);
  }
  ondelete(id:number) {
    debugger;
      const dialogRef = this.dialog.open(ConfirmationdialogComponent,{
        data:{
          message: 'Are you sure want to delete?',
          buttonText: {
            ok: 'Save',
            cancel: 'No'
          }
        }
      });
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
         this.ProjectService.deleteproject(id);
         this.ProjectService.fetchproject();
        }
      });
    }

}
