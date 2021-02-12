import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetDataService } from '../shared/services/get-data.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  programData: Array<object> = [];
  sliceIndex: number = 10;
  allowLoadMore: Boolean;
  queryParamsSubscription: Subscription;

  private queryParams: object = {};
  private queryParamsString: string ='';

  constructor(private getData:GetDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    console.log('query params---- ',this.route.snapshot.queryParams);
    //this.getProgramData();

    this.queryParamsSubscription = this.route.queryParams.subscribe(params=>{
      console.log(params);
      this.getProgramData();
    })
  }
  

  getProgramData(): void {
    const queryParams = this.route.snapshot.queryParams;
    if(Object.keys(queryParams).length == 0){
      this.queryParamsString = '';
    }else{
      
      const queryArray = Object.keys(queryParams).map(item=>{
        return `${item}=${queryParams[item]}`
      });
      console.log(queryArray);
      this.queryParamsString = queryArray.join('&');
      console.log(this.queryParamsString);
    }
    this.getData.getProgramData(this.queryParamsString).subscribe((programs:Array<object>)=>{
      console.log(programs)
      this.programData = programs;
      this.setLoadMoreStatus();
    })
  }

  loadMore(): void {
    this.sliceIndex+=10;
    this.setLoadMoreStatus();
  }

  setLoadMoreStatus(): void{
    if(this.sliceIndex < this.programData.length){
      this.allowLoadMore = true;
    }else{
      this.allowLoadMore = false;
    }
  }

  flightNumber(index,item): number{
    return item['flight_number']
  }

  setLaunchYear():void {
    this.queryParams['launch_year'] = 2014;
    this.setQueryParameters();
  }

  launchSuccess(): void {
    this.queryParams['launch_success'] = true;
    this.setQueryParameters();
  }

  landingSuccess():void {
    this.queryParams['land_success'] = false;
    this.setQueryParameters();
  }


  setQueryParameters(): void {
    this.router.navigate([],{
      relativeTo: this.route,
      queryParams: this.queryParams,
      queryParamsHandling: 'merge'
    });
  }


}
