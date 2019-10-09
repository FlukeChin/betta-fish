import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-uploadimg',
  templateUrl: './uploadimg.component.html',
  styleUrls: ['./uploadimg.component.scss']
})
export class UploadimgComponent implements OnInit {

  constructor(private afs: AngularFirestore) {

   }


  ngOnInit() {
  }

}
