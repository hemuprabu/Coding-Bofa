import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Questions } from '../models/questions.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private questionSubject = new BehaviorSubject<Questions>({
    id:'',
    question:'',
    answers:[],
    correct_answer:''
  });

  private summaySubject = new BehaviorSubject<any>(null);

  private quesResponseData={
    questions:[
      {
        id:1,
        question:'Select your age',
        answers:['Less than 25','Greater than 25 and Less than 35','Greater than 35'],
        correct_answer:1,
      }
    ]
  };

  setQuestion(data: any):void{
    this.questionSubject.next(data);
  }

  getQuestion():Observable<any>{
    return this.questionSubject.asObservable();
  }

  setSummary(data: any):void{
    this.summaySubject.next(data);
  }

  getSummary():Observable<any>{
    return this.summaySubject.asObservable();
  }


  constructor() { 
    this.setQuestion(this.quesResponseData);

  }
}
