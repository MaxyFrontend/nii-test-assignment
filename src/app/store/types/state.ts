import type {
    FormFieldState,
    FormState,
    FormFields
} from '@/modules/form-generator/types'

export interface SecondaryFields {
    email: FormFieldState
    tel: FormFieldState
}

export interface State {
    mainFormState: FormState
    mainFormDefaultState: FormState | null
    mainFormFields: FormFields
    secondaryFormState: FormState
    secondaryFormDefaultState: FormState | null
    secondaryFormFields: FormFields
}
