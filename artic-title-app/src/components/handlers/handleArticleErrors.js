import { toast } from 'react-toastify'

export const handleArticleErrors = (err) =>{
  if(err.message) {
    toast.error(err.message, {
      position: toast.POSITION.TOP_LEFT
    })
  }
  toast.error(JSON.stringify(err), {
    position: toast.POSITION.TOP_LEFT
  })
}