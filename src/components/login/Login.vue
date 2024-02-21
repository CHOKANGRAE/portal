<template>
  <article class="login_top">
    <div class="title">
      <a @click="inputPhone = !inputPhone" class="user">간편 로그인 ></a>
      <span @click="loginQ = !loginQ" @blur="loginQ = false" class="qna">?</span>
    </div>
    <!--
    각 인증 모달 화면은, 다음과 같이 확인할 수 있습니다.
    NAG 인증 : certiPhone=!certiPhone
    MT 인증 : inputPhone = !inputPhone
    -->
    
    <!-- 최대/할인 금액 -->
    <div class="step step1">
      <p>
        <span>2024.01</span>월 최대 할인 금액 : <span class="point">58,000</span>원
        <span @click="Tooltip = !Tooltip" class="qna qna-c">?</span>
      </p>
      <p class="tool-tip" v-if="Tooltip" @blur="Tooltip = false" tabindex="0">
        <span class="point2">2023</span>년 <span class="point2">12</span>월 현재 운영 중인 모든 이벤트에 참여할 시,&nbsp;
        <span class="point2 me">2024</span>년 <span class="point2">01</span>월 최대한으로 받을 수 있는 청구 할인 혜택입니다.
      </p>
      <p>
        <span>2023.12</span>월 할인 예상 금액 : <span class="point">?</span>원
      </p>

      <div class="progressL">
        <div class="progressL-bar"></div>

        <div class="progressL-text">
          <span class="a">0</span>
          <span class="c">58,000</span>
        </div>
      </div>
    </div>
  </article>
  <article class="login-visual">
    <h1>T 휴대폰 결제 멤버십</h1>
    <p>
      휴대폰 결제만 해도 혜택이 쏟아진다!
      <br />
      월 최대 1만 5천 원 할인 혜택을 받아 보세요
    </p>
    <div class="img_box">
      <Img pName="membership/p_img_1.png" mName="membership/m_img_1.png" />
    </div>
  </article>

  <!-- ===================== Modal ===================== -->
  <!-- NAG 인증 -->
  <Modal :isModal="certiPhone">
    <template v-slot:header>
      <h3>고객님의 휴대폰 번호</h3>
      <button @click="certiPhone = false" class="close"></button>
    </template>
    <template v-slot:body>
      <div class="phoneN">
        <span class="num">010-0000-0000</span>
        <p>(SKT의 네트워크 간편 인증을 통해 확인된 휴대폰 번호)</p>
      </div>

      <small class="temp">위 휴대폰번호로 간편 로그인합니다.</small>
    </template>
    <template v-slot:footer>
      <button type="button" class="certi" @click="certiGo()">간편로그인</button>
      <button type="button" @click="certiPhone = false">취소</button>
    </template>
  </Modal>

  <!-- MT 인증 -->
  <Modal :isModal="inputPhone" class="inputModal">
    <template v-slot:header>
      <button type="button" class="close" @click="inputPhone = false"></button>
    </template>
    <template v-slot:body>
      <dl class="listform">
        <dt>휴대전화번호</dt>
        <dd class="f-item3">
          <span class="form-item">
            <Select id="phone1" :options="options" />
          </span>
          <span class="form-item">
            <input type="number" v-model="mdn2" @input="handleInput1($event, 4)"/>
          </span>
          <span class="form-item">
            <input type="number" v-model="mdn3" @input="handleInput2($event, 4)"/>
          </span>
        </dd>
        <dt><label for="birthNo">생년월일 입력</label></dt>
        <dd class="f-item1">
          <span class="form-input">
            <input type="number" ref="birthN" v-model="birth" placeholder="생년월일 8자리 예) 19971128" @input="handleInput3($event, 8)"/>
          </span>
          <button type="button" class="form-btn" @click="certiNum()">인증번호 받기</button>
        </dd>
        <dt class="sb">
          <label for="authNum">인증번호 입력</label>
          <p id="authNumTimeText">유효시간 <span v-html="TimerStr"></span></p>
        </dt>
        <dd class="f-item1">
          <span class="form-input">
            <input type="number" v-model="authNum" placeholder="인증번호 6자리" @input="handleInput4($event, 6)"/>
          </span>
        </dd>
      </dl>
      <span class="temp">* 위 휴대폰번호로 간편 로그인합니다.</span>
    </template>
    <template v-slot:footer>
      <button type="button" class="certi" @click="certiGo()">인증</button>
      <button type="button" @click="inputPhone = false">취소</button>
    </template>
  </Modal>

  <!-- 간편 로그인 설명 -->
  <Modal :isModal="loginQ" class="loginModal">
    <template v-slot:header>
      <h3>간편 로그인이란?</h3>
      <button class="close" @click="loginQ = false"></button>
    </template>
    <template v-slot:body>
      <p>별도의 회원 가입 및 추가 정보제공 없이 SKT 휴대폰 가입 정보를 활용하여 편리하게 프로모션에 참여할 수 있도록 합니다.</p>
    </template>
  </Modal>

  <!-- ===================== Alert ===================== -->
  <Alert :isAlert="alert">
    <template v-slot:body>
      <p v-html="alertText"></p>
    </template>
    <template v-slot:footer>
      <button type="button" @click="alert = false">확인</button>
    </template>
  </Alert>

  <Alert :isAlert="alert2">
    <template v-slot:body>
      <p v-html="alertText2"></p>
    </template>
    <template v-slot:footer>
      <button type="button" @click="timerStart()">확인</button>
    </template>
  </Alert>
