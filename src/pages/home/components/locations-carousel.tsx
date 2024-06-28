"use client";

import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

export function LocationsCarousel() {
  const [sliderRef] = useKeenSlider({
    mode: "snap",
    slides: {
      origin: "center",
      perView: 3,
      spacing: 28,
    },
    breakpoints: {
      "(min-width: 300px)": {
        slides: {
          perView: 1.2,
          spacing: 28,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 2.2,
          spacing: 28,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: "auto",
          spacing: 28,
        },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider h-[320px]">
      <div className="keen-slider__slide">
        <Image
          src="/tourist-spot-1.png"
          alt="Foto de um ponto turístico da cidade"
          width={400}
          height={320}
        />
      </div>

      <div className="keen-slider__slide">
        <Image
          src="/tourist-spot-2.png"
          alt="Foto de um ponto turístico da cidade"
          width={400}
          height={320}
        />
      </div>

      <div className="keen-slider__slide">
        <Image
          src="/tourist-spot-3.png"
          alt="Foto de um ponto turístico da cidade"
          width={400}
          height={320}
        />
      </div>
    </div>
  );
}
