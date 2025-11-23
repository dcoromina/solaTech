"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import logoSvg from "/public/slogo.svg";
import loreAid from "/public/images/logo-dsh.png";
import logoS from "/public/images/s_letter.png";
import logoLet from "/public/images/logo-let.png";
import letter from "/public/images/letter.png";
import logoRep from "/public/RepTrack.png";
import logoMyoo from "/public/myoo.png";
import "../styles.css";
import Link from "next/link";
import {
  UserPlusIcon,
  BuildingOfficeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const NavigationMenuDemo = () => {
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
      className={`flex flex-col md:flex-row w-full justify-between items-center px-4 md:px-8 lg:px-16 py-4 transition-all duration-300 ${isVisible
        ? "translate-y-0 bg-gradient-to-b from-gray-900/95 via-gray-900/80 to-transparent backdrop-blur-md"
        : "-translate-y-full"
        }`}
    >
      {/* Logo - centered on mobile, left-aligned on larger screens */}
      <Link className="flex flex-row space-x-3 items-center justify-center md:justify-start order-1 md:order-none mb-4 md:mb-0" href="/">
        <Image
          src={letter}
          width={120}
          height={40}
          alt="SolaTech Logo"
          className="h-8 w-auto"
        />
      </Link>

      <NavigationMenu.Root className="NavigationMenuRoot hidden md:flex order-3 md:order-none">
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
                <ListItemLogo logo={loreAid} title="SolaDash" href="/soladash">
                  Your main ecosystem dashboard
                </ListItemLogo>
                <ListItemLogo logo={logoRep} title="SolaEvent" href="/reptrack">
                  Manage your events and races The easiest way possible.
                </ListItemLogo>
                <ListItemLogo logo={logoRep} title="SolaClub" href="/solaclub">
                  Fill your coaching needs using this app.
                </ListItemLogo>
                <ListItemLogo logo={logoMyoo} title="SolaPro" href="/solapro">
                  Your professional needs all in one place.
                </ListItemLogo>
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
                <ListItemIcon
                  title="Join Us"
                  href="/careers"
                  icon={<UserPlusIcon className="w-5 h-5" />}
                >
                  Join us in our mission to make a difference.
                </ListItemIcon>
                <ListItemIcon
                  title="The Workplace"
                  href="/workplace"
                  icon={<BuildingOfficeIcon className="w-5 h-5" />}
                >
                  See your future workplace.
                </ListItemIcon>
                <ListItemIcon
                  title="Our Culture"
                  href="/culture"
                  icon={<UsersIcon className="w-5 h-5" />}
                >
                  Hear from our employees and their experiences.
                </ListItemIcon>
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
        href="/joinnow"
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl px-3 py-3 text-md hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/25 hidden lg:flex items-center justify-center whitespace-nowrap"
      >
        Let&apos;s begin
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
  }
>(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames("ListItemLink", className)}
        {...props}
        ref={forwardedRef}
      >
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

// eslint-disable-next-line react/display-name
const ListItemIcon = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    icon?: React.ReactNode;
  }
>(({ className, children, title, icon, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames("ListItemLink", className)}
        {...props}
        ref={forwardedRef}
      >
        <div className="flex flex-row justify-start items-center gap-2">
          <div className="">{icon}</div>
          <div className="flex flex-col">
            <div className="ListItemHeading">{title}</div>
            <p className="ListItemText">{children}</p>
          </div>
        </div>
      </a>
    </NavigationMenu.Link>
  </li>
));

// eslint-disable-next-line react/display-name
const ListItemLogo = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    logo?: any;
  }
>(({ className, children, title, logo, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames("ListItemLink", className)}
        {...props}
        ref={forwardedRef}
      >
        <div className="ListItemHeading flex flex-row w-full gap-2 items-center">
          <Image
            src={logo}
            aria-hidden
            width="25"
            height="25"
            alt="logo"
            className="w-6 h-6 object-contain"
          />
          {title}
        </div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default NavigationMenuDemo;
