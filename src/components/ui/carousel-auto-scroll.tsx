'use client'

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'
import * as React from 'react'

import AutoScroll from 'embla-carousel-auto-scroll'
import AutoPlay from 'embla-carousel-autoplay'

import useScreenSizes from '@/hooks/useScreenSize'
import { cn } from '@/lib/utils'
import { DotButton, useDotButton } from './carousel-dot-button'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]

type CarouselProps = {
  opts?: CarouselOptions
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
  scrollSnaps?: number[]
  onDotButtonClick?: (index: number) => void
  selectedIndex?: number
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <CarouselAutoScroll />')
  }

  return context
}

const CarouselAutoScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    { orientation = 'horizontal', opts, setApi, className, children, ...props },
    ref,
  ) => {
    const { width } = useScreenSizes()

    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        slidesToScroll: width < 745 ? 1 : 3,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      [
        width < 745
          ? AutoPlay({ playOnInit: true, delay: 5000 })
          : AutoScroll({ playOnInit: true, speed: 1 }),
      ],
    )

    const { scrollSnaps, onDotButtonClick, selectedIndex } = useDotButton(api)

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          scrollSnaps,
          onDotButtonClick,
          selectedIndex,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        }}
      >
        <div
          ref={ref}
          className={cn('relative', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
CarouselAutoScroll.displayName = 'CarouselAutoScroll'

const CarouselAutoScrollContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const {
    carouselRef,
    orientation,
    scrollSnaps,
    onDotButtonClick,
    selectedIndex,
  } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
      <div className="flex">
        {scrollSnaps?.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick?.(index)}
            className={'selected'.concat(
              index === selectedIndex
                ? ' data-selected size-2 rounded-full border border-white'
                : '',
            )}
          />
        ))}
      </div>
    </div>
  )
})
CarouselAutoScrollContent.displayName = 'CarouselContent'

const CarouselAutoScrollItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  )
})
CarouselAutoScrollItem.displayName = 'CarouselItem'

export {
  CarouselAutoScroll,
  CarouselAutoScrollContent,
  CarouselAutoScrollItem,
  type CarouselApi,
}
