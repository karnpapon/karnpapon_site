<template>
  <div class="container-ctrl">
    <section class="color-grey detail-section">
      <div class="detail-wrapper relative">
        <section v-for="( data, index) of dataList" :key="index" class="flex-wrapper works-wrapper">
          <div class="column is-half w-light">
            <div class="cate-year">{{ data.year}}</div>
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
                <p class="title is-3 ">{{_data.title}}</p>
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

    <div class="padding-right">
      <section class="column is-full nav-next-work-section background-black">
        <div class="columns home-scroll-spacing">
          <div class="column is-half no-padding-top">
            <p class="journal-title white-text">Journal</p>
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
                    <p> 12/02/1989 : 2 mins read. </p>  
                  </div>
                </div>
              </div>
            </div>

          </div>
          </div>
        </div>
      </section>
    </div>

  </div>

</template>

<script>
import Header from "../components/Header";
import { mapGetters } from 'vuex'


export default {
  name: 'Home',
  data(){
    return {
      hover: false,
      thumbnailTarget: "",
      hometitle: "Karnpapon Vue's Boiler Plate",
      dataList: [
        { year: '2019', works: 
          [{ 
              title: "seeq", 
              thumbnail: "https://images.unsplash.com/photo-1555853159-b23e1b1bebd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80.jpg",
              slug: "seeq"
            },
            { 
              title: "ect-etc-tec", 
              thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.jpg",
              slug:"ect-etc-tec"
            },
            { 
              title: "Songkranizer", 
              thumbnail: "https://images.unsplash.com/photo-1555679792-6783ef0bbf61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg",
              slug: "songkranizer"
            }]
        },
        { year: '2018', works: 
          [{ 
              title: "seeq", 
              thumbnail: "https://images.unsplash.com/photo-1555853159-b23e1b1bebd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80.jpg",
              slug: "seeq"
            },
            { 
              title: "ect-etc-tec", 
              thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.jpg",
              slug:"ect-etc-tec"
            },
            { 
              title: "Songkranizer", 
              thumbnail: "https://images.unsplash.com/photo-1555679792-6783ef0bbf61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg",
              slug: "songkranizer"
            }]
        },
        { year: 'Late', works: 
          [{ 
              title: "seeq", 
              thumbnail: "https://images.unsplash.com/photo-1555853159-b23e1b1bebd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80.jpg",
              slug: "seeq"
            },
            { 
              title: "ect-etc-tec", 
              thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.jpg",
              slug:"ect-etc-tec"
            },
            { 
              title: "Songkranizer", 
              thumbnail: "https://images.unsplash.com/photo-1555679792-6783ef0bbf61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg",
              slug: "songkranizer"
            }]
        },
        { year: 'Lab', works: 
          [{ 
              title: "seeq", 
              thumbnail: "https://images.unsplash.com/photo-1555853159-b23e1b1bebd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80.jpg",
              slug: "seeq"
            },
            { 
              title: "ect-etc-tec", 
              thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.jpg",
              slug:"ect-etc-tec"
            },
            { 
              title: "Songkranizer", 
              thumbnail: "https://images.unsplash.com/photo-1555679792-6783ef0bbf61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg",
              slug: "songkranizer"
            }]
        },
        { year: '2019', works: 
          [{ 
              title: "seeq", 
              thumbnail: "https://images.unsplash.com/photo-1555853159-b23e1b1bebd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80.jpg",
              slug: "seeq"
            },
            { 
              title: "ect-etc-tec", 
              thumbnail: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.jpg",
              slug:"ect-etc-tec"
            },
            { 
              title: "Songkranizer", 
              thumbnail: "https://images.unsplash.com/photo-1555679792-6783ef0bbf61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg",
              slug: "songkranizer"
            }]
        },
        
      ],
      journalLists: [
        { title: "seeq"},
        { title: "ect-etc-tec"},
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
    pointer-events: none;
    color:  $color-black;
    /* -webkit-text-stroke: 1px $color-black; */
  }

   .journal-title{
    font-size: 18rem;
    font-weight: lighter;
    /* width: max-content; */
    /* height: 200px; */
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

  .journal-list-select{

    border-bottom: 1px solid white;
    &:hover{
      cursor: pointer;
      background-color: $main-color;
     p{ color: $color-black;}
    }

    &:last-child{ border-bottom: unset ;}
 
  }

</style>
