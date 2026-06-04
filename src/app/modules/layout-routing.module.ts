import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [ {
    path: '',
    component: LayoutComponent,
     children:[
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', loadChildren: () => import('./dashbard/dashbard.module').then(m => m.DashbardModule) },
        { path: 'flights', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) }
     ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
