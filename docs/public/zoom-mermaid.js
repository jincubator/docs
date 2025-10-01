// Universal Mermaid Zoom Script - Robust SPA Friendly
(function() {
  'use strict';

  if (window.__mermaidZoomLoaded) return;
  window.__mermaidZoomLoaded = true;

  // Utility: check if an SVG is a Mermaid diagram
  function isMermaidSvg(svg) {
    return !!(
      (svg.id && svg.id.startsWith('mermaid')) ||
      svg.classList.contains('mermaid') ||
      svg.classList.contains('flowchart') ||
      svg.getAttribute('aria-roledescription')?.includes('flowchart') ||
      svg.getAttribute('role')?.includes('graphics')
    );
  }

  // Wait for SVG to be fully rendered
  function waitForSvgReady(svg, callback) {
    if (svg.querySelectorAll('g, path').length > 0) {
      callback(svg);
      return;
    }
    const observer = new MutationObserver(() => {
      if (svg.querySelectorAll('g, path').length > 0) {
        observer.disconnect();
        callback(svg);
      }
    });
    observer.observe(svg, { childList: true, subtree: true });
  }

  // Attach zoom behavior to a single SVG
  function processMermaidElement(svg) {
    if (svg.dataset.zoomProcessed === 'true') return;
    svg.dataset.zoomProcessed = 'true';

    svg.style.cursor = 'zoom-in';
    svg.style.maxWidth = '100%';
    svg.style.height = 'auto';
    svg.title = 'Click to zoom diagram';

    const handleClick = function(e) {
      console.log('SVG clicked:', svg.id || svg.className);
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      openZoom(svg);
      return false;
    };

    // Remove old listener if exists
    if (svg._zoomClickHandler) {
      svg.removeEventListener('click', svg._zoomClickHandler, true);
    }

    svg.addEventListener('click', handleClick, true);
    svg._zoomClickHandler = handleClick;

    // Hover effect
    svg.addEventListener('mouseenter', () => {
      svg.style.transform = 'scale(1.02)';
      svg.style.transition = 'transform 0.2s ease';
    });
    svg.addEventListener('mouseleave', () => {
      svg.style.transform = 'scale(1)';
    });

    console.log('Zoom handler attached to:', svg.id || svg.className);
  }

  // Open overlay with zoomed SVG
  function openZoom(originalSvg) {
    console.log('openZoom called for:', originalSvg);

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      cursor: zoom-out;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    const zoomedSvg = originalSvg.cloneNode(true);
    zoomedSvg.style.cssText = `
      max-width: 95vw;
      max-height: 95vh;
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
      cursor: zoom-out;
      transform: scale(0.8);
      transition: transform 0.3s ease;
    `;

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(0,0,0,0.7);
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100000;
      transition: background 0.2s ease;
    `;
    closeButton.addEventListener('mouseenter', () => closeButton.style.background = 'rgba(0,0,0,0.9)');
    closeButton.addEventListener('mouseleave', () => closeButton.style.background = 'rgba(0,0,0,0.7)');

    overlay.appendChild(zoomedSvg);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      zoomedSvg.style.transform = 'scale(1)';
    });

    const closeZoom = () => {
      overlay.style.opacity = '0';
      zoomedSvg.style.transform = 'scale(0.8)';
      setTimeout(() => {
        if (document.body.contains(overlay)) document.body.removeChild(overlay);
        document.body.style.overflow = '';
      }, 300);
      document.removeEventListener('keydown', handleEscape);
    };

    const handleEscape = (e) => { if (e.key === 'Escape') closeZoom(); };
    overlay.addEventListener('click', e => { if (e.target === overlay || e.target === closeButton) closeZoom(); });
    closeButton.addEventListener('click', closeZoom);
    document.addEventListener('keydown', handleEscape);
  }

  // Scan and process all Mermaid SVGs in content area
  function initMermaidZoom() {
    const contentArea = document.querySelector('#vocs-content, .vocs_Content, article, main') || document.body;
    const svgElements = contentArea.querySelectorAll('svg');
    console.log('Scanning for Mermaid SVGs, found:', svgElements.length);

    svgElements.forEach(svg => {
      if (isMermaidSvg(svg)) {
        console.log('Found Mermaid SVG:', svg.id || svg.className);
        waitForSvgReady(svg, processMermaidElement);
      }
    });
  }

  // DOM ready init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaidZoom);
  } else {
    initMermaidZoom();
  }

  // Observe SPA DOM mutations
  const observer = new MutationObserver(mutations => {
    let added = false;
    mutations.forEach(m => {
      if (m.addedNodes.length > 0) added = true;
    });
    if (added) setTimeout(initMermaidZoom, 200);
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Vocs SPA navigation
  window.addEventListener('vocs:route-update', () => setTimeout(initMermaidZoom, 200));
  window.addEventListener('popstate', () => setTimeout(initMermaidZoom, 200));
})();
