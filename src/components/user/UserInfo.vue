<template>
  <article class="user_info test">
    <div class="title main">
      <strong> 
        <span>홍길동</span>님<small>(<span>010-****-9143</span>)</small>
      </strong>
    </div>
    <!-- 최대/할인 금액 -->
    <!-- PC -->
    <div class="step step1">
      <p>
        <span>2024.01</span>월 최대 할인 금액 : <span class="point">60,000</span>원
      </p>
      <p>
        <span>2024.01</span>월 할인 예상 금액 : <span class="point">100,000</span>원
      </p>

      <div class="progress">
        <div class="progress-bar"></div>

        <div class="progress-text">
          <span>0</span>
          <span>30,000</span>
          <span>60,000</span>
          <span>100,000</span>
        </div>
      </div>
    </div>

    <!-- MOB -->
    <div class="step tabs">
      <div class="t">
        <div class="t-title">
          <p>2024. 01월</p>
          <p>
            <span>최대 할인 금액</span>  <span><span class="point">58,000</span>원</span>
          </p>
          <p>
            <span>할인 예상 금액</span>  <span><span class="point">36,000</span>원</span>
          </p>
        </div>
        <div class="t-contents">
          <div class="pro">
            <div class="pro-bar" :class="{'left' : width < 51, 'right' : width > 50}">
              <div class="pro-point">
                <div class="pro-text">36,000원</div>
              </div>
            </div>

            <div class="pro-line">
              <span>0원</span>
              <span>20,000원</span>
              <span>40,000원</span>
              <span>58,000원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 참여 중 프로모션 -->
    <div class="step step2">
      <div class="title">
        <h3>참여 중 프로모션 <span>{{ swiperContents.length }}</span>건</h3>
      </div>

      <div class="slide-box-no" v-show="swiperContents.length === 0">
        참여 중인 프로모션이 없습니다.
      </div>

      <div class="slide-box" v-show="swiperContents.length > 0">
        <swiper
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :slidesPerView="1"
          :followFinger="false"
          :loop="true"
          :speed="800"
          :spaceBetween="15"
          :pagination="{
            type: 'fraction',
          }"
          :navigation="true"
          :modules="modules"
          :draggable="true"
          :breakpoints="{
            '750': {
              slidesPerView: 2,
            }
          }"
          class="promotion"
        >
          <swiper-slide v-for="(swiper, index) in swiperContents" :key="index" class="p-box">
            <div class="p-header">
              <h4>{{ swiper.title }}</h4>
              <a class="link" @click="contentLink(swiper.href)">상세보기</a>
              <p>기간 : <span>{{ swiper.startDate }}</span> - <span>{{ swiper.endDate }}</span></p>
            </div>
            <div class="p-body">
              <p><span>{{ swiper.result }}</span>원 할인 달성</p>

              <div class="progress">
                <div class="progress-bar"></div>

                <div class="progress-text">
                  <span v-for="value in swiper.resultR">{{ value }}</span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

      </div>
    </div>
    <div class="step step34">
      <!-- 지난 할인 금액 -->
      <div class="step3">
        <div class="title">
          <h3>지난 할인 금액 보기</h3>
          <router-link to="/eventlast" class="link">지난 프로모션 보기</router-link>
        </div>

        <div class="month-check">
          <Select :options="options"/>
          <strong><span>15,000</span>원 할인 받았습니다.</strong>
        </div>
      </div>
      <!-- 현재 이용 한도 -->
      <div class="step4">
        <div class="title">
          <h3>현재 이용 한도</h3>
          <a class="link">한도 변경하기</a>
        </div>

        <ul class="limit-pc">
          <li>
            이용 한도
            <p><span>300,000</span>원</p>
          </li>
          <li>
            잔여 한도
            <p><span>120,000</span>원</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="step step5">
      <div class="title">
        <h3>홍길동 님을 위한 SKT 맞춤 프로모션</h3>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
// default
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue"

// plug in
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue"

// components
// import Img from "@/components/Img.vue";
import Select from '@/components/ui/Select.vue';

// styles
import "swiper/css";
import 'swiper/css/pagination';
import "./UserInfo.scss";

export default defineComponent({
  name : "UserInfo",
  components : { Swiper, SwiperSlide, Select, },
  data(){
    return {
      // swiperContents : [
      //   {
      //     index : 1,
      //     title : '한게임 포커-맞고 휴대폰 결제 이벤트이벤트이벤트이벤트이벤트이벤트이벤트이벤트',
      //     startDate : '2023.11.27',
      //     endDate : '2023.12.31',
      //     result : '30,000',
      //     resultR : ['0','10,000','30,000','50,000'],

      //     href : '/eventContent'
      //   },
      //   {
      //     index : 2,
      //     title : '디즈니+ 매달 2,000원 혜택 이벤트',
      //     startDate : '2023.11.01',
      //     endDate : '2023.12.31',
      //     result : '4,000',
      //     resultR : ['0','2,000','4,000','6,000'],

      //     href : '/eventContent'
      //   },
      //   {
      //     index : 2,
      //     title : '혜택 이벤트',
      //     startDate : '2023.11.01',
      //     endDate : '2023.12.31',
      //     result : '4,000',
      //     resultR : ['0','2,000','4,000','6,000'],

      //     href : '/eventContent'
      //   },
      //   {
      //     index : 2,
      //     title : '디즈니+ ',
      //     startDate : '2023.11.01',
      //     endDate : '2023.12.31',
      //     result : '4,000',
      //     resultR : ['0','2,000','4,000','6,000'],

      //     href : '/eventContent'
      //   },
      // ],

      swiperContents : [],

      options : ['2023년 10월','2023년 9월','2023년 8월','2023년 7월','2023년 6월','2023년 5월'],

      width : 74,
    }
  },

  setup : function(){
    let swiperCurrent = ref<number>(1)
    let swiperObj: any = ref(null)
    let curSwiper = ref<string>("first")
    let length = ref<number>(0)
    let windowWidth = ref(window.innerWidth)

    const swiperOpt = {
      speed: 800,
      observeParents: true,
      observeSlideChildren: true,
      resizeObserver: true,
      slidesPerView: 1
    }

    const handleResize = () => {
      windowWidth.value = window.innerWidth;
    };

    const contentLink = (url : string) => {
      if(windowWidth.value > 751){
        window.open(url, "_blank", 'width=500, height=700, left=50, top=100');
      }else{
        window.open(url, "_blank");
      }
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      swiperObj,
      swiperCurrent,
      swiperOpt,
      curSwiper,
      length,
      modules: [Pagination, Navigation],
      Select,
      windowWidth,
      contentLink,
    }
  },
});
</script>
