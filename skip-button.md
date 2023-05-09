# Youtube skip button details

## 3 skip button states

### Unskippable

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
