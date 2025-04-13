import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Vacancy } from '../interfaces/vacancy';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    if (this.companyId) {
      this.companyService.getCompanyVacancies(this.companyId).subscribe(vacancies => {
        this.vacancies = vacancies;
      });
    }
  }
}
