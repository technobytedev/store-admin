import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const isLoading = ref(false)
  const programData = ref(null)
  const data = ref([])

  const login = async (username, password) => {
      try {
          isLoading.value = true
          const response = await $fetch('http://127.0.0.1:8000/login', {
          method: 'POST',
          body: {
            username: username,
            password: password
          }
        })
        return data.value = await response
      }
     catch (error) {
      return data.value = error
    }
    finally {
        isLoading.value = false

    }
  }

  return { login, isLoading, data }
})
