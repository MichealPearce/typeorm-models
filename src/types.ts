import type { BaseModel } from './model'

export type DataType<M extends BaseModel<any>> = M['@data']

export type Nullable<Value> = Value | null

export type DateData = Date | string
