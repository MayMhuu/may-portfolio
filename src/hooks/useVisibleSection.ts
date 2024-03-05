import { useEffect, useState, useCallback } from "react";
import { throttle } from "lodash";
import navMenus from "@/data/nav-menus";

function useVisibleSection(sections = navMenus) {
  const [visibleSectionId, setVisibleSectionId] = useState<string>(
    sections[0].id
  );

  const isSectionVisible = (elementId: string) => {
    const section = document.getElementById(elementId);

    if (!section) return false;

    const sectionPosition = section.getBoundingClientRect();
    const vHeight = window.innerHeight || document.documentElement.clientHeight;

    // calculate the threshold for more than 50% visibility
    var threshold = vHeight * 0.5;

    return (
      (sectionPosition.top <= threshold &&
        sectionPosition.bottom >= threshold) || // more than 50% from the start
      (sectionPosition.bottom >= vHeight - threshold &&
        sectionPosition.top <= vHeight - threshold) // more than 50% from the end
    );
  };

  const checkVisibility = useCallback(() => {
    if (!sections || sections.length < 1) return;

    sections.forEach(({ id }) => {
      const isVisible = isSectionVisible(id);

      if (isVisible) {
        setVisibleSectionId(id);
      }
    });
  }, [sections]);

  useEffect(() => {
    const handler = throttle(checkVisibility, 300);

    if (document.readyState === "complete") handler();

    window.addEventListener("DOMContentLoaded", handler);
    window.addEventListener("load", handler);
    window.addEventListener("scroll", handler);
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("DOMContentLoaded", handler);
      window.removeEventListener("load", handler);
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [checkVisibility]);

  return visibleSectionId;
}

export default useVisibleSection;
