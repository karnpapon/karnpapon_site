<template>
  <section id="suggested-work-theme" class="column is-full nav-next-work-section">
    <div class="columns scroll-spacing">
      <div class="column is-half no-padding-top">
        <div class="title detail-level padding-top-3rem">Project</div>
      </div>
    
      <div class="column is-half no-padding-top no-padding-bottom no-padding-right control-worklist-detail">
        <div 
          v-for="( data, index ) of dataDetails" 
          class="work-list-detail with-padding suggested-work"
          :key="index"
          @click="handleClick(data)"
        >
        <div class="flex-wrapper">
          <span class="icon icon-size-2x">
            <i v-if="index == 0" class="fas padding-top padding-right fa-arrow-left"/>
            <i v-else class="fas padding-top padding-right fa-arrow-right"/>
          </span>
          <div class="next-item-wrapper">
            <p class="title is-3">{{data.name}}</p>
            <div class="subtitle is-6  padding-top">
              <p>{{ data.description1}}</p>  
              <p>{{ data.description2}}</p>  
            </div>
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
  SET_SCROLL_TO 
} from "@/store/actions.type";
import Work from '@/views/Work'

export default {
  name: 'SuggestedWorks',
  data(){
    return {
      worklists: [
        { title: "Kinjai Gallery", detail1: "custom sequencer", detail2: 'custom detail 2', icon: 'left'},
        { title: "Rewind to the next", detail1: "custom detail1", detail2: 'custom detail2', icon: 'right'},
      ]
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
    handleClick(selected){
      this.$store.dispatch(FETCH_SELECTED_WORK, selected.slug )
      this.$router.push({ path: '/work/' + selected.slug })
      this.$store.dispatch(FETCH_NEXT_SUGGESTED, this.$route.params.slug)
      Work.methods.setIsScroll()
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
   border-bottom: unset;
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
