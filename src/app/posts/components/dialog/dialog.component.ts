import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { PostsDto } from '../../models';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  displayedColumns: string[] = ['author', 'topic', 'qtyAnswers', 'tags'];
  questions: PostsDto = [];

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PostsDto) {
    this.questions = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
