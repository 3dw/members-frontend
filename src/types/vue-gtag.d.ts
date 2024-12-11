declare module 'vue-gtag' {
  import { Plugin } from 'vue'

  interface VueGtagOptions {
    config: {
      id: string
      [key: string]: any
    }
    [key: string]: any
  }

  const VueGtag: Plugin
  export default VueGtag
}
