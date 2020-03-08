
chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
    alert("THIS WEB PAGE IS BLOCKED!");

    chrome.tabs.update(details.tabId, { url: "https://www.google.ca" }, function (tab) {
        // this code was found on stack overflow
        // https://stackoverflow.com/questions/39333408/block-the-navigation-indicated-by-an-onbeforenavigate-event-in-a-chrome-extensio
        if (chrome.runtime.lastError) {
            if (chrome.runtime.lastError.message.indexOf('No tab with id:') > -1) {
                console.log('Error:', chrome.runtime.lastError.message)
            } else {
                console.log('Error:', chrome.runtime.lastError.message)
            }
        }
    });

}, {
        url: [{ hostContains: ".youtube." },
          { hostContains: ".facebook."}]
    })
