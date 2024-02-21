<template>
  <article class="ec">
    <div class="ec-img">
      <img src="@/assets/imgs/event/event_c_1.jpg" />
    </div>
    <div class="ec-faq">
      <p class="title">이벤트&nbsp;<span class="point">FAQ</span></p>

      <strong>질문1) 청구 할인 혜택은 언제 적용되나요?</strong>
      <p>
        답변: 12월에 종료되는 이벤트라서 2024년 1월 5일에 발행되는 요금안내서에
        청구 할인 금액이 반영됩니다.
      </p>

      <strong
        >질문2) 응모 전에 결제를 해버렸는데, 응모를 나중에 해도 청구 할인 혜택을
        받을 수 있나요?</strong
      >
      <p>
        답변: 이벤트 기간 안에 응모와 결제를 순서에 상관 없이 완료해 주시면
        혜택을 받으실 수 있습니다.
      </p>

      <strong
        >질문3) (PlayStation 고객) 휴대폰 결제로 게임을 구매해야만 청구 할인
        대상인가요? 지갑 충전은 제외되나요?</strong
      >
      <p>
        답변: 고객님께서 휴대폰 결제로 게임을 구매하시든, 지갑 충전을 하시든 1만
        원 이상을 사용하셨다면 청구 할인 대상입니다.
      </p>
    </div>
  </article>

  <!-- 참여여부 / 클래스 on으로 제어 -->
  <aside class="ec-footer">
    <button type="button" class="part on" @click="certiPhone = !certiPhone">
      참여하기
    </button>
    <button type="button" class="join on">휴대폰결제멤버쉽가입</button>
    <button type="button" class="disabled">종료되었습니다.</button>
    <button type="button" class="disabled">2023.12.24 참여 가능합니다.</button>
  </aside>

  <!-- ===================== Modal ===================== -->
  <!-- NAG 인증 -->
  <Modal :isModal="certiPhone" class="certiModal">
    <template v-slot:header>
      <h3>고객님의 휴대폰 번호</h3>
      <button class="close" @click="certiPhone = false"></button>
    </template>
    <template v-slot:body>
      <div class="phoneN">
        <span class="num">010-0000-0000</span>
        <p>(SKT의 네트워크 간편 인증을 통해 확인된 휴대폰 번호)</p>
      </div>

      <div class="checking">
        <h3>정보 이용 동의</h3>
        <ul>
          <li>
            <Checkbox id="id" name="name" label="개인정보 수집 및 이용 동의" required="required"/>
            <button type="button" @click="agree2 = true">약관보기 ></button>
          </li>
          <li>
            <Checkbox id="id2" name="name2" label="제 3자 마케팅 정보 제공 동의" required="required"/>
            <button type="button" @click="agree3 = true">약관보기 ></button>
          </li>
          <li>
            <Checkbox id="id3" name="name3" label="만 19세 이상입니다."/>
          </li>
        </ul>
      </div>

      <small class="temp">위 휴대폰번호로 간편 로그인합니다.</small>
    </template>
    <template v-slot:footer>
      <button type="button" @click="mtOn">다른 번호로<br />참여 완료하기</button>
      <button type="button" class="certi" @click="alert = true">위 번호로<br />참여 완료하기</button>
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
            <Select :options="options" />
          </span>
          <span class="form-item">
            <input type="number" v-model="mdn2" @input="handleInput1($event, 4)"/>
          </span>
          <span class="form-item">
            <input type="number" v-model="mdn3" @input="handleInput2($event, 4)"/>
          </span>
        </dd>
        <dt><label for="socialNo">생년월일 입력</label></dt>
        <dd class="f-item1">
          <span class="form-input">
            <input type="number" v-model="birth" placeholder="생년월일 8자리 예) 19971128" @input="handleInput3($event, 8)"/>
          </span>
          <button type="button" class="form-btn" @click="certiNum">인증번호 받기</button>
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
      <div class="checking">
        <h3>정보 이용 동의</h3>
        <ul>
          <li>
            <Checkbox id="id" name="name" label="휴대폰 결제 이용 동의" required="required"/>
            <button type="button" @click="agree1 = true">약관보기 ></button>
          </li>
          <li>
            <Checkbox id="id2" name="name2" label="개인정보 수집 및 이용 동의" required="required"/>
            <button type="button" @click="agree2 = true">약관보기 ></button>
          </li>
          <li>
            <Checkbox id="id3" name="name3" label="만 19세 이상입니다."/>
          </li>
        </ul>
      </div>
      <span class="temp">* 위 휴대폰번호로 간편 로그인합니다.</span>
    </template>
    <template v-slot:footer>
      <button type="button" @click="inputPhone = false">닫기</button>
      <button type="button" class="certi" @click="alert2 = true">인증 확인</button>
    </template>
  </Modal>

  <!-- 이용동의만, 231218 -->
  <Modal :isModal="termsModal" class="termsModal">
    <template v-slot:header>
      <h3>정보 이용 동의</h3>
      <button type="button" class="close" @click="inputPhone = false"></button>
    </template>
    <template v-slot:body>
      <div class="checking">
        <ul>
          <li>
            <Checkbox id="id" name="name" label="휴대폰 결제 이용 동의" required="required"/>
            <button type="button" @click="agree1 = true">약관보기 ></button>
          </li>
          <li>
            <Checkbox id="id2" name="name2" label="개인정보 수집 및 이용 동의" required="required"/>
            <button type="button" @click="agree2 = true">약관보기 ></button>
          </li>
          <li>
            <Checkbox id="id3" name="name3" label="만 19세 이상입니다."/>
          </li>
        </ul>
      </div>
    </template>
    <template v-slot:footer>
      <button type="button" @click="inputPhone = false">닫기</button>
      <button type="button" class="certi" @click="alert2 = true">인증 확인</button>
    </template>
  </Modal>

  <!-- 약관보기 -->
  <!-- 휴대폰 결제 이용 동의 -->
  <Modal :isModal="agree1" class="agreeModal">
    <template v-slot:header>
      <h4>SKT 통신과금서비스 이용약관</h4>
    </template>
    <template v-slot:body>
      <div class="terms">
        <p>제1조 (목적)</p>
        <p>본 약관은 통신과금서비스를 제공하는 에스케이텔레콤 주식회사(이하 '회사'라 합니다)와 통신과금서비스 이용자(이하 '이용자'라 합니다) 간에 통신과금서비스에 관한 회사와 이용자의 권리와 의무, 기타 제반 사항을 정함을 목적으로 합니다.</p>
      </div>
    </template>
    <template v-slot:footer>
      <button type="button" @click="agree1 = false">확인</button>
    </template>
  </Modal>

  <!-- 개인정보 수집 및 이용 동의 -->
  <Modal :isModal="agree2" class="agreeModal">
    <template v-slot:header>
      <h4>개인정보 수집 및 활용 동의서</h4>
    </template>
    <template v-slot:body>
      <div class="terms">
        <p>제1조 (목적)</p>
        <p>본 약관은 통신과금서비스를 제공하는 에스케이텔레콤 주식회사(이하 '회사'라 합니다)와 통신과금서비스 이용자(이하 '이용자'라 합니다) 간에 통신과금서비스에 관한 회사와 이용자의 권리와 의무, 기타 제반 사항을 정함을 목적으로 합니다.</p>
      </div>
    </template>
    <template v-slot:footer>
      <button type="button" @click="agree2 = false">확인</button>
    </template>
  </Modal>

  <!-- 제 3자 마케팅 정보 제공 동의 -->
  <Modal :isModal="agree3" class="agreeModal">
    <template v-slot:header>
      <h4>제 3자 마케팅 정보 제공 동의</h4>
    </template>
    <template v-slot:body>
      <div class="terms">
        <p>제1조 (목적)</p>
        <p>본 약관은 통신과금서비스를 제공하는 에스케이텔레콤 주식회사(이하 '회사'라 합니다)와 통신과금서비스 이용자(이하 '이용자'라 합니다) 간에 통신과금서비스에 관한 회사와 이용자의 권리와 의무, 기타 제반 사항을 정함을 목적으로 합니다.</p>
      </div>
    </template>
    <template v-slot:footer>
      <button type="button" @click="agree3 = false">확인</button>
    </template>
  </Modal>

  <!-- ===================== Alert ===================== -->
  <!-- 예시로 각 Modal 인증에 걸려있습니다. -->
  <Alert :isAlert="alert">
    <template v-slot:body>
      <p>해당 이벤트에 참여가 가능합니다.<br /> 참여하시겠습니까?</p>
    </template>
    <template v-slot:footer>
      <button type="button" @click="alert=false">취소</button>
      <button type="button" @click="alert=false">확인</button>
    </template>
  </Alert>

  <Alert :isAlert="alert2">
    <template v-slot:body>
      <p>이벤트에 참여하셨습니다.</p>
    </template>
    <template v-slot:footer>
      <button type="button" @click="alert2=false">닫기</button>
    </template>
  </Alert>

  <Alert :isAlert="alert3">
    <template v-slot:body>
      <p v-html="alertText3"></p>
    </template>
    <template v-slot:footer>
      <button type="button" @click="timerStart()">확인</button>
    </template>
  </Alert>
