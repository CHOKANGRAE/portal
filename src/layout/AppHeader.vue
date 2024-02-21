<template>
    <header class="header">
        <div class="inner_wrap">
            <div class="logo_box">
                <a @click="login" class="login">
                    <img :src="require(`@/assets/imgs/header/menu.png`)" alt="login"/>
                </a>
                <router-link to="/" class="logo">
                    <img :src="require(`@/assets/imgs/logo.png`)" alt="T" />
                    휴대폰 결제
                </router-link>
            </div>
            <nav class="menu">
                <router-link :to="menu.path" v-for="menu in menuData" :key="menu.name" :class="{ active: menu.isActive }">
                    {{ menu.name }}
                </router-link>
                
            </nav>
        </div>
    </header>

    <transition name="slide">
        <aside class="mob-bar" v-show="mobMenu">
        <article>
            <button type="button" class="close" @click="mobMenu = false">닫기</button>
            <div class="user">
                <strong><span>홍길동</span>님</strong>
                <ul>
                    <li>참여 중 프로모션 <small><span>2</span>건</small></li>
                    <li>최대 할인 금액 <small><span>58,000</span>건</small></li>
                    <li>할인 예상 금액 <small><span>36,000</span>건</small></li>
                </ul>
                <a @click="userInfo">더보기</a>
            </div>

            <nav class="menu">
                <router-link :to="menu.path" v-for="menu in menuData" :key="menu.name" :class="{ active: menu.isActive }" @click="mobMenu = false">
                    {{ menu.name }}
                </router-link>
            </nav>
            
            <button type="button" class="logout">로그아웃</button>
        </article>
        </aside>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRoute } from "vue-router"
import { watch, reactive } from "vue"
import { eventPopup } from "@/apps/common/funs"

import Img from "@/components/Img.vue"

export default defineComponent({
    name: "Header",
    components: { Img },
    data(){
      return{
        mobMenu : false,
      }  
    },
    methods:{
        // login 이벤트 걸어주시면 됩니다. 
        // if login 상태일때, this.mobMenu = true;
        // if logout 상태일 때, window.location.href = "/login";
        login(){
            this.mobMenu = true;
        },

        userInfo(){
            if(window.location.pathname == '/portal/user'){
                this.mobMenu = false;
            }else{
                window.location.href = "/user";
            }
        }
    },
    setup() {
        const route = useRoute()
        const menuData = reactive([
            {
                name: "이벤트",
                path: "/event",
                isActive: false
            },
            {
                name: "멤버십",
                path: "/membership",
                isActive: false
            },
            {
                name: "고객 지원",
                path: "/support",
                isActive: false
            },
            {
                name: "사용방법",
                path: "/use",
                isActive: false
            }
        ])

        // path로 GNB 활성화
        watch(route, (n) => {
            for (const item of menuData) {
                if (item.path == n.path) {
                    item.isActive = true
                } else {
                    item.isActive = false
                }
            }
        })
        return {
            menuData,
            eventPopup
        }
    }
})
</script>
