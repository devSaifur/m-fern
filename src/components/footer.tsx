import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo.jpeg'
import { Icons } from './ui/icons'
import { Input } from './ui/input'

export default function Footer() {
  return (
    <footer className="flex h-fit w-full bg-black md:flex-col">
      <div>
        <div>
          <Image
            src={Logo}
            alt="Store logo"
            className="w-20 rounded-xl sm:w-24"
            width={150}
            height={100}
          />

          <div>
            <Icons.instagram className="size-6" />
            <Icons.facebook className="size-6" />
            <Icons.youtube className="size-6" />
          </div>
        </div>

        <div>
          <Link href="/search">Search</Link>
          <Link href="/policies/terms-of-service">Terms of Service</Link>
          <Link href="/policies/return-policy">Return & Warranty Policy</Link>
        </div>

        <div>
          <Link href="/">Home</Link>
          <Link href="/collections/chair">M-FERN Chair Collection</Link>
          <Link href="/collections/table">M-FERN Table Collection</Link>
          <Link href="/collections/sofa">M-FERN Sofa Collection</Link>
          <Link href="/collections/elevating-desk">
            Elevating Desk Collection
          </Link>
          <Link href="/collections">All Collection</Link>
        </div>
        <div></div>
      </div>

      <div>
        <p>
          Subscribe to get special offers, free giveaways, and once in a
          lifetime deals.
        </p>
        <Input />
      </div>
    </footer>
  )
}
