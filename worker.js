
let kue   = require('kue');
let queue = kue.createQueue();
let sleep = require('sleep');

queue.process(`download`, function(job, done){
  console.log(`Working on job ${job.id}`);
  console.log(job.data);
  downloadFile(job.data.file, done);
});


function downloadFile (file, done) {
  sleep.sleep(5);

  console.log(`Downloading file : ${file}`);
  sleep.sleep(5);
  console.log(`Download Complete`);
  done();

}
