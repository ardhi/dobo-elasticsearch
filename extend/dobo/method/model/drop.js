async function modelDrop ({ schema, options = {} }) {
  const { getInfo } = this.app.dobo
  const { instance } = getInfo(schema)

  await instance.client.indices.delete({ index: schema.name })
}

export default modelDrop
