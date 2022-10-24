const PROJECT_ID = "kstbebtk";
const DATASET = "production";

// -------------------------------------------------------
// Fetch Headers
// -------------------------------------------------------

// get all header tags

const serviceHeader = document.querySelector("header.services-header");
const aboutHeader = document.querySelector("header.about-section-header");
const platformHeader = document.querySelector("header.platform-header");
const getStartedHeader = document.querySelector("header.get-started-header");
const milestonesHeader = document.querySelector("header.milestones-header");
const testimonialsHeader = document.querySelector("header.testimonials-header");
const blogHeader = document.querySelector("header.blog-section-header");
const contactHeader = document.querySelector("header.contact-section-header");

const headersArray = [
  {
    headerTitle: serviceHeader,
    headerSlug: "services-section",
  },
  {
    headerTitle: aboutHeader,
    headerSlug: "about-section",
  },
  {
    headerTitle: platformHeader,
    headerSlug: "platforms-section",
  },
  {
    headerTitle: getStartedHeader,
    headerSlug: "get-started-section",
  },
  {
    headerTitle: milestonesHeader,
    headerSlug: "milestones-section",
  },
  {
    headerTitle: testimonialsHeader,
    headerSlug: "testimonials-section",
  },
  {
    headerTitle: blogHeader,
    headerSlug: "blog-section",
  },
  {
    headerTitle: contactHeader,
    headerSlug: "contact-section",
  },
];

// funtion to fetch each header's content

const fetchHeader = (sectionHeader, sectionSlug) => {
  // selection each header with their slugs

  let sectionHeaderQuery = encodeURIComponent(
    `*[_type == "header" && slug.current == "${sectionSlug}"]`
  );
  let sectionHeaderUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${sectionHeaderQuery}`;

  fetch(sectionHeaderUrl)
    .then((res) => res.json())
    .then(({ result }) => {
      // get the heading and the subheading
      let { mainheading, subheading } = result[0];

      // append then with template strings to the sectionHeader
      sectionHeader.innerHTML = `
      <h1>${mainheading}</h1>
      <p>${subheading}</p>
      `;
    })
    .catch((err) => console.error(err));
};

headersArray.forEach((header) => {
  let { headerTitle, headerSlug } = header;
  fetchHeader(headerTitle, headerSlug);
});

// -------------------------------------------------------
// Fetch services
// -------------------------------------------------------

const servicesQuery = encodeURIComponent('*[_type == "service"]');
const servicesUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${servicesQuery}`;

// tags
const servicesContainer = document.querySelector(".services-boxes");

// initial services request
fetch(servicesUrl)
  .then((res) => res.json())
  .then(({ result }) => {
    result.forEach((review) => {
      // get all the fields
      let { title, icon, description, slug } = review;

      // define an empty icon URL
      let iconUrl;

      // create an HTML Element and assign it a class
      let serviceCard = document.createElement("div");
      serviceCard.setAttribute("class", `service-box ${slug.current}`);

      // preparing for the icons request
      // get the icon id => "_ref"
      const iconId = icon.asset._ref;

      // create a query for the icon
      const iconQuery = encodeURIComponent(`*[_id == "${iconId}"]`);

      // fetch individial icons
      fetch(
        `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${iconQuery}`
      )
        .then((res) => res.json())
        .then((result) => {
          // get the url from each icons
          const { url } = result.result[0];

          // assign the url to the empty defined variable
          iconUrl = url;

          // put HTML in the service card via template string
          serviceCard.innerHTML = `
            <div class="icon">
              <img src="${iconUrl}" alt="graduation" />
            </div>
            <div class="texts">
              <h4>${title}</h4>
              <p>${description}</p>
            </div>
            `;
        })
        .catch((err) => console.error(err));

      // append the service card to the cervice container
      servicesContainer.appendChild(serviceCard);
    });
  })
  .catch((err) => console.error(err));

// ----------------------------------------------------------
// GET MEDIAS {IMAGES}
// ----------------------------------------------------------

const aboutImageQuery = encodeURIComponent('*[_type == "images"]');
const aboutImageUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${aboutImageQuery}`;
const aboutImageTag = document.querySelector(
  ".about-section .contents .left .main-image img"
);

// Initial request to get the document

fetch(aboutImageUrl)
  .then((res) => res.json())
  .then(({ result }) => {
    result.forEach((img) => {
      // get the image and the alt-text
      const { alttext, image } = img;

      // make a new request for the image id => "_ref"
      // select the image id => "_ref"
      let imgId = image.asset._ref;

      // create a query for the image using the image id = "_ref"
      let imgQuery = encodeURIComponent(`*[_id == "${imgId}"]`);

      // fetch the image itself & grab the url to the image
      fetch(
        `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${imgQuery}`
      )
        .then((res) => res.json())
        .then((result) => {
          const { url } = result.result[0];
          aboutImageTag.setAttribute("src", url);
          aboutImageTag.setAttribute("alt", alttext);
        })
        .catch((err) => console.error(err));
    });
  })
  .catch((err) => console.error(err));
