import { Action } from "routing-controllers"

export function consoleLogInterceptor(action: Action, content: any) {
  // here you have content returned by this action. you can replace something
  // in it and return a replaced result. replaced result will be returned to the user
  console.log(action.request, 'REQ')
  return content
}