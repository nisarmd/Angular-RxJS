import { Component, OnDestroy, OnInit } from '@angular/core';
import {of, from, Subscription} from 'rxjs'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'rxjs';
  fruits: Subscription = new Subscription;

  tempSub: Subscription = new Subscription;
  
  ngOnInit(): void {
    // Creation Functions
    // of() is a  short hand to creatinh an observable with any avluse passed as params.
    this.fruits = of('Apple', 'Banana', 'Orange').subscribe({
      next: values => console.log(values),
      error: err => console.error(err)
    });

    // from() also creates a observable from any data structure provided, like lists etc
    this.tempSub = from(['A','B']).subscribe({
      next: val => console.log(val)
    });
  }

  ngOnDestroy(): void {
    this.fruits.unsubscribe();
    this.tempSub.unsubscribe();
  }
  
}
