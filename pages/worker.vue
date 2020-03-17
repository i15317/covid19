<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <TextCard
        :title="$t(item.title)"
        :link="item.link"
        :body="$t(item.body)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import TextCard from '@/components/TextCard.vue'

type ItemData = {
  items: Item[]
}

type Item = {
  title: string
  link: string
  body: string
}

export default Vue.extend({
  components: {
    TextCard
  },
  data: (): ItemData => ({
    items: [
      {
        title: '経営に関する相談窓口',
        link:
          'https://www.pref.kagawa.lg.jp/content/dir1/dir1_6/dir1_6_2/w4ug21200315195814.shtml#02',
        body:
          'リンク先で香川県が提供している中小企業対策相談窓口と経産省が開設した窓口に関する情報がまとまっています。'
      },
      {
        title: '頑張れ香川（中小企業振興融資制度）',
        link: 'https://www.pref.kagawa.lg.jp/shoko/yuushi/yuushi/index.html',
        body:
          '新型コロナウイルス感染症の拡大の影響を受けている事業者の方々への資金繰りを支援します。'
      },
      {
        title: 'その他金融支援に関する情報',
        link:
          'https://www.pref.kagawa.lg.jp/content/dir1/dir1_6/dir1_6_2/w4ug21200315195814.shtml#03',
        body:
          '厚生労働省や経済産業省が提供している金融支援について香川県がまとめているページへジャンプします。'
      }
    ]
  }),
  head: (): MetaInfo => ({
    title: '企業の皆様・はたらく皆様へ'
  })
})
</script>

<style lang="scss">
.Worker {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
</style>
