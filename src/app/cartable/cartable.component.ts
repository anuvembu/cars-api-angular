import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cartable',
  templateUrl: './cartable.component.html',
  styleUrls: ['./cartable.component.css']
})
export class CartableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColumns = ['name', 'make', 'model'];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(results => {
      if(!results) {
        return;
      }
      this.dataSource =new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    })
  }

}
