"use strict";

const { Datastore } = require("@google-cloud/datastore");
const job = require('./mockJobsDetailsList');
const datastore = new Datastore({
  projectId: "hdqc-capstone"
}); // Creates a client

const datastoreKind = "JobDetails";
const jobId = 610;
const data = job.mockJobsDetailsList;

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