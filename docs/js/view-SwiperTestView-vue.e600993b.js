"use strict";
(globalThis["webpackChunkT"] = globalThis["webpackChunkT"] || []).push([[805],{

/***/ 5455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SwiperTestView)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3577);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/SwiperTestView.vue?vue&type=template&id=32e60864&scoped=true&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_swiper_slide = (0,runtime_core_esm_bundler/* resolveComponent */.up)("swiper-slide");
    const _component_swiper = (0,runtime_core_esm_bundler/* resolveComponent */.up)("swiper");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("article", null, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_swiper, {
            onSwiper: _ctx.firstSwiper,
            class: "fSwiper"
        }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(5, (index) => {
                    return (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_swiper_slide, { key: index }, {
                        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                            (0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(index), 1)
                        ]),
                        _: 2
                    }, 1024);
                }), 64))
            ]),
            _: 1
        }, 8, ["onSwiper"])
    ]));
}

// EXTERNAL MODULE: ./node_modules/swiper/vue/swiper-vue.js + 11 modules
var swiper_vue = __webpack_require__(3883);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/SwiperTestView.vue?vue&type=script&lang=ts



/* harmony default export */ const SwiperTestViewvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: "SwiperTest",
    components: { Swiper: swiper_vue/* Swiper */.tq, SwiperSlide: swiper_vue/* SwiperSlide */.o5 },
    data() {
        return {};
    },
    setup() {
        let fSwiper = null;
        const firstSwiper = (swiper) => {
            console.log(typeof fSwiper);
            fSwiper = swiper;
        };
        (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
            fSwiper.slideTo(3, 1000);
        });
        (0,runtime_core_esm_bundler/* onBeforeUnmount */.Jd)(() => {
            fSwiper.destroy();
        });
        return {
            firstSwiper
        };
    },
    mounted() {
        //console.log(document.querySelector(".fSwiper"))
        // const swiperObj =  new SwiperSlide()
        // console.log(this.$refs.fSwiper)
        // this.swiper.slideTo(3, 1000, false)
    },
    computed: {
        swiper() {
            // return this.$refs.mySwiperRef.$swiper
        }
    }
}));

;// CONCATENATED MODULE: ./src/views/SwiperTestView.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/SwiperTestView.vue?vue&type=style&index=0&id=32e60864&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/SwiperTestView.vue?vue&type=style&index=0&id=32e60864&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/views/SwiperTestView.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SwiperTestViewvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-32e60864"]])

/* harmony default export */ const SwiperTestView = (__exports__);

/***/ })

}]);