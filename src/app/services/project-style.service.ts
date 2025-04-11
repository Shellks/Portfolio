import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProjectStyleService {
  private classSource = new BehaviorSubject<string>('');
  currentClass$ = this.classSource.asObservable();

  setClass(styleClass: string) {
    this.classSource.next(styleClass);
  }
    constructor() { }
  }
