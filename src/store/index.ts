import { createPinia } from 'pinia'

// 持续化本地存储
// https://prazdevs.github.io/pinia-plugin-persistedstate/
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
