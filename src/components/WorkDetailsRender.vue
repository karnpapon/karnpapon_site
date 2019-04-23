<template>
  <div class="column is-6">
    <div class="detail-render">
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
</template>

<script>
import { mapGetters } from 'vuex'
import { 
  FETCH_SELECTED_WORK,
  SET_SCROLL_TO 
} from "@/store/actions.type";
// import jump from 'jump.js'


export default {
  name: 'WorkDetailsRender',
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

  .img-ctrl{ 
    background-size: cover;  
    padding-bottom: $main-padding;
    padding: $medium-padding;
  }

  .code-snippet{
    background-color: white;
    margin: $medium-padding;
    p {
      font-family: $font-input-mono;
      color: $color-black;
    }
  }
</style>
