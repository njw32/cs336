import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// to do:
// interface for incoming collection
// change valuechanges to subscribe
// write to db
// order messages
// asssure local storage is functional
// get messages color coded

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//interface item { name: string, message: string, timestamp: firebase.Timestamp };
//let FirestoreRec: [item];
export class AppComponent {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('Chats').valueChanges();
  }
  public localStorage =
    {
      name: 'John',
      color: 'blue'
    }
  userMessage: string;
  title = 'chatApp';

  submitMessage() {
    console.log(this.userMessage.valueOf());
    this.userMessage = '';
  }
}


