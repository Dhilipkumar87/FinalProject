import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpicsComponent } from './epics/epics.component';


const routes: Routes = [
    //{ path: 'Epics', component: EpicsComponent },
    { path: '', component: EpicsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class epicsmRoutingModule { }