import e from '@/edgeql'

export const insertSourcesMutation = e.params(
	{
		sources: e.array(e.json),
	},
	(params) =>
		e.for(e.array_unpack(params.sources), (source) =>
			e.insert(e.Source, {
				id: e.cast(e.uuid, e.json_get(source, 'id')),
				credits: e.cast(e.str, e.json_get(source, 'credits')),
				type: e.cast(e.SourceType, e.json_get(source, 'type')),
				origin: e.cast(e.str, e.json_get(source, 'origin')),
				users: e.select(e.UserProfile, (user) => ({
					filter: e.op(
						user.id,
						'in',
						e.array_unpack(
							e.cast(e.array(e.uuid), e.json_get(source, 'userIds')),
						),
					),
				})),
			}),
		),
)

export const insertImagesMutation = e.params(
	{
		images: e.array(
			e.tuple({
				id: e.uuid,
				sanity_id: e.str,
				label: e.str,
				sources: e.array(e.uuid),
			}),
		),
	},
	(params) =>
		e.for(e.array_unpack(params.images), (photo) =>
			e
				.insert(e.Image, {
					id: photo.id,
					sanity_id: photo.sanity_id,
					label: photo.label,
					sources: e.select(e.Source, (source) => ({
						filter: e.op(source.id, 'in', e.array_unpack(photo.sources)),
					})),
				})
				// Sanity de-duplicates images if they're uploaded multiple times,
				// so we can safely ignore conflicts
				.unlessConflict((existingImage) => ({
					on: existingImage.sanity_id,
					else: existingImage,
				})),
		),
)
export const insertVarietiesMutation = e.params(
	{
		varieties: e.array(
			e.tuple({
				id: e.uuid,
				names: e.array(e.str),
				handle: e.str,
				photosSanityId: e.array(e.str),
			}),
		),
	},
	(params) =>
		e.for(e.array_unpack(params.varieties), (variety) =>
			e.insert(e.VegetableVariety, {
				id: variety.id,
				names: variety.names,
				handle: variety.handle,
				photos: e.select(e.Image, (image) => ({
					filter: e.op(
						image.sanity_id,
						'in',
						e.array_unpack(variety.photosSanityId),
					),
				})),
			}),
		),
)
export const insertTipsMutation = e.params(
	{
		tips: e.array(
			e.tuple({
				id: e.uuid,
				handle: e.str,
				subjects: e.array(e.str),
				content: e.json,
				sources: e.array(e.uuid),
			}),
		),
	},
	(params) =>
		e.for(e.array_unpack(params.tips), (tip) =>
			e.insert(e.VegetableTip, {
				id: tip.id,
				subjects: e.array_unpack(e.cast(e.array(e.TipSubject), tip.subjects)),
				content: tip.content,
				handle: tip.handle,
				sources: e.select(e.Source, (source) => ({
					filter: e.op(source.id, 'in', e.array_unpack(tip.sources)),
				})),
			}),
		),
)

export const insertVegetableFriendshipsMutation = e.params(
	{
		vegetable_id: e.uuid,
		friends: e.array(
			e.tuple({
				id: e.uuid,
				unique_key: e.str,
			}),
		),
	},
	(params) =>
		e.for(e.array_unpack(params.friends), (friend) =>
			e
				.insert(e.VegetableFriendship, {
					unique_key: friend.unique_key,
					vegetables: e.select(e.Vegetable, (v) => ({
						filter: e.op(v.id, 'in', e.set(params.vegetable_id, friend.id)),
					})),
				})
				// If the friendship already exists, do nothing
				.unlessConflict(),
		),
)

