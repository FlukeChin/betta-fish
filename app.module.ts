import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountComponent } from './components/account/account.component';
import { CrexpertComponent } from './components/crexpert/crexpert.component';
import { UserComponent } from './components/user/user.component';
import { ExpertComponent } from './components/expert/expert.component';
import { EditComponent } from './components/edit/edit.component';
import { EditexpertComponent } from './components/editexpert/editexpert.component';
import { PlaceComponent } from './components/place/place.component';
import { AnlysisComponent } from './components/anlysis/anlysis.component';
import { UploadimgComponent } from './components/uploadimg/uploadimg.component';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

// Service
import { FirebaseService } from './service/firebase-service.service';
import { AuthService } from './services/auth.service';
// Guard
import { AuthGuard } from './guards/auth.guard';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { ReportuserComponent } from './components/reportuser/reportuser.component';
import { ReportexpertComponent } from './components/reportexpert/reportexpert.component';
import { from } from 'rxjs';

// Routes
export const router: Routes = [
 { path: '', component: HomeComponent },
 { path: 'login', component: LoginComponent },
 { path: 'signup', component: SignupComponent },
 {path: 'account', component: AccountComponent },
 {path: 'crexpert', component: CrexpertComponent },
 {path: 'user', component: UserComponent },
 {path: 'expert', component: ExpertComponent },
 {path: 'edit', component: EditComponent },
 {path: 'place', component: PlaceComponent },
 {path: 'reportuser', component: ReportuserComponent },
 {path: 'editexpert', component: EditexpertComponent },
 {path: 'analysis', component: AnlysisComponent },
 {path: 'reportexpert', component: ReportexpertComponent },
 {path: 'uploadimg', component: UploadimgComponent },
 {path: 'polocylist', component: PolicyListComponent },
 {path: 'edituser/:id', component: EditComponent},
 {path: 'editexpert/:id', component: EditexpertComponent},
 { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard],
},

];

// Config Firebase
export const firebaseConfig = {
  apiKey: 'AIzaSyBrZz6PzIi4nuB-XfUOW36zRm7UQ6QVdJk',
  authDomain: 'webtest-143b6.firebaseapp.com',
  databaseURL: 'https://webtest-143b6.firebaseio.com',
  projectId: 'webtest-143b6',
  storageBucket: 'webtest-143b6.appspot.com',
  messagingSenderId: '292882832258',
  appId: '1:292882832258:web:8911666a5ef7d9afd5cd9b'
};

@NgModule({
 declarations: [
 AppComponent,
 HomeComponent,
 LoginComponent,
 NavbarComponent,
 ProfileComponent,
 SignupComponent,
 AccountComponent,
 CrexpertComponent,
 UserComponent,
 ExpertComponent,
 EditComponent,
 EditexpertComponent,
 PlaceComponent,
 AnlysisComponent,
 UploadimgComponent,
 PolicyListComponent,
 ReportuserComponent,
 ReportexpertComponent,
 ],
 imports: [
 BrowserModule,
 FormsModule,
 ReactiveFormsModule,
 RouterModule.forRoot(router),
 AngularFireAuthModule,
 AngularFireModule.initializeApp(firebaseConfig),
 AngularFirestoreModule,
 ],
 providers: [AuthService, AngularFireDatabase, AuthGuard, FirebaseService, AngularFireStorage],
 bootstrap: [AppComponent]
})
export class AppModule { }
