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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>Grid99</NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>All Collections</NavigationMenuTrigger>
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
          <NavigationMenuItem key={link.href}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
