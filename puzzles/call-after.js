function logAfter(duration) {
  return function(callback) {
    setTimeout(() => {
      console.log(`${duration}ms have passed`);
      if (callback) {
        callback();
      }
    }, duration);
  }
}

function callAfter(fn1, fn2) {
  // Fill the missing code here
}

let actions = [logAfter(3000), logAfter(2000), logAfter(4000)];

(actions.reduce(function(prev, action) {
  return callAfter(prev, action);
}, callback => callback()))();
