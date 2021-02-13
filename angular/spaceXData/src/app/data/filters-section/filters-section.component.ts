import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



export interface filterData {
  name: string,
  value: string
}

const launchYear: filterData[] = [
  {name: 'launch_year', value:'2006'},
  {name: 'launch_year', value:'2007'},
  {name: 'launch_year', value:'2008'},
  {name: 'launch_year', value:'2009'},
  {name: 'launch_year', value:'2010'},
  {name: 'launch_year', value:'2011'},
  {name: 'launch_year', value:'2012'},
  {name: 'launch_year', value:'2013'},
  {name: 'launch_year', value:'2014'},
  {name: 'launch_year', value:'2015'},
  {name: 'launch_year', value:'2016'},
  {name: 'launch_year', value:'2017'},
  {name: 'launch_year', value:'2018'},
  {name: 'launch_year', value:'2019'},
  {name: 'launch_year', value:'2020'},
];

const launchSuccess: filterData[] = [
  {name: 'launch_success', value: 'true'},
  {name: 'launch_success', value: 'false'}
]

const landSuccess: filterData[] = [
  {name: 'land_success', value: 'true'},
  {name: 'land_success', value: 'false'}
]

@Component({
  selector: 'app-filters-section',
  templateUrl: './filters-section.component.html',
  styleUrls: ['./filters-section.component.scss']
})

export class FiltersSectionComponent implements OnInit {
  
  private queryParams: object = {};

  launchYearData = launchYear;
  launchSuccessData = launchSuccess;
  landingSuccessData = landSuccess;

  queryParamsValues: object = {launch_year:'',launch_success:'',land_success:''};

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const queryParams = this.route.snapshot.queryParams;
     if(Object.keys(queryParams).length > 0){
      Object.keys(queryParams).map(queryParam=>{
        this.queryParamsValues[queryParam] = queryParams[queryParam];
      })
     }
  }

  setQueryParameters(): void {
    this.router.navigate([],{
      relativeTo: this.route,
      queryParams: this.queryParams,
      queryParamsHandling: 'merge'
    });
  }

  captureFilterValue(event):void {
    this.queryParams[event['name']] = event['value'];
    this.setQueryParameters();
  }

}
