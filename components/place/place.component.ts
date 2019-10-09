import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  constructor(private db: AngularFirestore) { }
  ngOnInit() {
    this.db.collection('Expert').valueChanges().subscribe(val => console.log(val));
  }
  addplace(data: NgForm) {
    this.db.collection('/Events').add(data.value);
}
}
