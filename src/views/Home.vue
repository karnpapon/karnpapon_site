<template>
  <div class="container-ctrl">
    <section class="color-grey detail-section">
      <div class="detail-wrapper relative">
        <section v-for="( work, index) of workyears" :key="index" class="flex-wrapper columns works-wrapper">
          <div class="column is-half w-light">
            <p class="cate-year">{{ work.year}}</p>
          </div>

          <div class="column is-half no-padding-top no-padding-bottom no-padding-right control-worklist-detail">
            <div 
              v-for="( data, index ) of worklists" 
              class="work-list-detail with-padding"
              :key="index"
            >
              <div class="next-item-wrapper">
                <p class="title is-3 ">{{data.title}}</p>
                <div class="subtitle is-6  padding-top">
                  <p>custom sequencer</p>  
                  <p>custom sequencer</p>  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="column is-full home-scroll-spacing no-pointer-event"></div>
    </section>

    <section class="column is-full nav-next-work-section background-black">
      <div class="columns home-scroll-spacing">
        <div class="column is-half no-padding-top">
          <p class="cate-year white-text">Journal</p>
        </div>

        <div class="column is-half padding-top padding-bottom control-worklist-detail overflow">
          <div class="scrollable">
            <div 
              v-for="( data, index ) of journalLists" 
              class="journal-list-select with-padding"
              :key="index"
            >
            <div class="flex-wrapper">
              <div class="next-item-wrapper">
                <p class="title is-3">{{data.title}}</p>
                <div class="subtitle is-6  padding-top">
                  <p>xxxfjkjl</p>  
                </div>
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
import Header from "../components/Header";
import { mapGetters } from 'vuex'


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
      journalLists: [
        { title: "seeq"},
        { title: "etc-etc-etc"},
        { title: "Songkranizer"},
        { title: "Songkranizer"},
        { title: "Songkranizer"},
        { title: "Songkranizer"},
      ],
      workyears: [
        { year: "2019"},
        { year: "2018"},
        { year: "Late"},
        { year: "Lab"},
      ],
    }
  },
  mounted() {

  },
  components: {
    },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['getListData', 'isLoading']),
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
    font-weight: lighter;
    width: max-content;
    pointer-events: none;
    color:  $color-black;
    height: 200px;
    /* -webkit-text-stroke: 1px $color-black; */
  }

  .w-light{ font-weight: lighter; }
  .w-normal{ font-weight: normal; }

  .tag-list li{ text-align: left}

  .margin-top{ margin-top: $main-margin;}
  .padding-top{ padding-top: $main-padding;}

  .scroll-wrapper{}

  .work-section{

  }

  .journal-wrapper{
    display: block;
  }

  .relative{ 
    position: relative;
    z-index: 5;
  }

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
    /* transition: 150ms; */
    height: 100%;

    &:hover{
      cursor: pointer;
      background-color: $color-black;
     p{ color: white;}
     i{ color: white;}
    }

  }

  .journal-list-select{
    &:hover{
      cursor: pointer;
      background-color: $main-color;
     p{ color: $color-black;}
    }
 
  }

</style>
