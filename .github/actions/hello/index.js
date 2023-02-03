const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw(new Error("Some Error Message"));

  core.debug("Debug message");
  core.warning("Warning message");
  core.error("Error message");
  const name = core.getInput("who-to-greet");
  core.setSecret(name);
  console.log(`Hello ${name} welcome to Alien's House`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.startGroup("Logging github object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();

  core.exportVariable("HELLO", "hello");
} catch (error) {
  core.setFailed(error.message);
}
