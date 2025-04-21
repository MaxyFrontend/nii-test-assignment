import type { Mutations } from './types/mutations'

export const mutations: Mutations = {
    setMainFormState(state, value) {
        state.mainFormState = value
    },
    setMainFormDefaultState(state, value) {
        state.mainFormDefaultState = value
    },
    setSecondaryFormState(state, value) {
        state.secondaryFormState = value
    },
    setSecondaryFormDefaultState(state, value) {
        state.secondaryFormDefaultState = value
    }
}
