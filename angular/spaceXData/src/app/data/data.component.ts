import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  showLoader: boolean;

  private queryParamsString: string ='';

  constructor(private getData:GetDataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setLoadMoreStatus();
    /* subscribing to query params which gets triggered on the page load as well as when values are updated due to change in values */
    this.queryParamsSubscription = this.route.queryParams.subscribe(params=>{
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
      this.queryParamsString = queryArray.join('&');
    }
    this.showLoader = true;
    this.getData.getProgramData(this.queryParamsString).subscribe((programs:Array<object>)=>{
      this.programData = programs;
      this.showLoader = false;
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

  flightNumber(item): number{
    return item['flight_number']
  }

}
