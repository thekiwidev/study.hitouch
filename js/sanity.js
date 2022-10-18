const PROJECT_ID = "kstbebtk";
const DATASET = "production";

// -------------------------------------------------------
// Fetch Headers
// -------------------------------------------------------
const headersQuery = encodeURIComponent('*[_type == "service"]');
const headersUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${headersQuery}`;

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
