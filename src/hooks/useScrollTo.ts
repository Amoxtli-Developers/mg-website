import { useCallback } from 'react';

interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

const useScrollTo = () => {
  const scrollTo = useCallback((elementId: string, options: ScrollOptions = {}) => {
    const { offset = 0, behavior = 'smooth' } = options;
    
    // Remove the # if it's included
    const id = elementId.startsWith('#') ? elementId.substring(1) : elementId;
    const element = document.getElementById(id);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior,
      });
    }
  }, []);

  return scrollTo;
};

export default useScrollTo;