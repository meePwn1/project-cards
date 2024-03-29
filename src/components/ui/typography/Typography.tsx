import { CSSProperties, ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

export type TypographyProps<T extends ElementType> = {
  as?: T
  className?: string
  color?: CSSProperties['color']
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  mr?: CSSProperties['marginRight']
  mt?: CSSProperties['marginTop']
  mx?: CSSProperties['marginRight']
  my?: CSSProperties['marginLeft']
  theme?: 'dark' | 'light'
  variant: Variant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
  const {
    as: TagName,
    children,
    className,
    color,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    style,
    theme = 'light',
    variant,
    ...rest
  } = props

  const classNames = clsx(
    `ui-typography-${variant}`,
    theme === 'light' ? 'light' : 'dark',
    className
  )

  const styles = {
    ...(mx && { marginLeft: mx, marginRight: mx }),
    ...(my && { marginBottom: my, marginTop: my }),
    ...(mr && { marginRight: mr }),
    ...(ml && { marginLeft: ml }),
    ...(mt && { marginTop: mt }),
    ...(mb && { marginBottom: mb }),
    ...(color && { color }),
    ...style,
  }
  const Component = TagName || Variants[variant] || 'span'

  return (
    <Component className={classNames} style={styles} {...rest}>
      {children}
    </Component>
  )
}

const Variants = {
  body1: 'p',
  body2: 'p',
  caption: 'span',
  error: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  link1: 'a',
  link2: 'a',
  overline: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
} as const

type Variant = keyof typeof Variants
