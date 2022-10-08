import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  public summaryData:any | undefined;

  constructor(private coreService:CoreService) { 
  /* Listen the Radio button change observable, any radio button selection value will be update summary in UI */
  this.coreService.getSummary().subscribe(response => {
      if(response){
        this.summaryData = response;
      }
    })
  }

  ngOnInit(): void {
  }

}
