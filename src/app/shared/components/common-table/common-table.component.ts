import { Component, Input, Output, EventEmitter, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit, AfterViewInit {

  @Input() columns: any[] = [];
  @Input() data: any[] = [];

  @Output() rowClick = new EventEmitter<any>();

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(c => c.key);
    this.dataSource.data = this.data;

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const searchStr = Object.values(data).join(' ').toLowerCase();
      return searchStr.includes(filter);
    };
  }

  ngOnChanges(): void {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRow(row: any): void {
    this.rowClick.emit(row);
  }
  getCellValue(row: any, key: string): string {
    const value = row?.[key];

    if (value === null || value === undefined || value === '') {
      return '-';
    }

    return value;
  }
}