import { toast } from 'react-toastify'

export const handleValidationErrors = (errors) => {
  for (const err in errors) {
    if (errors.hasOwnProperty(err)) {
      const message = errors[err];

      toast.error(`${err.toUpperCase()} ${message}`, {
        position: toast.POSITION.TOP_LEFT
      })
    }
  }
}
