import { Client } from '@elastic/elasticsearch'
import modelCreate from '../method/model/create.js'
import modelExists from '../method/model/exists.js'

async function instantiate ({ connection, schemas, noRebuild }) {
  const { pick, omit } = this.app.bajo.lib._
  this.instances = this.instances ?? []
  const instance = pick(connection, ['name', 'type'])
  instance.client = new Client(omit(connection, ['name', 'type']))
  this.instances.push(instance)
  if (noRebuild) return
  for (const schema of schemas) {
    try {
      const exists = await modelExists.call(this, schema)
      if (exists) continue
      await modelCreate.call(this, schema)
      this.log.trace('Model \'%s@%s\' successfully built on the fly', schema.name, connection.name)
    } catch (err) {
      this.log.error('Error on \'%s\': %s', connection.name, err.message)
    }
  }
}

export default instantiate
