import type { Mutations } from './mutations'
import type { Actions } from './actions'
import type { State } from './state'
import type { Commit } from './commit'
import type { Dispatch } from './dispatch'
import type { Store as VuexStore } from 'vuex'

type RootCommit = Commit<Actions>
type RootDispatch = Dispatch<Mutations>

export interface Store extends VuexStore<State> {
    commit: RootCommit
    dispatch: RootDispatch
}

export type ActionsWithContext<
    T extends Record<string, (...args: any[]) => any>
> = {
    [K in keyof T]: (
        this: Store,
        context: {
            commit: RootCommit
            dispatch: RootDispatch
            state: State
        },
        ...args: Parameters<T[K]>
    ) => ReturnType<T[K]>
}

export type MutationsWithContext<
    T extends Record<string, (...args: any[]) => any>
> = {
    [K in keyof T]: (
        state: State,
        ...args: Parameters<T[K]>
    ) => ReturnType<T[K]>
}
