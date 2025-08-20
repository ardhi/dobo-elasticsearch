async function factory (pkgName) {
  const me = this

  return class DoboElasticsearch extends this.lib.BajoPlugin {
    constructor () {
      super(pkgName, me.app)
      this.alias = 'dbes'
      this.dependencies = ['dobo']
      this.config = {}
    }
  }
}

export default factory
