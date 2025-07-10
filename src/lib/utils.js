import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const PlaceholderImg = (
  width,
  height
) => {
  return `https://placehold.co/${width}x${height}.png`;
};