<template>
  <div class="SideNavigation">
    <header class="SideNavigation-HeadingContainer sp-flex">
      <v-icon
        class="SideNavigation-HeadingIcon pc-none"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="openNavi"
        >mdi-menu</v-icon
      >
      <nuxt-link :to="localePath('/')" class="SideNavigation-HeadingLink">
        <h1 class="SideNavigation-Heading">
          <div class="SideNavigation-Logo">
            <img src="/logo.svg" :alt="$t('香川県')" />
          </div>
          {{ $t('新型コロナウイルス感染症') }}
          <br />
          {{ $t('対策サイト（非公式）') }}
        </h1>
      </nuxt-link>
    </header>
    <v-divider class="SideNavigation-HeadingDivider" />
    <div class="sp-none" :class="{ open: isNaviOpen }">
      <v-icon
        class="SideNavigation-ListContainerIcon pc-none"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="closeNavi"
        >mdi-close</v-icon
      >
      <nav>
        <v-list :flat="true">
          <v-container
            v-for="(item, i) in items"
            :key="i"
            class="SideNavigation-ListItemContainer"
            @click="closeNavi"
          >
            <ListItem :link="item.link" :icon="item.icon" :title="item.title" />
            <v-divider v-show="item.divider" class="SideNavigation-Divider" />
          </v-container>
        </v-list>
        <div class="SideNavigation-LanguageMenu">
          <LanguageSelector />
        </div>
      </nav>
      <v-footer class="SideNavigation-Footer">
        <div class="SideNavigation-SocialLinkContainer">
          <!-- <a
            href="https://line.me/R/ti/p/%40822sysfc"
            target="_blank"
            rel="noopener"
          >
            <img src="/line.png" alt="LINE" />
          </a>
          <a
            href="https://twitter.com/tokyo_bousai"
            target="_blank"
            rel="noopener"
          >
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/tochokoho"
            target="_blank"
            rel="noopener"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>-->
          <a
            href="https://github.com/i15317/covid19"
            target="_blank"
            rel="noopener"
          >
            <img src="/github.png" alt="GitHub" />
          </a>
        </div>
        <small class="SideNavigation-Copyright">
          {{ $t('このサイトの内容物は') }}
          <a
            rel="license"
            target="_blank"
            :href="$t('https://creativecommons.org/licenses/by/4.0/deed.ja')"
            >{{ $t('クリエイティブ・コモンズ 表示 4.0 ライセンス') }}</a
          >
          {{ $t('の下に提供されています。') }}
          <br />2020 Tokyo Metropolitan Government
        </small>
      </v-footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import ListItem from '@/components/ListItem.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'

type Item = {
  icon?: string
  title: TranslateResult
  link: string
  divider?: boolean
}

