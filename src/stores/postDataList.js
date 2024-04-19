import { ref } from 'vue'
import { defineStore } from 'pinia'

export const postDataStore = defineStore('PostDataList', () => {
  const postData = ref([])
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  

  return { postData }
})
