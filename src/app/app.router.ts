import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {RegComponent} from './reg/reg.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    
    { path: 'createprofile', component: RegComponent },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);