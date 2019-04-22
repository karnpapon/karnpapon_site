<template>
  <!-- Header Detail -->
  <section class="column is-full title-detail-level with-padding header-ctrl">
    <div>
      <div class="title detail-level">{{ getWorkDetail.name }}</div>
      <div class="subtitle is-6 padding-top">
        <p>{{ getWorkDetail.description1}}</p>  
        <p>{{ getWorkDetail.description2}}</p>  
      </div>
      <div class="subtitle is-6">
        <p> {{ getWorkDetail.year }} </p> 
      </div>
      <div class="subtitle is-6">
        <p> {{ getWorkDetail.workType }} </p> 
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
  },
  created () {
    this.$store.dispatch(FETCH_SELECTED_WORK, this.$route.params.slug )
  },
  destroyed () {
  },
  components: {
    
  },
  props: {
  },
  computed: {
    ...mapGetters(['isLoading', 'getWorkDetail']),
  },
  methods: {
   
   
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';

  .title-detail-level{
    &:after {
      content: '';
      display: flex;
      position: relative;
      height: 1px;
      background: black;
      margin-top: $main-margin;
    }
  }
</style>
