//class for getting and storing data
class DataService {
  constructor() {
    this.data = [];
  }
  //async get data and return object from randomuser.me
  async fetchData() {
    let response = await fetch('https://randomuser.me/api/?results=10');
    try {
      this.data = await response.json();
    } catch (err) {
      console.log('Fetch Error :-S', err);
    }
  };
  //getter for list of objects
  getData(numRecords) {
    if (!numRecords) {
      return this.data;
    }
    else {
      let newArr = [];
      for (let i = 0; i < numRecords; i++) {
        newArr.push(this.data[i]);
      }
      return newArr;
    }
  }
}

// testers:
//const DS = new DataService();
//const fetchedData = DS.fetchData();