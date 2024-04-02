/**
 * A refactored and updated version of https://github.com/dreyescat/react-rating/tree/master
 * which seems to be no longer maintained.
 * The only difference as far as I can tell is the default emptySymbol and fullSymbol,
 * ours are stars by default, everything else should be the same.
 */

import { CSSProperties, FC, ReactElement, useCallback } from 'react'

import { Icon } from '..'
import { RatingPrimitive } from './RatingPrimitive'

export type RatingProps = {
  'aria-label'?: string
  className?: string
  direction?: 'ltr' | 'rtl'
  emptySymbol?: CSSProperties | ReactElement | string
  fractions?: number
  fullSymbol?: CSSProperties | ReactElement | string
  id?: string
  onChange?: (value: number) => void
  onClick?: (value: number) => void
  onHover?: (value?: number) => void
  placeholderRating?: number
  placeholderSymbol?: CSSProperties | ReactElement | string
  quiet?: boolean
  readonly?: boolean
  start?: number
  step?: number
  stop?: number
  style?: CSSProperties
  tabIndex?: number
  value?: number
}

export const Rating: FC<RatingProps> = ({
  ['aria-label']: ariaLabel,
  className,
  direction = 'ltr',
  emptySymbol = (
    <Icon color={'var(--color-border-star-rating)'} name={'common/star-border'} size={16} />
  ),
  fractions = 1,
  fullSymbol = <Icon color={'var(--color-warning-300)'} name={'common/star'} size={16} />,
  id,
  onChange,
  onClick,
  onHover,
  placeholderRating,
  placeholderSymbol = <Icon color={'var(--color-warning-300)'} name={'common/star'} size={16} />,
  quiet = false,
  readonly = false,
  start = 0,
  step = 1,
  stop = 5,
  style,
  tabIndex,
  value,
}) => {
  const translateDisplayValueToValue = useCallback(
    (displayValue: number): number => {
      const translatedValue = displayValue * step + start

      return translatedValue === start ? translatedValue + 1 / fractions : translatedValue
    },
    [fractions, step, start]
  )

  const handleClick = useCallback(
    (displayValue: number) => {
      const newValue = translateDisplayValueToValue(displayValue)

      onClick?.(newValue)

      if (value !== newValue) {
        onChange?.(newValue)
      }
    },
    [value, onClick, onChange, translateDisplayValueToValue]
  )

  const handleHover = useCallback(
    (displayValue?: number) => {
      const val =
        displayValue === undefined ? displayValue : translateDisplayValueToValue(displayValue)

      onHover?.(val)
    },
    [onHover, translateDisplayValueToValue]
  )

  const translateValueToDisplayValue = (value?: number): number => {
    if (value === undefined) {
      return 0
    }

    return (value - start) / step
  }

  const calculateTotalSymbols = (start: number, stop: number, step: number): number => {
    return Math.floor((stop - start) / step)
  }

  return (
    <RatingPrimitive
      aria-label={ariaLabel}
      className={className}
      direction={direction}
      emptySymbol={emptySymbol}
      fractions={fractions}
      fullSymbol={fullSymbol}
      id={id}
      onClick={handleClick}
      onHover={handleHover}
      placeholderSymbol={placeholderSymbol}
      placeholderValue={translateValueToDisplayValue(placeholderRating)}
      quiet={quiet}
      readonly={readonly}
      style={style}
      tabIndex={tabIndex}
      totalSymbols={calculateTotalSymbols(start, stop, step)}
      value={translateValueToDisplayValue(value)}
    />
  )
}
