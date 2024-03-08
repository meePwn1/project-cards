import { SVGProps } from 'react'

import { getIconMeta } from '@/components/ui/icon/lib/get-icon-meta'
import { IconName } from '@/components/ui/icon/types'
import clsx from 'clsx'

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
  name: IconName
  size?: number
}
export function Icon({ className, name, size: sizeProp, ...props }: IconProps) {
  const { axis, filePath, iconName, viewBox } = getIconMeta(name)

  const size = sizeProp ? `${sizeProp}px` : '24px'

  return (
    <svg
      aria-hidden
      className={clsx('icon', className)}
      /**
       * This prop is used by the "icon" class to set the icon's scaled size
       * @see https://github.com/secundant/neodx/issues/92
       */
      data-axis={axis}
      focusable={'false'}
      height={size}
      viewBox={viewBox}
      width={size}
      {...props}
    >
      <use href={`/sprites/${filePath}#${iconName}`} />
    </svg>
  )
}
