import {BlogPostService} from '../_services/blog-post.service';
import {MatSnackBar} from '@angular/material';

export class BlogPost {

    id?: number;
    title?:any;
    slug?: any;
    date_created?: any;
    header_image_url?: any;
    body?: any;
    description?:any;
    contributors: any[];
    published?: boolean;
    up_votes_count?: any;
    down_votes_count?: any;
    metadata?: any;
    up_votes_id?: any[];
    down_votes_id?: any[];
    constructor(public user,) {
        //Do we have to manually do this, is there a python-like equivalent of kwargs
        this.title = '';
    }

}

export var sampleBlog = {
  "id": 2,
  "title": "What is Atila?",
  "slug": "what-is-atila",
  "body": "<p>Atila is a web application that automates the process of applying to scholarships. The idea is very simple:</p>\r\n<ol>\r\n<li>Create your profile</li>\r\n<li>Select the Scholarships you want</li>\r\n<li>Click a button to apply&nbsp;</li>\r\n</ol>\r\n<p>Here is a live video of Atila in Action:</p>\r\n<p><iframe src=\"//www.youtube.com/embed/c_K4342WMwQ?cc_load_policy=1\" width=\"560\" height=\"314\" allowfullscreen=\"allowfullscreen\"></iframe></p>\r\n<p>&nbsp;</p>",
  "date_created": "2017-11-24T09:30:08Z",
  "description": "Atila is a web application that automates the process of finding and applying to scholarships. You literally just click a button. Here's how it works.",
  "header_image_url": "https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/public%2Fatila-image-preview-nov-24-2.png?alt=media&token=f4bb94ac-60f6-451a-a3df-f2300d92818d",
  "published": false,
  "up_votes_count": 0,
  "down_votes_count": 0,
  "up_votes_id": [
      0
  ],
  "down_votes_id": [
      0
  ],
  "metadata": {},
  "user": {
      "first_name": "Atila",
      "last_name": "Tech",
      "username": "atila",
      "profile_pic_url": "https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/user-profiles%2F19%2Fprofile-pictures%2Fatila-logo-right-way.png?alt=media&token=cdc6c1e8-38d0-42c5-bdc7-3827ae1c5683",
      "id": 19
  },
  "contributors": [
      1
  ]
}
