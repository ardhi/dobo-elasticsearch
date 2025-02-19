async function connSanitizer (conn) {
  const { cloneDeep, has } = this.app.bajo.lib._
  if (has(conn, 'cloud')) {
    if (!conn.cloud.id) this.fatal('keyRequired%s%s', 'cloud.id', conn.name, { payload: conn })
  } else if (!has(conn, 'node')) this.fatal('keyRequired%s%s', 'node', conn.name, { payload: conn })
  if (conn.auth) {
    if ((!conn.auth.apiKey) || (!conn.auth.bearer)) {
      if (!conn.auth.username) this.fatal('keyRequired%s%s', 'auth.username', conn.name, { payload: conn })
      if (!conn.auth.password) this.fatal('keyRequired%s%s', 'auth.password', conn.name, { payload: conn })
    }
  }
  const result = cloneDeep(conn)
  return result
}

export default connSanitizer
