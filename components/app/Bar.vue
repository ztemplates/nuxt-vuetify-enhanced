<template>
  <v-app-bar app>
    <v-app-bar-nav-icon aria-label="menu" @click="main = !main" />
    <v-btn
      text
      x-large
      class="text-none text-h5"
      href="/"
      @click.stop.prevent="$router.push('/')"
    >
      <code>SITE TITLE</code>
    </v-btn>
    <v-spacer />
    <v-btn
      icon
      href="https://github.com/ztemplates/nuxt-vuetify-enhanced"
      target="_blank"
    >
      <v-icon>{{ mdiGithub }}</v-icon>
    </v-btn>
    <v-btn icon aria-label="settings" @click="settings = !settings">
      <v-icon>{{ mdiCog }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiCog, mdiGithub } from '@mdi/js'
import { sync } from 'vuex-pathify'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      mdiCog,
      mdiGithub
    }
  },
  computed: {
    settings: sync('drawers@settings'),
    main: sync('drawers@main')
  }
})
</script>

<style>
.theme--dark .site-title {
  color: #fff;
}
.theme--light .site-title {
  color: #000;
}
</style>
