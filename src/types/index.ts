import type { Image } from '@/edgedb.interfaces'
import type {
	SanityImageCrop,
	SanityImageHotspot,
} from '@sanity/image-url/lib/types/types'
import type { JSONContent } from '@tiptap/react'

export type {
	EdiblePart,
	Gender,
	PlantingMethod,
	SourceType,
	Stratum,
	TipSubject,
	VegetableLifeCycle,
	VegetableUsage,
} from '@/edgedb.interfaces'

export type FormOption = {
	value: string
	label: string
	description?: string
}

export type ReferenceOption = {
	id: string
	label: string
	image?: ImageForRendering | null
}

export type ImageForRendering = Pick<Image, 'sanity_id' | 'label'> & {
	hotspot?: SanityImageHotspot | unknown
	crop?: SanityImageCrop | unknown
}

export type TiptapNode = JSONContent

export type NextSearchParams = {
	[query: string]: string | string[]
}
