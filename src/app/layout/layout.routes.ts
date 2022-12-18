import { Route } from "@angular/router";

export const routes: Route[] = [
  {
    path: "gallery",
    loadComponent: () =>
      import("../gallery/feature/gallery-shell/gallery-shell.component").then((m) => m.GalleryShellComponent),
  },
  {
    path: "",
    redirectTo: "gallery",
    pathMatch: "full",
  },
];
