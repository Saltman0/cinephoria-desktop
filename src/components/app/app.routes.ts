import { Routes } from "@angular/router";
import { HallListComponent } from "../hall-list/hall-list.component";
import { IncidentListComponent } from "../incident-list/incident-list.component";
import { IncidentReportComponent } from "../incident-report/incident-report.component";
import { LoginComponent } from "../login/login.component";

export const routes: Routes = [
    { path: 'hall-list-component', component: HallListComponent },
    { path: 'incident-list-component', component: IncidentListComponent },
    { path: 'incident-report-component', component: IncidentReportComponent },
    { path: 'login-component', component: LoginComponent }
];
