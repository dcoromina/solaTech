import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "highlight" | "muted";
  children?: React.ReactNode;
}

export function BentoCard({
  className,
  title,
  description,
  icon,
  image,
  size = "medium",
  variant = "default",
  children,
  ...props
}: BentoCardProps) {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-1 row-span-1",
    large: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
  };

  const variantClasses = {
    default:
      "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
    highlight:
      "bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800",
    muted:
      "bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-md group",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {image && (
        <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {icon && (
          <div className="mb-3 text-primary-600 dark:text-primary-400">
            {icon}
          </div>
        )}
        <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
          {description}
        </p>
        {children && <div className="mt-auto">{children}</div>}
      </div>
    </div>
  );
}
