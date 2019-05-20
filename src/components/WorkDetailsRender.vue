<template>
  <div class="column is-6">
    <div class="detail-render">
      <component :is="currentComponent"></component>
      <!-- #region unused -->

      <!-- <div class="column padding-top" v-html="dataRender.contents"></div>

      <div v-if="dataRender.contentImages.length > 0">
        <figure v-for="(img, indexImg) of dataRender.contentImages" :key="indexImg" class="image">
          <img v-if="img.img !== ''" class="img-ctrl" :src="require(`@/assets/images/${img.img}`)">
          <p v-if="img.imgDesc !== ''" class="with-padding-medium"> {{ img.imgDesc}} </p> 
        </figure>
      </div>
     
      <CodeSnippet/>

      <div v-if="dataRender.shareDataDetail.length > 0">
        <LinkShare 
          v-for="(dataShare, indexDataShare) of dataRender.shareDataDetail" 
          :key="indexDataShare"
          :shareDataDetail="dataShare"
        />
      </div> -->

      <!-- #endregion -->
    </div>
  </div>
</template>

<script>

import { 
  seeq,
  theBlackCodesWeb,
  songkranizer,
  ect,
  theBlacksmith,
  about,
  audiotrimmerScript,
  livecodefest,
  bkkDesignWeek,
  bkkThroughPoster,
  asFarAs,
  theBlackCodesAw,
  illustrations,
  tidalCyclesStd,
  journal00,
  journal01,
  journal02
} from '@/markdowns'
import BlogEntries from '../data/blogs.json';
import { CodeSnippet }  from '@/components'
import LinkShare from '@/components/LinkShare'
import { mapGetters } from 'vuex'
import { 
  FETCH_SELECTED_WORK,
  SET_SCROLL_TO 
} from "@/store/actions.type";

export default {
  name: 'WorkDetailsRender',
  data(){
    return {
      markdown: ""
    }
  },
  mounted() {
  },
  created () {
  },
  destroyed () {
  },
  components: {
    CodeSnippet,
    LinkShare,
    'seeq': seeq,
    'the-black-codes-web': theBlackCodesWeb,
    'songkranizer': songkranizer,
    'ect-etc-tec': ect,
    'the-blacksmith': theBlacksmith,
    'about': about,
    'audiotrimmer-scripts': audiotrimmerScript,
    'livecodefest': livecodefest,
    'bkk-through-poster':bkkThroughPoster,
    'bkk-design-week': bkkDesignWeek,
    'as-far-as': asFarAs,
    'the-black-codes-aw': theBlackCodesAw,
    'illustrations': illustrations,
    'td-dailystd': tidalCyclesStd,
    'journal-00':journal00,
    'journal-01':journal01,
    'journal-02':journal02,
  },
  props: {
    dataRender: Object
  },
  computed: {
    currentComponent: function () {
      if(this.$route.path == '/about'){
        return 'about'
      } else {
        return this.$route.params.slug
      }
    },
    ...mapGetters(['isLoading']),
  },
  methods: {
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';

  .img-ctrl{ 
    background-size: cover;  
    padding-bottom: $main-padding;
    padding: $medium-padding;
  }

  .detail-render{
    /deep/ {
      *{
        margin: 20px 0;
        padding: initial;
        list-style: initial;
      }

      a{
        font-weight: bolder;
        &:hover{
          color: $secondary-color !important;
        }
      }

      ul{
        padding: 0 40px;
        li {margin: 0px 0;}
      }

      ol{ padding: 0 40px;}

      img{ margin-bottom: 0;}

      blockquote{
        text-align: center;
        >p {
          font-size: 1.5rem;
          font-style: italic;
          font-weight: lighter;
          font-family: Georgia, 'Times New Roman', Times, serif;
        }
      }

      hr{
        background-color: black;
        height: .5px;
      }

      iframe{
        width: 100%;
        height: 315px;
      }

      small{ 
        color: $secondary-color;
        font-style: italic;
      }

      pre {
        padding: 20px;
      }

      h1,h2,h3,h4{
        font-weight: 500;
      }

      h1{ font-size: x-large;}
      h2{ font-size: large;}
      h3{ font-size: larger;}
      h4{ font-size: medium;}
    }
  }
</style>
