const supportComponent = Vue.component("support-component", {
  data() {
    return {
      isHidden: true,
      options: [
        {
          titleKey: "bottom.str3",
          contentKey: "tg",
          icon: "./static/img/support/1.png",
          event: () => {
            openLink(tgLink);
          },
        },
        {
          titleKey: "bottom.str3",
          contentKey: "whats_app",
          icon: "./static/img/support/2.png",
          event: () => {
            openLink(whatsappLink);
          },
        },
        {
          titleKey: "bottom.str3",
          contentKey: "bottom.str4",
          icon: "./static/img/support/3.png",
          event: () => {
            openLink(customerServiceLink);
          },
        },
      ],
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
    openLink() {
      return openLink(customerServiceLink);
    },
    onImageLoaded() {
      // console.log('圖片載入完成');
      this.isHidden = false;
    },
  },
  template: `
  <v-sheet color="downloadBg" class="support-component" :class="{hidden: isHidden}" v-image-loaded="onImageLoaded">
    <!-- h5 -->
    <template v-if="isMobile">
      <v-sheet color="transparent" width="100%" class="relative d-flex justify-center">
        <img class="contain absolute" width="100%" src="./static/img/support/h5/di.png">
        <v-sheet
          width="100%"
          height="100%"
          color="transparent"
          class="d-flex flex-column align-center"
          style="padding: 5% 0; z-index: 1"
        >
          <div class="text-28">
            <span class="titleText--text">{{$t("support.str1")}}</span
            ><span class="primary--text">{{$t("support.str2")}}</span>
          </div>
          <div class="contentText--text text-14">{{$t("support.str3")}}</div>
          <v-sheet
            color="transparent"
            width="100%"
            max-width="200px"
            class="d-flex justify-center flex-column"
            style="margin-top: 5%"
          >
            <v-sheet
              v-for="({ titleKey, contentKey, icon, event }, index) of options" 
              class="relative d-flex pointer mb-4"
              color="transparent"
              @click="event"
              :key="index"
            >
              <img
                width="100%"
                src="./static/img/support/di_01.png"
                class="contain"
              >
              <img
                width="100%"
                :src="icon"
                class="contain absolute"
              >
              <v-sheet
                class="absolute d-flex flex-column align-center justify-end pb-3"
                width="100%"
                height="100%"
                color="transparent"
              >
                <div class="primary--text text-14">{{$t(titleKey)}}</div>
                <div class="contentText--text text-12">{{$t(contentKey)}}</div>
              </v-sheet>
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-sheet>
    </template>

    <!-- pc -->
    <template v-else>
      <v-sheet width="100%" class="relative d-flex justify-center">
        <img width="100%" src="./static/img/support/di.png">
        <v-sheet
          width="100%"
          height="100%"
          color="transparent"
          class="absolute d-flex flex-column align-center justify-center"
        >
          <div class="text-38">
            <span class="titleText--text">{{$t("support.str1")}}</span
            ><span class="primary--text">{{$t("support.str2")}}</span>
          </div>
          <div class="titleText--text">{{$t("support.str3")}}</div>
          <v-sheet
            color="transparent"
            width="100%"
            class="d-flex justify-center"
            style="margin-top: 4%"
          >
            <v-sheet v-for="({ titleKey, contentKey, icon, event }, index) of options" @click="event" :key="index" class="relative d-flex pointer mx-4" color="transparent">
              <img
                width="100%"
                src="./static/img/support/di_01.png"
              >
              <v-img class="absolute" style="top: 10px;" :src="icon"></v-img>
              <v-sheet
                class="absolute d-flex flex-column align-center justify-end"
                width="100%"
                height="100%"
                color="transparent"
                style="padding-bottom: 9%"
              >
                <div class="primary--text">{{$t(titleKey)}}</div>
                <div class="contentText--text">{{$t(contentKey)}}</div>
              </v-sheet>
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-sheet>
    </template>
  </v-sheet>
  `,
});

// export default header;
