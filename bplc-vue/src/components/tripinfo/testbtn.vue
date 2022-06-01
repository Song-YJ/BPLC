<template>
    <button onclick="location.href='/download/guidebook?filename=test'">download</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Testbtn',
  data(){
     
  },
  mounted(){
      
  },
  methods:{
      guidebookDownload: async function(selectedFilename){
          const axios = require('axios').default;
          await axios.get('/download/guidebook', {
              params: {
                filename: selectedFilename
              }
          })
          .then(function (response) {
              console.log(response);

          })
          .catch(function (error) {
              console.log(error);
          });
      }
  }
  
});
</script>