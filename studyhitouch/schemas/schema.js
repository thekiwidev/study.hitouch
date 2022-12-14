// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import testimonials from "./testimonials"; // import the file you just made
import service from "./services"; // import the file you just made
import headers from "./headers";
import banners from "./banners";
import images from "./images";
import studentsKeypoints from "./students.keypoints";
import studentsFeatures from "./students.features";
import studentsHowItWorks from "./students.howItWorks";
import studentsCtaBanner from "./students.ctaBanner";
import about from "./about";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    // list of all testimonies
    testimonials, // {testimony, name, location, service, image}
    service, // {icon, title, description, url}
    headers, // {main-heading, subheading}
    banners, // {}
    images,
    studentsKeypoints,
    studentsFeatures,
    studentsHowItWorks,
    studentsCtaBanner,
    about,
  ]),
});
