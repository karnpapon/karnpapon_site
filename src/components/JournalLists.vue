<template>
  <div class="padding-right">
    <section class="column is-full nav-next-work-section background-black">
      <div class="columns home-scroll-spacing">
        <div class="column is-half no-padding-top no-flex-basis">
          <p class="journal-title">Journal</p>
        </div>

        <div class="padding-top padding-bottom control-worklist-detail overflow">
          <div class="scrollable">
            <div 
              v-for="( data, index ) of getJournalDetails" 
              class="journal-list-select with-padding"
              :key="index"
            >
              <router-link 
                :to="{ path: '/journal/' + data.slug}" 
                exact 
              >
                <div class="flex-wrapper">
                  <div class="next-item-wrapper">
                    <p class="title is-3">{{data.name}}</p>
                    <div class="subtitle is-6  padding-top journal-lists-subtitle">
                      <p> {{data.date}} : {{data.readingTime}} </p>  
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <dir class="footer-h-space"></dir>
      </div>
    </section>
  </div>
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

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';
 
  .journal-title{
    font-size: 20vw;
    font-weight: lighter;
    pointer-events: none;
    color:  $secondary-color;
  }
  .padding-top{ padding-top: $main-padding;}

  .home-scroll-spacing{
    height: $home-scroll-space-height;

    @media screen and(max-width: $mobile-screen){
      height: calc(100vh - 50px);
      display: flex;
      flex-direction: column;
    }
  }

  .control-worklist-detail{
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

  .journal-lists-subtitle{
    @media screen and(max-width: $mobile-screen){
      p{font-size: 1rem !important;}
    }
  }

  .control-worklist-detail >.work-list-detail{
    border-bottom: 1px solid black;
    align-items: center;
    display: flex;
  }

  .footer-h-space{
    height: 50px;
    width: 100%;
    display: none;

    @media screen and(max-width: $mobile-screen){
      display: block;
    }

  }

  .works-wrapper{
    height: 100%; 
    &:last-child{
      .control-worklist-detail{
        div {
          &:last-child{
            border-bottom: unset;
          }
        }
      }
    }
  }

  .work-list-detail{
    height: 100%;
    width: 100%;

    &:hover{
      cursor: pointer;
      background-color: $color-black;
     p{ color: white;}
     i{ color: white;}
    }
  }

  .journal-list-select{
    border-bottom: 1px solid white;
    p{ color: white !important;}
    &:hover{
      cursor: pointer;
      background-color: $main-color;
     p{ color: $color-black !important;}
    }
    &:last-child{ border-bottom: unset ;}
  }

</style>
