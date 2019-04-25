<template>
  <section class="color-grey detail-section">
    <div class="detail-wrapper relative">
      <section v-for="( data, index) of dataList" :key="index" class="flex-wrapper works-wrapper">
        <div class="column is-half w-light year-txt-dp">
          <div class="cate-year position-sticky">
            <p>{{ data.year}}</p>
          </div>
        </div>

        <div class="column is-half no-padding-top no-padding-bottom no-padding-right control-worklist-detail">
          <div 
            v-for="( _data, _index ) of data.works" 
            class="work-list-detail with-padding"
            :key="_index"
            @mouseover="handleShowPreview(_data.thumbnail, index)"
            @mouseleave="handleHidePreview(_data)"
            @click="handleClick(_data)"
          >
            <div class="next-item-wrapper">
              <p class="title is-3 ">{{_data.name}}</p>
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
</template>

<script>
import { mapGetters } from 'vuex'
import { } from "@/store/actions.type";

export default {
  name: 'WorkByYear',
  data(){
    return {
      hover: false,
      thumbnailTarget: "",
    }
  },
  mounted() {

  },
  created(){
  },
  components: {
  },
  props: {
    dataList: Array
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
    handleShowPreview(img, index){
      if(this.hover){ return; }
      this.hover = true
      this.thumbnailTarget = document.getElementsByClassName("cate-year")[index]
      this.thumbnailTarget.classList.add("thumbnail-placeholder")
      this.thumbnailTarget.style.backgroundImage = `url(${img})`

    },
    handleHidePreview(data){
      this.hover = false 
      this.thumbnailTarget.classList.remove("thumbnail-placeholder")
      this.thumbnailTarget.style.backgroundImage = 'unset'
    },
    handleClick(data){
      this.$router.push({ path: `/work/${data.slug}` })
    }
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';
  .color-grey{
    background-color: $main-color;
  }

  .cate-year{
    font-size: 18rem;
    font-weight: lighter;
    pointer-events: none;
    color:  $color-black;
    width: 100%;
    /* line-height: .8; */
    /* -webkit-text-stroke: 1px $color-black; */
  }

  .w-light{ font-weight: lighter; }

  .padding-top{ padding-top: $main-padding;}

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
    width: 100%;

    &:hover{
      cursor: pointer;
      background-color: $color-black;
     p{ color: white;}
     i{ color: white;}
    }

  }

  .thumbnail-placeholder{
    background-size: cover;
    background-repeat: no-repeat;
    color: #ffffff00;
    -webkit-text-stroke: 2px white;
  }

  .year-txt-dp{
    align-items: flex-start;
    display: flex;
  }

</style>
