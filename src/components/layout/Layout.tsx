import { Outlet } from 'react-router-dom'

import { Header } from '../header'

export const Layout = () => {
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
