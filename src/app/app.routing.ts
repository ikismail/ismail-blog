import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./index/index.module#IndexModule"
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
