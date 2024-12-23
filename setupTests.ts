import "@testing-library/jest-dom"
import { fetch, Headers, Request, Response } from "cross-fetch"
import { TextDecoder, TextEncoder } from "util"

Object.assign(global, { TextDecoder, TextEncoder })

global.fetch = fetch
global.Headers = Headers
global.Request = Request
global.Response = Response
global.URL.createObjectURL = jest.fn()
global.window.open = jest.fn()
global.setImmediate = jest.useRealTimers