export default Vue.extend({
  components: {
    ListItem,
    LanguageSelector
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    items(): Item[] {
      return [
        {
          icon: 'mdi-chart-timeline-variant',
          title: this.$t('県内の最新感染動向'),
          link: this.localePath('/')
        },
        {
          icon: 'covid',
          title: this.$t('新型コロナウイルス感染症が心配なときに'),
          link: this.localePath('/flow'),
          divider: true
        },
        {
          icon: 'parent',
          title: this.$t('お子様をお持ちの皆様へ'),
          link: this.localePath('/parent')
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('県民の皆様へ'),
          link:
            'https://www.pref.kagawa.lg.jp/content/dir1/dir1_6/dir1_6_2/wt5q49200131182439.shtml#kenmin01'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('企業の皆様・はたらく皆様へ'),
          link: this.localePath('/worker')
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('海外からお越しの方へ（For tourists）'),
          link:
            'https://www.pref.kagawa.lg.jp/content/etc/subsite/kokusai/live_together/s10013200205165813.shtml',
          divider: true
        },
        // {
        //   title: this.$t('東京都新型コロナウイルス感染症対策本部報'),
        //   link:
        //     'https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/index.html'
        // },
        // {
        //   title: this.$t('東京都主催等 中止又は延期するイベント等'),
        //   link:
        //     'https://www.seisakukikaku.metro.tokyo.lg.jp/information/event00.html'
        // },
        // {
        //   title: this.$t('知事からのメッセージ'),
        //   link:
        //     'https://www.metro.tokyo.lg.jp/tosei/governor/governor/katsudo/2020/03/03_00.html'
        // },
        {
          title: this.$t('大阪市内のライブハウスのコンサート参加者へ'),
          link:
            'https://www.pref.kagawa.lg.jp/content/dir1/dir1_6/dir1_6_2/wt5q49200131182439.shtml#kenmin01'
        },
        {
          title: this.$t('県施設の臨時休館などに関する情報'),
          link:
            'https://www.pref.kagawa.lg.jp/content/dir1/dir1_6/dir1_6_2/wxssn6200305192930.shtml'
        },
        {
          title: this.$t('県内のイベント中止に関する情報'),
          link:
            'https://www.pref.kagawa.lg.jp/content/dir1/dir1_6/dir1_6_2/w6t5fp200225155011.shtml'
        },
        {
          title: this.$t(
            '[厚労省]イベント開催に関する国民の皆様へのメッセージ'
          ),
          link: 'https://www.mhlw.go.jp/stf/seisakunitsuite/newpage_00002.html',
          divider: true
        },
        {
          title: this.$t('このサイトについて'),
          link: this.localePath('/about')
        },
        {
          title: this.$t('香川県公式ホームページ'),
          link: 'https://www.pref.kagawa.lg.jp/',
          divider: true
        }
      ]
    }
  },
  methods: {
    openNavi(): void {
      this.$emit('openNavi')
    },
    closeNavi(): void {
      this.$emit('closeNavi')
    }
  }
})
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  height: 100%;
  background: $white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  &-HeadingContainer {
    padding: 1.25em 0 1.25em 1.25em;
    align-items: center;
    @include lessThan($small) {
      padding: 7px 10px;
    }
  }
  &-HeadingIcon {
    margin-right: 10px;
  }
  &-HeadingLink {
    @include lessThan($small) {
      display: flex;
      align-items: center;
    }
    text-decoration: none;
  }
  &-ListContainerIcon {
    width: 21px;
    margin: 24px 16px 0;
  }
  &-ListItemContainer {
    padding: 2px 20px;
  }
  &-Logo {
    margin: 5px 16px 15px 0;
    width: 110px;
    @include lessThan($small) {
      margin: 0 16px 0 0;
    }
  }
  &-Heading {
    margin-top: 8px;
    font-size: 13px;
    color: #707070;
    padding: 0.5em 0;
    text-decoration: none;
    @include lessThan($small) {
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 0;
    }
  }
  &-HeadingDivider {
    margin: 0px 20px 4px;
    @include lessThan($small) {
      display: none;
    }
  }
  &-Divider {
    margin: 12px 0;
  }
  &-LanguageMenu {
    padding: 0 20px;
    background: #fff;
  }
  &-Footer {
    padding: 20px;
    background-color: $white;
  }
  &-SocialLinkContainer {
    display: flex;
    & a:not(:last-of-type) {
      margin-right: 10px;
    }
    & img {
      width: 30px;
    }
  }
  &-Copyright {
    display: block;
    margin-top: 10px;
    font-size: 8px;
    line-height: 1.2;
    color: $gray-1;
    font-weight: bold;
  }
}
.open {
  @include lessThan($small) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: block !important;
    width: 100%;
    z-index: z-index-of(opened-side-navigation);
    background-color: $white;
    height: 100%;
    overflow-y: scroll;
  }
}
@include lessThan($tiny) {
  .sp-logo {
    width: 100px;
  }
}
@include largerThan($small) {
  .pc-none {
    display: none;
  }
}
@include lessThan($small) {
  .sp-flex {
    display: flex;
  }
  .sp-none {
    display: none;
  }
}
</style>
