/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-shadow */
/*
 * @Description:
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2021-01-25 16:39:22
 * @LastEditors: gumingchen
 * @LastEditTime: 2021-04-27 09:31:11
 */
export interface IObject {
  [key: string]: any
}

export interface IFn {
  (...args: any[]): any;
}

export interface IApp {
  component: (arg0: any, arg1: any) => void
  use: (arg0: any) => void
  config: {
    globalProperties: {
      $ELEMENT: {
        size: string
        zIndex: number
      }
    }
  }
  directive: (arg0: string, arg1: (el: any, binding: any) => void) => void
}

export enum ContentType {
  JSON = 'application/json;charset=UTF-8',
  FORM = 'application/x-www-form-urlencoded;charset=UTF-8',
  UPLOAD = 'multipart/form-data'
}

export enum TokenKey {
  TOKEN = 'token',
  ACCESS = 'access'
}

export enum TimeOut {
  TEN = 10000
}

export enum StorageType {
  COOKIE = 'cookie',
  SESSION = 'sessionStorage',
  LOCAL = 'localStorage'
}

export enum LanguageKey {
  LANG = 'lang',
  LANGUAGE = 'language'
}

export enum SuccessCode {
  ZERO = 0,
  TWO_HUNDRED = 200
}

export enum LanguageType {
  Chinese = 'cn',
  English = 'en'
}

export enum ModelKey {
  UPDATE = 'update:modelValue'
}
