import React from "react";
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

const NavigationMenuDemo = () => {
  return (
    <div className="flex flex-row w-full justify-center md:justify-evenly items-center  px-16 md:px-36">
      <div className="flex flex-row space-x-3 items-center">
        <Image src={letter} aria-hidden width="150" height="auto" alt="logo" />
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
                    <a className="Callout" href="/">
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
                    </a>
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
                  title="LoreAid"
                  href="/primitives/docs/guides/animation"
                >
                  A app to help take care of the elderly.
                </ListItemLogo>
                <ListItemLogo
                  logo={logoRep}
                  title="RepTrack"
                  href="/primitives/docs/guides/animation"
                >
                  Track your workouts in a simpler way.
                </ListItemLogo>
                <ListItemLogo
                  logo={logoMyoo}
                  title="Myoo.io"
                  href="/primitives/docs/overview/accessibility"
                >
                  A Health and Fitness ecoSystem, using the latest tech to
                  improve health.
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
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <ListItem
                  title="Introduction"
                  href="/primitives/docs/overview/introduction"
                >
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
                <ListItem
                  title="Getting started"
                  href="/primitives/docs/overview/getting-started"
                >
                  A quick tutorial to get you up and running with Radix
                  Primitives.
                </ListItem>
                <ListItem
                  title="Styling"
                  href="/primitives/docs/guides/styling"
                >
                  Unstyled and compatible with any styling solution.
                </ListItem>
                <ListItem
                  title="Animation"
                  href="/primitives/docs/guides/animation"
                >
                  Use CSS keyframes or any animation library of your choice.
                </ListItem>
                <ListItem
                  title="Accessibility"
                  href="/primitives/docs/overview/accessibility"
                >
                  Tested in a range of browsers and assistive technologies.
                </ListItem>
                <ListItem
                  title="Releases"
                  href="/primitives/docs/overview/releases"
                >
                  Radix Primitives releases and their changelogs.
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
