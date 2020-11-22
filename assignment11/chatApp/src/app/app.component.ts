import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// to do:
// CSS

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


  public localStorage = { name: 'John', color: '#2889e9' };
  userMessage: string;
  name: string;
  title = 'chatApp';

  gotResult(result) {
    this.localStorage.color = result;
  }


  submitMessage() {
    this.db.collection<FirestoreRec>('Chats').add({
      name: this.localStorage.name,
      message: this.userMessage.valueOf(),
      timestamp: new Date(),
      color: this.localStorage.color
    });
    this.userMessage = '';
  }

  changeName() {
    this.localStorage.name = this.name;
  }
}


