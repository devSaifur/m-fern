'use client'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { Icons } from './ui/icons'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export const NavLinks = [
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
  {
    title: 'Login',
    href: '/login',
  },
]

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
  {
    title: 'All Collections',
    href: '/collections',
  },
]

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <Icons.menu className="size-6 text-white" />
      </SheetTrigger>
      <SheetContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>All Collection</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-y-2">
              {collections.map((collection) => (
                <Link href={collection.href} key={collection.href}>
                  {collection.title}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <nav className="flex flex-col gap-y-2">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex gap-x-4 pt-6">
          <Link href="/account">
            <Icons.instagram className="size-4" />
          </Link>
          <Link href="/account">
            <Icons.facebook className="size-4" />
          </Link>
          <Link href="/account">
            <Icons.youtube className="size-4" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
