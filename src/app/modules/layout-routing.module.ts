import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [ {
    path: '',
    component: LayoutComponent,
     children:[
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: 'flights', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) },
        { path: 'kpicards', loadChildren: () => import('./kpi-cards/kpi-cards.module').then(m => m.KpiCardsModule) },
        { path: 'flightPanelDetails', loadChildren: () => import('./flight-panel-details/flight-panel-details.module').then(m => m.FlightPanelDetailsModule) },
        { path: 'filters', loadChildren: () => import('./filter-dialog/filter-dialog.module').then(m => m.FilterDialogModule) },
        { path: 'routes', loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule) },

     ]
  },
    { path: 'charts', loadChildren: () => import('./chart-view/chart-view.module').then(m => m.ChartViewModule) },

    

    
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
