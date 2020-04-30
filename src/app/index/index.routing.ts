import { IndexComponent } from './index.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../layout/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('../layout/blog/blog.module').then((m) => m.BlogModule),
      },
    ],
  },
];

export const IndexRoutes = RouterModule.forChild(routes);
