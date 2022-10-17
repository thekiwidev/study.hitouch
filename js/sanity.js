// 7afceb4e - 4e87 - 49ba - bdf5 - 80e361245b55
// import dotenv from "dotenv";

let PROJECT_ID = "kstbebtk";
let DATASET = "production";

let QUERY = encodeURIComponent('*[_type == "animal"]');

// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// fetch the content
fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    // get the list element, and the first item
    // let list = document.querySelector("ul");
    // let firstListItem = document.querySelector("ul li");

    console.log(result);

    // if (result.length > 0) {
    //   // remove the placeholder content
    //   list.removeChild(firstListItem);

    //   result.forEach((animal) => {
    //     // create a list element for each animal
    //     let listItem = document.createElement("li");

    //     // add the animal name as the text content
    //     listItem.textContent = animal?.name;

    //     // add the item to the list
    //     list.appendChild(listItem);
    //   });
    //   let pre = document.querySelector("pre");
    //   // add the raw data to the preformatted element
    //   pre.textContent = JSON.stringify(result, null, 2);
    // }
  })
  .catch((err) => console.error(err));
