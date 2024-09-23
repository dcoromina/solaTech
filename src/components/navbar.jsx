import React from "react";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import LogoSvg from "/public/slogo.svg";
import "../styles.css";

const NavigationMenuDemo = () => {
  return (
    <div className="flex flex-row w-full justify-evenly items-center p-10">
      <div className="flex flex-row space-x-3 ">
        <Image src={LogoSvg} aria-hidden width="38" height="38" alt="logo" />
        <p className="uppercase  text-white font-extrabold text-lg w-fit">
          Sola Tech
        </p>
      </div>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
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
                        src={LogoSvg}
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

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="NavigationMenuLink"
              href="https://github.com/radix-ui"
            >
              Contact us
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
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

export default NavigationMenuDemo;
