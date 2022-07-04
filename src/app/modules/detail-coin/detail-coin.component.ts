import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-detail-coin',
  templateUrl: './detail-coin.component.html',
  styleUrls: ['./detail-coin.component.sass']
})
export class DetailCoinComponent implements OnInit {
  data:any;
  coinId!:string;


  constructor(private api:ApiService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.coinId = value['id'];
    })
    this.getDataCoin()
  }

  getDataCoin(){
    this.api.getCurrencyById(this.coinId).subscribe(
      res => {
        this.data = res;
        console.log(res)
      }
    )
  }

}