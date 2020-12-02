import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  reportForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.reportForm = this.formBuilder.group({
      date: new FormControl('', Validators.required),
      result: new FormControl('', Validators.required),
    });
  }

  displayElement;
  ngOnInit() {
    this.contaminationCheck();
  }

  contaminationCheck() {
    let combined =
      environment.apiBaseUrl +
      'api/v1/users/result/' +
      localStorage.getItem('profile');
    this.http.get(combined).subscribe({
      next: (result: { result }) => {
        this.displayElement = result.result;
      },
    });
  }
}
