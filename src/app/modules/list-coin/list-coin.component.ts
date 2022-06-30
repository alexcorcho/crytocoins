import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-list-coin',
  templateUrl: './list-coin.component.html',
  styleUrls: ['./list-coin.component.sass']
})
export class ListCoinComponent implements OnInit {
  coins:any=[]

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins(){
    this.api.getCurrency().subscribe(res => {
      this.coins = res
    
  })
}

goDetail(coin:any){
  this.router.navigate(['detailcoin',coin.id])
}

}