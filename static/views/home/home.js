var homeComponent = Vue.component("home-component", {
  data() {
    return {
      isHidden: true,
      qrDialog: false,
      menuOptions: [
        {
          i18nKey: "home.menu.str1",
          icon: "./static/img/home/icon_az.png",
          event: () => {
            openLink(apk);
          },
        },
        {
          i18nKey: "home.menu.str2",
          icon: "./static/img/home/icon_ptxz.png",
          event: () => {},
        },
        {
          i18nKey: "home.menu.str3",
          icon: "./static/img/home/icon_qlb.png",
          event: () => {
            const link = document.createElement("a");
            link.href = "webclip/install.html";
            link.target = "_blank";
            link.click();
          },
        },
        {
          i18nKey: "home.menu.str4",
          icon: "./static/img/home/icon_ewm1.png",
          event: this.showQRCode,
        },
      ],
      options1: [
        {
          titleKey: "home.option1.title1",
          contentKey: "home.option1.content1",
          icon: "./static/img/home/xitongtese_01.png",
        },
        {
          titleKey: "home.option1.title2",
          contentKey: "home.option1.content2",
          icon: "./static/img/home/xitongtese_02.png",
        },
        {
          titleKey: "home.option1.title3",
          contentKey: "home.option1.content3",
          icon: "./static/img/home/xitongtese_03.png",
        },
        {
          titleKey: "home.option1.title4",
          contentKey: "home.option1.content4",
          icon: "./static/img/home/xitongtese_04.png",
        },
        {
          titleKey: "home.option1.title5",
          contentKey: "home.option1.content5",
          icon: "./static/img/home/xitongtese_05.png",
        },
        {
          titleKey: "home.option1.title6",
          contentKey: "home.option1.content6",
          icon: "./static/img/home/xitongtese_06.png",
        },
        {
          titleKey: "home.option1.title7",
          contentKey: "home.option1.content7",
          icon: "./static/img/home/xitongtese_07.png",
        },
        {
          titleKey: "home.option1.title8",
          contentKey: "home.option1.content8",
          icon: "./static/img/home/xitongtese_08.png",
        },
        {
          titleKey: "home.option1.title9",
          contentKey: "home.option1.content9",
          icon: "./static/img/home/xitongtese_09.png",
        },
      ],
      qr: null,
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
    showQRCode() {
      this.qrDialog = true;
      this.qr = qrImg;
    },
    onImageLoaded() {
      // console.log('圖片載入完成');
      this.isHidden = false;
    },
    openLink(url) {
      openLink(url);
    },
  },
  template: `
  <v-sheet
    color="transparent"
    class="home-component"
    :class="{hidden: isHidden}"
    v-image-loaded="onImageLoaded"
  >

    <!-- start QR弹窗 -->
    <v-dialog v-model="qrDialog" width="350">
      <v-card class="dialog-bg" height="400">
        <v-card-title class="d-flex justify-center relative">
          <v-btn
            style="right: 10px; top: 10px"
            class="absolute"
            icon
            @click="qrDialog = false"
          >
            <v-img
              max-width="18px"
              src="./static/img/dialog/close.png"
            ></v-img>
          </v-btn>
        </v-card-title> 

        <v-card-text class="d-flex align-center flex-column">
          <v-sheet width="150px" class="pa-1 mt-8">
            <v-img :src="qr"></v-img>
          </v-sheet>
          <div class="titleText--text text-20 mt-8 text-center">{{$t("qrcode.title")}}</div>
          <div class="titleText--text mt-4 text-center">{{$t("qrcode.content")}}</div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- end QR弹窗 -->

    <!-- h5 -->
    <template v-if="isMobile">
      <v-sheet
        color="transparent"
        width="100%"
        class="relative d-flex justify-center"
      >
        <img class="contain" width="100%" src="./static/img/home/h5/banner_01.png" style="margin-top: -15%" />
        <v-sheet
          color="transparent"
          class="mx-auto absolute px-2"
          width="100%"
          height="100%"
        >
          <v-sheet
            color="transparent"
            width="100%"
            height="40%"
            class="d-flex flex-column align-center"
            style="padding-top: 5%"
          >
            <div class="titleText--text text-28 mx-2 text-center">
              {{$t("home.str1")}}
            </div>
          </v-sheet>
        </v-sheet>
      </v-sheet>

      <v-sheet
        color="#181b21"
        width="100%"
        style="padding: 3%"
        class="d-flex flex-column"
      >
        <img width="100%" :src="$t('home.imgs.src1')" class="mx-auto" />
        <v-row dense style="height: 80%; margin: 5% 0">
          <v-col
            cols="12"
            v-for="({titleKey, contentKey, icon}, index) of options1"
            :key="index"
            style="height: 100px"
          >
            <v-sheet
              color="#303136"
              width="100%"
              height="100%"
              class="d-flex align-center rounded-lg pa-4"
            >
              <img class="ml-n2 mr-2" width="70" contain :src="icon"/>
              <v-sheet color="transparent" class="d-flex flex-column justify-center" height="100%">
                <div class="titleText--text text-14">{{$t(titleKey)}}</div>
                <div class="mt-1 contentText--text text-12 text-left">
                  {{$t(contentKey)}}
                </div>
              </v-sheet>
            </v-sheet>
          </v-col>
        </v-row>
        <img width="100%" :src="$t('home.imgs.src2')" class="mx-auto" />
      </v-sheet>
      <v-sheet
        color="transparent"
        width="100%"
        class="relative d-flex justify-center"
      >
        <img class="contain" width="100%" src="./static/img/home/h5/banner_02.png" />
        <v-sheet
          color="transparent"
          class="mx-auto absolute d-flex flex-column align-center px-2"
          width="100%"
          height="100%"
        >
          <div class="text-28" style="margin-top: 5%">
            <span class="primary--text">{{$t("home.str4")}}</span>
          </div>
        </v-sheet>
      </v-sheet>
      <v-sheet
        color="transparent"
        width="100%"
        class="relative d-flex justify-center"
      >
        <img class="contain" width="100%" src="./static/img/home/h5/banner_03.png" />
        <v-sheet
          color="transparent"
          class="mx-auto absolute d-flex flex-column align-center"
          width="100%"
          height="100%"
        >
          <div class="text-28 text-center" style="margin-top: 5%">
            <span class="primary--text"> {{$t("home.str6")}} </span>
          </div>
        </v-sheet>
      </v-sheet>
      <v-sheet
        color="transparent"
        width="100%"
        class="relative d-flex justify-center"
      >
        <v-sheet
          color="transparent"
          class="mx-auto d-flex flex-column"
          width="100%"
          height="100%"
        >
          <bottom-component></bottom-component>
        </v-sheet>
      </v-sheet>
    </template>

    <!-- pc -->
    <template v-else>
      <v-sheet
        color="transparent"
        width="100%"
        class="relative d-flex justify-center"
      >
        <img width="100%" src="./static/img/home/banner_01.png" />
        <v-sheet
          color="transparent"
          class="mx-auto absolute"
          max-width="1140px"
          width="100%"
          height="100%"
        >
          <v-sheet
            color="transparent"
            width="100%"
            height="50%"
            max-height="50%"
            class="d-flex flex-column justify-center"
            style="padding-left: 8%"
          >
            <div class="titleText--text text-38" style="width: 55%">
              {{$t("home.str1")}}
            </div>
            <v-menu open-on-hover offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  height="44px"
                  width="184px"
                  v-bind="attrs"
                  v-on="on"
                  text
                  class="px-0 mt-10 relative d-flex"
                >
                  <img
                    max-height="44px"
                    contain
                    src="./static/img/home/anniu.png"
                  />
                  <div
                    class="absolute primary--text font-weight-bold text-16"
                    style="left: 0px; width: 60%"
                  >
                    {{$t("home.str3")}}
                  </div>
                </v-btn>
              </template>
              <v-list class="download-menu">
                <v-list-item-group>
                  <v-list-item
                    v-for="({i18nKey, icon, event}, index) in menuOptions"
                    :key="index"
                    @click="event"
                  >
                    <v-list-item-icon class="mr-4">
                      <img width="25px" :src="icon" />
                    </v-list-item-icon>
                    <v-list-item-title class="primary--text"
                      >{{ $t(i18nKey) }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-sheet>
          <v-sheet
            color="transparent"
            class="mx-auto d-flex flex-column"
            max-width="1140px"
            height="50%"
          >
            <img
              width="50%"
              :src="$t('home.imgs.src1')"
              class="mx-auto"
            />
            <div
              style="height: calc(100% - 34px)"
              class="d-flex align-center"
            >
              <v-row
                no-gutters
                style="padding: 1% 0; max-height: 400px; height: 100%"
              >
                <v-col
                  cols="4"
                  class="pa-1"
                  v-for="({titleKey, contentKey, icon}, index) of options1"
                  :key="index"
                >
                  <v-sheet
                    class="card-bg rounded-lg d-flex px-2"
                    color="transparent"
                    outlined
                    tile
                    height="100%"
                  >
                    <v-img class="mr-1" max-width="23%" contain :src="icon"></v-img>
                    <v-sheet
                      color="transparent"
                      height="100%"
                      class="d-flex flex-column justify-center"
                      style="top: 0; padding: 1.5%"
                    >
                      <div class="titleText--text text-16">
                        {{$t(titleKey)}}
                      </div>
                      <div class="contentText--text text-12 mt-1">
                        {{$t(contentKey)}}
                      </div>
                    </v-sheet>
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
          </v-sheet>
        </v-sheet>
      </v-sheet>
      <v-sheet
        color="transparent"
        width="100%"
        class="relative d-flex justify-center"
      >
        <img width="100%" src="./static/img/home/banner_02.png" />
        <v-sheet
          color="transparent"
          class="mx-auto absolute d-flex flex-column align-center"
          max-width="1140px"
          width="100%"
          height="100%"
        >
          <img
            class="absolute"
            width="50%"
            style="margin-top: 2%"
            :src="$t('home.imgs.src2')"
          />
          <v-sheet
            color="transparent"
            width="100%"
            height="100%"
            class="d-flex justify-center flex-column"
          >
            <div class="text-38">
              <span class="primary--text"> {{$t("home.str4")}} </span>
            </div>
          </v-sheet>
        </v-sheet>
      </v-sheet>
      <v-sheet
        color="transparent"
        width="100%"
        class="relative d-flex justify-center"
      >
        <img width="100%" src="./static/img/home/banner_03.png" />
        <v-sheet
          color="transparent"
          class="mx-auto absolute d-flex flex-column align-center"
          max-width="1140px"
          width="100%"
          height="100%"
        >
          <v-sheet
            color="transparent"
            width="100%"
            height="100%"
            class="d-flex justify-center flex-column align-end"
          >
            <div class="text-38">
              <span class="primary--text"> {{$t("home.str6")}} </span>
            </div>
          </v-sheet>
        </v-sheet>
      </v-sheet>
      <v-sheet
        color="transparent"
        width="100%"
        class="relative d-flex justify-center my-10"
      >
        <v-sheet
          color="transparent"
          class="mx-auto d-flex flex-column align-center"
          max-width="1140px"
          width="100%"
          height="100%"
        >
          <bottom-component></bottom-component>
        </v-sheet>
      </v-sheet>
    </template>
  </v-sheet>
  `,
});
