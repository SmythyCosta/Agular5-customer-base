import { Component, OnInit, Input } from '@angular/core';
import { CustomersService } from '../providers/customers.service';
import { ICustomers } from '../interfaces/icustomers';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @Input() customers : ICustomers[]

  constructor(public customersService: CustomersService){}

  ngOnInit() {
      this.customersService.getCustomers()
        .subscribe(customers => this.customers = customers )
  }

}
