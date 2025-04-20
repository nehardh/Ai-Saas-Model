"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/clerk-react'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'

const Mobilenav = () => {
    const pathname = usePathname()
  return (
    <header className="header">
        <Link href="/" className="flex items-center gap-2 md:py-2">
            <Image
                src="/assets/images/logo-text.svg"
                alt="logo"
                width={180}
                height={28}
            />
        </Link>
        <nav className="flex gap-2 ">
            <SignedIn>
                <UserButton/>
                <Sheet>
                    <SheetTrigger>
                        <Image 
                            className="cursor-pointer"
                            src="/assets/icons/menu.svg"
                            width={32}
                            height={32} 
                            alt={''}                        
                        />
                    </SheetTrigger>
                    <SheetContent className="sheet-content sm:w-64">
                        <>
                            <Image 
                                src="/assets/images/logo-text.svg" 
                                alt="logo" 
                                width={152} 
                                height={23}
                            />
                            <ul className="header-nav_elements">
                                {navLinks.map((link) => {
                                const isActive = link.route === pathname

                                return (
                                    <li 
                                        key={link.route} 
                                        className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                                    >
                                        <Link className="sidebar-link cursor-pointer" href={link.route}>
                                            <Image 
                                            src={link.icon}
                                            alt="logo"
                                            width={24}
                                            height={24}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                                })}
                            </ul>
                        </>
                    </SheetContent>
                </Sheet>

            </SignedIn>
        </nav>
    </header>
  )
}

export default Mobilenav