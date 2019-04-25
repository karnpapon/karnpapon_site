<template>
  <section 
    id="header-render"
    class="column is-full title-detail-level with-padding"
  >
    <div v-if="dataDetails.theme == 'journal'">
      <div class="title detail-level is-1">
         <p>{{ dataDetails.description1}}</p>  
        <p>{{ dataDetails.description2}}</p>  
      </div>
      <div class="subtitle is-6 padding-top">
        <p>{{ dataDetails.description1}}</p>  
        <p>{{ dataDetails.description2}}</p>  
      </div>
    </div>
    <div v-else>
      <div class="title detail-level">{{ dataDetails.name }}</div>
      <div class="subtitle is-6 padding-top">
        <p>{{ dataDetails.description1}}</p>  
        <p>{{ dataDetails.description2}}</p>  
      </div>
      <div class="subtitle is-6">
        <p> {{ dataDetails.year }} </p> 
      </div>
      <div class="subtitle is-6">
        <p> {{ dataDetails.workType }} </p> 
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
  name: 'WorkHeader',
  data(){
    return {
     
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
    dataDetails: Object
  },
  computed: {
    ...mapGetters(['isLoading', 'getSelectedWork']),
  },
  methods: {
    setTheme(){
      const target = document.getElementById("header-render")

      switch (this.dataDetails.theme) {
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
    }
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';

  .title-detail-level{
    border-bottom: 1px solid $color-black;
  }

  .theme-work{
    background-color: $main-color;
  }
  .theme-about{
    background-color: $color-black;
    div, p {color: white;}
  }
  .theme-journal{
    background-color: $color-black;
    border-bottom: 1px solid white;
    div, p {color: white;}
  }

</style>
