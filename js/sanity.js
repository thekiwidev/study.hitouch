const PROJECT_ID = "kstbebtk";
const DATASET = "production";

// let QUERY = encodeURIComponent('*[_type == "animal"]');

// Compose the URL for your project's endpoint and add the query
// let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// fetch the content
// fetch(URL)
//   .then((res) => res.json())
//   .then(({ result }) => {
//     // get the list element, and the first item
//     // let list = document.querySelector("ul");
//     // let firstListItem = document.querySelector("ul li");

//     console.log(result);

//     // if (result.length > 0) {
//     //   // remove the placeholder content
//     //   list.removeChild(firstListItem);

//     //   result.forEach((animal) => {
//     //     // create a list element for each animal
//     //     let listItem = document.createElement("li");

//     //     // add the animal name as the text content
//     //     listItem.textContent = animal?.name;

//     //     // add the item to the list
//     //     list.appendChild(listItem);
//     //   });
//     //   let pre = document.querySelector("pre");
//     //   // add the raw data to the preformatted element
//     //   pre.textContent = JSON.stringify(result, null, 2);
//     // }
//   })
//   .catch((err) => console.error(err));

// -------------------------------------------------------
// Fetch Testimonies
// -------------------------------------------------------

// const testimonyQuery = encodeURIComponent('*[_type == "testimony"]');
// const testimoniesUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${testimonyQuery}`;

// // tags
// const testimoniesContainer = document.querySelector(
//   ".glide__slides.testimonies"
// );

// fetch(testimoniesUrl)
//   .then((res) => res.json())
//   .then(({ result }) => {
//     result.forEach((review) => {
//       // select all the values needed
//       const { name, testimony, poster, location, service } = review;

//       // create a li with the class of "glide__slide"
//       let testimonySlide = document.createElement("li");
//       testimonySlide.setAttribute("class", "glide__slide");

//       // append the testimony cotent
//       testimonySlide.innerHTML = `
//         <div class="testimony">
//           <div class="testimony-text">
//             <img
//               src="./assets/icons/quote-left.png"
//               alt="quote-open"
//             />
//             <p>
//               ${testimony}
//             </p>
//             <img
//               src="./assets/icons/quote-right.png"
//               alt="quote-close"
//               class="quote-close"
//             />
//           </div>
//           <div class="client-deatails">
//             <div class="profile-image">
//               <img src="./assets/images/me-min.png" alt="student" />
//             </div>
//             <h4>${name}</h4>
//             <p class="service-rendered">${service}</p>
//             <p class="location">${location}</p>
//           </div>
//         </div>
//       `;

//       console.log(testimonySlide);
//       testimoniesContainer.querySelectorAll("li").forEach((li) => {
//         console.log(li);
//       });
//     });
//   })
//   .catch((err) => console.error(err));

// -------------------------------------------------------
// Fetch services
// -------------------------------------------------------

const servicesQuery = encodeURIComponent('*[_type == "service"]');
const servicesUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${servicesQuery}`;

// tags
const servicesContainer = document.querySelector(".services-boxes");

fetch(servicesUrl)
  .then((res) => res.json())
  .then(({ result }) => {
    result.forEach((review) => {
      let { title, icon, description, url, slug } = review;

      // create a div with the class of "service-box"
      let serviceCard = document.createElement("div");
      serviceCard.setAttribute("class", `service-box ${slug.current}`);

      serviceCard.innerHTML = `
      <div class="icon">
        <img src="./assets/icons/graduation.png" alt="graduation" />
      </div>
      <div class="texts">
        <h4>${title}</h4>
        <p>${description}</p>
      </div>
      `;

      servicesContainer.appendChild(serviceCard);
      console.log(slug.current);
    });
  })
  .catch((err) => console.error(err));
