import { Context } from '@nuxt/types'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import pathify, { make } from 'vuex-pathify'

export const state = () => ({
  local: {
    theme: 0,
    acrylic: true
  },
  drawers: {
    main: false,
    settings: false
  },
  systemTheme: 2
})

type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  ...make.getters(state),
  theme(state) {
    return state.local.theme || state.systemTheme
  }
}

export const mutations: MutationTree<RootState> = {
  ...make.mutations(state)
}

export const actions: ActionTree<RootState, RootState> = {
  ...make.actions(state),
  async nuxtInit(_store, _ctx: Context) {
    //
  }
}

export const plugins = [pathify.plugin]
