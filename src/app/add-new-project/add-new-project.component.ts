import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import {ConfirmationdialogComponent} from '../confirmationdialog/confirmationdialog.component'
import {  MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import{ProjectService} from '../project.service';
import {Proj} from '../Proj'
@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.scss']
})
export class AddNewProjectComponent implements OnInit {
  Registers: FormGroup;
  constructor(
    private builder: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialog,
    private dialogRef:MatDialogRef<AddNewProjectComponent>,
    private router: Router,
    public ProjectService:ProjectService


  ) {

    this.Registers = this.builder.group({
      Title: ['',[Validators.required,Validators.minLength(6)],this.projectExists.bind(this)],
      startdate: ['',[Validators.required]],
      enddate: ['',[Validators.required]]
    });
    
   }

  ngOnInit(): void {
  }
  get Title() {
    return this.Registers.get('Title');
  }

  get startdate() {
    return this.Registers.get('startdate');
  }
  
  get enddate() {
    return this.Registers.get('enddate');
  }

  onSave() {
    debugger;
    const { Title, startdate,enddate} = this; 
      const dialogRef = this.dialog.open(ConfirmationdialogComponent,{
        data:{
          message: 'Are you sure want to Save?',
          buttonText: {
            ok: 'Save',
            cancel: 'No'
          }
        }
      });
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          debugger;  
          
          this.ProjectService.addproject(this.Title.value, this.startdate.value, this.enddate.value,[])
            .subscribe((Proj: Proj) => 
            {
              if (Proj.title,Proj.startdate,Proj.Enddate) 
              {

              }
            });           
          //===============================================
          this.ProjectService.fetchproject();
          this.dialogRef.close();
          this.ProjectService.fetchproject();
        }
      });
    }

    projectExists(control: AbstractControl): Observable<any|null> {
      const { value } = control;
      return this.http.get<any[]>(`http://localhost:3000/Project?title=${value}`)
        .pipe(
          map(users => {
            if (users.length) {
              return {
                projectExists: true,
              }
            }
  
            return null;
          })
        );
    }



}
