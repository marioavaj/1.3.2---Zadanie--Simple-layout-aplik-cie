import { Component, OnInit, } from '@angular/core';
import { ShopingCartServiceService } from 'src/app/Services/shoping-cart-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],  
})



export class HeaderComponent implements OnInit {

  toolTipData:any;

  constructor(private tooltipDataFromService: ShopingCartServiceService) { }

  ngOnInit(): void {
    this.tooltipDataFromService.dataStream.subscribe((newValue)=>{
      this.toolTipData =newValue;           
    });  
    console.log(this.toolTipData);
    
  }

}
