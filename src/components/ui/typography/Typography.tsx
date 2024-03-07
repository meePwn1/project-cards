import {
  CSSProperties,
  ComponentProps,
  ElementType,
  FC,
  JSXElementConstructor,
  ReactNode,
} from 'react'

import clsx from 'clsx'
import { JSX } from 'react/jsx-runtime'

export type PropsOf<TTag extends ReactTag> = TTag extends ElementType
  ? Omit<ComponentProps<TTag>, 'ref'>
  : never
export type ReactTag = JSXElementConstructor<any> | keyof JSX.IntrinsicElements

export type TypographyProps<Ttag extends ReactTag> = {
  children: ReactNode
  className?: string
  color?: CSSProperties['color']
  component?: Ttag
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  mr?: CSSProperties['marginRight']
  mt?: CSSProperties['marginTop']
  mx?: CSSProperties['marginRight']
  my?: CSSProperties['marginLeft']
  theme?: 'dark' | 'light'
} & PropsOf<Ttag>

const createTypographyComponent = <T extends ReactTag>(
  basicClassName: Variant
): FC<TypographyProps<T>> => {
  return ({
    children,
    className,
    color,
    component,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    style,
    theme = 'light',
    ...rest
  }) => {
    const Component = component || Variants[basicClassName] || 'span'

    const classNames = clsx(
      `ui-typography-${basicClassName}`,
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

    return (
      <Component className={classNames} style={styles} {...rest}>
        {children}
      </Component>
    )
  }
}

export const Typography = {
  Body1: createTypographyComponent('body1'),
  Body2: createTypographyComponent('body2'),
  Caption: createTypographyComponent('caption'),
  Error: createTypographyComponent('error'),
  H1: createTypographyComponent('h1'),
  H2: createTypographyComponent('h2'),
  H3: createTypographyComponent('h3'),
  H4: createTypographyComponent('h4'),
  Link1: createTypographyComponent('link1'),
  Link2: createTypographyComponent('link2'),
  Overline: createTypographyComponent('overline'),
  Subtitle1: createTypographyComponent('subtitle1'),
  Subtitle2: createTypographyComponent('subtitle2'),
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
