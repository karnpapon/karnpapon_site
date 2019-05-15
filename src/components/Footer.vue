<template>
  <div v-if="currentRoute !== '/' " class="footer-container column is-full no-padding">
    <div 
      v-if="isShowOverview"
      class="overview-wrapper column is-full"
    >
      <div class="overview-container">
        <div class="columns is-full ov-lists">
          <div 
            v-for="(list, index) of getWorksByYear" :key="index" 
            class="column with-padding"
            :class="['is-' + list.widthRatio]"
          >
            <p class="title is-6 padding-top-small">{{ list.year }}</p>
            <div 
              v-for="(itemlist , itemindex) of list.works" :key="itemindex" 
              class="padding-top-medium list-overview"
              v-on:click="selectWork(itemlist)"
            >
              <router-link 
                :to="{ path: `/work/${itemlist.year}/${itemlist.slug}`}" 
                active-class="active"
                exact 
              >
              <p class="subtitle is-6">{{ itemlist.name }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-wrapper">
      <div 
        class="footer footer-ctl column is-1 footer-overview"
        @click="toggleOverview"
        :class="{'no-border-top': isShowOverview }"
      >
        <div class="level">
          <span class="icon padding-right-small">
            <i class="fas fa-arrow-up"></i>
          </span>
          <span class="icon padding-right-small">
            <i class="fas fa-network-wired"></i>
          </span>
        </div>
      </div>

      <div class="footer footer-ctl column is-11">
        <div class="level">
          <div 
          @click="handleClick(undefined,'about')"
           class="level-left left-col">
            <div class="go-about">
              <p><strong> Karnpapon </strong></p>
            </div>
            <span class="icon "><i class="fab fa-creative-commons"></i></span>
            <p class="w-medium cc-details">CC BY NC SA 4.0</p>
            <div class="credits">
            <p> crafted by </p>  
            <span class="icon">
                <a target="blank" href="https://vuejs.org/">
                  <i class="fab fa-vuejs"></i>
                </a>
              </span>
              +
              <span class="icon">
                <a target="blank" href="https://bulma.io">
                  <i class="fab fa-bootstrap"></i>
                </a>
              </span> 
              <p> + love. </p>
            </div>
          </div>
          <div class="level-right right-col">
            <span class="icon icon-size-2x">
              <a target="blank" href="https://twitter.com/snuffvideo1">
                <i class="fab fa-twitter"></i>
              </a>
            </span>
            <span class="icon icon-size-2x">
              <a target="blank" href="https://github.com/karnpapon">
                <i class="fab fa-github"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="footer-container column is-full no-padding">
      <div class="footer-wrapper">
        <div class="footer footer-ctl column is-11 full-width">
          <div class="level">
            <div 
            @click="handleClick(undefined,'about')"
              class="level-left left-col">
              <div class="go-about">
                <p><strong> Karnpapon </strong></p>
              </div>
              <span class="icon "><i class="fab fa-creative-commons"></i></span>
              <p class="w-medium cc-details">CC BY NC SA 4.0</p>
              <div class="credits">
              <p> crafted by </p>  
              <span class="icon">
                  <a target="blank" href="https://vuejs.org/">
                    <i class="fab fa-vuejs"></i>
                  </a>
                </span>
                +
                <span class="icon">
                  <a target="blank" href="https://bulma.io">
                    <i class="fab fa-bootstrap"></i>
                  </a>
                </span> 
                <p> + love. </p>
              </div>
            </div>
            <div class="level-right right-col">
              <span class="icon icon-size-2x">
                <a target="blank" href="https://twitter.com/snuffvideo1">
                  <i class="fab fa-twitter"></i>
                </a>
              </span>
              <span class="icon icon-size-2x">
                <a target="blank" href="https://github.com/karnpapon">
                  <i class="fab fa-github"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { 
  FETCH_NEXT_SUGGESTED,
  FETCH_SELECTED_WORK, 
  SET_SCROLL_TO_TRUE,
  FETCH_WORKS_BY_YEAR
} from "@/store/actions.type";
import { mapGetters } from 'vuex'

export default {
  name: "Footer",
  data(){
    return { 
      currentRoute: "",
      isShowOverview: false,
    }
  },
  methods: {
     handleClick(data, route){
       if(route == 'about'){
         this.$router.push({ path: '/about' })
       } else if ( route == 'work'){
         this.$router.push({ path: `/work/${data.year}/${data.slug}` })
       }
    },
    toggleOverview(){
      this.isShowOverview = !this.isShowOverview
    },
    selectWork( selectedWork){
      const t = "work"
      const p = this.$route.params.slug
      const payload = {path: p, theme: t }
      this.$store.dispatch(FETCH_SELECTED_WORK, selectedWork.slug )
      this.toggleOverview()
      this.$store.dispatch(FETCH_NEXT_SUGGESTED, payload)
      // Work.methods.setIsScroll()
    }
  },
  mounted(){
  },
  created(){
    this.$store.dispatch( FETCH_WORKS_BY_YEAR )
    // const unwatch = this.$watch( () => 
    //   this.$route,(route, prevRoute) => {
    //   this.currentRoute = route.path
    //   unwatch()
    // })
  },
  computed: {
    // watchedRoute(){
    //   this.$route.beforeEach(( to, from, next ) => {
    //     this.currentRoute = 'default'
    //     next()
    //   })
    // },
    ...mapGetters(['isLoading', 'getWorksByYear']),
  },
  props: {
    currentPath: String
  }
}
</script>


<style lang="scss" scoped>
  @import '../assets/styles/_base.scss';
 
  .footer-ctl{ 
    padding: 1rem 1.5rem;
    width: 100%;
    bottom: 0;
    border-top: 1px solid $color-black;
    right: 0;

    p{ color: $color-black;}
  }

  .footer-overview{
    border-right: 1px solid $color-black;
    left: 0;
    padding-left: 15px;
    justify-content: center;
    display: flex;

    p{ font-weight: bolder;}
    i{ color: $color-black;}

    &:hover{ 
      user-select: none;
      cursor: pointer;
      background-color: $color-black;
      >div p {color: white;}
      >div i {color: white;}
    }


    @media screen and(max-width: $mobile-screen){
      flex-grow: 0;
    }
  }

  .w-medium{
    font-weight: 500;
  }

  .cc-details{
    display: flex;

    @media screen and(max-width: $mobile-screen){
      display: none;
      /* font-size: 0.8rem; */
    }
  }

  .credits{ 
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    border: 1px solid;
    border-radius: 5px;
    margin-left: $main-padding;
    padding-left: $medium-padding;
    padding-right: $medium-padding;

    &:hover{
      background-color: $color-black;
      p {color: white;}
      i {color: white;}
    }

    @media screen and(max-width: $mobile-screen){
      display: none;
    }
  }

  .left-col{
    justify-content: space-between;

    @media screen and(max-width: $mobile-screen){
      display: flex;
      justify-content: normal;
    }

  }

  .ov-lists{
   @media screen and(max-width: $mobile-screen){
      display: flex;
    }
  }

  .right-col{
    width: 50px;
    display: flex;
    justify-content: space-between;

     @media screen and(max-width: $mobile-screen){
        margin-top: 0 !important;
        margin-left: auto;
    }
  }

  .icon-size-2x{ 
    font-size: 1.5em;
    cursor: pointer;
    &:hover{
      i{
        color: $hover-color;
      }
    }
  }

  .overview-container{
    width: 100%;
  }

  .overview-wrapper{
    display: flex;
    background-color: white;
    border-top: 1px solid;
    min-height: $scroll-space-height;
  }

  .list-overview{
    transition: 200ms;
    p { color: $color-black;};
    &:hover{
      p{
        color: $hover-color;
        cursor: pointer;
      }
    }
  }

  .level{
     @media screen and(max-width: $mobile-screen){
      display: flex !important;
    }
  }

  .footer-container{ 
    position: fixed;
    bottom: 0;
    z-index: 5;
    width: 100%;
  }

  .footer-wrapper{ 
    display: flex;
    width: 100%;
  }

  .footer{ background-color: white;}

  .go-about{
    color: $color-black;
    &:hover{
      cursor: pointer;
      strong{color: $hover-color !important;}
    }
  }
</style>
