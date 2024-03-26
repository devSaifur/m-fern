'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { NavigationMenuContent } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'

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

export default function NavCollections() {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
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
    </NavigationMenu>
  )
}
