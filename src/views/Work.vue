<template>
    <div class="container-ctrl">
      <section class="column is-full title-detail-level with-padding">
        <div>
          <div class="title detail-level">Cadson Demak Project</div>
            <div class="subtitle is-6  w-light padding-top">
              <p>custom sequencer</p>  
              <p>live-coding environment</p>  
            </div>

          <div class="subtitle is-6  w-light ">
            <p> 2019 </p> 
          </div>

          <div class="subtitle is-6  w-light">
            <p> Collaboration </p> 
          </div>
            
        </div>
      </section>

      <section class="container is-fullhd detail-section">
        <div class="columns detail-wrapper">
          <div class="column is-3 w-light">
            <div class="with-padding-medium">
              <strong> Category:</strong>
            </div>
            <div class="inline-grid-wrapper">
              <span class="tag is-success">graphic design</span>
              <span class="tag is-warning">Development</span>
              <span class="tag is-danger">illustration</span>
            </div>
          </div>

          <div class="column is-6">
            <div>
              <div class="column is-10 w-light padding-top">
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
              <div class="column is-10 w-light padding-top">
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
              <div class="column is-10 w-light padding-top">
                <p>
                  Each letter of the alphabet is an operation, 
                  lowercase letters operate on bang, uppercase letters operate each frame.
                  Orca is designed to control other applications, 
                </p>  
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full scroll-spacing no-pointer-event">
        </div>
      </section>

      <!-- <div class="break-line"></div> -->

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
                  <i class="fas fa-arrow-left padding-top padding-right"></i>
                </span>
                <div class="next-item-wrapper">
                  <p class="title is-3">{{data.title}}</p>
                  <div class="subtitle is-6  w-light padding-top">
                    <p>custom sequencer</p>  
                    <p>custom sequencer</p>  
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
import { FETCH_LISTDATA } from "@/store/actions.type";
import { mapGetters } from 'vuex'

export default {
  name: 'Work',
  data(){
    return {
      hometitle: "Karnpapon Vue's Boiler Plate",
      worklists: [
        { title: "Kinjai Gallery"},
        { title: "Rewind to the next"},
      ],
      workyears: [
        { year: "2019"},
        { year: "2018"},
        { year: "Late"},
      ],
    }
  },
  mounted() {
    this.$store.dispatch(FETCH_LISTDATA);
  },
  components: {
    },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['getListData', 'isLoading']),
    onScroll(pos) {
      console.log(`Now position is x: ${pos.x}, y: ${pos.y}`)
    }
  },
  methods: {
    getdata(){
      console.log("getListData", this.getListData)
    },
   
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';
  .work-list-detail{
    transition: 150ms;
    height: 100%;

    &:hover{
      cursor: pointer;
      background-color: $hover-color;
    }

  }

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

  .detail-level{
    font-size: 4rem;
    font-weight: lighter;
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

  .nav-next-work-section{
    position: fixed;
    bottom: 0;
    background-color: white;
    margin-bottom: 50px;
    z-index: 0;
    border-top: 1px solid $color-black;
  }

  .next-item-wrapper{
    height: 100%;
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

  .detail-section{
    height: unset;
    z-index: 2;
    pointer-events: none;
  }

  .detail-wrapper{
    margin-left: unset;
    background-color: $main-color;
    pointer-events: auto;
  }

  .scroll-spacing{
    height: $scroll-space-height;
  }
</style>
