import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';

import {
  LocalizeRouterModule, LocalizeParser, ManualParserLoader, CacheMechanism,
  LocalizeRouterSettings
} from '@gilsdav/ngx-translate-router';

import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { routes } from './app.routes';

export function HttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  return new LocalizeRouterHttpLoader(translate, location, { ...settings, alwaysSetPrefix: true }, http);
}


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
          provide: LocalizeParser,
          useFactory: HttpLoaderFactory,
          deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
          
      },            
      cacheMechanism: CacheMechanism.Cookie,
      cookieFormat: '{{value}};{{expires:20}};path=/',
  })
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule { }
