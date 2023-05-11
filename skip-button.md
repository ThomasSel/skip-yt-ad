# Youtube skip button details

## 3 skip button states

### Unskippable

##### Structure:

```html
<div class="ytp-ad-player-overlay-skip-or-preview">
  <div class="ytp-ad-preview-slot" id="ad-preview:1" style="">
    <span class="ytp-ad-preview-container" style="">
      <div class="ytp-ad-text ytp-ad-preview-text" id="ad-text:2" style="">
        Ad will end\nin 6
      </div>
      <span class="ytp-ad-preview-image" style="display: none">
        <img class="ytp-ad-image" style="" />
      </span>
    </span>
  </div>
</div>
```

##### Event Listeners

- `.ytp-ad-preview-slot`: `click` (does nothing?)
- `.ytp-ad-text.ytp-ad-preview-text`: `click` (does nothing?)
- `.ytp-ad-image`: `click` (does nothing?)

### Countdown to skippable

##### Structure:

```html
<div class="ytp-ad-player-overlay-skip-or-preview">
  <div class="ytp-ad-skip-ad-slot" id="skip-button:h" style="">
    <div class="ytp-ad-preview-slot" id="preskip-component:i" style="">
      <span
        class="ytp-ad-preview-container countdown-next-to-thumbnail"
        style=""
      >
        <div class="ytp-ad-text ytp-ad-preview-text" id="ad-text:j" style="">
          5
        </div>
        <span class="ytp-ad-preview-image">
          <img />
        </span>
      </span>
    </div>
    {...}
  </div>
</div>
```

##### Event listeners

- `#skip-button:h`: `click` (does nothing?)
  - _Note_ to query this element by its id, use `document.querySelector("#skip-button\\:h")`
- `.ytp-ad-text.ytp-ad-preview-text`: `click` (does nothing?)
- `.ytp-ad-preview-image > img`: `click` (does nothing?)

##### Other notes

- Inside the `{...}` of the HTML above, there are other elements with `click` event listeners, which largely mirror the structure of `#preskip-component:i`, but have their display set to none and whose clicks don't have an effect.

### Skippable

##### Structure:

```html
<div class="ytp-ad-player-overlay-skip-or-preview">
  <div class="ytp-ad-skip-ad-slot" id="skip-button:2" style="">
    <div
      class="ytp-ad-preview-slot"
      id="preskip-component:3"
      style="display: none"
    >
      <span
        class="ytp-ad-preview-container countdown-next-to-thumbnail"
        style="display: none"
      >
        <div
          class="ytp-ad-text ytp-ad-preview-text"
          id="ad-text:4"
          style="display: none"
        >
          1
        </div>
        <span class="ytp-ad-preview-image">
          <img />
        </span>
      </span>
    </div>
    <div class="ytp-ad-skip-button-slot" id="skip-button:6" style="">
      <span class="ytp-ad-skip-button-container" style="opacity: 0.5"
        ><button class="ytp-ad-skip-button ytp-button">
          <div
            class="ytp-ad-text ytp-ad-skip-button-text"
            id="ad-text:7"
            style=""
          >
            Skip ad
          </div>
          <span class="ytp-ad-skip-button-icon">
            <svg></svg>
          </span>
        </button>
      </span>
    </div>
  </div>
</div>
```

##### Event Listeners

- `#skip-button:2`: `click` (does nothing?)
- `#preskip-component:3`: `click` (does nothing?)
- `#ad-text:4`: `click` (does nothing?)
- `#ad-image:5`: `click` (does nothing?)
- `.ytp-ad-skip-button-slot`: `click` SKIPS AD
- `.ytp-ad-skip-button-container`: `mouseover`, `mouseout`
- `.ytp-ad-text.ytp-ad-skip-button-text`: `click` (does nothing?)

##### Other notes

- It is clear here that there are two separate components inside `#skip-button:2`:
  - The first is the countdown element
  - The second is the skip button
- Depending on the skippable state of the ad, one of these components has `display: none`
- Note that the click listeners on the skip button component still don't do anything when the ad isn't skippable

## Conclusions:

In order to skip the ad using a script, you can run

```javascript
document
  .querySelector(".ytp-ad-skip-button-slot")
  .dispatchEvent(new Event("click"));
```
