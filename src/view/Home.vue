<template>

  <h1> {{ status }} </h1>
  <h1> {{ id }} </h1>

</template>

<script setup lang="ts" name="Home">
import useUtilStore from "../store/util.ts" //使用 pinia 实现全局的数据共享
import { onMounted, onUnmounted } from "vue"
import { useRouter } from "vue-router";

const utilStore = useUtilStore()
const router = useRouter()

onMounted(() => {
  document.body.classList.add('home_body')
})

onUnmounted(() => {
  document.body.classList.remove('home_body')
})
const status = router.currentRoute.value.params.status as string
const id = router.currentRoute.value.params.id as string

utilStore.getSessionIdAndUserInfo(id, status)

</script>

<style>
.home_body {
  font-family: "JetBrains Mono ExtraBold", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  color: #333;
}
</style>