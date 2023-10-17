const downloadComponent = Vue.component("download-component", {
  data() {
    return {
      isHidden: true,
      qr: null,
      installParams: { "code": "", "pid": 102, "channel": "" }
    };
  },

  computed: {
    isMobile() {
      return breakpoint.mobile;
    },
  },
  mounted() {
    this.qr = qrImg;
    // 获取 URL 中的参数
    const urlParams = new URLSearchParams(window.location.search);

    const channel = urlParams.get("channel");
    console.log(channel);
    this.installParams.channel = channel

    const shareCode = urlParams.get("shareCode");
    console.log(shareCode);
    this.installParams.code = shareCode
  },
  methods: {
    onImageLoaded() {
      // console.log('圖片載入完成');
      this.isHidden = false;
    },
    openLink() {
      openLink(apk);
      this.copyParams()
    },
    showDialog() {
      this.$parent.$parent.$parent.showDownloadDialog();
      this.copyParams()
    },
    copyParams() {
      console.log(this.installParams);
      const copyContent = async () => {
        try {
          await navigator.clipboard.writeText(this.installParams);
          console.log('clipboard successfully set')
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }
      copyContent()
    }

  },
  template: `
  <v-sheet color="downloadBg" class="download-component" :class="{hidden: isHidden}" v-image-loaded="onImageLoaded">
    <!-- h5 -->
    <template v-if="isMobile">
      <v-sheet
        color="downloadBg"
        width="100%"
        class="relative d-flex justify-center"
      >
        <img width="100%" src="./static/img/download/h5/bg.png">
        <v-sheet
          color="transparent"
          class="mx-auto absolute d-flex flex-column"
          width="100%"
          height="100%"
        >
          <v-sheet
            width="100%"
            color="transparent"
            class="d-flex flex-column align-center flex-1"
          >
            <div class="text-28" style="margin-top: 15%">
              <span class="primary--text">
                {{$t("download.str1")}}
              </span>
            </div>
            <div class="titleText--text text-12">{{$t("download.str2")}}</div>
            <v-sheet color="transparent" width="100%" class="d-flex justify-center" style="margin-top: 10%;">
              <img class="contain pointer" width="45%" @click="openLink" src="./static/img/download/1.png">
              <img class="contain pointer" width="45%" @click="showDialog" src="./static/img/download/2.png">
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-sheet>
      <v-sheet color="transparent" class="mx-auto px-2" width="1140px" max-width="100%">
        <bottom-component></bottom-component>
      </v-sheet>
    </template>

    <!-- pc -->
    <template v-else>
      <v-sheet
        color="downloadBg"
        width="100%"
        class="relative d-flex justify-center"
      >
        <img width="100%" src="./static/img/download/bg.png">
        <v-sheet
          color="transparent"
          class="mx-auto absolute d-flex flex-column"
          width="100%"
          height="100%"
        >
          <v-sheet
            width="100%"
            color="transparent"
            class="d-flex flex-column align-center flex-1"
          >
            <div class="text-38" style="margin-top: 10%">
              <span class="primary--text">
                {{$t("download.str1")}}
              </span>
            </div>
            <div class="titleText--text">
              {{$t("download.str2")}}
            </div>
            <v-sheet color="transparent" width="100%" class="d-flex justify-center" style="margin-top: 3%;">
              <img class="pointer" width="18%" @click="openLink" src="./static/img/download/1.png">
              <img class="pointer" width="18%" @click="showDialog" src="./static/img/download/2.png">
            </v-sheet>
            <v-sheet color="transparent" class="d-flex relative" width="50%">
              <img width="100%" src="./static/img/download/3.png">
              <v-sheet color="transparent" width="100%" height="100%" class="absolute d-flex align-center" style="padding: 4% 5% 0 32%;">
                <div class="mr-auto">
                  <div class="titleText--text text-20">
                    {{$t("download.str3")}}
                  </div>
                  <div class="contentText--text text-14">
                    {{$t("download.str4")}}
                  </div>
                </div>
                <v-sheet width="23%" class="pa-1">
                  <v-img :src="qr"></v-img>
                </v-sheet>
              </v-sheet>
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-sheet>
      <v-sheet color="transparent" class="mx-auto px-2" width="1140px" max-width="100%">
        <bottom-component></bottom-component>
      </v-sheet>
    </template>
  </v-sheet>
  `,
});

// export default header;
