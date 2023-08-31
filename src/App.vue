<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'

const a = ref(1)
onLaunch(() => {
  console.log(a.value)
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style></style>
