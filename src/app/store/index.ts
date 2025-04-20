import type { InjectionKey } from 'vue'
import { createStore, useStore as useStoreBase } from 'vuex'
import { mutations } from './mutations'
import { actions } from './actions'
import type { Store } from './types'

export const key: InjectionKey<Store> = Symbol()

export const store: Store = createStore({
    state: {
        count: 5
    },
    mutations,
    actions
})

export function useStore(): Store {
    return useStoreBase(key) as Store
}
