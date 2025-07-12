import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const PlaceholderImg = () => {
  return `https://placehold.co/400x400.png`;
};
