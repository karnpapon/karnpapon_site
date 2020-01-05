<template>
    <div class="container-ctrl scroll-wrapper">
      <NavHelper scrollContainer=".scroll-wrapper"></NavHelper>
      <WorkHeader :dataDetails="getData"/>
      <WorkContent :dataDetails="getData"/>
      <SuggestedWorks :dataDetails="getNextSuggestedItem"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { 
  FETCH_DATA,
  FETCH_ABOUT_DETAILS,
  FETCH_SELECTED_WORK,
  FETCH_SELECTED_JOURNAL,
  FETCH_JOURNAL_DETAILS,
  SET_SCROLL_TO,
  FETCH_NEXT_SUGGESTED
} from "@/store/actions.type";
import jump from 'jump.js'
import { 
  NavHelper,
  SuggestedWorks,
  WorkHeader ,
  WorkContent
} from '@/components'


export default {
  name: 'ContentRender',
  data(){
    return {
      isScrollToTop: false,
    }
  },
  mounted() {
  },
  created () {
    this.getQueryData()
  },
  destroyed () {
  },
  components: {
    NavHelper,
    SuggestedWorks,
    WorkHeader,
    WorkContent,
    // Footer
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['isLoading', 'getData', 'getNextSuggestedItem']),
  },
  methods: {
    setIsScroll(){
      this.isScrollToTop = true
      // prevent stuttering.
      if(window.scrollY > 200){
        this.setScrollToTop()
      }
    },
    setScrollToTop(){
      if(this.isScrollToTop){
        jump('.scroll-wrapper', { duration: this.setScrollSpeed()})
        this.isScrollToTop = false
      }
    },
    setScrollSpeed(){
      let scrollSpeed 
      let clientHeight = document.documentElement.getBoundingClientRect().height

      if(window.scrollY < clientHeight/2){
        scrollSpeed = 1000
      } else {
        scrollSpeed = 1500
      }
      return scrollSpeed
    }, 
    getQueryData(){
      let payload = {}
      let next_suggest_payload = {}
      let p = this.$route.params.slug
      let y = this.$route.params.year
      switch (this.$route.path) {
        case '/about':
          payload = { action: FETCH_ABOUT_DETAILS, params:"" }
          next_suggest_payload = { path: p, theme: "work"}
          break;
        case '/work/' + y + '/' + p:
          payload = { action: FETCH_SELECTED_WORK, params: p }
          next_suggest_payload = { path: p, theme: "work"}
          break;
        case '/journal/' + p:
          payload = { action: FETCH_SELECTED_JOURNAL, params: p }
          next_suggest_payload = { path: p, theme: "journal"}
          break;
        default:
          break;
      }
      this.$store.dispatch(FETCH_DATA, payload)
      this.$store.dispatch(FETCH_NEXT_SUGGESTED, next_suggest_payload )
    },
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';


</style>
