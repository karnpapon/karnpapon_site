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
        <div class="column is-half color-secondary">
          <p class="cate-year">2019</p>
        </div>

        <div class="column is-half color-third">

          <div 
            v-for="( data, index ) of worklists" 
            class="work-list"
            :key="index"
          >
            <p class="title is-3">seeq</p>
            <p class="subtitle is-6">custom sequencer / live-coding environment</p>
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

export default {
  name: 'Home',
  data(){
    return {
      hometitle: "Karnpapon Vue's Boiler Plate",
      worklists: [1,2,2,3],
      workyears: [1,2,2],
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
    ...mapGetters(['getListData', 'isLoading'])
  },
  methods: {
    getdata(){
      console.log("getListData", this.getListData)
    }
  }
}
</script>

<style lang="scss"  scoped>

@import '../assets/styles/_base.scss';

  .home{
    width: 100%;
    height: 100%;
    background-color: #efefefaa;
    text-align: center;
    align-items: center;
    display: flex;
    position: relative;
    flex-direction: column;
  }

  .header-title{
    width: fit-content;
    padding: 20px 0;
  }

  .home-detail{
    cursor: pointer;
    font-weight: bolder;
  }

  .work-list{
   &:after {
      content: '';
      display: flex;
      position: relative;
      height: 1px;
      background: black;
      margin-top: 10px;
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
    font-size: 40px;
  }

  .tag-list li{ text-align: left}
</style>
