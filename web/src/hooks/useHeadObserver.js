/* eslint-disable import/prefer-default-export */

import { useEffect, useState, useRef } from 'react';

export function useHeadsObserver() {
  const observer = useRef();
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '10% 0% -75% 0px',
    });

    const elements = document.querySelectorAll('h1, h2');
    elements.forEach((elem) => observer.current.observe(elem));

    return () => observer.current?.disconnect();
  }, []);

  return { activeId };
}