</template>

<script lang="ts">
// default
import { defineComponent, ref } from "vue";

// plug in

// components
import Img from "@/components/Img.vue";
import Modal from "@/components/ui/Modal.vue";
import Alert from "@/components/ui/Alert.vue";
import Select from '@/components/ui/Select.vue';

// styles
import "./Login.scss";
import "@/components/ui/Input.scss";

export default defineComponent({
  name: "Login",
  components: { Img, Modal, Alert, Select },
  props: {},
  data() {
    return {
      certiPhone: false,
      inputPhone: false,
      loginQ: false,
      invalidOn:false,
      Tooltip : false,

      alert : false,
      alert2 : false,

      options : ['010', '011', '016', '017', '018', '019'],

      mdn2 : null as any | null,
      mdn3 : null as any | null,
      birth : null as any | null,
      authNum : null as any | null,

      alertText : '',
      alertText2 : '',

      // timer
      Timer : null,
      TimeCounter : 180,
      TimerStr : '03:00',
    };
  },

  // Input Component로 제어해보려고 했는데, v-model 값 제어가 안 되는 문제로 다 따로 만들었음
  // 통일해서 이벤트 작동시키면 input 값 한 번에 바뀌는 이슈
  methods: {
    handleInput1(event: InputEvent, maxLen : number) {
      const inputStr = this.mdn2.toString();
      if (inputStr.length > maxLen) { this.mdn2 = parseInt(inputStr.slice(0, maxLen))}
    },
    handleInput2(event: InputEvent, maxLen : number) {
      const inputStr = this.mdn3.toString();
      if (inputStr.length > maxLen) { this.mdn3 = parseInt(inputStr.slice(0, maxLen))}
    },
    handleInput3(event: InputEvent, maxLen : number) {
      const inputStr = this.birth.toString();
      if (inputStr.length > maxLen) { this.birth = parseInt(inputStr.slice(0, maxLen))}
    },
    handleInput4(event: InputEvent, maxLen : number) {
      const inputStr = this.authNum.toString();
      if (inputStr.length > maxLen) { this.authNum = parseInt(inputStr.slice(0, maxLen))}
    },

    // 인증번호 받기
    certiNum(){
      const dateRegex = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;

      if(dateRegex.test(this.birth)){
        this.alertText2 = "입력하신 번호의 단말기로 인증번호 6자리가 발송되었습니다. 확인 후 [인증번호 입력]란에 넣어주세요."
        this.alert2 = true;
      }else{
        this.alertText = "생년월일이 잘못되었습니다.<br />다시 확인해 주시기 바랍니다."
        this.alert = true;
      }
    },

    // 휴대전화번호를 입력하지 않으셨습니다.<br />입력 후 다시 진행해주세요.
    // 생년월일을 입력하지 않으셨습니다.<br />입력 후 다시 진행해주세요.
    // 생년월일이 잘못되었습니다.<br />다시 확인해 주시기 바랍니다.
    // 입력하신 정보가 유효하지 않습니다.<br />다시 확인 후 시도해주십시오.
    // 입력하신 번호의 단말기로 인증번호 6자리가 발송되었습니다. 확인 후 [인증번호 입력]란에 넣어주세요.
    // 인증번호를 입력하지 않으셨습니다.<br />입력 후 다시 진행해주세요.

    // timer
    timerStart(){
      //alert bye
      this.alert2 = false;

      // 1초에 한번씩 start 호출
      this.TimeCounter = 180;
      var interval = setInterval(() => {
        this.TimeCounter--; //1초씩 감소
        this.TimerStr = this.prettyTime();
        if (this.TimeCounter <= 0) this.timerStop(interval);
      }, 1000);
      return interval;
    },

    timerStop(Timer : any) {
      clearInterval(Timer);
      this.TimeCounter = 0;
    },

    prettyTime() {
      // 시간 형식으로 변환 리턴
      let time = this.TimeCounter / 60;
      let minutes = parseInt(time.toString());
      let secondes = Math.round((time - minutes) * 60);
      return (
        minutes.toString().padStart(2, "0") +
        ":" +
        secondes.toString().padStart(2, "0")
      );
    },


    // 인증 완료
    certiGo(){
      window.location.href = './user';
    }
  },
});
</script>
