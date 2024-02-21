"use strict";
(globalThis["webpackChunkT"] = globalThis["webpackChunkT"] || []).push([[977],{

/***/ 7638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Img2)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Img2.vue?vue&type=template&id=75228bf3&ts=true

const _hoisted_1 = ["srcset", "media"];
const _hoisted_2 = ["srcset", "media"];
const _hoisted_3 = ["src", "alt"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("picture", null, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("source", {
            srcset: _ctx.mName,
            media: `all and (max-width: ${_ctx.mobile}px)`
        }, null, 8, _hoisted_1),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("source", {
            srcset: _ctx.pName,
            media: `all and (min-width: ${_ctx.mobile + 1}px)`
        }, null, 8, _hoisted_2),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
            src: _ctx.pName,
            alt: _ctx.alt
        }, null, 8, _hoisted_3)
    ]));
}

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Img2.vue?vue&type=script&lang=ts

/* harmony default export */ const Img2vue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    props: {
        //pc img
        pName: {
            type: String,
            default: ""
        },
        //mo img
        mName: {
            type: String,
            default: ""
        },
        //alt
        alt: {
            type: String,
            default: "img"
        }
    },
    data() {
        return { mobile: Number(this.$mobile) };
    }
}));

;// CONCATENATED MODULE: ./src/components/Img2.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/components/Img2.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Img2vue_type_script_lang_ts, [['render',render]])

/* harmony default export */ const Img2 = (__exports__);

/***/ }),

/***/ 4659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomeView)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=template&id=07948a3b&ts=true

const _hoisted_1 = { class: "home_content" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_HomeSwiper = (0,runtime_core_esm_bundler/* resolveComponent */.up)("HomeSwiper");
    const _component_HomeAbout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("HomeAbout");
    const _component_HomeDownload = (0,runtime_core_esm_bundler/* resolveComponent */.up)("HomeDownload");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("article", _hoisted_1, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_HomeSwiper),
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_HomeAbout),
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_HomeDownload)
    ]));
}

;// CONCATENATED MODULE: ./src/views/HomeView.vue?vue&type=template&id=07948a3b&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3577);
// EXTERNAL MODULE: ./src/assets/imgs/home/icon_pause.png
var icon_pause = __webpack_require__(9962);
// EXTERNAL MODULE: ./src/assets/imgs/home/icon_play.png
var icon_play = __webpack_require__(9690);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/home/HomeSwiper.vue?vue&type=template&id=68378061&ts=true



const HomeSwipervue_type_template_id_68378061_ts_true_hoisted_1 = { class: "home_swiper_container" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "controller" };
const _hoisted_4 = { class: "num" };
const _hoisted_5 = { class: "cur" };
const _hoisted_6 = { class: "total" };
const _hoisted_7 = {
    key: 0,
    src: icon_pause,
    alt: "pause"
};
const _hoisted_8 = {
    key: 1,
    src: icon_play,
    alt: "play"
};
function HomeSwipervue_type_template_id_68378061_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Img2 = (0,runtime_core_esm_bundler/* resolveComponent */.up)("Img2");
    const _component_swiper_slide = (0,runtime_core_esm_bundler/* resolveComponent */.up)("swiper-slide");
    const _component_swiper = (0,runtime_core_esm_bundler/* resolveComponent */.up)("swiper");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("article", HomeSwipervue_type_template_id_68378061_ts_true_hoisted_1, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_swiper, {
            onSwiper: _ctx.onSwiper,
            onSlideChange: _ctx.onSlideChange,
            options: _ctx.swiperOpt,
            modules: _ctx.modules,
            followFinger: false,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            class: "home_swiper"
        }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.swiperImages, (swiper, index) => {
                    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_swiper_slide, { key: index }, {
                        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
                                onClick: ($event) => (_ctx.eventPopup(swiper.prmViewUrl)),
                                target: "_blank"
                            }, [
                                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_Img2, {
                                    pName: swiper.pswipeImgUrl,
                                    mName: swiper.mswipeImgUrl,
                                    alt: swiper.prmTitle
                                }, null, 8, ["pName", "mName", "alt"])
                            ], 8, _hoisted_2)
                        ]),
                        _: 2
                    }, 1024));
                }), 128))
            ]),
            _: 1
        }, 8, ["onSwiper", "onSlideChange", "options", "modules"]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                    type: "button",
                    class: "prev_btn",
                    onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.prev()))
                }),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("span", _hoisted_5, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.swiperCurrent), 1),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("span", _hoisted_6, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.length), 1),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                    type: "button",
                    class: "next_btn",
                    onClick: _cache[1] || (_cache[1] = ($event) => (_ctx.next()))
                })
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                type: "button",
                onClick: _cache[2] || (_cache[2] = ($event) => (_ctx.control()))
            }, [
                (_ctx.autoplayState)
                    ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("img", _hoisted_7))
                    : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("img", _hoisted_8))
            ])
        ])
    ]));
}

