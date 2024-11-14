import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Ripple from "@/components/ui/ripple";
import { AnimatedBeamDemo } from "@/components/ecosystem-chart";
const features = [
  {
    Icon: InputIcon,
    name: "",
    description: "First health and fitness ecosystem.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className=" absolute  -top-20 opacity-60  flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-gray-300">
          Myoo
        </p>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Myoo",
    description: "First cutting-edge health ecosystem.",
    href: "/",
    cta: "Learn more",
    background: <AnimatedBeamDemo />,
    className: "",
  },
  {
    Icon: CalendarIcon,
    name: "Health",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "More",
    description: "Get notified when s.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3 grid-cols-2 p-20 w-full">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
