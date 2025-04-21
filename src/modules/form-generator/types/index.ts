import type { Options } from '@/shared/ui/form-fields/select-field/types/select'

type BaseAttributes = Record<string, any>

interface BaseFormField {
    name: string
    label?: string
    required?: boolean
    attributes: BaseAttributes
}

interface InputField extends BaseFormField {
    type: 'input'
}

interface CheckboxField extends BaseFormField {
    type: 'checkbox'
    label?: string
    trueValue: string
    falseValue: string
    checked?: boolean
}

interface SelectField extends BaseFormField {
    type: 'select'
    options: Options
}

interface TextareaField extends BaseFormField {
    type: 'textarea'
}

export type FormField = InputField | CheckboxField | SelectField | TextareaField

export type FormFieldState = string

export type FormFields = FormField[]

export type FormState = Record<string, FormFieldState>
