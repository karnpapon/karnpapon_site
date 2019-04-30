<template>
    <div class="page-not-found">
      <div class="flex-col">
        <p class="title">404: Page Not Found</p>
        <p class="subtitle go-back-home" @click="handleClick"> go back to Home.</p>
      </div>
    </div>
</template>

<script>

export default {
  name: 'PageNotFound',
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

  },
  computed: {
  },
  methods: {
    handleClick(){
      this.$router.push({ path: '/'})
    }
  }
}
</script>

<style lang="scss"  scoped>
@import '../assets/styles/_base.scss';

  .page-not-found{
    background-color: $main-color;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .go-back-home{
    &:hover{
      cursor: pointer;
      color: $hover-color;
    }
  }


</style>
