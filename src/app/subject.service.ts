import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable()
export class SubjectService {
  public username = new Rx.Subject();
}
