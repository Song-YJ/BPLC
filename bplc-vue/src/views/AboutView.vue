<template>
  <div class="about">
    <h1>This is an about page</h1>

    <br><br>
    <h1>Bootstrap Test</h1>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>

    <br><br>
    <h1>Vuex Test</h1>
    <h3>{{word}}</h3>

    <br><br>
    <h1>Axios Test</h1>
    <button type="button" class="btn btn-primary" @click="axiostest()">Axios</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex'
import { key } from '../store'
import http from '@/api/http'

export default defineComponent({
  name: 'Aboutview',
  computed: {
    word(){
      const store = useStore(key);
      return store.state.word
    }
  },
  methods: {
    axiostest(){
      http.get('/axiostest?test=1234')
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      })
    }
  }
});
</script>

<style scoped>
button{
  margin: 5px;
}
</style>