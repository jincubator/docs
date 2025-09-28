// Universal Mermaid Zoom Script
(function() {
  'use strict';

  // Wait for page to be fully loaded
  function initMermaidZoom() {
    console.log('Initializing Mermaid zoom...');

    // Find all SVG elements and code blocks that might contain Mermaid
    const svgElements = document.querySelectorAll('svg');
    const preElements = document.querySelectorAll('pre');

    console.log(`Found ${svgElements.length} SVG elements and ${preElements.length} pre elements`);

    // Check all SVG elements
    svgElements.forEach((svg, index) => {
      console.log(`Checking SVG ${index}:`, {
        id: svg.id,
        classes: svg.className,
        parent: svg.parentElement?.tagName,
        parentClasses: svg.parentElement?.className
      });

      // More comprehensive check for Mermaid SVGs
      const isMermaidSvg =
        svg.id && svg.id.startsWith('mermaid') ||
        svg.closest('.mermaid') ||
        svg.closest('pre') ||
        svg.querySelector('[class*="mermaid"]') ||
        svg.getAttribute('aria-labelledby')?.includes('mermaid') ||
        svg.parentElement?.tagName === 'PRE';

      if (isMermaidSvg) {
        console.log(`Processing Mermaid SVG ${index}`);
        processMermaidElement(svg);
      }
    });

    // Also check pre elements that might contain SVG
    preElements.forEach((pre, index) => {
      const svg = pre.querySelector('svg');
      if (svg && !svg.dataset.zoomable) {
        console.log(`Processing SVG in pre element ${index}`);
        processMermaidElement(svg);
      }
    });
  }

  function processMermaidElement(svg) {
    // Skip if already processed
    if (svg.dataset.zoomable) return;

    // Mark as processed
    svg.dataset.zoomable = 'true';

    // Style the SVG for better UX
    svg.style.cursor = 'zoom-in';
    svg.style.maxWidth = '100%';
    svg.style.height = 'auto';
    svg.title = 'Click to zoom diagram';

    // Add click handler
    svg.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('SVG clicked for zoom');
      openZoom(svg);
    });

    // Add hover effect
    svg.addEventListener('mouseenter', function() {
      svg.style.transform = 'scale(1.02)';
      svg.style.transition = 'transform 0.2s ease';
    });

    svg.addEventListener('mouseleave', function() {
      svg.style.transform = 'scale(1)';
    });

    console.log('Mermaid SVG processed for zoom');
  }

  function openZoom(originalSvg) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      cursor: zoom-out;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    // Clone the SVG
    const zoomedSvg = originalSvg.cloneNode(true);
    zoomedSvg.style.cssText = `
      max-width: 95vw;
      max-height: 95vh;
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
      cursor: zoom-out;
      transform: scale(0.8);
      transition: transform 0.3s ease;
    `;

    // Add close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.7);
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
      z-index: 10001;
      transition: background 0.2s ease;
    `;

    closeButton.addEventListener('mouseenter', function() {
      closeButton.style.background = 'rgba(0, 0, 0, 0.9)';
    });

    closeButton.addEventListener('mouseleave', function() {
      closeButton.style.background = 'rgba(0, 0, 0, 0.7)';
    });

    overlay.appendChild(zoomedSvg);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Animate in
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      zoomedSvg.style.transform = 'scale(1)';
    });

    // Close handlers
    function closeZoom() {
      overlay.style.opacity = '0';
      zoomedSvg.style.transform = 'scale(0.8)';

      setTimeout(() => {
        document.body.removeChild(overlay);
        document.body.style.overflow = '';
      }, 300);

      document.removeEventListener('keydown', handleEscape);
    }

    function handleEscape(e) {
      if (e.key === 'Escape') closeZoom();
    }

    overlay.addEventListener('click', function(e) {
      if (e.target === overlay || e.target === closeButton) {
        closeZoom();
      }
    });

    closeButton.addEventListener('click', closeZoom);
    document.addEventListener('keydown', handleEscape);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaidZoom);
  } else {
    initMermaidZoom();
  }

  // Re-run when new content is loaded (for SPA navigation)
  const observer = new MutationObserver(function(mutations) {
    let shouldReinit = false;
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === Node.ELEMENT_NODE &&
              (node.tagName === 'SVG' || node.querySelector('svg'))) {
            shouldReinit = true;
          }
        });
      }
    });

    if (shouldReinit) {
      setTimeout(initMermaidZoom, 100);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();