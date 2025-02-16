import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./components/app/app.config";
import { IncidentListComponent } from "./components/incident-list/incident-list.component";

bootstrapApplication(IncidentListComponent, appConfig).catch((err) =>
  console.error(err)
);