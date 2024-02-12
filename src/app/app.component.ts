import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AddAddressComponent } from "./components/add-address/add-address.component";
import { Request  } from './request';
import { AddressService } from './services/address.service'
import { Address } from './address'
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from "./components/address/address.component";
import { NgIf } from '@angular/common'


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NgIf,HeaderComponent, AddAddressComponent, HttpClientModule, AddressComponent]
})
export class AppComponent {
    address : Address
    errorMessage: string;
    constructor(private addressService : AddressService){}
    sendRequest(request: Request){
      this.addressService.postAddress(request)
      .subscribe(address => {
        if (address) {
          this.address = address;
        } else {
          this.errorMessage = 'Address not found'; // Set an error message
        }
      });
    }
}
