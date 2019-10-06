import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  constructor(private db: AngularFirestore) { }
  ngOnInit() {}
  addexpert(data: NgForm) {
       this.db.collection('/Place').add(data.value);
  }

}
