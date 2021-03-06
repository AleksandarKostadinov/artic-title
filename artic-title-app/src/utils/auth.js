class Auth {
  static isUserAuthenticated () {
    return window.localStorage.getItem('authToken') !== null
  }

  static getToken () {
    return window.localStorage.getItem('authToken')
  }

  static getUsername () {
    return window.localStorage.getItem('username')
  }

  static isUserAdmin () {
    let roles = window.localStorage.getItem('roles')
    if (!roles) {
      return false
    }

    roles = roles.split(',')
    if (roles.includes('Admin')) {
      return true
    }

    return false
  }

  static saveUserInfo (data) {
    const { user } = data

    const { token, roles, username } = user

    window.localStorage.setItem('authToken', token)
    window.localStorage.setItem('username', username)
    window.localStorage.setItem('roles', roles.join(','))
  }

  static logout () {
    window.localStorage.removeItem('authToken')
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('roles')
  }
}

export default Auth
