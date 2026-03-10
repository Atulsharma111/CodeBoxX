'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useUser, UserButton } from "@clerk/nextjs";

function Header() {

  const { user } = useUser();

  return (
    <div className="p-4 max-w-7xl mx-auto flex justify-between items-center w-full">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <h2 className="font-thin text-2xl font-game">CodeBoxX</h2>
      </div>

      {/* Navbar */}
      <NavigationMenu>
        <NavigationMenuList className="gap-6">

          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="p-2 block">
                Coming Soon
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/projects">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/pricing">Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact-us">Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      {/* Auth Section */}
      {!user ? (

        <Link href="/sign-in">
          <Button className="font-game text-xl" variant="pixel">
            Sign Up
          </Button>
        </Link>

      ) : (

        <div className="flex gap-4 items-center">

          <Link href="/dashboard">
            <Button className="font-game text-xl" variant="pixel">
              Dashboard
            </Button>
          </Link>

          <UserButton />

        </div>

      )}

    </div>
  );
}

export default Header;