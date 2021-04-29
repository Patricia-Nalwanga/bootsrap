import {Routes} from "@angular/router";

import {LandingPageComponent} from "../landing-page/landing-page.component";
import {HomeComponent} from "../home/home.component";

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent

    },
    {
        path: 'landingpage',
        component: LandingPageComponent
    },
    {
        path:'', redirectTo: '/home', pathMatch: 'full'
        
    }
]