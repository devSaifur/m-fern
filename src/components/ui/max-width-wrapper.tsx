import { cn } from '@/lib/utils'

export default function MaxWidthWrapper({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto max-w-sm sm:max-w-md lg:max-w-7xl', className)}>
      {children}
    </div>
  )
}
