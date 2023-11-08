
/**
 * 
 * @param {String} pathname 
 * @returns {String}
 */

export const formatPathname = (pathname) => {

  let path = pathname.substring(1)
  if (path[0] !== undefined && path.length > 1) {
    path = path[0].toUpperCase() + path.substring(1)
  }
  return path.replace('/', ' > ')
}

/**
 * 
 * @param {String} code 
 * @param {[]} terminals
 */
export const validateStatusTerminal = (code, terminals) => {
  const terminal = terminals.find((item) => item.code === code)
  return terminal;
}