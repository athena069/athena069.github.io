const headerComponent = Vue.component("header-component", {
  data() {
    return {
      toggle_one: 0,

      langOptions: [
        {
          key: "zh",
          name: "简体中文",
          icon: "./static/img/header/icon_cn.png",
        },
        { key: "en", name: "English", icon: "./static/img/header/icon_en.png" },
      ],
      selectedItem: 0,
      drawer: false,
      title: null,
    };
  },
  mounted() {
    this.selectedItem = this.langOptions.findIndex(
      (item) => item.key === this.$i18n.locale
    );
    this.title = Document.querySelector("title");
    this.title.textContent = this.$t("epoker");
  },
  computed: {
    curLang() {
      return this.langOptions[this.selectedItem];
    },
    isMobile() {
      return breakpoint.mobile;
    },
    navOptions() {
      return [
        { name: this.$t("header.home"), path: "/" },
        { name: this.$t("header.download"), path: "/download" },
        { name: this.$t("header.about"), path: "/about" },
        { name: this.$t("header.support"), path: "/support" },
      ];
    },
  },
  methods: {
    changeLang(val) {
      const key = this.langOptions[val].key;
      localStorage.setItem("language", key);
      this.$i18n.locale = key; //这个代码负责实时切换语言
      this.title.textContent = this.$t("epoker");
    },
    goHome() {
      if (this.$router.currentRoute.path != "/") this.$router.push("/");
    },
    openPlayNow() {
      openLink(playNowLink);
    },
  },
  template: `
  <div class="header-component">
    <!-- 侧边抽屉 start-->
    <v-navigation-drawer
      v-model="drawer"
      color="drawerBg"
      width="150"
      fixed
      left
      temporary
    >
      <v-sheet
        v-for="({name, path}, index) of navOptions"
        :key="name"
        color="transparent"
        width="100%"
        height="60px"
        class="d-flex relative align-center justify-center titleText--text"
      >
        <v-btn
          color="titleText"
          text
          class="nav-btn"
          :ripple="false"
          :to="path"
          exact-active-class="nav-active"
        >
          <span class="text text-16"> {{name}} </span>
        </v-btn>
        <v-img
          v-if="index < (navOptions.length - 1)"
          width="90%"
          height="1"
          class="absolute"
          style="bottom: 0"
          src="./static/img/header/h5/fengexian.png"
        ></v-img>
      </v-sheet>
    </v-navigation-drawer>
    <!-- 侧边抽屉 end-->

    <v-app-bar app color="headerBg">
      <!-- h5 -->
      <v-sheet
        width="100%"
        height="100%"
        color="transparent"
        class="mob mx-auto d-flex align-center"
        v-if="isMobile"
      >
        <v-btn width="24" class="px-0 mr-3" icon @click="drawer = true">
          <v-img
            src="./static/img/header/h5/icon_gengduo.png"
            max-width="18px"
          ></v-img>
        </v-btn>

        <v-img @click="goHome" src="./static/img/header/logo.png" max-width="100px"></v-img>
        <v-img
          src="./static/img/header/GLI.png"
          max-width="60px"
          class="pointer ml-auto mr-3"
        ></v-img>
        <v-btn @click="openPlayNow" class="experience-btn mr-2 text-12" width="75" height="30" color="#16181e" text>
          {{$t("header.play")}}
        </v-btn>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              height="35"
              class="lang-btn px-2 text-transform-none"
              width="30"
              outlined
              icon
              color="transparent"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-sheet
                color="transparent"
                width="100%"
                class="d-flex align-center"
              >
                <v-img :src="curLang.icon" max-width="23" min-width="23"></v-img>
              </v-sheet>
            </v-btn>
          </template>
          <v-list dense color="menuBg">
            <v-list-item-group mandatory v-model="selectedItem" @change="changeLang">
              <v-list-item
                class="menu-item"
                v-for="{name, icon} of langOptions"
                :key="name"
              >
                <v-list-item-icon class="mx-0">
                  <v-img max-width="23" min-width="23" contain :src="icon"></v-img>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        
      </v-sheet>

      <!-- pc -->
      <v-sheet
        max-width="1140px"
        width="100%"
        height="100%"
        color="transparent"
        class="mx-auto px-2 d-flex align-center"
        v-else
      >
        <v-img
          style="margin-right: 100px"
          src="./static/img/header/logo.png"
          max-width="100px"
          @click="goHome"
          class="pointer"
        ></v-img>
        <v-btn
          color="#fff"
          text
          v-for="{name, path} of navOptions"
          :key="name"
          class="nav-btn mx-4"
          :ripple="false"
          :to="path"
          exact-active-class="nav-active"
        >
          <div>
            <span class="text text-16"> {{name}} </span>
            <div class="downline"></div>
          </div>
        </v-btn>
        <v-img
          src="./static/img/header/GLI.png"
          max-width="90px"
          class="pointer ml-auto mr-3"
        ></v-img>
        <v-btn @click="openPlayNow" class="experience-btn mr-3" height="40" color="#16181e" text>
          {{$t("header.play")}}
        </v-btn>
        <div>
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                height="40"
                class="lang-btn px-3 text-transform-none"
                width="140"
                outlined
                text
                color="transparent"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-sheet
                  color="transparent"
                  width="100%"
                  class="d-flex align-center"
                >
                  <v-img
                    class="mr-2"
                    :src="curLang.icon"
                    max-width="24"
                  ></v-img>
                  <span
                    class="text-16 navText--text mr-auto"
                    style="letter-spacing: normal"
                    >{{curLang.name}}</span
                  >
                  <v-img
                    class="mt-1"
                    src="./static/img/header/yuyantanchu.png"
                    max-width="10"
                  ></v-img>
                </v-sheet>
              </v-btn>
            </template>
            <v-list dense color="menuBg">
              <v-list-item-group mandatory v-model="selectedItem" @change="changeLang">
                <v-list-item
                  class="menu-item"
                  v-for="{name, icon} of langOptions"
                  :key="name"
                >
                  <v-list-item-icon class="mr-3">
                    <v-img min-width="24" max-width="24" contain :src="icon"></v-img>
                  </v-list-item-icon>
                  <v-list-item-title class="text-16 navText--text"
                    >{{name}}</v-list-item-title
                  >
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </div>
      </v-sheet>
    </v-app-bar>
  </div>
  
  `,
});
// export default header;
