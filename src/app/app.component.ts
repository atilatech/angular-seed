import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  Event as RouterEvent,
  RoutesRecognized,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import { Title } from '@angular/platform-browser';

// import 'google.analytics'
declare const ga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements AfterViewInit {
  loading: boolean = true;

  constructor(titleService: Title,
              public router: Router,
              activatedRoute: ActivatedRoute,
  ) {

    // Set title when route changes
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(title);
      }

      router.events.subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event);
      });

      // Navigate to the top of the page when route change
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  ngAfterViewInit(): void {
    // https://stackoverflow.com/questions/45241131/angular-and-google-analytics-integration-ga-is-not-a-function

    this.router.events.subscribe(event => {
      // I check for isPlatformBrowser here because I'm using Angular Universal, you may not need it
      //if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId))
      if (event instanceof NavigationEnd ) {
        // if (ga) {
        //   ga('set', 'page', event.urlAfterRedirects);
        //   ga('send', 'pageview');
        // }

      }
    });
  }
  // collect that title data properties from all child routes
  // there might be a better way but this worked for me
  getTitle(state, parent) {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  // Shows and hides the loading loader during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof RoutesRecognized) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the loader in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
}
