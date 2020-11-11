import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.scss'],
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.reportForm = this.formBuilder.group({
      date: new FormControl('', Validators.required),
      result: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}
  onSubmit(reportForm) {
    //TODO: This is where the submit functionality will go.
    this.reportForm.reset();
  }
}
