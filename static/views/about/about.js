const aboutComponent = Vue.component("about-component", {
  data() {
    return {
      isHidden: true,
    };
  },
  // created() {
  //   setTimeout(() => {
  //     this.isHidden = false;
  //   }, overlayTime);
  // },
  computed: {
    isMobile() {
      return breakpoint.mobile;
    },
  },
  methods: {
    onImageLoaded() {
      // console.log('圖片載入完成');
      this.isHidden = false;
    },
  },
  template: `
  <v-sheet color="downloadBg" class="about-component" :class="{hidden: isHidden}" v-image-loaded="onImageLoaded">
    <!-- h5 -->
    <template v-if="isMobile">
      <v-sheet color="transparent" width="100%" class="relative d-flex justify-center">
        <img class="contain" width="100%" src="./static/img/about/h5/banner_01.png">
        <v-sheet
          color="transparent"
          class="absolute d-flex flex-column align-center px-2 text-center"
          width="100%"
          height="100%"
        >
          <div class="text-28" style="margin-top: 7%">
            <span class="titleText--text">{{$t("about.str1_1")}}</span
            ><span class="primary--text">{{$t("about.str1_2")}}</span>
          </div>
          <div class="titleText--text text-12">
            {{$t("about.str2")}}
          </div>
        </v-sheet>
      </v-sheet>
      <v-sheet width="100%" class="relative d-flex justify-center">
        <img class="absolute" width="100%" height="100%" cover src="./static/img/about/h5/shu-bg.png">
        <v-sheet
          color="transparent"
          class="d-flex flex-column align-center"
          width="100%"
          height="100%"
          style="z-index: 1"
        >
          <div class="text-28 titleText--text" style="margin-top: 7%">
            {{$t("about.str3")}}
          </div>
          <div class="titleText--text mt-2 text-12" style="padding: 0 10%">
            {{$t("about.str4")}}
          </div>
          <v-img class="mt-n6" max-width="50%" min-width="300px" src="./static/img/about/h5/shu.png"></v-img>
        </v-sheet>
      </v-sheet>
      <v-sheet
        color="downloadBg"
        width="100%"
        height="320px"
        class="d-flex justify-center"
      >
        <v-sheet
          color="transparent"
          class="d-flex flex-column align-center justify-center"
          width="100%"
          height="100%"
        >
          <div class="text-28">
            <span class="primary--text">
              {{$t("about.str5")}}
            </span>
          </div>
          <div class="contentText--text text-14 px-2 text-center">
            <div>{{$t("about.str6")}}</div>
          </div>
          <v-sheet
            color="transparent"
            width="100%"
            height="50%"
            max-width="400"
            class="d-flex justify-space-around mt-4 px-2"
          >
            <v-sheet
              color="#22272d"
              class="d-flex rounded-lg"
              width="32%"
              height="100%"
            >
              <v-sheet
                width="100%"
                height="100%"
                color="transparent"
                class="d-flex flex-column align-center"
                style="padding: 25% 0"
              >
                <div class="primary--text text-24">
                  {{$t("about.str7")}}
                </div>
                <div class="titleText--text text-12 mt-auto">
                  {{$t("about.str8")}}
                </div>
              </v-sheet>
            </v-sheet>
            <v-sheet color="#22272d" class="d-flex rounded-lg" width="32%">
              <v-sheet
                width="100%"
                height="100%"
                color="transparent"
                class="d-flex flex-column align-center"
                style="padding: 15% 0 25%"
              >
                <div
                  class="primary--text text-24 d-flex flex-column align-center"
                  style="line-height: 1"
                >
                  <div>50,000</div>
                  <div style="height: 15px; margin-top: 4px">'</div>
                  <div>50,000</div>
                </div>
                <div class="titleText--text text-12 mt-auto">
                  {{$t("about.str9")}}
                </div>
              </v-sheet>
            </v-sheet>
            <v-sheet color="#22272d" class="d-flex rounded-lg" width="32%">
              <v-sheet
                width="100%"
                height="100%"
                color="transparent"
                class="d-flex flex-column align-center"
                style="padding: 25% 0"
              >
                <div class="primary--text text-24">>100,000</div>
                <div class="titleText--text text-12 mt-auto">
                  {{$t("about.str10")}}
                </div>
              </v-sheet>
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-sheet>
      <v-sheet
        color="downloadBg"
        class="d-flex align-center flex-column"
        width="100%"
      >
        <img
          style="margin: 8% 0"
          width="100%"
          :src="$t('about.imgs.src1')"
        >
        <v-sheet width="100%" color="transparent" class="d-flex">
          <div class="d-flex flex-column" style="margin-left: 7%">
            <div class="text-28 titleText--text lh-1 pl-2">
              {{$t("about.str13")}}
            </div>
            <div class="text-26 primary--text lh-1 pl-2">
              {{$t("about.str14")}}
            </div>
            <ul
              class="titleText--text text-12 mt-5"
              style="padding-right: 15%"
            >
              <li>
                {{$t("about.str15")}}
              </li>
              <li class="mt-2">
                {{$t("about.str16")}}
              </li>
            </ul>
          </div>
        </v-sheet>
        <img
          style="margin: 5% 0"
          width="30%"
          src="./static/img/about/zhengshu.png"
        >
      </v-sheet>
      <v-sheet
        color="transparent"
        class="mx-auto px-2"
        width="1140px"
        max-width="100%"
      >
        <bottom-component></bottom-component>
      </v-sheet>
    </template>

    <!-- pc -->
    <template v-else>
      <v-sheet width="100%" class="relative d-flex justify-center">
        <img width="100%" src="./static/img/about/banner_01.png">
        <v-sheet
          color="transparent"
          class="absolute d-flex flex-column justify-center"
          max-width="1140px"
          width="100%"
          height="100%"
        >
          <div class="text-38">
            <span class="titleText--text">{{$t("about.str1_1")}}</span
            ><span class="primary--text">{{$t("about.str1_2")}}</span>
          </div>
          <v-sheet
            color="transparent"
            width="40%"
            class="titleText--text mt-2"
          >
            {{$t("about.str2")}}
          </v-sheet>
        </v-sheet>
      </v-sheet>
      <v-sheet width="100%" class="relative d-flex justify-center">
        <img width="100%" src="./static/img/about/banner_02.png">
        <v-sheet
          color="transparent"
          class="absolute d-flex flex-column justify-center"
          max-width="1140px"
          width="100%"
          height="100%"
        >
          <div class="text-38 primary--text">
            {{$t("about.str3")}}
          </div>
          <v-sheet
            color="transparent"
            width="40%"
            class="titleText--text mt-2"
          >
            {{$t("about.str4")}}
          </v-sheet>
        </v-sheet>
      </v-sheet>
      <v-sheet width="100%" class="relative d-flex justify-center">
        <img width="100%" src="./static/img/about/banner_03.png">
        <v-sheet
          color="transparent"
          class="absolute d-flex flex-column align-center justify-center"
          max-width="1140px"
          width="100%"
          height="100%"
        >
          <div class="text-38">
            <span class="primary--text">
              {{$t("about.str5")}}
            </span>
          </div>
          <div class="titleText--text">
            <div>{{$t("about.str6")}}</div>
          </div>
          <v-sheet
            color="transparent"
            width="100%"
            class="d-flex justify-space-around"
            style="margin-top: 3%"
          >
            <v-sheet
              color="transparent"
              class="d-flex"
              width="32%"
            >
              <v-sheet
                width="100%"
                height="150px"
                color="#22272d"
                class="d-flex flex-column align-center justify-center rounded"
              >
                <div class="primary--text text-38">{{$t("about.str17")}}</div>
                <div class="contentText--text">
                  {{$t("about.str8")}}
                </div>
              </v-sheet>
            </v-sheet>
            <v-sheet
              color="transparent"
              class="relative d-flex"
              width="32%"
            >
              <v-sheet
                width="100%"
                height="150px"
                color="#22272d"
                class="d-flex flex-column align-center justify-center rounded"
              >
                <div class="primary--text text-38">50,000-80,000</div>
                <div class="contentText--text">
                  {{$t("about.str9")}}
                </div>
              </v-sheet>
            </v-sheet>
            <v-sheet
              color="transparent"
              class="relative d-flex"
              width="32%"
            >
              <v-sheet
                width="100%"
                height="150px"
                color="#22272d"
                class="d-flex flex-column align-center justify-center rounded"
              >
                <div class="primary--text text-38">＞100,000</div>
                <div class="contentText--text">{{$t("about.str10")}}</div>
              </v-sheet>
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-sheet>
      <v-sheet
        color="downloadBg"
        class="d-flex align-center flex-column py-10 mx-auto"
        max-width="1140px"
        width="100%"
      >
        <img width="50%" :src="$t('about.imgs.src1')">
        <v-sheet width="100%" color="transparent" class="d-flex mt-10">
          <img
            width="15%"
            src="./static/img/about/zhengshu.png"
          >
          <div class="d-flex flex-column" style="margin-left: 7%">
            <div class="text-38 titleText--text lh-1">
              {{$t("about.str13")}}
            </div>
            <div class="text-38 primary--text lh-1">
              {{$t("about.str14")}}
            </div>
            <ul style="margin-top: 3%; width: 80%">
              <li class="titleText--text">
              {{$t("about.str15")}}
              </li>
              <li class="titleText--text mt-2">
                {{$t("about.str16")}}
              </li>
            </ul>
          </div>
        </v-sheet>
      </v-sheet>
      <v-sheet
        color="transparent"
        class="mx-auto px-2"
        width="1140px"
        max-width="100%"
      >
        <bottom-component></bottom-component>
      </v-sheet>
    </template>
  </v-sheet>
  `,
});

// export default header;
