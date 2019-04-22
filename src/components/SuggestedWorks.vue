<template>
  <section class="column is-full nav-next-work-section">
    <div class="columns scroll-spacing">
      <div class="column is-half no-padding-top">
        <div class="title detail-level padding-top-3rem">Project</div>
      </div>
    
      <div class="column is-half no-padding-top no-padding-bottom no-padding-right control-worklist-detail">
        <div 
          v-for="( data, index ) of worklists" 
          class="work-list-detail with-padding"
          :key="index"
        >
        <div class="flex-wrapper">
          <span class="icon icon-size-2x">
            <i 
              class="fas padding-top padding-right"
              :class="['fa-arrow-' + data.icon]"
            >
            </i>
          </span>
          <div class="next-item-wrapper">
            <p class="title is-3">{{data.title}}</p>
            <div class="subtitle is-6  padding-top">
              <p>{{ data.detail1}}</p>  
              <p>{{ data.detail2}}</p>  
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
  FETCH_SELECTED_WORK,
  SET_SCROLL_TO 
} from "@/store/actions.type";

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
  },
  created () {
  },
  destroyed () {
  },
  components: {
    
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
  
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

</style>
