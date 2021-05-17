<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">
            Welcome to the Vuetify + Nuxt.js template
          </v-card-title>
          <v-divider />
          <v-card-text>
            <async-btn :handler="foo" color="success">foo</async-btn>
            <async-btn :handler="bar" color="error">bar</async-btn>
            <async-btn :handler="noToast">no toast</async-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { wait } from '~/utils/misc'

export default Vue.extend({
  name: 'Index',
  methods: {
    async foo() {
      await wait(500)
      return 'LALALA'
    },
    async bar() {
      await wait(500)
      throw new Error("That's bad")
    },
    async noToast() {
      await wait(500)
    }
  }
})
</script>
