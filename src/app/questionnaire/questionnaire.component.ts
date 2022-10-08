import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Subscription } from 'rxjs';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit, OnDestroy {
  public questionData: any[] | undefined;
  subscription: Subscription;

  constructor(public coreService: CoreService) {
    /* Mocked as API call  and assign response to questionData variable */
    this.subscription = this.coreService.getQuestion().subscribe((response) => {
      this.questionData = response.questions;
    });
  }

  ngOnInit(): void {}

  /* On change of Radio button changes, update the selection into summary observal in Core services */
  onChange(e: MatRadioChange) {
    this.coreService.setSummary(e.value);
  }

  /* Cancel the observable subscribtion component while closing  */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
