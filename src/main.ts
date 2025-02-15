import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./components/app/app.config";
import { HallListComponent } from "./components/hall-list/hall-list.component";

bootstrapApplication(HallListComponent, appConfig).catch((err) =>
  console.error(err)
);