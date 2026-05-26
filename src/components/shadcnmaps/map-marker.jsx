// map-marker.jsx
'use client'

import { cn } from '@/lib/utils'

export function MapMarker({
  id,
  x,
  y,
  content,
  label,
  disabled,
  className,
  onClick,
  onEnter,
  onLeave,
  onMove,
}) {
  const handleKeyDown = (event) => {
    if (disabled) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick?.({
        id,
        nativeEvent: event,
      })
    }
  }

  return (
    <g
      data-slot='map-marker'
      transform={`translate(${x}, ${y})`}
      role='button'
      tabIndex={disabled ? -1 : 0}
      aria-label={label ?? `Map marker ${id}`}
      aria-disabled={disabled || undefined}
      className={cn(
        'cursor-pointer outline-none motion-safe:transition-transform motion-safe:duration-150',
        disabled && 'cursor-not-allowed opacity-60',
        className
      )}
      onClick={(nativeEvent) => {
        if (disabled) {
          return
        }

        onClick?.({ id, nativeEvent })
      }}
      onMouseEnter={(nativeEvent) => {
        if (disabled) {
          return
        }

        onEnter?.({ id, nativeEvent })
      }}
      onMouseLeave={(nativeEvent) => {
        if (disabled) {
          return
        }

        onLeave?.({ id, nativeEvent })
      }}
      onMouseMove={(nativeEvent) => {
        if (disabled) {
          return
        }

        onMove?.({ id, nativeEvent })
      }}
      onFocus={(nativeEvent) => {
        if (disabled) {
          return
        }

        onEnter?.({
          id,
          nativeEvent,
        })
      }}
      onBlur={(nativeEvent) => {
        if (disabled) {
          return
        }

        onLeave?.({
          id,
          nativeEvent,
        })
      }}
      onKeyDown={handleKeyDown}
    >
      {content}
    </g>
  )
}