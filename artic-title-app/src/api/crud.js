import Auth from '../utils/auth'

const request = (method) => {
  return async (url, body = {}) => {
    let token = Auth.getToken()
    let authHeader = { 'Authorization': `Bearer ${token}` }

    if (!token) {
      authHeader = {}
    }

    const toSendBody = (Object.keys(body).length > 0) ? { body: JSON.stringify(body) } : {}

    let response
    try {
      response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Data-Type': 'json',
          ...authHeader
        },
        ...toSendBody
      })
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }

    try {
      const text = await response.text()
      const data = JSON.parse(text) // Try to parse it as json
      return Promise.resolve(data)

    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export const crud = {
  post: request('post'),
  get: request('get'),
  put: request('put'),
  patch: request('patch'),
  remove: request('delete')
}
