export default function MaxWidthWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-sm sm:max-w-md lg:max-w-7xl">{children}</div>
  )
}
