<script setup lang="ts">
</script>

<template>
  <div id="app" class="box">
    <div class="head_bar">
      <div class="nav">
        <div class="nav-left">
          <RouterLink to="/"><img :src="logo" id="logo" /></RouterLink>
        </div>
        <div class="nav-mid">
          <ul class="top">
            <li>ce1</li>
            <li>ce2</li>
            <li>ce3</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="body">

    </div>
    <div class="last">

    </div>
  </div>
</template>

<style src="./css/index.css" />
<script lang="ts">
export default {
  name: 'app',
  data: function () {
    return {
      logo: 'https://photoserver-1303188987.cos.ap-guangzhou.myqcloud.com/web/head.jpg'
    }
  },
}
</script>
