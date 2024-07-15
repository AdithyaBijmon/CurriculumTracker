import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatListItemIcon } from '@angular/material/list';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatListItemMeta } from '@angular/material/list';






@NgModule({
    exports:[
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer
    ],
    imports:[
      MatDrawer,
      MatDrawerContainer,
      MatSidenavModule,
      MatListItemIcon,
      MatListItemMeta,
      MatListModule
    ]
})
export class MaterialModule{}