//create Data Service and call createRow for each piece of data
async function addDataRows() {
  let DS = new DataService();
  try {
    await DS.fetchData();
    //after awaiting fetch gets and parses odd object into its object
    DS.getData().results.forEach(element => {
      createRow(document.getElementById("rows"), {
        name: element.name.first, gender: element.gender,
        address: element.location.street.number + ' ' + element.location.street.name, age: element.dob.age,
        phoneNumber: element.phone, photo: element.picture.thumbnail
      });
    });

  } catch (err) {
    console.log(err);
  }

};

//takes parent element and object and appends in table format to html
const createRow = ((parentElem, rowData) => {
  let row = document.createElement("tr");

  for (let item in rowData) {
    let textnode = document.createTextNode(rowData[item]);
    let col = document.createElement("td");
    //deals with image differently by creating <img> html tag
    if (item === "photo") {
      let img = document.createElement("img");
      let imgText = rowData[item];
      img.src = imgText;
      col.appendChild(img)
      row.appendChild(col);
      //all other string and int types dealt with and formatted in html
    } else {
      col.appendChild(textnode);
      row.appendChild(col);
    }
  }
  parentElem.appendChild(row);
});

