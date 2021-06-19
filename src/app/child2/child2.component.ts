import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],

})
export class Child2Component implements OnInit {

  title : any = "Angular App";

  constructor(public _subject: SubjectService) {
    this._subject.username.subscribe(value => {
      this.title = value;
    });
  }


  ngOnInit(): void {
  }

  saveChild2(name:any): void {
    this._subject.username.next(name);
  }

}
