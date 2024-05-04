import { ReactNode } from 'react'

import * as TabsRadixUI from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './Tabs.module.scss'

import { Typography } from '..'

export type TabType = {
  disabled?: boolean
  title: string
  value: string
}
type TabsProps = {
  children?: ReactNode
  defaultValue?: string
  fullWidth?: boolean
  label?: string
  onValueChange?: (value: string) => void
  orientation?: 'horizontal' | 'vertical'
  tabs: TabType[]
  value?: string
}
export const Tabs = ({
  children,
  defaultValue,
  fullWidth = false,
  label,
  onValueChange,
  orientation = 'horizontal',
  tabs,
  value,
}: TabsProps) => {
  return (
    <TabsRadixUI.Root
      className={clsx(s.tabsRoot, fullWidth && s.fullWidth)}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      orientation={orientation}
      value={value}
    >
      {label && <Typography variant={'body2'}>{label}</Typography>}
      <TabsRadixUI.List className={s.tabsList}>
        {tabs.map(tab => (
          <TabsRadixUI.Trigger
            className={s.tabsTitle}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.title}
          </TabsRadixUI.Trigger>
        ))}
      </TabsRadixUI.List>
      {children}
    </TabsRadixUI.Root>
  )
}

type TabsContentProps = {
  children?: ReactNode
  value: string
}
export const TabContent = ({ children, value }: TabsContentProps) => {
  return <TabsRadixUI.Content value={value}>{children}</TabsRadixUI.Content>
}
