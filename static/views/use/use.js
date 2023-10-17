const useComponent = Vue.component("use-component", {
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
    // 最上方的內容
    topOptions() {
      return [
        { str: this.$t("use.top.str1"), className: "", styleObj: {} },
        { str: this.$t("use.top.str2"), className: "", styleObj: {} },
        { str: this.$t("use.top.str3"), className: "", styleObj: {} },
        { str: this.$t("use.top.str4"), className: "", styleObj: {} },
        { str: this.$t("use.top.str5"), className: "", styleObj: {} },
        { str: this.$t("use.top.str6"), className: "", styleObj: {} },
        {
          str: this.$t("use.top.str7"),
          className: "my-7",
          styleObj: {},
        },
        { str: this.$t("use.top.str8"), className: "", styleObj: {} },
      ];
    },

    contentOptions() {
      return [
        {
          title: this.$t("use.content.title.str1"),
          tops: [],
          details: [
            {
              number: "1.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str1-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "1.2",
              contents: [
                {
                  str: this.$t("use.content.detail.str1-2"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "1.3",
              contents: [
                {
                  str: this.$t("use.content.detail.str1-3"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "1.4",
              contents: [
                {
                  str: this.$t("use.content.detail.str1-4-a"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str1-4-b"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str1-4-c"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str1-4-d"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str1-bottom-1"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str1-bottom-2"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "1.5",
              contents: [
                {
                  str: this.$t("use.content.detail.str1-5"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "1.6",
              contents: [
                {
                  str: this.$t("use.content.detail.str1-6"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str2"),
          tops: [],
          details: [
            {
              number: "2.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str2-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "2.2",
              contents: [
                {
                  str: this.$t("use.content.detail.str2-2"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "2.3",
              contents: [
                {
                  str: this.$t("use.content.detail.str2-3"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str3"),
          tops: [],
          details: [
            {
              number: "3.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str3-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str4"),
          tops: [
            {
              str: this.$t("use.content.detail.str4-top-1"),
              className: "",
              styleObj: {},
            },
          ],
          details: [
            {
              number: "4.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str4-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str4"),
          tops: [
            {
              str: this.$t("use.content.detail.str4-top-1"),
              className: "",
              styleObj: {},
            },
          ],
          details: [
            {
              number: "4.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str4-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "4.2",
              contents: [
                {
                  str: this.$t("use.content.detail.str4-2"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "4.3",
              contents: [
                {
                  str: this.$t("use.content.detail.str4-3"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "4.4",
              contents: [
                {
                  str: this.$t("use.content.detail.str4-4"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "4.5",
              contents: [
                {
                  str: this.$t("use.content.detail.str4-5"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "4.6",
              contents: [
                {
                  str: this.$t("use.content.detail.str4-6"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str5"),
          tops: [],
          details: [
            {
              number: "5.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str5-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "5.2",
              contents: [
                {
                  str: this.$t("use.content.detail.str5-2"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "5.3",
              contents: [
                {
                  str: this.$t("use.content.detail.str5-3"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "5.4",
              contents: [
                {
                  str: this.$t("use.content.detail.str4-4"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "5.5",
              contents: [
                {
                  str: this.$t("use.content.detail.str5-5"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "5.6",
              contents: [
                {
                  str: this.$t("use.content.detail.str5-6"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "5.7",
              contents: [
                {
                  str: this.$t("use.content.detail.str5-7"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "5.8",
              contents: [
                {
                  str: this.$t("use.content.detail.str5-8"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str5-8-a"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str5-8-b"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str5-8-c"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str5-8-d"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str5-8-e"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "5.9",
              contents: [
                {
                  str: this.$t("use.content.detail.str5-9-1"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str5-9-2"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str5-9-a"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str5-9-b"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str5-9-c"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str5-9-c-1"),
                  className: "my-7 ml-10",
                  styleObj: {},
                },
              ],
            },
            {
              number: "5.10",
              contents: [
                {
                  str: this.$t("use.content.detail.str5-10"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "5.11",
              contents: [
                {
                  str: this.$t("use.content.detail.str5-11"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str6"),
          tops: [],
          details: [
            {
              number: "6.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str6-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str7"),
          tops: [],
          details: [
            {
              number: "7.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str7-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str8"),
          tops: [],
          details: [
            {
              number: "8.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str8-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "8.2",
              contents: [
                {
                  str: this.$t("use.content.detail.str8-2"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str8-2-a"),
                  className: "mt-7",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str8-2-b"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str8-2-c"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str9"),
          tops: [],
          details: [
            {
              number: "9.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str9-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "9.2",
              contents: [
                {
                  str: this.$t("use.content.detail.str9-2"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str10"),
          tops: [],
          details: [
            {
              number: "10.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str10-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "10.2",
              contents: [
                {
                  str: this.$t("use.content.detail.str10-2"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "10.3",
              contents: [
                {
                  str: this.$t("use.content.detail.str10-3"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "10.4",
              contents: [
                {
                  str: this.$t("use.content.detail.str10-4-1"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str10-4-2"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "10.5",
              contents: [
                {
                  str: this.$t("use.content.detail.str10-5"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "10.6",
              contents: [
                {
                  str: this.$t("use.content.detail.str10-6"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "10.7",
              contents: [
                {
                  str: this.$t("use.content.detail.str10-7"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "10.8",
              contents: [
                {
                  str: this.$t("use.content.detail.str10-8"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "10.9",
              contents: [
                {
                  str: this.$t("use.content.detail.str10-9"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "10.10",
              contents: [
                {
                  str: this.$t("use.content.detail.str10-10"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "10.11",
              contents: [
                {
                  str: this.$t("use.content.detail.str10-11"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "10.12",
              contents: [
                {
                  str: this.$t("use.content.detail.str10-12"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str11"),
          tops: [],
          details: [
            {
              number: "11.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str11-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str12"),
          tops: [],
          details: [
            {
              number: "12.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str12-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str13"),
          tops: [],
          details: [
            {
              number: "13.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str13-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "13.2",
              contents: [
                {
                  str: this.$t("use.content.detail.str13-2-1"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str13-2-2"),
                  className: "mt-7",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str14"),
          tops: [],
          details: [
            {
              number: "14.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str14-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str15"),
          tops: [],
          details: [
            {
              number: "15.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str15-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
          ],
        },
        {
          title: this.$t("use.content.title.str16"),
          tops: [],
          details: [
            {
              number: "16.1",
              contents: [
                {
                  str: this.$t("use.content.detail.str16-1"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "16.2",
              contents: [
                {
                  str: this.$t("use.content.detail.str16-2"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "16.3",
              contents: [
                {
                  str: this.$t("use.content.detail.str16-3"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "16.4",
              contents: [
                {
                  str: this.$t("use.content.detail.str16-4"),
                  className: "",
                  styleObj: {},
                },
              ],
            },
            {
              number: "16.5",
              contents: [
                {
                  str: this.$t("use.content.detail.str16-5-1"),
                  className: "",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str16-5-2"),
                  className: "mt-7",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str16-5-3"),
                  className: "mt-7",
                  styleObj: {},
                },
                {
                  str: this.$t("use.content.detail.str16-5-4"),
                  className: "mt-7",
                  styleObj: {},
                },
              ],
            },
          ],
        },
      ];
    },
  },
  methods: {
    hiddenEngilsh(number) {
      return (
        this.$i18n.locale != "zh" && (Number(number) > 10)
      );
    },
    onImageLoaded() {
      // console.log('圖片載入完成');
      this.isHidden = false;
    },
  },
  template: `
  <v-sheet color="downloadBg" class="use-component pb-7" :class="{hidden: isHidden}" v-image-loaded="onImageLoaded">
    <!-- h5 -->
    <template v-if="isMobile">
      <v-sheet
        color="downloadBg"
        width="100%"
        class="relative d-flex justify-center"
      >
        <img class="absolute" width="100%" src="./static/img/use/di.png">
        <v-sheet
          width="100%"
          height="100%"
          max-width="1140px"
          color="transparent"
          class="d-flex flex-column align-center justify-center px-4"
          style="z-index: 1"
        >
          <img
            width="100%"
            :src="$t('use.imgs.src1')"
            style="margin: 5% 0"
          >
          <div class="titleText--text">
            <div
              v-for="({str, styleObj, className}, index) of topOptions"
              :key="index"
              :style="styleObj"
              :class="className"
            >
              {{str}}
            </div>

            <div
              v-for="({title, details, tops}, index) of contentOptions"
              :key="index"
            >
              <div class="mt-7">{{title}}</div>
              <div v-for="{str, styleObj, className} of tops" :key="str">
                <div :class="className" :style="styleObj">{{str}}</div>
              </div>
              <div
                class="mt-7"
                v-for="{number,contents} of details"
                :key="number"
                v-if="!hiddenEngilsh(number)"
              >
                <div class="mb-7">{{number}}</div>
                <div
                  v-for="({str, styleObj, className}, i) of contents"
                  :class="className"
                  :style="styleObj"
                  :key="i"
                >
                  {{str}}
                </div>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-sheet>
    </template>

    <!-- pc -->
    <template v-else>
      <v-sheet
        color="downloadBg"
        width="100%"
        class="relative d-flex justify-center"
      >
        <img widht="100%" class="absolute" src="./static/img/use/di.png">
        <v-sheet
          width="100%"
          height="100%"
          max-width="1140px"
          color="transparent"
          class="d-flex flex-column align-center justify-center px-4"
          style="z-index: 1"
        >
          <img
            width="40%"
            :src="$t('use.imgs.src1')"
            style="margin: 5% 0"
          >
          <div class="titleText--text">
            <div
              v-for="({str, styleObj, className}, index) of topOptions"
              :key="index"
              :style="styleObj"
              :class="className"
            >
              {{str}}
            </div>

            <div
              v-for="({title, details, tops}, index) of contentOptions"
              :key="index"
            >
              <div class="mt-7">{{title}}</div>
              <div v-for="{str, styleObj, className} of tops" :key="str">
                <div :class="className" :style="styleObj">{{str}}</div>
              </div>
              <div
                class="mt-7"
                v-for="{number,contents} of details"
                :key="number"
                v-if="!hiddenEngilsh(number)"
              >
                <div class="mb-7">{{number}}</div>
                <div
                  v-for="({str, styleObj, className}, i) of contents"
                  :class="className"
                  :style="styleObj"
                  :key="i"
                >
                  {{str}}
                </div>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-sheet>
    </v-sheet>
    </template>
  </v-sheet>
  `,
});

// export default header;
