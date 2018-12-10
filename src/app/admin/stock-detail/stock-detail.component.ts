import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  stockId: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id: any = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('stockId:' + id);
  }

   backtoStockslist() {
    this.router.navigate(['/stocks']);
  }

}
