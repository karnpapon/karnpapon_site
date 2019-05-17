<template>
  <div class="column is-3 w-light no-padding link-info">
    <div id="overview-console" class="position-sticky">

      <div class="with-padding ">
        <div 
          v-for="(data, index) of dataRender.links" 
          :key="index" 
          class="flex-wrapper width-auto">
          <span class="icon padding-right-small">
              <i v-if="data.type == 'website'" class="fas fa-link"></i>
              <i v-else-if="data.type == 'github'" class="fab fa-github"></i>
          </span>
          <a target="blank" :href='data.url'>
            <strong> {{ data.title }} </strong>
          </a>
        </div>
      </div>

      <div 
        v-if="dataRender.theme == 'work'" 
        class="inline-grid-wrapper with-padding cate-wrapper">
        <strong> Roles:</strong>
        <strong 
          v-for="(cate , cateIndex) of dataRender.categories" 
          :key="cateIndex" 
          class="tag-cat"
        >{{ cate.title}}</strong>
      </div>

      <div 
        v-else-if="dataRender.theme == 'about'" 
        class="inline-grid-wrapper with-padding cate-wrapper">
        <!-- <strong> About:</strong> -->
        <div class="tag-about">
          <div class="flex-col">
            <b>{{ dataRender.myname }}</b>
            <p>{{ dataRender.exp }}</p>
            <p>{{ dataRender.exp2 }}</p>
            <p>{{ dataRender.exp3 }}</p>
            <br/>
            <b>Speaks: </b>
            <p v-for="(lang, langIndex) of dataRender.language" :key="langIndex">- {{lang.lang}}</p>
            <br/>
            <b>Roles: </b>
            <p v-for="(role, roleIndex) of dataRender.roles" :key="roleIndex">- {{role.role}}</p>
          </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { 
} from "@/store/actions.type";


export default {
  name: 'WorkLinks',
  data(){
    return {
    }
  },
  mounted() {
  },
  created () {

  },
  destroyed () {
  },
  components: {
  },
  props: {
    dataRender: Object
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
   
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';
  .w-light{ font-weight: lighter; }
  .link-info{ 
    position: sticky;
    left: 0; 
  }
  .width-auto{ width: auto;}

  .cate-wrapper{ width: 50%; }
 
</style>
