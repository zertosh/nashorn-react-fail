// Bootstrap
var global = this;
global.console = {log: print};

// Load it!
load('./main-built.js');

// Run it!
try {
  console.log(main());
} catch(err) {
  console.log(err.stack);
}
