import { provideRouter, Routes } from "@angular/router";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideHttpClient } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { BaseLayoutComponent } from "./app/layout/base-layout.component";
import { GalleryShellComponent } from "./app/gallery/feature/gallery-shell/gallery-shell.component";

const appRoutes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
    children: [
      {
        path: "gallery",
        component: GalleryShellComponent
      }
    ]
  },
  {
    path: "",
    redirectTo: "gallery",
    pathMatch: "full",
  }
];

bootstrapApplication(AppComponent, { providers: [provideRouter(appRoutes), provideHttpClient(), importProvidersFrom(BrowserAnimationsModule)] }).catch((err) =>
  console.log(err)
);
