import { Route } from "@angular/router";

export const routes: Route[] = [
  {
    path: "gallery",
    loadComponent: () =>
      import("../gallery/feature/gallery-overview/gallery-overview.component").then((m) => m.GalleryOverviewComponent),
  },
  {
    path: "",
    redirectTo: "gallery",
    pathMatch: "full",
  },
];
