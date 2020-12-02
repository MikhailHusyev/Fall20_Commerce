import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Report } from '../models/report.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { concat } from 'rxjs';
@Component({
  selector: 'report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.scss'],
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup;
  report: Report;
  color: 'green';
  spinner: boolean = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.reportForm = this.formBuilder.group({
      date: new FormControl('', Validators.required),
      result: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}
  onSubmit(reportForm: Report) {
    reportForm.fk_uid = localStorage.getItem('profile');
    reportForm.fk_oid = 'Commerce Bank';
    this.http
      .post<Report>(
        environment.apiBaseUrl + '/api/v1/reports/report',
        reportForm
      )
      .subscribe((Response) => {
        this.hideLoader();
      });

    this.hideLoader();
    this.reportForm.reset();
  }

  hideLoader() {
    this.spinner = !this.spinner;
  }
}
