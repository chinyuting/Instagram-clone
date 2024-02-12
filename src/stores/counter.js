import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// TODO 註解，而且沒看到地方用到
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
