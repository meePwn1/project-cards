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
  text?: string
} & RadixUIDropdown.DropdownMenuItemProps

export const DropdownMenuItem = ({ children, text, ...rest }: DropdownMenuItemProps) => {
  return (
    <RadixUIDropdown.Item className={s.item} {...rest}>
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
} & DropdownMenuItemProps

export const DropdownMenuItemWithIcon = ({
  children,
  icon,
  text,
  ...rest
}: DropdownMenuItemWithIconProps) => {
  return (
    <RadixUIDropdown.Item className={s.item} {...rest}>
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
