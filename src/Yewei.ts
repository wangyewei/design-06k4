export default class Yewei {
  /** 基础 */
  // 展示所有信息
  static showAllInfo(): Object {
    const info = require('../package.json')
    const { name, version, description, author, repository, license, motto } = info
    return {
      name,
      version,
      description,
      author,
      repository,
      license,
      motto
    }
  }
  // 查看产品版本号

  static showVersion(): string {
    const info = require('../package.json')
    const { version } = info
    return version
  }
}