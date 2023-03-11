import { Is, not, Not } from '@michealpearce/utils'
import { BaseModel, Model, ModelID, ModelUUID } from './model'

export function isBaseModel<T>(thing: T): thing is Is<T, BaseModel<any>> {
	return thing instanceof BaseModel
}

export function notBaseModel<T>(thing: T): thing is Not<T, BaseModel<any>> {
	return not(isBaseModel(thing))
}

export function isModel<T>(thing: T): thing is Is<T, Model<any>> {
	return thing instanceof Model
}

export function notModel<T>(thing: T): thing is Not<T, Model<any>> {
	return not(isModel(thing))
}

export function isModelID<T>(thing: T): thing is Is<T, ModelID<any>> {
	return thing instanceof ModelID
}

export function notModelID<T>(thing: T): thing is Not<T, ModelID<any>> {
	return not(isModelID(thing))
}

export function isModelUUID<T>(thing: T): thing is Is<T, ModelUUID<any>> {
	return thing instanceof ModelUUID
}

export function notModelUUID<T>(thing: T): thing is Not<T, ModelUUID<any>> {
	return not(isModelUUID(thing))
}
