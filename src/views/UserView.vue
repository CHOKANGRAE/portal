<template>
    <section class="user_content">
        <UserInfo />
        <UserSwiper />
    </section>
</template>
<script setup lang="ts">
import "@/styles/pages/_user.scss"
import UserInfo from "@/components/user/UserInfo.vue"
import UserSwiper from "@/components/user/UserSwiper.vue"
</script>
