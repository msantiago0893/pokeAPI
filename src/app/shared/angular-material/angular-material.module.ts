import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatProgressBarModule
   ],
   exports: [
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatProgressBarModule
   ]
})
export class AngularMaterialModule { }
