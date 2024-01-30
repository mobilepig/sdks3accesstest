<template>
  <h1>{{ data.test }}</h1>
  <button class="btn btn-primary" v-on:click="axiosTest()">axios테스트</button>

  <router-view></router-view>

  <button class="btn btn-danger" v-on:click="$router.push('/test')">
    test component
  </button>
  <button class="btn btn-danger" v-on:click="$router.push('/')">
    root component
  </button>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const data = reactive({
      test: "test data",
    });

    const axiosTest = () =>
      axios.get("/api/test").then((res) => {
        alert(res.data);
      });

    return {
      data,
      axiosTest,
    };
  },
};
</script>

<style lang="scss">
#app {
}
body {
  margin: 0;
}
.container {
}
</style>
