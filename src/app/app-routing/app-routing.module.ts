import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreviewComponent } from "../preview/preview.component";
import { BlogPostDetailComponent } from "../blog-post-detail/blog-post-detail.component";


const routes: Routes = [
  { path: '' , component: PreviewComponent, data: {title: 'Atila | Automated Scholarships. The Right Way'}},
  { path: 'blog' , component: BlogPostDetailComponent, data: {title: 'Atila - Blog Post'}},
  { path: 'preview' , component: PreviewComponent, data: {title: 'Atila - Preview'}},
  { path: 'blog/:username/:slug' , component: BlogPostDetailComponent, data: {title: 'Atila - Blog Post'}},
  { path: '**', component: PreviewComponent, data: {title: 'Atila | Automated Scholarships. The Right Way'} }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
