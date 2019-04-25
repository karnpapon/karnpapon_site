<template>
  <div class="container-ctrl">
    <WorkByYear :dataList="getWorksByYear"/>
    <JournalLists/>

  </div>

</template>

<script>
import Header from "../components/Header";
import { mapGetters } from 'vuex'
import WorkByYear from '@/components/WorkByYear'
import JournalLists from '@/components/JournalLists'
import { 
  FETCH_WORKS,
  FETCH_WORKS_BY_YEAR
} from "@/store/actions.type";


export default {
  name: 'Home',
  data(){
    return {
    }
  },
  mounted() {
  },
  created(){
    this.$store.dispatch( FETCH_WORKS_BY_YEAR )
  },
  components: {
    WorkByYear,
    JournalLists
  },
  props: {

  },
  computed: {
    ...mapGetters(['isLoading', 'getSelectedWork', 'getWorksByYear']),
  },
  methods: {
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';

</style>
