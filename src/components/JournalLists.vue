<template>
  <div class="padding-right">
    <section class="column is-full nav-next-work-section background-black">
      <div class="columns home-scroll-spacing">
        <div class="column is-half no-padding-top">
          <p class="journal-title">Journal</p>
        </div>

        <div class="column is-half padding-top padding-bottom control-worklist-detail overflow">
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
                    <div class="subtitle is-6  padding-top">
                      <p> {{data.date}} : {{data.readingTime}} </p>  
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
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
    font-size: 18rem;
    font-weight: lighter;
    pointer-events: none;
    color:  $main-colorize-color;
  }
  .padding-top{ padding-top: $main-padding;}

  .home-scroll-spacing{
    height: $home-scroll-space-height;
  }

  .control-worklist-detail{
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-left: auto;
  }

  .control-worklist-detail >.work-list-detail{
    border-bottom: 1px solid black;
    align-items: center;
    display: flex;
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
