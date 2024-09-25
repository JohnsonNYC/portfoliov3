import { useState, useEffect } from "react";
import { useMediaPredicate as useMediaPredicateLib } from "react-media-hook";

export const useMediaPredicate = (breakpointString: string): boolean => {
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const isMobile: boolean = useMediaPredicateLib(breakpointString);

  useEffect(() => {
    setIsMobileState(isMobile);
  }, [isMobile]);

  return isMobileState;
};

type IntersectionObserverCallback = () => void; 

export const useIntersectionObserver = (
  targetRef: React.RefObject<Element>, 
  callback: IntersectionObserverCallback, 
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target); // Unobserve after loading
        }
      },
      options
    );

    observer.observe(target);

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [targetRef, callback, options]);
}