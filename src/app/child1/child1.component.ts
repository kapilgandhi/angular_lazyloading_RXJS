import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component implements OnInit {

  title: any = "Angular App";

  constructor(public _subject: SubjectService) {
    this._subject.username.subscribe(value => {
      this.title = value;
    });
  }

  ngOnInit(){

  }

  saveChild1(name:any): void {
    this._subject.username.next(name);
  }

}
