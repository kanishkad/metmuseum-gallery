import { provideRouter, Route } from "@angular/router";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

const appRoutes: Route[] = [
  {
    path: "",
    loadComponent: () => import("./app/layout/base-layout.component").then((m) => m.BaseLayoutComponent),
    loadChildren: () => import("./app/layout/layout.routes").then((m) => m.routes),
  },
];

bootstrapApplication(AppComponent, { providers: [provideRouter(appRoutes)] }).catch((err) =>
  console.log(err)
);
