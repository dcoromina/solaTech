import React from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image?: string;
}

export default function HeroSection({
  className,
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  image,
  ...props
}: HeroSectionProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800",
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              {ctaText && (
                <a
                  href={ctaLink || "#"}
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-sm transition-colors duration-300"
                >
                  {ctaText}
                </a>
              )}
              {secondaryCtaText && (
                <a
                  href={secondaryCtaLink || "#"}
                  className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-md border border-gray-200 shadow-sm transition-colors duration-300"
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>
          </div>
          <div className="relative">
            {image && (
              <img
                src={image}
                alt="Hero image"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            )}
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-3xl transform -translate-y-1/2 opacity-50"></div>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
    </div>
  );
}
