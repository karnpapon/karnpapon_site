<template>
  <div class="column with-padding code-snippet">
    <p>
      HOME <br/>
      &nbsp;BREF : A basic term. <br/>
      &nbsp;TAGS : diary gallery <br/>
      &nbsp;BODY <br/>
        & Foo {(bold (link "sources"))}. <br/>
      &nbsp;λ (echo :children) 
    </p>  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { 
  FETCH_SELECTED_WORK,
  SET_SCROLL_TO 
} from "@/store/actions.type";

export default {
  name: 'CodeSnippet',
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

  .code-snippet{
    background-color: white;
    margin: $medium-padding;
    p {
      font-family: $font-input-mono;
      color: $color-black;
    }
  }
</style>
