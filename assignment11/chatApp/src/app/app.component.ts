import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// to do:
// interface for incoming collection
// write to db
// asssure local storage is functional
// get messages color coded


interface item { name: string, message: string, timestamp: any };
//let FirestoreRec: [item];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  items: any[];
  constructor(firestore: AngularFirestore) {
    firestore.collection('Chats', ref => ref.orderBy('timestamp')).valueChanges().subscribe(res => {
      this.items = res;
    })
  }
  public localStorage = { name: 'John', color: 'blue' };
  userMessage: string;
  title = 'chatApp';

  submitMessage() {
    console.log(this.userMessage.valueOf());
    this.userMessage = '';
  }
}


