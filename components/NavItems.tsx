"use client";

import React from 'react'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
]

const NavItems = () => {
    const pathname = usePathname() // This hook gives us the current path
   
   
    // We can use this to conditionally style the active link if needed
    // const isActive = (href: string) => pathname === href

    // This component renders the navigation items
    // It maps over the navItems array and creates a Link for each item

    return (  
      <nav className="flex items-center gap-4">
        {navItems.map(({label,href}) => (
            <Link                
                key={label}
                href={href}
                className={cn(pathname === href && 'text-primary font-semibold')}
            >
            {label}
            </Link>   
        ))}
      </nav>
  )
}

export default NavItems