<template>
    <div class="index-page-container">
    <nprogress-container></nprogress-container> 
      <div id="app"></div>
      <router-view></router-view>
      <Footer></Footer>
    </div>
</template>

<script>

import Footer from "./components/Footer";
import NprogressContainer from '@/components/Nprogress'

export default {
  name: 'app',
  components: {
    Footer,
    NprogressContainer
  },
 
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
    font-smoothing: antialiased !important;
  }

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* color: #2c3e50; */
  }
  a{
    color: $color-black !important;
  }

  a p{ 
    color: $color-black !important;
    &:hover{ color: $hover-color !important; }
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

  .no-pointer-event{ pointer-events: none; }

  .position-sticky{
    position: sticky;
    top: 0;
  }


  .no-border-top{ border-top: unset !important;}

  .tag-cat{ 
    border: 1px solid $color-black; 
    font-weight: bolder !important;
    /* font-family: $font-input-mono-bold; */
    font-size: 10px;
    padding: $medium-padding;
    &:hover{
      background-color: $color-black;
      color: white;
      cursor: pointer;
    }
  }

  .active{
    p{ font-weight: bolder;} 
  }

 .detail-section{
    height: unset;
    z-index: 2;
    pointer-events: none;
  }

 .detail-wrapper{
    margin-left: unset;
    background-color: $main-color;
    pointer-events: auto;
    padding-bottom: 40px;
    margin-left: unset !important;
  }

  .nav-next-work-section{
    position: fixed;
    bottom: 0;
    background-color: white;
    margin-bottom: 50px;
    z-index: 0;
    border-top: 1px solid $color-black;
  }

 .next-item-wrapper{
    height: 100%;
  }

  .scroll-spacing{
    height: $scroll-space-height;
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
  }

  /* .control-worklist-detail >.work-list-detail ~.work-list-detail{
   border-bottom: unset;
  } */

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

  .background-black{ 
    background-color: $color-black; 
    p{color: white;}
  }

  .white-text{ color: white !important; }

  .auto-height{ height: auto;}

</style>
