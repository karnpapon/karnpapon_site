<template>
  <div class="container-ctrl">
    <WorkByYear/>
    <JournalLists/>

  </div>

</template>

<script>
import Header from "../components/Header";
import { mapGetters } from 'vuex'
import WorkByYear from '@/components/WorkByYear'
import JournalLists from '@/components/JournalLists'


export default {
  name: 'Home',
  data(){
    return {
    }
  },
  mounted() {

  },
  components: {
    WorkByYear,
    JournalLists
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

</style>
