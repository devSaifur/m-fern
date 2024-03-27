import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="absolute top-0 grid h-3/5 w-full place-content-center sm:h-3/4">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/home-hero.jpg" />
          <source
            media="(max-width: 1200px)"
            srcSet="/images/home-hero-large.jpg"
          />
          <Image
            src="/images/home-hero-large.jpg" // Default image
            alt="Descriptive text for the image"
            className="-z-50 object-cover"
            fill
          />
        </picture>
        <div className="">
          <h1 className="text-4xl font-bold">Modern Furniture</h1>
          <h2 className="text-xl uppercase">For a better way to work</h2>
          <Button variant="outline" className="">
            Shop now
          </Button>
        </div>
      </div>

      <section>
        <h2>We do work furniture a little bit different.</h2>
        <p>
          That means easy, affordable, and flexible—whether you’re furnishing
          your home office or your business.
        </p>
      </section>
    </main>
  )
}
