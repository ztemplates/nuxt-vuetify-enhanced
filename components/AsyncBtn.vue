<template>
  <v-btn v-bind="Object.assign({}, $attrs, $data)" @click="onClick">
    <slot />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AsyncBtn',
  props: {
    handler: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    loading: false
  }),
  methods: {
    async onClick() {
      this.loading = true
      await this.$toast.$wrap(async () => {
        return await this.handler()
      })
      this.loading = false
    }
  }
})
</script>
