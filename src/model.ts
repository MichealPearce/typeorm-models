import { ClassType, isObject, toEntries } from '@michealpearce/utils'
import {
	BaseEntity,
	CreateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'
import { BaseModelData, ModelData, ModelIDData, ModelUUIDData } from './data'
import { isBaseModel } from './functions'
import type { DataType, DateData, Nullable } from './types'

export abstract class BaseModel<Data extends BaseModelData> extends BaseEntity {
	static init<M extends BaseModel<any>>(
		this: ClassType<M>,
		data: Partial<DataType<M>> = {},
	): M {
		return new this().assign(data)
	}

	// type only property, does not exist on the instance, is not/do not set
	declare '@data': Data

	assign(data: Partial<Data>) {
		const model = this as any

		for (const [key, value] of toEntries(data)) {
			if (key in model && isBaseModel(model[key]) && isObject(value))
				model[key].assign(value)
			else model[key] = value
		}

		return this
	}
}

export abstract class Model<Data extends ModelData>
	extends BaseModel<Data>
	implements ModelData
{
	@CreateDateColumn()
	declare created: DateData

	@UpdateDateColumn()
	declare updated?: Nullable<DateData>

	@DeleteDateColumn()
	declare deleted?: Nullable<DateData>
}

export abstract class ModelID<Data extends ModelIDData>
	extends Model<Data>
	implements ModelIDData
{
	@PrimaryGeneratedColumn()
	declare id: number
}

export abstract class ModelUUID<Data extends ModelUUIDData>
	extends Model<Data>
	implements ModelUUIDData
{
	@PrimaryGeneratedColumn('uuid')
	declare uuid: string
}
