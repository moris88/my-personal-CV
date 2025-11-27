import type React from 'react'
import { twMerge } from 'tailwind-merge'

function LabelBoxRoot({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={twMerge('relative mt-6 w-full', className)}>{children}</div>
  )
}

export function LabelBoxTitle({
  children,
  className = '',
}: {
  children?: React.ReactNode
  className?: string
}) {
  if (!children) return null
  return (
    <span
      className={twMerge(
        'absolute -top-2.5 left-4 bg-white px-2 text-sm font-medium text-gray-600',
        className
      )}
    >
      {children}
    </span>
  )
}

export function LabelBoxContent({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={twMerge('rounded-lg border border-gray-400 p-4', className)}
    >
      {children}
    </div>
  )
}

export const LabelBox = Object.assign(LabelBoxRoot, {
  Title: LabelBoxTitle,
  Content: LabelBoxContent,
})

export default LabelBox
