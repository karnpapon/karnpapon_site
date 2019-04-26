<template>
    <div class="container-ctrl scroll-wrapper">
      <NavHelper scrollContainer=".scroll-wrapper"></NavHelper>
      <WorkHeader :dataDetails="getSelectedJournal"/>
      <WorkContent :dataDetails="getSelectedJournal"/>
      <SuggestedWorks :dataDetails="getNextSuggestedItem"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { 
  FETCH_NEXT_SUGGESTED,
  FETCH_SELECTED_JOURNAL,
  SET_SCROLL_TO 
} from "@/store/actions.type";
import jump from 'jump.js'
import Footer from '@/components/Footer'
import NavHelper from '@/components/NavHelper'
import SuggestedWorks from '@/components/SuggestedWorks'
import WorkHeader from '@/components/WorkHeader'
import WorkContent from '@/components/WorkContent'


export default {
  name: 'Journal',
  data(){
    return {
      isScrollToTop: false,
    }
  },
  mounted() {
  },
  created () {
    const t = "journal"
    const p = this.$route.params.slug
    const payload = {path: p, theme: t }
    const selectedPayload = { selected: p}
    this.$store.dispatch(FETCH_SELECTED_JOURNAL, selectedPayload )
    this.$store.dispatch(FETCH_NEXT_SUGGESTED, payload )
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
    ...mapGetters(['isLoading', 'getJournalDetails', 'getSelectedJournal',  'getNextSuggestedItem']),
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
