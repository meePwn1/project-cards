import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { useAppSelector } from '@/common/hooks'

import { Header } from '../header'
import { LinearLoader } from '../ui'

export const Layout = () => {
  const status = useAppSelector(state => state.app.status)

  return (
    <>
      {status === 'loading' && <LinearLoader />}
      <Header />
      <main style={{ paddingTop: '60px' }}>
        <section style={{ paddingBottom: '60px' }}>
          <div className={'container'}>
            <Outlet />
          </div>
        </section>
      </main>
      <ToastContainer autoClose={3000} theme={'dark'} />
    </>
  )
}
