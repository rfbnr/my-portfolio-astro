"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PaginationProps } from "@/types";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getVisiblePages = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];
    const showEllipsisStart = currentPage > 3;
    const showEllipsisEnd = currentPage < totalPages - 2;

    if (totalPages <= 5) {
      // Show all pages if 5 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (showEllipsisStart) {
        pages.push("...");
      }

      // Show pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (showEllipsisEnd) {
        pages.push("...");
      }

      // Always show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {/* Previous Button */}
      <motion.button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300",
          currentPage === 1
            ? "text-text-muted cursor-not-allowed opacity-50"
            : "glass glass-hover text-text-secondary hover:text-text-primary",
        )}
        whileHover={currentPage !== 1 ? { scale: 1.05 } : undefined}
        whileTap={currentPage !== 1 ? { scale: 0.95 } : undefined}
        aria-label="Previous page">
        <ChevronLeft size={18} />
      </motion.button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {visiblePages.map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="w-10 h-10 flex items-center justify-center text-text-muted">
              ...
            </span>
          ) : (
            <motion.button
              key={page}
              onClick={() => onPageChange(page)}
              className={cn(
                "w-10 h-10 rounded-lg font-medium transition-all duration-300",
                currentPage === page
                  ? "bg-accent-blue text-white"
                  : "glass glass-hover text-text-secondary hover:text-text-primary",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}>
              {page}
            </motion.button>
          ),
        )}
      </div>

      {/* Next Button */}
      <motion.button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300",
          currentPage === totalPages
            ? "text-text-muted cursor-not-allowed opacity-50"
            : "glass glass-hover text-text-secondary hover:text-text-primary",
        )}
        whileHover={currentPage !== totalPages ? { scale: 1.05 } : undefined}
        whileTap={currentPage !== totalPages ? { scale: 0.95 } : undefined}
        aria-label="Next page">
        <ChevronRight size={18} />
      </motion.button>
    </div>
  );
}
