import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-crexpert',
  templateUrl: './crexpert.component.html',
  styleUrls: ['./crexpert.component.scss']
})
export class CrexpertComponent implements OnInit {
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {}
  addexpert(data: NgForm) {
       this.db.list('/Expert').push(data.value);
  }

}
