//create Data Service and call createRow for each piece of data
const addDataRows = () => {
  let DS = new DataService();
  //test create Row call
  //createRow(document.getElementById("rows"), { name: "Nathan", gender: "Male", address: "223 W St.", age: 19, phoneNumber: "234 343 3521" });
  DS.getData().forEach(element => {
    createRow(document.getElementById("rows"), element);
  });
};

//takes parent element and object and appends in table format to html
const createRow = ((parentElem, rowData) => {
  let row = document.createElement("tr");

  for (let key in rowData) {
    let col = document.createElement("td");
    let textnode = document.createTextNode(rowData[key]);
    col.appendChild(textnode);
    row.appendChild(col);
  }
  parentElem.appendChild(row);
});

