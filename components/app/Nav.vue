<template>
  <v-list nav dense>
    <v-list-item v-for="(link, i) of links" :key="i" :to="link.to" nuxt>
      <v-list-item-avatar tile size="24">
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-monospace" v-text="link.text" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiHomeOutline, mdiWrenchOutline } from '@mdi/js'

export default Vue.extend({
  name: 'AppNav',
  data() {
    return {
      links: [
        { to: '/', icon: mdiHomeOutline, text: 'Home' },
        { to: '/build', icon: mdiWrenchOutline, text: 'Build Info' }
      ]
    }
  }
})
</script>
