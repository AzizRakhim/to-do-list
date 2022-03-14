const elSubmitBtn = document.querySelector("#submitBtn");
const elOrderedList = document.querySelector(".ordered-list");
const elInput = document.querySelector("#to-do-list");
const elForm = document.querySelector("form");
const elAllBtn = document.querySelector("#allBtn");
const elCompleteBtn = document.querySelector("#completeBtn");
const elIncompleteBtn = document.querySelector("#incompleteBtn");

// CREATING NEW ELMENENTS WHEN ADD BUTTON CLICKED

elForm.addEventListener("submit", addItem);

function addItem(e){
  e.preventDefault();

  let elNewItem = elInput.value;

  let elItem = document.createElement("li");
  elItem.className = "ordered-list-item";

  let elTextBtn = document.createElement("button");
  elTextBtn.className = "item-btn";
  elTextBtn.appendChild(document.createTextNode(elNewItem));

  let elX = document.createElement("button");
  elX.className = "x d-flex align-items-center justify-content-center";
  
  let elIcon = document.createElement("i");
  elIcon.className = "fa fa-times";

  elX.appendChild(elIcon);

  elItem.appendChild(elTextBtn);
  elItem.appendChild(elX);

  elOrderedList.appendChild(elItem);

  elInput.value = "";

  // CHANGING THE ICON FROM X TO CLICKED

  let elCount = 0;

  elTextBtn.addEventListener("click", function() {
    if(elCount == 0){
      elIcon.className = "fa fa-check";
      elCount++;
    } else{
      elIcon.className = "fa fa-times";
      elCount--;
    }
  });

  // FILTERING COMPLETE THINGS

  elCompleteBtn.addEventListener("click", function() {
    for(let i = 0; i < elOrderedList.clientHeight; i++){
      if(elIcon.className != "fa fa-check"){
        elItem.style.display = "none";
      } else{
        elItem.style.display = "flex";
      }
    }
  });

  // FILTERING INCOMPLETE THINGS

  elIncompleteBtn.addEventListener("click", function() {
    for(let i = 0; i < elOrderedList.clientHeight; i++){
      if(elIcon.className != "fa fa-times"){
        elItem.style.display = "none";
      } else{
        elItem.style.display = "flex";
      }
    }
  });

  // FILTERING ALL THINGS

  elAllBtn.addEventListener("click", function() {
    for(let i = 0; i < elOrderedList.clientHeight; i++){
      elItem.style.display = "flex";
    }
  });

  // REMOVING THINGS

  elX.addEventListener("click", function() {
    elItem.remove();
  });
}

const elFilter = document.querySelector("#filter");

elFilter.addEventListener("keyup", filterItems);

function filterItems(e) {
  let text = e.target.value.toLowerCase();

  let items = elOrderedList.getElementsByTagName("li");

  for(let i = 0; i < Array.from(items).length; i++){
    let itemName = items[i].firstElementChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      items[i].className = "ordered-list-item";
    } else {
      items[i].className = "ordered-list-item d-none";
    }
  }
}


