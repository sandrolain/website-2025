import { useEffect, useState } from "react";
import { commonColors } from "@heroui/react";

interface ScrollProgressProps {
  width?: number;
}

export const ScrollProgress = ({ width = 4 }: ScrollProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(Math.max(scrollPercent, 0), 1));
    };

    // Usa requestAnimationFrame per aggiornamenti fluidi
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funzione per convertire hex a RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  // Funzione per interpolare tra due colori
  const interpolateColor = (color1: string, color2: string, factor: number) => {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
    const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
    const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);

    return `rgb(${r}, ${g}, ${b})`;
  };

  // Calcola il colore basato sul progresso con interpolazione graduale
  const getProgressColor = (progress: number) => {
    const colors = [
      commonColors.blue[500],
      commonColors.cyan[500],
      commonColors.green[500],
      commonColors.yellow[500],
      commonColors.red[500],
      commonColors.pink[500],
      commonColors.purple[500],
    ];

    if (progress <= 0) return colors[0];
    if (progress >= 1) return colors[colors.length - 1];

    const scaledProgress = progress * (colors.length - 1);
    const lowerIndex = Math.floor(scaledProgress);
    const upperIndex = Math.min(lowerIndex + 1, colors.length - 1);
    const factor = scaledProgress - lowerIndex;

    return interpolateColor(colors[lowerIndex], colors[upperIndex], factor);
  };

  const progressColor = getProgressColor(progress);
  const progressPercentage = progress * 100;

  return (
    <>
      {/* Barra superiore */}
      <div
        className="fixed top-0 left-0 right-0 z-[100] bg-black/20"
        style={{ height: `${width}px` }}
      >
        <div
          className="h-full m-auto"
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: progressColor,
            boxShadow: `0 0 10px ${progressColor}40`,
          }}
        />
      </div>

      {/* Barra inferiore */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[100] bg-black/20"
        style={{ height: `${width}px` }}
      >
        <div
          className="h-full m-auto"
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: progressColor,
            boxShadow: `0 0 10px ${progressColor}40`,
          }}
        />
      </div>

      {/* Barra sinistra */}
      <div
        className="fixed top-0 bottom-0 left-0 z-[100] bg-black/20"
        style={{ width: `${width}px` }}
      >
        <div
          className="w-full m-auto absolute"
          style={{
            height: `${progressPercentage}%`,
            backgroundColor: progressColor,
            boxShadow: `0 0 10px ${progressColor}40`,
            top: `${(100 - progressPercentage) / 2}%`,
          }}
        />
      </div>

      {/* Barra destra */}
      <div
        className="fixed top-0 bottom-0 right-0 z-[100] bg-black/20"
        style={{ width: `${width}px` }}
      >
        <div
          className="w-full m-auto absolute"
          style={{
            height: `${progressPercentage}%`,
            backgroundColor: progressColor,
            boxShadow: `0 0 10px ${progressColor}40`,
            top: `${(100 - progressPercentage) / 2}%`,
          }}
        />
      </div>
    </>
  );
};
