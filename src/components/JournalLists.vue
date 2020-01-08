<template>
    <section class="column is-full nav-next-work-section background-black">
      <div class="columns home-scroll-spacing">
        <div class="column is-half title-wrapper">
          <p class="journal-title">Journal</p>
        </div>

        <div class="journal-lists">
          <div class="scrollable">
            <div 
              v-for="( data, index ) of getJournalDetails" 
              class="journal-list-select"
              :key="index"
            >
              <!-- <router-link 
                :to="{ path: '/journal/' + data.slug}" 
                exact 
              > -->
                <div class="flex-wrapper">
                  <div class="next-item-wrapper">
                    <p class="title is-3">{{data.name}}</p>
                    <div class="subtitle is-6  journal-lists-subtitle">
                      <p> {{data.date}} : {{data.readingTime}} </p>  
                    </div>
                  </div>
                </div>
              <!-- </router-link> -->
            </div>
          </div>
        </div>
        <dir class="footer-h-space"></dir>
      </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import {FETCH_JOURNAL_DETAILS} from "@/store/actions.type"

export default {
  name: 'JournalLists',
  data(){
    return {
    }
  },
  mounted() {
  },
  created(){
    this.$store.dispatch(FETCH_JOURNAL_DETAILS)
  },
  components: {
  },
  props: {
  },
  computed: {
  ...mapGetters(['isLoading', 'getJournalDetails']),
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_base.scss';

  .title-wrapper{
    padding-top: 0;
    flex-basis: initial;
  }
 
  .journal-title{
    font-size: 20vw;
    font-weight: lighter;
    pointer-events: none;
    color:  $secondary-color;
  }

  .journal-lists{
    padding-top: $main-padding;
    padding-bottom: $main-padding;
    overflow: hidden;

    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

     @media screen and(max-width: $mobile-screen){
      display: block;
      padding-top: 0;
    }
  }

  .home-scroll-spacing{
    height: $home-scroll-space-height;

    @media screen and(max-width: $mobile-screen){
      height: calc(100vh - 50px);
      display: flex;
      flex-direction: column;
    }
  }

  .journal-lists-subtitle{
    padding-top: $main-padding;
    @media screen and(max-width: $mobile-screen){
      p{font-size: 1rem !important;}
    }
  }

   .footer-h-space{
    height: 50px;
    width: 100%;
    display: none;

    @media screen and(max-width: $mobile-screen){
      display: block;
    }

  }

  .journal-list-select{
    border-bottom: 1px solid white;
    padding: $main-padding;
    &:hover{
      cursor: pointer;
      background-color: $main-color;
     p{ color: $color-black}
    }
    &:last-child{ border-bottom: unset ;}
  }

</style>
