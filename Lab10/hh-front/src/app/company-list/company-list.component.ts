import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../interfaces/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }
}
