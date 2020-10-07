class DataService {
  constructor() { }
  data = [
    {
      name: "Nate",
      gender: "Male",
      address: "123 N St.",
      age: 21,
      phoneNumber: "123 345 7891"
    },
    {
      name: "Natalie",
      gender: "Female",
      address: "223 S St.",
      age: 20,
      phoneNumber: "234 343 3234"
    },
    {
      name: "Nathaniel",
      gender: "Male",
      address: "900 E St.",
      age: 22,
      phoneNumber: "223 355 9009"
    }
  ]
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

// let DS = new DataService();
// console.log(DS.getData());
// console.log(DS.getData(2));