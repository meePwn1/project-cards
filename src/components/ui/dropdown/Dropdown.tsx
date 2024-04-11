import React, { ReactNode } from 'react'

import * as RadixUIDropdown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './Dropdown.module.scss'

import { Card, Typography } from '..'

type DropdownMenuProps = {
  children: ReactNode
  className?: string
  trigger?: ReactNode
  withSeparator?: boolean
} & RadixUIDropdown.DropdownMenuContentProps

export const DropdownMenu = ({
  children,
  className,
  trigger,
  withSeparator = true,
  ...rest
}: DropdownMenuProps) => {
  const addSeparators = (children: React.ReactNode) => {
    return React.Children.map(children, (child, index) => {
      if (index < React.Children.count(children) - 1) {
        return (
          <>
            {child}
            <RadixUIDropdown.Separator className={s.separator} />
          </>
        )
      }

      return child
    })
  }

  return (
    <RadixUIDropdown.Root>
      <RadixUIDropdown.Trigger asChild>
        {trigger && <button>{trigger}</button>}
      </RadixUIDropdown.Trigger>

      <RadixUIDropdown.Portal>
        <RadixUIDropdown.Content
          className={clsx(s.content, className)}
          collisionPadding={5}
          sideOffset={5}
          {...rest}
        >
          <Card>{withSeparator ? addSeparators(children) : children}</Card>
          <RadixUIDropdown.Arrow className={s.arrow} />
        </RadixUIDropdown.Content>
      </RadixUIDropdown.Portal>
    </RadixUIDropdown.Root>
  )
}

type DropdownMenuItemProps = {
  children?: ReactNode
  icon?: ReactNode
  text?: string
} & RadixUIDropdown.DropdownMenuItemProps

export const DropdownMenuItem = ({
  children,
  className,
  icon,
  text,
  ...rest
}: DropdownMenuItemProps) => {
  return (
    <RadixUIDropdown.Item className={clsx(s.item, className)} {...rest}>
      {icon && <div>{icon}</div>}
      {children ? (
        children
      ) : (
        <Typography className={s.text} variant={'caption'}>
          {text}
        </Typography>
      )}
    </RadixUIDropdown.Item>
  )
}

type DropdownMenuItemWithIconProps = {
  icon: ReactNode
} & Omit<DropdownMenuItemProps, 'icon'>

export const DropdownMenuItemWithIcon = ({ icon, ...rest }: DropdownMenuItemWithIconProps) => {
  return <DropdownMenuItem {...rest} icon={icon} />
}

type DropdownMenuLabelProps = RadixUIDropdown.DropdownMenuLabelProps & {
  icon?: ReactNode
}
export const DropdownMenuLabel = ({
  children,
  className,
  icon,
  ...rest
}: DropdownMenuLabelProps) => {
  return (
    <RadixUIDropdown.Label {...rest} className={clsx(s.label, className)}>
      {icon && <div>{icon}</div>}
      {children}
    </RadixUIDropdown.Label>
  )
}
