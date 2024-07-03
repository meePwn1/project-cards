import { AriaAttributes, useState } from 'react'

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
  orientation?: AriaAttributes['aria-orientation']
  step?: number
  value: number[]
}

export const Slider = ({ defaultValue, label, max = 15, min = 0, value, ...rest }: Props) => {
  const [minValue, setMinValue] = useState(value[0])
  const [maxValue, setMaxValue] = useState(value[1])

  const handleMinBlur = () => {
    if (minValue > value[1]) {
      setMinValue(value[1])
    }
    if (minValue < min) {
      setMinValue(min)
    }
  }

  const handleMaxBlur = () => {
    if (maxValue < value[0]) {
      setMaxValue(value[0])
    }
    if (maxValue > max) {
      setMaxValue(max)
    }
  }

  return (
    <div>
      {label && (
        <Typography className={s.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={s.body}>
        <input
          autoComplete={'off'}
          className={s.value}
          max={max}
          min={min}
          onBlur={handleMinBlur}
          onChange={e => setMinValue(Number(e.target.value))}
          step={1}
          type={'number'}
          value={minValue}
        />
        <RadixUISlider.Root
          className={s.root}
          defaultValue={defaultValue}
          max={max}
          min={min}
          value={[minValue, maxValue]}
          {...rest}
        >
          <RadixUISlider.Track className={s.track}>
            <RadixUISlider.Range className={s.range} />
          </RadixUISlider.Track>
          <RadixUISlider.Thumb aria-label={'Volume'} className={s.thumb} />
          <RadixUISlider.Thumb aria-label={'Volume'} className={s.thumb} />
        </RadixUISlider.Root>
        <input
          autoComplete={'off'}
          className={s.value}
          max={max}
          min={min}
          onBlur={handleMaxBlur}
          onChange={e => setMaxValue(Number(e.target.value))}
          step={1}
          type={'number'}
          value={maxValue}
        />
      </div>
    </div>
  )
}
