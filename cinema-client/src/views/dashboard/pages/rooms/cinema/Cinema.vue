<template>
  <div id="cinema">
    <div class="split left">
      <div class="centered">
        <Screen/>
      </div>
    </div>
    <div class="split right">
      <div class="centered">
        <Messenger/>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Cinema",
  components: {
    Messenger: () => import('./Messenger'),
    Screen: () => import('./Screen'),
  },
}
</script>

<style scoped>
/* Split the screen in half */
.split {
  width: 50%;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Control the left side */
.left {
  left: 0;
  width: 60%;
  background-color: #111;
  float: left;
}

/* Control the right side */
.right {
  right: 0;
  width: 40%;
  background-color: red;
}


</style>
