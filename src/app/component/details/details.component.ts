import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing/housing.service';
import { HousingLocation } from '../../housinglocation';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  casettaService: HousingService = inject(HousingService);
  casetta: HousingLocation | undefined;

  // const firstName = new FormControl("");
  // const lastName = new FormControl("");
  // const email = new FormControl("");

  // applyForm = new FormGroup({
  //   firstName,
  //   lastName,
  //   email
  // })

  applyForm = new FormGroup({
    firstName: new FormControl(''), // stringa vuota - valore di default
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.casettaService.getHousingLocationById(housingLocationId).then(casettina => {
      if (casettina) {
        this.casetta = casettina;
      }
    })
  }

  submitApplication() {
    // this.casettaService.submitApplication(
    //   this.applyForm.value.firstName ?? '',
    //   this.applyForm.value.lastName ?? '',
    //   this.applyForm.value.email ?? '',
    // );
    const firstName = this.applyForm.value.firstName ?? '';
    const lastName = this.applyForm.value.lastName ?? '';
    const email = this.applyForm.value.email ?? '';
    this.casettaService.submitApplication(firstName, lastName, email);
  }

}

// {
//   route: ActivatedRoute = inject(ActivatedRoute); // inject dice ad angular: prendi questa roba -libreria,servizi,gestioni- e mettilo qua
//   housingLocationId = Number(this.route.snapshot.params['id']);
// }
