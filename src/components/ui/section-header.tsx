import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12",
        {
          "text-center mx-auto": align === "center",
          "text-left": align === "left",
          "text-right ml-auto": align === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>
      )}
    </div>
  );
}
