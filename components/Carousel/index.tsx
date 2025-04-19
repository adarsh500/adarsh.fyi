import React, { useEffect, useRef, useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";
import clsx from "clsx";
import BlurImage from "@components/BlurImage";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const intervalTime = 3000; // 3 seconds

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => {
      resetTimeout();
    };
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          // <img
          //   key={i}
          //   src={src}
          //   alt="carousel"
          //   className="w-full flex-shrink-0 object-cover h-64 rounded-2xl"
          // />
          <BlurImage
            width={760}
            height={400}
            src={src}
            alt="thumbnail"
            aspectRatio="auto 1042 / 401"
            priority
            loading="eager"
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <LuChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <LuChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={clsx(
              "w-3 h-3 rounded-full",
              index === i ? "bg-black" : "bg-gray-300"
            )}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
