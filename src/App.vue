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
html{
  font-size: 14px !important;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
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
    background-color: $main-color;
  }

  .code-snippet{
    background-color: white;
    margin: $medium-padding;
    p {font-family: $font-input-mono;}
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
  .no-padding-top{ padding-top: 0 !important;}
  .no-padding-bottom{ padding-bottom: 0 !important;}
  .no-padding-left{ padding-left: 0 !important;}
  .no-padding-right{ padding-right: 0 !important;}
  .padding-top-3rem{ padding-top: 3rem !important;}

  .flex-wrapper{ display: flex;}
  .inline-grid-wrapper{ display: inline-grid; grid-row-gap: 10px;}

  .no-pointer-event{ pointer-events: none; }

  .no-border-top{ border-top: unset !important;}

  .tag-cat{ 
    border: 1px solid $color-black; 
    font-weight: bolder !important;
    /* font-family: $font-input-mono-bold; */
    font-size: 10px;
    padding: $medium-padding;
  }

  .active{
    p{ font-weight: bolder;} 
  }
</style>
