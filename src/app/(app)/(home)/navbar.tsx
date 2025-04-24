"use client";
import React, { Children, useState } from 'react'
import { Poppins } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Link from "next/link"
import {cn} from "@/lib/utils"
import { usePathname } from 'next/navigation'
import { NavbarSidebar } from './navbar-sidebar';
import { MenuIcon } from 'lucide-react';


const poppins = Poppins(
    {
        subsets:["latin"],
        weight:["700"],
    }
)

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({
    href,children, isActive
} : NavbarItemProps ) => {
    return (
        <Button 
        asChild
        variant="outline"
        className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-medium" ,isActive && "bg-black text-white hover:bg-black hover:text-white")}
        >
            <Link href={href}>
       {children}
            
            </Link>
        </Button>
    )
}

const navbarItems = [
    {href:"/" , children : "Home"},
    {href:"/about" , children : "About"},
    {href:"/features" , children : "Features"},
    {href:"/pricing" , children : "Pricing"},
    {href:"/contact" , children : "Contact"},
];

const Navbar = () => {
    const pathname = usePathname();
    const [isSideBarOpen,setIsSideBarOpen]=useState(false);
  return (
    <nav className='h-18 flex justify-between border-b bg-white'>

   <Link href="/" className='pl-6 flex items-center'>
   <span className={cn("text-5xl font-semibold flex items-center",poppins.className)}>
   <h1 >nok-nok</h1>
   </span>
    
      </Link>

      <NavbarSidebar 
      items={navbarItems}
      open={isSideBarOpen}
      onOpenChange={setIsSideBarOpen}
      />
        
        <div className=' gap-4 items-center hidden lg:flex font-light '>

            {navbarItems.map((item) => (
                <NavbarItem
                
                key={item.href}
                href={item.href}
                isActive={pathname===item.href}
                >
                    {item.children}
                </NavbarItem>
            ))}
            
        </div>
        <div className='hidden lg:flex items-center gap-2 pr-5'>
        <div className='hidden lg:flex items-center gap-2 pr-5'>
    <Button asChild>
        <Link href="/sign-in">Login</Link>
    </Button>

    <Button asChild>
        <Link href="/sign-up">Start Selling</Link>
    </Button>
</div>
            

        </div>
        <div className='flex lg:hidden items-center justify-center'>
           <Button 
           variant="ghost"
           className='size-12 border-transparent bg-white'
           onClick={()=> setIsSideBarOpen(true)}
           > 
            <MenuIcon/>
           </Button>
            
        </div>

    </nav>
  )
}

export default Navbar