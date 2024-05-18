import e, { type $infer } from '@/edgeql'

const SOURCE_FIELDS = {
	type: true,
	origin: true,
	credits: true,
	users: true,
} as const

const PHOTO_FIELDS = {
	id: true,
	sanity_id: true,
	hotspot: true,
	crop: true,
	label: true,
	sources: SOURCE_FIELDS,
} as const

export const vegetablePageQuery = e.params(
	{
		handle: e.str,
	},
	(params) =>
		e.select(e.Vegetable, (vegetable) => ({
			filter_single: e.op(vegetable.handle, '=', params.handle),

			id: true,
			names: true,
			scientific_names: true,
			handle: true,
			gender: true,
			strata: true,
			planting_methods: true,
			edible_parts: true,
			lifecycles: true,
			uses: true,
			origin: true,
			height_min: true,
			height_max: true,
			temperature_min: true,
			temperature_max: true,
			content: true,
			photos: (image) => ({
				...PHOTO_FIELDS,

				order_by: {
					expression: image['@order_index'],
					direction: 'ASC',
					empty: e.EMPTY_LAST,
				},
			}),
			varieties: (variety) => ({
				handle: true,
				names: true,
				photos: (image) => ({
					...PHOTO_FIELDS,

					order_by: {
						expression: image['@order_index'],
						direction: 'ASC',
						empty: e.EMPTY_LAST,
					},
				}),

				order_by: {
					expression: variety['@order_index'],
					direction: 'ASC',
					empty: e.EMPTY_LAST,
				},
			}),
			tips: (tip) => ({
				handle: true,
				subjects: true,
				content: true,
				sources: SOURCE_FIELDS,

				order_by: {
					expression: tip['@order_index'],
					direction: 'ASC',
					empty: e.EMPTY_LAST,
				},
			}),
			friends: (friend) => ({
				id: true,
				name: friend.names.index(0),
				handle: true,
				photos: (image) => ({
					...PHOTO_FIELDS,

					order_by: {
						expression: image['@order_index'],
						direction: 'ASC',
						empty: e.EMPTY_LAST,
					},
				}),
			}),
			sources: SOURCE_FIELDS,
		})),
)

export type VegetablePageData = Exclude<$infer<typeof vegetablePageQuery>, null>

export const wishlistedByQuery = e.params({ vegetable_id: e.uuid }, (params) =>
	e.select(e.Vegetable, (vegetable) => ({
		filter_single: e.op(vegetable.id, '=', params.vegetable_id),

		wishlisted_by: {
			status: true,
			user_profile: {
				name: true,
				handle: true,
				photo: PHOTO_FIELDS,
			},

			limit: 20,
		},
	})),
)

export type WishlistedByData = Exclude<$infer<typeof wishlistedByQuery>, null>

export const findUsersToMentionQuery = e.params(
	{
		query: e.str,
	},
	(params) =>
		e.select(e.UserProfile, (user) => ({
			filter: e.op(user.name, 'ilike', params.query),

			id: true,
			name: true,
			handle: true,
			photo: PHOTO_FIELDS,
		})),
)

export type UsersToMentionData = Exclude<
	$infer<typeof findUsersToMentionQuery>,
	null
>

export const userWishlistQuery = e.params(
	{
		vegetable_id: e.uuid,
	},
	(params) =>
		e.select(e.UserWishlist, (wishlist) => ({
			status: true,

			filter_single: e.op(
				e.op(wishlist.user_profile, '=', e.global.current_user_profile),
				'and',
				e.op(
					wishlist.vegetable,
					'=',
					e.select(e.Vegetable, (vegetable) => ({
						filter_single: e.op(vegetable.id, '=', params.vegetable_id),
					})),
				),
			),
		})),
)

export const vegetablesForReferenceQuery = e.select(
	e.Vegetable,
	(vegetable) => ({
		id: true,
		label: vegetable.names.index(0),
		photos: (image) => ({
			...PHOTO_FIELDS,

			limit: 1,
			order_by: {
				expression: image['@order_index'],
				direction: 'ASC',
				empty: e.EMPTY_LAST,
			},
		}),
	}),
)

export type VegetableCardData = VegetablePageData['friends'][0]

export const profilePageQuery = e.select(e.UserProfile, (profile) => ({
	filter_single: e.op(profile.id, '=', e.global.current_user_profile.id),

	name: true,
	id: true,
	handle: true,
	location: true,
	bio: true,
	photo: PHOTO_FIELDS,
}))

export type ProfilePageData = Exclude<$infer<typeof profilePageQuery>, null>

export const profileForNavQuery = e.select(e.UserProfile, (profile) => ({
	filter_single: e.op(profile.id, '=', e.global.current_user_profile.id),

	handle: true,
	photo: PHOTO_FIELDS,
}))
