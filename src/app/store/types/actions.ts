import type { ActionsWithContext } from './'

export type Actions = ActionsWithContext<{
    inc: (value: number) => void
}>
