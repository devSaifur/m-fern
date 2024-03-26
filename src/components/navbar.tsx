'use client'

import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import MobileNav from './mobile-nav'
import { Icons } from './ui/icons'

export const collections: { title: string; href: string }[] = [
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
    <NavigationMenu className="mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem className="uppercase">Grid</NavigationMenuItem>
        <NavigationMenuItem className="hidden sm:inline-flex">
          <Link href="/collections">
            <NavigationMenuTrigger>All Collections</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            {collections.map((collection) => (
              <Link
                href={collection.href}
                legacyBehavior
                passHref
                key={collection.href}
              >
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
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
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        <div className="flex">
          <NavigationMenuItem className="hidden sm:inline-flex">
            <Link href="/user" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Icons.user className="size-4" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/search" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Icons.search className="size-4" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <MobileNav />

          <NavigationMenuItem>
            <Link href="/cart" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Icons.cart className="size-4" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
