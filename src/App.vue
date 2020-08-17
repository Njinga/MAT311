<template>
    <div id="app">
        <Navbar></Navbar>
        <router-view />
        <tutor></tutor>
    </div>
</template>
<script>
    import Navbar from '@/components/Navbar.vue'
    import tutor from '@/components/Footer.vue'
    export default {
       components: {
            Navbar,
           tutor
        }
    }
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  margin-top: 70px;
  text-align: justify;
  color: #2c3e50;
}
</style>
