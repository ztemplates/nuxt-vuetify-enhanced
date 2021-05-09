<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6" xl="4">
        <v-card>
          <v-card-title>Build details</v-card-title>
          <v-divider />
          <v-list color="transparent">
            <v-list-item v-for="(build, i) of builds" :key="i">
              <v-list-item-avatar tile size="24">
                <v-icon :color="build.color">{{ build.icon }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <code>{{ build.title }}</code>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <code>{{ build.subtitle }}</code>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiBookClockOutline, mdiGit, mdiPackageVariant } from '@mdi/js'

export default Vue.extend({
  name: 'Build',
  data() {
    return {
      t: 0,
      builds: [
        { color: '#CB3837', icon: mdiPackageVariant, title: BUILD.version },
        {
          color: '#F05032',
          icon: mdiGit,
          title: BUILD.git.hash,
          subtitle: BUILD.git.branch
        },
        {
          icon: mdiBookClockOutline,
          title: new Date(BUILD.time).toLocaleDateString(),
          subtitle: new Date(BUILD.time).toLocaleTimeString()
        }
      ]
    }
  },
  head() {
    return {
      title: 'Build Info'
    }
  }
})
</script>
