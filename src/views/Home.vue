<template>
  <!-- <div class="home">
    <h1 class="header-title">{{ hometitle }}</h1>
    <div v-on:click="getdata" class="home-detail"></div>
    <ul class="tag-list">
      <li
        v-for="(data, index) of getListData"
        :key="index"
      >
        <span v-text="data.name" />
      </li>
    </ul>
  </div> -->

  <div class="color-grey">
    <section v-for="( work, index) of workyears" :key="index" class="section">
      <div class="columns">
        <div class="column is-half w-light">
          <p class="cate-year">{{ work.year}}</p>
        </div>

        <div class="column is-half scroll-wrapper">
          <div 
            v-for="( data, index ) of worklists" 
            class="work-list"
            :key="index"
          >
            <p class="title is-3 margin-top">{{data.title}}</p>
            <div class="subtitle is-6  w-light padding-top">
              <p>custom sequencer</p>  
              <p>custom sequencer</p>  
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import Header from "../components/Header";
import { FETCH_LISTDATA } from "@/store/actions.type";
import { mapGetters } from 'vuex'
import BScroll from 'better-scroll'



export default {
  name: 'Home',
  data(){
    return {
      hometitle: "Karnpapon Vue's Boiler Plate",
      worklists: [
        { title: "seeq"},
        { title: "etc-etc-etc"},
        { title: "Songkranizer"},
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
    const scroll = new BScroll('.scroll-wrapper')
    console.log("scroll", scroll)
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
  .work-list{
   &:after {
      content: '';
      display: flex;
      position: relative;
      height: 1px;
      background: black;
      margin-top: $main-margin;
    }
  }

  .color-grey{
    background-color: $main-color;
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
  .padding-top{ padding-top: $main-padding;}

  .scroll-wrapper{}
</style>
