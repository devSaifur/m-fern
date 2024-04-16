import { Button, buttonVariants } from '@/components/ui/button'
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

import { cn } from '@/lib/utils'
import HeroImageLarge from '../../public/images/home-hero-large.jpg'
import HeroImage from '../../public/images/home-hero.jpg'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  CarouselAutoScroll,
  CarouselAutoScrollContent,
  CarouselAutoScrollItem,
} from '@/components/ui/carousel-auto-scroll'
import { Icons } from '@/components/ui/icons'
import { faker } from '@faker-js/faker'

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
  const products = generateProducts()
  const persons = generatePersons()
  const images = generateImages()

  return (
    <main className="space-y-20">
      <div className="absolute top-0 grid h-2/5 w-full place-content-center sm:h-3/4">
        <Image
          src={HeroImage} // Default image
          alt="home-hero"
          className="-z-50 object-cover brightness-50 sm:hidden"
          fill
          sizes="100vw"
          placeholder="blur"
        />
        <Image
          src={HeroImageLarge} // Default image
          alt="home-hero"
          className="-z-50 hidden object-cover brightness-50 sm:block"
          fill
          sizes="100vw"
          placeholder="blur"
        />
        <div className="flex flex-col gap-y-3 text-center text-white sm:gap-y-6">
          <h1 className="text-4xl font-bold sm:text-7xl">Modern Furniture</h1>
          <h2 className="text-xl font-light uppercase">
            For a better way to work
          </h2>
          <Button
            variant="outline"
            className="mx-auto bg-transparent font-bold"
            size="lg"
          >
            Shop now
          </Button>
        </div>
      </div>

      <MaxWidthWrapper className="flex flex-col gap-8">
        <section className="grid gap-y-4 pt-96 text-center sm:pt-[45rem]">
          <h2 className="text-3xl font-bold sm:text-4xl">
            We do work furniture a little bit different.
          </h2>
          <p>
            That means easy, affordable, and flexible—whether you’re furnishing
            your home office or your business.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-0">
          {collections.map(({ name, src }) => (
            <Link href={`/collections/${name.toLowerCase()}`} key={name}>
              <div className="relative size-48 sm:size-80">
                <Image
                  src={src}
                  className="object-cover brightness-75"
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
                />
                <p className="absolute bottom-2 left-2 flex items-center text-xl font-bold text-white sm:bottom-6 sm:left-6 sm:text-2xl">
                  {name}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <section>
          <h2 className="pb-6 text-center text-lg uppercase">Featured</h2>
          <Tabs defaultValue="chair" className="w-full">
            <TabsList className="w-full gap-x-16">
              <TabsTrigger
                className="pb-6 text-xl font-bold md:text-3xl"
                value="chair"
              >
                Chair
              </TabsTrigger>
              <TabsTrigger
                className="pb-6 text-xl font-bold md:text-3xl"
                value="table"
              >
                Table
              </TabsTrigger>
            </TabsList>
            <TabsContent value="chair" className="grid gap-y-4 md:gap-y-8">
              <Carousel
                opts={{
                  align: 'center',
                }}
                className="mx-auto w-full max-w-sm lg:max-w-5xl"
              >
                <CarouselContent>
                  {products.map((product, index) => (
                    <CarouselItem
                      className="basis-1/2 lg:basis-1/5"
                      key={index}
                    >
                      <Link href={product.href}>
                        <div key={product.name}>
                          <Card>
                            <CardContent className="relative flex aspect-square items-center justify-center p-6">
                              <Image
                                src={product.src} // Default image
                                alt="home-hero"
                                className="object-cover brightness-75"
                                fill
                                sizes="(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 35vw"
                              />
                            </CardContent>
                          </Card>
                        </div>
                        <div>
                          <p>{product.name}</p>
                          <p>{product.price}</p>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 top-24 border-none bg-transparent" />
                <CarouselNext className="right-2 top-24 border-none bg-transparent" />
              </Carousel>

              <Link
                href="/collection/chair"
                className={cn(
                  'mx-auto',
                  buttonVariants({ variant: 'default' }),
                )}
              >
                View all
              </Link>
            </TabsContent>
            <TabsContent value="table" className="grid gap-y-4 md:gap-y-8">
              <Carousel
                opts={{
                  align: 'center',
                }}
                className="mx-auto w-full max-w-sm lg:max-w-5xl"
              >
                <CarouselContent>
                  {products.map((product, index) => (
                    <CarouselItem
                      className="basis-1/2 lg:basis-1/5"
                      key={index}
                    >
                      <Link href={product.href}>
                        <div key={product.name}>
                          <Card>
                            <CardContent className="relative flex aspect-square items-center justify-center p-6">
                              <Image
                                src={product.src} // Default image
                                alt="home-hero"
                                className="object-cover brightness-75"
                                fill
                                sizes="(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 35vw"
                              />
                            </CardContent>
                          </Card>
                        </div>
                        <div>
                          <p>{product.name}</p>
                          <p>{product.price}</p>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 top-24 border-none bg-transparent" />
                <CarouselNext className="right-2 top-24 border-none bg-transparent" />
              </Carousel>

              <Link
                href="/collection/table"
                className={cn(
                  'mx-auto',
                  buttonVariants({ variant: 'default' }),
                )}
              >
                View all
              </Link>
            </TabsContent>
          </Tabs>
        </section>
      </MaxWidthWrapper>

      <section className="relative flex flex-col overflow-hidden sm:h-[50dvh]">
        <video
          width="320"
          height="240"
          muted
          playsInline
          autoPlay={true}
          loop={true}
          preload="none"
          className="w-full object-center"
        >
          <source src="/videos/home-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute left-[5%] top-1/4 hidden max-w-md space-y-4 bg-white px-12 py-8 md:block">
          <h2 className="text-4xl font-bold">M-FERN Furniture</h2>
          <p className="text-2xl">For 21st Century Living</p>
          <p className="text-justify">
            We&apos;re a furniture brand that carries everything needed to make
            your house or office look modern with minimal furniture&apos;s and
            boosts up your work energy!
          </p>
        </div>
      </section>

      <MaxWidthWrapper>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <Icons.package className="size-12" />
            <h3 className="text-3xl font-bold">Free Shipping</h3>
            <p className="text-center">
              FREE home delivery with assembling inside Dhaka within 3 days and
              5-7 days anywhere in Bangladesh. Inside Dhaka City, we offer free
              home delivery to the ground floor through courier.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <Icons.shieldCheck className="size-12" />
            <h3 className="text-3xl font-bold">Returns & Warranty</h3>
            <p className="text-center">
              M-FERN provides an easy, hassle-free servicing system where we
              pick up your product from your home if there is any problem and
              get it back to you.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <Icons.wallet className="size-12" />
            <h2 className="text-3xl font-bold">EMI Policy</h2>
            <p className="text-center">
              To avail EMI, Place your order through Website and share your
              order ID in our Inbox. We will share the EMI payment link.
            </p>
          </div>
        </section>
      </MaxWidthWrapper>

      <section className="flex flex-col gap-y-8 bg-gray-700 px-6 pb-8">
        <h2 className="pt-8 text-center text-3xl font-extrabold text-white">
          Don&apos;t take our word for it
        </h2>
        <CarouselAutoScroll
          opts={{
            align: 'center',
          }}
          className="mx-auto w-full"
        >
          <CarouselAutoScrollContent>
            {persons.map((person, index) => (
              <CarouselAutoScrollItem
                className="basis-1/1 lg:basis-1/3"
                key={index}
              >
                <Card className="flex max-w-sm rounded-none p-8 sm:max-w-md">
                  <CardContent className="relative mx-auto flex flex-col items-center justify-center gap-y-4">
                    <Avatar>
                      <AvatarImage src={person.avatar} alt={person.name} />
                      <AvatarFallback>{person.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <p>{person.name}</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum aut enim, perspiciatis nostrum sit beatae esse
                      cupiditate ab quae non impedit unde rerum, atque
                      consequuntur. Optio soluta enim eveniet sint?
                    </p>
                  </CardContent>
                </Card>
              </CarouselAutoScrollItem>
            ))}
          </CarouselAutoScrollContent>
        </CarouselAutoScroll>
      </section>

      <MaxWidthWrapper className="space-y-16 md:space-y-40">
        <section>
          <h2 className="pb-8 text-center text-2xl font-extrabold sm:text-3xl">
            Trusted By Top Companies
          </h2>
          <div className="mx-auto grid max-w-sm grid-cols-2 place-items-center gap-y-4 md:max-w-6xl md:grid-cols-5 md:gap-y-8">
            {images.map((image, index) => (
              <div className="relative h-24 w-48" key={index}>
                <Image
                  src={image}
                  alt=""
                  sizes="(max-width: 768px) 20vw, (max-width: 1200px) 30vw, 30vw"
                  fill
                  className="rounded-2xl"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto flex max-w-screen-lg flex-col gap-6 md:flex-row md:gap-16">
          <div className="relative h-[30rem] w-full md:h-[42rem] md:w-1/2">
            <Image
              src={faker.image.url({ width: 320, height: 640 })}
              alt=""
              sizes="(max-width: 768px) 20vw, (max-width: 1200px) 30vw, 30vw"
              fill
            />
          </div>
          <div className="my-auto space-y-6 tracking-wide">
            <div className="max-w-sm">
              <h2 className="pb-6 text-start text-3xl font-extrabold sm:text-3xl">
                We Create Meaningful Design
              </h2>
              <p>
                We ensure you 100% authenticity and originality of the products
                which are imported via China, Vietnam & Taiwan. We never want
                you to compromise with the quality that is why we ensure you get
                the best furniture delivered via M-FERN!
              </p>
              <div className="mt-8 space-y-4">
                <p>
                  1. We assure you 100% premium quality of our products and
                  before the delivery of each product, we have 4 product experts
                  who do the quality check while the product is ready for
                  delivery.
                </p>
                <p>
                  2. At GRID, we deliver you premium quality and stylish design
                  which also delivers the meaning of elegance at your home.
                </p>
                <p>
                  3. Our products are made of strong materials imported from
                  China which ensure 100% durability.
                </p>
              </div>
            </div>

            <Button>Shop now</Button>
          </div>
        </section>

        <section className="mx-auto flex max-w-screen-2xl flex-col gap-y-10 md:flex-row md:gap-16">
          <div className="space-y-4">
            <div className="relative size-96">
              <Image
                src={faker.image.url({ width: 460, height: 640 })}
                alt=""
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 30vw"
                fill
              />
            </div>
            <div className="my-auto space-y-2 text-center tracking-wide">
              <h2 className="text-lg font-extrabold md:text-2xl">
                Exceptional Furniture For The Taskmasters
              </h2>
              <p>
                We founded GRID: to make it easy for teams of all sizes to
                create an office you love. We sell direct, so our collection
                costs half as much as premium furniture of comparable quality.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative size-96">
              <Image
                src={faker.image.url({ width: 460, height: 640 })}
                alt=""
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 30vw"
                fill
              />
            </div>
            <div className="my-auto space-y-2 text-center tracking-wide">
              <h2 className="text-lg font-extrabold md:text-2xl">
                Exceptional Furniture For The Taskmasters
              </h2>
              <p>
                We founded GRID: to make it easy for teams of all sizes to
                create an office you love. We sell direct, so our collection
                costs half as much as premium furniture of comparable quality.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative size-96">
              <Image
                src={faker.image.url({ width: 460, height: 640 })}
                alt=""
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 30vw"
                fill
              />
            </div>
            <div className="my-auto space-y-2 text-center tracking-wide">
              <h2 className="text-lg font-extrabold md:text-2xl">
                Exceptional Furniture For The Taskmasters
              </h2>
              <p>
                We founded GRID: to make it easy for teams of all sizes to
                create an office you love. We sell direct, so our collection
                costs half as much as premium furniture of comparable quality.
              </p>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  )
}

type Product = {
  name: string
  price: string
  href: string
  src: string
}

function generateProducts() {
  const products: Product[] = []
  for (let i = 0; i < 15; i++) {
    const productName = faker.commerce.productName()
    const productPrice = faker.commerce.price({
      min: 100,
      max: 1000,
      symbol: '$',
    })
    const productImages = faker.image.url({
      width: 640,
      height: 480,
    })

    products.push({
      name: productName,
      price: productPrice,
      href: `/products/${productName}`,
      src: productImages,
    })
  }
  return products
}

function generatePersons() {
  const persons: { name: string; avatar: string }[] = []
  for (let i = 0; i < 5; i++) {
    persons.push({
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
    })
  }
  return persons
}

function generateImages() {
  const images: string[] = []
  for (let i = 0; i < 10; i++) {
    images.push(faker.image.url({ width: 640, height: 320 }))
  }
  return images
}
