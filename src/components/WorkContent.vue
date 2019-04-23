<template>
  <section class="container is-fullhd detail-section">
    <div id="content-theme" class="columns detail-wrapper no-margin-tb">
      <WorkLinks/>
      <WorkDetailsRender/>
    </div>
    <!-- work scroll-spacing: preserve space. -->
    <div class="column is-full scroll-spacing no-pointer-event"></div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { 
  FETCH_SELECTED_WORK,
  SET_SCROLL_TO 
} from "@/store/actions.type";
import WorkDetailsRender from "@/components/WorkDetailsRender"
import WorkLinks from "@/components/WorkLinks"


export default {
  name: 'WorkContent',
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
    WorkDetailsRender,
    WorkLinks
  },
  props: {
    dataDetails: Object
  },
  computed: {
    ...mapGetters(['isLoading', 'getWorkDetail']),
  },
  methods: {
    setTheme(){
      const target = document.getElementById("content-theme")

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

  .w-light{ font-weight: lighter; }

  .theme-journal /deep/{ 
    background-color: $color-black; 
     p, strong, span, a, i, div { 
      color: white !important;
    }
    .tag-cat { 
      border: 1px solid white;
     &:hover{
        background-color: white;
        color: $color-black !important;
        cursor: pointer;
      } 
    }

    .code-snippet{ p{ color: $color-black !important;}}
    .media-content{ p, i, strong{ color: $color-black !important;}}
  }
</style>
