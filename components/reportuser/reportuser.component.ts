import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {FirebaseService} from '../../service/firebase-service.service';

@Component({
  selector: 'app-reportuser',
  templateUrl: './reportuser.component.html',
  styleUrls: ['./reportuser.component.scss']
})
export class ReportuserComponent implements OnInit {
  User: any[];

  constructor(private router: Router, private auth: AuthService, db: AngularFireDatabase, private firebaseService: FirebaseService) { }

  ngOnInit() {this.firebaseService.getuserList().subscribe(items => {
    this.User = items;
    });
  }
  deluser(data) {
    this.firebaseService.removeuser(data.key);
    }

}
