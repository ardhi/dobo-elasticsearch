async function modelExists ({ schema, options = {} }) {
  const { getInfo } = this.app.dobo
  const { instance } = getInfo(schema)

  const exists = await instance.client.indices.exists({ index: schema.modelName })
  return !!exists
}

export default modelExists
