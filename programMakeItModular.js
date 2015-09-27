var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(err, myarray) {
  if (err) console.log(err)
  myarray.forEach(function(file) {
    console.log(file);
  })
});

