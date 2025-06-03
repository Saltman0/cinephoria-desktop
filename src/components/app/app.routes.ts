import { Routes } from "@angular/router";
import { HallListComponent } from "../hall-list/hall-list.component";
import { IncidentListComponent } from "../incident-list/incident-list.component";
import { IncidentReportComponent } from "../incident-report/incident-report.component";
import { LoginComponent } from "../login/login.component";

export const root: string = "http://localhost:1420/";

export const routes: Routes = [
    { path: 'hall-list', title: "Hall list page", component: HallListComponent },
    { path: 'incident-list/:hallId', title: "Incident list page", component: IncidentListComponent },
    { path: 'incident-report', title: "Incident report page", component: IncidentReportComponent },
    { path: 'login', title: "Login page", component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
