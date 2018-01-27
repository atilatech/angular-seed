import { Component, OnInit } from '@angular/core';

import { BlogPost, sampleBlog} from "../_models/blog-post";
import { SeoService } from '../_services/seo.service';
@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.scss']
})
export class BlogPostDetailComponent implements OnInit {

  blogPost = sampleBlog;
  constructor(
    public seoService: SeoService,
  ) { }

  ngOnInit() {

    let metaConfig = Object.assign({}, this.blogPost);
    metaConfig['image'] = this.blogPost.header_image_url;
    metaConfig.slug = `blog/${this.blogPost.user.username}/${this.blogPost.slug}`;

    this.seoService.generateTags(metaConfig);
  }

}
