import { Routes } from "@angular/router";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";

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
    }
  ];