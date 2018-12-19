import { Component ,OnInit,Input} from '@angular/core';
import { FormDataService } from './data/formdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app1';
  @Input() formData;
  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.formData = this.formDataService.getFormData();
      console.log(this.title + ' loaded!');
  }

}
