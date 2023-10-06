import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('')
    const setToken = (t) => (token.value = t) //设置token
    return {
      token,
      setToken
    }
  },
  {
    persist: true //持久化
  }
)
