import Auth from '../utils/auth'

const request = (method) => {
  return async (url, body = {}) => {
    let token = Auth.getToken()
    let authHeader = { 'Authorization': `Bearer ${token}` }

    if (!token) {
      authHeader = {}
    }

    const toSendBody = (Object.keys(body).length > 0) ? { body: JSON.stringify(body) } : {}

    const promise = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Data-Type': 'json',
        ...authHeader
      },
      ...toSendBody
    })

    return promise.json()
  }
}

export const crud = {
  post: request('post'),
  get: request('get'),
  put: request('put'),
  patch: request('patch')
}