;// CONCATENATED MODULE: ./src/components/home/HomeSwiper.vue?vue&type=template&id=68378061&ts=true

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(7582);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(2262);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 89 modules
var swiper_esm = __webpack_require__(6523);
// EXTERNAL MODULE: ./node_modules/swiper/vue/swiper-vue.js + 11 modules
var swiper_vue = __webpack_require__(3883);
// EXTERNAL MODULE: ./src/components/Img2.vue + 3 modules
var Img2 = __webpack_require__(7638);
// EXTERNAL MODULE: ./src/apps/common/funs.ts + 1 modules
var funs = __webpack_require__(1195);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/home/HomeSwiper.vue?vue&type=script&lang=ts

//default

//plug in


//data
//components

//styles




/* harmony default export */ const HomeSwipervue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: "HomeSwiper",
    components: { Swiper: swiper_vue/* Swiper */.tq, SwiperSlide: swiper_vue/* SwiperSlide */.o5, Img2: Img2/* default */.Z },
    data() {
        return {
            mobile: Number(this.$mobile)
        };
    },
    setup: function () {
        let swiperCurrent = (0,reactivity_esm_bundler/* ref */.iH)(1);
        let swiperObj = (0,reactivity_esm_bundler/* ref */.iH)(null);
        let curSwiper = (0,reactivity_esm_bundler/* ref */.iH)("first");
        let autoplayState = (0,reactivity_esm_bundler/* ref */.iH)(true);
        let length = (0,reactivity_esm_bundler/* ref */.iH)(0);
        let swiperImages = (0,reactivity_esm_bundler/* ref */.iH)([]);
        const prmStat = (0,reactivity_esm_bundler/* ref */.iH)("ING");
        const rowsPerPage = (0,reactivity_esm_bundler/* ref */.iH)(1);
        const currentPage = (0,reactivity_esm_bundler/* ref */.iH)(100);
        // let swiperImages = ref();
        const swiperOpt = {
            speed: 800,
            observeParents: true,
            observeSlideChildren: true,
            resizeObserver: true,
            slidesPerView: 1
        };
        const getList = () => (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function* () {
            const { data } = yield (0,funs/* getPromotionList */.MW)(prmStat, rowsPerPage, currentPage);
            length.value = data === null || data === void 0 ? void 0 : data.totalCount;
            swiperImages.value = data === null || data === void 0 ? void 0 : data.prmList;
        });
        const onSwiper = (swiper) => {
            swiperObj = swiper;
        };
        const onSlideChange = (swiper) => {
            swiperCurrent.value = (swiper.realIndex || 0) + 1;
            // console.log(swiperObj.autoplay)
        };
        const prev = () => {
            swiperObj.slidePrev();
        };
        const next = () => {
            swiperObj.slideNext();
        };
        const control = () => {
            if (autoplayState.value) {
                swiperObj.autoplay.stop();
                autoplayState.value = false;
            }
            else {
                swiperObj.autoplay.start();
                autoplayState.value = true;
            }
        };
        (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
            init();
        });
        const init = () => {
            getList();
        };
        //use
        return {
            swiperObj,
            swiperCurrent,
            onSlideChange,
            onSwiper,
            prev,
            next,
            control,
            autoplayState,
            swiperOpt,
            curSwiper,
            length,
            modules: [swiper_esm/* Autoplay */.pt],
            swiperImages,
            eventPopup: funs/* eventPopup */.ek
        };
    }
}));

;// CONCATENATED MODULE: ./src/components/home/HomeSwiper.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/components/home/HomeSwiper.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HomeSwipervue_type_script_lang_ts, [['render',HomeSwipervue_type_template_id_68378061_ts_true_render]])

/* harmony default export */ const HomeSwiper = (__exports__);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(2201);
// EXTERNAL MODULE: ./src/components/Img.vue + 4 modules
var Img = __webpack_require__(8597);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/home/HomeAbout.vue?vue&type=script&setup=true&lang=ts


const HomeAboutvue_type_script_setup_true_lang_ts_hoisted_1 = { class: "about_event" };
const HomeAboutvue_type_script_setup_true_lang_ts_hoisted_2 = { class: "inner_wrap" };
const HomeAboutvue_type_script_setup_true_lang_ts_hoisted_3 = { class: "text_box" };
const HomeAboutvue_type_script_setup_true_lang_ts_hoisted_4 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("h2", null, [
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("strong", null, "T 휴대폰 결제"),
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("span", null, "란?")
], -1);
const HomeAboutvue_type_script_setup_true_lang_ts_hoisted_5 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Google Play, App Store 등 다양한 마켓플레이스에서 "),
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("br"),
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" SKT 휴대폰으로 결제하고 결제 금액은 "),
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("br", { class: "/" }),
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" 다음 달 휴대폰 요금에 합산되어 고객님께 청구되는 방식 ")
], -1);
const HomeAboutvue_type_script_setup_true_lang_ts_hoisted_6 = { class: "img_box" };



