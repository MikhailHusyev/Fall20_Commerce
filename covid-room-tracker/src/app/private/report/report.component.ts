import { Component, OnInit } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.scss'],
})
export class ReportComponent implements OnInit {
  constructor() {}
  bsConfig: Partial<BsDatepickerConfig>;

  ngOnInit() {}
}
