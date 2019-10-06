import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-uploadimg',
  templateUrl: './uploadimg.component.html',
  styleUrls: ['./uploadimg.component.scss']
})
export class UploadimgComponent implements OnInit {

  constructor(private router: Router, private afStorage: AngularFireStorage) { }

  upload(event) {
    this.afStorage.upload('/imglocation/to/this-path', event.target.files[0]);
  }
  ngOnInit() {
  }

}
