(function () {
  "use strict";

  if (window.__jincubatorImageZoomLoaded) return;
  window.__jincubatorImageZoomLoaded = true;

  const triggerSelector = ".jincubator-image-zoom";
  const fullSizeLinkText = /^Open the .+ at full size\.?$/;

  function sameUrl(left, right) {
    return new URL(left, window.location.href).href === new URL(right, window.location.href).href;
  }

  function hideRedundantFullSizeLinks() {
    document.querySelectorAll(`${triggerSelector} img[src]`).forEach((image) => {
      const content = image.closest(".vocs_Content");
      if (!content) return;

      content.querySelectorAll("a[href]").forEach((link) => {
        if (fullSizeLinkText.test(link.textContent.trim()) && sameUrl(link.href, image.currentSrc || image.src)) {
          (link.closest("p") || link).hidden = true;
        }
      });
    });
  }

  function openZoom(trigger) {
    const source = trigger.querySelector("img");
    if (!source) return;

    openZoomSource(trigger, source);
  }

  function openZoomSource(trigger, source) {
    const dialog = document.createElement("dialog");
    dialog.className = "jincubator-image-zoom-dialog";
    dialog.setAttribute(
      "aria-label",
      source.getAttribute("alt") ||
        source.getAttribute("aria-label") ||
        source.querySelector("title")?.textContent ||
        "Full-size image",
    );

    const close = document.createElement("button");
    close.type = "button";
    close.className = "jincubator-image-zoom-dialog__close";
    close.textContent = "Close full-size image";

    const media = source.cloneNode(true);
    media.classList.add("jincubator-image-zoom-dialog__content");
    media.removeAttribute("id");
    if (source instanceof HTMLImageElement) {
      media.src = source.currentSrc || source.src;
      media.alt = source.alt;
    }

    dialog.append(close, media);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog || event.target === media) dialog.close();
    });
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") dialog.close();
    });
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => {
      dialog.remove();
      trigger.focus();
    }, { once: true });

    document.body.append(dialog);
    dialog.showModal();
    close.focus();
  }

  window.JincubatorImageZoom = { open: openZoomSource };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(triggerSelector);
    if (!trigger) return;

    event.preventDefault();
    openZoom(trigger);
  });

  function initialise() {
    hideRedundantFullSizeLinks();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise);
  } else {
    initialise();
  }

  window.addEventListener("vocs:route-update", initialise);
  new MutationObserver(initialise).observe(document.body, { childList: true, subtree: true });
})();