export const insertVegetableMutation = e.params(
	{
		id: e.uuid,
		names: e.array(e.str),
		scientific_names: e.optional(e.array(e.str)),
		handle: e.str,
		gender: e.optional(e.Gender),
		origin: e.optional(e.str),
		strata: e.optional(e.array(e.str)),
		uses: e.optional(e.array(e.str)),
		edible_parts: e.optional(e.array(e.str)),
		lifecycles: e.optional(e.array(e.str)),
		planting_methods: e.optional(e.array(e.str)),
		height_min: e.optional(e.float32),
		height_max: e.optional(e.float32),
		temperature_min: e.optional(e.float32),
		temperature_max: e.optional(e.float32),
		content: e.optional(e.json),

		// Refs
		photos: e.optional(
			e.array(e.tuple({ sanity_id: e.str, order_index: e.int16 })),
		),
		varieties: e.optional(
			e.array(e.tuple({ id: e.uuid, order_index: e.int16 })),
		),
		tips: e.optional(e.array(e.tuple({ id: e.uuid, order_index: e.int16 }))),
		sources: e.array(e.uuid),
	},
	(params) =>
		e.insert(e.Vegetable, {
			...params,
			strata: e.cast(e.array(e.Stratum), params.strata),
			uses: e.cast(e.array(e.VegetableUsage), params.uses),
			edible_parts: e.cast(e.array(e.EdiblePart), params.edible_parts),
			lifecycles: e.cast(e.array(e.VegetableLifeCycle), params.lifecycles),
			planting_methods: e.cast(
				e.array(e.PlantingMethod),
				params.planting_methods,
			),
			photos: e.assert_distinct(
				e.for(e.array_unpack(params.photos), (photo) =>
					e.select(e.Image, (v) => ({
						filter_single: e.op(v.sanity_id, '=', photo.sanity_id),
						// '@order_index': photo.order_index,
					})),
				),
			),
			varieties: e.assert_distinct(
				e.for(e.array_unpack(params.varieties), (variety) =>
					e.select(e.VegetableVariety, (v) => ({
						filter_single: e.op(v.id, '=', variety.id),
						// '@order_index': variety.order_index,
					})),
				),
			),
			tips: e.assert_distinct(
				e.for(e.array_unpack(params.tips), (tip) =>
					e.select(e.VegetableTip, (v) => ({
						filter_single: e.op(v.id, '=', tip.id),
						// '@order_index': tip.order_index,
					})),
				),
			),
			sources: e.select(e.Source, (source) => ({
				filter: e.op(source.id, 'in', e.array_unpack(params.sources)),
			})),
		}),
)

export const updateWishlistStatusMutation = e.params(
	{
		vegetable_id: e.uuid,
		status: e.VegetableWishlistStatus,
	},
	(params) =>
		e
			.insert(e.UserWishlist, {
				vegetable: e.select(e.Vegetable, (v) => ({
					filter_single: e.op(v.id, '=', params.vegetable_id),
				})),
				status: params.status,
				user_profile: e.global.current_user_profile,
			})
			.unlessConflict((userWishlist) => ({
				// When there's a conflict on the composite exclusivity constraint of the wishlist (user_profile, vegetable)
				on: e.tuple([userWishlist.user_profile, userWishlist.vegetable]),
				// Simply update existing objects
				else: e.update(userWishlist, () => ({
					set: {
						status: params.status,
					},
				})),
			})),
)

export const updateProfileMutation = e.params(
	{
		name: e.optional(e.str),
		handle: e.optional(e.str),
		location: e.optional(e.str),
		photo: e.optional(e.uuid),
		bio: e.optional(e.json),
	},
	(params) =>
		e.update(e.UserProfile, (userProfile) => ({
			filter_single: e.op(
				e.global.current_user_profile.id,
				'=',
				userProfile.id,
			),
			set: {
				name: e.op(params.name, '??', userProfile.name),
				handle: e.op(params.handle, '??', userProfile.handle),
				location: e.op(params.location, '??', userProfile.location),
				bio: e.op(params.bio, '??', userProfile.bio),
				photo: e.op(
					e.select(e.Image, (image) => ({
						filter_single: e.op(image.id, '=', params.photo),
					})),
					'??',
					userProfile.photo,
				),
			},
		})),
)

export const insertNotesMutation = e.params(
	{
		notes: e.array(
			e.tuple({
				id: e.uuid,
				handle: e.str,
				title: e.json,
				public: e.bool,
				published_at: e.datetime,
				created_by: e.uuid,
				types: e.array(e.str),

				/** { body: e.optional(e.json) } */
				optional_properties: e.json,
			}),
		),
	},
	(params) =>
		e.for(e.array_unpack(params.notes), (note) =>
			e.insert(e.Note, {
				id: note.id,
				handle: note.handle,
				title: note.title,
				body: e.cast(e.json, e.json_get(note.optional_properties, 'body')),
				public: note.public,
				types: e.array_unpack(e.cast(e.array(e.NoteType), note.types)),
				published_at: note.published_at,
				created_by: e.assert_single(
					e.select(e.UserProfile, (user_profile) => ({
						filter_single: e.op(user_profile.id, '=', note.created_by),
					})),
				),
			}),
		),
)
