import { BlogHomeComponent } from "./blog-home/blog-home.component";
import { ArticleComponent } from "./article/article.component";
import { BlogComponent } from "./blog.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: BlogComponent,
    children: [
      { path: "", redirectTo: "main" },
      { path: "main", component: BlogHomeComponent },
      { path: "article", component: ArticleComponent }
    ]
  }
];

export const BlogRoutes = RouterModule.forChild(routes);
