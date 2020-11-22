import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// to do:
// interface for incoming collection
// asssure local storage is functional
// get messages color coded


interface FirestoreRec { name: string; message: string; timestamp: any; color: string; };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  items: any[];
  constructor(private db: AngularFirestore) {
  }
  async ngOnInit() {
    this.db.collection('Chats', ref => ref.orderBy('timestamp')).valueChanges().subscribe(res => {
      this.items = res;
    });
  }


  public localStorage = { name: 'John', color: 'blue' };
  userMessage: string;
  name: string;
  title = 'chatApp';

  gotResult(result) {
    this.localStorage.color = result;
  }


  submitMessage() {
    let dbDocument: FirestoreRec = {
      name: this.localStorage.name,
      message: this.userMessage.valueOf(),
      timestamp: new Date(),
      color: this.localStorage.color
    }
    this.db.collection('Chats').add({
      dbDocument
    });
    this.userMessage = '';
  }

  changeName() {
    this.localStorage.name = this.name;
  }
}


