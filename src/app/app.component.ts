import { Component } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i18n-router';

  constructor(private localize: LocalizeRouterService) { }

  ngOnInit() {
    // should be triggered on every language change
    this.localize.routerEvents.subscribe((language: string) => {
      console.log(language);
      console.log('app-comp', this.localize.translateRoute('/'));
      console.log('app-comp', this.localize.translateRoute('/?test=ok'));
      console.log('app-comp', this.localize.translateRoute('/bob?test=coucou'));
      console.log('app-comp', this.localize.translateRoute('bob?test=coucou'));
    });
  }

  public routerOutletActivation(active: boolean) {
    console.log('routerOutletActivation', active);
  }

  public switchLang() {
    console.log('change lang replaceUrl');
    this.localize.changeLanguage(this.localize.parser.currentLang === 'ro' ? 'en' : 'ro', { replaceUrl: true });
  }
}

