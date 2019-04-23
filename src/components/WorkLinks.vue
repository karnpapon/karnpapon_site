<template>
  <div class="column is-3 w-light no-padding">
    <div id="overview-console" class="position-sticky">
      <div class="with-padding">
        <div class="flex-wrapper">
          <span class="icon padding-right-small">
              <i class="fas fa-link"></i>
          </span>
          <a target="blank" href="https://github.com/karnpapon">
            <strong> theblack.codes </strong>
          </a>
        </div>

        <div class="flex-wrapper">
          <span class="icon padding-right-small">
              <i class="fab fa-github"></i>
          </span>
          <a target="blank" href="https://github.com/karnpapon">
            <strong> /songkranizer </strong>
          </a>
        </div>
      </div>

      <div class="inline-grid-wrapper with-padding">
        <strong> Category:</strong>
        <span class="tag-cat">graphic design</span>
        <span class="tag-cat">Development</span>
        <span class="tag-cat">illustration</span>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { 
} from "@/store/actions.type";


export default {
  name: 'WorkLinks',
  data(){
    return {
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
  .w-light{ font-weight: lighter; }
 
</style>
