import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'S' | 'A' | 'B' | 'default'
}

export default function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const variants = {
    S: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white',
    A: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
    B: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
    default: 'bg-neutral-silver/20 text-neutral-silver',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
