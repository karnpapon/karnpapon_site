<template>
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
              <strong>{{ shareDataDetail.name }}</strong> <small>@{{ shareDataDetail.name}}</small> <small>31m</small>
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
</template>

<script>

import { mapGetters } from 'vuex'
import { 
} from "@/store/actions.type";

export default {
  name: 'LinkShare',
  data(){
    return {
    }
  },
  mounted() {
  },
  created () {
  },
  components: {
  },
  props: {
    shareDataDetail : Object
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
  
</style>
