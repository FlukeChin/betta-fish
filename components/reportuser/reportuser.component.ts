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
  ReportFromUser: any[];

  constructor(private router: Router, private auth: AuthService, db: AngularFireDatabase, private firebaseService: FirebaseService) { }

  ngOnInit() {this.firebaseService.getreportfromuserList().subscribe(items => {
    this.ReportFromUser = items;
    });
  }
  deluser(data) {
    this.firebaseService.removeuser(data.key);
    }

}
