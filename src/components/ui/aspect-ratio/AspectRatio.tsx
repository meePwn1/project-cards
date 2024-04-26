import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as RadixUIAspectRatio from '@radix-ui/react-aspect-ratio'

type Props = {
  children?: ReactNode
  ratio?: number
} & ComponentPropsWithoutRef<'div'>

export const AspectRatio = ({ children, ratio, ...rest }: Props) => {
  return (
    <RadixUIAspectRatio.Root ratio={ratio} {...rest}>
      {children}
    </RadixUIAspectRatio.Root>
  )
}
