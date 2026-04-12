import { useState, useEffect, useCallback } from "react";

interface HeroSliderProps {
  images: string[];
  interval?: number;
  className?: string;
}

const HeroSlider = ({ images, interval = 5000, className = "" }: HeroSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((p) => (p + 1) % images.length);
      setIsTransitioning(false);
    }, 600);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            i === current
              ? `${isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"}`
              : "opacity-0 scale-95"
          }`}
        />
      ))}
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary-foreground w-6" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
