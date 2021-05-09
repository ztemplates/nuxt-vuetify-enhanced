<template>
  <v-navigation-drawer
    id="settings-drawer"
    v-model="settings"
    right
    disable-route-watcher
    fixed
    hide-overlay
    temporary
  >
    <v-toolbar flat color="transparent">
      <div class="text-button">Settings</div>
      <v-spacer />
      <v-btn icon @click="settings = !settings">
        <v-icon>{{ mdiClose }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider />
    <template v-if="settings">
      <app-settings-theme />
      <v-divider />
      <app-settings-storage />
      <v-divider />
      <app-settings-version />
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiClose } from '@mdi/js'
import { sync } from 'vuex-pathify'

export default Vue.extend({
  name: 'AppSettingsDrawer',
  data() {
    return {
      mdiClose
    }
  },
  computed: {
    settings: sync('drawers@settings')
  }
})
</script>
