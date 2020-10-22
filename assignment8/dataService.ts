export interface Person {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}

export interface Dob {
  date: string;
  age: number
}

export interface ID {
  name: string;
  value: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}


//class for getting and storing data
export class DataService {

  personArray: Person[];
  constructor(personArray: Person[]) {
    this.personArray = personArray;
  }
  //async get data and return object from randomuser.me
  async fetchData() {
    let response = await fetch('https://randomuser.me/api/?results=10');
    try {
      this.personArray = await response.json();
    } catch (err) {
      console.log('Fetch Error :-S', err);
    }
  };
  //getter for list of objects
  getData(numRecords: number | null = null): Person[] | any[] {
    if (!numRecords) {
      return this.personArray;
    }
    else {
      let newArr = [];
      for (let i = 0; i < numRecords; i++) {
        newArr.push(this.personArray[i]);
      }
      return newArr;
    }
  }
}

// testers:
//const DS = new DataService();
//const fetchedData = DS.fetchData();