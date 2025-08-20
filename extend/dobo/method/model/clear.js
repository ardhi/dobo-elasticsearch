import create from './create.js'
import drop from './drop.js'

async function modelClear ({ schema, options = {} } = {}) {
  const { recreate = true } = options
  const { getInfo } = this.app.dobo
  const { instance } = getInfo(schema)

  if (recreate) {
    await drop.call(this, schema)
    await create.call(this, schema)
  } else {
    await instance.client.deleteByQuery({
      index: schema.name,
      query: { match_all: {} }
    })
  }
  return true
}

export default modelClear
