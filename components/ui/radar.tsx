"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Définition des styles partagés (pour remplacer l'import manquant)
const STYLES = {
  FLEX_CENTER: "flex items-center justify-center",
  FLEX_COL: "flex flex-col",
  FLEX_CENTER_JUSTIFIED: "flex items-center justify-center",
};

export interface RadarDataPoint {
  label: string;
  value: number;
  maxValue: number;
}

export interface RadarDataSet {
  name: string;
  color: string;
  data: number[];
}

export interface RadarProps extends React.HTMLAttributes<HTMLDivElement> {
  indicators: RadarDataPoint[];
  datasets: RadarDataSet[];
  width?: number;
  height?: number;
  splitNumber?: number;
  showLegend?: boolean;
  axisLineColor?: string;
  splitLineColor?: string;
  lineBold?: boolean;
  labelColor?: string;
  labelSize?: number;
}

export function Radar({
  indicators = [],
  datasets = [],
  width = 480,
  height = 480,
  splitNumber = 5,
  showLegend = true,
  axisLineColor = "#ddd",
  splitLineColor = "#eee",
  lineBold = false,
  labelColor = "#666",
  labelSize = 12,
  className,
  ...props
}: RadarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeDataset, setActiveDataset] = useState<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current || indicators.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;

    // Fonctions internes au useEffect avec ctx non-null assuré
    const drawRadarBackground = () => {
      // Draw split circles
      for (let i = 1; i <= splitNumber; i++) {
        const r = (radius * i) / splitNumber;
        
        ctx.beginPath();
        for (let j = 0; j < indicators.length; j++) {
          const angle = (Math.PI * 2 * j) / indicators.length - Math.PI / 2;
          const x = centerX + r * Math.cos(angle);
          const y = centerY + r * Math.sin(angle);
          
          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.strokeStyle = splitLineColor;
        ctx.stroke();
      }

      // Draw axis lines
      for (let i = 0; i < indicators.length; i++) {
        const angle = (Math.PI * 2 * i) / indicators.length - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = axisLineColor;
        ctx.stroke();
      }
    };

    const drawDataset = (dataset: RadarDataSet, isActive: boolean) => {
      ctx.beginPath();
      
      for (let i = 0; i < indicators.length; i++) {
        const maxValue = indicators[i].maxValue;
        const value = dataset.data[i];
        const ratio = Math.min(value / maxValue, 1);
        const angle = (Math.PI * 2 * i) / indicators.length - Math.PI / 2;
        const x = centerX + radius * ratio * Math.cos(angle);
        const y = centerY + radius * ratio * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.closePath();
      ctx.strokeStyle = dataset.color;
      ctx.lineWidth = lineBold || isActive ? 2.5 : 1.5;
      ctx.stroke();
      
      ctx.fillStyle = `${dataset.color}33`;
      ctx.fill();
      
      // Draw data points
      for (let i = 0; i < indicators.length; i++) {
        const maxValue = indicators[i].maxValue;
        const value = dataset.data[i];
        const ratio = Math.min(value / maxValue, 1);
        const angle = (Math.PI * 2 * i) / indicators.length - Math.PI / 2;
        const x = centerX + radius * ratio * Math.cos(angle);
        const y = centerY + radius * ratio * Math.sin(angle);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = dataset.color;
        ctx.fill();
      }
    };

    const drawLabels = () => {
      ctx.font = `${labelSize}px sans-serif`;
      ctx.fillStyle = labelColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      for (let i = 0; i < indicators.length; i++) {
        const angle = (Math.PI * 2 * i) / indicators.length - Math.PI / 2;
        const labelRadius = radius * 1.1;
        const x = centerX + labelRadius * Math.cos(angle);
        const y = centerY + labelRadius * Math.sin(angle);
        
        if (angle === -Math.PI / 2) {
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
        } else if (angle === Math.PI / 2) {
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
        } else if (angle === 0) {
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
        } else if (angle === Math.PI) {
          ctx.textAlign = "right";
          ctx.textBaseline = "middle";
        } else if (angle > -Math.PI / 2 && angle < 0) {
          ctx.textAlign = "left";
          ctx.textBaseline = "bottom";
        } else if (angle > 0 && angle < Math.PI / 2) {
          ctx.textAlign = "left";
          ctx.textBaseline = "top";
        } else if (angle > Math.PI / 2 && angle < Math.PI) {
          ctx.textAlign = "right";
          ctx.textBaseline = "top";
        } else {
          ctx.textAlign = "right";
          ctx.textBaseline = "bottom";
        }
        
        ctx.fillText(indicators[i].label, x, y);
      }
    };

    const drawLegend = () => {
      const legendY = height - 30;
      const itemWidth = width / datasets.length;
      
      datasets.forEach((dataset, index) => {
        const x = (itemWidth * index) + (itemWidth / 2);
        
        ctx.fillStyle = dataset.color;
        ctx.fillRect(x - 40, legendY, 12, 12);
        
        ctx.font = `${labelSize}px sans-serif`;
        ctx.fillStyle = labelColor;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(dataset.name, x - 24, legendY + 6);
      });
    };

    // Draw everything
    drawRadarBackground();
    datasets.forEach((dataset, index) => {
      drawDataset(dataset, index === activeDataset);
    });
    drawLabels();
    if (showLegend) {
      drawLegend();
    }
  }, [indicators, datasets, width, height, splitNumber, showLegend, activeDataset, axisLineColor, splitLineColor, lineBold, labelColor, labelSize]);

  const handleLegendClick = (index: number) => {
    setActiveDataset(activeDataset === index ? null : index);
  };

  return (
    <div className={cn("relative", className)} {...props}>
      <canvas 
        ref={canvasRef} 
        width={width} 
        height={height}
        className="mx-auto"
      />
      
      {showLegend && (
        <div className="flex justify-center gap-4 mt-2">
          {datasets.map((dataset, index) => (
            <button
              key={index}
              className={cn(
                "flex items-center gap-2 px-2 py-1 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                activeDataset === index && "bg-gray-100 dark:bg-gray-800"
              )}
              onClick={() => handleLegendClick(index)}
            >
              <span 
                className="block w-3 h-3 rounded-sm" 
                style={{ backgroundColor: dataset.color }}
              />
              <span>{dataset.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Composant IconContainer
export function IconContainer({ 
  text, 
  delay = 0 
}: { 
  text: string; 
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center space-y-2"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      </div>
      <span className="text-center text-sm font-medium">{text}</span>
    </motion.div>
  );
}

// Composant RadarDisplay (renommé pour éviter le conflit)
export function RadarDisplay() {
  const RadarContainer = cn(STYLES.FLEX_CENTER, "absolute inset-0 z-10");

  return (
    <div className={RadarContainer}>
      <div className="relative">
        <div className="h-40 w-40 rounded-full border border-primary/20 bg-primary/5" />
        <div className="absolute left-1/2 top-1/2 h-[150px] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-primary/80 to-transparent animate-radarSpin origin-top" />
      </div>
    </div>
  );
}

// Composant RadarBottomLine
export function RadarBottomLine() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
  );
}

// Composant RadarDemo
export function RadarDemo() {
  return (
    <div className={cn(
      STYLES.FLEX_COL,
      STYLES.FLEX_CENTER_JUSTIFIED,
      "relative w-full space-y-4 overflow-hidden h-96"
    )}>
      <RenderIcons />
      <RadarDisplay />
      <RadarBottomLine />
    </div>
  );
}

// Fonction pour rendre les icônes
function RenderIcons() {
  const RadarRow = "mx-auto w-full";
  const RadarRowResponsive = cn(
    STYLES.FLEX_CENTER_JUSTIFIED,
    "w-full space-x-10 md:justify-between md:space-x-0",
  );

  return (
    <>
      <div className={RadarRow + " max-w-3xl"}>
        <div className={RadarRowResponsive}>
          <IconContainer delay={0.2} text="Web Development" />
          <IconContainer delay={0.4} text="Mobile apps" />
          <IconContainer delay={0.3} text="Designing" />
        </div>
      </div>

      <div className={RadarRow + " max-w-md"}>
        <div className={RadarRowResponsive}>
          <IconContainer delay={0.5} text="Maintenence" />
          <IconContainer delay={0.8} text="Server management" />
        </div>
      </div>

      <div className={RadarRow + " max-w-3xl"}>
        <div className={RadarRowResponsive}>
          <IconContainer delay={0.6} text="GitHub Integration" />
          <IconContainer delay={0.7} text="CMS Integration" />
        </div>
      </div>
    </>
  );
} 