'use client'

import { faker } from '@faker-js/faker'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Card, CardContent } from './ui/card'
import {
  CarouselAutoScroll,
  CarouselAutoScrollContent,
  CarouselAutoScrollItem,
} from './ui/carousel-auto-scroll'

export default function Testimonials() {
  const persons = generatePersons()

  return (
    <section className="flex flex-col gap-y-8 bg-gray-700 pb-8">
      <h2 className="pt-8 text-center text-3xl font-extrabold text-white">
        Don&apos;t take our word for it
      </h2>
      <CarouselAutoScroll
        opts={{
          align: 'center',
        }}
        className="mx-auto w-full"
        onDotButtonClick={(index) => console.log(index)}
      >
        <CarouselAutoScrollContent>
          {persons.map((person, index) => (
            <CarouselAutoScrollItem
              className="basis-1/1 lg:basis-1/3"
              key={index}
            >
              <Card className="flex h-72 max-w-md rounded-none px-4">
                <CardContent className="relative mx-auto flex flex-col items-center justify-center gap-y-4">
                  <Avatar>
                    <AvatarImage src={person.avatar} alt={person.name} />
                    <AvatarFallback>{person.name.slice(0, 1)}</AvatarFallback>
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
  )
}

function generatePersons() {
  const persons: { name: string; avatar: string }[] = []
  for (let i = 0; i < 15; i++) {
    persons.push({
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
    })
  }
  return persons
}
