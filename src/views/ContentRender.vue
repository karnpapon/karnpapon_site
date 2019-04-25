<template>
    <div class="container-ctrl scroll-wrapper">
      <NavHelper scrollContainer=".scroll-wrapper"></NavHelper>
      <WorkHeader :dataDetails="dataDetails"/>
      <WorkContent :dataDetails="dataDetails"/>
      <SuggestedWorks :dataDetails="dataDetails"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { 
  FETCH_ABOUT_DETAILS,
  FETCH_SELECTED_WORK,
  FETCH_JOURNAL_DETAILS,
  SET_SCROLL_TO 
} from "@/store/actions.type";
import jump from 'jump.js'
import Footer from '@/components/Footer'
import NavHelper from '@/components/NavHelper'
import SuggestedWorks from '@/components/SuggestedWorks'
import WorkHeader from '@/components/WorkHeader'
import WorkContent from '@/components/WorkContent'


export default {
  name: 'ContentRender',
  data(){
    return {
      isScrollToTop: false,
      dataDetails: ""
    }
  },
  mounted() {
    this.getData()
  },
  created () {
    this.getDataFromRoutePath()
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
    ...mapGetters(['isLoading', 'getSelectedWork', 'getAboutDetail', 'getJournalDetails']),
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
    getDataFromRoutePath(){
      switch (this.$route.path) {
        case '/about':
          this.$store.dispatch(FETCH_ABOUT_DETAILS) 
          break;
        case '/work/seeq':
          this.$store.dispatch(FETCH_SELECTED_WORK, this.$route.params.slug ) 
          break;
        case '/journal':
          this.$store.dispatch(FETCH_JOURNAL_DETAILS) 
          break;
        default:
          break;
      }
    },
    getData(){
       switch (this.$route.path) {
        case '/about':
          this.dataDetails = this.getAboutDetail
          break;
        case '/work/seeq':
          this.dataDetails = this.getWorkDetail
          break;
        case '/journal':
          this.dataDetails = this.getJournalDetails
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';


</style>
