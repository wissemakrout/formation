import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { FormationFormComponent } from './formation-form/formation-form.component';
import { FormationContainerComponent } from './formation-container/formation-container.component';
import { FormationListContainerComponent } from './formation-list-container/formation-list-container.component';

const routes: Routes = [
  {
    path: '', component: FormationContainerComponent, children: [
    { path: '', component: FormationListContainerComponent },
    { path: 'details/:id', component: FormationDetailsComponent },
    { path: 'form/:id', component: FormationFormComponent },
    { path: 'form', component: FormationFormComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
