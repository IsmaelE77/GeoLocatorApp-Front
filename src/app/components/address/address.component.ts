import { Component , Input} from '@angular/core';
import { Address } from '../../address'
@Component({
  selector: 'app-address',
  standalone: true,
  imports: [],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  @Input() address? : Address
}
