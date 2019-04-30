<template>
  <div 
    class="back-to-top helper" 
    :class="{'show' :isShowBackToTopBtn}"
  >
    <div @click="goToHome">
      <span class="icon padding-right-small helper-icon">
        <i class="fas fa-angle-left"></i>
      </span>
    </div>
    <div @click="goToTop">
      <span class="icon padding-right-small helper-icon">
        <i class="fas fa-angle-up"></i>
      </span>
    </div>
  </div>
</template>

<script>
import jump from 'jump.js'

export default {
  name: 'NavHelper',
  data(){
    return {
      isShowBackToTopBtn: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showBackToTop)
  },
  created () {
  },
  destroyed () {
    window.removeEventListener('scroll', this.showBackToTop);
  },
  components: {
  },
  props: {
    scrollContainer: String
  },
  computed: {
  },
  methods: {
     setScrollSpeed(){
      let scrollSpeed 
      let clientHeight = document.documentElement.getBoundingClientRect().height

      if(window.scrollY < clientHeight/2){
        scrollSpeed = 1000
      } else {
        scrollSpeed = 1500
      }
      return scrollSpeed
    },
    showBackToTop(){
     let clientHeight = document.documentElement.getBoundingClientRect().height
     let parentHeight = document.getElementById("content-theme").clientHeight;
     if(window.scrollY > clientHeight/8 && window.scrollY < parentHeight - 500){
        this.isShowBackToTopBtn = true
     } else {
        this.isShowBackToTopBtn = false
     }
    },
    goToTop(){
      jump(this.scrollContainer, { duration: this.setScrollSpeed()}) 
    },
    goToHome(){
      this.$router.push({ path: '/' })
    },
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';


  .helper{
    display: flex;
    justify-content: space-around;
    width: 100px;

     @media screen and(max-width: $mobile-screen){
      display: none;
    }
  }

  .helper-icon{
     &:hover{
      cursor: pointer;
      i{color: $hover-color;}
    }
  }
 

  .back-to-top{
    position: fixed;
    bottom: 0;
    right: 0;
    font-size: 40px;
    margin-bottom: 70px;
    margin-right: 50px;
    z-index: 7;
    opacity: 0;
    transform: translateY(40px);
    transition: transform 200ms, opacity 200ms ease-in-out;
  }

  .show{ 
    opacity: 1;
    transform: translateY(0px);
  }


</style>
