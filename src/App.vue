<template>
  <div class="index-page-container">
  <nprogress-container></nprogress-container> 
    <div id="app"></div>
    <transition name="fade" mode="out-in"><router-view :key="$route.fullPath"/></transition>
    <Footer scrollContainer=".index-page-container" ></Footer>
  </div>
</template>

<script>

import Footer from "./components/Footer";
import NprogressContainer from '@/components/Nprogress'
import router from "@/router"
import ogImage from "@/assets/images/social-thumbnail.jpg"

export default {
  name: 'app',
  components: {
    Footer,
    NprogressContainer
  },
  data(){
    return {
    }
  },
 created() {

  },
  metaInfo: () => ({
    title: 'code/design/music',
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'en',
      amp: undefined
    },
    headAttrs: {
      test: true
    },
    meta: [
      { name: 'description', content: 'Hello', vmid: 'I\'m Karnpapon' },
      { hid: 'og:image', name: 'og:image', content: "https://www.karnpapon.me" + ogImage}
    ],
    script: [
      { innerHTML: '{ "@context": "http://www.karnpapon.me", "@type": "Organization" }', type: 'application/ld+json' },
      { innerHTML: '{ "body": "yes" }', body: true, type: 'application/ld+json' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  })

}
</script>

<style lang="scss">
@import './assets/styles/_base.scss';
@import './assets/styles/_font.scss';

  html, body{
    font-size: 14px !important;
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased !important;
    margin: 0 !important;
    padding: 0 !important;
    height: 100% !important;
    width: 100% !important;
    -moz-osx-font-smoothing: grayscale !important;
    -webkit-font-smoothing: antialiased !important;
    /* font-smoothing: antialiased !important; */
  }

* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  pre{
    background-color: white !important;
    margin: 20px 0 !important;
  }

 
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  a { color: $color-black !important;}

  a p{ 
    color: $color-black;
    &:hover{ color: $hover-color; }
  }

  .container{
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .quotes{ 
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    font-weight: lighter;
    font-size: 2.5rem;
    padding: 4rem 0rem;
  }

  .container-ctrl{
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 50px;
  }

  .index-page-container{
    background-color: white;
  }

  .padding-top{ padding-top: $main-padding;}
  .padding-right{ padding-right: $main-padding;}
  .padding-right-small{ padding-right: $small-padding;}
  .padding-top-small{ padding-top: $small-padding;}
  .padding-top-medium{ padding-top: $medium-padding;}
  .padding-left{ padding-left: $main-padding;}
  .padding-bottom{ padding-bottom: 20px;}
  .with-padding{ padding: 20px !important;}
  .with-padding-medium{ padding: $medium-padding !important;}
  .no-padding{ padding: 0px !important;}
  .no-margin-tb{ margin-top: 0px !important; margin-bottom: 1px !important;}
  .no-padding-top{ padding-top: 0 !important;}
  .no-padding-bottom{ padding-bottom: 0 !important;}
  .no-padding-left{ padding-left: 0 !important;}
  .no-padding-right{ padding-right: 0 !important;}
  .padding-top-3rem{ padding-top: 3rem !important;}

  .flex-wrapper{ display: flex;}
  .inline-grid-wrapper{ display: inline-grid; grid-row-gap: 10px;}

  .align-end{
    justify-content: flex-end;
    align-self: center;
    display: flex;
  }

  .no-pointer-event{ pointer-events: none; }

  .no-flex-basis{ flex-basis: initial !important;}

  .position-sticky{
    position: sticky;
    top: 0;
  }

  .full-width{ width: 100% !important;}

  .no-border-top{ border-top: unset !important;}

  .tag-cat{ 
    border: 1px solid $color-black; 
    /* font-weight: bolder !important; */
    /* font-family: $font-input-mono-bold; */
    font-size: 0.8rem;
    padding: $medium-padding;
    &:hover{
      background-color: $color-black;
      color: white;
      /* cursor: pointer; */
    }
  }

   .tag-about{ 
    font-size: 0.8rem;
    /* padding: $medium-padding; */
    width: max-content;
    p{ font-weight: normal;}
  }

  .active{
    p{ font-weight: bolder;} 
  }

 .detail-section{
    height: unset;
    z-index: 2;
    pointer-events: none;
    max-width: unset !important;
    width: 100% !important;
  }

 .detail-wrapper{
    margin-left: unset;
    background-color: $main-color;
    pointer-events: auto;
    padding-bottom: 40px;
    margin-left: unset !important;
    display: flex;

    @media screen and(max-width: $mobile-screen){
      display: block;
    }
  }

  .line{ 
    height: 1px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: $secondary-color;
  }

  .flex-col{ 
    display: flex;
    flex-direction: column;
  }

  .nav-next-work-section{
    position: fixed;
    bottom: 0;
    background-color: white;
    margin-bottom: 50px;
    z-index: 0;
    border-top: 1px solid $color-black;

    @media screen and(max-width: $mobile-screen){
      width: 100%;
    }
  }

 .next-item-wrapper{
    height: 100%;
    width: 100%;

    @media screen and(max-width: $mobile-screen){
      >p{ margin-bottom: 10px !important;}

      p{
        font-size: 1.5rem !important;
      }
    }

  }

  .flex1{ flex: 1};
  .flex3{ flex: 3};

  .icon-size{ font-size: 3rem;}

  .scroll-spacing{
    height: $scroll-space-height;
    width: 100%;
    display: flex !important;

    @media screen and(max-width: $mobile-screen){
      display: flex !important;
      flex-grow: 0 !important;
      flex-basis: unset !important;
    }
  }

  .detail-level{
    font-size: 4rem;
    font-weight: lighter;
  }

  .control-worklist-detail{
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .control-worklist-detail >.work-list-detail{
    border-bottom: 1px solid $color-black;
    align-items: center;
    display: flex;
  }

  .overflow{
    overflow: hidden;
  }

  .scrollable{
    overflow-y: scroll;
    margin-right: -30px;

    @media screen and (max-width: $mobile-screen){
      /* height: 300px; */
    }
  }

  /* .control-worklist-detail >.work-list-detail ~.work-list-detail{
   border-bottom: unset;
  } */

  .work-list-detail{
    /* transition: 150ms; */
    height: 100%;

    i{ color: $main-color; pointer-events: none; padding: 9px;}

    &:hover{
      cursor: pointer;
      background-color: $color-black;
     p{ color: white;}
     i{ color: white;}
    }

  }

  .background-black{ 
    background-color: $color-black; 
    p{color: white;}
  }

  .white-text{ color: white !important; }

  .auto-height{ height: auto;}

  .disable-click{
    pointer-events: none;
  }

</style>
