import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {FirebaseService} from '../../service/firebase-service.service';

@Component({
  selector: 'app-reportexpert',
  templateUrl: './reportexpert.component.html',
  styleUrls: ['./reportexpert.component.scss']
})
export class ReportexpertComponent implements OnInit {

  Expert: any[];

  constructor(private router: Router, private auth: AuthService, db: AngularFireDatabase, private firebaseService: FirebaseService) {
  }
  ngOnInit() {
    this.firebaseService.getexpertList().subscribe(items => {
    this.Expert = items;
    });
  }
  delexpert(data) {
    this.firebaseService.removeexpert(data.key);
    }

}
