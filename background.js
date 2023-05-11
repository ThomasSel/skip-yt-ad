const alertFunc = () => {
  alert("You have run the extension code");
};

const ytVideoUrl = "https://www.youtube.com/watch";

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(ytVideoUrl)) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: alertFunc,
    });
  }
});
