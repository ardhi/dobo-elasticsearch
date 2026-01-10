/**
 * Plugin factory
 *
 * @param {string} pkgName - NPM package name
 * @returns {class}
 */
async function factory (pkgName) {
  const me = this

  /**
   * DoboElasticsearch class
   *
   * @class
   */
  class DoboElasticsearch extends this.app.baseClass.Base {
    constructor () {
      super(pkgName, me.app)
      this.config = {}
    }
  }

  return DoboElasticsearch
}

export default factory
