import { computed, ref } from "vue"
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import { defineStore } from 'pinia'

// 引数を受け取れるgetter
export const useCounterStore = defineStore('getter', {
  getters: {
    // 値をキャッシュすることはできなくなる（ただの関数と同じ）
    getUserById: (state) => {
      // ただ、getterの中に計算結果をキャッシュしておくことはできる（純関数ならアリかも）
      const activeUsers = state.users.filter((user) => user.active)
      return (userId: number) => state.users.find((user) => user.id === userId)
    },
  }
})

// useCase
getUserById(2)