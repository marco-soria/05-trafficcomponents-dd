import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { ServerStatusComponent } from './dashboard/server-status/server-status';
import { TrafficComponent } from './dashboard/traffic/traffic';
import { TicketsComponent } from './dashboard/tickets/tickets';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {}
