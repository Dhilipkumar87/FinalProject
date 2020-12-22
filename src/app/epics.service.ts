import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, forkJoin, pipe } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proj } from './proj';

@Injectable({
  providedIn: 'root'
})
export class EpicsService {

  url: string;
  projectss: Proj[];
  httpOptions: object;
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.projectss = [];
    this.url = 'http://localhost:3000/Project';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }
  fetchproject() {
    debugger;
    this.http.get<Proj[]>(`${this.url}`)
      .pipe(
        catchError((err: any): Observable<Proj[]> => {  
          this.snackBar.open('Error in Fetching the projectss', '', {
            duration: 5000, panelClass: ['mat-toolbar', 'mat-warn'],verticalPosition: 'top' ,horizontalPosition:'right'
          });      
          return of([]); // fallback value
        })
      )
      .subscribe((projectss: Proj[]) => {
        this.projectss = projectss;
      });
  }
  addepices(title: string,Startdate:string,Enddate:string,Epices:object[]): Observable<Proj> {
    debugger;
    const projectsss: Proj = new Proj(title, Startdate,Enddate,Epices);
    return this.http.put<Proj>(`${this.url}/${projectsss.id}`, {
      title: projectsss.title,
      Startdate: projectsss.startdate,
      Enddate: projectsss.Enddate,
      Epices:projectsss.Epices
    }, this.httpOptions)
      .pipe(
        tap((Proj: Proj) => {
          this.projectss.push(Proj);
          this.snackBar.open('Epices Saved Successfully', '', {
            duration: 7000, panelClass: ['mat-toolbar', 'mat-accent'],verticalPosition: 'top' ,horizontalPosition:'right'
          });
        }),
        catchError((err: any): Observable<any> => {
          this.snackBar.open('Error in inserting data', '', {
            duration: 7000, panelClass: ['mat-toolbar', 'mat-warn'],verticalPosition: 'top' ,horizontalPosition:'right'
          });
          return of({}); // fallback value
        }),
      );
      this.fetchproject();
  }

  EpicsSave(obj:Proj[]){
    debugger;
   const putCalls = obj.map(res => this.http.put<Proj>(`${this.url}/${res.id}`, {
    title: res.title,
    Startdate: res.Enddate,
    Enddate:res.Enddate,
    Epices: res.Epices
  }, this.httpOptions).pipe(
    tap((Proj: Proj) => {
      this.snackBar.open('Epices Saved Successfully', '', {
        duration: 7000, panelClass: ['mat-toolbar', 'mat-accent'],verticalPosition: 'top' ,horizontalPosition:'right'
      });
    }),
    catchError((err: any): Observable<any> => {
      this.snackBar.open('Error in inserting data', '', {
        duration: 7000, panelClass: ['mat-toolbar', 'mat-warn'],verticalPosition: 'top' ,horizontalPosition:'right'
      });
      return of({}); // fallback value
    }),
  ))
  forkJoin(putCalls).subscribe((results) => {
    debugger;

    debugger
  })
}
}
