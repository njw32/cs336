import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// to do:
// host on firebase

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

  userMessage: string;
  name: string;
  title = 'chatApp';

  gotResult(result) {
    localStorage.setItem("color", result);
  }


  submitMessage() {
    this.db.collection<FirestoreRec>('Chats').add({
      name: localStorage.getItem("name"),
      message: this.userMessage.valueOf(),
      timestamp: new Date(),
      color: localStorage.getItem("color")
    });
    this.userMessage = '';
  }

  changeName() {
    localStorage.setItem("name", this.name);
  }
}


