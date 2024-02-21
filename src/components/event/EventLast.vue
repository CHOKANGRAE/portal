<template>
  <div class="event_last">
    <nav class="tabs">
      <button type="button" class="active">지난 이벤트</button>
    </nav>

    <div class="list_container">
      <a @click="eventPopup(item.prmViewUrl)" v-for="(item, index) in promotion?.prmList" :key="index" class="item">
        <Img :pName="item.ptileImgUrl" :mName="item.mtileImgUrl" :alt="item.prmTitle"/>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
// default
import { defineComponent, onMounted, ref } from "vue"

// plugins
import {Promotion, PromotionStatType} from "@/apps/common/interface/promotion"
import {getPromotionList, eventPopup} from "@/apps/common/funs";

// component
import Img from "@/components/Img2.vue"

// styles
import "./list.scss"
import "./EventLast.scss"
import "./eventTabs.scss"

export default defineComponent({
  // component definition
});

const promotion = ref<Promotion | null>(null)
const prmStat = ref<PromotionStatType>('ING')
const rowsPerPage = ref<number>(4)
const currentPage = ref<number>(1)

const read = async (idx: number = 1) => {
  const {data} = await getPromotionList(prmStat, currentPage, rowsPerPage);
  promotion.value = (data?.resultCode === '0') ? data : null
}

onMounted(async () => {
  await read()
})
</script>