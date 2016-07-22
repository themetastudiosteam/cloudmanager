// Description
//   Hubot Script for managing cloud services
//
// Configuration:
//   LIST_OF_ENV_VARS_TO_SET
//
// Commands:
//   cloud status - Checks GCE, DigitalOcean, Heroku and AWS for VM statuses
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   Meta Studios Inc <theTeam@metastudiosinc.com>

var spawn = require('child_process').spawn


module.exports = function(robot) {

  robot.hear(/cloud status/i, function(msg) {
    msg.send("I hit my head and forgot how to do that")

  });
}
