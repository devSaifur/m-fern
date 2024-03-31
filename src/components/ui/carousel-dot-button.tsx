'use client'

import { type UseEmblaCarouselType } from 'embla-carousel-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'

type CarouselApi = UseEmblaCarouselType[1]

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (
  emblaApi: CarouselApi | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onInit = React.useCallback((emblaApi: CarouselApi) => {
    setScrollSnaps(emblaApi?.scrollSnapList() || [])
  }, [])

  const onSelect = React.useCallback((emblaApi: CarouselApi) => {
    setSelectedIndex(emblaApi?.selectedScrollSnap() || 0)
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }
}

export const DotButton = (props: React.ComponentProps<typeof Button>) => {
  const { children, ...restProps } = props

  return (
    <Button type="button" size="icon" {...restProps}>
      {children}
    </Button>
  )
}
