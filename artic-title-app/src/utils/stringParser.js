const removeEnd = (str, endstr) => str.substring(0, str.indexOf(endstr))
const kebapToCamel = (str) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase())

export {
  removeEnd,
  kebapToCamel
}
