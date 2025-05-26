"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ConfettiEffect } from "./confetti-effect";

interface AnimatedCountdownProps {
  targetDate: Date | string;
  className?: string;
  onComplete?: () => void;
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
  showTimezone?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

export function AnimatedCountdown({
  targetDate,
  className,
  onComplete,
  size = "md",
  showLabels = true,
  showTimezone = true,
}: AnimatedCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  });
  const [timezone, setTimezone] = useState<string>("");
  const [triggerConfetti, setTriggerConfetti] = useState(false);
  const [lastMilestone, setLastMilestone] = useState<string | null>(null);

  useEffect(() => {
    // Get user's timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(userTimezone);

    const target =
      typeof targetDate === "string" ? new Date(targetDate) : targetDate;

    const calculateTimeLeft = () => {
      const difference = target.getTime() - new Date().getTime();

      if (difference <= 0) {
        if (onComplete) onComplete();
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          total: 0,
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      // Check for milestones
      const currentMilestone = checkMilestone(days, hours, minutes, seconds);
      if (currentMilestone && currentMilestone !== lastMilestone) {
        setLastMilestone(currentMilestone);
        setTriggerConfetti(true);
      }

      return {
        days,
        hours,
        minutes,
        seconds,
        total: difference,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      if (timeLeft.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete, lastMilestone]);

  // Check for milestone moments to trigger confetti
  const checkMilestone = (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ): string | null => {
    if (days === 30 && hours === 0 && minutes === 0 && seconds === 0)
      return "30days";
    if (days === 7 && hours === 0 && minutes === 0 && seconds === 0)
      return "7days";
    if (days === 1 && hours === 0 && minutes === 0 && seconds === 0)
      return "1day";
    if (days === 0 && hours === 1 && minutes === 0 && seconds === 0)
      return "1hour";
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0)
      return "now";
    return null;
  };

  // Reset confetti trigger after animation
  const handleConfettiComplete = () => {
    setTriggerConfetti(false);
  };

  // Size variants
  const sizeVariants = {
    sm: {
      container: "gap-2",
      box: "px-2 py-1 rounded-md min-w-[2.5rem]",
      digit: "text-xl",
      label: "text-[10px]",
    },
    md: {
      container: "gap-3",
      box: "px-3 py-2 rounded-md min-w-[3.5rem]",
      digit: "text-3xl",
      label: "text-xs",
    },
    lg: {
      container: "gap-4",
      box: "px-4 py-3 rounded-md min-w-[5rem]",
      digit: "text-5xl",
      label: "text-sm",
    },
  };

  // Format numbers to always have two digits
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("flex items-center", sizeVariants[size].container)}>
        <div className="grid grid-cols-4 gap-2 md:gap-3">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "bg-neutral-800/50 backdrop-blur-sm text-center relative overflow-hidden",
                sizeVariants[size].box
              )}
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={timeLeft.days}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={cn(
                    "font-display font-bold text-white block",
                    sizeVariants[size].digit
                  )}
                >
                  {formatNumber(timeLeft.days)}
                </motion.span>
              </AnimatePresence>
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {showLabels && (
              <span
                className={cn(
                  "text-neutral-400 mt-1",
                  sizeVariants[size].label
                )}
              >
                Days
              </span>
            )}
          </div>

          <div className="flex flex-col items-center">
            <div
              className={cn(
                "bg-neutral-800/50 backdrop-blur-sm text-center relative overflow-hidden",
                sizeVariants[size].box
              )}
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={timeLeft.hours}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={cn(
                    "font-display font-bold text-white block",
                    sizeVariants[size].digit
                  )}
                >
                  {formatNumber(timeLeft.hours)}
                </motion.span>
              </AnimatePresence>
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {showLabels && (
              <span
                className={cn(
                  "text-neutral-400 mt-1",
                  sizeVariants[size].label
                )}
              >
                Hours
              </span>
            )}
          </div>

          <div className="flex flex-col items-center">
            <div
              className={cn(
                "bg-neutral-800/50 backdrop-blur-sm text-center relative overflow-hidden",
                sizeVariants[size].box
              )}
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={timeLeft.minutes}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={cn(
                    "font-display font-bold text-white block",
                    sizeVariants[size].digit
                  )}
                >
                  {formatNumber(timeLeft.minutes)}
                </motion.span>
              </AnimatePresence>
              <motion.div
                className="absolute inset-0 bg-accent/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
            {showLabels && (
              <span
                className={cn(
                  "text-neutral-400 mt-1",
                  sizeVariants[size].label
                )}
              >
                Mins
              </span>
            )}
          </div>

          <div className="flex flex-col items-center">
            <div
              className={cn(
                "bg-neutral-800/50 backdrop-blur-sm text-center relative overflow-hidden",
                sizeVariants[size].box
              )}
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={timeLeft.seconds}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={cn(
                    "font-display font-bold text-white block",
                    sizeVariants[size].digit
                  )}
                >
                  {formatNumber(timeLeft.seconds)}
                </motion.span>
              </AnimatePresence>
              {/* Fixed seconds animation */}
              <motion.div
                className="absolute inset-0 bg-accent/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
              ></motion.div>
            </div>
            {showLabels && (
              <span
                className={cn(
                  "text-neutral-400 mt-1",
                  sizeVariants[size].label
                )}
              >
                Secs
              </span>
            )}
          </div>
        </div>
      </div>

      {showTimezone && (
        <div className="mt-2 text-xs text-neutral-400">
          Timezone: {timezone}
        </div>
      )}

      <ConfettiEffect
        trigger={triggerConfetti}
        onComplete={handleConfettiComplete}
        colors={["#82FFA5", "#ffffff", "#9c9c9c"]}
      />
    </div>
  );
}
