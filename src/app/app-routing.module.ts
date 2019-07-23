import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  {
    path: 'summary',
    component: SummaryComponent,
    data: {
      pageID: "summary"
    }
  },
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'summary'
  },
  {
    path: '**',
    pathMatch: "full",
    redirectTo: 'summary'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
