import { router } from '@/app/router'
import { ROUTES } from '@/common/constants'
import { SignUp } from '@/components/auth'
import { FormValue } from '@/components/auth/sign-in/SignIn'
import { Page } from '@/components/layout'
import { useLoginMutation, useSingUpMutation } from '@/services/auth/auth.service'

export const SignUpPage = () => {
  const [singUp] = useSingUpMutation()
  const [login] = useLoginMutation()
  const handleSignUp = (data: FormValue) => {
    const { email, password } = data

    singUp({ email, password })
      .unwrap()
      .then(() => login({ email, password }))
      .then(() => router.navigate(ROUTES.home))
  }

  return (
    <Page centered>
      <SignUp onSubmit={handleSignUp} />
    </Page>
  )
}
