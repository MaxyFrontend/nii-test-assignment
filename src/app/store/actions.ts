import type { Actions } from './types/state'

export const actions: Actions = {
    inc({ commit }, value) {
        commit('inc', value)
    }
}
