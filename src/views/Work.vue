<template>
    <div class="container-ctrl scroll-wrapper">
      <NavHelper scrollContainer=".scroll-wrapper"></NavHelper>
      <WorkHeader/>
      <WorkContent/>
      <SuggestedWorks/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { 
  FETCH_SELECTED_WORK,
  SET_SCROLL_TO 
} from "@/store/actions.type";
import jump from 'jump.js'
import Footer from '@/components/Footer'
import NavHelper from '@/components/NavHelper'
import SuggestedWorks from '@/components/SuggestedWorks'
import WorkHeader from '@/components/WorkHeader'
import WorkContent from '@/components/WorkContent'


export default {
  name: 'Work',
  data(){
    return {
      isScrollToTop: false,
    }
  },
  mounted() {
  },
  created () {
    this.$store.dispatch(FETCH_SELECTED_WORK, this.$route.params.slug )
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
    msg: String
  },
  computed: {
    ...mapGetters(['isLoading', 'getWorkDetail']),
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
