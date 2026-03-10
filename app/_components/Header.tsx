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
import { useUser , UserButton } from "@clerk/nextjs";
function Header() {

  const {user} = useUser();
  return (
    <div className="p-4 mmax-w-7xl flex justify-between items-center w-full">
      <div className="flex items-center gap-2 p-4">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <h2 className="font-thin text-2xl font-game">CodeBoxX</h2>
      </div>
      {/* Navbar */}
      <NavigationMenu>
        <NavigationMenuList className='gap-4'>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={"/projects"}>Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={"/pricing"}>Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={"/contect-us"}>Contect us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* SignUp button */}
      {!user? 

        <Link href ={'/sing-in'}>
        <Button className="font-game text-2xl" variant="pixel">Signup</Button>
        </Link>

        :<div className = 'flex gap-4 items-center '>
        <Button className="font-game text-2xl" variant="pixel">Dashboard</Button>
        <UserButton/>

        </div>}
      
    </div>
  );
}

export default Header;
