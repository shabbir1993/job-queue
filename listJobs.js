let kue = require('kue');
let queue = kue.createQueue();

kue.Job.range(0, -1, 'asc', (err, jobs) => {
  jobs.map(job => {
    console.log(`Job ${job.id}, data : ${job.data}, Status : ${job._state}`);
  })
});

/*
queue.complete((err, jobs) => {
  jobs.map(job => {
    console.log(`Job ${job.id}, data : ${job.data}`); 
  })
})
*/
