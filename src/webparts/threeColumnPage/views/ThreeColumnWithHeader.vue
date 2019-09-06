<template>
  <div>
    <header>
      <Navbar />
      <!-- HEADER -->
    </header>
    <main role="main" id="maincontainer" class="container">
      WOOHOO
    </main>
    <footer class="footer">
      <!-- <Footer /> -->
      FOOTER
    </footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '../components/Navbar.vue'
// import Footer from '../components/Footer'

@Component({
  components: {
    Navbar
  } 
}) 
export default class ThreeColumnWithHeader extends Vue {
    
}

</script>

<style lang="scss" module>

</style>