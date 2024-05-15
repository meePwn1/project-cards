import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Header } from '../header'

export const Layout = () => {
  return (
    <>
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
