import type { FormState } from '@/modules/form-generator/types'
import type { MutationsWithContext } from './'

export type Mutations = MutationsWithContext<{
    setMainFormState: (state: FormState) => void
    setMainFormDefaultState: (state: FormState) => void
    setSecondaryFormState: (state: FormState) => void
    setSecondaryFormDefaultState: (state: FormState) => void
}>
