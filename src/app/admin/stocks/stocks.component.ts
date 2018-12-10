import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
  }

  goStockDetail() {
    this.route.navigate(['/stock/:50']);
  }

}
