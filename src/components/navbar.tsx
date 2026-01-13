"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dumbbell } from "lucide-react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import loreAid from "../../public/images/logo-dsh.png";
import logoS from "../../public/images/s_letter.png";
import letter from "../../public/images/letter.png";
import logoRep from "../../public/RepTrack.png";
import logoMyoo from "../../public/myoo.png";
import "../styles.css";
import Link from "next/link";
import {
  UserPlusIcon,
  BuildingOfficeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 flex flex-row w-[90%] md:w-[60%] justify-center md:justify-between items-center gap-8 px-6 py-3 transition-all duration-300 rounded-full border-none ${isVisible
        ? "top-5 translate-y-0 backdrop-blur-md bg-transparent"
        : "-translate-y-40"
        }`}
    >
      {/* Logo - centered on mobile, left-aligned on larger screens */}
      <Link className="" href="/">
        <Image
          src={letter}
          width={120}
          height={40}
          alt="SolaTech Logo"
          className="h-8 w-auto object-contain"
          priority
        />
      </Link>

      <NavigationMenu.Root className="NavigationMenuRoot hidden md:flex">
        <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              About <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List one">
                <li style={{ gridRow: "span 3" }}>
                  <NavigationMenu.Link asChild>
                    <Link className="Callout" href="/">
                      <Image
                        style={{ objectFit: "contain" }}
                        src={logoS}
                        aria-hidden
                        width="38"
                        height="38"
                        alt="logo"
                      />
                      <div className="CalloutHeading uppercase">Sola Tech</div>
                      <p className="CalloutText">
                        Apps and solutions for the health and fitness sectors
                      </p>
                    </Link>
                  </NavigationMenu.Link>
                </li>

                <ListItem href="/about" title="Story">
                  Brief history and inspiration behind the startup.
                </ListItem>
                <ListItem href="/mission" title="Mission">
                  The core purpose and values driving the company.
                </ListItem>
                <ListItem href="/vision" title="Vision">
                  Long-term goals and aspirations.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Products <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List one">
                <ListItem logo={loreAid} title="SolaDash" href="/soladash">
                  Your main ecosystem dashboard
                </ListItem>
                <ListItem logo={logoRep} title="SolaEvent" href="/reptrack">
                  Manage your events and races The easiest way possible.
                </ListItem>
                <ListItem logo={logoRep} title="SolaClub" href="/solaclub">
                  Fill your coaching needs using this app.
                </ListItem>
                <ListItem logo={logoMyoo} title="SolaPro" href="/solapro">
                  Your professional needs all in one place.
                </ListItem>
                <ListItem title="Wearables" href="/wearables">
                  Devices to use with our solutions.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Careers <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <ListItem
                  title="Join Us"
                  href="/careers"
                  icon={<UserPlusIcon className="w-5 h-5 text-purple-500" />}
                >
                  Join us in our mission to make a difference.
                </ListItem>
                <ListItem
                  title="The Workplace"
                  href="/workplace"
                  icon={<BuildingOfficeIcon className="w-5 h-5 text-purple-500" />}
                >
                  See your future workplace.
                </ListItem>
                <ListItem
                  title="Our Culture"
                  href="/culture"
                  icon={<UsersIcon className="w-5 h-5 text-purple-500" />}
                >
                  Hear from our employees and their experiences.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>


      <Link
        href="/letsbegin"
        className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full px-6 py-2.5 text-sm font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/25 hidden lg:flex items-center justify-center gap-2 whitespace-nowrap"
      >
        Let&apos;s begin
        <Dumbbell className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
      </Link>
    </div>
  );
};

// eslint-disable-next-line react/display-name
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
    logo?: any;
  }
>(({ className, children, title, icon, logo, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames("ListItemLink", className)}
        {...props}
        ref={forwardedRef}
      >
        <div className="flex flex-row justify-start items-center gap-3">
          {(icon || logo) && (
            <div className="flex-shrink-0">
              {icon}
              {logo && (
                <Image
                  src={logo}
                  aria-hidden
                  width={25}
                  height={25}
                  alt="logo"
                  className="w-6 h-6 object-contain"
                />
              )}
            </div>
          )}
          <div className="flex flex-col">
            <div className="ListItemHeading">{title}</div>
            <p className="ListItemText">{children}</p>
          </div>
        </div>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default Navbar;
