import cp from 'child_process'
import { NuxtConfig } from '@nuxt/types'
import * as pkg from './package.json'

function run(cmd: string) {
  return cp.execSync(cmd).toString().trim()
}

function getGitInfo() {
  return {
    branch: run('git rev-parse --abbrev-ref HEAD'),
    hash: run('git rev-parse --short HEAD')
  }
}

const config: NuxtConfig = {
  ssr: false,
  target: 'static',
  modern: true,
  head: {
    titleTemplate: '%s - nuxt-vuetify',
    title: 'nuxt-vuetify',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      //
    ]
  },
  css: [
    '~/styles/acrylic-vuetify.scss',
    '~/styles/global.scss'
    //
  ],
  plugins: [
    '~/plugins/init.ts',
    '~/plugins/persist-state.client.ts',
    '~/plugins/theme.client.ts',
    '~/plugins/toast.client.ts'
    //
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
    //
  ],
  modules: [
    '@nuxtjs/axios'
    //
  ],
  axios: {},
  vuetify: {
    customVariables: ['~/styles/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    icons: {
      iconfont: 'mdiSvg',
      values: {}
    }
  },
  build: {}
}

if (!process.env.VERCEL || process.env.CI) {
  const { DefinePlugin } = require('webpack')

  config.build!.plugins = [
    new DefinePlugin({
      BUILD: JSON.stringify({
        git: getGitInfo(),
        time: Date.now(),
        version: pkg.version,
        node: process.version
      })
    })
  ]
}

export default config
