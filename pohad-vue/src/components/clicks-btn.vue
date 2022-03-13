<template>
<button class="ripple" @click="increment">Clicks {{ count }}</button>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>



<style scoped>
button {
  position: relative;
  overflow: hidden;
  -webkit-transition: background 400ms;
  transition: background 400ms;
  color: #fff;
  background-color: #6200ee;
  padding: 1em 2rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.ripple {
  background-position: center;
  -webkit-transition: background 0.8s;
  transition: background 0.8s;
}
.ripple:hover {
  background: #6200ee radial-gradient(circle, transparent 1%, #6200ee 1%) center/15000%;
}
.ripple:active {
  background-color: #cfb2f9;
  background-size: 100%;
  -webkit-transition: background 0s;
  transition: background 0s;
}
</style>
