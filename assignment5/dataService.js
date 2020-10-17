//class for storing data
class DataService {
  constructor() {
    this.data = [];
  }
  // data = [
  //   {
  //     name: "Nate",
  //     gender: "Male",
  //     address: "123 N St.",
  //     age: 21,
  //     phoneNumber: "123 345 7891"
  //   },
  //   {
  //     name: "Natalie",
  //     gender: "Female",
  //     address: "223 S St.",
  //     age: 20,
  //     phoneNumber: "234 343 3234"
  //   },
  //   {
  //     name: "Nathaniel",
  //     gender: "Male",
  //     address: "900 E St.",
  //     age: 22,
  //     phoneNumber: "223 355 9009"
  //   }
  // ]
  fetchData() {
    fetch('https://randomuser.me/api/?results=10')
      .then(
        function (response) {
          if (!response.ok) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function (data) {
            console.log(JSON.stringify(data, undefined, 2));
          });
        })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });

  }
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
let DS = new DataService();
let fetchedData = DS.fetchData();
console.log(fetchedData);
// console.log(DS.getData());
// console.log(DS.getData(2));