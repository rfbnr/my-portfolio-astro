import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const ITEMS_PER_PAGE = 6;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}
