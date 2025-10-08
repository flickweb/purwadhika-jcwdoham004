"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

type Slide = { src: string; alt: string; target?: string };

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    watchDrag: false,
  });

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      {/* viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* ini cuman track flex container e tok*/}
        <div className="flex gap-8 items-stretch">
          {slides.map((s, i) => (
            <div
              key={i}
              onClick={() => {
                if (!s.target) return;
                const el = document.querySelector(s.target);
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="
                box-border min-w-0 shrink-0
                basis-[80%] md:basis-[60%] lg:basis-[50%]
              "
            >
              {/* card wrapper nya buat imagenya tetep inside */}
              <div className="h-full rounded-3xl overflow-hidden shadow-xl bg-white cursor-pointer">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={1600}
                  height={900}
                  className="block w-full h-[50vh] object-cover transition-transform duration-300 hover:scale-105"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* arrows dr template */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 text-white px-3 py-2 hover:bg-black/80"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/70 text-white px-3 py-2 hover:bg-black/80"
      >
        →
      </button>
    </div>
  );
}
