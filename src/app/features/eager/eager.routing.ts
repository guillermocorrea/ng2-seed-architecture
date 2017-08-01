import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './eager.component';

const routes: Routes = [
    { 
        path: '', 
        component: EagerComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);