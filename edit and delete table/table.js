let firstNameInput = document.getElementById("name");
let lastNameInput = document.getElementById("lastName");
let submitbutton=document.getElementById("btn");

let index = 0;
let dataArray = [];
let tbody = document.getElementById("tbody");
function getData() {
  let name = firstNameInput.value;
  let family = lastNameInput.value;
  addToArray(name, family);
  console.log(dataArray);
  //   addToArray(name, family);
}
function addToArray(dataName, dataLastName) {
  let data = {
    firstName: dataName,
    lastName: dataLastName,
    id: createIndex(),
  };
  dataArray.push(data);
  creatRow();
}
function createIndex() {
  index++;
  return index;
}
function creatRow() {
  tbody.innerHTML = "";
  for (let index = 0; index < dataArray.length; index++) {
    let row = tbody.insertRow(index);
    creatColume(row, index);
  }
}
function creatColume(row, rowNumber) {
  // console.log(rowNumber);
  let data = dataArray[rowNumber];
  for (let index = 0; index < 4; index++) {
    let cell = row.insertCell(index);
    if (index == 0) {
      cell.innerText = rowNumber + 1;
    } else if (index == 1) {
      cell.innerText = data.firstName;
    } else if (index == 2) {
      cell.innerText = data.lastName;
    } else if (index == 3) {
      let del=document.createElement("button");
      del.innerText="del";
      del.onclick=()=>{deleteRow(row, data.id)}
      cell.appendChild(del);
      let edit=document.createElement("button");
      edit.innerText="edit";
      edit.onclick=()=>{editRow(data.id)}
      cell.appendChild(edit);
      // cell.innerHTML = `
      // <button type="button" class="btn btn-danger mx-2" onclick="deleteRow(${row}) ">
      //   <i class="material-icons" style="font-size: 18px" >delete</i>
      // </button>
      // <button type="button" class="btn btn-primary bg-succes">
      //   <i class="material-icons" style="font-size: 18px">edit</i>
      // </button>`;
    }
  }
}
 function deleteRow(row,id) {
    // let rowparent=row.parentNode;
    // console.log(row);
    // rowparent.removeChild(row);
    let index=findIndexById(id);
    dataArray.splice(index,1);
    creatRow();
 }
  function findIndexById(id){
    let index=-1;
     dataArray.forEach((element,i)=>{
      console.log(id+" "+element.id);
      console.log(id+"IM Here "+element.id);

      if (element.id==id){
        index= i;
     }
       });
       return index;
  }
  function editRow(id){
    let index=findIndexById(id);
    let data=dataArray[index];
    console.log(index);
    firstNameInput.value=data.firstName;
    lastNameInput.value=data.lastName;
    submitbutton.value="edit";
    submitbutton.onclick=()=>{
      editdata(index);
    }
  }

  function editdata(index) {
    let fn=firstNameInput.value;
    let ln=lastNameInput.value;
    dataArray[index].firstName=fn;
    dataArray[index].lastName=ln;
    creatRow();
    submitbutton.value="submit";
    submitbutton.onclick=()=>{
      getData(index);
    }
  }


