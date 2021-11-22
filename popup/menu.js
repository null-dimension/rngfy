function listenForClicks() {
  document.getElementById("btn-rng").addEventListener("click", (e) => {
    function rngfy(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "rngfy",
      });
    }
    function reportError(error) {
      console.error(`Could not rngfy: ${error}`);
    }

    browser.tabs
      .query({ active: true, currentWindow: true })
      .then(rngfy)
      .catch(reportError);
  });
}
function reportExecuteScriptError(error) {
  console.error(`Failed to execute rngfy content script: ${error.message}`);
}

browser.tabs
  .executeScript({ file: "/content_scripts/rngfy.js" })
  .then(listenForClicks)
  .catch(reportExecuteScriptError);
