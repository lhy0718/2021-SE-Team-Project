import bcrypt from 'bcryptjs'

export class UtilsService {
  /**
   * Entity를 DTO로 변환
   * @param {{new(entity: E, options: any): T}} model
   * @param {E[] | E} entity
   * @param options
   * @returns {T[] | T}
   */
  public static toDto<T, E>(
    model: new (entity: E, options?: any) => T,
    entity: E,
    options?: Record<string, any>,
  ): T
  public static toDto<T, E>(
    model: new (entity: E, options?: any) => T,
    entity: E[],
    options?: Record<string, any>,
  ): T[]
  public static toDto<T, E>(
    model: new (entity: E, options?: any) => T,
    entity: E | E[],
    options?: Record<string, any>,
  ): T | T[] {
    if (Array.isArray(entity)) {
      return entity.map((u) => new model(u, options))
    }

    return new model(entity, options)
  }

  /**
   * password로 부터 hash값 생성
   * @param {string} password
   * @returns {string}
   */
  static generateHash(password: string): string {
    return bcrypt.hashSync(password, 10)
  }

  /**
   * 랜덤 string 생성
   * @param length
   */
  static generateRandomString(length: number): string {
    return Math.random()
      .toString(36)
      .replace(/[^a-zA-Z0-9]+/g, '')
      .substr(0, length)
  }
  /**
   * password를 hash로 validate
   * @param {string} password
   * @param {string} hash
   * @returns {Promise<boolean>}
   */
  static validateHash(password: string, hash: string): Promise<boolean> {
    if (!password || !hash) {
      return Promise.resolve(false)
    }
    return bcrypt.compare(password, hash)
  }
}
