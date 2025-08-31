async function factory (pkgName) {
  const me = this

  class DoboElasticsearch extends this.app.pluginClass.base {
    static alias = 'dbes'
    static dependencies = ['dobo']

    constructor () {
      super(pkgName, me.app)
      this.config = {}
    }
  }

  return DoboElasticsearch
}

export default factory
