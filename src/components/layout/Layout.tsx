import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

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
      <ToastContainer autoClose={4000} theme={'dark'} />
    </>
  )
}
