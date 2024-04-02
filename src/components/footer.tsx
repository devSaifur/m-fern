import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo.jpeg'
import { Button, buttonVariants } from './ui/button'
import { Icons } from './ui/icons'
import { Input } from './ui/input'
import { Separator } from './ui/separator'

export default function Footer() {
  return (
    <footer className="mt-12 flex h-fit w-full flex-col bg-black px-8 py-6 text-white md:flex-row md:justify-center md:gap-x-20 md:py-16">
      <div className="flex items-center justify-between md:max-h-36 md:flex-col md:items-start md:gap-y-4 md:py-4">
        <Image
          src={Logo}
          alt="Store logo"
          className="w-16 rounded-xl sm:w-20"
          width={150}
          height={100}
        />

        <div className="flex gap-x-1">
          <Link href="/" className={buttonVariants({ size: 'icon' })}>
            <Icons.instagram strokeWidth={1.5} className="size-6 text-white" />
          </Link>
          <Link href="/" className={buttonVariants({ size: 'icon' })}>
            <Icons.facebook strokeWidth={1.5} className="size-6 text-white" />
          </Link>
          <Link href="/" className={buttonVariants({ size: 'icon' })}>
            <Icons.youtube strokeWidth={1.5} className="size-6 text-white" />
          </Link>
        </div>
      </div>

      <Separator className="my-6 bg-gray-600 md:hidden" />

      <div className="flex flex-col gap-y-4 py-4">
        <Link href="/search">Search</Link>
        <Link href="/policies/terms-of-service">Terms of Service</Link>
        <Link href="/policies/return-policy">Return & Warranty Policy</Link>
      </div>

      <Separator className="my-6 bg-gray-600 md:hidden" />

      <div className="flex flex-col gap-y-4 py-4">
        <Link href="/">Home</Link>
        <Link href="/collections/chair">M-FERN Chair Collection</Link>
        <Link href="/collections/table">M-FERN Table Collection</Link>
        <Link href="/collections/sofa">M-FERN Sofa Collection</Link>
        <Link href="/collections/elevating-desk">
          Elevating Desk Collection
        </Link>
        <Link href="/collections">All Collection</Link>
      </div>

      <Separator className="my-6 bg-gray-600 md:hidden" />

      <div className="flex max-w-sm flex-col gap-y-4 md:py-4">
        <p>
          Subscribe to get special offers, free giveaways, and once in a
          lifetime deals.
        </p>
        <form action="" className="flex flex-col gap-y-2 md:gap-y-4">
          <Input
            className="text-white"
            placeholder="Enter your email"
            type="email"
          />
          <Button type="submit" className="mr-auto" variant="destructive">
            Subscribe
          </Button>
        </form>
      </div>
    </footer>
  )
}
