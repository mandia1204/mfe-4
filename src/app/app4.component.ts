import { Component } from '@angular/core';
import { Customer } from './components/header.component';

@Component({
  selector: 'app4-test',
  templateUrl: './app4.component.html',
  styleUrls: ['app4.component.scss']
})
export class App4Component {
  title = 'app4';
  customers: Customer[] = [];

  constructor() {
    this.customers = [{
      ID: 1,
      CompanyName: 'Super Mart of the West',
      Address: '702 SW 8th Street',
      City: 'Bentonville',
      State: 'Arkansas',
      Zipcode: 72716,
      Phone: '(800) 555-2797',
      Fax: '(800) 555-2171',
      Website: 'http://www.nowebsitesupermart.com',
    }, {
      ID: 5,
      CompanyName: 'E-Mart',
      Address: '3333 Beverly Rd',
      City: 'Hoffman Estates',
      State: 'Illinois',
      Zipcode: 60179,
      Phone: '(847) 286-2500',
      Fax: '(847) 286-2501',
      Website: 'http://www.nowebsiteemart.com',
    }, {
      ID: 6,
      CompanyName: 'Walters',
      Address: '200 Wilmot Rd',
      City: 'Deerfield',
      State: 'Illinois',
      Zipcode: 60015,
      Phone: '(847) 940-2500',
      Fax: '(847) 940-2501',
      Website: 'http://www.nowebsitewalters.com',
    }];
  }
}
