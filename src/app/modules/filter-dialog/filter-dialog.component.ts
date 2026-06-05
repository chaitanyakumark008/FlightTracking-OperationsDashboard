import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent {

  filterForm: FormGroup;

  origins: string[] = [];
  destinations: string[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.origins = data.origins;
    this.destinations = data.destinations;

   this.filterForm = this.fb.group({
  status: [data.filters?.status || ''],
  origin: [data.filters?.origin || ''],
  destination: [data.filters?.destination || '']
});
  }

  applyFilters(): void {
    this.dialogRef.close(this.filterForm.value);
  }

  close(): void {
    this.dialogRef.close();
  }
  resetFilters(): void {

  this.filterForm.reset({
    status: '',
    origin: '',
    destination: ''
  });

  this.dialogRef.close({
    status: '',
    origin: '',
    destination: ''
  });
}
}