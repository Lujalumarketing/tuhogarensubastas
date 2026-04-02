import { useEffect, useRef, useState } from "react";
import { activitySignals } from "../data/activitySignals";

function ActivitySignal() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element || typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (activitySignals.length <= 1 || !isVisible) {
      return;
    }

    const getRandomDelay = () => 4000 + Math.floor(Math.random() * 2001);

    const getNextIndex = (current: number) => {
      let next = current;

      while (next === current) {
        next = Math.floor(Math.random() * activitySignals.length);
      }

      return next;
    };

    let timeoutId: number;

    const scheduleNext = () => {
      timeoutId = window.setTimeout(() => {
        setIndex((current) => getNextIndex(current));
        scheduleNext();
      }, getRandomDelay());
    };

    scheduleNext();

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="mt-3 inline-flex max-w-full items-center gap-2 rounded-full border border-[#DDE6F3] bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#475569] shadow-sm backdrop-blur-sm sm:mt-4 sm:px-4 sm:text-sm">
      <span className="relative inline-flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="truncate">{activitySignals[index]}</span>
    </div>
  );
}

export default ActivitySignal;
