<template>
    <div class="container-ctrl scroll-wrapper">
      <NavHelper scrollContainer=".scroll-wrapper"></NavHelper>
      <WorkHeader :dataDetails="getAboutDetail"/>
      <WorkContent :dataDetails="getAboutDetail"/>
      <SuggestedWorks :dataDetails="getNextSuggestedItem"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { 
  FETCH_NEXT_SUGGESTED,
  FETCH_ABOUT_DETAILS,
  SET_SCROLL_TO 
} from "@/store/actions.type";
import jump from 'jump.js'
import Footer from '@/components/Footer'
import NavHelper from '@/components/NavHelper'
import SuggestedWorks from '@/components/SuggestedWorks'
import WorkHeader from '@/components/WorkHeader'
import WorkContent from '@/components/WorkContent'


export default {
  name: 'About',
  data(){
    return {
      isScrollToTop: false,
    }
  },
  mounted() {
  },
  created () {
    const t = "work"
    const p = this.$route.params.slug
    const payload = {path: p, theme: t }
    this.$store.dispatch(FETCH_ABOUT_DETAILS )
    this.$store.dispatch(FETCH_NEXT_SUGGESTED, payload)
  },
  destroyed () {
  },
  components: {
    NavHelper,
    SuggestedWorks,
    WorkHeader,
    WorkContent
  },
  props: {

  },
  computed: {
    ...mapGetters(['isLoading', 'getAboutDetail','getNextSuggestedItem']),
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
   
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';


</style>
