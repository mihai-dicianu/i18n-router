import { Routes } from "@angular/router";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { AccountModule } from "./modules/account/account.module";

export const routes: Routes = [
    {
      component: HomeComponent,
      path: "home",
      
    },
    {
      component: AboutUsComponent,
      path: "about-us",
      
    },
    {
      component: ContactComponent,
      path: "contact"
    },
    {
      path: "account",
      loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule),
      data: {
        discriminantPathKey: 'ACCOUNTPATH'
      }
    }
  ];