import type { MutationsWithContext } from './'

export type Mutations = MutationsWithContext<{
    setCount: (count: number) => void
}>
