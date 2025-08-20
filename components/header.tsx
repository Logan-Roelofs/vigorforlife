"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigationLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Wellness Services",
    href: "/wellness-services",
    children: [
      {
        title: "Individual Wellness Coaching",
        href: "/Individual-Wellness-Coaching",
      },
      {
        title: "Transforming Workplace Culture",
        href: "/Transforming-Workplace-Culture",
      },
      {
        title: "Relationship Wellness",
        href: "/Relationship-Wellness",
      },
      {
        title: "Customized Employee Satisfaction Survey",
        href: "/Customized-Employee-Satisfaction-Survey",
      },
    ],
  },

  {
    title: "About Jim",
    href: "/about-jim",
  },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center px-6 justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/static/vfllogo.png"
              alt="PeopleSmartTools Logo"
              width={671}
              height={190}
              style={{ width: "auto", height: 64 }}
              priority
            />
          </Link>
        </div>

        {/* Move navigation links and Contact Us button to the right in a single flex container with consistent spacing */}
        <div className="hidden lg:flex items-center space-x-6">
          <DesktopNav />
        <Button variant="default" size="sm" asChild>
          <a href="/contact">Contact Us</a>
        </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden flex-1 justify-end">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationLinks.map((link) => {
          if (link.children) {
            return (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  {link.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] grid-cols-1 gap-3 p-4 md:grid-cols-2 lg:grid-cols-2">
                    {link.children.map((child) => (
                      <ListItem
                        key={child.title}
                        title={child.title}
                        href={child.href}
                      >
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          }
          return (
            <Link key={link.title} href={link.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link.title}
              </NavigationMenuLink>
            </Link>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden mr-4">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[350px]">
        <div className="flex flex-col gap-4 py-4">
          {navigationLinks.map((link) => {
            if (link.children) {
              return (
                <div key={link.title} className="flex flex-col gap-2">
                  <h4 className="font-medium text-left pl-4">{link.title}</h4>
                  <div className="flex flex-col gap-2 pl-8 pr-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-left pl-4"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
            
            return (
              <Link
                key={link.title}
                href={link.href}
                className="font-medium hover:text-foreground/80 transition-colors text-left pl-4"
              >
                {link.title}
              </Link>
            )
          })}
          
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
            <Button variant="default" className="w-full" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
