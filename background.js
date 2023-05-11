const alertFunc = () => {
  alert("You have run the extension code");
};

chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: alertFunc,
  });
});
