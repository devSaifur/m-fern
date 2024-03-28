import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import MaxWidthWrapper from '@/components/ui/max-width-wrapper'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'

import HeroImageLarge from '../../public/images/home-hero-large.jpg'
import HeroImage from '../../public/images/home-hero.jpg'

const collections = [
  {
    name: 'Chair',
    src: '/images/collection-chair.jpg',
  },
  {
    name: 'Table',
    src: '/images/collection-table.jpg',
  },
  {
    name: 'Sofa',
    src: '/images/collection-sofa.jpg',
  },
  {
    name: 'Storage',
    src: '/images/collection-storage.jpg',
  },
]

export default function Home() {
  return (
    <main>
      <div className="absolute top-0 grid h-3/5 w-full place-content-center sm:h-3/4">
        <Image
          src={HeroImage} // Default image
          alt="home-hero"
          className="-z-50 object-cover sm:hidden"
          fill
          sizes="100vw"
          placeholder="blur"
        />
        <Image
          src={HeroImageLarge} // Default image
          alt="home-hero"
          className="-z-50 hidden object-cover sm:block"
          fill
          sizes="100vw"
          placeholder="blur"
        />
        <div className="">
          <h1 className="text-4xl font-bold">Modern Furniture</h1>
          <h2 className="text-xl uppercase">For a better way to work</h2>
          <Button variant="outline" className="">
            Shop now
          </Button>
        </div>
      </div>

      <MaxWidthWrapper className="flex flex-col gap-8">
        <section className="pt-[35rem] sm:pt-[45rem]">
          <h2 className="text-4xl font-bold">
            We do work furniture a little bit different.
          </h2>
          <p>
            That means easy, affordable, and flexible—whether you’re furnishing
            your home office or your business.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-4">
          {collections.map(({ name, src }) => (
            <Link href={`/collections/${name}`} key={name}>
              <div className="relative size-40">
                <Image
                  src={src}
                  className="object-cover"
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
                />
                <p className="absolute bottom-2 left-2 flex items-center">
                  {name}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <section>
          <h2 className="mx-auto">Featured</h2>
          <Tabs defaultValue="chair" className="w-full">
            <TabsList className="w-full gap-x-16 border border-red-500">
              <TabsTrigger value="chair">Chair</TabsTrigger>
              <TabsTrigger value="table">Table</TabsTrigger>
            </TabsList>
            <TabsContent value="chair">
              <Carousel
                opts={{
                  align: 'center',
                }}
                className="w-full max-w-sm"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-3xl font-semibold">
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </TabsContent>
            <TabsContent value="table">
              <Carousel
                opts={{
                  align: 'center',
                }}
                className="w-full max-w-sm"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-3xl font-semibold">
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </TabsContent>
          </Tabs>
        </section>
      </MaxWidthWrapper>
    </main>
  )
}
