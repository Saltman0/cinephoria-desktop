import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./components/app/app.config";
import { LoginComponent } from "./components/login/login.component";

bootstrapApplication(LoginComponent, appConfig).catch((err) =>
  console.error(err)
);