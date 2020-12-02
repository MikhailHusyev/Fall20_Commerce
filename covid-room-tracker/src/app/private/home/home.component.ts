import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  reportForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.reportForm = this.formBuilder.group({
      date: new FormControl('', Validators.required),
      result: new FormControl('', Validators.required),
    });
  }

  displayElement = false;

  ngOnInit() {}
}