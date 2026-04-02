import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../data/siteConfig";
import { Card } from "./ui/card";

function StorySection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const node = videoRef.current;

    if (!node || typeof window.IntersectionObserver === "undefined") {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section-pad relative py-5 sm:py-7 lg:py-10" aria-labelledby="story-title">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/15 to-background" aria-hidden="true" />
      
      <div className="wrap relative z-10">
        <Card className="linear-shell relative mx-auto overflow-hidden max-w-4xl p-8 sm:p-10">
          {/* Decorative elements */}
          <div className="soft-orb top-[-3rem] left-[-3rem] h-56 w-56 bg-blue-100/50 blur-[80px]" aria-hidden="true" />
          
          <div className="relative">
            <p className="kicker">
              <svg className="h-3.5 w-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Mi caso real
            </p>
            
            <h2 id="story-title" className="section-title mt-4">
              No vendo humo. <span className="glow-text">Experiencia real</span>.
            </h2>
            
            <div className="mt-6 flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1D4ED8] shadow-md">
                  <span className="text-xl font-bold text-white">JM</span>
                </div>
              </div>
              <div>
                <p className="section-copy text-muted-foreground/90 leading-relaxed">
                  {siteConfig.story}
                </p>
              </div>
            </div>

            <p className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm font-semibold leading-relaxed text-[#1D4ED8] sm:text-base">
              Esta es la vivienda que conseguí en una subasta real en menos de 2 meses. Sin experiencia previa y sin ser inversor.
            </p>

            <div className="mt-4 rounded-2xl border border-dashed border-[#CBD5E1] bg-white/60 p-3 shadow-md">
              <video
                ref={videoRef}
                className="w-full max-w-md mx-auto rounded-2xl shadow-md"
                controls
                preload={shouldLoadVideo ? "metadata" : "none"}
                poster="/poster-casa-reel.png"
                playsInline
                aria-label="Video caso real de vivienda conseguida en subasta"
              >
                {shouldLoadVideo && <source src="/casa-reel.mp4" type="video/mp4" />}
                Tu navegador no puede reproducir este video.
              </video>
            </div>
            
            <div className="stripe-line mt-8 max-w-sm" />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default StorySection;
