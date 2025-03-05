import {ApplicationConfig, inject} from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideHttpClient, withFetch } from "@angular/common/http";
import {provideApollo} from "apollo-angular";
import {HttpLink} from "apollo-angular/http";
import {InMemoryCache} from "@apollo/client/core";

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideHttpClient(
          withFetch()
      ),
      provideApollo(() => {
          const httpLink = inject(HttpLink);

          return {
              link: httpLink.create({ uri: '/graphql' }),
              cache: new InMemoryCache()
          };
      })
  ],
};
