import { ReactNode } from 'react'

import * as RadixUIDropdown from '@radix-ui/react-dropdown-menu'

import s from './Dropdown.module.scss'

import { Card } from '..'

type DropdownMenuProps = {
  children: ReactNode
  trigger?: ReactNode
}

export const DropdownMenu = ({ children, trigger }: DropdownMenuProps) => {
  return (
    <RadixUIDropdown.Root>
      <RadixUIDropdown.Trigger asChild>
        {trigger && <button>{trigger}</button>}
      </RadixUIDropdown.Trigger>

      <RadixUIDropdown.Portal>
        <RadixUIDropdown.Content sideOffset={5}>
          <Card>{children}</Card>
          <RadixUIDropdown.Arrow className={s.arrow} />
        </RadixUIDropdown.Content>
      </RadixUIDropdown.Portal>
    </RadixUIDropdown.Root>
  )
}

type DropdownMenuItemProps = {
  children: ReactNode
}

export const DropdownMenuItem = ({ children }: DropdownMenuItemProps) => {
  return <RadixUIDropdown.Item className={s.item}>{children}</RadixUIDropdown.Item>
}

type DropdownMenuItemWithIconProps = {
  children: ReactNode
  icon: ReactNode
}

export const DropdownMenuItemWithIcon = ({ children, icon }: DropdownMenuItemWithIconProps) => {
  return (
    <RadixUIDropdown.Item className={s.item}>
      {icon && <div>{icon}</div>}
      {children}
    </RadixUIDropdown.Item>
  )
}
