import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { VegetableVarietyInForm } from '@/schemas'
import { cn } from '@/utils/cn'
import { truncate } from '@/utils/strings'
import { ImageOffIcon } from 'lucide-react'
import {
  useFormContext,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import ArrayInput from './ArrayInput'
import Field from './Field'
import ImageInput from './ImageInput'

export default function VegetableVarietyInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  field: rootField,
  index: varietyIndex,
}: {
  field: ControllerRenderProps<TFieldValues, TName>
  index: number
}) {
  const form = useFormContext()
  const freshValue = form.watch(rootField.name)
  const value = (freshValue || {}) as Partial<VegetableVarietyInForm>
  const { names = [] } = value

  const renderablePhoto =
    value.photos?.[0] &&
    'data' in value.photos[0] &&
    'file' in value.photos[0].data
      ? value.photos[0]
      : undefined
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'flex-[0_0_6.25rem] w-[6.25rem] h-auto rounded-lg overflow-hidden text-gray-700',
              renderablePhoto
                ? ''
                : 'flex items-center justify-center h-[6.25rem] bg-card-foreground/5',
            )}
          >
            {renderablePhoto &&
            'file' in renderablePhoto.data &&
            renderablePhoto.data.file instanceof File ? (
              <img
                src={URL.createObjectURL(renderablePhoto.data.file)}
                alt={renderablePhoto.label}
                className="w-full h-auto max-h-[6.25rem] object-cover"
              />
            ) : (
              <ImageOffIcon />
            )}
          </div>
          <div className="space-y-1 text-left">
            <h2 className={names[0]?.value ? '' : 'text-foreground/80'}>
              {names[0]?.value || 'Variedade sem nome'}
            </h2>
            {names.length > 1 && (
              <p className="text-xs">
                {truncate(
                  names
                    .slice(1)
                    .map((n) => n.value.trim())
                    .join(', '),
                  100,
                )}
              </p>
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent hasClose={false}>
        <DialogHeader>
          <DialogTitle>
            Editar variedade{' '}
            {typeof varietyIndex === 'number' && `#${varietyIndex + 1}`}
          </DialogTitle>
          <DialogClose>
            <Button variant="outline" size="sm">
              Fechar
            </Button>
          </DialogClose>
        </DialogHeader>
        <DialogBody className="space-y-6">
          <Field
            label="Nomes"
            name={`${rootField.name}.names`}
            form={form}
            render={({ field: namesField }) => (
              <ArrayInput
                field={namesField}
                // @ts-expect-error no way for TS to know the type of `newItemValue`
                newItemValue={{ value: '' }}
                newItemLabel="Novo nome"
                renderItem={(index) => (
                  <Field
                    form={form}
                    name={`${namesField.name}.${index}.value`}
                    label={`Nome ${index + 1}`}
                    hideLabel
                    render={({ field: subField }) => <Input {...subField} />}
                  />
                )}
              />
            )}
          />
          <Field
            form={form}
            name={`${rootField.name}.photos`}
            label="Fotos"
            render={({ field: photosField }) => {
              return (
                <ArrayInput
                  field={photosField}
                  // @ts-expect-error no way for TS to know the type of `newItemValue`
                  newItemValue={{}}
                  newItemLabel="Nova foto"
                  renderItem={(index) => (
                    <Field
                      form={form}
                      name={`${photosField.name}.${index}`}
                      label={`Foto #${index + 1}`}
                      hideLabel
                      render={({ field: subField }) => (
                        <ImageInput field={subField} />
                      )}
                    />
                  )}
                />
              )
            }}
          />
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}