</template>
<script lang="ts">
// default
import { defineComponent } from "vue";

// plugins

// component
import Modal from "@/components/ui/Modal.vue";
import Alert from "@/components/ui/Alert.vue";
import Select from "@/components/ui/Select.vue";
import Checkbox from "@/components/ui/Checkbox.vue";

// styles
import "./EventContent.scss";
import "@/components/ui/Input.scss";

export default defineComponent({
  name: "EventContent",
  components: { Alert, Modal, Select, Checkbox },
  props: {},
  data() {
    return {
      // Alert
      alert : false,
      alert2 : false,
      alert3 : false,
      alertText3 : '',

      // Modal
      certiPhone: false,
      inputPhone: false,
      invalidOn: false,
      termsModal : false,

      agree1: false,
      agree2: false,
      agree3: false,

      options: ["010", "011", "016", "017", "018", "019"],

      mdn2 : null as any | null,
      mdn3 : null as any | null,
      birth : null as any | null,
      authNum : null as any | null,

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
    
    mtOn(){
      this.certiPhone = false;
      this.inputPhone = true;
    },

    // 인증번호 받기
    certiNum(){
      const dateRegex = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;

      if(dateRegex.test(this.birth)){
        this.alertText3 = "입력하신 번호의 단말기로 인증번호 6자리가 발송되었습니다.<br /> 확인 후 [인증번호 입력]란에 넣어주세요."
        this.alert3 = true;
      }
    },

    // timer
    timerStart(){
      //alert bye
      this.alert3 = false;

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
  },
});
</script>
