import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  voucherNo;
  phoneNo;
  voucherdetails;
  totalAmt = 0;
  lineStatus = 0;

  constructor(
    private http: HttpClient) { }

  ngOnInit() {
  }

  onSearch() {
    if (this.voucherNo) {
      this.http.get<any>(environment.API + 'tbl_orders/' + this.voucherNo).subscribe(data => {
      this.voucherdetails = data;
      this.totalAmt = Number(this.voucherdetails.PRODUCT_CHARGE) + Number(this.voucherdetails.DELIVERY_CHARGE);
      if (this.voucherdetails.VOUCHER_STATUS == "CONFIRMED") {
        this.lineStatus = 1;
      } else if (this.voucherdetails.VOUCHER_STATUS == "PICKED") {
        this.lineStatus = 2;
      } else if (this.voucherdetails.VOUCHER_STATUS == "IN TRANSIT") {
        this.lineStatus = 3;
      } else {
        this.lineStatus = 4;
      }

    });
  }
}

}
