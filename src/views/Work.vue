<template>
    <div class="container-ctrl scroll-wrapper">

        <div 
          class="back-to-top" 
          :class="{'show' :isShowBackToTopBtn}"
          @click="goToTop"
        >
          <span class="icon padding-right-small">
            <i class="far fa-arrow-alt-circle-up"></i>
          </span>
        </div>

      <!-- Header Detail -->
      <section class="column is-full title-detail-level with-padding">
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

      <section class="container is-fullhd detail-section">
        <div class="columns detail-wrapper">

          <!--  work detail: overview -->
          <div class="column is-3 w-light no-padding">
            <div 
              id="overview-console" 
              class="position-sticky"
            >
              <div class="with-padding">
                <div class="flex-wrapper">
                  <span class="icon padding-right-small">
                      <i class="fas fa-link"></i>
                  </span>
                  <a target="blank" href="https://github.com/karnpapon">
                    <p> theblack.codes </p>
                  </a>
                </div>

                <div class="flex-wrapper">
                  <span class="icon padding-right-small">
                      <i class="fab fa-github"></i>
                  </span>
                  <a target="blank" href="https://github.com/karnpapon">
                    <p> /songkranizer </p>
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
            

          <!--  work detail: Body -->
          <div 
            class="column is-6"
            @click="toggleOverviewClose"
          >
            <div>
              <div class="column is-10 padding-top">
                <p>
                  Each letter of the alphabet is an operation, 
                  lowercase letters operate on bang, uppercase letters operate each frame.
                  Orca is designed to control other applications, 
                  create procedural sequencers, and to experiment with livecoding. 
                  See the documentation and installation instructions here, 
                  or have a look at a tutorial video.
                  If you need help, visit the chatroom and forum.
                </p>  
              </div>
              <figure class="image is-2by1">
                <img class="img-ctrl" src="https://images.unsplash.com/photo-1555585153-0812cde1b4f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80.jpg">
              </figure>
              <p class="with-padding-medium"> Collaboration </p> 
              <div class="quotes column is-8">
                “ In this project some brilliant 
                ideas found in the Internet 
                are combined together.”
              </div>
              <div class="column is-10 padding-top">
                <p>
                  Each letter of the alphabet is an operation, 
                  lowercase letters operate on bang, 
                  uppercase letters operate each frame.
                  Orca is designed to control other applications, 
                  create procedural sequencers, and to experiment with livecoding. 
                  See the documentation and installation instructions here, 
                  or have a look at a tutorial video.
                  If you need help, visit the chatroom and forum.
                </p>  
              </div>
              <div class="image is-5by3">
                <img class="img-ctrl" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80.jpg">
              </div>
              <figure class="image is-2by1">
                <img class="img-ctrl" src="https://images.unsplash.com/photo-1555585153-0812cde1b4f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80.jpg">
              </figure>
              <figure class="image is-2by1">
                <img class="img-ctrl" src="https://images.unsplash.com/photo-1555585153-0812cde1b4f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80.jpg">
              </figure>
              <p class="with-padding-medium"> Collaboration </p> 
              <div class="column with-padding code-snippet">
                <p>
                  HOME <br/>
                  &nbsp;BREF : A basic term. <br/>
                  &nbsp;TAGS : diary gallery <br/>
                  &nbsp;BODY <br/>
                    & Foo {(bold (link "sources"))}. <br/>
                  &nbsp;λ (echo :children) 
                </p>  
              </div>
              <div class="column with-padding-medium">
                <div class="box">
                  <article class="media">
                    <div class="media-left">
                      <figure class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item" aria-label="reply">
                            <span class="icon is-small">
                              <i class="fas fa-reply" aria-hidden="true"></i>
                            </span>
                          </a>
                          <a class="level-item" aria-label="retweet">
                            <span class="icon is-small">
                              <i class="fas fa-retweet" aria-hidden="true"></i>
                            </span>
                          </a>
                          <a class="level-item" aria-label="like">
                            <span class="icon is-small">
                              <i class="fas fa-heart" aria-hidden="true"></i>
                            </span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                </div>
              </div>
              <div class="column is-10 padding-top">
                <p>
                  Each letter of the alphabet is an operation, 
                  lowercase letters operate on bang, uppercase letters operate each frame.
                  Orca is designed to control other applications, 
                </p>  
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full scroll-spacing no-pointer-event"></div>
      </section>

      <section class="column is-full nav-next-work-section">
        <div class="columns scroll-spacing">
            <div class="column is-half no-padding-top">
              <div class="title detail-level padding-top-3rem">Project</div>
            </div>
          
            <div class="column is-half no-padding-top no-padding-bottom no-padding-right control-worklist-detail">
              <div 
                v-for="( data, index ) of worklists" 
                class="work-list-detail with-padding"
                :key="index"
              >
              <div class="flex-wrapper">
                <span class="icon icon-size-2x">
                  <i 
                    class="fas padding-top padding-right"
                    :class="['fa-arrow-' + data.icon]"
                  >
                  </i>
                </span>
                <div class="next-item-wrapper">
                  <p class="title is-3">{{data.title}}</p>
                  <div class="subtitle is-6  padding-top">
                    <p>{{ data.detail1}}</p>  
                    <p>{{ data.detail2}}</p>  
                  </div>
                </div>
              </div>
                
              </div>
            
          </div>
        </div>
      </section>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { 
  FETCH_SELECTED_WORK,
  SET_SCROLL_TO 
} from "@/store/actions.type";
import jump from 'jump.js'
import Footer from '@/components/Footer'

