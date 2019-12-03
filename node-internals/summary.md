```
// node myfile.js
// psuedo code for node running myFile.js

const pendingTimers = [];
const pendingOsTasks = [];
const pendingOps = [];

// new timers, tasks, operations are recorded from myFile running
myFile.runContents();

// psuedo for event loop
// one execution is called a 'tick'
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be invoked - setTimeout, setInterval
  // 2) Node looks at any pending OS tasks, pending Ops and fires cbs if neccessary.
  // 3) pauses execution. continue when...
  //    - a new pending OS task is done
  //    - a new pending op is done
  //    - a timer is about to complete
  // 4) look at pending timers. Call any setImmediate
  // 5) handle close events
}

/**
 * @returns {boolean}
 */
function shouldContinue() {
  // check one: any pending setTimeout, setInterval, setImmediate
  // check two: any pending os tasks (like listening to a server)
  //  - if more threads are spawned in the threadpool
  //  - async network requests are handled by OS. Node waits for OS to emit when event is handled.
  // check three: any pending long running ops (like fs modules)

  return pendingTimers.length || pendingOsTasks.length || pendingOps.length;
}
```
