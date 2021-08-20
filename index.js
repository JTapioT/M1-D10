/* 
DOM 
31) Get element with ID "container" from the page
32) Get every "td" from the page
33) Create a cycle that prints the text inside every td of the page
34) Write a function to change the heading of the page
35) Write a function to add an extra row to the table
36) Write a function to add the class "test" to each row in the table
37) Write a function to add a red background to every link in the page
38) Console log "Page loaded" when the page is correctly loaded
39) Write a function to add new items to a UL
40) Write a function to empty a list

EXTRA
41) Add an eventListener to alert when the mouse is over a link, displaying the URL
42) Add a button to hide every image on the page
43) Add a button to hide and show the table from the page
44) Write a function to sum every number inside the TD (if the content is numeric)
45) Delete the last letter from the title each time the user clicks on it
46) Change a single TD background color when the user clicks on it
47) Add a button DELETE, on click it should delete a random TD from the page
48) Add a pink border to a cell when the mouse is over it
49) Write a function to add a table with 4 rows and 3 columns programmatically
50) Write a function to remove the table from the page

*/


// Ex 31:
let containerEl = document.getElementById("container");



// Ex 32:
let everyTdElements = document.getElementsByTagName("td");
console.log(everyTdElements);



// Ex 33:
for(let i=0; i < everyTdElements.length; i++) {
  console.log(everyTdElements[i].innerText);
}



// Ex 34:
let changeHeader = function(headerText) {
  // Select h1 element:
  let headerElement = document.querySelector("h1");
  headerElement.innerText = headerText;
}
changeHeader("Header has been changed.");



// Ex 35:
let addRowToTable = function() {
  // Get <table> element with class "tableContainer"
  // Returns HTML collection, hence select the first and only one from array:
  let tableElement = document.getElementsByClassName("tableContainer")[0];

  // Create new <tr> element.
  let newTrElement = document.createElement("tr");

  tableElement.appendChild(newTrElement);
}
addRowToTable();



// Ex 36:
let addClassToTableRows = function() {
  // Select <tr> elements from table - Returns an array:
  let trElements = document.getElementsByTagName("tr");
  
  // Loop through, add class to every <tr> element:
  for(let tr of trElements) {
    tr.classList.add("test");
  }
}
addClassToTableRows();



// Ex 37: 
let addRedLinkBackground = function() {
  // Get all <a> elements - Returns an array:
  let linkElements = document.querySelectorAll("a");
  
  // Loop through <a> elements - add red background:
  for(link of linkElements) {
    link.style.background = "red";
  }
}
addRedLinkBackground();



// WHAT IS THE BEST PRACTICE? - Add all the function calls inside?
// Ex 38:
window.onload = function() {
  console.log("Page successfully loaded!");
}



// Ex 39:
let addLiElementsToUl = function(amount, textValues) {
  // Get <ul> element:
  let ulElement = document.querySelector(".container ul");

  // Amount => How many <li> elements
  // textValues, array of strings to include per <li> element?
  
  for(let i=0; i < amount; i++) {
    let newLiElement = document.createElement("li");

    newLiElement.innerText = textValues[i];

    ulElement.appendChild(newLiElement);
  }
}
//addLiElementsToUl(1, ["New list item added once"]);
addLiElementsToUl(3, ["new list item added once", "new list item added twice", "new list item added three times"]);



// Ex 40:
let removeLiElementsFromUl = function() {
  // Create a button:
  let removeListButton = document.createElement("button");
  removeListButton.innerText = "Remove list items";
  removeListButton.style.marginTop = "1rem";

  // Get the element with class 'container'
  let listContainer = document.querySelector(".container");
  listContainer.after(removeListButton);

  removeListButton.onclick = function() {
    // Get the <ul> element:
    let ulElement = document.querySelector(".container ul");
    // Remove all children:
    // Is this quick 'n' dirty way? - not the best practice?
    ulElement.innerHTML = "";
  }

}
removeLiElementsFromUl();


// EXTRA EXTRA EXTRA EXTRA

// Ex 41:
let alertWhenMouseOverLink = function() {
  // Get the <a> elements - returns an array:
  let linkElements = document.querySelectorAll("a");

  // Loop through <a> elements - add function to run for event 'onmouseover':
  for (link of linkElements) {
    link.onmouseover = function() {
      alert(link.href)
    }
  }

}
alertWhenMouseOverLink();



