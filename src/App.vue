<template>
  <div id="app">
    <HeaderUI/>
    <router-view/>
    <div class="components-back-top-demo-custom">
      <a-back-top>
        <div class="ant-back-top-inner">
          <a-icon type="up" />
        </div>
      </a-back-top>
    </div>
    <FooterUI/>
  </div>
</template>

<script>
import HeaderUI from "./components/Header";
import FooterUI from "./components/Footer";
export default {
  components:{
    HeaderUI,
    FooterUI
  },
  name: 'App'
}
</script>

<style>
/* #app{
  width:100vh;
} */
@import './assets/style/base.css';
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
.components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #fbc9b9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>
