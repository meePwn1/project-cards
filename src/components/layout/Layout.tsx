import { Outlet } from 'react-router-dom'

import { useMeQuery } from '@/services/auth/auth.service'

import { Header } from '../header'

export const Layout = () => {
  const { isError } = useMeQuery()

  return (
    <>
      <Header />
      <main style={{ paddingTop: '60px' }}>
        <section>
          <div className={'container'}>
            <Outlet />
          </div>
        </section>
      </main>
    </>
  )
}