// Ex 42:
let hideImages = function() {
  // Create a button element:
  let hideImagesBtn = document.createElement("button");
  // Add text to button:
  hideImagesBtn.innerText = "Hide table images!";
  // Add class to button:
  hideImagesBtn.classList.add("hideImgBtn");
  // Add some Guy Fieri's flavortown to button:
  hideImagesBtn.style.margin = "2rem 0";
  hideImagesBtn.style.padding = "1rem 1rem";
  hideImagesBtn.style.background = "red";
  hideImagesBtn.style.cursor = "pointer";

  // Out of curiosity - add button after table element
  // Get <table> element:
  let tableElement = document.querySelector(".tableContainer");

  // element.after() - quite self-explanatory ?
  tableElement.after(hideImagesBtn);

  // Add eventlistener to button

  // Variable which holds boolean value if images are hidden or not.
  let isImagesHidden = false;
  // Function:
  let hideImages = function() {
    // Get the <img> elements - returns an array:
    let imgElements = document.getElementsByTagName("img");

    if(isImagesHidden === false) {
      // Loop through - set visibility to 'hidden'
      for(image of imgElements) {
        image.style.visibility = "hidden";
      }
      isImagesHidden = true;
    } else {
      // Loop through - set visibility to 'hidden'
      for (image of imgElements) {
        image.style.visibility = "visible";
      }
      isImagesHidden = false;
    }
  }

  // Add event listener to button:
  hideImagesBtn.onclick = hideImages;
}

hideImages();



// Ex 43:
let hideTable = function() {
  // Create a button:
  let hideTableBtn = document.createElement("button");
  // Add text:
  hideTableBtn.innerText = "Hide Table!";
  // Add class to button
  hideTableBtn.classList.add("hideTableBtn");
  // Add CSS to button:
  hideTableBtn.style.margin = "2rem 0";
  hideTableBtn.style.padding = "1rem 2rem";
  hideTableBtn.style.marginLeft = "1rem";
  hideTableBtn.style.border = "2px dotted red";
  hideTableBtn.style.background = "white";
  hideTableBtn.style.cursor = "pointer";

  // Insert button after "hide table images" button:
  let hideImgBtn = document.querySelector(".hideImgBtn");
  hideImgBtn.after(hideTableBtn);

  
  // Add function to run when onclick event:
  let isTableHidden = false;
  hideTableBtn.onclick = function () {
    // Get table element:
    let tableElement = document.querySelector(".tableContainer");
    // Since separately table images can be set to visible
    // Get the table images:
    let imgElements = document.getElementsByTagName("img");
    // Also accordingly set table image visibility:

    if (!isTableHidden) {
      for(img of imgElements) {
        img.style.visibility = "hidden";
      }
      tableElement.style.visibility = "hidden";
      isTableHidden = true;
    } else {
      for (img of imgElements) {
        img.style.visibility = "visible";
      }
      tableElement.style.visibility = "visible";
      isTableHidden = false;
    }
  };
}

hideTable();



// Ex 44:
let deleteLastCharFromHeader = function() {
  // Select the h1 element:
  let h1Element = document.querySelector("h1");
  // Add cursor pointer style to header:
  h1Element.style.cursor = "pointer";
  
  h1Element.onclick = function() {
    h1Element.innerText = h1Element.innerText.slice(0,-1);
  }
}

deleteLastCharFromHeader();



// Ex 45:

let changeTdColor = function() {
  // Select <td> elements:
  let tableTds = document.querySelectorAll("td");

  for(td of tableTds) {
    td.style.cursor = "pointer";
    td.onclick = function(event) {
      // Some random color generator from Stack OverFlow:
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      // Add background color:
      event.target.style.background = color;
    }
  }
  
}

changeTdColor();



// Ex 46:
let randomTdDeletion = function() {
  // Create a button:
  let deleteBtn = document.createElement("button");
  // Add innerText
  deleteBtn.innerText = "DELETE";
  // Add class
  deleteBtn.classList.add("deleteBtn");
  // Add CSS to button
  deleteBtn.style.fontWeight = "bold";
  deleteBtn.style.marginLeft = "1rem";
  deleteBtn.style.padding = "1rem 2rem";

  // Get hideTable button element:
  let hideTableBtn = document.querySelector(".hideTableBtn");
  // Insert delete button after the hide table button:
  hideTableBtn.after(deleteBtn);


  // Add event listener to delete button:
  deleteBtn.onclick = function () {
    // Select <td> elements - returns an array:
    let tableTds = document.querySelectorAll("td");

    // Math.floor(Math.random() * table.length) - from 0 to whatever the length.
    // Select one random element from the list
    // use remove() method for that element:
    tableTds[Math.floor(Math.random() * tableTds.length)].remove();
  };
}
randomTdDeletion();



// Ex 47:
let makePinkBorder = function() {
  // Get the table element:
  let tableElement = document.querySelector("tbody");
  // Whatever the table element - change border to pink:
  tableElement.onmouseover = function(event) {
    event.target.style.border = "4px solid pink";
  }
}

makePinkBorder();