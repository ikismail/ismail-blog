import { BlogHomeComponent } from './blog-home/blog-home.component';
import { SharedModule } from './../../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutes } from './blog.routing';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [CommonModule, SharedModule, BlogRoutes],
  declarations: [
    BlogComponent,
    SidebarComponent,
    BlogHomeComponent,
    ArticleComponent,
  ],
})
export class BlogModule {}
