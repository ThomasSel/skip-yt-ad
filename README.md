# skip-yt-ad

Whenever I have a youtube video / playlist on in the background, I'm always
frustrated when I alt-tab over to chrome, only to have to lift my hand off
the keyboard and grab my mouse.
Therefore, I decided to make a small chrome extension that allows the user
to skip youtube ads using a keyboard shortcut, instead of the mouse.

Note this extension is not available on the chrome extension store, since
I'm not 100% sure whether or not it would violate any possible terms of
service that google may have.

# Running the extension

To add this extension to your browser, first clone the repository.

Then visit the `chrome://extensions` url to manage your extensions.
Turn on Developer mode on the top right of the page, click
`Load unpacked` and select the cloned repository.

The default hotkey for the extension is `Alt-l` (`Command-l` on mac).
If you want to change the hotkey, click the menu on the top left of
the extensions page and navigate to the Keyboard shortcuts page.

You can then use the extension on any youtube video page you like!

Note that nothing will happen if the ad is not skippable.

# Technical details

The extension is self contained in the (background.js)[./background.js] file.
This file contains a listener for the `chrome.action` which is called
whenever the user activates the extension normally via the extension
button in the top right of the browser.
Then inside (manifest.json)[./manifest.json], we also bind this action to the
default keybinding for the extension.

Inside this listener, we check that the page in the current tab is a
youtube video.
If so, we use `chrome.scripting.executeScript` to run a javascript
function on the page which attempts to skip the ad.

To skip the ad itself, we fetch the ad skip button from the DOM.
Through examination of the structure of youtube video pages (which
can be found in the (skip-button.md)[./skip-button.md] file), the
element with the class `.ytp-ad-skip-button-slot` contains the click
listener which skips an ad.
We then dispatch a click event to it's DOM element which skips the ad.

# Things to improve / work on next

- Only run the script if the video is skippable.
  Currently this is only handled by checking whether the element
  returned by `document.querySelector` is `null` or `undefined`.
- Add option to change the keyboard shortcut from any page by making the
  default action bring up a pop-up and move the ad skipping logic to a
  separate command.
- Create a more generalised hotkey system that runs any javascript code
  for a given key press.
- Publish the extension to the chrome store in some capacity.
