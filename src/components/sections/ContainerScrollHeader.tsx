"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export function ContainerScrollHeader({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{ perspective: "1000px" }}
      >
        <ScrollTitle translate={translate} titleComponent={titleComponent} />
        <ScrollCard rotate={rotate} translate={translate} scale={scale}>
          {children}
        </ScrollCard>
      </div>
    </div>
  );
}

export const ScrollTitle = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export function ScrollCard({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={cn(
        "max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl",
      )}
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
}

// Simple graph preview using SVG and Tailwind (no external chart lib required)
export function GraphPreview() {
  return (
    <div className="h-full w-full grid md:grid-cols-2 gap-4">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Yield Trend</h3>
        <svg viewBox="0 0 400 200" className="w-full h-48">
          <defs>
            <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <polyline
            fill="url(#grad)"
            stroke="#22c55e"
            strokeWidth="2"
            points="0,150 50,140 100,120 150,110 200,90 250,100 300,70 350,60 400,55 400,200 0,200"
          />
          <g stroke="#94a3b8" strokeDasharray="4 4" strokeWidth="1">
            <line x1="0" y1="150" x2="400" y2="150" />
            <line x1="0" y1="100" x2="400" y2="100" />
            <line x1="0" y1="50" x2="400" y2="50" />
          </g>
        </svg>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Tree Count by Block</h3>
        <div className="flex items-end gap-2 h-48">
          {[
            [16, "#22c55e"],
            [28, "#16a34a"],
            [20, "#10b981"],
            [34, "#059669"],
            [26, "#22c55e"],
          ].map(([h, color], i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div
                className="w-full rounded-t-md"
                style={{ height: `${Number(h)}%`, background: String(color) }}
              />
              <span className="mt-2 text-xs text-muted-foreground">B{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
