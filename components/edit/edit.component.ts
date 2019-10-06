import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import {FirebaseService} from '../../service/firebase-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  user: any = {};
  title: string = 'Add user';
  id;
  router: any;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
    this.getuserByKey(this.id);
    this.title = 'Edit user';

    }

}
adduser(data: NgForm) {
  if (this.id) {
    this.firebaseService.edituser(this.id, data.value).then(this.goToHome);
    } else {
      this.firebaseService.adduser(data.value).then(this.goToHome);

    }
}
getuserByKey(id) {
  this.firebaseService.getuser(id).subscribe(data => {
    this.user = data;
  });
  }
  goToHome = () => {
    this.router.navigate(['/']);
    }
}
