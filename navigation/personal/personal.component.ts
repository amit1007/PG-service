import { Component, OnInit, Directive,Input } from '@angular/core';
import { Router } from '@angular/router';

import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formdata.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
  
})
export class PersonalComponent implements OnInit {
  title = 'Please tell us about yourself.';
  personal: Personal;
  form: any;
  
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.personal = this.formDataService.getPersonal();
      console.log('Personal feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setPersonal(this.personal);
      return true;
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['register/work']);
      }
  }
}
