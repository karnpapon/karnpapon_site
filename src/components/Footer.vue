<template>
<div class="footer-container column is-full no-padding">
  <div 
    v-if="isShowOverview"
    class="overview-wrapper column is-full"
  >
    <div class="overview-container">
      <div class="columns is-full">
        <div 
          v-for="(list, index) of lists" :key="index" 
          class="column with-padding"
          :class="['is-' + list.widthRatio]"
        >
          <p class="title is-6 padding-top-small">{{ list.year }}</p>
          <div 
            v-for="(itemlist , itemindex) of list.item" :key="itemindex" 
            class="padding-top-medium list-overview"
            v-on:click="selectWork(itemlist)"
          >
            <router-link 
              :to="{ path: `/work/${itemlist.slug}`}" 
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
        <!-- <p>overview</p> -->
      </div>
    </div>

    <div class="footer footer-ctl column is-11">
      <div class="level">
        <div class="level-left left-col">
          <router-link 
              :to="{ path: '/about'}" 
              active-class="active"
              exact 
            >
          <p><strong> Karnpapon </strong></p>
          </router-link>
          <span class="icon "><i class="fab fa-creative-commons"></i></span>
          <p class="w-medium">CC BY NC SA 4.0</p>
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
</template>

<script>
import { FETCH_SELECTED_WORK, SET_SCROLL_TO_TRUE } from "@/store/actions.type";
import { mapGetters } from 'vuex'
import Work from '@/views/Work'

export default {
  name: "Footer",
  data(){
    return { 
      isShowOverview: false,
      lists: [
        { 
          year: '2019', 
          widthRatio: 2,
          item: [
            {name: 'seeq', slug: 'seeq'},
            {name: 'ect-ect-ect', slug: 'ect-etc-tec'},
            {name: 'Songkranizer', slug: 'songkranizer'},
          ]
        },
        { 
          year: '2018', 
          widthRatio: 2,
          item: [
            {name: 'livecodefest', slug: 'livecodingfest'},
            {name: 'The blacksmith.', slug: 'the-blacksmith'},
            {name: 'The Blackcodes', slug: 'the-blackcodes'},
            {name: 'Cadson Demak Project', slug: 'cadson-demak'},
            {name: 'Kinjai Gallery', slug: 'kinjai-gallery'},
            {name: 'Bkk Design Week 2018', slug: 'bkk-design-week'},
          ]
        },
        { 
          year: 'Late', 
          widthRatio: 3,
          item: [
            {name: '2017 - Rewind to the next ', slug: 'rewind-to-the-next'},
            {name: '2015 - The Blackcodes (Visual) ', slug: 'the-black-codes-visuals'},
          ]
        },
        { 
          year: 'Lab', 
          widthRatio: 2,
          item: [
            {name: 'soon', slug: 'lab-soon'},
          ]
        },
        { 
          year: 'Journal', 
          widthRatio: 3,
          item: [
            {name: 'soon', slug: 'journal-soon'},
          ]
        },
      ]
    }
  },
  methods: {
    toggleOverview(){
      this.isShowOverview = !this.isShowOverview
    },
    selectWork( selectedWork){
      this.$store.dispatch(FETCH_SELECTED_WORK, selectedWork.slug )
      this.toggleOverview()
      // this.$store.dispatch(SET_SCROLL_TO_TRUE)
      Work.methods.setIsScroll()
    }
  },
  mounted(){
  },
  computed: {
  },
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
  }

  .footer-overview{
    border-right: 1px solid $color-black;
    left: 0;
    padding-left: 15px;
    justify-content: center;
    display: flex;

    p{ font-weight: bolder;}

    &:hover{ 
      user-select: none;
      cursor: pointer;
      background-color: $color-black;
      >div p {color: white;}
      >div i {color: white;}
    }
  }

  .w-medium{
    font-weight: 500;
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
  }

  .left-col{
    justify-content: space-between;
  }

  .right-col{
    width: 50px;
    justify-content: space-between;
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

  .footer-container{ 
    position: fixed;
    bottom: 0;
    z-index: 5;
  }

  .footer-wrapper{ 
    display: flex;
    width: 100%;
  }

  .footer{ background-color: white;}
</style>
