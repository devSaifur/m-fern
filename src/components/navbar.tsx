'use client'
import Link from 'next/link'
import MobileNav from './mobile-nav'
import { Icons } from './ui/icons'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

import Image from 'next/image'
import Logo from '../../public/images/logo.jpeg'

const collections: { title: string; href: string }[] = [
  {
    title: 'Chair',
    href: '/collections/chair',
  },
  {
    title: 'Table',
    href: '/collections/table',
  },
  {
    title: 'Sofa',
    href: '/collections/sofa',
  },
  {
    title: 'Storage',
    href: '/collections/storage',
  },
]

const NavLinks = [
  {
    title: 'Elevating Desk Series',
    href: 'collections/elevating-desk',
  },
  {
    title: 'Line Collection',
    href: 'collections/line-collection',
  },
  {
    title: 'Videos',
    href: '/videos',
  },
  {
    title: 'Article',
    href: '/article',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export default function Navbar() {
  return (
    <NavigationMenu className="mx-auto pt-6 sm:pt-12">
      <NavigationMenuList className="gap-x-28 sm:gap-x-2">
        <NavigationMenuItem>
          <Link href="/">
            <Image
              src={Logo}
              sizes='sizes="(max-width: 768px) 15vw, (max-width: 1200px) 20vw, 20vw"'
              alt="Store logo"
              className="w-20 rounded-xl sm:w-24"
            />
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden sm:inline-flex">
          <NavigationMenuTrigger className="bg-transparent text-xl text-white">
            <Link href="/collections">All Collection</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="left-28 flex flex-col gap-y-6 bg-transparent bg-none py-10 text-xl md:w-72">
            {collections.map((collection) => (
              <Link
                href={collection.href}
                legacyBehavior
                passHref
                key={collection.href}
                className="bg-transparent"
              >
                <NavigationMenuLink
                  className={'bg-transparent'}
                  key={collection.title}
                >
                  {collection.title}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>

        {NavLinks.map((link) => (
          <NavigationMenuItem className="hidden sm:inline-flex" key={link.href}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'bg-transparent text-xl text-white',
                )}
              >
                {link.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        <div className="flex gap-x-4">
          <NavigationMenuItem className="hidden sm:inline-flex">
            <Link href="/user" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'bg-transparent text-white',
                )}
              >
                <Icons.user className="size-6" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/search" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'bg-transparent text-white',
                )}
              >
                <Icons.search className="size-6" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <MobileNav />

          <NavigationMenuItem>
            <Link href="/cart" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  'bg-transparent text-white',
                )}
              >
                <Icons.cart className="size-6" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
