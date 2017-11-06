var request = require('request')
var fs = require('fs')

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    console.log("Houston, we have a problem")
    throw err;
  })

  .on('response', function(response) {
    console.log("Downloading Image...")
    console.log("Response Status Message: ", response.statusMessage)
    console.log("Content Type: ",response.headers['content-type'])
    response.on('end', function() {
      console.log("Download Complete...")
    })
  })

  .pipe(fs.createWriteStream("./future.jpg"))

