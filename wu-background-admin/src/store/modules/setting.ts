import { defineStore } from 'pinia'

let useLayoutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false,
      refsh: false,
      dark: false,
    }
  },
})

export default useLayoutSettingStore
