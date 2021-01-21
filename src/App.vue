<template>
  <div id="app">
    <WeatherApp />
    <span class="credit"><strong>Designed by PK KARN</strong></span>
  </div>
</template>

<script>
import WeatherApp from './components/WeatherApp';

export default {
  name: 'App',
  components: {
    WeatherApp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Paytone+One&family=Raleway:wght@500&display=swap');
body {
  background-image: url('./assets/back.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Raleway', sans-serif;
}
.heading {
  font-family: 'Paytone One', sans-serif;
  text-align: center;
  color: #333;
  font-size: 40px;
  -webkit-text-stroke-width: 0px;
  -webkit-text-stroke-color: rgb(218, 218, 218);
}

.heading span{
  color: yellow;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #333;
  text-shadow: 0px 0px 10px #333;
}
.credit{
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0.5;
  color: rgba(252, 255, 98, 0.746);
}

</style>
