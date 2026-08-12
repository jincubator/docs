(function () {
  "use strict";

  if (window.__jincubatorMermaidZoomLoaded) return;
  window.__jincubatorMermaidZoomLoaded = true;

  const selector = "svg.mermaid-zoomable, svg[data-zoomable='true']";

  function decorate(svg) {
    if (svg.dataset.zoomProcessed === "true") return;
    svg.dataset.zoomProcessed = "true";
    svg.setAttribute("role", "button");
    svg.setAttribute("tabindex", "0");
    svg.setAttribute("aria-label", svg.getAttribute("aria-label") || "Open full-size diagram");
    svg.classList.add("jincubator-mermaid-zoom");
  }

  function open(svg) {
    const zoom = window.JincubatorImageZoom;
    if (zoom?.open) zoom.open(svg, svg);
  }

  function initialise() {
    document.querySelectorAll(selector).forEach(decorate);
  }

  document.addEventListener("click", (event) => {
    const svg = event.target.closest(selector);
    if (!svg) return;

    event.preventDefault();
    open(svg);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const svg = event.target.closest(selector);
    if (!svg) return;

    event.preventDefault();
    open(svg);
  });

  initialise();
  window.addEventListener("vocs:route-update", initialise);
  new MutationObserver(initialise).observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
