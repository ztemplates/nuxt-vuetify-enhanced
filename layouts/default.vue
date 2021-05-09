<template>
  <v-app :class="{ acrylic }">
    <app-bar />
    <client-only>
      <v-navigation-drawer v-model="main" app>
        <app-nav />
      </v-navigation-drawer>
      <app-settings-drawer />
    </client-only>
    <v-main>
      <nuxt />
    </v-main>
    <app-footer />
    <app-bg />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { get, sync } from 'vuex-pathify'

export default Vue.extend({
  name: 'App',
  computed: {
    theme: get('local@theme'),
    acrylic: get('local@acrylic'),
    main: sync('drawers@main')
  },
  watch: {
    theme: {
      immediate: true,
      handler(val) {
        if (val === 2) {
          this.$vuetify.theme.dark = false
        } else if (val === 1) {
          this.$vuetify.theme.dark = true
        } else if (process.client) {
          const darkMediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
          )
          this.$vuetify.theme.dark = darkMediaQuery.matches
        }
      }
    }
  }
})
</script>
