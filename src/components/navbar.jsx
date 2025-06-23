"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import logoSvg from "/public/slogo.svg";
import loreAid from "/public/images/logo-dsh.png";
import logoS from "/public/images/logo-s.png";
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

      if (currentScrollY > lastScrollY) {
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
      className={`flex flex-row w-full justify-center md:justify-evenly items-center px-16 md:px-36 py-3 transition-transform duration-300 ${
        isVisible
          ? "translate-y-0 bg-gradient-to-b from-gray-900/90 via-gray-900/60 to-transparent "
          : "-translate-y-full"
      }`}
    >
      <div className="flex flex-row space-x-3 items-center ">
        <Image src={letter} width="150" height="auto" alt="logo" />
      </div>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList ">
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
                        src={logoSvg}
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

                <ListItem href="https://stitches.dev/" title="Story">
                  Brief history and inspiration behind the startup.
                </ListItem>
                <ListItem href="/colors" title="Mission">
                  The core purpose and values driving the company.
                </ListItem>
                <ListItem href="https://icons.radix-ui.com/" title="Vision">
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
                <ListItemLogo
                  logo={loreAid}
                  title="SolaDash"
                  href="/primitives/docs/guides/animation"
                >
                  You main ecosystem dashboard
                </ListItemLogo>
                <ListItemLogo
                  logo={logoRep}
                  title="RepTrack"
                  href="/primitives/docs/guides/animation"
                >
                  Track your workouts in a simpler way.
                </ListItemLogo>
                <ListItemLogo
                  logo={logoRep}
                  title="SolaClub"
                  href="/primitives/docs/guides/animation"
                >
                  Fill your coaching need using this app.
                </ListItemLogo>
                <ListItemLogo
                  logo={logoMyoo}
                  title="SolaPro"
                  href="/primitives/docs/overview/accessibility"
                >
                  Your Professional needs all in one place.
                </ListItemLogo>
                <ListItem
                  title="Wearables"
                  href="/primitives/docs/overview/releases"
                >
                  Devices to use with our solutions.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Careers <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent ">
              <ul className="List two">
                <ListItemIcon
                  title="Join Us"
                  href="/primitives/docs/overview/introduction"
                  icon={<UserPlusIcon className="w-5 h-5" />}
                >
                  Join us in our mission to make a difference.
                </ListItemIcon>
                <ListItemIcon
                  title="The Workplace"
                  href="/primitives/docs/overview/getting-started"
                  icon={<BuildingOfficeIcon className="w-5 h-5" />}
                >
                  See your future workplace.
                </ListItemIcon>

                <ListItemIcon
                  title="Our Culture"
                  href="/primitives/docs/guides/styling"
                  icon={<UsersIcon className="w-5 h-5" />}
                >
                  {" "}
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
      <div className="text-blue-500 rounded-xl p-2 hidden md:block hover:bg-white hover:text-[#4262db] cursor-pointer w-fit bg-white whitespace-nowrap">
        Contact us
      </div>
    </div>
  );
};

// eslint-disable-next-line react/display-name
const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
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
  )
);

// eslint-disable-next-line react/display-name
const ListItemIcon = React.forwardRef(
  ({ className, children, title, icon, ...props }, forwardedRef) => (
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
              {" "}
              <div className="ListItemHeading">{title}</div>
              <p className="ListItemText">{children}</p>
            </div>
          </div>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

// eslint-disable-next-line react/display-name
const ListItemLogo = React.forwardRef(
  ({ className, children, title, logo, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading flex flex-row w-full gap-2 items-center">
            <Image
              onError={null}
              src={logo}
              aria-hidden
              width="25"
              height="auto"
              alt="logo"
            />
            {title}
          </div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavigationMenuDemo;
