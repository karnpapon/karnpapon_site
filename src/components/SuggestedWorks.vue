<template>
  <section id="suggested-work-theme" class="column is-full nav-next-work-section scroll-spacing no-padding">
      <div class="column is-half no-padding-top suggested-title">
        <div class="title detail-level padding-top-3rem">Project</div>
      </div>
    
      <div class="column is-half no-padding control-worklist-detail">
        <div 
          v-for="( data, index ) of dataDetails" 
          class="work-list-detail with-padding suggested-work"
          :key="index"
          @mouseover="handleShowPreview(data.thumbnail, index)"
          @mouseleave="handleHidePreview(data)"
          @click="handleClick(data)"
        >
        <div class="flex-wrapper">
          <span class="icon icon-size-2x">
            <i v-if="index == 0" class="fas padding-top padding-right fa-arrow-left"/>
            <i v-else class="fas padding-top padding-right fa-arrow-right"/>
          </span>
          <div class="next-item-wrapper">
            <p class="title is-3">{{data.name}}</p>
            <div class="subtitle is-6  padding-top desc">
              <p>{{ data.description1}}</p>  
              <p>{{ data.description2}}</p>  
            </div>
          </div>
        </div>
          
        </div>
        
      </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { 
  FETCH_NEXT_SUGGESTED,
  FETCH_SELECTED_WORK,
  FETCH_SELECTED_JOURNAL,
  SET_SCROLL_TO 
} from "@/store/actions.type";

export default {
  name: 'SuggestedWorks',
  data(){
    return {
      hover: false,
      thumbnailTarget: "",
    }
  },
  mounted() {
    this.setTheme()
  },
  created () {
  },
  destroyed () {
  },
  components: {
  },
  props: {
    dataDetails: Array
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
    setTheme(){
      const target = document.getElementById("suggested-work-theme")
      switch (this.dataDetails[0].theme) {
        case 'about':
          target.classList.add("theme-about") 
          break;
        case 'work':
          target.classList.add("theme-work") 
          break;
        case 'journal':
          target.classList.add("theme-journal") 
          break;
        default:
          break;
      }
    },
     handleShowPreview(img, index){
      if(this.hover){ return; }
      this.hover = true
      this.thumbnailTarget = document.getElementsByClassName("suggested-title")[0]
      this.thumbnailTarget.classList.add("thumbnail-placeholder")
      this.thumbnailTarget.style.backgroundImage = `url(${img})`
    },
    handleHidePreview(data){
      this.hover = false 
      this.thumbnailTarget.classList.remove("thumbnail-placeholder")
      this.thumbnailTarget.style.backgroundImage = 'unset'
    },
    handleClick(selected){
      const t = selected.theme
      const p = this.$route.params.slug
      const payload = {path: p, theme: t }
      if(selected.theme == 'journal'){
        const selectedPayload = { selected: p}
        this.$store.dispatch(FETCH_SELECTED_JOURNAL, selectedPayload )
      } else {
        this.$store.dispatch(FETCH_SELECTED_WORK, selected.slug ) 
      }
      if(selected.theme == 'journal'){
        this.$router.push({ path: '/' + selected.theme + '/' + selected.slug })
      } else {
        this.$router.push({ path: '/' + selected.theme + '/' + selected.year + '/' + selected.slug })
      }
      this.$store.dispatch(FETCH_NEXT_SUGGESTED, payload)
    }
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';

  .control-worklist-detail{
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .control-worklist-detail >.work-list-detail{
    border-bottom: 1px solid $color-black;
    align-items: center;
    display: flex;
  }

  .control-worklist-detail >.work-list-detail ~.work-list-detail{
   border-bottom: unset !important;
  }

  .suggested-title{
    /* width: 100%; */
    /* height: 100%; */
  }

   .thumbnail-placeholder{
    background-size: cover;
    background-repeat: no-repeat;
    >div {color: white;}
    /* -webkit-text-stroke: 2px white; */
  }

  .desc{
     @media screen and(max-width: $mobile-screen){
      /* display: none; */
      p{
        margin-top: 10px;
        font-size: 1rem !important;
        &:last-child{ display: none;}
      }
    }
  }

  .theme-about{}
  .theme-work{}
  .theme-journal{
    background-color: $color-black;
    border-top: 1px solid white;
    p, i, div{ color: white;}
    .control-worklist-detail > .work-list-detail{ border-bottom: 1px solid white;}
    .work-list-detail{ &:hover{ background-color: white; p, i{color: $color-black;}} }
  }

</style>
