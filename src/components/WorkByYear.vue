<template>
  <section class="color-grey detail-section">
    <div class="detail-wrapper relative flex-col">
      <section v-for="( data, index) of dataList" :key="index" class="flex-wrapper works-wrapper">

        <!-- year's column -->
        <div class="column is-half w-light year-txt-dp">
          <div class="cate-year position-sticky">
            <p>{{ data.year}}</p>
          </div>
        </div>

        <!-- works' column -->
        <div class="column is-half control-worklist-detail">
          <div 
            v-for="( _data, _index ) of data.works" 
            class="work-list-detail with-padding"
            :key="_index"
            @mouseover="handleShowPreview(_data.thumbnail, index)"
            @mouseleave="handleHidePreview(_data)"
            @click="handleClick(_data)"
          >
            <div class="next-item-wrapper flex-wrapper ">
              <div class="flex3">
                <p class="title is-3 ">{{_data.name}}</p>
                <div class="subtitle is-6  padding-top work-lists-subtitle">
                  <p>{{ _data.description1}}</p>  
                  <p>{{_data.description2}}</p>  
                </div>
              </div>

              <div class="flex1 align-end icon-size">
                <b-tooltip 
                  v-for="(_tag, _tagIdx) of _data.tags" 
                  :key="_tagIdx"  
                  :label="_tag.title"
                  type="is-light"
                  square
                >
                  <i :class=" 'icon-'+ _tag.key"> </i>
                </b-tooltip>
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
      this.$router.push({ path: `/work/${data.year}/${data.slug}` })
    },
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';
  .color-grey{
    background-color: $main-color;
  }

  .cate-year{
    font-size: 20vw;
    font-weight: lighter;
    pointer-events: none;
    color:  $color-black;
    width: 100%;
  }

  .w-light{ font-weight: lighter; }


  .relative{ 
    position: relative;
    z-index: 5;
  }

  .home-scroll-spacing{
    height: $home-scroll-space-height;

    @media screen and(max-width: $mobile-screen){
      height: calc(100vh - 50px);
    }
  }

  .control-worklist-detail{
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;

    @media screen and(max-width: $mobile-screen){
      display: block;
      padding: 0;
      width: 100%;
    }
    
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

    @media screen and(max-width: $mobile-screen){
      flex-direction: column;
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
    background-position: center;
    color: #ffffff00;
    -webkit-text-stroke: 2px white;

    /* @media screen and(max-width: $mobile-screen){
      height: 100%;
    } */
  }

  .year-txt-dp{
    align-items: flex-start;
    display: flex;

     @media screen and(max-width: $mobile-screen){
      display: block !important;
    }
  }

  .work-lists-subtitle{
    @media screen and(max-width: $mobile-screen){
      p{font-size: 1rem !important;}
    }
  }

</style>
