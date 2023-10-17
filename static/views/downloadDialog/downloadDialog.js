const downloadDialogComponent = Vue.component("download-dialog-component", {
  data() {
    return {
      downloadDialog: false,
      qr: null,
    };
  },

  computed: {
    isMobile() {
      return breakpoint.mobile;
    },
    operatingSystem() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      // 判斷iOS
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
      }
      // 判斷Android
      if (/android/i.test(userAgent)) {
        return "Android";
      }
      return "unknown";
    },
    installParams() {
      let params = { "code": "", "pid": 102, "channel": "" }
      // 获取 URL 中的参数
      const urlParams = new URLSearchParams(window.location.search);

      // 获取单个参数
      const channel = urlParams.get("channel");
      console.log(channel);
      params.channel = channel
      // 获取多个参数
      const shareCode = urlParams.get("shareCode");
      console.log(shareCode);
      params.code = shareCode
      return params
    },

    btnOptions() {
      return [
        {
          icon: "./static/img/home/icon_ptxz.png",
          i18nKey: "home.menu.str2",
          event: () => {
            // openLink(apk);
          },
          bgColor: "#c9a17e",
          textColor: "#563518",
          key: "key2",
          isShow:
            this.operatingSystem == "unknown" || this.operatingSystem == "iOS",
        },
        {
          icon: "./static/img/home/icon_qlb.png",
          i18nKey: "home.menu.str3",
          event: () => {
            const link = document.createElement("a");
            link.href = "webclip/install.html";
            link.target = "_blank";
            link.click();
            copyParams();//实现剪贴簿
          },
          bgColor: "#867cb9",
          textColor: "#33286f",
          key: "key1",
          isShow:
            this.operatingSystem == "unknown" || this.operatingSystem == "iOS",
        },
        {
          icon: "./static/img/home/icon_az1.png",
          i18nKey: "home.menu.str1",
          event: () => {
            openLink(apk);
            copyParams();
          },
          bgColor: "#74b654",
          textColor: "#295514",
          key: "key3",
          isShow:
            this.operatingSystem == "unknown" ||
            this.operatingSystem == "Android",
        },
        // {
        //   icon: "./static/img/home/icon_ewm.png",
        //   i18nKey: "home.menu.str4",
        //   event: () => {},
        //   bgColor: "#c8cbd4",
        //   textColor: "",
        //   key: "key4",
        //   isShow: !this.isMobile,
        // },
      ];
    },
  },
  methods: {
    openLink() {
      openLink(apk);
    },
    copyParams() {
      const copyContent = async () => {
        try {
          await navigator.clipboard.writeText(this.installParams);
          console.log(this.installParams);
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }
    }
  },
  template: `
        <v-dialog v-model="downloadDialog" width="350">
          <v-card
            class="dialog-bg"
            :height="this.operatingSystem != 'unknown' ? '300px' : '480px'"
          >
            <v-card-title class="d-flex justify-center relative">
              <v-img
                class="my-2"
                :max-width="$i18n.locale == 'en'?'50%':'90%'"
                :src="$t('download_dialog_title')"
                contain
              ></v-img>
              <v-btn
                style="right: 10px; top: 10px"
                class="absolute"
                icon
                @click="downloadDialog = false"
              >
                <v-img
                  max-width="18px"
                  src="./static/img/dialog/close.png"
                ></v-img>
              </v-btn>
            </v-card-title>

            <v-card-text>
              <v-btn
                width="100%"
                class="rounded my-1"
                height="45"
                :color="bgColor"
                v-for="{icon, i18nKey, event, bgColor, key, textColor, isShow} of btnOptions"
                :key="key"
                @click="event"
                v-if="isShow"
              >
                <v-sheet
                  color="transparent"
                  width="100%"
                  class="d-flex justify-center align-center black--text"
                >
                  <v-img max-width="23px" :src="icon" class="mr-2"></v-img>
                  <span class="relative text-16" :style="{'color': textColor}">
                    {{$t(i18nKey)}}
                    <v-img
                      max-width="23px"
                      v-if="key == 'key2'"
                      src="./static/img/download/hot.png"
                      class="absolute"
                      style="top: -8px; right: -23px"
                    ></v-img>
                  </span>
                </v-sheet>
              </v-btn>
              <template v-if="this.operatingSystem == 'unknown'">
                <v-sheet
                  color="#c8cbd4"
                  class="rounded d-flex justify-center align-center mt-1 text-16"
                  width="100%"
                  height="45"
                >
                  <v-img
                    max-width="23px"
                    src="./static/img/home/icon_ewm.png"
                    class="mr-2"
                  ></v-img>
                  {{$t("home.menu.str4")}}
                </v-sheet>
                <div class="mt-4 d-flex justify-center">
                  <v-sheet class="pa-1">
                    <v-img max-width="150" :src="qr"></v-img>
                  </v-sheet>
                </div>
              </template>
            </v-card-text>
          </v-card>
        </v-dialog>
  `,
});

// export default header;
