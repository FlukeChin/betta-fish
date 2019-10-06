import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userList: AngularFireList<any>; // User
  expertList: AngularFireList<any>; // Expert

constructor(private db: AngularFireDatabase) {
this.expertList = db.list('Expert'); // Expert
this.userList = db.list('User'); // User
}
getexpertList(): Observable<any[]> {
return this.expertList.snapshotChanges().map(actions => {
return actions.map(action => ({ key: action.key, value: action.payload.val() }));
});
}
getexpert(id): Observable<any> {
  return this.db.object('Expert/' + id).snapshotChanges().map(res => {
  return res.payload.val();
  });
  }
removeexpert(id): void {
this.expertList.remove(id);
}
addexpert(data) {
  return this.expertList.push(data);
  }
  editexpert(id, data) {
  return this.expertList.update(id, data);
  }

// User

getuserList(): Observable<any[]> {
return this.userList.snapshotChanges().map(actions => {
return actions.map(action => ({ key: action.key, value: action.payload.val() }));
});
}
getuser(id): Observable<any> {
  return this.db.object('User/' + id).snapshotChanges().map(res => {
  return res.payload.val();
  });
  }
removeuser(id): void {
this.userList.remove(id);
}
adduser(data) {
  return this.userList.push(data);
  }
  edituser(id, data) {
  return this.userList.update(id, data);
  }



}

