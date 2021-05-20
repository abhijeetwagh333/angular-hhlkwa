import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ConfirmationService, Message, SelectItem } from "primeng/api";
import { Table } from 'primeng/table';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {

  cars: any[];
  cols: any[];
  rowGroupMetadata: any;

      updateRowGroupMetaData() {
        this.rowGroupMetadata = {};
        if (this.cars) {
            for (let i = 0; i < this.cars.length; i++) {
                let rowData = this.cars[i];
                let brand = rowData.brand;
                if (i == 0) {
                    this.rowGroupMetadata[brand] = { index: 0, size: 1 };
                }
                else {
                    let previousRowData = this.cars[i - 1];
                    let previousRowGroup = previousRowData.brand;
                    if (brand === previousRowGroup)
                        this.rowGroupMetadata[brand].size++;
                    else
                        this.rowGroupMetadata[brand] = { index: i, size: 1 };
                }
            }
        }
    }

  constructor(private datePipe: DatePipe) {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    this.cars = [
      { "brand": "VW", "year": 1000000000, "color": "Orange", "vin": "dsad231ff" },
      { "brand": "Audi", "year": 2000000000, "color": "Black", "vin": "gwregre345" },
      { "brand": "Renault", "year": 3000000000, "color": "Gray", "vin": "h354htr" },
      { "brand": "BMW", "year": 4000000000, "color": "Blue", "vin": "j6w54qgh" },
      { "brand": "Mercedes", "year": 2500000000, "color": "Orange", "vin": "hrtwy34" },
      { "brand": "Volvo", "year": 5000000000, "color": "Black", "vin": "jejtyj" },
      { "brand": "Honda", "year": 6800000000, "color": "Yellow", "vin": "g43gr" },
      { "brand": "Jaguar", "year": 1200000000, "color": "Orange", "vin": "greg34" },
      { "brand": "Ford", "year": 9000000000, "color": "Black", "vin": "h54hw5" },
      { "brand": "Fiat", "year": 120000000000, "color": "Red", "vin": "245t2s" }
    ];
    this.updateRowGroupMetaData();
    console.log(rowGroupMetadata);
  }

}
