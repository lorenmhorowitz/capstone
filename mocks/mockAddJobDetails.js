"use strict";

const { mockJobsDetailsList } =  require("./mockJobsDetailsList");
const { Datastore } = require("@google-cloud/datastore");
const datastore = new Datastore({
  projectId: "hdqc-capstone"
}); // Creates a client

const datastoreKind = "JobDetails";

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

mockJobsDetailsList.mockJobsDetailsList.results.forEach(job => {
  addEntity(datastoreKind, job.id, job);
});