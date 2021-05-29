export enum UserRole {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export const MINUTE_IN_SECONDS = 60
export const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS
export const DAY_IN_SECONDS = 24 * HOUR_IN_SECONDS

export const USERTOKEN_EXPIRE_IN = 360 * DAY_IN_SECONDS * 1000

export const USERTOKEN_COOKIE_NAME = 'authtoken'
export const OAUTHINFO_TOKEN_COOKIE_NAME = 'oauthinfo'
