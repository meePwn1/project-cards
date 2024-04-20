import * as RadixUISlider from '@radix-ui/react-slider'

import s from './Slider.module.scss'

import { Typography } from '..'

type Direction = 'ltr' | 'rtl'
type Props = {
  defaultValue?: number[]
  dir?: Direction
  disabled?: boolean
  inverted?: boolean
  label?: string
  max?: number
  min?: number
  minStepsBetweenThumbs?: number
  name?: string
  onValueChange?(value: number[]): void
  onValueCommit?(value: number[]): void
  orientation?: React.AriaAttributes['aria-orientation']
  step?: number
  value: number[]
}

export const Slider = ({ defaultValue, label, max, min, value, ...rest }: Props) => {
  return (
    <div>
      {label && (
        <Typography className={s.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={s.body}>
        <span className={s.value}>{value[0]}</span>
        <RadixUISlider.Root
          className={s.root}
          defaultValue={defaultValue}
          max={max}
          min={min}
          value={value}
          {...rest}
        >
          <RadixUISlider.Track className={s.track}>
            <RadixUISlider.Range className={s.range} />
          </RadixUISlider.Track>
          <RadixUISlider.Thumb aria-label={'Volume'} className={s.thumb} />
          <RadixUISlider.Thumb aria-label={'Volume'} className={s.thumb} />
        </RadixUISlider.Root>
        <span className={s.value}>{value[1]}</span>
      </div>
    </div>
  )
}
