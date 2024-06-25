interface fadeInProps {
  direction?: string;
  delay?: number;
}

export function fadeIn({ delay, direction }: fadeInProps) {
  return {
    hidden: {
      y: direction === "up" ? 45 : direction === "down" ? -45 : 0,
      x: direction === "left" ? 45 : direction === "right" ? -45 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
}
