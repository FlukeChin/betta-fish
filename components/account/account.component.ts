import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {FirebaseService} from '../../service/firebase-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
}
)
export class AccountComponent implements OnInit {
  User: any[];

  constructor(private router: Router, private auth: AuthService, db: AngularFireDatabase, private firebaseService: FirebaseService) {

  }

  ngOnInit() {this.firebaseService.getuserList().subscribe(items => {
    this.User = items;
    });
  }
  edituser(data) {
    this.router.navigate([`/edituser/${data.key}`]);

    }

  deluser(data) {
    this.firebaseService.removeuser(data.key);
    }

}
