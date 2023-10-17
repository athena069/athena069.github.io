const bottomComponent = Vue.component("bottom-component", {
  data() {
    return {
      options: [
        {
          titleKey: "bottom.str3",
          contentKey: "tg",
          icon: "./static/img/home/icon_tg.png",
          event: () => {
            openLink(tgLink);
          },
        },
        {
          titleKey: "bottom.str3",
          contentKey: "whats_app",
          icon: "./static/img/home/icon_whatsApp.png",
          event: () => {
            openLink(whatsappLink);
          },
        },
        {
          titleKey: "bottom.str3",
          contentKey: "bottom.str4",
          icon: "./static/img/home/icon_mail.png",
          event: () => {
            openLink(customerServiceLink);
          },
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return breakpoint.mobile;
    },
  },
  methods: {
    openLink() {
      return openLink(customerServiceLink);
    },
  },
  template: `
  <v-sheet
    color="transparent"
    class="mt-auto d-flex py-10 d-flex flex-column"
    width="100%"
    v-if="isMobile"
  >
    <div class="text-center mb-10">
      <div class="titleText--text font-weight-bold text-20">
        {{$t("bottom.str1")}}
      </div>
      <div class="contentText--text mt-1 text-14">
        {{$t("bottom.str2")}}
      </div>
    </div>
    <div class="d-flex justify-space-around mx-auto" style="width: 100%; max-width: 450px;">
      <div class="d-flex flex-column justify-center pointer flex-1 dev-box" v-for="({ titleKey, contentKey, icon, event }, index) of options" @click="event" :key="index">
        <v-img
          height="50px"
          contain
          :src="icon"
          class="ml-3"
        ></v-img>
        <span class="primary--text mt-3 text-14 text-center">
          {{$t(titleKey)}}
        </span>
        <span class="contentText--text mt-2 text-14 text-center">
          {{$t(contentKey)}}
        </span>
      </div>
    </div>
  </v-sheet>
  <v-sheet
    color="transparent"
    class="mt-auto d-flex py-10"
    width="100%"
    v-else
  >
    <div>
      <div class="titleText--text font-weight-bold text-26">
        {{$t("bottom.str1")}}
      </div>
      <div class="contentText--text mt-1">{{$t("bottom.str2")}}</div>
    </div>
    <div class="ml-auto d-flex justify-space-around" style="width: 50%">
      <div class="text-center pointer flex-1 dev-box" v-for="({ titleKey, contentKey, icon, event, width }, index) of options" @click="event" :key="index">
        <div class="d-flex align-center justify-center mx-auto" style="height: 60px">
          <v-img
            max-width="80"
            contaion
            :src="icon"
            class="ml-4"
          ></v-img>
        </div>
        <div class="primary--text mt-3">{{$t(titleKey)}}</div>
        <div class="contentText--text mt-1">{{$t(contentKey)}}</div>
      </div>
    </div>
  </v-sheet>
  `,
});

// export default header;
