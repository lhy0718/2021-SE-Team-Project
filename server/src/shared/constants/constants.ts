export enum UserRole {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum Weekday {
  MON = 'MON',
  TUE = 'TUE',
  WED = 'WED',
  THUR = 'THUR',
  FRI = 'FRI',
  SAT = 'SAT',
  SUN = 'SUN',
}
export enum Attend {
  ATTENDED = 'ATTENDED',
  ABSENT = 'ABSENT',
  TARDY = 'TARDY',
  ETC = 'ETC',
}
export const MINUTE_IN_SECONDS = 60
export const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS
export const DAY_IN_SECONDS = 24 * HOUR_IN_SECONDS

export const USERTOKEN_EXPIRE_IN = 360 * DAY_IN_SECONDS * 1000

export const USERTOKEN_COOKIE_NAME = 'authtoken'
export const OAUTHINFO_TOKEN_COOKIE_NAME = 'oauthinfo'

export const SERVICE_NAME = '출석이'
