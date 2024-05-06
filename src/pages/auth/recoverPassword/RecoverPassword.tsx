import { router } from '@/app/router'
import { ROUTES } from '@/common/constants'
import { ForgotPassword } from '@/components/auth'
import { FormValue } from '@/components/auth/forgot-password/ForgotPassword'
import { Page } from '@/components/layout'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service'

export const ResetPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()

  const handleRecoverPassword = (data: FormValue) => {
    recoverPassword({
      ...data,
      html: '<h1>Hi, ##name##</h1><p>Click <a href="##token##">here</a> to recover your password</p>',
    })
      .unwrap()
      .then(() => router.navigate(ROUTES.CHECK_EMAIL))
  }

  return (
    <Page centered>
      <ForgotPassword onSubmit={handleRecoverPassword} />
    </Page>
  )
}
