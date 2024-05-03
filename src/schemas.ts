import type {
  PlantingMethod,
  Stratum,
  VegetableEdiblePart,
  VegetableLifecycle,
  VegetableUsage,
} from '@/types'
import {
  EDIBLE_PART_TO_LABEL,
  PLANTING_METHOD_TO_LABEL,
  STRATUM_TO_LABEL,
  USAGE_TO_LABEL,
  VEGETABLE_LIFECYCLE_TO_LABEL,
} from '@/utils/labels'
import * as S from '@effect/schema/Schema'
import { MAX_ACCEPTED_HEIGHT } from './utils/numbers'

export enum Gender {
  MASCULINO = 'MASCULINO',
  FEMININO = 'FEMININO',
  NEUTRO = 'NEUTRO',
}

export const Vegetable = S.Struct({
  names: S.Array(S.String.pipe(S.minLength(1))).pipe(S.minItems(1)),
  handle: S.String.pipe(
    S.minLength(1, {
      message: () => 'Obrigatório',
    }),
    S.minLength(3, {
      message: () => 'Obrigatório (mínimo de 3 caracteres)',
    }),
    S.pattern(/^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/, {
      message: () =>
        'O endereço não pode conter caracteres especiais, letras maiúsculas, espaços ou acentos',
    }),
  ),
  scientific_name: S.String.pipe(
    S.minLength(1, {
      message: () => 'Obrigatório',
    }),
    S.minLength(3, {
      message: () => 'Obrigatório (mínimo de 3 caracteres)',
    }),
  ),
  origin: S.String,
  gender: S.Enums(Gender).annotations({
    message: () => 'Obrigatório',
    jsonSchema: {
      blabla: 'bleble',
    },
  }),
  usage: S.Array(
    S.Literal(...(Object.keys(USAGE_TO_LABEL) as VegetableUsage[])),
  )
    .pipe(S.minItems(1))
    .annotations({
      message: () => 'Marque ao menos uma opção',
    }),
  edible_parts: S.optional(
    S.Array(
      S.Literal(
        ...(Object.keys(EDIBLE_PART_TO_LABEL) as VegetableEdiblePart[]),
      ),
    ),
  ),
  lifecycle: S.optional(
    S.Array(
      S.Literal(
        ...(Object.keys(VEGETABLE_LIFECYCLE_TO_LABEL) as VegetableLifecycle[]),
      ),
    ),
  ),
  stratum: S.Array(S.Literal(...(Object.keys(STRATUM_TO_LABEL) as Stratum[])))
    .pipe(S.minItems(1))
    .annotations({
      message: () => 'Marque ao menos uma opção',
    }),
  planting_method: S.optional(
    S.Array(
      S.Literal(...(Object.keys(PLANTING_METHOD_TO_LABEL) as PlantingMethod[])),
    ),
  ),
  height_min: S.optional(
    S.Int.pipe(
      S.positive({ message: () => 'Altura deve ser um número positivo' }),
      S.lessThan(MAX_ACCEPTED_HEIGHT, {
        message: () => 'Que vegetal gigante e louco é esse?!',
      }),
    ),
  ),
  height_max: S.optional(
    S.Int.pipe(
      S.positive({ message: () => 'Altura deve ser um número positivo' }),
      S.lessThan(MAX_ACCEPTED_HEIGHT, {
        message: () => 'Que vegetal gigante e louco é esse?!',
      }),
    ),
  ),
  temperature_min: S.optional(
    S.Int.pipe(
      S.greaterThan(-50, {
        message: () => 'Que inverno gelado é esse que cê tá plantando?!',
      }),
      S.lessThan(60, {
        message: () => 'Que verão quente é esse que cê tá plantando?!',
      }),
    ),
  ),
  temperature_max: S.optional(
    S.Int.pipe(
      S.greaterThan(-50, {
        message: () => 'Que inverno gelado é esse que cê tá plantando?!',
      }),
      S.lessThan(60, {
        message: () => 'Que verão quente é esse que cê tá plantando?!',
      }),
    ),
  ),
})