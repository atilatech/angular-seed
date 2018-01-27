import { Injectable } from '@angular/core';

import { Meta } from '@angular/platform-browser';
// https://angularfirebase.com/lessons/seo-angular-part-1-rendertron-meta-tags/#Setting-Social-Media-Meta-Tags-in-Angular
@Injectable()
export class SeoService {

  constructor(private meta: Meta) { }

  generateTags(config) {
    /*
    // default values
    config = {
      title: 'Atila | Automated Scholarships. The Right Way.',
      description: 'Automatically find and apply to scholarships at the click of a button. Learn and share information about education, career and life.',
      image: 'https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/public%2Fatila-image-preview-nov-24-2.png?alt=media&token=f4bb94ac-60f6-451a-a3df-f2300d92818d',
      slug: '',
    };
    */
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@atilatech' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Atila' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://atila.ca/${config.slug}` });


    this.meta.updateTag({ itemprop: 'name', content: config.title });
    this.meta.updateTag({ itemprop: 'description', content: config.description });
    this.meta.updateTag({ itemprop: 'image', content: config.image });
    this.meta.updateTag({ itemprop: 'og:url', content: `https://atila.ca/${config.slug}` });


  }
}