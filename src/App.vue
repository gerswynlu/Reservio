<template>
    <div id="app">
      <Header />
      <router-view />
    </div>
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  
  export default {
    name: 'App'
  }
  </script>
  
  <style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    font-family:Arial, Helvetica, sans-serif;
  }
  .app {
    display: flex;
    height: fit-content;
    main {
      flex: 1 1 0;
      padding: 2rem;
  
      @media (max-width: 768px) {
        padding-left: 6rem;
      }
    }
  }
  </style>