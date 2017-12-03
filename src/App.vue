<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }
  body {
    line-height: 1.6;
    font-family: -apple-system-font,Helvetica Neue,sans-serif;
  }
  * {
    margin: 0;
    padding: 0
  }
  img {
    border: 0;
    width: 100%;
  }
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: #666;
  }
  ul,li {
    list-style: none;
  }
  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }
  .btn-primary {
    position: relative;
    display: block;
    margin: auto 14px;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 2.55555556;
    text-align: center;
    text-decoration: none;
    color: #fff;
    border-radius: 5px;
    overflow: hidden;
    background-color: #1aad19;
  }
  .btn-primary:after {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid rgba(0, 0, 0, .2);
    transform: scale(.5);
    transform-origin: 0 0;
    box-sizing: border-box;
    border-radius: 10px;
  }
</style>