export default {
  name: 'Work',
  data(){
    return {
      isScrollToTop: false,
      isShowBackToTopBtn: false,
      scrollEl: "",
      worklists: [
        { title: "Kinjai Gallery", detail1: "custom sequencer", detail2: 'custom detail 2', icon: 'left'},
        { title: "Rewind to the next", detail1: "custom detail1", detail2: 'custom detail2', icon: 'right'},
      ]
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showBackToTop)
  },
  created () {
    this.$store.dispatch(FETCH_SELECTED_WORK, this.$route.params.slug )
  },
  destroyed () {
    window.removeEventListener('scroll', this.showBackToTop);
  },
  components: {
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['isLoading', 'getWorkDetail']),
  },
  methods: {
    setIsScroll(){
      this.isScrollToTop = true
      // prevent stuttering.
      if(window.scrollY > 200){
        this.setScrollToTop()
      }
    },
    setScrollToTop(){
      if(this.isScrollToTop){
        jump('.scroll-wrapper', { duration: this.setScrollSpeed()})
        this.isScrollToTop = false
      }
    },
    setScrollSpeed(){
      let scrollSpeed 
      let clientHeight = document.documentElement.getBoundingClientRect().height

      if(window.scrollY < clientHeight/2){
        scrollSpeed = 1000
      } else {
        scrollSpeed = 1500
        this.isClientHalfHeight = true
      }
      return scrollSpeed
    },
    showBackToTop(){
     let clientHeight = document.documentElement.getBoundingClientRect().height
     if(window.scrollY > clientHeight/8){
        this.isShowBackToTopBtn = true
     } else {
        this.isShowBackToTopBtn = false
     }
    },
    goToTop(){
      jump('.scroll-wrapper', { duration: this.setScrollSpeed()}) 
    },
    toggleOverviewClose(){
      Footer.methods.toggleOverview()
    }
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';

  .control-worklist-detail{
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .control-worklist-detail >.work-list-detail{
    border-bottom: 1px solid black;
    align-items: center;
    display: flex;
  }

  .control-worklist-detail >.work-list-detail ~.work-list-detail{
   border-bottom: unset;
  }

  .color-secondary{
    background-color: $secondary-color;
  }
  
  .color-third{
    background-color: $third-color;
  }

  .cate-year{
    font-size: 18rem;
    width: max-content;
    pointer-events: none;
    color:  $color-black;
    /* -webkit-text-stroke: 1px $color-black; */
  }

  .w-light{ font-weight: lighter; }
  .w-normal{ font-weight: normal; }

  .tag-list li{ text-align: left}

  .margin-top{ margin-top: $main-margin;}
  .margin-left-unset{ margin-left: unset;}
  

  .img-ctrl{ 
    background-size: cover;  
    padding-bottom: $main-padding;
    padding: $medium-padding;
  }

  

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

  .break-line{
    content: '';
    display: flex;
    position: relative;
    height: 1px;
    background: black;
    margin-top: $main-margin; 
  }

  .with-border-bottom{
    border-bottom: 1px solid $color-black;
  }

 

  .position-sticky{
    position: sticky;
    top: 0;
  }

  .position-fixed{
    position: fixed;
    top: 0;
  }

  .back-to-top{
    position: fixed;
    bottom: 0;
    right: 0;
    font-size: 40px;
    margin-bottom: 70px;
    margin-right: 50px;
    z-index: 7;
    opacity: 0;
    transform: translateY(40px);
    transition: 200ms ease-in-out;

    &:hover{
      cursor: pointer;
      i{color: $hover-color;}
    }
  }

  .show{ 
    opacity: 1;
    transform: translateY(0px);
  }


</style>
