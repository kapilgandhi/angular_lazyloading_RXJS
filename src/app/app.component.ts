import { Component } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title : any = 'Angular App ';

 constructor(public _subject: SubjectService) {
  this._subject.username.subscribe(value => {
    this.title = value;
  });
}
}
