import { ClassType, assign } from '@michealpearce/utils'
import { DateData, Nullable } from './types'

export class BaseModelData {
	static init<D extends BaseModelData>(
		this: ClassType<D>,
		data: Partial<D> = {},
	): D {
		return new this(data)
	}

	constructor(data?: Record<string, any>) {
		if (data) assign(this, data)
	}
}

export class ModelData extends BaseModelData {
	declare created: DateData
	declare updated?: Nullable<DateData>
	declare deleted?: Nullable<DateData>
}

export class ModelIDData extends ModelData {
	declare id: number
}

export class ModelUUIDData extends ModelData {
	declare uuid: string
}
