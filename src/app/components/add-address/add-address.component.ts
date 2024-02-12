import { Component ,Output,Input, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common'
import { Request } from '../../request';

@Component({
  selector: 'app-add-address',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css'
})

export class AddAddressComponent {

  @Output() sendRequest : EventEmitter<Request> = new EventEmitter()

  @Input() isLoading: boolean = false;


  applyForm = new FormGroup({
    street: new FormControl('', Validators.required), 
    city: new FormControl('', Validators.required),
    county: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]), 
    sendByEmail: new FormControl('')
  });

  onSubmit(){
    if(!this.applyForm.valid){
      alert("Please fill in all required fields and correct any errors before submitting.");
      return 
    }
    const request:Request = {
      street: this.applyForm.value.street, 
      city: this.applyForm.value.city, 
      county: this.applyForm.value.county, 
      state: this.applyForm.value.state, 
      country: this.applyForm.value.country, 
      postalCode: this.applyForm.value.postalCode, 
      email: this.applyForm.value.email, 
      sendByEmail: !!this.applyForm.value.sendByEmail 
    }

    this.sendRequest.emit(request);
  }
}
