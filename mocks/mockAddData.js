"use strict";

const { Datastore } = require("@google-cloud/datastore");
const datastore = new Datastore({}); // Creates a client

async function addTask(description) {
  const taskKey = datastore.key({
    namespace: "TestNamespace",
    path: ["TestData", null]
  });
  const entity = {
    key: taskKey,
    data: {
      details: {
        name: "Josh Feener Residence",
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
        }
      },
      measurements: {
        roof: {
          roof_facets: {
            area: 3118,
            total: 2,
            length: 0 //null
          },
          ridges_hips: {
            area: 0, //null
            total: 1,
            length: 60
          },
          valleys: {
            area: 0, //null
            total: 0,
            length: 0
          },
          rakes: {
            area: 0, //null
            total: 4,
            length: 103.92
          },
          gutters_eaves: {
            area: 0, //null
            total: 2,
            length: 120
          },
          flashing: {
            area: 0, //null
            total: 0,
            length: 0
          },
          step_flashing: {
            area: 0, //null
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
      }
    }
  };

  try {
    await datastore.upsert(entity);
    console.log(`Task ${taskKey.id} created successfully.`);
  } catch (err) {
    console.error("ERROR:", err);
  }
}

addTask("mock description");
