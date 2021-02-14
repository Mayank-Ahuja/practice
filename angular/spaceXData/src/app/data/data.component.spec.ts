import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { DataComponent } from './data.component';
import { GetDataService } from '../shared/services/get-data.service';

let getDataService: GetDataService;
let route: ActivatedRoute;

describe('DataComponent', () => {
  it('#loadMore() should increment #sliceIndex value by 10', () => {
    const comp = new DataComponent(getDataService,route);
    expect(comp.sliceIndex).toBe(10, '10 at intial load');
    comp.loadMore();
    expect(comp.sliceIndex).toBe(20, '20 after fist click on load more');
    comp.loadMore();
    expect(comp.sliceIndex).toBe(30, '30 after first click on load more');
  });

  it('#setLoadMoreStatus() should set value of #allowLoadMore to false/true according to data in progragram data array',()=>{
    const comp = new DataComponent(getDataService,route);
    expect(comp.allowLoadMore).toBe(undefined,'since there is no defualt value assigned to #allowLoadMore at initialisation')
    comp.setLoadMoreStatus();
    expect(comp.allowLoadMore).toBe(false,'since #programData is a blank array')
  })
});
