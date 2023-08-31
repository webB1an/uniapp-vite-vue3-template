import { defineStore } from 'pinia'

import type { State } from './type'

export const useUserStore = defineStore('user', {
  state: (): State => ({
    userInfo: {
      id: '',
      name: '',
    },
    token: '',
  }),

  persist: {
    key: 'user-storage',
    storage: {
      setItem: uni.setStorageSync,
      getItem: uni.getStorageSync,
    },
    paths: ['userInfo.id', 'token'],
  },

  getters: {
    username(): string {
      return this.userInfo.name
    },
  },

  actions: {
    setUsername() {
      this.userInfo.name = 'admin'
    },
  },
})
