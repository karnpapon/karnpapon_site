<template>
  <div class="column is-6">
    <div class="detail-render">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>

import md from '@/markdowns'
import BlogEntries from '../data/blogs.json';
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
  props: {
    dataRender: Object
  },
  computed: {
    currentComponent: function () {
      if(this.$route.path == '/about'){
        return md.filter( item => 'about' == item.id )[0].component
      } else {
        return md.filter( item => this.$route.params.slug == item.id )[0].component
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