/* harmony default export */ const HomeAboutvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    __name: 'HomeAbout',
    setup(__props) {
        const router = (0,vue_router/* useRouter */.tv)();
        const goUse = () => {
            router.push("/use");
        };
        return (_ctx, _cache) => {
            return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("article", HomeAboutvue_type_script_setup_true_lang_ts_hoisted_1, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", HomeAboutvue_type_script_setup_true_lang_ts_hoisted_2, [
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", HomeAboutvue_type_script_setup_true_lang_ts_hoisted_3, [
                        HomeAboutvue_type_script_setup_true_lang_ts_hoisted_4,
                        HomeAboutvue_type_script_setup_true_lang_ts_hoisted_5,
                        (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                            type: "button",
                            onClick: _cache[0] || (_cache[0] = ($event) => (goUse()))
                        }, "자세히 알아보기")
                    ]),
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", HomeAboutvue_type_script_setup_true_lang_ts_hoisted_6, [
                        (0,runtime_core_esm_bundler/* createVNode */.Wm)(Img/* default */.Z, {
                            pName: "home/p_main_visual1.png",
                            mName: "home/m_main_visual1.png"
                        })
                    ])
                ])
            ]));
        };
    }
}));

;// CONCATENATED MODULE: ./src/components/home/HomeAbout.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./src/components/home/HomeAbout.vue



const HomeAbout_exports_ = HomeAboutvue_type_script_setup_true_lang_ts;

/* harmony default export */ const HomeAbout = (HomeAbout_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/home/HomeDownload.vue?vue&type=template&id=633b17e8&ts=true

const HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_1 = { class: "app_download" };
const HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_2 = { class: "inner_wrap" };
const HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_3 = { class: "text_box" };
const HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_4 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("h2", null, [
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" 언제 어디서나 간편하게 "),
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("br"),
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("strong", null, "PASS by SKT")
], -1);
const HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_5 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" 휴대폰 결제 멤버십 가입과 본인 확인을 편리하게 "),
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("br"),
    /*#__PURE__*/ (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" 안전하고 간편한 PASS 인증서! ")
], -1);
const HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_6 = { class: "btn_box" };
const HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_7 = ["href"];
const HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_8 = ["href"];
const _hoisted_9 = { class: "img_box" };
function HomeDownloadvue_type_template_id_633b17e8_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Img = (0,runtime_core_esm_bundler/* resolveComponent */.up)("Img");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("article", HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_1, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_2, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_3, [
                HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_4,
                HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_5,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_6, [
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
                        href: _ctx.androidLink,
                        class: "android"
                    }, "Google play", 8, HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_7),
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
                        href: _ctx.appLink,
                        class: "apple"
                    }, "App Store", 8, HomeDownloadvue_type_template_id_633b17e8_ts_true_hoisted_8)
                ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_Img, {
                    pName: "home/p_main_visual2.png",
                    mName: "home/m_main_visual2.png"
                })
            ])
        ])
    ]));
}

;// CONCATENATED MODULE: ./src/components/home/HomeDownload.vue?vue&type=template&id=633b17e8&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/home/HomeDownload.vue?vue&type=script&lang=ts



/* harmony default export */ const HomeDownloadvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: "HomeDownload",
    components: { Img: Img/* default */.Z },
    data() {
        return {
            androidLink: "https://play.google.com/store/apps/details?id=com.sktelecom.tauth",
            appLink: "https://apps.apple.com/kr/app/pass-by-skt/id1141258007"
        };
    }
}));

;// CONCATENATED MODULE: ./src/components/home/HomeDownload.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/home/HomeDownload.vue




;
const HomeDownload_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HomeDownloadvue_type_script_lang_ts, [['render',HomeDownloadvue_type_template_id_633b17e8_ts_true_render]])

/* harmony default export */ const HomeDownload = (HomeDownload_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=ts





/* harmony default export */ const HomeViewvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: "Home",
    components: { HomeSwiper: HomeSwiper, HomeAbout: HomeAbout, HomeDownload: HomeDownload }
}));

;// CONCATENATED MODULE: ./src/views/HomeView.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/HomeView.vue




;
const HomeView_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HomeViewvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ const HomeView = (HomeView_exports_);

/***/ })

}]);