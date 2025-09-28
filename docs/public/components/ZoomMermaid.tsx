import React, { useEffect, useRef } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const ZoomMermaid = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Find all Mermaid SVG elements and wrap them with zoom functionality
    const mermaidElements = document.querySelectorAll('.mermaid svg');

    mermaidElements.forEach((svg) => {
      // Skip if already wrapped
      if (svg.closest('.rm-zoom-img')) return;

      // Create a wrapper div for better styling
      const wrapper = document.createElement('div');
      wrapper.style.display = 'inline-block';
      wrapper.style.maxWidth = '100%';
      wrapper.style.cursor = 'zoom-in';
      wrapper.title = 'Click to zoom';

      // Style the SVG for better responsiveness
      (svg as SVGElement).style.maxWidth = '100%';
      (svg as SVGElement).style.height = 'auto';

      // Insert wrapper before SVG and move SVG into wrapper
      svg.parentNode?.insertBefore(wrapper, svg);
      wrapper.appendChild(svg);

      // Add click handler for zoom
      wrapper.addEventListener('click', () => {
        // Create a zoom overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          cursor: zoom-out;
        `;

        // Clone the SVG for zoom view
        const zoomedSvg = svg.cloneNode(true) as SVGElement;
        zoomedSvg.style.cssText = `
          max-width: 90vw;
          max-height: 90vh;
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;

        overlay.appendChild(zoomedSvg);
        document.body.appendChild(overlay);

        // Close on click or escape
        const closeZoom = () => {
          document.body.removeChild(overlay);
          document.removeEventListener('keydown', handleEscape);
        };

        const handleEscape = (e: KeyboardEvent) => {
          if (e.key === 'Escape') closeZoom();
        };

        overlay.addEventListener('click', closeZoom);
        document.addEventListener('keydown', handleEscape);
      });
    });
  }, []);

  return null;
};