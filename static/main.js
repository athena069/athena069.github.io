var i18n = new VueI18n({
  locale: localStorage.getItem("language") || "zh",
  messages: {
    en,
    zh,
  },
});

var routes = [
  { path: "*", redirect: "/" },
  { path: "/", component: homeComponent },
  { path: "/download", component: downloadComponent },
  { path: "/about", component: aboutComponent },
  { path: "/support", component: supportComponent },
  { path: "/use", component: useComponent },
];

var router = new VueRouter({
  routes,
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

Vue.directive("image-loaded", {
  bind(el, binding, vnode) {
    const callback = binding.value;
    const images = el.getElementsByTagName("img");
    let loadedImageCount = 0;

    const onImageLoaded = () => {
      loadedImageCount++;

      if (loadedImageCount === images.length) {
        callback();
      }
    };

    Array.from(images).forEach((image) => {
      image.addEventListener("load", onImageLoaded);
    });
  },
});

new Vue({
  el: "#app",
  i18n,
  vuetify,
  router,
  components: {
    "header-component": headerComponent,
    "footer-component": footerComponent,
    "bottom-component": bottomComponent,
    "download-dialog-component": downloadDialogComponent,
  },

  data() {
    return {};
  },
  computed: {
    isMobile() {
      return breakpoint.mobile;
    },
  },
  methods: {
    showDownloadDialog() {
      this.$refs["downloadDialog"].downloadDialog = true;
      this.$refs["downloadDialog"].qr = qrImg;
    },
  },
}).$mount("#app");
