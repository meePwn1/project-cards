import { toast } from 'react-toastify'

export const onQueryStartedErrorToast = async (args: any, { queryFulfilled }) => {
  try {
    console.log(await queryFulfilled)
  } catch (err) {
    toast.error(err.error.data.message)
  }
}
