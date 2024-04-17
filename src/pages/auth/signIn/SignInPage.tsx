import { router } from '@/app/router'
import { SignIn } from '@/components/auth'
import { FormValue } from '@/components/auth/sign-in/SignIn'
import { Page } from '@/components/layout'
import { useLoginMutation } from '@/services/auth/auth.service'

export const SignInPage = () => {
  const [login, {}] = useLoginMutation()

  const handleLogin = (data: FormValue) => {
    login(data)
      .unwrap()
      .then(() => router.navigate('/'))
  }

  return (
    <Page centered>
      <SignIn onSubmit={handleLogin} />
    </Page>
  )
}
