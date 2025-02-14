import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./components/app/app.config";
import { HeaderComponent } from "./components/header/header.component";

bootstrapApplication(HeaderComponent, appConfig).catch((err) =>
  console.error(err)
);