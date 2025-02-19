async function recordGet ({ schema, id, options = {} } = {}) {
  const { getInfo } = this.app.dobo
  const { instance } = getInfo(schema)
  const { get } = this.app.bajo.lib._
  const { thrownNotFound = true } = options

  let result
  try {
    result = await instance.client.get({
      index: schema.name,
      id
    })
  } catch (err) {
    if (!get(err, 'meta.body.found') && thrownNotFound) throw this.error('recordNotFound%s%s', id, schema.name, { statusCode: 404 })
    throw err
  }
  return { data: result._source }
}

export default recordGet
