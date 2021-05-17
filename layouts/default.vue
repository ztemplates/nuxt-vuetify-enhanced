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
    theme: get('theme'),
    acrylic: get('local@acrylic'),
    main: sync('drawers@main')
  },
  watch: {
    theme: {
      handler() {
        this.$vuetify.theme.dark = this.theme === 1
      },
      immediate: true
    }
  }
})
</script>
