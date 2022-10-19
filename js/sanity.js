const PROJECT_ID = "kstbebtk";
const DATASET = "production";

// -------------------------------------------------------
// Fetch Headers
// -------------------------------------------------------
const headersQuery = encodeURIComponent('*[_type == "header"]');
const headersUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${headersQuery}`;

// get all header tags

const serviceHeader = document.querySelector("header.services-header");
const aboutHeader = document.querySelector("header.special-section-header");
const platformHeader = document.querySelector("header.platform-header");
const getStartedHeader = document.querySelector("header.get-started-header");
const milestonesHeader = document.querySelector("header.milestones-header");
const testimonialsHeader = document.querySelector("header.testimonials-header");
const blogHeader = document.querySelector("header.blog-section-header");
const contactHeader = document.querySelector("header.contact-section-header");

const headersArray = [
  serviceHeader,
  aboutHeader,
  platformHeader,
  getStartedHeader,
  milestonesHeader,
  testimonialsHeader,
  blogHeader,
  contactHeader,
];

// *[_type == "your-document-type" && slugFieldName.current == "your-slug"]

const fetchHeader = (sectionHeader, sectionSlug) => {
  let sectionHeaderQuery = encodeURIComponent(
    '*[_type == "header" && slugFieldName.current == "your-slug"]'
  );
  let sectionHeaderUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${sectionHeaderQuery}`;
};

// fetch(headersUrl)
//   .then((res) => res.json())
//   .then(({ result }) => {
//     result.forEach((header) => {
//       const { slug } = header;

//       console.log(slug.current);
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
    });
  })
  .catch((err) => console.error(err));
