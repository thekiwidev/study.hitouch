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
const studentsIntroductionHeader = document.querySelector(
  "header.introduction-section-header"
);
const studentsWhyUsHeader = document.querySelector(
  "header.why-us-section-header"
);
const studentsHowItWorksHeader = document.querySelector(
  "header.how-it-works-section-header"
);

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
  {
    headerTitle: studentsIntroductionHeader,
    headerSlug: "introduction-section",
  },
  {
    headerTitle: studentsWhyUsHeader,
    headerSlug: "why-us-section",
  },
  {
    headerTitle: studentsHowItWorksHeader,
    headerSlug: "how-it-works-section",
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
     ${subheading ? `<p>${subheading}</p>` : ""}
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

// the truncate function
const truncate = (string, number) => {
  const newText = string.substring(0, number);
  return newText;
};

// initial services request
fetch(servicesUrl)
  .then((res) => res.json())
  .then(({ result }) => {
    result.forEach((review) => {
      // get all the fields
      let { title, icon, description, slug } = review;
      // let truncatedDescription = truncate(description, 200);
      // console.log(description, truncatedDescription);

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
              <p>${truncate(description, 120)}...</p>
            </div>
            `;
        })
        .catch((err) => console.error(err));

      // append the service card to the cervice container
      servicesContainer.appendChild(serviceCard);
    });
  })
  .catch((err) => console.error(err));

// ============================================================
// GET MEDIAS {IMAGES}
// ============================================================

const aboutImageQuery = encodeURIComponent(
  '*[_type == "images" && slug.current == "about-section"]'
);
const aboutImageUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${aboutImageQuery}`;
const aboutImageTag = document.querySelector(
  ".about-section .contents .left .main-image img"
);

// ============================================================
// Fetch Homepage About Section Image
// ============================================================

// ------------------------------------------------------------
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

// ============================================================
// STUDENTS PAGE CONTENTS
// ============================================================

// ------------------------------------------------------------
// Fetch Students Introduction Section Image

const studenstIntroductionSectionImageQuery = encodeURIComponent(
  '*[_type == "images" && slug.current == "introduction-section-from-students-page"]'
);
const studenstIntroductionSectionImageUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${studenstIntroductionSectionImageQuery}`;
const studenstIntroductionSectionImageTag = document.querySelector(
  ".introduction-section .introduction-section-content .introduction-section-media img"
);

fetch(studenstIntroductionSectionImageUrl)
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
          studenstIntroductionSectionImageTag.setAttribute("src", url);
          studenstIntroductionSectionImageTag.setAttribute("alt", alttext);
        })
        .catch((err) => console.error(err));
    });
  })
  .catch((err) => console.error(err));

// ============================================================
// Fetch The Keypoints
// ============================================================

const keyPointsContainer = document.querySelector(
  ".keypoints-section-contents"
);

const keypointsTags = document.querySelectorAll(".keypoint");
const keyPointsQuery = encodeURIComponent('*[_type == "keypoint"]');
const keyPointsUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${keyPointsQuery}`;

keypointsTags.forEach((keypointTag) => {
  fetch(keyPointsUrl)
    .then((res) => res.json())
    .then(({ result }) => {
      result.find((keypoint) => {
        const { heading, description, point, image, slug } = keypoint;
        const imgId = image.asset._ref;
        const imgQuery = encodeURIComponent(`*[_id == "${imgId}"]`);
        const imgUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${imgQuery}`;

        fetch(imgUrl)
          .then((res) => res.json())
          .then(({ result }) => {
            const { url } = result[0];

            if (keypointTag.classList.contains(keypoint.slug.current)) {
              keypointTag.innerHTML = `
             <img
                src="${url}"
                alt="${slug.current}"
              />
              <div class="text">
                <h5>${point}</h5>
                <h3>${heading}</h3>
                <p>
                  ${description}
                </p>
              </div>
          `;
            }
          });
      });
    })
    .catch((err) => console.error(err));
});

// fetch(keyPointsUrl)
//   .then((res) => res.json())
//   .then(({ result }) => {
//     // get the keypoint that match the class of the keypoint and insert it

//     // let keypointTag = document.createElement("div");
//     // keypointTag.setAttribute("class", "keypoint");

//     result.forEach((keypoint) => {
//       // -------------------------------------------------------
//       // create an HTML tag for each keypoint and assign a class

//       let keypointTag = document.createElement("div");
//       keypointTag.setAttribute("class", "keypoint");

//       // -------------------------------------------------------
//       // get the { point, heading, & description } and the image

//       const { point, heading, description, image, slug } = keypoint;

//       // -------------------------------------------------------
//       // make a new request for the image.

//       const iconId = image.asset._ref;
//       const iconQuery = encodeURIComponent(`*[_id == "${iconId}"]`);
//       const iconUrl = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${iconQuery}`;

//       fetch(iconUrl)
//         .then((res) => res.json())
//         .then((result) => {
//           const { url } = result.result[0];

//           keypointTag.innerHTML = `
//              <img
//                 src="${url}"
//                 alt="${slug.current}"
//               />
//               <div class="text">
//                 <h5>${point}</h5>
//                 <h3>${heading}</h3>
//                 <p>
//                   ${description}
//                 </p>
//               </div>
//           `;

//           // keyPointsContainer.appendChild(keypointTag);
//         })
//         .catch((err) => console.error(err));
//     });
//   })
//   .catch((err) => console.error(err));
