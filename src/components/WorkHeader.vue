<template>
  <section 
    id="header-render"
    class="column is-full title-detail-level "
  >
    <div class="with-padding">
      <div v-if="dataDetails.theme == 'journal'">
        <div class="title detail-level is-1">
          <p>{{ dataDetails.description1}}</p>  
          <p>{{ dataDetails.description2}}</p>  
        </div>
        <div class="subtitle is-6 padding-top">
          <p>{{ dataDetails.subdescription1}}</p>  
          <p>{{ dataDetails.subdescription2}}</p>  
        </div>
      </div>
      <div v-else>
        <div class="title detail-level">{{ dataDetails.name }}</div>
        <div class="subtitle is-6 padding-top">
          <p>{{ dataDetails.description1}}</p>  
          <p>{{ dataDetails.description2}}</p>  
        </div>
        <div class="subtitle is-6">
          <p> {{ dataDetails.year }} </p> 
        </div>
        <div class="subtitle is-6">
          <p> {{ dataDetails.workType }} </p> 
        </div>
      </div>
    </div>

    <div  class="back-to-top helper" >
     <div @click="goToHome">
        <span class="icon padding-right-small helper-icon">
          <i class="icon-arr-back"></i>
        </span>
      </div>
    </div>
    
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { 
  FETCH_SELECTED_WORK,
  SET_SCROLL_TO 
} from "@/store/actions.type";


export default {
  name: 'WorkHeader',
  data(){
    return {
      thumbnailTarget:""
    }
  },
  mounted() {
    this.setTheme() 
    // this.handleShowPreview(this.dataDetails.thumbnail)
  },
  created () {
   
  },
  destroyed () {
  },
  components: {
    
  },
  props: {
    dataDetails: Object
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
    setTheme(){
      const target = document.getElementById("header-render")

      switch (this.dataDetails.theme) {
        case 'about':
          target.classList.add("theme-about") 
          break;
        case 'work':
          target.classList.add("theme-work") 
          break;
        case 'journal':
          target.classList.add("theme-journal") 
          break;
        default:
          break;
      }
    },
      handleShowPreview(img){
      this.thumbnailTarget = document.getElementsByClassName("title-detail-level")[0]

      const imgNode = document.createElement("div")
      imgNode.classList.add("thumbnail-placeholder")
      imgNode.style.backgroundImage = `url(${img})`

      this.thumbnailTarget.appendChild(imgNode)
    },
    goToHome(){
      this.$router.push({ path: '/' })
    },
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';

  .title-detail-level{
    border-bottom: 1px solid $color-black;
    padding: 0 !important;
    position: relative;
    z-index: 5;
  }

   .title-detail-level /deep/ .thumbnail-placeholder {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    background-attachment: fixed;
    /* >div {color: white;} */
  }

  .theme-work{
    background-color: $main-color;
  }
  .theme-about{
    background-color: white;
    div, p {z-index: 10;}
  }
  .theme-journal{
    background-color: $color-black;
    border-bottom: 1px solid white;
    div, p {color: white;}
  }

  #header-render{
    display: flex;
    
    justify-content: space-between;
  }

  .helper{
    display: flex;
    justify-content: space-around;
    width: 100px;

     /* @media screen and(max-width: $mobile-screen){
      display: none;
    } */
  }

  .helper-icon{
     &:hover{
      cursor: pointer;
      i{color: $hover-color; background-color: black;}
    }
  }
 

  .back-to-top{
    right: 0;
    font-size: 40px;
    margin-bottom: 20px;
    z-index: 7;
    align-items: flex-end;
  }

  .show{ 
    opacity: 1;
    transform: translateY(0px);
  }

</style>
