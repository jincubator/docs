import { useEffect } from 'react';

export const MermaidZoom = () => {
  useEffect(() => {
    // Load and execute the zoom script
    const script = document.createElement('script');
    script.src = '/zoom-mermaid.js';
    script.defer = true;

    // Remove any existing script first
    const existingScript = document.querySelector('script[src="/zoom-mermaid.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      // Cleanup if component unmounts
      const scriptToRemove = document.querySelector('script[src="/zoom-mermaid.js"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};