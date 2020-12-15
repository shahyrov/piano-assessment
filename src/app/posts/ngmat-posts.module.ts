import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

const ngMatPosts = [
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatChipsModule,
  MatBadgeModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatDialogModule
];

@NgModule({
  imports: [
    ngMatPosts
  ],
  exports: [
    ngMatPosts
  ],
})
export class NgmatPostsModule { }
