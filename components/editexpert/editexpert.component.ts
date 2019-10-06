import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import {FirebaseService} from '../../service/firebase-service.service';

@Component({
  selector: 'app-editexpert',
  templateUrl: './editexpert.component.html',
  styleUrls: ['./editexpert.component.scss']
})
export class EditexpertComponent implements OnInit {
  expert: any = {};
  title: string = 'Add expert';
  id;
  router: any;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
    this.getexpertByKey(this.id);
    this.title = 'Edit expert';

    }

}
addexpert(data: NgForm) {
  if (this.id) {
    this.firebaseService.editexpert(this.id, data.value).then(this.goToHome);
    } else {
      this.firebaseService.addexpert(data.value).then(this.goToHome);

    }
}
getexpertByKey(id) {
  this.firebaseService.getexpert(id).subscribe(data => {
    this.expert = data;
  });
  }
  goToHome = () => {
    this.router.navigate(['/']);
    }
}
