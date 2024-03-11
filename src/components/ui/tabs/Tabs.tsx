import * as Tabs from '@radix-ui/react-tabs'

import s from './Tabs.module.scss'

type Props = {
  orientation?: 'horizontal' | 'vertical'
}
export const TabsSwitcher = ({ orientation = 'horizontal' }: Props) => {
  return (
    <Tabs.Root className={s.tabsRoot} defaultValue={'tab1'} orientation={orientation}>
      <Tabs.List className={s.tabsList}>
        <Tabs.Trigger className={s.tabsTitle} value={'tab1'}>
          Account
        </Tabs.Trigger>
        <Tabs.Trigger className={s.tabsTitle} value={'tab2'}>
          Password
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
