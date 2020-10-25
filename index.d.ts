import {MapStream} from 'event-stream'

declare const gulpInjectSvg: (options?: {
  base?: string
}) => MapStream

export = gulpInjectSvg
