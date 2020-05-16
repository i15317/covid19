<template>
  <div class="Information">
    <h2 class="Information-Heading">
      {{ $t('香川県内の交通機関への影響について') }}
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <TextCard :title="item.title" :body="item.body" />
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
  body: string
}

export default Vue.extend({
  components: {
    TextCard
  },
  data(): ItemData {
    return {
      items: [
        {
          title: `1. ${this.$t('JR四国')}`,
          body: [
            '   <a href="http://www.jr-shikoku.co.jp/03_news/press/2020%2004%2003.pdf" target="_blank" rel="noopener">' +
              this.$t('一部定期列車で運休が発生しています') +
              '</a>',
            '<ul type="circle" style="border: 1pt red dashed;">' +
              this.$t(
                '<li>' +
                  '高徳線（特急列車）特急うずしお号の一部列車に運休が発生しています' +
                  '</li>' +
                  '<li>' +
                  '特急しおかぜ・いしづちの一部列車に運休が発生しています' +
                  '</li>' +
                  '<li>' +
                  '特急南風・しまんとの一部列車に運休が発生しています' +
                  '</li>' +
                  '<li>' +
                  '特急ミッドナイトEXP（土曜）及び モーニングEXP（日曜日）全区間運転見合わせ' +
                  '</li>'
              ) +
              '</ul>',
            '<ul type="circle" style="border: 1pt skyblue dashed">' +
              this.$t('<li>' + '予讃線（普通列車）：高松～多度津間' + '</li>') +
              this.$t('<li>' + '土讃線（普通列車）：多度津～琴平間' + '</li>') +
              this.$t('<li>' + '高徳線（普通列車）：高松～引田間' + '</li>') +
              '</ul>',
            '   <a href="http://www.jr-shikoku.co.jp/03_news/press/2020%2003%2030%2001.pdf" target="_blank" rel="noopener">' +
              this.$t('一部観光列車で運休が発生しています') +
              '</a>',
            '<ul type="circle" style="border: 1pt olive dashed">' +
              this.$t('<li>' + '伊予灘ものがたり' + '</li>') +
              this.$t('<li>' + '四国まんなか千年ものがたり' + '</li>') +
              this.$t('<li>' + 'ゆうゆうアンパンマンカー増結中止' + '</li>') +
              this.$t('<li>' + '瀬戸大橋アンパンマントロッコ' + '</li>') +
              this.$t('<li>' + '志国土佐 時代の夜明けのものがたり' + '</li>') +
              '</ul>',
            '<strong style="border-bottom: 2pt red solid;margin:3pt;font-size:120%;">' +
              this.$t(
                '快速マリンライナーの一部列車は児島～高松間が運休となっています'
              ) +
              '</strong>'
          ].join('<br />')
        },
        {
          title: `2. ${this.$t('ことでん（電車）')}`,
          body: [
            this.$t('4/29より琴平・長尾・志度線で減便を行います'),
            '<a href="http://www.kotoden.co.jp/publichtm/kotoden/new/2020/korona_timetable/index.html" target="_blank" rel="noopener">' +
              this.$t('詳しくはこちらへ') +
              '</a>'
          ].join('<br />')
        }
      ]
    }
  },
  head: (): MetaInfo => ({
    title: '県内の交通機関への影響'
  })
})
</script>

<style lang="scss">
.Parent {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
</style>
