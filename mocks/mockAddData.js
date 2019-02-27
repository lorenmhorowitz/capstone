"use strict";

const { Datastore } = require("@google-cloud/datastore");
const datastore = new Datastore({
  projectId: "hdqc-capstone"
}); // Creates a client

const datastoreKind = "JobDetails";
const jobId = 610;
const data = {
  name: "Josh Feener Residence",
  validUsers: ["jfeener"],
  customer_notes: null,
  location_line_1: "1119 W 32nd Street",
  location_line_2: null,
  location_city: "Vancouver",
  location_region: "WA",
  location_postal_code: "98660",
  location_country: null,
  id: 610,
  property_type: "single_family_residential",
  updated_at: "2018-11-13T14:48:12.428Z",
  created_at: "2018-08-17T14:48:12.428Z",
  job_status: "active",
  active_projects: {
    roofing: true,
    siding: false,
    windows: false
  },
  measurements: {
    roof: {
      roof_facets: {
        area: 3118,
        total: 2,
        length: 0 
      },
      ridges_hips: {
        area: 0, 
        total: 1,
        length: 60
      },
      valleys: {
        area: 0,
        total: 0,
        length: 0
      },
      rakes: {
        area: 0,
        total: 4,
        length: 103.92
      },
      gutters_eaves: {
        area: 0, 
        total: 2,
        length: 120
      },
      flashing: {
        area: 0, 
        total: 0,
        length: 0
      },
      step_flashing: {
        area: 0,
        total: 0,
        length: 0
      },
      pitch: [
        {
          roof_pitch: "4/12",
          area: 3118,
          percentage: 100
        }
      ]
    }
  },
  products: {
    roofing: {
      shingles: [
        {
          quantity: 10,
          products: [
            {
              item_id: 205655916,
              selected: true,
              model: "786353",
              brand: "Owens Corning",
              name: "Oakridge Algae Resistant Onyx Black Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
              image: "https://images.homedepot-static.com/productImages/271746c1-8a65-4cd8-86d7-bdd4e80e9f5e/svn/onyx-black-owens-corning-roof-shingles-786353-64_1000.jpg",
              price: 27.00,
              dimensions: {
                area: 33, //ft.
                length: 33, //ft.
                thickness: 7.4, //in.
                width: 7.5 //ft.
              },
              weight: 13.5, //lbs
              color: "Black",
              quantity: 3,
              //other attributes may be added as needed
            }
          ]
        }
      ],
      underlayment: [
        {
          quantity: 5,
          products: [
            {
              item_id: 205035868,
              selected: false,
              model: "0973",
              brand: "GAF",
              name: "1000 sq. ft. FeltBuster Synthetic Roofing Underlayment Roll",
              image: "https://images.homedepot-static.com/productImages/271746c1-8a65-4cd8-86d7-bdd4e80e9f5e/svn/onyx-black-owens-corning-roof-shingles-786353-64_1000.jpg",
              price: 79.00,
              dimensions: {
                area: 1000, //ft.
                length: 250, //ft.
                thickness: 6.0, //in.
                width: 48 //ft.
              },
              weight: 23, //lbs
              color: "grey",
              quantity: 1,
            }
          ]
        }
      ],
      nails: [
        {
          quantity: 5,
          products: [
            {
              item_id: 308506676,
              selected: false,
              model: "S510ARN5",
              brand: "Simpson Strong-Tie",
              name: "5d 1-3/4 in. Roofing Nail Annular Ring Shank (5 lbs.-Pack)",
              image: "https://images.homedepot-static.com/productImages/8a78fe14-a4bc-4258-82d8-3a0fefd706da/svn/simpson-strong-tie-framing-nails-s510arn5-64_1000.jpg",
              price: 53.76,
              dimensions: {
                headwidth: 0.375, //ft.
                length: 1.75, //ft.
              },
              weight: 5, //lbs 
              color: "Stainless Steel",
              quantity: 4,
            }
          ]
        }

      ],
      ridgeCaps: [
        {
          quantity: 5,
          products: [
            {
              item_id: 300573201,
              selected: false,
              model: "5259",
              brand: "Ondura",
              name: "3.3 ft. x 12-1/2 in. Tan Ridge Cap Asphalt Roof Panel",
              image: "https://images.homedepot-static.com/productImages/3f8f96e8-e02b-47fe-9f7b-ffcbaa141340/svn/tan-ondura-asphalt-panels-5259-64_1000.jpg",
              price: 8.00,
              dimensions: {
                area: 3.4, 
                length: 39.5, 
                thickness: 0.125,
                width: 12.5,
              },
              weight: 2.05, //lbs 
              color: "Tan",
              quantity: 5,
            }
          ]
        }
      ],
      dripEdge: [
        {
          quantity: 5,
          products: [
            {
              item_id: 202093168,
              selected: false,
              model: "RE15WH",
              brand: "Construction Metals",
              name: "1-1/2 in. x 1-1/2 in. x 10 ft. Galvanized Steel Drip Edge Flashing in White",
              image: "https://www.homedepot.com/p/Construction-Metals-1-1-2-in-x-1-1-2-in-x-10-ft-Galvanized-Steel-Drip-Edge-Flashing-in-White-RE15WH/202093168",
              price: 4.70,
              dimensions: {
                area: 1.5, 
                length: 120, 
                thickness: 0.015625,
                width: 1.5,
              },
              weight: 1.6, //lbs 
              color: "White",
              quantity: 2,
            }
          ]
        }
      ]
    }
  }
};

async function addEntity(datastoreKind, jobId, data) {
  const taskKey = datastore.key([
    datastoreKind,
    jobId
  ]);
  const entity = {
    key: taskKey,
    data: data
  };

  try {
    await datastore.upsert(entity);
    console.log(`Task ${taskKey.id} created successfully.`);
  } catch (err) {
    console.error("ERROR:", err);
  }
}

// const entities = [];
// entities.forEach(e => {
//   addEntity(datastoreKind, e.jobId, e);
// })

addEntity(datastoreKind, jobId, data);
