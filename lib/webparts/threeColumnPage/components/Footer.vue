<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark bg-black p-0">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item footer-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item footer-item">
        <a class="nav-link" href="starwars.com">Star Wars</a>
      </li>
      <li class="nav-item footer-item">
        <a class="nav-link" href="google.com">Google</a>
      </li>
      <li class="nav-item footer-item">
        <a class="nav-link" href="lego.com">Legos</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
html {
  position: relative;
  min-height: 100%;
}

body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}

#s4-workspace {
  height: auto !important;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px;
  /* Vertically center the text there */
  background-color: #000000;
}

.footer-item {
  min-width: 200px;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
}

.footer-item .nav-link {
  color: white !important;
  padding: 23px 1rem;
}

.bg-black {
  background-color: black !important;
}
</style>
