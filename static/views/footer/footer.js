const footerComponent = Vue.component("footer-component", {
  data() {
    return {};
  },
  computed: {
    isMobile() {
      return breakpoint.mobile;
    },
  },
  methods: {
    goPath(path) {
      router.push(path);
    },
    openLink() {
      return openLink(customerServiceLink);
    },
  },
  template: `
  <v-sheet
    class="d-flex flex-column align-center py-12 px-2 footer-component"
    color="footerBg"
  >
    <!-- h5 -->
    <template v-if="isMobile">
      <v-img
        max-width="100px"
        contain
        src="static/img/header/logo.png"
      ></v-img>
      <div class="d-flex mt-8">
        <div class="titleText--text pointer text mr-4" @click="goPath('/about')">{{$t("footer.str5")}}</div>
        <div class="titleText--text pointer text" @click="goPath('/use')">{{$t("footer.str6")}}</div>
      </div>
      <div class="contentText--text mt-8">
        {{$t("footer.str7")}}
      </div>
    </template>

    <!-- pc -->
    <template v-else>
      <v-sheet
        class="d-flex pb-10"
        color="transparent"
        max-width="1140px"
        width="100%"
      >
        <div class="mr-auto">
          <v-img
            max-width="100px"
            contain
            src="static/img/header/logo.png"
          ></v-img>
          <div class="contentText--text mt-2">
            {{$t("footer.str7")}}
          </div>
        </div>
        <div class="d-flex align-center">
          <div class="titleText--text pointer mr-4 text" @click="goPath('/about')">{{$t("footer.str5")}}</div>
          <div class="titleText--text pointer text" @click="goPath('/use')">{{$t("footer.str6")}}</div>
        </div>
      </v-sheet>
    </template>
  </v-sheet>
  `,
});

// export default header;
