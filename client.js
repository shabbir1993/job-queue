let kue   = require(`kue`);

let queue = kue.createQueue();

//event handler. Called when job is saved to the Redis.
queue.on(`job enqueue`, function(){
    console.log(`Job Submitted in the Queue.`);
    process.exit(0);
});

let job = queue.create(`download`, {
  file : `Sample/path/to/file`
})
.attempts(3) // if job fails retry 3 times
.backoff({delay: 60 * 1000}) // wait 60s before retry
.save();



 
