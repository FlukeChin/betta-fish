import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList: AngularFireList<any>;
  wikis: any[];

  constructor(private router: Router, private auth: AuthService, db: AngularFireDatabase) {
    this.userList = db.list('wikis');
  }

  ngOnInit() {this.userList.snapshotChanges().map(actions => {
    return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
    this.wikis = items;
    });
  }
  editWiki(data) {
    this.router.navigate([`/editWiki/${data.key}`]);
    }

  delWiki(data) {
    this.userList.remove(data.key);
    }

}

