import { Navigate, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { router } from '@/app/router'
import { ROUTES } from '@/common/constants'
import { useMeQuery } from '@/services/auth'

import { Header } from '../header'

export const Layout = () => {
  // const { isError } = useMeQuery()

  // const pathname = window.location.pathname

  // refactoring
  // if (!isError) {
  //   if (pathname !== ROUTES.profile) {
  //     return <Navigate to={ROUTES.home} />
  //     // router.navigate(ROUTES.home)
  //   }
  // }

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
      <ToastContainer />
    </>
  )
}
