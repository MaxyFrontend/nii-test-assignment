import type { Mutations } from './types/state'

export const mutations: Mutations = {
    setCount(state, value) {
        state.count = value
    }
}
