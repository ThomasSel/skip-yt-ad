const skipVideo = () => {
  const skipButtonEl = document.querySelector(".ytp-ad-skip-button-slot");
  skipButtonEl?.dispatchEvent(new Event("click"));
};

const ytVideoUrl = "https://www.youtube.com/watch";

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(ytVideoUrl)) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: skipVideo,
    });
  }
});
