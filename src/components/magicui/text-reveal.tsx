"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  // Inverting scrollYProgress to reveal text as you scroll down
  const invertedProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div
        className={cn(
          "flex flex-wrap justify-start  font-bold text-black/20 dark:text-white/20 ",
          className // Allow passing external classNames
        )}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={invertedProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  // Adjusting the opacity based on inverted scroll progress
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2">
      <motion.span
        style={{ opacity: opacity }}
        className="text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};
