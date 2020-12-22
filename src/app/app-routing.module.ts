import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { EpicsComponent } from './epics/epics.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [

{ path: 'Project', loadChildren: () => import('./project-m/project-m.module').then(m => m.ProjectMModule)},
{ path: 'Epics', loadChildren: () => import('./epics-m/epics-m.module').then(m => m.EpicsMModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
